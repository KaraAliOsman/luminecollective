import type { Metadata } from "next";

import { CookiePreferencesButton } from "@/components/global/CookiePreferencesButton";
import { StructuredData } from "@/components/seo/StructuredData";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Prose } from "@/components/ui/Prose";
import { createMetadata } from "@/lib/seo/config";
import { webPageJsonLd } from "@/lib/seo/jsonLd";

export const metadata: Metadata = createMetadata({
  title: "Cookiebeleid",
  description:
    "Lees hoe Stichting Lumina Collective cookies gebruikt en hoe jij jouw voorkeuren kunt beheren.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <>
      <StructuredData
        data={webPageJsonLd({
          path: "/cookies",
          title: "Cookiebeleid | Stichting Lumina Collective",
          description: "Lees hoe Stichting Lumina Collective cookies gebruikt en hoe jij jouw voorkeuren kunt beheren.",
        })}
      />
      <article>
      <header className="border-b border-deep-aubergine/10 py-14 md:py-20">
        <Container className="max-w-3xl">
          <Eyebrow>Juridisch</Eyebrow>
          <h1 className="mt-4 font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] text-deep-aubergine">
            Cookiebeleid
          </h1>
          <p className="mt-5 text-ink-brown/65">
            Laatste wijziging:{" "}
            <time dateTime="2026-07-12">12 juli 2026</time>.
          </p>
        </Container>
      </header>

      <section className="py-12 md:py-16">
        <Container className="max-w-3xl">
          <Prose>
            <h2>Wat zijn cookies?</h2>
            <p>
              Cookies zijn kleine tekstbestanden die op jouw apparaat worden
              opgeslagen wanneer je een website bezoekt. Ze kunnen nodig zijn om
              de website goed te laten werken of helpen om de website te
              verbeteren.
            </p>

            <h2>Welke cookies gebruiken wij?</h2>

            <h3>Functionele cookies</h3>
            <p>
              Functionele cookies zijn nodig voor basisfuncties, zoals het
              onthouden van jouw cookievoorkeuren en het veilig verwerken van
              formulieren. Deze cookies staan altijd aan. Jouw cookievoorkeur
              wordt maximaal twaalf maanden bewaard in een cookie en, wanneer
              jouw browser dit toestaat, ook in lokale opslag.
            </p>

            <h3>Analytische cookies</h3>
            <p>
              Analytische cookies of privacyvriendelijke meetinstrumenten kunnen
              ons helpen begrijpen welke pagina&apos;s worden bezocht en waar de
              website verbeterd kan worden. Deze worden alleen geladen wanneer
              je toestemming geeft. Op dit moment plaatsen wij geen analytische
              cookies zolang er geen meetinstrument is geactiveerd.
            </p>

            <h2>Cookievoorkeuren beheren</h2>
            <p>
              Je kunt jouw voorkeuren op elk moment opnieuw openen met de knop
              hieronder. Je kunt cookies ook verwijderen via de instellingen van
              jouw browser.
            </p>
            <CookiePreferencesButton />

            <h2>Cookies van derden</h2>
            <p>
              Wanneer je via onze website doorklikt naar externe platforms, zoals
              sociale media, kunnen die partijen eigen cookies gebruiken. Raadpleeg
              daarvoor het beleid van de betreffende aanbieder.
            </p>

            <h2>Meer informatie</h2>
            <p>
              Lees ook ons <a href="/privacy">privacybeleid</a> voor meer
              informatie over hoe we met persoonsgegevens omgaan.
            </p>
          </Prose>
        </Container>
      </section>
    </article>
    </>
  );
}
