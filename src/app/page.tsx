import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, FileText, MapPin, Plus } from "lucide-react";
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
import { brand } from "@/lib/constants/brand";
import { getApprovedTestimonials, getPageByKey, getPrograms, getPublicGallery, getUpcomingEvents, getVisiblePartners } from "@/lib/cms/content";
import { createMetadata } from "@/lib/seo/config";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo/jsonLd";

export const metadata: Metadata = createMetadata({ title: "Ontmoeting & ontwikkeling in Tilburg", path: "/" });

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
          <p>Ontmoeting, ontwikkeling en gelijke kansen.<br />Voor vrouwen. Met iedereen.</p>
          <div className="actions"><Button href="/doe-mee" className="button--coral">Doe mee<ArrowRight size={17} aria-hidden="true" /></Button><Button href="/programmas" variant="outlineOnDark">Onze programma&apos;s</Button></div>
        </div>
      </Container>
    </section>
    <nav className="welcome-strip" aria-label="Jouw plek bij Lumina"><Container className="welcome-strip__inner"><p>Wat brengt jou hier?</p><Link href="/doe-mee">Ik wil meedoen<ArrowUpRight size={19} aria-hidden="true" /></Link><Link href="/doe-mee#vrijwilliger">Ik wil iets betekenen<ArrowUpRight size={19} aria-hidden="true" /></Link><Link href="/contact?onderwerp=Samenwerken">Ik zoek samenwerking<ArrowUpRight size={19} aria-hidden="true" /></Link></Container></nav>

    {page?.homeSections?.length ? <HomeSections sections={page.homeSections} programs={programs} event={events[0]} gallery={gallery} testimonials={testimonials} partners={partners} /> : <>
      <section className="section">
        <Container className="intro-grid">
          <div><p className="section-index">Dit is Lumina</p><Heading size="xl">Mensen maken<br />Lumina.</Heading></div>
          <div className="intro-grid__body"><p className="lead">Een vrouw die haar talent ontdekt. Een nieuwkomer die aansluiting vindt. Iemand die tijd maakt voor een ander.</p><p>Vanuit Tilburg zet Lumina zich in voor vrouwen, nieuwkomers, jongeren en gezinnen. We brengen mensen samen om te leren, ervaringen te delen en mee te doen. Met aandacht voor ieders achtergrond, mogelijkheden en ambities.</p><TextLink href="/over-ons">Ons verhaal en onze missie</TextLink><div className="audience-list"><span>Ontmoeting</span><span>Ontwikkeling</span><span>Welzijn</span><span>Cultuur</span></div></div>
        </Container>
      </section>

      <section className="section section--sage">
        <Container>
          <div className="section-heading"><div><p className="section-index">Onze programma&apos;s</p><Heading size="xl">Wat wil jij doen?</Heading></div><TextLink href="/programmas">Bekijk het aanbod</TextLink></div>
          <div className="program-grid program-grid--editorial">{programs.slice(0, 4).map((program, index) => <ProgramCard key={program.slug} program={program} index={index} />)}</div>
        </Container>
      </section>

      <section className="feature-story">
        <CMSImage className="feature-story__image" fallback={photography.volunteering} sizes="(max-width: 640px) 100vw, 55vw" />
        <div className="feature-story__copy">
          <p className="section-index">Vrijwilligers maken het mogelijk</p><Heading>Wat jij kunt,<br />helpt een ander verder.</Heading>
          <p>Organiseren, iemand begeleiden, een workshop geven of foto&apos;s maken. Wat je graag doet, kan bij Lumina van betekenis zijn.</p><p className="mt-4">We bouwen aan een betrokken groep vrijwilligers. Vertel ons waar je energie van krijgt en hoeveel tijd je hebt. Samen bekijken we wat past.</p>
          <TextLink href="/doe-mee#vrijwilliger">Deel je talent</TextLink>
        </div>
      </section>

      <section className="rose-quote-banner" aria-label="Visie van Stichting Lumina Collective">
        <Container className="rose-quote-banner__inner">
          <div><p className="section-index">Waar we in geloven</p><a className="text-link" href={brand.policyPlan} target="_blank" rel="noopener noreferrer">Lees ons beleidsplan<ArrowUpRight size={17} aria-hidden="true" /></a></div>
          <figure>
          <blockquote>
            &ldquo;Met al onze krachten gebundeld, alle blaadjes verzameld, zijn we een grote bos bloeiende rozen, <em>een bloeiende samenleving.</em>&rdquo;
          </blockquote>
          <figcaption><cite>Beleidsplan 2026-2030 · Stichting Lumina Collective</cite></figcaption>
          </figure>
        </Container>
      </section>

      <section className="section"><Container>
        <div className="section-heading"><div><p className="section-index">Meedoen bij Lumina</p><Heading size="xl">Kom erbij.</Heading></div><TextLink href="/doe-mee">Zo kun je meedoen</TextLink></div>
        <ol className="steps">
          <li><span className="steps__number">01</span><h3>Laat van je horen</h3><p>Stuur een bericht of bel ons voor een kennismaking. Een vraag, een idee of gewoon meer weten: je bent welkom.</p></li>
          <li><span className="steps__number">02</span><h3>We leren je kennen</h3><p>In een laagdrempelig gesprek ontdekken we wat je zoekt en welke activiteit, workshop of vrijwilligersrol het beste bij jou past.</p></li>
          <li><span className="steps__number">03</span><h3>Sluit aan en groei mee</h3><p>Ontmoet nieuwe mensen uit Tilburg, ontwikkel je talenten en draag bij aan de gemeenschap. Op jouw eigen tempo.</p></li>
        </ol>
      </Container></section>

      <section className="policy-band"><Container className="policy-band__inner">
        <FileText className="policy-band__icon" size={46} strokeWidth={1.4} aria-hidden="true" />
        <div><h2>Open over onze stichting.</h2><p>Wie neemt de beslissingen? Hoe zetten we donaties in? Lees ons beleidsplan, maak kennis met het bestuur en bekijk onze verantwoording.</p></div>
        <Button href="/anbi" variant="outlineOnDark">ANBI & transparantie<ArrowRight size={16} aria-hidden="true" /></Button>
      </Container></section>

      <section className="section"><Container className="faq-layout">
        <div><p className="section-index">Goed om te weten</p><Heading>Veelgestelde vragen</Heading><TextLink href="/contact">Stel jouw vraag</TextLink></div>
        <div className="faq-list">{questions.map(item => <details key={item.question}><summary>{item.question}<Plus aria-hidden="true" /></summary><p>{item.answer}</p></details>)}</div>
      </Container></section>
      <CtaBand title="Zullen we kennismaken?" body="Als deelnemer, vrijwilliger of samenwerkingspartner. Vertel ons wat jou bezighoudt." primary={{ label: "Neem contact op", href: "/contact" }} secondary={{ label: "Meer over meedoen", href: "/doe-mee" }} />
    </>}
  </>;
}
