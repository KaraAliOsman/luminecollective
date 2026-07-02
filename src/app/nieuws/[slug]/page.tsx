import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/CtaBand";
import { CMSImage } from "@/components/ui/CMSImage";
import { Container } from "@/components/ui/Container";
import { PortableText } from "@/components/ui/PortableText";
import { Prose } from "@/components/ui/Prose";
import { StructuredData } from "@/components/seo/StructuredData";
import {
  getPostBySlug,
  getPostSlugs,
  getRelatedPosts,
} from "@/lib/cms/content";
import { createMetadata } from "@/lib/seo/config";
import { blogPostingJsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonLd";
import type { SanityBlock } from "@/types/sanity";

type Props = { params: Promise<{ slug: string }> };

const categoryLabels: Record<string, string> = {
  nieuws: "Nieuws",
  verhalen: "Verhalen",
  interviews: "Interviews",
  terugblik: "Terugblik",
  kennis: "Kennis",
  persbericht: "Persbericht",
};

export async function generateStaticParams() {
  return getPostSlugs();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return createMetadata({
    title: post.seoTitle || post.title,
    description: post.metaDescription || post.excerpt,
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
  const [post, relatedPosts] = await Promise.all([
    getPostBySlug(slug),
    getRelatedPosts(slug),
  ]);

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
                  <Link
                    href={crumb.path}
                    className="transition hover:text-deep-aubergine"
                  >
                    {crumb.name}
                  </Link>
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
              <span aria-hidden="true">/</span>
              <span>{post.author}</span>
            </div>
          </Container>
        </header>

        <CMSImage
          className="mx-auto mb-12 min-h-[28rem] max-w-5xl"
          fallback={post.visual}
          image={post.image}
          sizes="(min-width: 1024px) 960px, 100vw"
        />

        <Container className="max-w-3xl pb-16 md:pb-24">
          {post.body?.length ? (
            <PortableText value={post.body as SanityBlock[]} />
          ) : (
            <Prose>
              {(post.bodyText || post.excerpt).split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </Prose>
          )}
        </Container>
      </article>

      {relatedPosts.length > 0 && (
        <section className="bg-warm-white py-16 md:py-20">
          <Container>
            <div className="mb-10 max-w-2xl space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-gold">
                Verder lezen
              </p>
              <h2 className="font-serif text-4xl leading-tight text-deep-aubergine">
                Meer verhalen uit de gemeenschap.
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {relatedPosts.map((related) => (
                <article key={related.slug} className="grid gap-4">
                  <CMSImage
                    className="aspect-[4/3] min-h-0"
                    fallback={related.visual}
                    image={related.image}
                  />
                  <h3 className="font-serif text-2xl leading-tight text-deep-aubergine">
                    <Link
                      href={`/nieuws/${related.slug}`}
                      className="transition hover:text-wine-plum"
                    >
                      {related.title}
                    </Link>
                  </h3>
                </article>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBand
        body="Ben jij actief in de gemeenschap en wil je je verhaal delen? We horen graag van je."
        primary={{ label: "Neem contact op", href: "/contact" }}
        secondary={{ label: "Meer artikelen", href: "/nieuws" }}
        title="Deel jouw verhaal."
      />
    </>
  );
}
