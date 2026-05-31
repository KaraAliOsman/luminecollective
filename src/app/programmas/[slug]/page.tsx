import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { EventCard } from "@/components/cards/EventCard";
import { StructuredData } from "@/components/seo/StructuredData";
import { CtaBand } from "@/components/sections/CtaBand";
import { CMSImage } from "@/components/ui/CMSImage";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import {
  getGalleryForProgram,
  getProgramBySlug,
  getProgramSlugs,
  getRelatedEventsForProgram,
} from "@/lib/cms/content";
import { createMetadata } from "@/lib/seo/config";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo/jsonLd";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getProgramSlugs();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = await getProgramBySlug(slug);
  if (!program) return {};

  return createMetadata({
    title: program.seoTitle ?? program.title,
    description: program.metaDescription ?? program.description,
    path: `/programmas/${slug}`,
  });
}

export default async function ProgrammaDetailPage({ params }: Props) {
  const { slug } = await params;
  const [program, relatedEvents, gallery] = await Promise.all([
    getProgramBySlug(slug),
    getRelatedEventsForProgram(slug),
    getGalleryForProgram(slug),
  ]);

  if (!program) notFound();

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Programma's", path: "/programmas" },
    { name: program.title, path: `/programmas/${slug}` },
  ];

  return (
    <>
      <StructuredData
        data={webPageJsonLd({
          path: `/programmas/${slug}`,
          title: program.seoTitle ?? program.title,
          description: program.metaDescription ?? program.description,
        })}
      />
      <StructuredData data={breadcrumbJsonLd(breadcrumbs)} />

      <nav aria-label="Breadcrumb" className="border-b border-deep-aubergine/8 py-3">
        <Container>
          <ol className="flex flex-wrap items-center gap-2 text-sm text-ink-brown/60">
            {breadcrumbs.map((crumb, i) => (
              <li key={crumb.path} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">/</span>}
                {i < breadcrumbs.length - 1 ? (
                  <a href={crumb.path} className="transition hover:text-deep-aubergine">
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

      <section className="py-14 md:py-20">
        <Container className="grid items-start gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-6">
            <Eyebrow>Programma</Eyebrow>
            <h1 className="font-serif text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] text-deep-aubergine">
              {program.title}
            </h1>
            <p className="text-lg leading-8 text-ink-brown/78">
              {program.description}
            </p>
            <a
              href={program.ctaHref}
              className="inline-flex min-h-11 items-center border border-deep-aubergine bg-deep-aubergine px-6 py-3 text-sm font-semibold tracking-wide text-warm-white transition hover:bg-wine-plum"
            >
              {program.ctaLabel}
            </a>
          </div>
          <CMSImage
            altFallback={program.title}
            className="min-h-[28rem]"
            fallback={program.visual}
            image={program.image}
            priority
          />
        </Container>
      </section>

      {(program.targetAudience || program.goals.length > 0) && (
        <section className="bg-warm-white py-16 md:py-24">
          <Container className="grid gap-12 md:grid-cols-2">
            {program.targetAudience && (
              <div className="space-y-4">
                <Eyebrow>Voor wie</Eyebrow>
                <p className="text-lg leading-8 text-ink-brown/78">
                  {program.targetAudience}
                </p>
              </div>
            )}
            {program.goals.length > 0 && (
              <div className="space-y-4">
                <Eyebrow>Doelstellingen</Eyebrow>
                <ul className="space-y-3">
                  {program.goals.map((goal) => (
                    <li key={goal} className="flex gap-3 text-ink-brown/78">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-gold"
                        aria-hidden="true"
                      />
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Container>
        </section>
      )}

      {program.longDescription && (
        <section className="py-16 md:py-24">
          <Container>
            <div className="mx-auto max-w-3xl">
              <Eyebrow>Over dit programma</Eyebrow>
              <div className="prose-lumina mt-8 whitespace-pre-line text-lg leading-[1.85]">
                {program.longDescription}
              </div>
            </div>
          </Container>
        </section>
      )}

      {relatedEvents.length > 0 && (
        <section className="bg-soft-blush/30 py-16 md:py-24">
          <Container>
            <div className="mb-8 max-w-2xl space-y-4">
              <Eyebrow>Agenda</Eyebrow>
              <h2 className="font-serif text-[clamp(2rem,3.8vw,3.35rem)] leading-[1] text-deep-aubergine">
                Activiteiten binnen dit programma.
              </h2>
            </div>
            <div>
              {relatedEvents.map((event) => (
                <EventCard event={event} key={event.slug} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {gallery.length > 0 && (
        <section className="py-16 md:py-24">
          <Container>
            <div className="mb-8 max-w-2xl space-y-4">
              <Eyebrow>In beeld</Eyebrow>
              <h2 className="font-serif text-[clamp(2rem,3.8vw,3.35rem)] leading-[1] text-deep-aubergine">
                Momenten uit dit programma.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {gallery.slice(0, 6).map((item, index) => (
                <CMSImage
                  altFallback={item.alt}
                  caption={item.caption}
                  className={
                    index === 0
                      ? "min-h-[22rem] md:col-span-2 md:min-h-[32rem]"
                      : "min-h-[18rem]"
                  }
                  fallback={item.visual}
                  image={item.image}
                  key={item.id}
                />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBand
        body="Heb je vragen over dit programma of wil je meer weten? We horen graag van je."
        primary={{ label: program.ctaLabel, href: program.ctaHref }}
        secondary={{ label: "Neem contact op", href: "/contact" }}
        title="Klaar om mee te doen?"
      />
    </>
  );
}
