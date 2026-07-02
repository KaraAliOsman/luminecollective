import type { Metadata } from "next";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Prose } from "@/components/ui/Prose";
import { brand } from "@/lib/constants/brand";
import { createMetadata } from "@/lib/seo/config";

export const metadata: Metadata = createMetadata({
  title: "Privacybeleid",
  description:
    "Lees hoe Stichting Lumina Collective omgaat met persoonsgegevens, formulieren, analytics en jouw rechten.",
  path: "/privacy",
});

export default function PrivacyPage() {
  const address = `${brand.address.street}, ${brand.address.postalCode} ${brand.address.city}`;

  return (
    <article>
      <header className="border-b border-deep-aubergine/10 py-14 md:py-20">
        <Container className="max-w-3xl">
          <Eyebrow>Juridisch</Eyebrow>
          <h1 className="mt-4 font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] text-deep-aubergine">
            Privacybeleid
          </h1>
          <p className="mt-5 text-ink-brown/65">
            Laatste wijziging:{" "}
            <time dateTime="2026-07-01">1 juli 2026</time>.
          </p>
        </Container>
      </header>

      <section className="py-12 md:py-16">
        <Container className="max-w-3xl">
          <Prose>
            <h2>1. Wie zijn wij?</h2>
            <p>
              <strong>{brand.name}</strong> is verantwoordelijk voor de
              verwerking van persoonsgegevens via deze website.
            </p>
            <ul>
              <li>
                <strong>Naam:</strong> {brand.name}
              </li>
              <li>
                <strong>KVK-nummer:</strong> {brand.kvk}
              </li>
              <li>
                <strong>Adres:</strong> {address}, {brand.address.country}
              </li>
              <li>
                <strong>Website:</strong>{" "}
                <a href={brand.siteUrl}>{brand.domain}</a>
              </li>
              {brand.email && (
                <li>
                  <strong>E-mail:</strong>{" "}
                  <a href={`mailto:${brand.email}`}>{brand.email}</a>
                </li>
              )}
            </ul>

            <h2>2. Welke gegevens verzamelen wij?</h2>
            <h3>Contactformulier</h3>
            <p>
              Als je het contactformulier invult, verwerken we je naam,
              e-mailadres, onderwerp en bericht. We gebruiken deze gegevens om
              jouw vraag te beantwoorden.
            </p>

            <h3>Vrijwilligersformulier</h3>
            <p>
              Als je je aanmeldt als vrijwilliger, verwerken we je naam,
              e-mailadres, eventueel telefoonnummer, interessegebied en bericht.
              We gebruiken deze gegevens om contact met je op te nemen over jouw
              mogelijke betrokkenheid.
            </p>

            <h3>Nieuwsbrief</h3>
            <p>
              Als je je inschrijft voor updates, bewaren we je e-mailadres en de
              datum van inschrijving. Je kunt je op elk moment uitschrijven.
            </p>

            <h3>Websiteanalyse</h3>
            <p>
              We kunnen privacybewuste analytische gegevens gebruiken om te
              begrijpen hoe bezoekers de website gebruiken. Analytische scripts
              worden alleen geladen wanneer je daarvoor toestemming geeft via de
              cookiebanner. Lees meer in ons <a href="/cookies">cookiebeleid</a>.
            </p>

            <h2>3. Waarom verwerken wij gegevens?</h2>
            <ul>
              <li>Om contactverzoeken te beantwoorden.</li>
              <li>Om aanmeldingen voor vrijwilligerswerk te behandelen.</li>
              <li>Om updates te sturen wanneer je daarvoor toestemming geeft.</li>
              <li>Om de website veilig, toegankelijk en bruikbaar te houden.</li>
            </ul>

            <h2>4. Hoe lang bewaren wij gegevens?</h2>
            <p>
              We bewaren persoonsgegevens niet langer dan nodig is voor het doel
              waarvoor ze zijn verzameld. Contactberichten bewaren we zolang dat
              nodig is om je vraag zorgvuldig af te handelen. Nieuwsbriefgegevens
              bewaren we totdat je je uitschrijft.
            </p>

            <h2>5. Delen wij gegevens met derden?</h2>
            <p>
              We verkopen persoonsgegevens nooit. We delen gegevens alleen met
              dienstverleners die nodig zijn voor websitebeheer, formulierafhandeling
              of e-mailcommunicatie. Met zulke partijen maken we passende afspraken
              over beveiliging en vertrouwelijkheid.
            </p>

            <h2>6. Jouw rechten</h2>
            <p>
              Je hebt recht op inzage, correctie, verwijdering, beperking van
              verwerking, overdraagbaarheid en bezwaar. Wil je gebruikmaken van
              deze rechten, neem dan contact met ons op via de contactpagina.
            </p>

            <h2>7. Klachten</h2>
            <p>
              Heb je een klacht over de manier waarop wij met persoonsgegevens
              omgaan? Dan kun je contact met ons opnemen. Je hebt ook het recht
              een klacht in te dienen bij de Autoriteit Persoonsgegevens via{" "}
              <a
                href="https://www.autoriteitpersoonsgegevens.nl"
                rel="noreferrer"
                target="_blank"
              >
                autoriteitpersoonsgegevens.nl
              </a>
              .
            </p>
          </Prose>
        </Container>
      </section>
    </article>
  );
}
