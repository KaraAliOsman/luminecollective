import type { MetadataRoute } from "next";

import { brand } from "@/lib/constants/brand";
import { getEventSlugs, getProgramSlugs, getPostSlugs } from "@/lib/cms/content";

export const dynamic = "force-static";

const staticRoutes = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/over-ons", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/programmas", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/agenda", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/doe-mee", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/gemeenschap", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/nieuws", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/cookies", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/anbi", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/fotografie", priority: 0.2, changeFrequency: "yearly" as const },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [programSlugs, eventSlugs, postSlugs] = await Promise.all([
    getProgramSlugs(),
    getEventSlugs(),
    getPostSlugs(),
  ]);

  const dynamicRoutes = [
    ...postSlugs.map(({ slug }) => ({ path: `/nieuws/${slug}`, priority: 0.6, changeFrequency: "monthly" as const })),
    ...programSlugs.map(({ slug }) => ({
      path: `/programmas/${slug}`,
      priority: 0.65,
      changeFrequency: "monthly" as const,
    })),
    ...eventSlugs.map(({ slug }) => ({
      path: `/agenda/${slug}`,
      priority: 0.65,
      changeFrequency: "weekly" as const,
    })),
  ];

  return [...staticRoutes, ...dynamicRoutes].map(
    ({ path, priority, changeFrequency }) => ({
    url: new URL(path, brand.siteUrl).toString(),
    lastModified: new Date(),
    changeFrequency,
    priority,
    }),
  );
}
