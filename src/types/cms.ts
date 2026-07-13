import type { VisualPlaceholder } from "@/data/placeholders";

export type SanityImageLike = {
  asset?: unknown;
  alt?: string;
  caption?: string;
  credit?: string;
  isPlaceholder?: boolean;
};

export type NavigationItem = {
  label: string;
  href: string;
};

export type HomeSection =
  | { _key?: string; _type: "homeManifesto"; eyebrow?: string; title?: string; accent?: string; items?: Array<{ _key?: string; title?: string; text?: string }> }
  | { _key?: string; _type: "homePrograms"; eyebrow?: string; title?: string; accent?: string; intro?: string; limit?: number; footerPrompt?: string; linkLabel?: string }
  | { _key?: string; _type: "homeEvent"; eyebrow?: string; badge?: string; buttonLabel?: string }
  | { _key?: string; _type: "homeGallery"; eyebrow?: string; title?: string; accent?: string; limit?: number; linkLabel?: string }
  | { _key?: string; _type: "homeTestimonial"; eyebrow?: string }
  | { _key?: string; _type: "homePartners"; eyebrow?: string; limit?: number }
  | { _key?: string; _type: "homeCta"; eyebrow?: string; title?: string; accent?: string; text?: string; primary?: NavigationItem; secondary?: NavigationItem };

export type SiteSettings = {
  siteTitle: string;
  siteDescription: string;
  defaultOgImage?: SanityImageLike;
  logoFull?: SanityImageLike;
  logoMark?: SanityImageLike;
  logoFullUrl?: string;
  logoMarkUrl?: string;
  defaultOgImageUrl?: string;
  contactEmail?: string;
  socialLinks: Array<{ label: string; href: string }>;
  footerText: string;
  donationEnabled: boolean;
  donationUrl?: string;
  newsletterEnabled: boolean;
  brandPrimaryText: string;
  brandSecondaryText: string;
  navigation: NavigationItem[];
  headerCta: NavigationItem;
  address: {
    street: string;
    postalCode: string;
    city: string;
    country: string;
  };
  isFallback: boolean;
};

export type PageDisplay = {
  title: string;
  slug: string;
  pageKey: string;
  heroTitle: string;
  heroText: string;
  heroImage?: SanityImageLike;
  body?: unknown[];
  seoTitle?: string;
  metaDescription?: string;
  heroEyebrow?: string;
  heroPrimary?: NavigationItem;
  heroSecondary?: NavigationItem;
  heroBadge?: string;
  heroCaption?: string;
  heroTicker?: string[];
  homeSections?: HomeSection[];
  isFallback: boolean;
};

export type PostDisplay = {
  title: string;
  slug: string;
  category: string;
  publishedAt: string;
  author: string;
  excerpt: string;
  image?: SanityImageLike;
  body?: unknown[];
  bodyText?: string;
  visual: VisualPlaceholder;
  seoTitle?: string;
  metaDescription?: string;
  isPreview: boolean;
  isFallback: boolean;
};

export type ProgramDisplay = {
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  image?: SanityImageLike;
  visual: VisualPlaceholder;
  category?: string;
  targetAudience?: string;
  goals: string[];
  ctaLabel: string;
  ctaHref: string;
  seoTitle?: string;
  metaDescription?: string;
  isFallback: boolean;
};

export type EventDisplay = {
  title: string;
  slug: string;
  description: string;
  date: string;
  time?: string;
  dateStart?: string;
  dateEnd?: string;
  location: string;
  locationName?: string;
  locationAddress?: string;
  registrationUrl?: string;
  isFree: boolean;
  priceDescription?: string;
  capacity?: number;
  image?: SanityImageLike;
  visual: VisualPlaceholder;
  status: "upcoming" | "past" | "cancelled";
  cta: string;
  seoTitle?: string;
  metaDescription?: string;
  isPlaceholder: boolean;
  isFallback: boolean;
};

export type GalleryItemDisplay = {
  id: string;
  image?: SanityImageLike;
  visual: VisualPlaceholder;
  alt: string;
  caption?: string;
  credit?: string;
  isPlaceholder: boolean;
  isFallback: boolean;
};

export type TeamMemberDisplay = {
  name: string;
  role: string;
  bio?: string;
  portrait?: SanityImageLike;
  email?: string;
};

export type PartnerDisplay = {
  name: string;
  logo?: SanityImageLike;
  website?: string;
  description?: string;
};

export type TestimonialDisplay = {
  quote: string;
  name: string;
  roleOrContext?: string;
  image?: SanityImageLike;
  anonymous: boolean;
};
