import { brand } from "@/lib/constants/brand";
import { socialLinks } from "@/lib/constants/social";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brand.name,
    url: brand.siteUrl,
    logo: new URL(brand.logoFull, brand.siteUrl).toString(),
    description: brand.description,
    identifier: brand.kvk,
    email: brand.email,
    telephone: brand.phone,
    foundingDate: String(brand.founded),
    address: {
      "@type": "PostalAddress",
      streetAddress: brand.address.street,
      postalCode: brand.address.postalCode,
      addressLocality: brand.address.city,
      addressCountry: "NL",
    },
    sameAs: socialLinks.map((s) => s.href),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: brand.name,
    url: brand.siteUrl,
    inLanguage: "nl-NL",
    publisher: {
      "@type": "Organization",
      name: brand.name,
      url: brand.siteUrl,
    },
  };
}

export function webPageJsonLd({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: new URL(path, brand.siteUrl).toString(),
    isPartOf: { "@type": "WebSite", url: brand.siteUrl },
    inLanguage: "nl-NL",
  };
}

export function contactPageJsonLd({
  description,
}: {
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact | ${brand.name}`,
    url: new URL("/contact", brand.siteUrl).toString(),
    description,
    isPartOf: { "@type": "WebSite", url: brand.siteUrl },
    about: {
      "@type": "Organization",
      name: brand.name,
      url: brand.siteUrl,
      sameAs: socialLinks.map((s) => s.href),
    },
    inLanguage: "nl-NL",
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, brand.siteUrl).toString(),
    })),
  };
}

export function blogPostingJsonLd({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  imageUrl,
}: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  imageUrl?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url: new URL(`/nieuws/${slug}`, brand.siteUrl).toString(),
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Organization",
      name: brand.name,
      url: brand.siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: brand.name,
      url: brand.siteUrl,
      logo: new URL(brand.logoFull, brand.siteUrl).toString(),
    },
    image: imageUrl,
    inLanguage: "nl",
  };
}

export function eventJsonLd({
  name,
  description,
  slug,
  startDate,
  endDate,
  locationName,
  locationAddress,
  imageUrl,
  isFree,
  organizer,
  status,
}: {
  name: string;
  description: string;
  slug: string;
  startDate: string;
  endDate?: string;
  locationName?: string;
  locationAddress?: string;
  imageUrl?: string;
  isFree?: boolean;
  organizer?: string;
  status?: "upcoming" | "past" | "cancelled";
}) {
  const eventStatus =
    status === "cancelled"
      ? "https://schema.org/EventCancelled"
      : "https://schema.org/EventScheduled";

  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name,
    description,
    url: new URL(`/agenda/${slug}`, brand.siteUrl).toString(),
    startDate,
    endDate,
    eventStatus,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: locationName
      ? {
          "@type": "Place",
          name: locationName,
          address: locationAddress,
        }
      : undefined,
    image: imageUrl,
    isAccessibleForFree: isFree,
    organizer: {
      "@type": "Organization",
      name: organizer ?? brand.name,
      url: brand.siteUrl,
    },
    inLanguage: "nl",
  };
}
