import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const apiVersion = "2024-01-01";

/**
 * Public read client — used in Server Components for fetching published content.
 * Falls back gracefully when NEXT_PUBLIC_SANITY_PROJECT_ID is not set (local dev without CMS).
 */
export const sanityClient = createClient({
  projectId: projectId ?? "placeholder",
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
  stega: false,
});

/**
 * Returns true if Sanity is configured for this environment.
 * Use this guard before making fetch calls to avoid build errors.
 */
export const isSanityConfigured =
  typeof projectId === "string" && projectId.length > 0;
