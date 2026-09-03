import type { Metadata } from "next";
import { HandHeart, HeartHandshake, Users } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { TextLink } from "@/components/ui/TextLink";
import { CopyIban } from "@/components/ui/CopyIban";
import { VolunteerForm } from "@/components/forms/VolunteerForm";
import { photography } from "@/data/placeholders";
import { getPageByKey } from "@/lib/cms/content";
import { createMetadata } from "@/lib/seo/config";
import { StructuredData } from "@/components/seo/StructuredData";
import { webPageJsonLd } from "@/lib/seo/jsonLd";

const description = "Sluit aan bij Lumina als deelnemer, vrijwilliger of partner. Steun onze stichting met jouw tijd, kennis, materialen of een donatie.";
export const metadata: Metadata = createMetadata({ title: "Doe mee", description, path: "/doe-mee" });

export default async function DoeMeePage() {
  const page = await getPageByKey("doe-mee");
  return <>
    <StructuredData data={webPageJsonLd({ path: "/doe-mee", title: "Doe mee", description })} />
    <PageHero eyebrow="Er is een plek voor jou" title="Doe mee met Lumina" body="Met je nieuwsgierigheid, jouw ervaring of wat tijd voor een ander. Je kunt op verschillende manieren bijdragen aan een betrokken gemeenschap." visual={photography.volunteering} image={page?.heroImage} primary={{ label: "Ik wil kennismaken", href: "/contact?onderwerp=Kennismaken" }} secondary={{ label: "Vrijwilliger worden", href: "#vrijwilliger" }} />
    <section className="section"><Container><div className="join-options">
      <article className="join-option"><Users size={30} strokeWidth={1.5} aria-hidden="true" /><h2>Sluit aan</h2><p>Leer andere mensen kennen en ontdek welke activiteiten bij je passen. Je kunt ook eerst contact opnemen om rustig kennis te maken.</p><TextLink href="/contact?onderwerp=Meedoen">Ik wil meedoen</TextLink></article>
      <article className="join-option"><HandHeart size={30} strokeWidth={1.5} aria-hidden="true" /><h2>Deel je talent</h2><p>Help bij een activiteit, deel je kennis of ondersteun achter de schermen. Samen vinden we een rol die bij je past.</p><TextLink href="#vrijwilliger">Word vrijwilliger</TextLink></article>
      <article className="join-option"><HeartHandshake size={30} strokeWidth={1.5} aria-hidden="true" /><h2>Maak het mogelijk</h2><p>Met een donatie, materialen of een samenwerking help je onze maatschappelijke projecten verder.</p><TextLink href="#steunen">Steun Lumina</TextLink></article>
    </div></Container></section>
    <section className="section section--sage" id="vrijwilliger"><Container className="contact-layout">
      <div><p className="section-index">Vrijwillig, met betekenis</p><Heading className="mt-4 mb-6">Jouw inzet<br />maakt verschil.</Heading><p className="lead">We zoeken mensen die willen meebouwen. Je hoeft geen perfect cv te hebben; aandacht, betrokkenheid en betrouwbaarheid zijn een goed begin.</p><div className="editorial-text mt-6"><p>Je kunt helpen met activiteiten, communicatie, begeleiding, fotografie of organisatie. We bespreken samen je interesses, beschikbaarheid en wat je nodig hebt om aan de slag te gaan.</p><p>Eventuele vrijwilligersvergoedingen volgen het beloningsbeleid van de stichting.</p></div><TextLink href="/anbi#bestuur" className="mt-5">Ons vrijwilligersbeleid</TextLink></div>
      <div className="contact-form-panel"><h2>Vertel ons over jezelf</h2><p>Dit is een eerste kennismaking, geen verplichting.</p><VolunteerForm /></div>
    </Container></section>
    <section className="section" id="steunen"><Container className="two-column">
      <div><p className="section-index">Samen mogelijk maken</p><Heading className="mt-4 mb-6">Geef ontmoeting<br />de ruimte.</Heading><p className="lead">Donaties helpen ons om activiteiten en maatschappelijke projecten op te bouwen. Ook materialen, kennis of een passende samenwerking zijn welkom.</p><TextLink href="/contact?onderwerp=Sponsoring%20en%20samenwerking" className="mt-5">Bespreek een samenwerking</TextLink></div>
      <div><CopyIban /><p className="mt-5 text-sm text-warm-taupe">Meer weten over de besteding van middelen en de ANBI-aanvraag?</p><TextLink href="/anbi#financien">Bekijk onze verantwoording</TextLink></div>
    </Container></section>
  </>;
}
