import { isSanityConfigured, sanityClient } from "./client";

type FetchOptions = {
  /** Next.js revalidation in seconds. Default: 60. Pass 0 to disable caching. */
  revalidate?: number;
  /** Tags for on-demand revalidation via webhooks. */
  tags?: string[];
};

/**
 * Fetch data from Sanity with ISR support.
 * Returns `null` (not throwing) when Sanity is not configured,
 * so pages can render with fallback data during local development.
 */
export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
  { revalidate = 60, tags }: FetchOptions = {},
): Promise<T | null> {
  if (!isSanityConfigured) return null;

  try {
    return await sanityClient.fetch<T>(query, params, {
      next: {
        revalidate: tags ? false : revalidate,
        tags,
      },
    });
  } catch (err) {
    // Surface errors in development; fail silently in production.
    if (process.env.NODE_ENV === "development") {
      console.error("[sanityFetch] error:", err);
    }
    return null;
  }
}
