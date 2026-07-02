import { events as fallbackEvents } from "@/data/events";
import { visuals } from "@/data/placeholders";
import { programs as fallbackPrograms } from "@/data/programs";
import { brand } from "@/lib/constants/brand";
import { socialLinks as fallbackSocialLinks } from "@/lib/constants/social";
import { sanityFetch } from "@/lib/sanity/fetch";
import { urlFor } from "@/lib/sanity/image";
import { slugify } from "@/lib/utils/slugify";
import {
  approvedTestimonialsQuery,
  eventBySlugQuery,
  eventSlugsQuery,
  pageByKeyQuery,
  postBySlugQuery,
  postSlugsQuery,
  postsQuery,
  programsQuery,
  programBySlugQuery,
  programSlugsQuery,
  publicGalleryByEventSlugQuery,
  publicGalleryByProgramSlugQuery,
  publicGalleryQuery,
  relatedPostsQuery,
  relatedEventsByEventSlugQuery,
  relatedEventsByProgramSlugQuery,
  settingsQuery,
  upcomingEventsQuery,
  visiblePartnersQuery,
  visibleTeamQuery,
} from "@/sanity/queries";
import type {
  EventDisplay,
  GalleryItemDisplay,
  PageDisplay,
  PartnerDisplay,
  PostDisplay,
  ProgramDisplay,
  SanityImageLike,
  SiteSettings,
  TeamMemberDisplay,
  TestimonialDisplay,
} from "@/types/cms";

type RawSettings = {
  siteTitle?: string;
  siteDescription?: string;
  defaultOgImage?: SanityImageLike;
  logoFull?: SanityImageLike;
  logoMark?: SanityImageLike;
  contactEmail?: string;
  socialLinks?: Array<{ platform?: string; url?: string }>;
  footerText?: string;
  donationEnabled?: boolean;
  donationUrl?: string;
  newsletterEnabled?: boolean;
};

type RawPage = {
  title?: string;
  slug?: string;
  pageKey?: string;
  heroTitle?: string;
  heroText?: string;
  heroImage?: SanityImageLike;
  body?: unknown[];
  seoTitle?: string;
  metaDescription?: string;
};

type RawPost = {
  title?: string;
  slug?: string;
  category?: string;
  publishedAt?: string;
  author?: string;
  excerpt?: string;
  featuredImage?: SanityImageLike;
  body?: unknown[];
  seoTitle?: string;
  metaDescription?: string;
};

type RawProgram = {
  title?: string;
  slug?: string;
  shortDescription?: string;
  longDescription?: unknown[];
  featuredImage?: SanityImageLike;
  category?: string;
  targetAudience?: string;
  goals?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  seoTitle?: string;
  metaDescription?: string;
};

type RawEvent = {
  title?: string;
  slug?: string;
  description?: unknown[] | string;
  dateStart?: string;
  dateEnd?: string;
  locationName?: string;
  locationAddress?: string;
  registrationUrl?: string;
  isFree?: boolean;
  priceDescription?: string;
  capacity?: number;
  featuredImage?: SanityImageLike;
  status?: EventDisplay["status"];
  seoTitle?: string;
  metaDescription?: string;
};

type RawGalleryItem = {
  _id?: string;
  image?: SanityImageLike;
  alt?: string;
  caption?: string;
  credit?: string;
  isPlaceholder?: boolean;
};

