import type { Metadata } from "next";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Prose } from "@/components/ui/Prose";
import { brand } from "@/lib/constants/brand";
import { createMetadata } from "@/lib/seo/config";

const privacyEmail = brand.email || "[E-mailadres invullen]";

export const metadata: Metadata = createMetadata({
  title: "Privacybeleid",
  description:
    "Lees hoe Stichting Lumina Collective omgaat met persoonsgegevens, formulieren, analytics en jouw rechten.",
  path: "/privacy",
});

export default function PrivacyPage() {
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
            <time dateTime="2025-01-01">1 januari 2025</time>.{" "}
            <strong className="text-wine-plum">
              Dit beleid is een concept en moet worden gereviewed door de
              organisatie of een juridisch adviseur voor publicatie.
            </strong>
          </p>
        </Container>
      </header>

      <section className="py-12 md:py-16">
        <Container className="max-w-3xl">
          <Prose>
            <h2>1. Wie zijn wij?</h2>
            <p>
              <strong>{brand.name}</strong> is een stichting gevestigd in
              Nederland.
            </p>
            <ul>
              <li>
                <strong>Naam:</strong> {brand.name}
              </li>
              <li>
                <strong>Website:</strong>{" "}
                <a href={brand.siteUrl}>{brand.domain}</a>
              </li>
              <li>
                <strong>E-mail:</strong>{" "}
                {brand.email ? (
                  <a href={`mailto:${brand.email}`}>{brand.email}</a>
                ) : (
                  <span className="italic text-warm-taupe">{privacyEmail}</span>
                )}
              </li>
              <li>
                <strong>KVK-nummer:</strong>{" "}
                <span className="italic text-warm-taupe">
                  [KVK nummer invullen]
                </span>
              </li>
              <li>
                <strong>Verantwoordelijke voor gegevensverwerking:</strong>{" "}
                <span className="italic text-warm-taupe">
                  [Naam verantwoordelijke invullen]
                </span>
              </li>
            </ul>

            <h2>2. Welke gegevens verzamelen wij?</h2>
            <h3>Via het contactformulier</h3>
            <p>
              Als je het contactformulier invult, verzamelen we: naam,
              e-mailadres, onderwerp en je bericht. We bewaren deze gegevens
              alleen zo lang als nodig om jouw vraag te beantwoorden.
            </p>

            <h3>Via het vrijwilligersformulier</h3>
            <p>
              Als je je aanmeldt als vrijwilliger, verzamelen we: naam,
              e-mailadres, optioneel telefoonnummer, interessegebied en bericht.
            </p>

            <h3>Via de nieuwsbriefinschrijving</h3>
            <p>
              Als je je inschrijft voor onze nieuwsbrief, bewaren we je
              e-mailadres en de datum van inschrijving. Je kunt je op elk moment
              uitschrijven.
            </p>

            <h3>Analytische gegevens</h3>
            <p>
              We kunnen gebruik maken van analytische tools (zoals Google
              Analytics of Plausible) om te begrijpen hoe bezoekers de website
              gebruiken. Analytics worden alleen geladen na jouw toestemming via
              de cookiebanner. Zie ook ons{" "}
              <a href="/cookies">cookiebeleid</a>.
            </p>

            <h2>3. Waarom verwerken wij jouw gegevens?</h2>
            <p>We verwerken persoonsgegevens voor de volgende doeleinden:</p>
            <ul>
              <li>Het beantwoorden van contactverzoeken (rechtmatig belang).</li>
              <li>
                Het verwerken van aanmeldingen voor vrijwilligerswerk (uitvoering
                van een overeenkomst).
              </li>
              <li>
                Het versturen van onze nieuwsbrief (toestemming, art. 6.1.a AVG).
              </li>
              <li>
                Het analyseren van websitebezoek (toestemming, art. 6.1.a AVG).
              </li>
            </ul>

            <h2>4. Hoe lang bewaren wij jouw gegevens?</h2>
            <p>
              We bewaren gegevens niet langer dan noodzakelijk. Contactberichten
              worden bewaard tot de vraag is afgehandeld. Nieuwsbriefgegevens
              worden bewaard totdat je je uitschrijft.
            </p>

            <h2>5. Delen wij gegevens met derden?</h2>
            <p>
              We delen jouw gegevens niet met derden, behalve met dienstverleners
              die ons helpen de website te beheren en e-mails te versturen (zoals
              e-mailproviders). Zij handelen uitsluitend op onze instructies.
            </p>

            <h2>6. Jouw rechten</h2>
            <p>Op grond van de AVG heb je de volgende rechten:</p>
            <ul>
              <li>Recht op inzage van je persoonsgegevens.</li>
              <li>Recht op correctie van onjuiste gegevens.</li>
              <li>Recht op verwijdering (&#39;recht op vergetelheid&#39;).</li>
              <li>Recht op beperking van verwerking.</li>
              <li>Recht op gegevensoverdraagbaarheid.</li>
              <li>Recht van bezwaar.</li>
            </ul>
            <p>
              Om een verzoek in te dienen, neem je contact op via:{" "}
              {brand.email ? (
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
              ) : (
                <span className="italic text-warm-taupe">{privacyEmail}</span>
              )}
            </p>

            <h2>7. Klachten</h2>
            <p>
              Heb je een klacht over de manier waarop wij met jouw gegevens
              omgaan? Je kunt een klacht indienen bij de Autoriteit
              Persoonsgegevens via{" "}
              <a
                href="https://www.autoriteitpersoonsgegevens.nl"
                rel="noreferrer"
                target="_blank"
              >
                autoriteitpersoonsgegevens.nl
              </a>
              .
            </p>

            <h2>8. Contactgegevens privacyvragen</h2>
            <p>
              Voor vragen over dit privacybeleid kun je contact opnemen via:{" "}
              {brand.email ? (
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
              ) : (
                <span className="italic text-warm-taupe">{privacyEmail}</span>
              )}
            </p>

            <div className="rounded border border-muted-gold/30 bg-lumina-ivory p-4 text-sm text-ink-brown/70">
              <strong>Juridische notitie:</strong> Dit privacybeleid is een
              concept en bevat placeholders. Laat het reviewen door de
              organisatie en/of een juridisch adviseur voordat de website live
              gaat. Informatie die ontbreekt:{" "}
              <span className="font-semibold text-wine-plum">
                [KVK nummer], [naam verantwoordelijke], [adres indien van
                toepassing]
              </span>
              .
            </div>
          </Prose>
        </Container>
      </section>
    </article>
  );
}
