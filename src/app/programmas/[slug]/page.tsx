import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, CalendarDays } from "lucide-react";
import { EventCard } from "@/components/cards/EventCard";
import { StructuredData } from "@/components/seo/StructuredData";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CMSImage } from "@/components/ui/CMSImage";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { TextLink } from "@/components/ui/TextLink";
import { getGalleryForProgram, getProgramBySlug, getProgramSlugs, getRelatedEventsForProgram } from "@/lib/cms/content";
import { createMetadata } from "@/lib/seo/config";
import { breadcrumbJsonLd } from "@/lib/seo/jsonLd";

type Props = { params: Promise<{ slug: string }> };
export async function generateStaticParams() { return getProgramSlugs(); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = await getProgramBySlug(slug);
  return program ? createMetadata({ title: program.seoTitle || program.title, description: program.metaDescription || program.description, path: `/programmas/${slug}` }) : {};
}

export default async function ProgrammaDetailPage({ params }: Props) {
  const { slug } = await params;
  const [program, relatedEvents, gallery] = await Promise.all([getProgramBySlug(slug), getRelatedEventsForProgram(slug), getGalleryForProgram(slug)]);
  if (!program) notFound();
  const crumbs = [{ name: "Home", path: "/" }, { name: "Programma's", path: "/programmas" }, { name: program.title, path: `/programmas/${slug}` }];
  const contactHref = `/contact?onderwerp=${encodeURIComponent(program.title)}`;
  const ctaHref = program.ctaHref && program.ctaHref !== `/programmas/${slug}` ? program.ctaHref : contactHref;
  return <>
    <StructuredData data={breadcrumbJsonLd(crumbs)} />
    <Breadcrumbs items={crumbs} />
    <PageHero eyebrow={program.category || "Programma"} title={program.title} body={program.description} visual={program.visual} image={program.image} primary={{ label: "Ik ben geïnteresseerd", href: ctaHref }} secondary={{ label: "Alle programma's", href: "/programmas" }} />
    <section className="section"><Container className="two-column">
      <div><p className="section-index">Over dit programma</p><Heading className="mt-4" size="lg">Ruimte voor jouw volgende stap.</Heading>
        {program.targetAudience && <div className="program-audience"><h2>Voor wie?</h2><p>{program.targetAudience}</p></div>}
      </div>
      <div className="editorial-text">
        {(program.longDescription || program.description).split("\n\n").map((text, i) => <p key={i}>{text}</p>)}
        {program.goals.length > 0 && <><h2>Waar we aan werken</h2><ul className="funding-list">{program.goals.map(goal => <li key={goal}><Check size={17} aria-hidden="true" /><span>{goal}</span></li>)}</ul></>}
      </div>
    </Container></section>
    <section className="section section--sage"><Container>
      <div className="section-heading"><div><p className="section-index">Aansluiten</p><Heading size="lg">Wat staat er op de agenda?</Heading></div><TextLink href="/agenda">De volledige agenda</TextLink></div>
      {relatedEvents.length ? <div className="event-list">{relatedEvents.map(event => <EventCard key={event.slug} event={event} />)}</div> : <div className="empty-agenda"><CalendarDays size={40} aria-hidden="true" /><div><h3>Activiteiten zijn in voorbereiding</h3><p>Er is nog geen datum gepubliceerd voor dit programma. Laat ons weten waar je interesse in hebt. We vertellen je graag wat er mogelijk is.</p><TextLink href={contactHref}>Laat van je horen</TextLink></div></div>}
    </Container></section>
    {gallery.length > 0 && <section className="section"><Container><div className="section-heading"><div><p className="section-index">In beeld</p><Heading size="lg">Momenten uit dit programma.</Heading></div></div><div className="gallery-grid">{gallery.map(item => <figure key={item.id}><CMSImage image={item.image} fallback={item.visual} altFallback={item.alt} />{item.caption && <figcaption>{item.caption}</figcaption>}</figure>)}</div></Container></section>}
    <CtaBand title="Zullen we kennismaken?" body="Stel je vraag of vertel wat je zoekt. Samen bekijken we hoe je kunt aansluiten." primary={{ label: "Neem contact op", href: contactHref }} secondary={{ label: "Meedoen bij Lumina", href: "/doe-mee" }} />
  </>;
}
