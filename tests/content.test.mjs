import assert from "node:assert/strict";
import { test } from "node:test";
import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { formatDate, formatTime, validDate } from "../src/lib/utils/dates.ts";
import { legacyProgramSlugs } from "../src/data/redirects.ts";

test("event dates use Dutch local time, including daylight saving", () => {
  assert.equal(formatTime("2026-09-02T12:00:00Z"), "14:00");
  assert.equal(formatTime("2026-01-02T12:00:00Z"), "13:00");
  assert.equal(formatDate("2026-09-02T23:30:00Z"), "3 september 2026");
  assert.equal(validDate("invalid"), undefined);
  assert.equal(formatDate(undefined), "Datum volgt");
});
test("all six previous program URLs have a destination", () => {
  assert.equal(Object.keys(legacyProgramSlugs).length, 6);
  assert.equal(legacyProgramSlugs["ontmoeting-community"], "ontmoeting-verbinding");
  for (const [from, to] of Object.entries(legacyProgramSlugs)) assert.notEqual(from, to);
});
test("public policy PDF matches the original supplied document", async () => {
  const bytes = await readFile(new URL("../public/documenten/beleidsplan-lumina-2026-2030.pdf", import.meta.url));
  assert.equal(bytes.subarray(0, 5).toString(), "%PDF-");
  assert.equal(createHash("sha256").update(bytes).digest("hex"), "cbe36cad43ba1e8eaad8bdb6960ea79357aea1959b39b48200086166e373eb24");
});
