import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { schemaTypes } from "./src/sanity/schemas";
import { studioStructure } from "./src/sanity/structure";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export default defineConfig({
  name: "lumina-collective",
  title: "Lumina Collective",
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [structureTool({ structure: studioStructure })],
  schema: {
    types: schemaTypes,
  },
});
