import type { Metadata } from "next";

import { CookiePreferencesButton } from "@/components/global/CookiePreferencesButton";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Prose } from "@/components/ui/Prose";
import { brand } from "@/lib/constants/brand";
import { createMetadata } from "@/lib/seo/config";

const privacyEmail = brand.email || "[E-mailadres invullen]";

export const metadata: Metadata = createMetadata({
  title: "Cookiebeleid",
  description:
    "Lees hoe Stichting Lumina Collective cookies en trackingtechnologieen gebruikt en hoe jij jouw voorkeuren kunt beheren.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <article>
      <header className="border-b border-deep-aubergine/10 py-14 md:py-20">
        <Container className="max-w-3xl">
          <Eyebrow>Juridisch</Eyebrow>
          <h1 className="mt-4 font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] text-deep-aubergine">
            Cookiebeleid
          </h1>
          <p className="mt-5 text-ink-brown/65">
            Laatste wijziging:{" "}
            <time dateTime="2025-01-01">1 januari 2025</time>.{" "}
            <strong className="text-wine-plum">
              Dit beleid is een concept en moet worden beoordeeld voor
              publicatie.
            </strong>
          </p>
        </Container>
      </header>

      <section className="py-12 md:py-16">
        <Container className="max-w-3xl">
          <Prose>
            <h2>Wat zijn cookies?</h2>
            <p>
              Cookies zijn kleine tekstbestanden die op jouw apparaat worden
              opgeslagen als je een website bezoekt. Ze helpen websites te
              onthouden hoe je ze gebruikt.
            </p>

            <h2>Welke cookies gebruiken wij?</h2>

            <h3>Functionele cookies (altijd actief)</h3>
            <p>
              Deze cookies zijn noodzakelijk voor het werken van de website. Ze
              onthouden jouw cookievoorkeuren en zorgen voor basisfunctionaliteit.
              Voor functionele cookies is geen toestemming nodig.
            </p>

            <h3>Analytische cookies (alleen met toestemming)</h3>
            <p>
              We kunnen optioneel gebruik maken van analytische tools om te
              begrijpen hoe bezoekers de website gebruiken. Analytische cookies
              worden <strong>alleen geladen na jouw expliciete toestemming</strong>{" "}
              via onze cookiebanner.
            </p>
            <p>Mogelijke analytische tools die wij gebruiken:</p>
            <ul>
              <li>
                <strong>Google Analytics 4</strong> - gegevens worden verwerkt
                via Google LLC. Privacybeleid:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  rel="noreferrer"
                  target="_blank"
                >
                  policies.google.com/privacy
                </a>
              </li>
              <li>
                <strong>Plausible Analytics</strong> - privacyvriendelijke
                analytics zonder persoonsgegevens. Geen cookies vereist.
                Informatie:{" "}
                <a
                  href="https://plausible.io/privacy"
                  rel="noreferrer"
                  target="_blank"
                >
                  plausible.io/privacy
                </a>
              </li>
            </ul>

            <h2>Hoe beheer je jouw cookievoorkeuren?</h2>
            <p>
              Je kunt jouw cookievoorkeuren op elk moment opnieuw openen met de
              knop hieronder. Je kunt ook cookies verwijderen via de instellingen
              van jouw browser.
            </p>
            <CookiePreferencesButton />

            <h2>Cookies van derden</h2>
            <p>
              We kunnen social media knoppen of ingebedde inhoud tonen. Deze
              externe partijen kunnen hun eigen cookies plaatsen. Wij hebben
              hier geen controle over. Raadpleeg de privacybeleiden van de
              betreffende partijen.
            </p>

            <h2>Meer informatie</h2>
            <p>
              Voor vragen over ons cookiebeleid kun je contact opnemen via{" "}
              {brand.email ? (
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
              ) : (
                <span className="italic text-warm-taupe">{privacyEmail}</span>
              )}
              . Zie ook ons <a href="/privacy">privacybeleid</a>.
            </p>

            <div className="rounded border border-muted-gold/30 bg-lumina-ivory p-4 text-sm text-ink-brown/70">
              <strong>Juridische notitie:</strong> Dit cookiebeleid is een
              concept. Laat het beoordelen voor publicatie. Pas het aan als je
              specifieke analytische tools activeert of verwijdert.
            </div>
          </Prose>
        </Container>
      </section>
    </article>
  );
}
