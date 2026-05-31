import type { Metadata } from "next";

import { ProgramCard } from "@/components/cards/ProgramCard";
import { StructuredData } from "@/components/seo/StructuredData";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { CMSImage } from "@/components/ui/CMSImage";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { visuals } from "@/data/placeholders";
import {
  getApprovedTestimonials,
  getPrograms,
  getPublicGallery,
  getUpcomingEvents,
  getVisiblePartners,
} from "@/lib/cms/content";
import { createMetadata } from "@/lib/seo/config";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo/jsonLd";

export const metadata: Metadata = createMetadata({
  title: "Home",
  path: "/",
});

const pillars = [
  {
    title: "Ontmoeting",
    text: "Warme ruimtes waar vrouwen elkaar kunnen leren kennen en verhalen delen.",
  },
  {
    title: "Groei",
    text: "Programma's die persoonlijke ontwikkeling, kennis en zichtbaarheid ondersteunen.",
  },
  {
    title: "Gemeenschap",
    text: "Een netwerk dat dichtbij voelt en tegelijk professioneel georganiseerd is.",
  },
];

export default async function Home() {
  const [programs, events, gallery, testimonials, partners] = await Promise.all([
    getPrograms(),
    getUpcomingEvents(),
    getPublicGallery(),
    getApprovedTestimonials(),
    getVisiblePartners(),
  ]);
  const featuredEvent = events[0];

  return (
    <>
      <StructuredData data={organizationJsonLd()} />
      <StructuredData data={websiteJsonLd()} />
      <PageHero
        body="Stichting Lumina Collective brengt vrouwen samen in Nederland rond ontmoeting, kennis, cultuur en maatschappelijke betrokkenheid."
        eyebrow="Stichting Lumina Collective"
        primary={{ label: "Doe mee", href: "/doe-mee" }}
        secondary={{ label: "Bekijk programma's", href: "/programmas" }}
        title="Ruimte voor vrouwen om te groeien, verbinden en zichtbaar te zijn."
        visual={visuals.communityTable}
      />

      <section className="py-16 md:py-24">
        <Container className="max-w-5xl">
          <Eyebrow>Onze overtuiging</Eyebrow>
          <p className="mt-6 font-serif text-[clamp(2.25rem,5vw,5rem)] leading-[0.98] text-deep-aubergine text-balance">
            Wij geloven dat verandering begint waar vrouwen elkaar ontmoeten,
            verhalen delen en samen nieuwe mogelijkheden creeren.
          </p>
        </Container>
      </section>

      <section className="bg-warm-white py-16 md:py-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                className="border-t border-deep-aubergine/15 pt-6"
                key={pillar.title}
              >
                <h2 className="font-serif text-3xl text-deep-aubergine">
                  {pillar.title}
                </h2>
                <p className="mt-4 leading-7 text-ink-brown/75">{pillar.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl space-y-4">
              <Eyebrow>Programma&apos;s</Eyebrow>
              <Heading>Activiteiten die vrouwen samenbrengen.</Heading>
            </div>
            <Button href="/programmas" variant="secondary">
              Alle programma&apos;s
            </Button>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {programs.slice(0, 3).map((program) => (
              <ProgramCard key={program.title} program={program} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-soft-blush/35 py-16 md:py-24">
        <Container className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center">
          <div className="space-y-5">
            <Eyebrow>Agenda</Eyebrow>
            <Heading>Volgende activiteit</Heading>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-warm-taupe">
              {featuredEvent.date} - {featuredEvent.location}
            </p>
            <p className="max-w-xl text-lg leading-8 text-ink-brown/78">
              {featuredEvent.description}
            </p>
            <Button href="/agenda">Bekijk agenda</Button>
          </div>
          <CMSImage
            className="min-h-[24rem]"
            fallback={featuredEvent.visual}
            image={featuredEvent.image}
          />
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="mb-10 max-w-2xl space-y-4">
            <Eyebrow>Gemeenschap</Eyebrow>
            <Heading>Een warme indruk van wat groeit.</Heading>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {gallery.slice(0, 5).map((item, index) => (
              <CMSImage
                altFallback={item.alt}
                caption={item.caption}
                className={
                  index === 0
                    ? "min-h-[18rem] md:col-span-2 md:min-h-[30rem]"
                    : index === 2
                      ? "min-h-[18rem] md:row-span-2"
                      : index === 4
                        ? "min-h-[18rem] md:col-span-2"
                        : "min-h-[18rem]"
                }
                fallback={item.visual}
                image={item.image}
                key={item.id}
              />
            ))}
          </div>
        </Container>
      </section>

      {testimonials.length > 0 && (
        <section className="bg-warm-white py-16 md:py-24">
          <Container>
            <div className="mb-10 max-w-2xl space-y-4">
              <Eyebrow>Verhalen</Eyebrow>
              <Heading>Woorden uit de gemeenschap.</Heading>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.slice(0, 3).map((testimonial) => (
                <figure
                  className="border-t border-deep-aubergine/15 pt-6"
                  key={testimonial.quote}
                >
                  <blockquote className="font-serif text-2xl leading-tight text-deep-aubergine">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 text-sm font-semibold uppercase tracking-[0.12em] text-warm-taupe">
                    {testimonial.anonymous ? "Anoniem" : testimonial.name}
                    {testimonial.roleOrContext ? ` - ${testimonial.roleOrContext}` : ""}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Container>
        </section>
      )}

      {partners.length > 0 && (
        <section className="py-12">
          <Container>
            <Eyebrow>Partners</Eyebrow>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4 text-lg font-semibold text-deep-aubergine">
              {partners.slice(0, 8).map((partner) =>
                partner.website ? (
                  <a
                    className="underline decoration-muted-gold/45 underline-offset-8 transition hover:decoration-deep-aubergine"
                    href={partner.website}
                    key={partner.name}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {partner.name}
                  </a>
                ) : (
                  <span key={partner.name}>{partner.name}</span>
                ),
              )}
            </div>
          </Container>
        </section>
      )}

      <CtaBand
        body="Meedoen kan klein beginnen: een bijeenkomst bezoeken, vrijwilliger worden, een idee delen of contact opnemen voor samenwerking."
        primary={{ label: "Doe mee", href: "/doe-mee" }}
        secondary={{ label: "Neem contact op", href: "/contact" }}
        title="Jouw betrokkenheid maakt ruimte voor meer vrouwen."
      />
    </>
  );
}
