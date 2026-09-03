import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, ChevronRight, Download, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { CopyIban } from "@/components/ui/CopyIban";
import { organization } from "@/data/organization";
import { brand } from "@/lib/constants/brand";
import { createMetadata } from "@/lib/seo/config";
import { StructuredData } from "@/components/seo/StructuredData";
import { webPageJsonLd } from "@/lib/seo/jsonLd";

const description = "Het beleidsplan 2026-2030, bestuur, beloningsbeleid, doelstellingen en financiële verantwoording van Stichting Lumina Collective.";
export const metadata: Metadata = createMetadata({ title: "ANBI & transparantie", description, path: "/anbi" });

const contents = [
  ["gegevens", "Organisatiegegevens"],
  ["doelstelling", "Missie & doelstelling"],
  ["beleidsplan", "Beleidsplan 2026-2030"],
  ["bestuur", "Bestuur & beloning"],
  ["financien", "Financiën & giftenaftrek"],
  ["swot", "SWOT-analyse"],
  ["verantwoording", "Jaarverslagen"],
];
const taxRegister = "https://www.belastingdienst.nl/wps/wcm/connect/nl/aftrek-en-kortingen/content/anbi-status-controleren";

export default function AnbiPage() {
  return <article>
    <StructuredData data={webPageJsonLd({ path: "/anbi", title: "ANBI & transparantie", description })} />
    <header className="page-heading"><Container>
      <nav className="breadcrumb" aria-label="Kruimelpad"><Link href="/">Home</Link><ChevronRight size={13} aria-hidden="true" /><span>ANBI & transparantie</span></nav>
      <p className="section-index">Open over wat we doen</p><Heading as="h1" size="xl">ANBI & transparantie</Heading>
      <p className="lead">Wie we zijn, waar we voor staan en hoe we omgaan met de middelen die aan ons worden toevertrouwd. Hier vind je onze organisatiegegevens, het beleidsplan 2026-2030 en openbare documenten.</p>
    </Container></header>

    <div className="section"><Container className="anbi-layout">
      <nav className="anbi-nav" aria-label="Op deze pagina">{contents.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
      <div className="anbi-content">
        <section id="gegevens"><h2>Organisatiegegevens</h2>
          <dl className="fact-list">
            <div><dt>Statutaire naam</dt><dd>{brand.name}</dd></div>
            <div><dt>Rechtsvorm</dt><dd>Stichting zonder winstoogmerk</dd></div>
            <div><dt>Opgericht</dt><dd>{brand.founded} te Tilburg</dd></div>
            <div><dt>KVK-nummer</dt><dd>{brand.kvk}</dd></div>
            <div><dt>Vestigingsnummer</dt><dd>{brand.establishmentNumber}</dd></div>
            <div><dt>SBI-code</dt><dd>{brand.sbi}</dd></div>
            <div><dt>RSIN / fiscaal nummer</dt><dd>{organization.rsin || "In aanvraag / verificatie (zie toelichting)"}</dd></div>
            <div><dt>ANBI-status</dt><dd>{organization.anbiStatus === "toegekend" ? "Toegekend" : "Aanvraag vermeld in het beleidsplan"}</dd></div>
            <div><dt>Adres</dt><dd>{brand.address.street}<br />{brand.address.postalCode} {brand.address.city}, Nederland</dd></div>
            <div><dt>E-mail</dt><dd><a href={`mailto:${brand.email}`}>{brand.email}</a></dd></div>
            <div><dt>Telefoon</dt><dd><a href={brand.phoneHref}>{brand.phone}</a></dd></div>
            <div><dt>Website</dt><dd><a href={brand.siteUrl}>{brand.domain}</a></dd></div>
            <div><dt>Werkgebied</dt><dd>Tilburg en omgeving, met ambitie voor regionale en internationale samenwerking</dd></div>
            <div><dt>Boekjaar</dt><dd>1 januari tot en met 31 december</dd></div>
          </dl>
          <div className="notice"><strong>Over de ANBI-aanvraag</strong><p>Het beleidsplan vermeldt dat de stichting is aangemeld als algemeen nut beogende instelling (ANBI). Een toekenningsbesluit en het definitieve RSIN worden na registratie bijgewerkt. Een formele aanvraag op zichzelf geeft geen direct recht op giftenaftrek tot toekenning. Controleer de actuele status via het officiële ANBI-register van de Belastingdienst.</p><a href={taxRegister} target="_blank" rel="noopener noreferrer">Naar de ANBI-controle bij de Belastingdienst <ArrowUpRight size={14} className="inline" aria-hidden="true" /></a></div>
        </section>

        <section id="doelstelling"><h2>Missie & doelstelling</h2>
          <p>{organization.mission}</p>
          <h3>Statutaire doelstelling</h3><p>{organization.statutoryPurpose}</p>
          <h3>Onze visie</h3><p>{organization.vision}</p>
          <p>We werken vanuit onze kernwaarden: {organization.coreValues.join(" · ")}.</p>

          <h3 className="mt-8">Statutaire werkterreinen</h3>
          <div className="statutory-groups">
            {organization.statutoryCategories.map(cat => (
              <div key={cat.category} className="statutory-group">
                <h4>{cat.category}</h4>
                <ul>
                  {cat.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="beleidsplan"><h2>Beleidsplan 2026-2030</h2>
          <p className="mb-6">Het beleidsplan beschrijft onze missie, activiteiten, organisatie, beloningsbeleid, financiën en ambities voor de periode 2026-2030.</p>
          <div className="document-download">
            <a href={brand.policyPlan} target="_blank" rel="noopener noreferrer" aria-label="Open het beleidsplan 2026-2030 als PDF"><Image className="document-download__cover" src={organization.document.cover} alt="Voorblad van het Beleidsplan 2026-2030 van Stichting Lumina Collective" width={708} height={1000} /></a>
            <div>
              <h3>Beleidsplan 2026-2030</h3>
              <p className="document-download__meta">Officieel document · PDF · {organization.policyPages} pagina&apos;s · {organization.policySize}</p>
              <div className="actions">
                <a className="button button--primary" href={brand.policyPlan} download="Beleidsplan_Lumina_2026-2030.pdf"><Download size={16} aria-hidden="true" />Download Beleidsplan (PDF)</a>
                <a className="text-link" href={brand.policyPlan} target="_blank" rel="noopener noreferrer">Open in nieuw tabblad<ArrowUpRight size={15} aria-hidden="true" /></a>
              </div>
            </div>
          </div>
          <details className="document-preview"><summary><FileText size={18} aria-hidden="true" />Lees het volledige beleidsplan op deze pagina</summary><iframe src={brand.policyPlan} title="Beleidsplan Stichting Lumina Collective 2026-2030" loading="lazy" /><p className="mt-3 text-sm">Je kunt het document ook rechtstreeks <a className="underline" href={brand.policyPlan} target="_blank" rel="noopener noreferrer">als PDF openen</a>.</p></details>
          
          <h3>De vier kernactiviteiten</h3>
          <ul className="funding-list">
            <li><Check size={16} aria-hidden="true" /><span><strong>Ontmoeting & verbinding.</strong> Vrouwenbijeenkomsten, koffieochtenden, gezinsactiviteiten en multiculturele ontmoetingen die mensen samenbrengen.</span></li>
            <li><Check size={16} aria-hidden="true" /><span><strong>Educatie & ontwikkeling.</strong> Workshops, taal- en huiswerkbegeleiding, mentorprogramma&apos;s en trainingen gericht op persoonlijke en talentontwikkeling.</span></li>
            <li><Check size={16} aria-hidden="true" /><span><strong>Gezondheid, welzijn & participatie.</strong> Gezondheidsvoorlichting, opvoedingsondersteuning en begeleiding van nieuwkomers naar actieve deelname.</span></li>
            <li><Check size={16} aria-hidden="true" /><span><strong>Jongeren, cultuur & samenwerking.</strong> Jongerenprogramma&apos;s, zomerkampen, het Multicultureel Zomerfestival en samenwerking met scholen en gemeenten.</span></li>
          </ul>
          <p className="mt-5">Het aanbod wordt stapsgewijs opgebouwd. Concrete activiteiten, datums en locaties worden doorlopend via onze website en agenda aangekondigd.</p>
        </section>

        <section id="bestuur"><h2>Bestuur & beloningsbeleid</h2>
          <p>Het bestuur is verantwoordelijk voor het beleid, de besluitvorming en de dagelijkse gang van zaken van de stichting. De stichting draait op vrijwillige inzet in een veilige en inclusieve omgeving.</p>
          <div className="board-grid">{organization.board.map(person => <article className="board-member" key={person.name}><div className="board-member__initial" aria-hidden="true">{person.name.split(" ").map(n => n[0]).slice(0, 2).join("")}</div><h3>{person.name}</h3><p>{person.role}</p></article>)}</div>
          
          <h3>Beloningsbeleid bestuur</h3>
          <p>{organization.remunerationPolicy}</p>
          
          <h3>Vrijwilligers en medewerkers</h3>
          <p>De stichting heeft geen personeel in loondienst en geen bezoldigde directie. Eventuele vrijwilligersvergoedingen blijven binnen de wettelijke fiscale vrijwilligersregeling van de Belastingdienst.</p>
        </section>

        <section id="financien"><h2>Financiën & giftenaftrek</h2>
          <p>De penningmeester ({organization.board.find(b => b.role === "Penningmeester")?.name}) beheert en controleert alle inkomsten en uitgaven. De financiële middelen worden uitsluitend besteed aan de maatschappelijke doelstellingen van de stichting.</p>
          
          <h3>Hoe we onze activiteiten financieren</h3>
          <ul className="funding-list">
            <li><Check size={16} aria-hidden="true" /><span><strong>Subsidies en fondsenwerving.</strong> Aanvragen worden ingediend op basis van een gedegen projectplan en begroting, en conform besteed en verantwoord.</span></li>
            <li><Check size={16} aria-hidden="true" /><span><strong>Donaties en giften.</strong> Eenmalige of periodieke bijdragen van particulieren en instellingen die onze missie steunen.</span></li>
            <li><Check size={16} aria-hidden="true" /><span><strong>Bedrijfssponsoring.</strong> Partners die maatschappelijk willen bijdragen met vermelding of deelname aan activiteiten.</span></li>
            <li><Check size={16} aria-hidden="true" /><span><strong>Eigen bijdragen.</strong> Voor sommige activiteiten vragen we een kleine eigen bijdrage, waarbij altijd rekening wordt gehouden met de draagkracht van deelnemers.</span></li>
          </ul>

          <div className="tax-benefit-card">
            <h4>{organization.taxBenefits.title}</h4>
            <p>{organization.taxBenefits.description}</p>
            <p className="mt-3 text-sm text-warm-taupe">Neem contact met ons op voor periodieke schenkingsovereenkomsten of vragen over fiscale aftrekbaarheid.</p>
          </div>

          <h3 className="mt-8">Stichting Bankrekening</h3>
          <div className="mt-4"><CopyIban /></div>
        </section>

        <section id="swot"><h2>SWOT-analyse</h2>
          <p>Als onderdeel van ons beleidsplan 2026-2030 hebben we een grondige analyse uitgevoerd van onze sterke punten, verbeterpunten, kansen en uitdagingen in het maatschappelijke veld.</p>
          
          <div className="swot-grid">
            <div className="swot-card swot-card--strengths">
              <div className="swot-card__header"><span className="swot-card__letter">S</span><span className="swot-card__title">Strengths (Sterktes)</span></div>
              <ul className="swot-list">{organization.swot.strengths.map(item => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="swot-card swot-card--weaknesses">
              <div className="swot-card__header"><span className="swot-card__letter">W</span><span className="swot-card__title">Weaknesses (Zwaktes)</span></div>
              <ul className="swot-list">{organization.swot.weaknesses.map(item => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="swot-card swot-card--opportunities">
              <div className="swot-card__header"><span className="swot-card__letter">O</span><span className="swot-card__title">Opportunities (Kansen)</span></div>
              <ul className="swot-list">{organization.swot.opportunities.map(item => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="swot-card swot-card--threats">
              <div className="swot-card__header"><span className="swot-card__letter">T</span><span className="swot-card__title">Threats (Bedreigingen)</span></div>
              <ul className="swot-list">{organization.swot.threats.map(item => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
        </section>

        <section id="verantwoording"><h2>Jaarverslagen & verantwoording</h2>
          <p>Het boekjaar van Stichting Lumina Collective loopt van 1 januari tot en met 31 december. Na afloop van elk boekjaar stelt de penningmeester de jaarstukken op, bestaande uit de balans en de staat van baten en lasten. Deze worden na bestuursgoedkeuring en decharge openbaar gepubliceerd.</p>
          <div className="publication-row">
            <div>
              <strong>Jaarverslag en jaarrekening 2026</strong>
              <small>Eerste boekjaar na oprichting loopt momenteel. Financiële jaarstukken worden na 31 december 2026 vastgesteld.</small>
            </div>
            <span>Na afsluiting boekjaar 2026</span>
          </div>
          <p className="mt-6">Vragen over onze governance, beleid of ANBI-gegevens? Neem gerust contact op met het bestuur via <a className="underline" href={`mailto:${brand.email}?subject=Vraag%20over%20ANBI%20en%20transparantie`}>{brand.email}</a>.</p>
          <Link className="text-link mt-5" href="/contact?onderwerp=ANBI%20en%20transparantie">Neem contact op met het bestuur<ArrowRight size={17} aria-hidden="true" /></Link>
        </section>
      </div>
    </Container></div>
  </article>;
}
