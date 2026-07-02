import type { Metadata } from "next";

import { StructuredData } from "@/components/seo/StructuredData";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Prose } from "@/components/ui/Prose";
import { VisualPlaceholder } from "@/components/ui/VisualPlaceholder";
import { visuals } from "@/data/placeholders";
import { getPageByKey } from "@/lib/cms/content";
import { values } from "@/data/values";
import { createMetadata } from "@/lib/seo/config";
import { webPageJsonLd } from "@/lib/seo/jsonLd";

const description =
  "Leer Stichting Lumina Collective kennen: een Tilburgse stichting voor vrouwen rond ontmoeting, ondersteuning, cultuur en participatie.";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageByKey("over-ons");

  return createMetadata({
    title: page?.seoTitle || "Over Ons & Onze Missie",
    description: page?.metaDescription || description,
    path: "/over-ons",
  });
}

export default async function OverOnsPage() {
  const page = await getPageByKey("over-ons");
  const pageDescription = page?.metaDescription || description;

  return (
    <>
      <StructuredData
        data={webPageJsonLd({
          path: "/over-ons",
          title: "Over ons | Stichting Lumina Collective",
          description: pageDescription,
        })}
      />
      <PageHero
        body={
          page?.heroText ||
          "Stichting Lumina Collective is een Tilburgse stichting voor sociaal-maatschappelijk welzijnswerk. We bouwen aan een toegankelijke plek waar vrouwen elkaar ontmoeten, steun vinden en nieuwe stappen zetten."
        }
        eyebrow="Over ons"
        image={page?.heroImage}
        primary={{ label: "Doe mee", href: "/doe-mee" }}
        secondary={{ label: "Neem contact op", href: "/contact" }}
        title={page?.heroTitle || "Wij bouwen aan vertrouwen, verbinding en zichtbaarheid."}
        visual={visuals.supportCircle}
      />

      <section className="py-10 sm:py-14 md:py-20">
        <Container className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <FadeInSection animation="slide-left">
            <div>
              <Eyebrow>Ons verhaal</Eyebrow>
            </div>
          </FadeInSection>
          <FadeInSection animation="slide-right">
            <Prose className="max-w-3xl">
              <p>
                Lumina Collective groeit vanuit het idee dat echte gemeenschap begint
                bij aandacht. Niet met grote woorden, maar met plekken waar vrouwen
                zich gezien, gehoord en welkom voelen.
              </p>
              <p>
                Vanuit Tilburg brengen we ontmoeting, cultuur, kennis, ondersteuning
                en maatschappelijke betrokkenheid samen. Zo ontstaat een netwerk
                waar vrouwen kunnen deelnemen, bijdragen en groeien op een manier
                die past bij hun leven.
              </p>
            </Prose>
          </FadeInSection>
        </Container>
      </section>

      <section className="bg-warm-white py-10 sm:py-14 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <FadeInSection animation="slide-left">
            <div className="space-y-5">
              <Eyebrow>Missie</Eyebrow>
              <Heading>Vrouwen samenbrengen met zorg en richting.</Heading>
              <p className="text-lg leading-8 text-ink-brown/78">
                Onze missie is om vrouwen in Tilburg en omgeving ruimte te geven
                voor ontmoeting, ondersteuning, cultuur, ontwikkeling en zichtbare
                participatie.
              </p>
            </div>
          </FadeInSection>
          <FadeInSection animation="slide-right">
            <div className="space-y-5 border-t border-deep-aubergine/15 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <Eyebrow>Visie</Eyebrow>
              <Heading>Een gemeenschap die vertrouwen opbouwt.</Heading>
              <p className="text-lg leading-8 text-ink-brown/78">
                We werken aan een samenleving waarin vrouwen elkaar versterken,
                hun verhalen delen en nieuwe mogelijkheden durven innemen, met
                vertrouwen in zichzelf en hun omgeving.
              </p>
            </div>
          </FadeInSection>
        </Container>
      </section>

      <section className="py-10 sm:py-14 md:py-20">
        <Container>
          <FadeInSection>
            <div className="mb-10 max-w-2xl space-y-4">
              <Eyebrow>Waarden</Eyebrow>
              <Heading>Waar Lumina zorgvuldig aan bouwt.</Heading>
            </div>
          </FadeInSection>
          <div className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <FadeInSection key={value.title} delay={Math.min((index + 1) * 100, 500) as 100 | 200 | 300 | 400 | 500}>
                <article
                  className="border-t border-deep-aubergine/15 pt-6 transition-colors duration-300 hover:border-muted-gold/50"
                >
                  <h2 className="font-serif text-3xl text-deep-aubergine">
                    {value.title}
                  </h2>
                  <p className="mt-4 leading-7 text-ink-brown/75">
                    {value.description}
                  </p>
                </article>
              </FadeInSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14 md:py-20">
        <Container className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          <FadeInSection animation="slide-left">
            <div className="img-zoom overflow-hidden">
              <VisualPlaceholder
                className="h-72 sm:h-80 md:h-[30rem]"
                visual={visuals.communityTable}
              />
            </div>
          </FadeInSection>
          <FadeInSection animation="slide-right">
            <div className="space-y-5">
              <Eyebrow>Gemeenschap</Eyebrow>
              <Heading>Warm, zichtbaar en professioneel.</Heading>
              <p className="text-lg leading-8 text-ink-brown/78">
                De sfeer van Lumina moet voelbaar zijn: open genoeg om binnen te
                stappen, sterk genoeg om vertrouwen te geven en helder genoeg voor
                partners om samen te werken.
              </p>
            </div>
          </FadeInSection>
        </Container>
      </section>

      <CtaBand
        body="Wil je deelnemen, vrijwilliger worden of onderzoeken hoe we kunnen samenwerken? We horen graag van je."
        primary={{ label: "Doe mee", href: "/doe-mee" }}
        secondary={{ label: "Contact", href: "/contact" }}
        title="Er is ruimte om mee te bouwen."
      />
    </>
  );
}