const fallbackPosts: PostDisplay[] = [
  {
    slug: "waarom-lumina-bestaat",
    category: "verhalen",
    publishedAt: "2026-01-15",
    author: "Stichting Lumina Collective",
    title: "Waarom Lumina Collective bestaat",
    excerpt:
      "Een korte introductie op onze missie: vrouwen samenbrengen rond ontmoeting, steun, cultuur en zichtbare participatie.",
    bodyText:
      "Lumina Collective is ontstaan vanuit een eenvoudige overtuiging: vrouwen hebben plekken nodig waar ze elkaar kunnen ontmoeten zonder drempel, zonder oordeel en met ruimte voor hun eigen verhaal.\n\nIn Tilburg bouwen we aan een warme gemeenschap rond ontmoeting, ondersteuning, cultuur, kennis en maatschappelijke participatie. We geloven dat vertrouwen groeit wanneer vrouwen elkaar zien, naar elkaar luisteren en samen kleine stappen durven zetten.\n\nOnze stichting werkt zorgvuldig en lokaal. We willen een plek zijn waar deelnemers, vrijwilligers en partners elkaar vinden rond gedeelde verantwoordelijkheid en menselijke aandacht.",
    visual: visuals.communityTable,
    isPreview: false,
    isFallback: true,
  },
  {
    slug: "ontmoeting-als-eerste-stap",
    category: "kennis",
    publishedAt: "2026-02-01",
    author: "Stichting Lumina Collective",
    title: "Ontmoeting als eerste stap naar groei",
    excerpt:
      "Waarom laagdrempelige bijeenkomsten belangrijk zijn voor vertrouwen, welzijn en deelname aan de samenleving.",
    bodyText:
      "Een sterke gemeenschap begint vaak klein: aan een tafel, tijdens een gesprek, bij een bijeenkomst waar iemand voor het eerst binnenstapt.\n\nVoor veel vrouwen is ontmoeting geen extraatje, maar een voorwaarde voor vertrouwen. Vanuit contact ontstaat herkenning. Vanuit herkenning ontstaat ruimte om vragen te stellen, hulp te zoeken, talenten te delen of actief mee te doen.\n\nDaarom investeert Lumina Collective in warme, goed georganiseerde momenten waar vrouwen elkaar op een natuurlijke manier kunnen leren kennen. Niet als eindpunt, maar als begin van verdere groei.",
    visual: visuals.conversation,
    isPreview: false,
    isFallback: true,
  },
  {
    slug: "vrijwilligers-maken-ruimte",
    category: "interviews",
    publishedAt: "2026-02-18",
    author: "Stichting Lumina Collective",
    title: "Vrijwilligers maken ruimte voor meer vrouwen",
    excerpt:
      "Bijdragen aan Lumina kan op veel manieren: met tijd, kennis, organisatiekracht of warme aanwezigheid.",
    bodyText:
      "Vrijwilligers zijn onmisbaar voor een stichting die dichtbij mensen wil blijven. Zij helpen bij ontvangst, organisatie, communicatie, activiteiten, praktische vragen en het creëren van een sfeer waarin deelnemers zich welkom voelen.\n\nBij Lumina zoeken we geen perfecte profielen. We zoeken mensen die zorgvuldig, betrouwbaar en met aandacht willen bijdragen. Soms is dat zichtbaar op de voorgrond, soms juist rustig achter de schermen.\n\nWie vrijwilliger wordt, bouwt mee aan een gemeenschap waarin vrouwen elkaar kunnen versterken. Een eerste gesprek is genoeg om te ontdekken welke rol past.",
    visual: visuals.presentation,
    isPreview: false,
    isFallback: true,
  },
];

function imageUrl(image?: SanityImageLike) {
  if (!image?.asset) return undefined;
  try {
    return urlFor(image).width(1600).height(900).quality(82).auto("format").url();
  } catch {
    return undefined;
  }
}

function plainText(value: unknown) {
  if (typeof value === "string") return value;
  if (!Array.isArray(value)) return "";

  return value
    .map((block) => {
      if (
        typeof block === "object" &&
        block !== null &&
        "children" in block &&
        Array.isArray((block as { children?: unknown[] }).children)
      ) {
        return ((block as { children: Array<{ text?: string }> }).children ?? [])
          .map((child) => child.text ?? "")
          .join("");
      }
      return "";
    })
    .filter(Boolean)
    .join("\n\n");
}

