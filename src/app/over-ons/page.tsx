import type { Metadata } from "next";

import { StructuredData } from "@/components/seo/StructuredData";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
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
  "Leer Stichting Lumina Collective kennen: een warme gemeenschap voor vrouwen rond ontmoeting, groei, cultuur en participatie.";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageByKey("over-ons");

  return createMetadata({
    title: page?.seoTitle || "Over ons",
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
          "Stichting Lumina Collective is ontstaan vanuit de behoefte aan een warme, zichtbare en toegankelijke plek waar vrouwen elkaar kunnen ontmoeten, ervaringen delen en nieuwe stappen zetten."
        }
        eyebrow="Over ons"
        image={page?.heroImage}
        primary={{ label: "Doe mee", href: "/doe-mee" }}
        secondary={{ label: "Neem contact op", href: "/contact" }}
        title={page?.heroTitle || "Wij zijn Lumina Collective."}
        visual={visuals.supportCircle}
      />

      <section className="py-16 md:py-24">
        <Container className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>Ons verhaal</Eyebrow>
          </div>
          <Prose className="max-w-3xl">
            <p>
              Lumina Collective groeit vanuit het idee dat echte gemeenschap
              begint bij aandacht. Niet met grote woorden, maar met plekken waar
              vrouwen zich gezien, gehoord en welkom voelen.
            </p>
            <p>
              De stichting brengt ontmoeting, cultuur, kennis en maatschappelijke
              betrokkenheid samen. Zo ontstaat een netwerk waar vrouwen kunnen
              deelnemen, bijdragen en groeien op een manier die past bij hun
              leven.
            </p>
          </Prose>
        </Container>
      </section>

      <section className="bg-warm-white py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-5">
            <Eyebrow>Missie</Eyebrow>
            <Heading>Mensen samenbrengen met zorg en richting.</Heading>
            <p className="text-lg leading-8 text-ink-brown/78">
              Onze missie is om vrouwen in Nederland ruimte te geven voor
              verbinding, groei, cultuur en zichtbare participatie.
            </p>
          </div>
          <div className="space-y-5 border-t border-deep-aubergine/15 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <Eyebrow>Visie</Eyebrow>
            <Heading>Een gemeenschap die vertrouwen opbouwt.</Heading>
            <p className="text-lg leading-8 text-ink-brown/78">
              We werken aan een samenleving waarin vrouwen elkaar versterken,
              hun verhalen delen en nieuwe mogelijkheden durven innemen.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="mb-10 max-w-2xl space-y-4">
            <Eyebrow>Waarden</Eyebrow>
            <Heading>Waar Lumina zorgvuldig aan bouwt.</Heading>
          </div>
          <div className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <article
                className="border-t border-deep-aubergine/15 pt-6"
                key={value.title}
              >
                <h2 className="font-serif text-3xl text-deep-aubergine">
                  {value.title}
                </h2>
                <p className="mt-4 leading-7 text-ink-brown/75">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          <VisualPlaceholder
            className="min-h-[30rem]"
            visual={visuals.communityTable}
          />
          <div className="space-y-5">
            <Eyebrow>Gemeenschap</Eyebrow>
            <Heading>Warm, zichtbaar en professioneel.</Heading>
            <p className="text-lg leading-8 text-ink-brown/78">
              De sfeer van Lumina moet voelbaar zijn: open genoeg om binnen te
              stappen, sterk genoeg om vertrouwen te geven en helder genoeg voor
              partners om samen te werken.
            </p>
          </div>
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
