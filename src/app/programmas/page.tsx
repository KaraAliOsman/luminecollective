import type { Metadata } from "next";
import { ProgramCard } from "@/components/cards/ProgramCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { photography } from "@/data/placeholders";
import { getPageByKey, getPrograms } from "@/lib/cms/content";
import { createMetadata } from "@/lib/seo/config";
import { StructuredData } from "@/components/seo/StructuredData";
import { webPageJsonLd } from "@/lib/seo/jsonLd";

const description = "Ontmoeting, educatie, welzijn en cultuur in Tilburg. Ontdek de programma's van Lumina voor vrouwen, nieuwkomers, jongeren en gezinnen.";
export const metadata: Metadata = createMetadata({ title: "Programma's", description, path: "/programmas" });

export default async function ProgrammasPage() {
  const [page, programs] = await Promise.all([getPageByKey("programmas"), getPrograms()]);
  return <>
    <StructuredData data={webPageJsonLd({ path: "/programmas", title: "Programma's", description })} />
    <PageHero eyebrow="Ontmoeting, ontwikkeling, welzijn en cultuur" title="Onze programma's" body="Ontdek wat bij jou past. Een nieuw contact, meer zelfvertrouwen of de kans om jouw talent met anderen te delen." visual={photography.youth} image={page?.heroImage} primary={{ label: "Bekijk de programma's", href: "#aanbod" }} secondary={{ label: "Bekijk de agenda", href: "/agenda" }} />
    <section className="section" id="aanbod"><Container>
      <div className="section-heading"><div><p className="section-index">Het aanbod van Lumina</p><Heading>Wat wil jij doen?</Heading></div></div>
      <div className="program-grid program-grid--editorial">{programs.map((program, index) => <ProgramCard key={program.slug} program={program} index={index} />)}</div>
    </Container></section>
    <section className="section section--lilac"><Container className="intro-grid"><div><p className="section-index">Praktisch</p><Heading>Je hoeft het niet<br />allemaal al te weten.</Heading></div><div className="editorial-text"><p>We bouwen ons aanbod stap voor stap op, in gesprek met deelnemers en samenwerkingspartners. De concrete data, locaties en eventuele bijdragen staan bij de activiteiten zodra ze zijn vastgesteld.</p><p>Wil je weten wat er nu mogelijk is, heb je een vraag over toegankelijkheid of zoek je een activiteit voor jouw gezin? We helpen je graag verder.</p></div></Container></section>
    <CtaBand title="Wat zou jij willen doen?" body="Vertel ons wat je zoekt. We denken mee over een programma of kennismaking die bij jou past." primary={{ label: "Vertel het ons", href: "/contact?onderwerp=Programma%27s" }} secondary={{ label: "Doe mee", href: "/doe-mee" }} />
  </>;
}
