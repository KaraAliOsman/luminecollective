import assert from "node:assert/strict";
import { test } from "node:test";
import { readFile } from "node:fs/promises";
import { photography } from "../src/data/placeholders.ts";
import { socialLinks } from "../src/lib/constants/social.ts";

test("fallback photographs have local assets, descriptions and provenance", async () => {
  const photos = [...new Map(Object.values(photography).map(photo => [photo.src, photo])).values()];
  for (const photo of photos) {
    assert.ok(photo.alt.trim().length > 20, `${photo.src} needs descriptive alt text`);
    assert.ok(photo.credit.trim());
    assert.ok(photo.src.startsWith("/images/"));
    assert.equal(new URL(photo.sourceUrl).protocol, "https:");
    const bytes = await readFile(new URL(`../public${photo.src}`, import.meta.url));
    assert.equal(bytes.subarray(0, 4).toString(), "RIFF");
    assert.equal(bytes.subarray(8, 12).toString(), "WEBP");
    assert.ok(bytes.length < 350000, `${photo.src} exceeds the image budget`);
  }
});

test("Lumina originals and supplementary stock are clearly distinguished", () => {
  const originals = Object.values(photography).filter(photo => photo.credit === "Stichting Lumina Collective");
  assert.equal(new Set(originals.map(photo => photo.src)).size, 6);
  for (const photo of originals) {
    assert.equal(photo.isPreview, false);
    assert.equal(new URL(photo.sourceUrl).hostname, "www.instagram.com");
    assert.ok(new URL(photo.sourceUrl).pathname.startsWith("/stichtingluminacollective/p/"));
  }
  assert.equal(photography.learning.isPreview, true);
  assert.ok(photography.learning.credit.includes("Pexels"));
});

test("the footer uses the organization's confirmed Instagram profile", () => {
  assert.equal(socialLinks.find(link => link.label === "Instagram")?.href, "https://www.instagram.com/stichtingluminacollective/");
  assert.equal(socialLinks.find(link => link.label === "Facebook")?.href, "https://www.facebook.com/stichtinglumina");
});
