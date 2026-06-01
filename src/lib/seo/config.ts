import type { Metadata } from "next";

import { brand } from "@/lib/constants/brand";

type SeoInput = {
  title?: string;
  description?: string;
  path?: string;
  siteName?: string;
  ogImage?: string;
};

export function createMetadata({
  title,
  description = brand.description,
  path = "/",
  siteName = brand.name,
  ogImage,
}: SeoInput = {}): Metadata {
  const pageTitle = title ? `${title} | ${siteName}` : siteName;
  const url = new URL(path, brand.siteUrl).toString();
  const imageUrl = new URL(ogImage || brand.logoFull, brand.siteUrl).toString();

  return {
    title: pageTitle,
    description,
    metadataBase: new URL(brand.siteUrl),
    alternates: {
      canonical: url,
      languages: {
        "nl-NL": url,
        "x-default": url,
      },
    },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName,
      locale: "nl_NL",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1600,
          height: 1200,
          alt: siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [imageUrl],
    },
  };
}
