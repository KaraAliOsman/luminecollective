import { visuals } from "@/data/placeholders";
import { programs as fallbackPrograms } from "@/data/programs";
import { brand } from "@/lib/constants/brand";
import { mainNavigation } from "@/lib/constants/navigation";
import { socialLinks as fallbackSocialLinks } from "@/lib/constants/social";
import { sanityFetch } from "@/lib/sanity/fetch";
import { urlFor } from "@/lib/sanity/image";
import { slugify } from "@/lib/utils/slugify";
import { formatDate, formatTime, validDate } from "@/lib/utils/dates";
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
  HomeSection,
  NavigationItem,
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
  brandPrimaryText?: string;
  brandSecondaryText?: string;
  navigation?: NavigationItem[];
  headerCta?: NavigationItem;
  address?: Partial<SiteSettings["address"]>;
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
  heroEyebrow?: string;
  heroPrimary?: NavigationItem;
  heroSecondary?: NavigationItem;
  heroBadge?: string;
  heroCaption?: string;
  heroTicker?: string[];
  homeSections?: HomeSection[];
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
    publishedAt: "2026-09-02",
    author: "Stichting Lumina Collective",
    title: "Waarom Lumina Collective bestaat",
    excerpt:
      "Vanuit Tilburg werken we aan verbinding, ontwikkeling en gelijke kansen. Dit is de overtuiging achter onze stichting.",
    bodyText:
      "Je prettig voelen in je omgeving begint vaak bij iemand die naar je luistert. Bij een plek waar je een vraag kunt stellen, een talent kunt ontdekken of gewoon jezelf kunt zijn. Vanuit die gedachte is Stichting Lumina Collective in 2026 opgericht in Tilburg.\n\nWe zetten ons in voor het welzijn, de zelfredzaamheid en de maatschappelijke deelname van vrouwen, nieuwkomers, jongeren en gezinnen. Gelijke kansen voor vrouwen staan centraal, met aandacht voor de mensen om hen heen.\n\nOns beleidsplan 2026-2030 beschrijft vier richtingen: ontmoeting en verbinding; educatie en ontwikkeling; welzijn en participatie; en jongeren, cultuur en samenwerking. We bouwen de activiteiten stap voor stap op, samen met vrijwilligers en mensen uit de buurt.\n\nLumina is een onafhankelijke stichting zonder winstoogmerk. Het bestuur werkt onbezoldigd. Onze plannen, de samenstelling van het bestuur en de uitgangspunten voor ons geldbeheer zijn openbaar op de pagina ANBI & transparantie.\n\nWil je kennismaken of heb je een idee dat hierbij past? Een bericht of telefoontje is een goed begin. We horen graag wat jij zoekt of wilt bijdragen.",
    visual: visuals.communityTable,
    isPreview: false,
    isFallback: true,
  },
  {
    slug: "ontmoeting-als-eerste-stap",
    category: "kennis",
    publishedAt: "2026-09-02",
    author: "Stichting Lumina Collective",
    title: "Ontmoeting als eerste stap naar groei",
    excerpt:
      "Nieuwe mensen leren kennen hoeft niet groot te beginnen. Een gesprek, een gedeelde interesse of samen iets doen kan al genoeg zijn.",
    bodyText:
      "Voor het eerst ergens binnenstappen kan spannend zijn. Zeker als je nog niemand kent, een nieuwe taal leert of weinig tijd voor jezelf hebt. Bij Lumina willen we dat je die eerste stap op je eigen manier kunt zetten.\n\nOntmoeting en verbinding vormen daarom een van de vier richtingen in ons beleidsplan. We willen ruimte maken voor koffieochtenden, gesprekken, culturele uitwisseling en activiteiten waarbij gezinnen elkaar leren kennen. De precieze invulling groeit mee met de vragen en interesses van de mensen die aansluiten.\n\nJe hoeft vooraf niet precies te weten wat je zoekt. Vertel ons waar je nieuwsgierig naar bent, wat je leuk vindt of waar je tegenaan loopt. Samen bekijken we welke mogelijkheid bij je past.\n\nZodra een activiteit een bevestigde datum en locatie heeft, vind je die in onze agenda. Daar vermelden we ook hoe je kunt aanmelden en of er kosten zijn. Wil je nu al kennismaken? Neem gerust contact op.",
    visual: visuals.conversation,
    isPreview: false,
    isFallback: true,
  },
  {
    slug: "vrijwilligers-maken-ruimte",
    category: "verhalen",
    publishedAt: "2026-09-02",
    author: "Stichting Lumina Collective",
    title: "Wat jij kunt betekenen als vrijwilliger",
    excerpt:
      "Goed in organiseren, graag bezig met taal of iemand die anderen op hun gemak stelt? Jouw inzet kan op verschillende manieren van betekenis zijn.",
    bodyText:
      "Een warm welkom, een helder bericht of een goed voorbereide activiteit: een stichting draait op mensen die hun tijd en aandacht willen delen. Lumina bouwt aan een netwerk van vrijwilligers dat past bij onze plannen en bij wat mensen zelf willen bijdragen.\n\nMisschien help je graag bij het organiseren van ontmoetingen. Misschien heb je kennis van taal, creativiteit, communicatie of administratie. Ook praktische hulp en het meedenken over een activiteit zijn waardevol.\n\nEen kennismaking is geen verplichting. We bespreken samen wat je leuk vindt, hoeveel tijd je hebt en welke afspraken nodig zijn. Zo wordt duidelijk of er op dit moment een passende rol voor je is.\n\nHet bestuur van Lumina werkt onbezoldigd. Ons beleidsplan beschrijft ook de uitgangspunten voor onkosten en vrijwilligersvergoedingen. We maken vooraf duidelijke afspraken over de inzet en eventuele kosten.\n\nVia de pagina Doe mee kun je je interesse doorgeven. Vertel kort waar je goed in bent en wanneer je beschikbaar bent. Je hoeft geen uitgebreid cv te sturen.",
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
    contactEmail: brand.email,
    socialLinks: [...fallbackSocialLinks],
    footerText: brand.claim,
    donationEnabled: false,
    newsletterEnabled: true,
    brandPrimaryText: "Lumina",
    brandSecondaryText: "Collective",
    navigation: [...mainNavigation],
    headerCta: { label: "Doe mee", href: "/doe-mee" },
    address: { ...brand.address },
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
    heroEyebrow: page.heroEyebrow,
    heroPrimary: page.heroPrimary?.label && page.heroPrimary?.href ? page.heroPrimary : undefined,
    heroSecondary: page.heroSecondary?.label && page.heroSecondary?.href ? page.heroSecondary : undefined,
    heroBadge: page.heroBadge,
    heroCaption: page.heroCaption,
    heroTicker: page.heroTicker?.filter(Boolean),
    homeSections: page.homeSections,
    isFallback: false,
  };
}

