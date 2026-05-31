export const settingsQuery = `*[_type == "globalSettings"][0]{
  siteTitle,
  siteDescription,
  defaultOgImage,
  logoFull,
  logoMark,
  contactEmail,
  socialLinks,
  footerText,
  donationEnabled,
  donationUrl,
  newsletterEnabled
}`;

export const pageByKeyQuery = `*[_type == "page" && pageKey == $pageKey][0]{
  title,
  "slug": slug.current,
  pageKey,
  heroTitle,
  heroText,
  heroImage,
  body,
  seoTitle,
  metaDescription
}`;

export const postsQuery = `*[
  _type == "post" &&
  defined(slug.current) &&
  defined(publishedAt)
] | order(publishedAt desc){
  title,
  "slug": slug.current,
  category,
  publishedAt,
  author,
  excerpt,
  featuredImage,
  body,
  seoTitle,
  metaDescription
}`;

export const postBySlugQuery = `*[
  _type == "post" &&
  slug.current == $slug &&
  defined(publishedAt)
][0]{
  title,
  "slug": slug.current,
  category,
  publishedAt,
  author,
  excerpt,
  featuredImage,
  body,
  seoTitle,
  metaDescription
}`;

export const postSlugsQuery = `*[
  _type == "post" &&
  defined(slug.current) &&
  defined(publishedAt)
]{
  "slug": slug.current
}`;

export const relatedPostsQuery = `*[
  _type == "post" &&
  defined(slug.current) &&
  defined(publishedAt) &&
  slug.current != $slug
] | order(publishedAt desc)[0...3]{
  title,
  "slug": slug.current,
  category,
  publishedAt,
  author,
  excerpt,
  featuredImage,
  seoTitle,
  metaDescription
}`;

export const programsQuery = `*[_type == "program"] | order(title asc){
  title,
  "slug": slug.current,
  shortDescription,
  longDescription,
  featuredImage,
  category,
  targetAudience,
  goals,
  ctaLabel,
  ctaHref,
  seoTitle,
  metaDescription
}`;

export const programBySlugQuery = `*[_type == "program" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  shortDescription,
  longDescription,
  featuredImage,
  category,
  targetAudience,
  goals,
  ctaLabel,
  ctaHref,
  seoTitle,
  metaDescription
}`;

export const programSlugsQuery = `*[_type == "program" && defined(slug.current)]{
  "slug": slug.current
}`;

export const upcomingEventsQuery = `*[_type == "event" && status == "upcoming"] | order(dateStart asc){
  title,
  "slug": slug.current,
  program->{title, "slug": slug.current},
  description,
  dateStart,
  dateEnd,
  locationName,
  locationAddress,
  registrationUrl,
  isFree,
  priceDescription,
  capacity,
  featuredImage,
  status,
  seoTitle,
  metaDescription
}`;

export const eventBySlugQuery = `*[_type == "event" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  program->{title, "slug": slug.current},
  description,
  dateStart,
  dateEnd,
  locationName,
  locationAddress,
  registrationUrl,
  isFree,
  priceDescription,
  capacity,
  featuredImage,
  status,
  seoTitle,
  metaDescription
}`;

export const eventSlugsQuery = `*[_type == "event" && defined(slug.current)]{
  "slug": slug.current
}`;

export const relatedEventsByProgramSlugQuery = `*[
  _type == "event" &&
  status == "upcoming" &&
  program->slug.current == $slug
] | order(dateStart asc)[0...3]{
  title,
  "slug": slug.current,
  program->{title, "slug": slug.current},
  description,
  dateStart,
  dateEnd,
  locationName,
  locationAddress,
  registrationUrl,
  isFree,
  priceDescription,
  capacity,
  featuredImage,
  status,
  seoTitle,
  metaDescription
}`;

export const relatedEventsByEventSlugQuery = `*[
  _type == "event" &&
  status == "upcoming" &&
  defined(slug.current) &&
  slug.current != $slug
] | order(dateStart asc)[0...3]{
  title,
  "slug": slug.current,
  program->{title, "slug": slug.current},
  description,
  dateStart,
  dateEnd,
  locationName,
  locationAddress,
  registrationUrl,
  isFree,
  priceDescription,
  capacity,
  featuredImage,
  status,
  seoTitle,
  metaDescription
}`;

export const publicGalleryByProgramSlugQuery = `*[
  _type == "galleryItem" &&
  visibility == "public" &&
  consentConfirmed == true &&
  program->slug.current == $slug
] | order(date desc)[0...6]{
  _id,
  image,
  alt,
  caption,
  event->{title, "slug": slug.current},
  program->{title, "slug": slug.current},
  date,
  credit,
  isPlaceholder,
  visibility,
  consentConfirmed
}`;

export const publicGalleryByEventSlugQuery = `*[
  _type == "galleryItem" &&
  visibility == "public" &&
  consentConfirmed == true &&
  event->slug.current == $slug
] | order(date desc)[0...6]{
  _id,
  image,
  alt,
  caption,
  event->{title, "slug": slug.current},
  program->{title, "slug": slug.current},
  date,
  credit,
  isPlaceholder,
  visibility,
  consentConfirmed
}`;

export const publicGalleryQuery = `*[
  _type == "galleryItem" &&
  visibility == "public" &&
  consentConfirmed == true
] | order(date desc){
  _id,
  image,
  alt,
  caption,
  event->{title, "slug": slug.current},
  program->{title, "slug": slug.current},
  date,
  credit,
  isPlaceholder,
  visibility,
  consentConfirmed
}`;

export const visibleTeamQuery = `*[_type == "teamMember" && visible == true] | order(order asc, name asc){
  name,
  role,
  bio,
  portrait,
  email,
  order,
  visible
}`;

export const visiblePartnersQuery = `*[_type == "partner" && visible == true] | order(order asc, name asc){
  name,
  logo,
  website,
  description,
  visible,
  order
}`;

export const approvedTestimonialsQuery = `*[
  _type == "testimonial" &&
  approvedForPublication == true
] | order(order asc){
  quote,
  name,
  roleOrContext,
  image,
  anonymous,
  approvedForPublication,
  order
}`;
