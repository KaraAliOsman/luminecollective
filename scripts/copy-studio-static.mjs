import { cpSync, existsSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const source = join(process.cwd(), "public", "studio", "static");
const target = join(process.cwd(), "public", "static");
const indexPath = join(process.cwd(), "public", "studio", "index.html");
const manifestPath = join(process.cwd(), "public", "studio", "static", "manifest.webmanifest");

rmSync(target, { recursive: true, force: true });

if (!existsSync(source)) {
  throw new Error("Sanity Studio static assets were not generated.");
}

cpSync(source, target, { recursive: true });

if (existsSync(indexPath)) {
  const html = readFileSync(indexPath, "utf8")
    .replaceAll('href="/static/', 'href="/studio/static/')
    .replaceAll('src="/static/', 'src="/studio/static/');
  writeFileSync(indexPath, html);
}

if (existsSync(manifestPath)) {
  const manifest = readFileSync(manifestPath, "utf8").replaceAll('"/static/', '"/studio/static/');
  writeFileSync(manifestPath, manifest);
}
