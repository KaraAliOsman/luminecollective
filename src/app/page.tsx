import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { HomeSections } from "@/components/home/HomeSections";
import { SeriesRail } from "@/components/home/SeriesRail";
import { TearStrips } from "@/components/home/TearStrips";
import { StructuredData } from "@/components/seo/StructuredData";
import { Button } from "@/components/ui/Button";
import { CMSImage } from "@/components/ui/CMSImage";
import { defaultHomeSections } from "@/data/home";
import { photography } from "@/data/placeholders";
import { getApprovedTestimonials, getPageByKey, getPrograms, getPublicGallery, getUpcomingEvents, getVisiblePartners } from "@/lib/cms/content";
import { createMetadata } from "@/lib/seo/config";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo/jsonLd";

export const metadata: Metadata = createMetadata({ title: "Ontmoeting & ontwikkeling", path: "/" });

const firstSteps = [
  { label: "Ik wil meedoen", href: "/doe-mee" },
  { label: "Ik wil iets betekenen", href: "/doe-mee#vrijwilliger" },
  { label: "Ik zoek samenwerking", href: "/contact?onderwerp=Samenwerken" },
];

export default async function Home() {
  const [page, programs, events, gallery, testimonials, partners] = await Promise.all([
    getPageByKey("home"), getPrograms(), getUpcomingEvents(), getPublicGallery(), getApprovedTestimonials(), getVisiblePartners(),
  ]);
  const sections = page?.homeSections?.length ? page.homeSections : defaultHomeSections;
  return <>
    <StructuredData data={organizationJsonLd()} />
    <StructuredData data={websiteJsonLd()} />
    <SeriesRail />
    <div className="poster-series">
      <section className="poster hero tone-roos" aria-label="Welkom bij Lumina">
        <div className="hero__sheet">
          <h1 className="hero__title"><span className="hero__name">Lumina</span> <span className="hero__sub">Collective</span></h1>
          <CMSImage className="hero__petal petal" fallback={photography.welcome} image={page?.heroImage} imageClassName="hero__image" priority sizes="(max-width: 960px) 96vw, 50vw" />
          <div className="hero__copy">
            <p>Ontmoeting, ontwikkeling en gelijke kansen.<br />Voor vrouwen. Met iedereen.</p>
            <div className="actions">
              <Button href="/doe-mee">Doe mee<ArrowRight size={18} aria-hidden="true" /></Button>
              <Button href="/programmas" variant="outlineOnDark">Onze programma&apos;s</Button>
            </div>
          </div>
        </div>
        <TearStrips label="Wat brengt jou hier?" strips={firstSteps} />
      </section>
      <HomeSections sections={sections} programs={programs} event={events[0]} gallery={gallery} testimonials={testimonials} partners={partners} />
    </div>
  </>;
}
