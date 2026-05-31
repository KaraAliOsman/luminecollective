import { groq } from "next-sanity";

// Reusable image fragment
const imageFragment = groq`{
  asset,
  hotspot,
  crop,
  alt,
  caption,
  credit
}`;

// ─── Programs ──────────────────────────────────────────────────────────────

export const programsQuery = groq`*[_type == "program"] | order(title asc) {
  _id,
  title,
  slug,
  shortDescription,
  featuredImage ${imageFragment},
  category,
  ctaLabel,
  ctaHref
}`;

export const programBySlugQuery = groq`*[_type == "program" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  shortDescription,
  longDescription,
  featuredImage ${imageFragment},
  category,
  targetAudience,
  goals,
  ctaLabel,
  ctaHref,
  seoTitle,
  metaDescription
}`;

export const programSlugsQuery = groq`*[_type == "program"] { "slug": slug.current }`;

// ─── Events ────────────────────────────────────────────────────────────────

export const upcomingEventsQuery = groq`*[_type == "event" && status == "upcoming"] | order(dateStart asc) {
  _id,
  title,
  slug,
  status,
  dateStart,
  dateEnd,
  locationName,
  isFree,
  priceDescription,
  featuredImage ${imageFragment},
  description[0..1]
}`;

export const allEventsQuery = groq`*[_type == "event"] | order(dateStart desc) {
  _id,
  title,
  slug,
  status,
  dateStart,
  dateEnd,
  locationName,
  isFree,
  featuredImage ${imageFragment}
}`;

export const eventBySlugQuery = groq`*[_type == "event" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  status,
  dateStart,
  dateEnd,
  locationName,
  locationAddress,
  description,
  isFree,
  priceDescription,
  capacity,
  registrationUrl,
  featuredImage ${imageFragment},
  seoTitle,
  metaDescription
}`;

export const eventSlugsQuery = groq`*[_type == "event"] { "slug": slug.current }`;

// ─── Posts ─────────────────────────────────────────────────────────────────

export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  category,
  publishedAt,
  author,
  excerpt,
  featuredImage ${imageFragment}
}`;

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  category,
  publishedAt,
  author,
  excerpt,
  featuredImage ${imageFragment},
  body,
  seoTitle,
  metaDescription
}`;

export const relatedPostsQuery = groq`*[_type == "post" && slug.current != $slug && category == $category] | order(publishedAt desc)[0..2] {
  _id,
  title,
  slug,
  category,
  publishedAt,
  excerpt,
  featuredImage ${imageFragment}
}`;

export const postSlugsQuery = groq`*[_type == "post"] { "slug": slug.current }`;

// ─── Gallery ───────────────────────────────────────────────────────────────

export const publicGalleryQuery = groq`*[
  _type == "galleryItem" &&
  visibility == "public" &&
  consentConfirmed == true
] | order(date desc) {
  _id,
  image ${imageFragment},
  alt,
  caption,
  credit,
  date
}`;

// ─── Team, Partners, Testimonials ──────────────────────────────────────────

export const teamQuery = groq`*[_type == "teamMember" && visible == true] | order(order asc) {
  _id,
  name,
  role,
  bio,
  portrait ${imageFragment},
  email
}`;

export const partnersQuery = groq`*[_type == "partner" && visible == true] | order(order asc) {
  _id,
  name,
  logo ${imageFragment},
  website,
  description
}`;

export const testimonialsQuery = groq`*[
  _type == "testimonial" &&
  approvedForPublication == true
] | order(order asc) {
  _id,
  quote,
  name,
  roleOrContext,
  image ${imageFragment},
  anonymous
}`;

// ─── Global Settings ───────────────────────────────────────────────────────

export const globalSettingsQuery = groq`*[_type == "globalSettings"][0] {
  siteTitle,
  siteDescription,
  logoFull ${imageFragment},
  logoMark ${imageFragment},
  defaultOgImage ${imageFragment},
  contactEmail,
  socialLinks,
  footerText,
  newsletterEnabled,
  donationEnabled,
  donationUrl
}`;
