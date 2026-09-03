import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { setTimeout } from "node:timers/promises";

const base = process.argv[2] || "http://127.0.0.1:3100";
const expectedRelease = process.argv[3];
const get = (path, options = {}) => fetch(new URL(path, base), { ...options, signal: AbortSignal.timeout(30000), cache: "no-store" });

if (expectedRelease) {
  let live;
  for (let attempt = 0; attempt < 24; attempt++) {
    live = await get(`/api/health?release=${expectedRelease}`).then(r => r.json()).catch(() => null);
    if (live?.release === expectedRelease) break;
    await setTimeout(5000);
  }
  assert.equal(live?.release, expectedRelease, "The Worker is not serving the expected commit");
}

for (const path of ["/", "/over-ons", "/programmas", "/anbi", "/contact", "/doe-mee", "/agenda", "/gemeenschap", "/nieuws", "/privacy", "/cookies", "/fotografie", "/programmas/ontmoeting-verbinding", "/nieuws/waarom-lumina-bestaat"]) {
  const response = await get(path);
  assert.equal(response.status, 200, `${path} status`);
  const html = await response.text();
  assert.ok(html.includes("<h1"), `${path} needs a heading`);
  assert.ok(!html.includes("Application error: a server-side exception"), `${path} runtime error`);
  if (path === "/anbi") {
    for (const expected of ["beleidsplan-lumina-2026-2030.pdf", "Yasemin", "RSIN", "42082909"]) assert.ok(html.includes(expected), `ANBI page missing ${expected}`);
  }
  console.log(`OK ${path}`);
}

for (const file of ["samen-buiten", "ontmoeten", "in-gesprek", "samen-leren", "verbinding", "creatief", "jongeren", "vrijwilligers"]) {
  const response = await get(`/images/${file}.webp`);
  assert.equal(response.status, 200, `Photo ${file}`);
  assert.ok(response.headers.get("content-type")?.startsWith("image/"));
  assert.ok((await response.arrayBuffer()).byteLength > 10000);
}

const pdf = await get("/documenten/beleidsplan-lumina-2026-2030.pdf");
assert.equal(pdf.status, 200);
assert.ok(pdf.headers.get("content-type")?.includes("application/pdf"));
assert.equal(pdf.headers.get("x-frame-options"), "SAMEORIGIN", "The policy PDF must be embeddable on the ANBI page");
assert.equal(createHash("sha256").update(Buffer.from(await pdf.arrayBuffer())).digest("hex"), "cbe36cad43ba1e8eaad8bdb6960ea79357aea1959b39b48200086166e373eb24");
console.log("OK original policy PDF and eight licensed photographs");

const redirect = await get("/programmas/ontmoeting-community", { redirect: "manual" });
assert.equal(redirect.status, 308);
assert.ok(redirect.headers.get("location")?.endsWith("/programmas/ontmoeting-verbinding"));
const status = await get("/api/forms/status").then(r => r.json());
assert.equal(typeof status.available, "boolean");
for (const form of ["contact", "volunteer", "newsletter"]) {
  const response = await get(`/api/${form}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: "{}" });
  assert.equal(response.status, 400, `${form} must reject invalid input without sending email`);
}
assert.equal((await get("/this-page-does-not-exist")).status, 404);
const sitemap = await get("/sitemap.xml").then(r => r.text());
assert.ok(sitemap.includes("/anbi"));
assert.ok(sitemap.includes("/nieuws/waarom-lumina-bestaat"));
assert.equal((await get("/studio")).status, 200);
console.log(`OK redirects, validation, 404, sitemap and Studio. Native email configured: ${status.available}`);
