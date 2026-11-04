import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HomeSections } from "@/components/home/HomeSections";
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
    <section className="poster hero tone-roos" aria-label="Welkom bij Lumina">
      <h1 className="hero__title"><span className="hero__name">Lumina</span> <span className="hero__sub">Collective</span></h1>
      <div className="hero__bloom">
        <CMSImage className="hero__petal" fallback={photography.welcome} image={page?.heroImage} priority sizes="(max-width: 960px) 96vw, 56vw" />
        <figure className="hero__bud hero__bud--a"><Image alt="" height={300} src="/images/lumina-cupcake-actie.webp" width={300} /></figure>
        <figure className="hero__bud hero__bud--b"><Image alt="" height={220} src="/images/samen-in-de-buurt.webp" width={220} /></figure>
      </div>
      <div className="hero__copy">
        <p>Ontmoeting, ontwikkeling en gelijke kansen.<br />Voor vrouwen. Met iedereen.</p>
        <div className="actions">
          <Button href="/doe-mee">Doe mee</Button>
          <Button href="/programmas" variant="outlineOnDark">Onze programma&apos;s</Button>
        </div>
      </div>
      <nav className="hero__paths" aria-label="Wat brengt jou hier?">
        {firstSteps.map(step => <Link href={step.href} key={step.href}>{step.label}</Link>)}
      </nav>
    </section>
    <HomeSections sections={sections} programs={programs} event={events[0]} gallery={gallery} testimonials={testimonials} partners={partners} />
  </>;
}
