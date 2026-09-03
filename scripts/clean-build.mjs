import { existsSync, realpathSync, rmSync } from "node:fs";
import { resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const workspace = realpathSync(fileURLToPath(new URL("../", import.meta.url)));
for (const directory of [".next", ".open-next"]) {
  const target = resolve(workspace, directory);
  if (!existsSync(target)) continue;
  if (!realpathSync(target).startsWith(workspace + sep)) throw new Error(`Refusing to clean outside the workspace: ${target}`);
  rmSync(target, { recursive: true, force: true });
  console.log(`Cleaned ${directory}`);
}
