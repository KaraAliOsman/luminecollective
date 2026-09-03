import assert from "node:assert/strict";
import { afterEach, beforeEach, test } from "node:test";
import { isEmailConfigured, sendNotification } from "../src/lib/email/sendNotification.ts";
import { contactFormSchema, volunteerFormSchema, newsletterFormSchema } from "../src/lib/validation/forms.ts";
import { readFormRequest } from "../src/lib/utils/requestPayload.ts";
import { checkRateLimit } from "../src/lib/utils/rateLimit.ts";

const original = { key: process.env.RESEND_API_KEY, from: process.env.FORMS_FROM_EMAIL };
beforeEach(() => { process.env.RESEND_API_KEY = "test-only"; process.env.FORMS_FROM_EMAIL = "test@example.org"; });
afterEach(() => {
  for (const [key, value] of Object.entries({ RESEND_API_KEY: original.key, FORMS_FROM_EMAIL: original.from })) {
    if (value === undefined) delete process.env[key]; else process.env[key] = value;
  }
});

const contact = { name: "Test Bezoeker", email: "test@example.org", subject: "Kennismaking", message: "Een geldig testbericht.", consent: true, website: "" };
const notification = { to: "foundation@example.org", replyTo: "visitor@example.org", subject: "Contact", intro: "Nieuw bericht", fields: { Bericht: '<script>"test"</script>\nTweede regel', Consent: true } };

test("contact validation requires consent, valid email and bounded fields", () => {
  assert.equal(contactFormSchema.safeParse(contact).success, true);
  for (const change of [{ consent: false }, { email: "invalid" }, { message: "short" }, { message: "a".repeat(5001) }, { website: "spam" }, { name: "a".repeat(101) }]) {
    assert.equal(contactFormSchema.safeParse({ ...contact, ...change }).success, false);
  }
});
test("volunteer and update requests enforce expected values", () => {
  assert.equal(volunteerFormSchema.safeParse({ ...contact, interest: "Organisatie", phone: "" }).success, true);
  assert.equal(volunteerFormSchema.safeParse({ ...contact, interest: "unexpected" }).success, false);
  assert.equal(newsletterFormSchema.safeParse({ email: contact.email, consent: true }).success, true);
  assert.equal(newsletterFormSchema.safeParse({ email: contact.email, consent: false }).success, false);
});
test("unconfigured email never claims successful delivery", async t => {
  delete process.env.RESEND_API_KEY;
  const fetchMock = t.mock.method(globalThis, "fetch", () => { throw new Error("must not call provider"); });
  assert.equal(isEmailConfigured(), false);
  assert.deepEqual(await sendNotification(notification), { delivered: false, reason: "unavailable" });
  assert.equal(fetchMock.mock.callCount(), 0);
});
test("provider receipt is required and HTML is escaped", async t => {
  let sent;
  t.mock.method(globalThis, "fetch", async (_url, options) => {
    sent = JSON.parse(options.body);
    return Response.json({ id: "test-receipt" });
  });
  assert.equal((await sendNotification(notification)).delivered, true);
  assert.equal(sent.reply_to, notification.replyTo);
  assert.deepEqual(sent.to, [notification.to]);
  assert.ok(sent.html.includes("&lt;script&gt;&quot;test&quot;&lt;/script&gt;<br>"));
  assert.ok(!sent.html.includes("<script>"));
  assert.ok(sent.text.includes('<script>"test"</script>'));
});
test("provider rejection, malformed receipt and network failure cannot return success", async t => {
  t.mock.method(console, "error", () => {});
  const mock = t.mock.method(globalThis, "fetch", async () => Response.json({ error: "rejected" }, { status: 403 }));
  assert.equal((await sendNotification(notification)).reason, "rejected");
  mock.mock.mockImplementation(async () => Response.json({}));
  assert.equal((await sendNotification(notification)).reason, "invalid-response");
  mock.mock.mockImplementation(async () => { throw new Error("network"); });
  assert.equal((await sendNotification(notification)).reason, "network");
});

function request(body, headers = {}) { return new Request("https://example.org/api/contact", { method: "POST", headers: { "content-type": "application/json", ...headers }, body }); }
test("request parser accepts same-origin JSON and rejects invalid origins and bodies", async () => {
  const good = await readFormRequest(request(JSON.stringify(contact), { origin: "https://example.org" }));
  assert.equal(good.ok, true);
  assert.deepEqual(good.data, contact);
  assert.equal((await readFormRequest(request("{}", { origin: "https://other.example" }))).status, 403);
  assert.equal((await readFormRequest(request("{}", { "content-type": "text/plain" }))).status, 415);
  assert.equal((await readFormRequest(request("invalid"))).status, 400);
  assert.equal((await readFormRequest(request("a".repeat(32769)))).status, 413);
});
test("rate limiter blocks repeated requests and resets expired buckets", t => {
  const clock = t.mock.method(Date, "now", () => 1000);
  assert.equal(checkRateLimit({ key: "test-bucket", limit: 2, windowMs: 100 }).allowed, true);
  assert.equal(checkRateLimit({ key: "test-bucket", limit: 2, windowMs: 100 }).remaining, 0);
  assert.equal(checkRateLimit({ key: "test-bucket", limit: 2, windowMs: 100 }).allowed, false);
  clock.mock.mockImplementation(() => 1101);
  assert.equal(checkRateLimit({ key: "test-bucket", limit: 2, windowMs: 100 }).allowed, true);
});
