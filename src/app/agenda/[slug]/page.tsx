import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { EventCard } from "@/components/cards/EventCard";
import { StructuredData } from "@/components/seo/StructuredData";
import { CtaBand } from "@/components/sections/CtaBand";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CMSImage } from "@/components/ui/CMSImage";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { getEventBySlug, getEventSlugs, getGalleryForEvent, getRelatedEventsForEvent } from "@/lib/cms/content";
import { createMetadata } from "@/lib/seo/config";
import { breadcrumbJsonLd, eventJsonLd } from "@/lib/seo/jsonLd";
import { validDate } from "@/lib/utils/dates";

type Props = { params: Promise<{ slug: string }> };
export async function generateStaticParams() { return getEventSlugs(); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEventBySlug(slug);
  return event ? createMetadata({ title: event.seoTitle || event.title, description: event.metaDescription || event.description, path: `/agenda/${slug}` }) : {};
}

export default async function AgendaDetailPage({ params }: Props) {
  const { slug } = await params;
  const [event, related, gallery] = await Promise.all([getEventBySlug(slug), getRelatedEventsForEvent(slug), getGalleryForEvent(slug)]);
  if (!event) notFound();
  const active = event.status === "upcoming";
  const contact = `/contact?onderwerp=${encodeURIComponent(event.title)}`;
  const href = active && event.registrationUrl ? event.registrationUrl : contact;
  const label = active && event.registrationUrl ? "Aanmelden" : "Stel je vraag";
  const crumbs = [{ name: "Home", path: "/" }, { name: "Agenda", path: "/agenda" }, { name: event.title, path: `/agenda/${slug}` }];
  const facts = [
    ["Datum", event.date], ["Tijd", event.time ? `${event.time} uur (Nederlandse tijd)` : undefined],
    ["Locatie", event.location], ["Adres", event.locationAddress],
    ["Kosten", event.isFree ? "Gratis" : event.priceDescription || "Neem contact op voor de kosten"],
    ["Aantal deelnemers", event.capacity ? `Maximaal ${event.capacity}` : undefined],
  ];
  return <>
    <StructuredData data={breadcrumbJsonLd(crumbs)} />
    {validDate(event.dateStart) && <StructuredData data={eventJsonLd({ name: event.title, description: event.description, slug, startDate: event.dateStart!, endDate: event.dateEnd, locationName: event.locationName, locationAddress: event.locationAddress, isFree: event.isFree, status: event.status })} />}
    <Breadcrumbs items={crumbs} />
    <header className="page-heading"><Container><p className="section-index">{event.status === "cancelled" ? "Geannuleerd" : event.status === "past" ? "Terugblik" : "Agenda"}</p><Heading as="h1" size="xl">{event.title}</Heading>{!active && <p className="notice" role="status">{event.status === "cancelled" ? "Deze activiteit is geannuleerd. Aanmelden is niet meer mogelijk." : "Deze activiteit heeft al plaatsgevonden."}</p>}</Container></header>
    <Container><CMSImage className="article-photo" fallback={event.visual} image={event.image} priority sizes="100vw" /></Container>
    <section className="section"><Container className="two-column">
      <div><p className="section-index mb-6">Praktische informatie</p><dl className="fact-list">{facts.filter(([, value]) => value).map(([name, value]) => <div key={name}><dt>{name}</dt><dd>{value}</dd></div>)}</dl>{active && <a className="button button--primary mt-7" href={href} target={event.registrationUrl ? "_blank" : undefined} rel={event.registrationUrl ? "noreferrer" : undefined}>{label}<ArrowUpRight size={17} aria-hidden="true" /></a>}</div>
      <div className="editorial-text"><h2>Over deze activiteit</h2>{event.description.split("\n\n").map((text, i) => <p key={i}>{text}</p>)}<h2>Een vraag over meedoen?</h2><p>Wil je iets weten over bereikbaarheid, toegankelijkheid of deelname? <a href={contact}>Neem contact met ons op</a>, dan kijken we samen wat je nodig hebt.</p></div>
    </Container></section>
    {gallery.length > 0 && <section className="section section--sage"><Container><div className="section-heading"><div><p className="section-index">In beeld</p><Heading size="lg">Samen beleefd.</Heading></div></div><div className="gallery-grid">{gallery.map(item => <figure key={item.id}><CMSImage image={item.image} fallback={item.visual} altFallback={item.alt} />{item.caption && <figcaption>{item.caption}</figcaption>}</figure>)}</div></Container></section>}
    {related.length > 0 && <section className="section"><Container><div className="section-heading"><div><p className="section-index">Ook op de agenda</p><Heading size="lg">Andere ontmoetingen.</Heading></div></div><div className="event-list">{related.map(item => <EventCard key={item.slug} event={item} />)}</div></Container></section>}
    <CtaBand title={active ? "Zien we je daar?" : "Ontdek wat er nog meer kan."} body="Meer weten over deze activiteit of over Lumina? We horen graag van je." primary={{ label, href }} secondary={{ label: "Terug naar de agenda", href: "/agenda" }} />
  </>;
}
