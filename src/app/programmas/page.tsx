import type { Metadata } from "next";

import { ProgramCard } from "@/components/cards/ProgramCard";
import { StructuredData } from "@/components/seo/StructuredData";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { visuals } from "@/data/placeholders";
import { getPageByKey, getPrograms } from "@/lib/cms/content";
import { createMetadata } from "@/lib/seo/config";
import { webPageJsonLd } from "@/lib/seo/jsonLd";

const description =
  "Bekijk de programma's van Stichting Lumina Collective rond ontmoeting, ondersteuning, cultuur, ontwikkeling en participatie in Tilburg.";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageByKey("programmas");

  return createMetadata({
    title: page?.seoTitle || "Onze Programma's & Ontmoetingen",
    description: page?.metaDescription || description,
    path: "/programmas",
  });
}

export default async function ProgrammasPage() {
  const [page, programs] = await Promise.all([
    getPageByKey("programmas"),
    getPrograms(),
  ]);
  const pageDescription = page?.metaDescription || description;

  return (
    <>
      <StructuredData
        data={webPageJsonLd({
          path: "/programmas",
          title: "Programma's | Stichting Lumina Collective",
          description: pageDescription,
        })}
      />
      <PageHero
        body={
          page?.heroText ||
          "Onze programma's zijn ontworpen voor vrouwen die verbinding, praktische steun, culturele herkenning of een volgende stap in de samenleving zoeken."
        }
        eyebrow="Programma's"
        image={page?.heroImage}
        primary={{ label: "Bekijk agenda", href: "/agenda" }}
        secondary={{ label: "Doe mee", href: "/doe-mee" }}
        title={page?.heroTitle || "Programma's met aandacht, richting en echte ontmoeting."}
        visual={visuals.warmWorkshop}
      />

      <section className="py-10 sm:py-14 md:py-20">
        <Container>
          <FadeInSection>
            <div className="mb-12 max-w-3xl space-y-4">
              <Eyebrow>Activiteiten</Eyebrow>
              <Heading>Van eerste kennismaking tot zichtbare participatie.</Heading>
              <p className="leading-7 text-ink-brown/70">
                Kies wat past bij jouw moment. Sommige activiteiten zijn rustig en
                persoonlijk, andere draaien om leren, cultuur of samenwerken met
                partners in de stad.
              </p>
            </div>
          </FadeInSection>
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <FadeInSection key={program.slug} delay={Math.min((index % 3 + 1) * 100, 300) as 100 | 200 | 300}>
                <ProgramCard program={program} />
              </FadeInSection>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        body="Nog niet zeker welk programma past? Stuur ons een bericht. We denken graag met je mee."
        primary={{ label: "Neem contact op", href: "/contact" }}
        secondary={{ label: "Bekijk agenda", href: "/agenda" }}
        title="Meedoen begint met een eerste gesprek."
      />
    </>
  );
}
