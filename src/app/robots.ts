import type { MetadataRoute } from "next";

import { brand } from "@/lib/constants/brand";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/studio/", "/preview/", "/drafts/"],
    },
    sitemap: new URL("/sitemap.xml", brand.siteUrl).toString(),
  };
}
