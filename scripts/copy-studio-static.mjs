import { cpSync, existsSync, rmSync } from "node:fs";
import { join } from "node:path";

const source = join(process.cwd(), "public", "studio", "static");
const target = join(process.cwd(), "public", "static");

rmSync(target, { recursive: true, force: true });

if (!existsSync(source)) {
  throw new Error("Sanity Studio static assets were not generated.");
}

cpSync(source, target, { recursive: true });
