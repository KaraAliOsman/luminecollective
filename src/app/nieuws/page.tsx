import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { TextLink } from "@/components/ui/TextLink";
import { VisualPlaceholder } from "@/components/ui/VisualPlaceholder";
import { visuals } from "@/data/placeholders";
import { createMetadata } from "@/lib/seo/config";

export const metadata: Metadata = createMetadata({
  title: "Nieuws & verhalen",
  description:
    "Artikelen, interviews, terugblikken en kennis van Stichting Lumina Collective.",
  path: "/nieuws",
});

// Category labels
const categoryLabels: Record<string, string> = {
  nieuws: "Nieuws",
  verhalen: "Verhalen",
  interviews: "Interviews",
  terugblik: "Terugblik",
  kennis: "Kennis",
  persbericht: "Persbericht",
};

const previewPosts = [
  {
    slug: "eerste-ontmoeting-lumina",
    category: "nieuws",
    publishedAt: "2025-01-01",
    title: "Voorbeeldartikel: eerste bericht van Lumina Collective",
    excerpt:
      "Dit voorbeeld toont hoe nieuws eruitziet. Vervang dit met een echt artikel zodra de organisatie klaar is voor publicatie.",
    visual: visuals.communityTable,
    isPreview: true,
  },
  {
    slug: "over-verbinding-en-groei",
    category: "verhalen",
    publishedAt: "2025-01-01",
    title: "Voorbeeldartikel: over verbinding en groei",
    excerpt:
      "Verhalen van deelneemsters worden hier pas gedeeld zodra inhoud en toestemming bevestigd zijn.",
    visual: visuals.conversation,
    isPreview: true,
  },
  {
    slug: "interview-met-een-vrijwilligster",
    category: "interviews",
    publishedAt: "2025-01-01",
    title: "Voorbeeldartikel: interview met een vrijwilligster",
    excerpt:
      "Interviews volgen zodra vrijwilligers toestemming hebben gegeven en de tekst is goedgekeurd.",
    visual: visuals.presentation,
    isPreview: true,
  },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function NieuwsPage() {
  const [featured, ...rest] = previewPosts;

  return (
    <>
      {/* Hero */}
      <section className="border-b border-deep-aubergine/10 py-16 md:py-20">
        <Container>
          <Eyebrow>Nieuws &amp; verhalen</Eyebrow>
          <h1 className="mt-4 max-w-2xl font-serif text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] text-deep-aubergine">
            Verhalen, kennis en nieuws van de gemeenschap.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-ink-brown/75">
            We delen artikelen over thema&#39;s die onze gemeenschap raken:
            ontmoeting, groei, cultuur en participatie.
          </p>
        </Container>
      </section>

      {/* Featured article */}
      {featured && (
        <section className="py-16 md:py-20">
          <Container>
            <Eyebrow>Uitgelicht</Eyebrow>
            <article
              className="mt-8 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-start"
              data-preview={featured.isPreview}
            >
              <VisualPlaceholder className="min-h-[24rem]" visual={featured.visual}>
                {categoryLabels[featured.category] ?? featured.category}
              </VisualPlaceholder>
              <div className="space-y-4 md:pt-4">
                <p className="text-sm font-semibold uppercase tracking-[0.1em] text-warm-taupe">
                  {formatDate(featured.publishedAt)}
                </p>
                <Heading size="md">
                  <a
                    href={`/nieuws/${featured.slug}`}
                    className="transition hover:text-wine-plum"
                  >
                    {featured.title}
                  </a>
                </Heading>
                <p className="leading-7 text-ink-brown/75">{featured.excerpt}</p>
                <TextLink href={`/nieuws/${featured.slug}`}>
                  Lees verder
                </TextLink>
              </div>
            </article>
          </Container>
        </section>
      )}

      {/* Article grid */}
      {rest.length > 0 && (
        <section className="bg-warm-white py-16 md:py-20">
          <Container>
            <div className="mb-10 max-w-2xl space-y-3">
              <Eyebrow>Alle artikelen</Eyebrow>
              <Heading>Meer lezen.</Heading>
            </div>
            <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <article
                  key={post.slug}
                  className="grid gap-4"
                  data-preview={post.isPreview}
                >
                  <VisualPlaceholder className="min-h-[16rem]" visual={post.visual}>
                    {categoryLabels[post.category] ?? post.category}
                  </VisualPlaceholder>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold uppercase tracking-[0.1em] text-warm-taupe">
                      {formatDate(post.publishedAt)}
                    </p>
                    <h2 className="font-serif text-2xl leading-tight text-deep-aubergine">
                      <a
                        href={`/nieuws/${post.slug}`}
                        className="transition hover:text-wine-plum"
                      >
                        {post.title}
                      </a>
                    </h2>
                    <p className="leading-7 text-ink-brown/72">{post.excerpt}</p>
                    <TextLink href={`/nieuws/${post.slug}`}>Lees verder</TextLink>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-16 md:py-20">
        <Container className="max-w-2xl text-center">
          <Eyebrow>Blijf op de hoogte</Eyebrow>
          <Heading className="mt-4" size="md">
            Nieuwe artikelen direct in je inbox.
          </Heading>
          <p className="mt-4 text-lg leading-8 text-ink-brown/75">
            Schrijf je in voor updates over activiteiten, verhalen en nieuws van
            Lumina Collective.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex min-h-11 items-center border border-deep-aubergine bg-deep-aubergine px-5 py-3 text-sm font-semibold text-warm-white transition hover:bg-wine-plum"
          >
            Updates ontvangen
          </a>
        </Container>
      </section>

      <CtaBand
        body="Meedoen begint met een eerste stap. Schrijf je in voor een activiteit of stuur ons een bericht."
        primary={{ label: "Doe mee", href: "/doe-mee" }}
        secondary={{ label: "Contact", href: "/contact" }}
        title="Doe meer dan lezen."
      />
    </>
  );
}
