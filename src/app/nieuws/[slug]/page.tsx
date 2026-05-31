import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { Prose } from "@/components/ui/Prose";
import { VisualPlaceholder } from "@/components/ui/VisualPlaceholder";
import { StructuredData } from "@/components/seo/StructuredData";
import { visuals } from "@/data/placeholders";
import { createMetadata } from "@/lib/seo/config";
import { blogPostingJsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonLd";

type Props = { params: Promise<{ slug: string }> };

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
    author: "Stichting Lumina Collective",
    title: "Voorbeeldartikel: eerste bericht van Lumina Collective",
    excerpt:
      "Dit voorbeeld toont hoe nieuws eruitziet. Vervang dit met een echt artikel zodra de organisatie klaar is voor publicatie.",
    body: "Dit voorbeeldartikel laat de leeservaring, typografie en structuur zien. Het bevat geen echte nieuwsfeiten en moet worden vervangen door inhoud die door Stichting Lumina Collective is goedgekeurd.\n\nVia Sanity Studio kunnen nieuwe artikelen worden aangemaakt, gecategoriseerd en gepubliceerd zonder technische kennis.",
    visual: visuals.communityTable,
    isPreview: true,
  },
  {
    slug: "over-verbinding-en-groei",
    category: "verhalen",
    publishedAt: "2025-01-01",
    author: "Stichting Lumina Collective",
    title: "Voorbeeldartikel: over verbinding en groei",
    excerpt:
      "Verhalen van deelneemsters worden hier pas gedeeld zodra inhoud en toestemming bevestigd zijn.",
    body: "Dit voorbeeld laat zien hoe een persoonlijk verhaal kan worden opgebouwd. Echte verhalen worden pas gepubliceerd na toestemming van de betrokken personen en redactionele controle.",
    visual: visuals.conversation,
    isPreview: true,
  },
  {
    slug: "interview-met-een-vrijwilligster",
    category: "interviews",
    publishedAt: "2025-01-01",
    author: "Stichting Lumina Collective",
    title: "Voorbeeldartikel: interview met een vrijwilligster",
    excerpt:
      "Interviews volgen zodra vrijwilligers toestemming hebben gegeven en de tekst is goedgekeurd.",
    body: "Dit voorbeeld toont hoe een interviewpagina eruit kan zien. Publiceer hier alleen echte interviews nadat de tekst, foto en toestemming zorgvuldig zijn bevestigd.",
    visual: visuals.presentation,
    isPreview: true,
  },
];

export async function generateStaticParams() {
  return previewPosts.map((p) => ({ slug: p.slug }));
}

function findPost(slug: string) {
  return previewPosts.find((p) => p.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) return {};

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/nieuws/${slug}`,
  });
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function NieuwsDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = findPost(slug);

  if (!post) notFound();

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Nieuws & verhalen", path: "/nieuws" },
    { name: post.title, path: `/nieuws/${slug}` },
  ];

  return (
    <>
      <StructuredData
        data={blogPostingJsonLd({
          title: post.title,
          description: post.excerpt,
          slug: post.slug,
          datePublished: new Date(post.publishedAt).toISOString(),
        })}
      />
      <StructuredData data={breadcrumbJsonLd(breadcrumbs)} />

      {/* Breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        className="border-b border-deep-aubergine/8 py-3"
      >
        <Container>
          <ol className="flex flex-wrap items-center gap-2 text-sm text-ink-brown/60">
            {breadcrumbs.map((crumb, i) => (
              <li key={crumb.path} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">/</span>}
                {i < breadcrumbs.length - 1 ? (
                  <a
                    href={crumb.path}
                    className="transition hover:text-deep-aubergine"
                  >
                    {crumb.name}
                  </a>
                ) : (
                  <span className="text-ink-brown/90" aria-current="page">
                    {crumb.name}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </Container>
      </nav>

      {/* Article header */}
      <article>
        <header className="py-14 md:py-20">
          <Container className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-gold">
              {categoryLabels[post.category] ?? post.category}
            </p>
            <h1 className="mt-4 font-serif text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] text-deep-aubergine">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-warm-taupe">
              <span>{formatDate(post.publishedAt)}</span>
              <span aria-hidden="true">·</span>
              <span>{post.author}</span>
            </div>
          </Container>
        </header>

        <VisualPlaceholder
          className="mx-auto mb-12 min-h-[28rem] max-w-5xl"
          visual={post.visual}
        />

        {/* Body */}
        <Container className="max-w-3xl pb-16 md:pb-24">
          <Prose>
            {post.body.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </Prose>

          {/* Placeholder notice */}
          {post.isPreview && (
            <div
              className="mt-10 border-l-2 border-muted-gold/50 bg-lumina-ivory px-5 py-4 text-sm text-ink-brown/65"
              data-internal="preview-notice"
            >
              <strong>Interne notitie:</strong> Dit is voorbeeldinhoud voor de
              previewfase. Vervang dit via Sanity Studio met echte inhoud voor
              publicatie.
            </div>
          )}
        </Container>
      </article>

      <CtaBand
        body="Ben jij actief in de gemeenschap en wil je je verhaal delen? We horen graag van je."
        primary={{ label: "Neem contact op", href: "/contact" }}
        secondary={{ label: "Meer artikelen", href: "/nieuws" }}
        title="Deel jouw verhaal."
      />
    </>
  );
}