function formatEventDate(value?: string) {
  if (!value) return "Binnenkort";
  return new Intl.DateTimeFormat("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
}

function formatEventTime(value?: string) {
  if (!value) return undefined;
  return new Intl.DateTimeFormat("nl-NL", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

function normalizeSocial(platform?: string, url?: string) {
  if (!platform || !url) return null;
  const labelMap: Record<string, string> = {
    facebook: "Facebook",
    instagram: "Instagram",
    tiktok: "TikTok",
    x: "X",
    linkedin: "LinkedIn",
    other: "Website",
  };
  return { label: labelMap[platform] ?? platform, href: url };
}

function fallbackSettings(): SiteSettings {
  return {
    siteTitle: brand.name,
    siteDescription: brand.description,
    logoFullUrl: brand.logoFull,
    logoMarkUrl: brand.logoMark,
    contactEmail: process.env.CONTACT_EMAIL || undefined,
    socialLinks: [...fallbackSocialLinks],
    footerText: brand.claim,
    donationEnabled: false,
    newsletterEnabled: true,
    isFallback: true,
  };
}

function normalizePage(page: RawPage): PageDisplay | null {
  if (!page.pageKey || !page.heroTitle || !page.heroText) return null;
  return {
    title: page.title || page.heroTitle,
    slug: page.slug || page.pageKey,
    pageKey: page.pageKey,
    heroTitle: page.heroTitle,
    heroText: page.heroText,
    heroImage: page.heroImage,
    body: page.body,
    seoTitle: page.seoTitle,
    metaDescription: page.metaDescription,
    isFallback: false,
  };
}

function normalizePost(post: RawPost, index = 0): PostDisplay | null {
  if (!post.title || !post.slug || !post.excerpt || !post.publishedAt) return null;
  return {
    title: post.title,
    slug: post.slug,
    category: post.category || "nieuws",
    publishedAt: post.publishedAt,
    author: post.author || "Stichting Lumina Collective",
    excerpt: post.excerpt,
    image: post.featuredImage,
    body: post.body,
    bodyText: plainText(post.body),
    visual: [
      visuals.communityTable,
      visuals.conversation,
      visuals.presentation,
      visuals.warmWorkshop,
      visuals.culturalMoment,
    ][index % 5],
    seoTitle: post.seoTitle,
    metaDescription: post.metaDescription,
    isPreview: false,
    isFallback: false,
  };
}

function normalizeProgram(program: RawProgram, index = 0): ProgramDisplay | null {
  if (!program.title || !program.shortDescription) return null;
  const slug = program.slug || slugify(program.title);
  return {
    title: program.title,
    slug,
    description: program.shortDescription,
    longDescription: plainText(program.longDescription),
    image: program.featuredImage,
    visual: [
      visuals.communityTable,
      visuals.warmWorkshop,
      visuals.culturalMoment,
      visuals.supportCircle,
      visuals.participation,
    ][index % 5],
    category: program.category,
    targetAudience: program.targetAudience,
    goals: program.goals ?? [],
    ctaLabel: program.ctaLabel || "Lees meer",
    ctaHref: program.ctaHref || `/programmas/${slug}`,
    seoTitle: program.seoTitle,
    metaDescription: program.metaDescription,
    isFallback: false,
  };
}

function fallbackProgram(program: (typeof fallbackPrograms)[number]): ProgramDisplay {
  const slug = slugify(program.title);
  return {
    title: program.title,
    slug,
    description: program.description,
    visual: program.visual,
    targetAudience: "targetAudience" in program ? program.targetAudience : undefined,
    goals: "goals" in program ? [...program.goals] : [],
    longDescription: "longDescription" in program ? program.longDescription : undefined,
    ctaLabel: program.cta,
    ctaHref: `/programmas/${slug}`,
    isFallback: true,
  };
}

function normalizeEvent(event: RawEvent, index = 0): EventDisplay | null {
  if (!event.title) return null;
  const description = plainText(event.description);
  const slug = event.slug || slugify(event.title);
  return {
    title: event.title,
    slug,
    description,
    date: formatEventDate(event.dateStart),
    time: formatEventTime(event.dateStart),
    dateStart: event.dateStart,
    dateEnd: event.dateEnd,
    location: event.locationName || "Locatie wordt later gedeeld",
    locationName: event.locationName,
    locationAddress: event.locationAddress,
    registrationUrl: event.registrationUrl,
    isFree: event.isFree ?? true,
    priceDescription: event.priceDescription,
    capacity: event.capacity,
    image: event.featuredImage,
    visual: [visuals.communityTable, visuals.warmWorkshop, visuals.culturalMoment][
      index % 3
    ],
    status: event.status ?? "upcoming",
    cta: event.registrationUrl ? "Aanmelden" : "Meer weten",
    seoTitle: event.seoTitle,
    metaDescription: event.metaDescription,
    isPlaceholder: false,
    isFallback: false,
  };
}

function fallbackEvent(event: (typeof fallbackEvents)[number]): EventDisplay {
  return {
    title: event.title,
    slug: slugify(event.title),
    description: event.description,
    date: event.date,
    time: undefined,
    location: event.location,
    isFree: true,
    visual: event.visual,
    status: "upcoming",
    cta: event.cta,
    isPlaceholder: true,
    isFallback: true,
  };
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const data = await sanityFetch<RawSettings>(settingsQuery, {}, { tags: ["settings"] });
  if (!data?.siteTitle) return fallbackSettings();

  return {
    siteTitle: data.siteTitle,
    siteDescription: data.siteDescription || brand.description,
    defaultOgImage: data.defaultOgImage,
    logoFull: data.logoFull,
    logoMark: data.logoMark,
    defaultOgImageUrl: imageUrl(data.defaultOgImage),
    logoFullUrl: imageUrl(data.logoFull) || brand.logoFull,
    logoMarkUrl: imageUrl(data.logoMark) || brand.logoMark,
    contactEmail: data.contactEmail || process.env.CONTACT_EMAIL || undefined,
    socialLinks:
      data.socialLinks
        ?.map((item) => normalizeSocial(item.platform, item.url))
        .filter((item): item is { label: string; href: string } => Boolean(item)) ??
      [...fallbackSocialLinks],
    footerText: data.footerText || brand.claim,
    donationEnabled: Boolean(data.donationEnabled),
    donationUrl: data.donationUrl,
    newsletterEnabled: data.newsletterEnabled ?? true,
    isFallback: false,
  };
}

export async function getPageByKey(pageKey: string): Promise<PageDisplay | null> {
  const data = await sanityFetch<RawPage>(
    pageByKeyQuery,
    { pageKey },
    { tags: ["pages"] },
  );
  return data ? normalizePage(data) : null;
}

export async function getPosts(): Promise<PostDisplay[]> {
  const data = await sanityFetch<RawPost[]>(postsQuery, {}, { tags: ["posts"] });
  const posts = data?.map(normalizePost).filter(Boolean) as PostDisplay[] | undefined;
  return posts?.length ? posts : fallbackPosts;
}

export async function getPostBySlug(slug: string): Promise<PostDisplay | null> {
  const data = await sanityFetch<RawPost>(
    postBySlugQuery,
    { slug },
    { tags: ["posts"] },
  );
  const cmsPost = data ? normalizePost(data) : null;
  if (cmsPost) return cmsPost;
  return fallbackPosts.find((post) => post.slug === slug) ?? null;
}

export async function getPostSlugs() {
  const data = await sanityFetch<Array<{ slug?: string }>>(
    postSlugsQuery,
    {},
    { tags: ["posts"] },
  );
  const cmsSlugs = data?.map((item) => item.slug).filter(Boolean) ?? [];
  const fallbackSlugs = fallbackPosts.map((post) => post.slug);
  return Array.from(new Set([...cmsSlugs, ...fallbackSlugs])).map((slug) => ({ slug }));
}

export async function getRelatedPosts(slug: string): Promise<PostDisplay[]> {
  const data = await sanityFetch<RawPost[]>(
    relatedPostsQuery,
    { slug },
    { tags: ["posts"] },
  );
  return (data?.map(normalizePost).filter(Boolean) as PostDisplay[] | undefined) ?? [];
}

export async function getPrograms(): Promise<ProgramDisplay[]> {
  const data = await sanityFetch<RawProgram[]>(programsQuery, {}, { tags: ["programs"] });
  const programs = data?.map(normalizeProgram).filter(Boolean) as ProgramDisplay[] | undefined;
  return programs?.length ? programs : fallbackPrograms.map(fallbackProgram);
}

export async function getProgramBySlug(slug: string): Promise<ProgramDisplay | null> {
  const data = await sanityFetch<RawProgram>(
    programBySlugQuery,
    { slug },
    { tags: ["programs"] },
  );
  const cmsProgram = data ? normalizeProgram(data) : null;
  if (cmsProgram) return cmsProgram;
  return fallbackPrograms.map(fallbackProgram).find((program) => program.slug === slug) ?? null;
}

export async function getProgramSlugs() {
  const data = await sanityFetch<Array<{ slug?: string }>>(
    programSlugsQuery,
    {},
    { tags: ["programs"] },
  );
  const cmsSlugs = data?.map((item) => item.slug).filter(Boolean) ?? [];
  const fallbackSlugs = fallbackPrograms.map((program) => slugify(program.title));
  return Array.from(new Set([...cmsSlugs, ...fallbackSlugs])).map((slug) => ({ slug }));
}

export async function getUpcomingEvents(): Promise<EventDisplay[]> {
  const data = await sanityFetch<RawEvent[]>(
    upcomingEventsQuery,
    {},
    { tags: ["events"] },
  );
  const events = data?.map(normalizeEvent).filter(Boolean) as EventDisplay[] | undefined;
  return events?.length ? events : fallbackEvents.map(fallbackEvent);
}

export async function getEventBySlug(slug: string): Promise<EventDisplay | null> {
  const data = await sanityFetch<RawEvent>(
    eventBySlugQuery,
    { slug },
    { tags: ["events"] },
  );
  const cmsEvent = data ? normalizeEvent(data) : null;
  if (cmsEvent) return cmsEvent;
  return fallbackEvents.map(fallbackEvent).find((event) => event.slug === slug) ?? null;
}

export async function getEventSlugs() {
  const data = await sanityFetch<Array<{ slug?: string }>>(
    eventSlugsQuery,
    {},
    { tags: ["events"] },
  );
  const cmsSlugs = data?.map((item) => item.slug).filter(Boolean) ?? [];
  const fallbackSlugs = fallbackEvents.map((event) => slugify(event.title));
  return Array.from(new Set([...cmsSlugs, ...fallbackSlugs])).map((slug) => ({ slug }));
}

async function getRelatedGallery(
  query: string,
  slug: string,
): Promise<GalleryItemDisplay[]> {
  const data = await sanityFetch<RawGalleryItem[]>(
    query,
    { slug },
    { tags: ["gallery"] },
  );

  return (
    data
      ?.filter((item) => item.image?.asset && item.alt)
      .map((item, index) => ({
        id: item._id || `${slug}-gallery-${index}`,
        image: {
          ...item.image,
          alt: item.alt,
          caption: item.caption,
          credit: item.credit,
        },
        visual: [
          visuals.communityTable,
          visuals.warmWorkshop,
          visuals.culturalMoment,
          visuals.participation,
          visuals.supportCircle,
        ][index % 5],
        alt: item.alt || "Foto uit de gemeenschap",
        caption: item.caption,
        credit: item.credit,
        isPlaceholder: Boolean(item.isPlaceholder),
        isFallback: false,
      })) ?? []
  );
}

export async function getRelatedEventsForProgram(
  slug: string,
): Promise<EventDisplay[]> {
  const data = await sanityFetch<RawEvent[]>(
    relatedEventsByProgramSlugQuery,
    { slug },
    { tags: ["events"] },
  );
  return (data?.map(normalizeEvent).filter(Boolean) as EventDisplay[] | undefined) ?? [];
}

export async function getRelatedEventsForEvent(
  slug: string,
): Promise<EventDisplay[]> {
  const data = await sanityFetch<RawEvent[]>(
    relatedEventsByEventSlugQuery,
    { slug },
    { tags: ["events"] },
  );
  return (data?.map(normalizeEvent).filter(Boolean) as EventDisplay[] | undefined) ?? [];
}

export async function getGalleryForProgram(slug: string) {
  return getRelatedGallery(publicGalleryByProgramSlugQuery, slug);
}

export async function getGalleryForEvent(slug: string) {
  return getRelatedGallery(publicGalleryByEventSlugQuery, slug);
}

export async function getPublicGallery(): Promise<GalleryItemDisplay[]> {
  const data = await sanityFetch<RawGalleryItem[]>(
    publicGalleryQuery,
    {},
    { tags: ["gallery"] },
  );
  const gallery = data
    ?.filter((item) => item.image?.asset && item.alt)
    .map((item, index) => ({
      id: item._id || `gallery-${index}`,
      image: { ...item.image, alt: item.alt, caption: item.caption, credit: item.credit },
      visual: [
        visuals.communityTable,
        visuals.warmWorkshop,
        visuals.culturalMoment,
        visuals.participation,
        visuals.supportCircle,
      ][index % 5],
      alt: item.alt || "Foto uit de gemeenschap",
      caption: item.caption,
      credit: item.credit,
      isPlaceholder: Boolean(item.isPlaceholder),
      isFallback: false,
    }));

  if (gallery?.length) return gallery;

  return [
    visuals.supportCircle,
    visuals.culturalMoment,
    visuals.participation,
    visuals.warmWorkshop,
    visuals.communityTable,
    visuals.conversation,
    visuals.meeting,
    visuals.presentation,
    visuals.presentation2,
    visuals.talking1,
    visuals.smilingGroup,
    visuals.workshop2,
    visuals.support2,
    visuals.laughingCafe,
    visuals.seminar1,
    visuals.students1,
  ].map((visual, index) => ({
    id: `fallback-gallery-${index}`,
    visual,
    alt: visual.alt,
    isPlaceholder: true,
    isFallback: true,
  }));
}

export async function getVisibleTeam(): Promise<TeamMemberDisplay[]> {
  const data = await sanityFetch<TeamMemberDisplay[]>(
    visibleTeamQuery,
    {},
    { tags: ["team"] },
  );
  return data?.filter((member) => member.name && member.role) ?? [];
}

export async function getVisiblePartners(): Promise<PartnerDisplay[]> {
  const data = await sanityFetch<PartnerDisplay[]>(
    visiblePartnersQuery,
    {},
    { tags: ["partners"] },
  );
  return data?.filter((partner) => partner.name) ?? [];
}

export async function getApprovedTestimonials(): Promise<TestimonialDisplay[]> {
  const data = await sanityFetch<TestimonialDisplay[]>(
    approvedTestimonialsQuery,
    {},
    { tags: ["testimonials"] },
  );
  return data?.filter((testimonial) => testimonial.quote) ?? [];
}
