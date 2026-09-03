import type { Metadata } from "next";
import { CalendarDays } from "lucide-react";
import { EventCard } from "@/components/cards/EventCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { TextLink } from "@/components/ui/TextLink";
import { getUpcomingEvents } from "@/lib/cms/content";
import { createMetadata } from "@/lib/seo/config";

export const metadata: Metadata = createMetadata({ title: "Agenda", description: "Bijeenkomsten, workshops en activiteiten van Lumina Collective in Tilburg. Bekijk wat er op de agenda staat.", path: "/agenda" });

export default async function AgendaPage() {
  const events = await getUpcomingEvents();
  return <><header className="page-heading"><Container><p className="section-index">Tijd om elkaar te ontmoeten</p><Heading as="h1" size="xl">Onze agenda</Heading><p className="lead">Een ontmoeting, workshop of culturele activiteit. Hier vind je de bijeenkomsten waarvoor de datum en locatie zijn vastgesteld.</p></Container></header>
    <section className="section"><Container>{events.length ? <div className="event-list">{events.map(event => <EventCard event={event} key={event.slug} />)}</div> : <div className="empty-agenda"><CalendarDays size={42} strokeWidth={1.5} aria-hidden="true" /><div><Heading size="md">Nieuwe ontmoetingen<br />zijn in voorbereiding.</Heading><p>Er zijn op dit moment geen activiteiten met een vastgestelde datum gepubliceerd. Wil je alvast kennismaken of laten weten waar je interesse in hebt? Neem contact op; we vertellen je graag wat er mogelijk is.</p><TextLink href="/contact?onderwerp=Agenda%20en%20activiteiten">Informeer naar de activiteiten</TextLink></div></div>}</Container></section>
    <CtaBand title="Een idee voor een activiteit?" body="Een workshop, een ontmoeting of een samenwerking in de buurt. We horen graag wat jij zou willen organiseren." primary={{ label: "Deel je idee", href: "/contact?onderwerp=Idee%20voor%20een%20activiteit" }} secondary={{ label: "Onze programma's", href: "/programmas" }} />
  </>;
}
