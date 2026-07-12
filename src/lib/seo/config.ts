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
  const imageUrl = new URL(ogImage || brand.logoSocial || brand.logoFull, brand.siteUrl).toString();

  return {
    applicationName: brand.name,
    title: pageTitle,
    description,
    metadataBase: new URL(brand.siteUrl),
    manifest: "/manifest.webmanifest",
    category: "community organization",
    keywords: [
      "Stichting Lumina Collective",
      "Lumina Collective",
      "vrouwen Tilburg",
      "community Tilburg",
      "sociaal maatschappelijk welzijnswerk",
      "vrouwen ontmoeten",
    ],
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/brand/logo-mark.png", type: "image/png" },
      ],
      apple: [{ url: "/brand/logo-mark.png", type: "image/png" }],
    },
    alternates: {
      canonical: url,
      languages: {
        "nl-NL": url,
        "x-default": url,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
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
