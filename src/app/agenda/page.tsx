import type { Metadata } from "next";

import { EventCard } from "@/components/cards/EventCard";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { StructuredData } from "@/components/seo/StructuredData";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { visuals } from "@/data/placeholders";
import { getPageByKey, getUpcomingEvents } from "@/lib/cms/content";
import { createMetadata } from "@/lib/seo/config";
import { webPageJsonLd } from "@/lib/seo/jsonLd";

const description =
  "Bekijk komende activiteiten en bijeenkomsten van Stichting Lumina Collective.";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageByKey("agenda");

  return createMetadata({
    title: page?.seoTitle || "Agenda & Aankomende Activiteiten",
    description: page?.metaDescription || description,
    path: "/agenda",
  });
}

export default async function AgendaPage() {
  const [page, events] = await Promise.all([
    getPageByKey("agenda"),
    getUpcomingEvents(),
  ]);
  const pageDescription = page?.metaDescription || description;

  return (
    <>
      <StructuredData
        data={webPageJsonLd({
          path: "/agenda",
          title: "Agenda | Stichting Lumina Collective",
          description: pageDescription,
        })}
      />
      <PageHero
        body={
          page?.heroText ||
          "Hier delen we komende bijeenkomsten, workshops en momenten waarop vrouwen elkaar kunnen ontmoeten, leren en deelnemen."
        }
        eyebrow="Agenda"
        image={page?.heroImage}
        primary={{ label: "Updates ontvangen", href: "/contact" }}
        secondary={{ label: "Doe mee", href: "/doe-mee" }}
        title={page?.heroTitle || "Activiteiten met aandacht voor ontmoeting en groei."}
        visual={visuals.culturalMoment}
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="mb-8 max-w-2xl space-y-4">
            <Eyebrow>Binnenkort</Eyebrow>
            <Heading>Komende activiteiten.</Heading>
          </div>
          <div>
            {events.map((event) => (
              <EventCard event={event} key={event.slug} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-warm-white py-16 md:py-20">
        <Container className="grid gap-8 md:grid-cols-[1fr_26rem] md:items-start">
          <div className="max-w-3xl space-y-4">
            <Eyebrow>Nieuwe activiteiten</Eyebrow>
            <Heading size="md">
              Binnenkort delen we nieuwe activiteiten.
            </Heading>
            <p className="text-lg leading-8 text-ink-brown/78">
              Volg ons op Instagram of schrijf je in voor updates.
            </p>
          </div>
          <div className="bg-lumina-ivory p-6">
            <NewsletterForm />
            <Button
              className="mt-5 w-full"
              href="https://www.instagram.com/stichtinglumina"
              variant="secondary"
            >
              Volg ons op Instagram
            </Button>
          </div>
        </Container>
      </section>

      <CtaBand
        body="Heb je een idee voor een activiteit, samenwerking of bijeenkomst? We staan open voor voorstellen die passen bij onze gemeenschap."
        primary={{ label: "Contact", href: "/contact" }}
        title="Samen kunnen nieuwe ontmoetingen ontstaan."
      />
    </>
  );
}
