import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

const rules = (await readFile(new URL("../public/_redirects", import.meta.url), "utf8"))
  .split(/\r?\n/)
  .map(line => line.trim())
  .filter(line => line && !line.startsWith("#"))
  .map(line => line.split(/\s+/));

const rewriteFor = path => rules.find(([source]) =>
  source === path || (source.endsWith("*") && path.startsWith(source.slice(0, -1)))
);

test("Studio client-side URLs serve the Studio shell on direct visits", () => {
  for (const path of [
    "/studio/structure",
    "/studio/structure/buradanBasla",
    "/studio/structure/icerikOlustur;post",
    "/studio/structure/icerikOlustur;event",
    "/studio/releases",
    "/studio/releases/example-release",
    "/studio/intent",
    "/studio/intent/create/type=post",
  ]) {
    const rule = rewriteFor(path);
    assert.ok(rule, `${path} needs a Studio rewrite`);
    assert.equal(rule[1], "/studio/");
    assert.equal(rule[2], "200");
    assert.equal(rule.length, 3);
  }
});

test("Studio rewrites leave assets, public pages and APIs untouched", () => {
  for (const path of [
    "/studio/static/sanity.js",
    "/studio/static/manifest.webmanifest",
    "/studio/static/missing-chunk.js",
    "/studio/brand/logo.png",
    "/studio/favicon.ico",
    "/",
    "/over-ons",
    "/api/contact",
    "/this-page-does-not-exist",
  ]) {
    assert.equal(rewriteFor(path), undefined, `${path} must not serve Studio HTML`);
  }
});
