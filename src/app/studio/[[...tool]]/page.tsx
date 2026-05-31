import Link from "next/link";

/**
 * Sanity Studio embedded at /studio.
 *
 * This route is excluded from static build and only renders server-side.
 * Access is blocked by robots.txt — not indexed.
 *
 * NOTE: The Studio requires NEXT_PUBLIC_SANITY_PROJECT_ID to be set.
 * Without it, a placeholder page is shown.
 */

export const dynamic = "force-dynamic";

// Re-export Sanity's metadata + viewport so Next.js picks them up.
export { metadata, viewport } from "next-sanity/studio";

export default async function StudioPage() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

  if (!projectId) {
    return (
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Arial, sans-serif",
          flexDirection: "column",
          gap: "1rem",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "1.5rem", color: "#42152f" }}>
          Sanity Studio — niet geconfigureerd
        </h1>
        <p style={{ color: "#5c4232", maxWidth: "40ch" }}>
          Voeg <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> toe aan{" "}
          <code>.env.local</code> om de Studio te activeren.
        </p>
        <Link
          href="/"
          style={{ color: "#42152f", textDecoration: "underline" }}
        >
          ← Terug naar de website
        </Link>
      </div>
    );
  }

  // Dynamic import to avoid SSG errors when Sanity is not configured.
  const { StudioClient } = await import("../StudioClient");
  return <StudioClient />;
}
