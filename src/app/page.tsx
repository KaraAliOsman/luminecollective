import type { Metadata } from "next";
import Link from "next/link";

import { HomeSections } from "@/components/home/HomeSections";
import { StructuredData } from "@/components/seo/StructuredData";
import { CMSImage } from "@/components/ui/CMSImage";
import { visuals } from "@/data/placeholders";
import { getApprovedTestimonials, getPageByKey, getPrograms, getPublicGallery, getUpcomingEvents, getVisiblePartners } from "@/lib/cms/content";
import { createMetadata } from "@/lib/seo/config";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo/jsonLd";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageByKey("home");
  return createMetadata({ title: page?.seoTitle && page.seoTitle !== "Home" ? page.seoTitle : "Samen groeit meer", description: page?.metaDescription || "Lumina brengt vrouwen in Tilburg samen rond ontmoeting, ontwikkeling en cultuur.", path: "/" });
}

export default async function Home() {
  const [page, programs, events, gallery, testimonials, partners] = await Promise.all([getPageByKey("home"), getPrograms(), getUpcomingEvents(), getPublicGallery(), getApprovedTestimonials(), getVisiblePartners()]);
  const heroWords = (page?.heroTitle || "Samen groeit meer.").trim().split(/\s+/);
  const heroLead = heroWords.shift() || "Samen";
  const heroAccent = heroWords.join(" ") || "groeit meer.";
  const ticker = page?.heroTicker?.length ? page.heroTicker : ["Ontmoeten", "Ontwikkelen", "Cultuur", "Participatie", "Samen groeien"];
  const primary = page?.heroPrimary || { label: "Doe mee", href: "/doe-mee" };
  const secondary = page?.heroSecondary || { label: "Leer ons kennen", href: "/over-ons" };

  return <>
    <StructuredData data={organizationJsonLd()} /><StructuredData data={websiteJsonLd()} />
    <section className="home-hero">
      <div className="home-hero__grid">
        <div className="home-hero__copy">
          <p className="home-hero__location">{page?.heroEyebrow || "Stichting Lumina · Tilburg"}</p>
          <h1>{heroLead} <em>{heroAccent}</em></h1>
          <p className="home-hero__intro">{page?.heroText || "Een plek waar vrouwen elkaar ontmoeten, hun verhaal delen en samen de volgende stap zetten."}</p>
          <div className="home-hero__actions"><Link className="studio-button" href={primary.href}>{primary.label}</Link><Link className="home-text-link" href={secondary.href}>{secondary.label}</Link></div>
        </div>
        <div className="home-hero__visual">
          <CMSImage className="home-hero__image" fallback={visuals.communityTable} image={page?.heroImage} imageClassName="object-center" priority sizes="(min-width: 1024px) 50vw, 100vw" />
          <div className="home-hero__stamp"><span>013</span><small>{page?.heroBadge || "Tilburg · Samen groeien"}</small></div>
          <span className="home-hero__caption">{page?.heroCaption || "Lumina Collective · Tilburg"}</span>
        </div>
      </div>
      <div className="home-hero__rail">{ticker.map((item, index) => <span key={`${item}-${index}`}>{item}{index < ticker.length - 1 && <i />}</span>)}</div>
    </section>
    <HomeSections sections={page?.homeSections} programs={programs} event={events[0]} gallery={gallery} testimonials={testimonials} partners={partners} />
  </>;
}
