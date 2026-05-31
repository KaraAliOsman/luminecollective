import type { Metadata } from "next";

import { ProgramCard } from "@/components/cards/ProgramCard";
import { StructuredData } from "@/components/seo/StructuredData";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { visuals } from "@/data/placeholders";
import { getPrograms } from "@/lib/cms/content";
import { createMetadata } from "@/lib/seo/config";
import { webPageJsonLd } from "@/lib/seo/jsonLd";

const description =
  "Bekijk de programma's en activiteiten van Stichting Lumina Collective rond ontmoeting, groei, cultuur en participatie.";

export const metadata: Metadata = createMetadata({
  title: "Programma's",
  description,
  path: "/programmas",
});

export default async function ProgrammasPage() {
  const programs = await getPrograms();

  return (
    <>
      <StructuredData
        data={webPageJsonLd({
          path: "/programmas",
          title: "Programma's | Stichting Lumina Collective",
          description,
        })}
      />
      <PageHero
        body="Onze programma's brengen vrouwen samen rond ontmoeting, persoonlijke ontwikkeling, cultuur, ondersteuning en maatschappelijke betrokkenheid."
        eyebrow="Programma's"
        primary={{ label: "Bekijk agenda", href: "/agenda" }}
        secondary={{ label: "Doe mee", href: "/doe-mee" }}
        title="Programma's die vrouwen samenbrengen en versterken."
        visual={visuals.warmWorkshop}
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="mb-12 max-w-3xl space-y-4">
            <Eyebrow>Activiteiten</Eyebrow>
            <Heading>Van kleine ontmoetingen tot zichtbare participatie.</Heading>
          </div>
          <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <ProgramCard key={program.slug} program={program} />
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
