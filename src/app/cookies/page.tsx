import type { Metadata } from "next";
import { CookiePreferencesButton } from "@/components/global/CookiePreferencesButton";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { createMetadata } from "@/lib/seo/config";

export const metadata: Metadata = createMetadata({ title: "Cookies", description: "Welke cookies Lumina gebruikt en hoe je jouw voorkeuren beheert.", path: "/cookies" });

export default function CookiesPage() {
  return <article>
    <header className="page-heading"><Container><p className="section-index">Jouw voorkeuren</p><Heading as="h1" size="xl">Cookies</Heading><p className="lead">Je kunt onze website bezoeken zonder toestemming voor statistieken te geven.</p><p className="article-meta">Bijgewerkt op <time dateTime="2026-09-02">2 september 2026</time></p></Container></header>
    <section className="section"><Container><div className="legal-content editorial-text">
      <h2>Wat zijn cookies?</h2><p>Cookies zijn kleine bestanden die een website op je apparaat bewaart. Lokale opslag in je browser kan op een vergelijkbare manier een voorkeur onthouden.</p>
      <h2>Functionele voorkeuren</h2><p>Als je een keuze maakt over statistieken, bewaren we die maximaal twaalf maanden. Dat gebeurt in de cookie <code>lumina_analytics_consent</code> en, als je browser dat toestaat, in lokale opslag onder <code>lumina.analyticsConsent</code>. Deze opslag bevat je keuze, niet je naam of e-mailadres.</p>
      <h2>Statistieken</h2><p>Alleen als een meetinstrument is geactiveerd, vragen we toestemming om het te laden. Zonder toestemming laden we geen Google Analytics of Plausible. Zijn er geen meetinstrumenten actief, dan verschijnt er ook geen cookiemelding voor statistieken. We plaatsen zelf geen advertentiecookies.</p>
      <h2>Een keuze aanpassen</h2><p>Je kunt je toestemming op elk moment opnieuw instellen. Bij intrekking wordt de pagina opnieuw geladen om eerder geladen meetinstrumenten te stoppen. Reeds aanwezige cookies kun je daarnaast verwijderen via de instellingen van je browser.</p><CookiePreferencesButton />
      <h2>Links naar andere websites</h2><p>Een link naar bijvoorbeeld een aanmeldplatform of sociale media brengt je naar een andere website. Daar gelden de privacy- en cookievoorwaarden van die aanbieder. We laden die platforms niet automatisch in deze pagina.</p>
      <h2>Meer weten?</h2><p>Lees ons <a href="/privacy">privacybeleid</a> of <a href="/contact?onderwerp=Privacy%20en%20cookies">stel je vraag</a>.</p>
    </div></Container></section>
  </article>;
}
