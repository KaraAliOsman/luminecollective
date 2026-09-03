import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { TextLink } from "@/components/ui/TextLink";
import { photography } from "@/data/placeholders";
import { organization } from "@/data/organization";
import { getPageByKey } from "@/lib/cms/content";
import { createMetadata } from "@/lib/seo/config";
import { StructuredData } from "@/components/seo/StructuredData";
import { webPageJsonLd } from "@/lib/seo/jsonLd";

const description = "Maak kennis met Stichting Lumina Collective, ons bestuur en onze missie voor verbinding, welzijn en gelijke kansen vanuit Tilburg.";
export const metadata: Metadata = createMetadata({ title: "Over Lumina", description, path: "/over-ons" });

export default async function OverOnsPage() {
  const page = await getPageByKey("over-ons");
  return <>
    <StructuredData data={webPageJsonLd({ path: "/over-ons", title: "Over Lumina", description })} />
    <PageHero eyebrow="Over Lumina" title="Een stichting voor elkaar." body="Verschillende achtergronden. Gedeelde mogelijkheden. Vanuit Tilburg bouwen we aan een samenleving waarin iedereen kan meedoen." visual={photography.together} image={page?.heroImage} primary={{ label: "Onze programma's", href: "/programmas" }} secondary={{ label: "Maak kennis", href: "/contact" }} />
    <section className="section"><Container className="intro-grid">
      <div><p className="section-index">Ons verhaal</p><Heading>Verschil mag er zijn.<br />Verbinding ook.</Heading></div>
      <div className="editorial-text"><p className="lead">Stichting Lumina Collective is in 2026 opgericht in Tilburg. Een onafhankelijke stichting zonder winstoogmerk, gedragen door vrijwillige inzet.</p><p>We zetten ons in voor vrouwen, nieuwkomers, jongeren en gezinnen. Niet iedereen begint met dezelfde kansen, hetzelfde netwerk of dezelfde mogelijkheden om mee te doen. Met ontmoeting, educatie en samenwerking willen we daarin iets betekenen.</p><p>Onze bijzondere aandacht gaat uit naar het welzijn, de zelfredzaamheid en de maatschappelijke participatie van vrouwen van alle leeftijden. Vanuit die basis verbinden we ook de mensen en gemeenschappen om hen heen.</p></div>
    </Container></section>
    <section className="section section--sage"><Container className="two-column">
      <div><p className="section-index">Onze missie</p><Heading className="mt-4 mb-6">Meer kansen om<br />mee te doen.</Heading><p className="lead">{organization.mission}</p></div>
      <div><p className="section-index">Onze visie</p><Heading className="mt-4 mb-6">Een samenleving<br />die mensen verbindt.</Heading><p className="lead">{organization.vision}</p></div>
    </Container></section>
    <section className="section"><Container>
      <div className="section-heading"><div><p className="section-index">Wat je van ons mag verwachten</p><Heading>Onze waarden, in het dagelijks doen.</Heading></div></div>
      <div className="values-grid"><article><h3>Gelijkwaardig contact</h3><p>We benaderen elkaar met respect. Verschillende ervaringen en achtergronden krijgen de ruimte, zonder dat iemand zich hoeft aan te passen om erbij te horen.</p></article><article><h3>Samen verantwoordelijkheid nemen</h3><p>We luisteren naar deelnemers en werken met vrijwilligers en partners. De ideeën en talenten van mensen geven richting aan onze activiteiten.</p></article><article><h3>Open en zorgvuldig werken</h3><p>We gaan zorgvuldig om met persoonlijke verhalen, middelen en afspraken. Ons beleid en onze organisatiegegevens zijn openbaar.</p></article></div>
    </Container></section>
    <section className="section section--rose"><Container>
      <div className="section-heading"><div><p className="section-index">Organisatie & bestuur</p><Heading>De mensen achter de stichting.</Heading></div><TextLink href="/anbi#bestuur">Bestuur en beloningsbeleid</TextLink></div>
      <p className="lead">Het bestuur draagt verantwoordelijkheid voor het beleid, de besluiten en de dagelijkse gang van zaken. Bestuursleden werken onbezoldigd.</p>
      <div className="board-grid">{organization.board.map(person => <article className="board-member" key={person.name}><div className="board-member__initial" aria-hidden="true">{person.name.split(" ").map(name => name[0]).slice(0, 2).join("")}</div><h3>{person.name}</h3><p>{person.role}</p></article>)}</div>
    </Container></section>
    <CtaBand title="Samen kunnen we meer betekenen." body="Werk je bij een school, gemeente of maatschappelijke organisatie? Of wil je zelf bijdragen? We verkennen graag wat we samen kunnen doen." primary={{ label: "Samenwerken", href: "/contact?onderwerp=Samenwerken" }} secondary={{ label: "Lees ons beleidsplan", href: "/anbi#beleidsplan" }} />
  </>;
}
