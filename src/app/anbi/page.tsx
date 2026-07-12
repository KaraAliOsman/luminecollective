import type { Metadata } from "next";

import { StructuredData } from "@/components/seo/StructuredData";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Prose } from "@/components/ui/Prose";
import { brand } from "@/lib/constants/brand";
import { createMetadata } from "@/lib/seo/config";
import { webPageJsonLd } from "@/lib/seo/jsonLd";

export const metadata: Metadata = createMetadata({
  title: "Transparantie",
  description:
    "Publieke organisatiegegevens en transparantie-informatie van Stichting Lumina Collective.",
  path: "/anbi",
});

export default function AnbiPage() {
  const address = `${brand.address.street}, ${brand.address.postalCode} ${brand.address.city}`;

  return (
    <>
      <StructuredData
        data={webPageJsonLd({
          path: "/anbi",
          title: "Transparantie | Stichting Lumina Collective",
          description: "Publieke organisatiegegevens en transparantie-informatie van Stichting Lumina Collective.",
        })}
      />
      <article>
      <header className="border-b border-deep-aubergine/10 py-14 md:py-20">
        <Container className="max-w-3xl">
          <Eyebrow>Transparantie</Eyebrow>
          <h1 className="mt-4 font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] text-deep-aubergine">
            Organisatiegegevens
          </h1>
          <p className="mt-5 text-lg leading-8 text-ink-brown/70">
            We vinden zorgvuldigheid belangrijk. Daarom delen we op deze pagina
            de publieke gegevens van Stichting Lumina Collective en publiceren we
            aanvullende documenten zodra deze officieel beschikbaar zijn.
          </p>
        </Container>
      </header>

      <section className="py-12 md:py-16">
        <Container className="max-w-3xl">
          <Prose>
            <h2>Publieke gegevens</h2>
            <ul>
              <li>
                <strong>Naam:</strong> {brand.name}
              </li>
              <li>
                <strong>KVK-nummer:</strong> {brand.kvk}
              </li>
              <li>
                <strong>Vestigingsnummer:</strong> {brand.establishmentNumber}
              </li>
              <li>
                <strong>Adres:</strong> {address}, {brand.address.country}
              </li>
              <li>
                <strong>Activiteit:</strong> {brand.sbi}
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

            <h2>Doelstelling</h2>
            <p>{brand.description}</p>

            <h2>Werkwijze</h2>
            <p>
              Lumina Collective organiseert en ondersteunt activiteiten rond
              ontmoeting, persoonlijke ontwikkeling, cultuur, ondersteuning en
              maatschappelijke participatie. We werken zorgvuldig, lokaal en met
              aandacht voor privacy, toestemming en vertrouwen.
            </p>

            <h2>ANBI en documenten</h2>
            <p>
              Alleen gegevens die officieel bevestigd zijn worden hier
              gepubliceerd. Wanneer een beleidsplan, financieel overzicht,
              jaarverslag, RSIN of ANBI-gerelateerde informatie definitief
              beschikbaar is, wordt deze pagina daarmee aangevuld.
            </p>
          </Prose>
        </Container>
      </section>
    </article>
  </>
  );
}
