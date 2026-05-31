// ─── Shared ────────────────────────────────────────────────────────────────

export type SanityImage = {
  _type: "image";
  asset: { _ref: string; _type: "reference" };
  hotspot?: { x: number; y: number; height: number; width: number };
  alt?: string;
  caption?: string;
  credit?: string;
};

export type SanitySlug = {
  _type: "slug";
  current: string;
};

export type SanityBlock = {
  _key: string;
  _type: "block";
  children: Array<{ _key: string; _type: string; marks: string[]; text: string }>;
  markDefs: Array<{ _key: string; _type: string; href?: string }>;
  style: string;
};

// ─── Program ───────────────────────────────────────────────────────────────

export type SanityProgram = {
  _id: string;
  _type: "program";
  title: string;
  slug: SanitySlug;
  shortDescription: string;
  longDescription?: SanityBlock[];
  featuredImage?: SanityImage;
  category?: string;
  targetAudience?: string;
  goals?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  seoTitle?: string;
  metaDescription?: string;
};

// ─── Event ─────────────────────────────────────────────────────────────────

export type EventStatus = "upcoming" | "past" | "cancelled";

export type SanityEvent = {
  _id: string;
  _type: "event";
  title: string;
  slug: SanitySlug;
  status: EventStatus;
  dateStart: string;
  dateEnd?: string;
  locationName?: string;
  locationAddress?: string;
  description?: SanityBlock[];
  isFree?: boolean;
  priceDescription?: string;
  capacity?: number;
  registrationUrl?: string;
  featuredImage?: SanityImage;
  seoTitle?: string;
  metaDescription?: string;
};

// ─── Post ──────────────────────────────────────────────────────────────────

export type PostCategory =
  | "nieuws"
  | "verhalen"
  | "interviews"
  | "terugblik"
  | "kennis"
  | "persbericht";

export type SanityPost = {
  _id: string;
  _type: "post";
  title: string;
  slug: SanitySlug;
  category: PostCategory;
  publishedAt: string;
  author?: string;
  excerpt: string;
  featuredImage?: SanityImage;
  body?: SanityBlock[];
  seoTitle?: string;
  metaDescription?: string;
};

// ─── Gallery ───────────────────────────────────────────────────────────────

export type GalleryVisibility = "public" | "private" | "internal";

export type SanityGalleryItem = {
  _id: string;
  _type: "galleryItem";
  image: SanityImage;
  alt: string;
  caption?: string;
  credit?: string;
  date?: string;
  visibility: GalleryVisibility;
  consentConfirmed: boolean;
  isPlaceholder?: boolean;
};

// ─── Team & Partners ───────────────────────────────────────────────────────

export type SanityTeamMember = {
  _id: string;
  _type: "teamMember";
  name: string;
  role: string;
  bio?: string;
  portrait?: SanityImage;
  email?: string;
  order: number;
  visible: boolean;
};

export type SanityPartner = {
  _id: string;
  _type: "partner";
  name: string;
  logo?: SanityImage;
  website?: string;
  description?: string;
  visible: boolean;
  order: number;
};

// ─── Testimonial ───────────────────────────────────────────────────────────

export type SanityTestimonial = {
  _id: string;
  _type: "testimonial";
  quote: string;
  name?: string;
  roleOrContext?: string;
  image?: SanityImage;
  anonymous: boolean;
  approvedForPublication: boolean;
  order: number;
};

// ─── Global Settings ───────────────────────────────────────────────────────

export type SanityGlobalSettings = {
  _id: string;
  _type: "globalSettings";
  siteTitle?: string;
  siteDescription?: string;
  logoFull?: SanityImage;
  logoMark?: SanityImage;
  defaultOgImage?: SanityImage;
  contactEmail?: string;
  socialLinks?: Array<{ platform: string; url: string }>;
  footerText?: string;
  newsletterEnabled?: boolean;
  donationEnabled?: boolean;
  donationUrl?: string;
};
