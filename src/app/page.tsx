import type { Metadata } from "next";

import { ProgramCard } from "@/components/cards/ProgramCard";
import { StructuredData } from "@/components/seo/StructuredData";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { Button } from "@/components/ui/Button";
import { CMSImage } from "@/components/ui/CMSImage";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { visuals } from "@/data/placeholders";
import {
  getApprovedTestimonials,
  getPageByKey,
  getPrograms,
  getPublicGallery,
  getUpcomingEvents,
  getVisiblePartners,
} from "@/lib/cms/content";
import { createMetadata } from "@/lib/seo/config";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo/jsonLd";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageByKey("home");

  const fallbackTitle = "Verbinding & Groei voor Vrouwen";
  const title = page?.seoTitle && page.seoTitle !== "Home" ? page.seoTitle : fallbackTitle;

  return createMetadata({
    title,
    description: page?.metaDescription,
    path: "/",
  });
}

const pillars = [
  {
    title: "Ontmoeting",
    text: "Warme ruimtes waar vrouwen elkaar kunnen leren kennen en verhalen delen.",
    icon: "01",
  },
  {
    title: "Groei",
    text: "Programma's die persoonlijke ontwikkeling, kennis en zichtbaarheid ondersteunen.",
    icon: "02",
  },
  {
    title: "Gemeenschap",
    text: "Een netwerk dat dichtbij voelt en tegelijk professioneel georganiseerd is.",
    icon: "03",
  },
];

export default async function Home() {
  const [page, programs, events, gallery, testimonials, partners] = await Promise.all([
    getPageByKey("home"),
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
        body={
          page?.heroText ||
          "Stichting Lumina Collective brengt vrouwen samen in Nederland rond ontmoeting, kennis, cultuur en maatschappelijke betrokkenheid."
        }
        eyebrow="Stichting Lumina Collective"
        image={page?.heroImage}
        primary={{ label: "Doe mee", href: "/doe-mee" }}
        secondary={{ label: "Bekijk programma's", href: "/programmas" }}
        title={
          page?.heroTitle ||
          "Ruimte voor vrouwen om te groeien, verbinden en zichtbaar te zijn."
        }
        visual={visuals.communityTable}
      />

      {/* Overtuiging Section */}
      <section className="py-10 sm:py-14 md:py-20">
        <Container className="max-w-5xl">
          <FadeInSection>
            <Eyebrow>Onze overtuiging</Eyebrow>
            <p className="mt-6 font-serif text-[clamp(2.25rem,5vw,5rem)] leading-[0.98] text-deep-aubergine text-balance">
              Wij geloven dat verandering begint waar vrouwen elkaar ontmoeten,
              verhalen delen en samen nieuwe mogelijkheden creëren.
            </p>
            <div className="mt-8 h-px w-16 bg-gradient-to-r from-muted-gold to-transparent" />
          </FadeInSection>
        </Container>
      </section>

      {/* Pillars Section */}
      <section className="bg-warm-white py-10 sm:py-14 md:py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <FadeInSection key={pillar.title} delay={(index + 1) * 100 as 100 | 200 | 300}>
                <article
                  className="group border-t border-deep-aubergine/15 pt-6 transition-all duration-300 hover:border-muted-gold/50"
                >
                  <span className="text-sm font-semibold text-muted-gold">
                    {pillar.icon}
                  </span>
                  <h2 className="mt-3 font-serif text-3xl text-deep-aubergine">
                    {pillar.title}
                  </h2>
                  <p className="mt-4 leading-7 text-ink-brown/75">{pillar.text}</p>
                </article>
              </FadeInSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Programs Section */}
      <section className="py-10 sm:py-14 md:py-20">
        <Container>
          <FadeInSection>
            <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl space-y-4">
                <Eyebrow>Programma&apos;s</Eyebrow>
                <Heading>Activiteiten die vrouwen samenbrengen.</Heading>
              </div>
              <Button href="/programmas" variant="secondary">
                Alle programma&apos;s
              </Button>
            </div>
          </FadeInSection>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {programs.slice(0, 3).map((program, index) => (
              <FadeInSection key={program.title} delay={(index + 1) * 100 as 100 | 200 | 300}>
                <ProgramCard program={program} />
              </FadeInSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Event Section */}
      <section className="bg-soft-blush/35 py-10 sm:py-14 md:py-20">
        <Container className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center">
          <FadeInSection animation="slide-left">
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
          </FadeInSection>
          <FadeInSection animation="slide-right">
            <div className="img-zoom overflow-hidden">
              <CMSImage
                className="h-72 sm:h-80 md:h-[24rem]"
                fallback={featuredEvent.visual}
                image={featuredEvent.image}
              />
            </div>
          </FadeInSection>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="py-10 sm:py-14 md:py-20">
        <Container>
          <FadeInSection>
            <div className="mb-10 max-w-2xl space-y-4">
              <Eyebrow>Gemeenschap</Eyebrow>
              <Heading>Een warme indruk van wat groeit.</Heading>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-4">
            {gallery.slice(0, 5).map((item, index) => (
              <FadeInSection
                key={item.id}
                animation="scale-in"
                className={
                  index === 0
                    ? "md:col-span-2"
                    : index === 2
                      ? "md:row-span-2"
                      : index === 4
                        ? "col-span-2"
                        : ""
                }
                delay={Math.min((index + 1) * 100, 500) as 100 | 200 | 300 | 400 | 500}
              >
                <div className="img-zoom overflow-hidden">
                  <CMSImage
                    altFallback={item.alt}
                    caption={item.caption}
                    className={
                      index === 0
                        ? "h-36 sm:h-56 md:h-[26rem]"
                        : index === 2
                          ? "h-36 sm:h-56 md:h-full md:min-h-[26rem]"
                          : index === 4
                            ? "h-36 sm:h-56 md:h-52"
                            : "h-36 sm:h-56 md:h-52"
                    }
                    fallback={item.visual}
                    image={item.image}
                  />
                </div>
              </FadeInSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      {testimonials.length > 0 && (
        <section className="bg-warm-white py-10 sm:py-14 md:py-20">
          <Container>
            <FadeInSection>
              <div className="mb-10 max-w-2xl space-y-4">
                <Eyebrow>Verhalen</Eyebrow>
                <Heading>Woorden uit de gemeenschap.</Heading>
              </div>
            </FadeInSection>
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <FadeInSection key={testimonial.quote} delay={(index + 1) * 100 as 100 | 200 | 300}>
                  <figure
                    className="border-t border-deep-aubergine/15 pt-6 transition-colors duration-300 hover:border-muted-gold/50"
                  >
                    <blockquote className="font-serif text-2xl leading-tight text-deep-aubergine">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-5 text-sm font-semibold uppercase tracking-[0.12em] text-warm-taupe">
                      {testimonial.anonymous ? "Anoniem" : testimonial.name}
                      {testimonial.roleOrContext ? ` - ${testimonial.roleOrContext}` : ""}
                    </figcaption>
                  </figure>
                </FadeInSection>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Partners Section */}
      {partners.length > 0 && (
        <section className="py-12">
          <Container>
            <FadeInSection>
              <Eyebrow>Partners</Eyebrow>
              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4 text-lg font-semibold text-deep-aubergine">
                {partners.slice(0, 8).map((partner) =>
                  partner.website ? (
                    <a
                      className="underline decoration-muted-gold/45 underline-offset-8 transition-all duration-300 hover:decoration-deep-aubergine hover:scale-[1.02]"
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
            </FadeInSection>
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
