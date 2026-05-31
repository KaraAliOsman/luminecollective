import type { Metadata } from "next";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Prose } from "@/components/ui/Prose";
import { brand } from "@/lib/constants/brand";
import { createMetadata } from "@/lib/seo/config";

const contactEmail = brand.email || "[E-mailadres invullen]";

export const metadata: Metadata = createMetadata({
  title: "ANBI",
  description:
    "Informatie over de ANBI-status van Stichting Lumina Collective.",
  path: "/anbi",
});

export default function AnbiPage() {
  return (
    <article>
      <header className="border-b border-deep-aubergine/10 py-14 md:py-20">
        <Container className="max-w-3xl">
          <Eyebrow>Transparantie</Eyebrow>
          <h1 className="mt-4 font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] text-deep-aubergine">
            ANBI-informatie
          </h1>
          <p className="mt-5 text-ink-brown/65">
            Transparantiepagina conform ANBI-vereisten.{" "}
            <strong className="text-wine-plum">
              Deze pagina bevat placeholders die moeten worden ingevuld door de
              organisatie voor publicatie.
            </strong>
          </p>
        </Container>
      </header>

      <section className="py-12 md:py-16">
        <Container className="max-w-3xl">
          <Prose>
            <h2>Organisatiegegevens</h2>
            <ul>
              <li>
                <strong>Naam:</strong> {brand.name}
              </li>
              <li>
                <strong>RSIN / Fiscaal nummer:</strong>{" "}
                <span className="italic text-warm-taupe">
                  [RSIN invullen indien van toepassing]
                </span>
              </li>
              <li>
                <strong>KVK-nummer:</strong>{" "}
                <span className="italic text-warm-taupe">
                  [KVK nummer invullen]
                </span>
              </li>
              <li>
                <strong>Adres:</strong>{" "}
                <span className="italic text-warm-taupe">
                  [Adres invullen indien van toepassing]
                </span>
              </li>
              <li>
                <strong>E-mail:</strong>{" "}
                {brand.email ? (
                  <a href={`mailto:${brand.email}`}>{brand.email}</a>
                ) : (
                  <span className="italic text-warm-taupe">{contactEmail}</span>
                )}
              </li>
              <li>
                <strong>ANBI-status:</strong>{" "}
                <span className="italic text-warm-taupe">
                  [ANBI-status invullen indien van toepassing]
                </span>
              </li>
            </ul>

            <h2>Doelstelling</h2>
            <p>{brand.description}</p>

            <h2>Beleidsplan</h2>
            <p>
              <span className="italic text-warm-taupe">
                [Beleidsplan of link naar beleidsplan invullen]
              </span>
            </p>

            <h2>Bestuur</h2>
            <p>
              <span className="italic text-warm-taupe">
                [Namen en functies van bestuurders invullen]
              </span>
            </p>

            <h2>Beloningsbeleid</h2>
            <p>
              Bestuurders van {brand.name} ontvangen geen beloning voor hun
              werkzaamheden.{" "}
              <span className="italic text-warm-taupe">
                [Aanvullen indien er betaalde medewerkers zijn]
              </span>
            </p>

            <h2>Jaarverslag en financiën</h2>
            <p>
              <span className="italic text-warm-taupe">
                [Link naar jaarverslag of financieel overzicht invullen zodra
                beschikbaar]
              </span>
            </p>

            <div className="rounded border border-muted-gold/30 bg-lumina-ivory p-4 text-sm text-ink-brown/70">
              <strong>Notitie:</strong> Deze ANBI-pagina bevat placeholders.
              Vul alle gemarkeerde velden in voor publicatie en laat de inhoud
              controleren op correctheid conform de ANBI-vereisten van de
              Belastingdienst.
            </div>
          </Prose>
        </Container>
      </section>
    </article>
  );
}
