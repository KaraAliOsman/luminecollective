import type { Metadata } from "next";
import { ArrowRight, FileText, MapPin, Plus } from "lucide-react";
import { ProgramCard } from "@/components/cards/ProgramCard";
import { HomeSections } from "@/components/home/HomeSections";
import { StructuredData } from "@/components/seo/StructuredData";
import { CtaBand } from "@/components/sections/CtaBand";
import { Button } from "@/components/ui/Button";
import { CMSImage } from "@/components/ui/CMSImage";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { TextLink } from "@/components/ui/TextLink";
import { photography } from "@/data/placeholders";
import { getApprovedTestimonials, getPageByKey, getPrograms, getPublicGallery, getUpcomingEvents, getVisiblePartners } from "@/lib/cms/content";
import { createMetadata } from "@/lib/seo/config";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo/jsonLd";

export const metadata: Metadata = createMetadata({ title: "Samen leven. Samen groeien.", path: "/" });

const questions = [
  { question: "Voor wie is Lumina er?", answer: "Lumina zet zich in voor vrouwen van alle leeftijden, nieuwkomers, jongeren en gezinnen. Bij ieder programma lees je voor wie het bedoeld is. We werken vanuit Tilburg en staan open voor verschillende achtergronden en ervaringen." },
  { question: "Kan ik meedoen als ik nog niemand ken?", answer: "Zeker. Je kunt alleen contact opnemen of iemand meenemen bij een eerste kennismaking. Vertel ons wat je zoekt; we denken met je mee over een activiteit of volgende stap die bij je past." },
  { question: "Kost deelname geld?", answer: "Dat verschilt per activiteit. Bij activiteiten waarvoor een eigen bijdrage geldt, houden we rekening met de financiële mogelijkheden van de doelgroep. Je hoort vooraf wat de eventuele kosten zijn." },
  { question: "Hoe kan ik vrijwilliger worden?", answer: "Via de pagina Doe mee kun je je interesse doorgeven. Of je nu graag organiseert, mensen begeleidt of een praktische vaardigheid wilt delen: we maken graag kennis en bekijken samen wat past." },
];