function normalizePost(post: RawPost, index = 0): PostDisplay | null {
  if (!post.title || !post.slug || !post.excerpt || !validDate(post.publishedAt)) return null;
  return {
    title: post.title,
    slug: post.slug,
    category: post.category || "nieuws",
    publishedAt: post.publishedAt!,
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
  const slug = program.slug;
  return {
    title: program.title,
    slug,
    description: program.description,
    visual: program.visual,
    category: program.category,
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
    date: formatDate(event.dateStart),
    time: formatTime(event.dateStart),
    dateStart: event.dateStart,
    dateEnd: event.dateEnd,
    location: event.locationName || "Locatie wordt later gedeeld",
    locationName: event.locationName,
    locationAddress: event.locationAddress,
    registrationUrl: event.registrationUrl,
    isFree: event.isFree === true,
    priceDescription: event.priceDescription,
    capacity: event.capacity,
    image: event.featuredImage,
    visual: [visuals.communityTable, visuals.warmWorkshop, visuals.culturalMoment][
      index % 3
    ],
    status: event.status === "cancelled" ? "cancelled" : event.status === "past" || (validDate(event.dateEnd || event.dateStart)?.getTime() ?? Infinity) < Date.now() ? "past" : "upcoming",
    cta: event.registrationUrl ? "Aanmelden" : "Meer weten",
    seoTitle: event.seoTitle,
    metaDescription: event.metaDescription,
    isPlaceholder: false,
    isFallback: false,
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
    contactEmail: data.contactEmail || brand.email,
    socialLinks:
      data.socialLinks
        ?.map((item) => normalizeSocial(item.platform, item.url))
        .filter((item): item is { label: string; href: string } => Boolean(item)) ??
      [...fallbackSocialLinks],
    footerText: data.footerText || brand.claim,
    donationEnabled: Boolean(data.donationEnabled),
    donationUrl: data.donationUrl,
    newsletterEnabled: data.newsletterEnabled ?? true,
    brandPrimaryText: data.brandPrimaryText || "Lumina",
    brandSecondaryText: data.brandSecondaryText || "Collective",
    navigation: data.navigation?.filter((item) => item.label && item.href) ?? [...mainNavigation],
    headerCta: data.headerCta?.label && data.headerCta?.href
      ? data.headerCta
      : { label: "Doe mee", href: "/doe-mee" },
    address: {
      street: data.address?.street || brand.address.street,
      postalCode: data.address?.postalCode || brand.address.postalCode,
      city: data.address?.city || brand.address.city,
      country: data.address?.country || brand.address.country,
    },
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
  const fallbackSlugs = fallbackPrograms.map((program) => program.slug);
  return Array.from(new Set([...cmsSlugs, ...fallbackSlugs])).map((slug) => ({ slug }));
}

export async function getUpcomingEvents(): Promise<EventDisplay[]> {
  const data = await sanityFetch<RawEvent[]>(
    upcomingEventsQuery,
    {},
    { tags: ["events"] },
  );
  const events = data?.map(normalizeEvent).filter(Boolean) as EventDisplay[] | undefined;
  return events?.filter(event => event.status === "upcoming" && validDate(event.dateStart)) ?? [];
}

export async function getEventBySlug(slug: string): Promise<EventDisplay | null> {
  const data = await sanityFetch<RawEvent>(
    eventBySlugQuery,
    { slug },
    { tags: ["events"] },
  );
  const cmsEvent = data ? normalizeEvent(data) : null;
  if (cmsEvent) return cmsEvent;
  return null;
}

export async function getEventSlugs() {
  const data = await sanityFetch<Array<{ slug?: string }>>(
    eventSlugsQuery,
    {},
    { tags: ["events"] },
  );
  const cmsSlugs = data?.map((item) => item.slug).filter(Boolean) ?? [];
  return Array.from(new Set(cmsSlugs)).map((slug) => ({ slug }));
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

  return gallery?.filter(item => !item.isPlaceholder) ?? [];
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
