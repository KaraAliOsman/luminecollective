import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { EventCard } from "@/components/cards/EventCard";
import { StructuredData } from "@/components/seo/StructuredData";
import { CtaBand } from "@/components/sections/CtaBand";
import { CMSImage } from "@/components/ui/CMSImage";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import {
  getEventBySlug,
  getEventSlugs,
  getGalleryForEvent,
  getRelatedEventsForEvent,
} from "@/lib/cms/content";
import { createMetadata } from "@/lib/seo/config";
import { breadcrumbJsonLd, eventJsonLd } from "@/lib/seo/jsonLd";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getEventSlugs();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEventBySlug(slug);
  if (!event) return {};

  return createMetadata({
    title: event.seoTitle ?? event.title,
    description: event.metaDescription ?? event.description,
    path: `/agenda/${slug}`,
  });
}

export default async function AgendaDetailPage({ params }: Props) {
  const { slug } = await params;
  const [event, relatedEvents, gallery] = await Promise.all([
    getEventBySlug(slug),
    getRelatedEventsForEvent(slug),
    getGalleryForEvent(slug),
  ]);

  if (!event) notFound();

  const isCancelled = event.status === "cancelled";
  const isPast = event.status === "past";
  const ctaHref =
    !isCancelled && !isPast && event.registrationUrl ? event.registrationUrl : "/contact";
  const ctaLabel =
    !isCancelled && !isPast && event.registrationUrl ? "Aanmelden" : "Contact";
  const finalCtaTitle =
    isCancelled || isPast ? "Meer weten over Lumina?" : "Meer weten of aanmelden?";
  const finalCtaBody =
    isCancelled || isPast
      ? "Heb je vragen over onze activiteiten of wil je op de hoogte blijven? We horen graag van je."
      : "Heb je vragen over dit evenement of wil je deelnemen? We helpen je graag.";

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Agenda", path: "/agenda" },
    { name: event.title, path: `/agenda/${slug}` },
  ];

  return (
    <>
      {event.dateStart && (
        <StructuredData
          data={eventJsonLd({
            name: event.title,
            description: event.description,
            slug,
            startDate: event.dateStart,
            endDate: event.dateEnd,
            locationName: event.locationName,
            locationAddress: event.locationAddress,
            isFree: event.isFree,
            status: event.status,
          })}
        />
      )}
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

      {isCancelled && (
        <div
          role="alert"
          className="bg-wine-plum/10 py-4 text-center text-sm font-semibold text-wine-plum"
        >
          Dit evenement is geannuleerd. Neem contact op voor meer informatie.
        </div>
      )}

      <section className="py-14 md:py-20">
        <Container className="grid items-start gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-7">
            <Eyebrow>Evenement</Eyebrow>
            <h1 className="font-serif text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] text-deep-aubergine">
              {event.title}
            </h1>

            <dl className="divide-y divide-deep-aubergine/10">
              <InfoRow label="Datum" value={event.date} />
              {event.time && <InfoRow label="Tijd" value={event.time} />}
              {event.location && <InfoRow label="Plaats" value={event.location} />}
              {event.locationAddress && (
                <InfoRow label="Adres" value={event.locationAddress} />
              )}
              <InfoRow
                label="Prijs"
                value={event.isFree ? "Gratis" : event.priceDescription ?? "Prijs volgt"}
              />
              {event.capacity && (
                <InfoRow
                  label="Capaciteit"
                  value={`Max. ${event.capacity} deelnemers`}
                />
              )}
            </dl>

            {!isCancelled && !isPast && (
              <a
                className="inline-flex min-h-11 items-center border border-deep-aubergine bg-deep-aubergine px-6 py-3 text-sm font-semibold tracking-wide text-warm-white transition hover:bg-wine-plum"
                href={ctaHref}
                rel={event.registrationUrl ? "noreferrer" : undefined}
                target={event.registrationUrl ? "_blank" : undefined}
              >
                {ctaLabel}
              </a>
            )}
            {isPast && (
              <p className="text-sm text-warm-taupe">
                Dit evenement heeft al plaatsgevonden.
              </p>
            )}
          </div>

          <CMSImage
            altFallback={event.title}
            className="h-72 sm:h-80 md:h-[28rem]"
            fallback={event.visual}
            image={event.image}
            priority
          />
        </Container>
      </section>

      {event.description && (
        <section className="bg-warm-white py-10 sm:py-14 md:py-20">
          <Container>
            <div className="mx-auto max-w-3xl">
              <Eyebrow>Over dit evenement</Eyebrow>
              <p className="mt-6 text-lg leading-[1.85] text-ink-brown/78">
                {event.description}
              </p>
            </div>
          </Container>
        </section>
      )}

      <section className="py-10 sm:py-14 md:py-20">
        <Container className="grid gap-10 md:grid-cols-[0.75fr_1.25fr]">
          <div>
            <Eyebrow>Praktisch</Eyebrow>
            <h2 className="mt-4 font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.05] text-deep-aubergine">
              Goed om te weten.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <PracticalItem label="Status" value={statusLabel(event.status)} />
            <PracticalItem
              label="Aanmelden"
              value={
                isCancelled
                  ? "Niet mogelijk, dit event is geannuleerd."
                  : isPast
                    ? "Dit event heeft al plaatsgevonden."
                    : event.registrationUrl
                      ? "Inschrijving via externe link."
                      : "Neem contact op voor interesse."
              }
            />
            <PracticalItem
              label="Kosten"
              value={event.isFree ? "Gratis" : event.priceDescription ?? "Prijs volgt."}
            />
            {event.capacity && (
              <PracticalItem
                label="Capaciteit"
                value={`Maximaal ${event.capacity} deelnemers.`}
              />
            )}
          </div>
        </Container>
      </section>

      {gallery.length > 0 && (
        <section className="bg-warm-white py-10 sm:py-14 md:py-20">
          <Container>
            <div className="mb-8 max-w-2xl space-y-4">
              <Eyebrow>In beeld</Eyebrow>
              <h2 className="font-serif text-[clamp(2rem,3.8vw,3.35rem)] leading-[1] text-deep-aubergine">
                Beelden rond dit event.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {gallery.slice(0, 6).map((item, index) => (
                <CMSImage
                  altFallback={item.alt}
                  caption={item.caption}
                  className={
                    index === 0
                      ? "h-72 sm:h-80 md:col-span-2 md:h-[32rem]"
                      : "h-56 sm:h-64 md:h-[18rem]"
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

      {relatedEvents.length > 0 && (
        <section className="py-10 sm:py-14 md:py-20">
          <Container>
            <div className="mb-8 max-w-2xl space-y-4">
              <Eyebrow>Ook interessant</Eyebrow>
              <h2 className="font-serif text-[clamp(2rem,3.8vw,3.35rem)] leading-[1] text-deep-aubergine">
                Andere komende activiteiten.
              </h2>
            </div>
            <div>
              {relatedEvents.map((relatedEvent) => (
                <EventCard event={relatedEvent} key={relatedEvent.slug} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBand
        body={finalCtaBody}
        primary={{ label: ctaLabel, href: ctaHref }}
        secondary={{ label: "Bekijk agenda", href: "/agenda" }}
        title={finalCtaTitle}
      />
    </>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-4 py-4 first:pt-0">
      <dt className="w-24 shrink-0 text-xs font-bold uppercase tracking-[0.14em] text-warm-taupe">
        {label}
      </dt>
      <dd className="text-ink-brown/80">{value}</dd>
    </div>
  );
}

function PracticalItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-deep-aubergine/15 pt-5">
      <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-wine-plum">
        {label}
      </h3>
      <p className="mt-3 leading-7 text-ink-brown/75">{value}</p>
    </div>
  );
}

function statusLabel(status: "upcoming" | "past" | "cancelled") {
  if (status === "cancelled") return "Geannuleerd.";
  if (status === "past") return "Afgelopen.";
  return "Aankomend.";
}