export default async function Home() {
  const [page, programs, events, gallery, testimonials, partners] = await Promise.all([
    getPageByKey("home"), getPrograms(), getUpcomingEvents(), getPublicGallery(), getApprovedTestimonials(), getVisiblePartners(),
  ]);
  return <>
    <StructuredData data={organizationJsonLd()} />
    <StructuredData data={websiteJsonLd()} />
    <section className="home-hero" aria-label="Welkom bij Lumina">
      <CMSImage className="home-hero__photo" fallback={photography.together} image={page?.heroImage} priority sizes="100vw" />
      <Container className="home-hero__inner">
        <p className="home-hero__location"><MapPin size={15} aria-hidden="true" />Stichting Lumina Collective · Tilburg</p>
        <h1>Lumina Collective</h1>
        <div className="home-hero__bottom">
          <p>Een plek om elkaar te ontmoeten.<br />En samen verder te groeien.</p>
          <div className="actions"><Button href="/doe-mee" className="button--coral">Vind jouw plek<ArrowRight size={17} aria-hidden="true" /></Button><Button href="/programmas" variant="outlineOnDark">Onze programma&apos;s</Button></div>
        </div>
      </Container>
    </section>
    <div className="welcome-strip"><Container className="welcome-strip__inner"><p>Voor vrouwen, nieuwkomers, jongeren en gezinnen. Voor elkaar.</p><TextLink href="/over-ons">Maak kennis met Lumina</TextLink></Container></div>

    {page?.homeSections?.length ? <HomeSections sections={page.homeSections} programs={programs} event={events[0]} gallery={gallery} testimonials={testimonials} partners={partners} /> : <>
      <section className="section">
        <Container className="intro-grid">
          <div><p className="section-index">Dit is Lumina</p><Heading>Je hoort erbij.<br />En je doet ertoe.</Heading></div>
          <div className="intro-grid__body"><p className="lead">Een nieuw contact, iets leren, je talent delen. Soms begint een verandering heel dichtbij.</p><p className="lead">Vanuit Tilburg brengt Lumina mensen samen via ontmoeting, educatie, cultuur en vrijwillige inzet. Met bijzondere aandacht voor vrouwen en gelijke kansen, en met ruimte voor de mensen om hen heen.</p><TextLink href="/over-ons">Ons verhaal en onze missie</TextLink><div className="audience-list"><span>Ontmoeting</span><span>Ontwikkeling</span><span>Welzijn</span><span>Cultuur</span></div></div>
        </Container>
      </section>

      <section className="section section--sage">
        <Container>
          <div className="section-heading"><div><p className="section-index">Wat we doen</p><Heading>Grote mogelijkheden.<br />Een persoonlijke eerste stap.</Heading></div><TextLink href="/programmas">Alle programma&apos;s</TextLink></div>
          <div className="program-grid">{programs.slice(0, 4).map((program, index) => <ProgramCard key={program.slug} program={program} index={index} />)}</div>
        </Container>
      </section>

      <section className="feature-story">
        <CMSImage className="feature-story__image" fallback={photography.conversation} sizes="(max-width: 640px) 100vw, 50vw" />
        <div className="feature-story__copy">
          <p className="section-index">Op jouw manier</p><Heading>Het begint met<br />een goed gesprek.</Heading>
          <p>Misschien wil je andere mensen leren kennen. Misschien wil je iets leren, of juist iets voor een ander betekenen. Je hoeft het nog niet precies te weten.</p><p className="mt-4">Vertel ons wat je bezighoudt. We luisteren en bekijken samen hoe je kunt aansluiten.</p>
          <TextLink href="/contact?onderwerp=Kennismaken">Laten we kennismaken</TextLink>
        </div>
      </section>

      <section className="rose-quote-banner" aria-label="Visie van Stichting Lumina Collective">
        <Container>
          <blockquote>
            &ldquo;In onze kerngedachte kan elk mens, elke vrouw, iets waardevols teruggeven aan de maatschappij, een klein bloemblaadje van zichzelf. Met al onze krachten gebundeld zijn we <em>een grote bos bloeiende rozen</em>, een bloeiende samenleving.&rdquo;
          </blockquote>
          <cite>Uit het Beleidsplan 2026–2030 · Stichting Lumina Collective Tilburg</cite>
        </Container>
      </section>

      <section className="section"><Container>
        <div className="section-heading"><div><p className="section-index">Meedoen bij Lumina</p><Heading>Van nieuwsgierig<br />naar betrokken.</Heading></div><TextLink href="/doe-mee">Zo kun je meedoen</TextLink></div>
        <ol className="steps">
          <li><span className="steps__number">01</span><h3>Laat van je horen</h3><p>Stuur een bericht, bel ons of kom langs tijdens een open koffieochtend. Een vraag, een idee of gewoon kennismaken: je bent welkom.</p></li>
          <li><span className="steps__number">02</span><h3>We leren je kennen</h3><p>In een laagdrempelig gesprek ontdekken we wat je zoekt en welke activiteit, workshop of vrijwilligersrol het beste bij jou past.</p></li>
          <li><span className="steps__number">03</span><h3>Sluit aan en groei mee</h3><p>Ontmoet nieuwe mensen uit Tilburg, ontwikkel je talenten en draag bij aan de gemeenschap. Op jouw eigen tempo.</p></li>
        </ol>
      </Container></section>

      <section className="policy-band"><Container className="policy-band__inner">
        <FileText className="policy-band__icon" size={46} strokeWidth={1.4} aria-hidden="true" />
        <div><h2>Vertrouwen begint met openheid.</h2><p>Lees waar we voor staan, wie de stichting bestuurt en hoe we onze middelen inzetten. Ons beleidsplan 2026-2030 en ANBI-transparantieportaal zijn volledig openbaar.</p></div>
        <Button href="/anbi" variant="outlineOnDark">ANBI & transparantie<ArrowRight size={16} aria-hidden="true" /></Button>
      </Container></section>

      <section className="section"><Container className="faq-layout">
        <div><p className="section-index">Goed om te weten</p><Heading>Een vraag?<br />Heel begrijpelijk.</Heading><TextLink href="/contact">Stel jouw vraag</TextLink></div>
        <div className="faq-list">{questions.map(item => <details key={item.question}><summary>{item.question}<Plus aria-hidden="true" /></summary><p>{item.answer}</p></details>)}</div>
      </Container></section>
      <CtaBand title="Er is ook een plek voor jou." body="Als deelnemer, vrijwilliger of samenwerkingspartner. We maken graag kennis met je." primary={{ label: "Doe mee", href: "/doe-mee" }} secondary={{ label: "Neem contact op", href: "/contact" }} />
    </>}
  </>;
}
