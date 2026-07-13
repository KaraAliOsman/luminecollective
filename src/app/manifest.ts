import type { MetadataRoute } from "next";

import { brand } from "@/lib/constants/brand";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: brand.name,
    short_name: brand.shortName,
    description: brand.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f7f1e8",
    theme_color: "#42152f",
    lang: "nl-NL",
    categories: ["community", "education", "lifestyle"],
    icons: [
      {
        src: "/brand/logo-mark.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
