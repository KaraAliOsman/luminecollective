import Link from "next/link";
import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { CMSImage } from "@/components/ui/CMSImage";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { TextLink } from "@/components/ui/TextLink";
import { getPageByKey, getPosts } from "@/lib/cms/content";
import { createMetadata } from "@/lib/seo/config";

const fallbackDescription =
  "Artikelen, interviews, terugblikken en kennis van Stichting Lumina Collective.";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageByKey("nieuws");

  return createMetadata({
    title: page?.seoTitle || "Nieuws & verhalen",
    description: page?.metaDescription || fallbackDescription,
    path: "/nieuws",
  });
}

const categoryLabels: Record<string, string> = {
  nieuws: "Nieuws",
  verhalen: "Verhalen",
  interviews: "Interviews",
  terugblik: "Terugblik",
  kennis: "Kennis",
  persbericht: "Persbericht",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function NieuwsPage() {
  const [page, posts] = await Promise.all([getPageByKey("nieuws"), getPosts()]);
  const [featured, ...rest] = posts;

  return (
    <>
      <section className="border-b border-deep-aubergine/10 py-16 md:py-20">
        <Container>
          <Eyebrow>Nieuws &amp; verhalen</Eyebrow>
          <h1 className="mt-4 max-w-2xl font-serif text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] text-deep-aubergine">
            {page?.heroTitle || "Verhalen, kennis en nieuws van de gemeenschap."}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-ink-brown/75">
            {page?.heroText ||
              "We delen artikelen over thema's die onze gemeenschap raken: ontmoeting, groei, cultuur en participatie."}
          </p>
        </Container>
      </section>

      {featured && (
        <section className="py-16 md:py-20">
          <Container>
            <Eyebrow>Uitgelicht</Eyebrow>
            <article
              className="mt-8 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-start"
              data-preview={featured.isPreview}
            >
              <Link href={`/nieuws/${featured.slug}`} tabIndex={-1} aria-hidden="true">
                <CMSImage
                  className="min-h-[24rem]"
                  fallback={featured.visual}
                  image={featured.image}
                  caption={categoryLabels[featured.category] ?? featured.category}
                />
              </Link>
              <div className="space-y-4 md:pt-4">
                <p className="text-sm font-semibold uppercase tracking-[0.1em] text-warm-taupe">
                  {formatDate(featured.publishedAt)}
                </p>
                <Heading size="md">
                  <Link
                    href={`/nieuws/${featured.slug}`}
                    className="transition hover:text-wine-plum"
                  >
                    {featured.title}
                  </Link>
                </Heading>
                <p className="leading-7 text-ink-brown/75">{featured.excerpt}</p>
                <TextLink href={`/nieuws/${featured.slug}`}>Lees verder</TextLink>
              </div>
            </article>
          </Container>
        </section>
      )}

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
                  <Link href={`/nieuws/${post.slug}`} tabIndex={-1} aria-hidden="true">
                    <CMSImage
                      className="min-h-[16rem]"
                      fallback={post.visual}
                      image={post.image}
                      caption={categoryLabels[post.category] ?? post.category}
                    />
                  </Link>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold uppercase tracking-[0.1em] text-warm-taupe">
                      {formatDate(post.publishedAt)}
                    </p>
                    <h2 className="font-serif text-2xl leading-tight text-deep-aubergine">
                      <Link
                        href={`/nieuws/${post.slug}`}
                        className="transition hover:text-wine-plum"
                      >
                        {post.title}
                      </Link>
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
          <Link
            href="/contact"
            className="mt-6 inline-flex min-h-11 items-center border border-deep-aubergine bg-deep-aubergine px-5 py-3 text-sm font-semibold text-warm-white transition hover:bg-wine-plum"
          >
            Updates ontvangen
          </Link>
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
