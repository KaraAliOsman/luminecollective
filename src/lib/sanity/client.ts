import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "user9c35";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const apiVersion = "2024-01-01";

/**
 * Public read client — used in Server Components for fetching published content.
 * Falls back to the public Lumina Sanity project when the runtime variable is missing.
 */
export const sanityClient = createClient({
  projectId,
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
