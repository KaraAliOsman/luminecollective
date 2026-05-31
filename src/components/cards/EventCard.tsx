import Link from "next/link";

import { Button } from "@/components/ui/Button";
import type { EventDisplay } from "@/types/cms";

export function EventCard({ event }: { event: EventDisplay }) {
  const href = `/agenda/${event.slug}`;

  return (
    <article
      className="grid gap-5 border-t border-deep-aubergine/15 py-8 md:grid-cols-[12rem_1fr_auto] md:items-start first:pt-0"
      data-preview={event.isPlaceholder || event.isFallback}
    >
      <p className="font-serif text-3xl text-deep-aubergine">{event.date}</p>
      <div className="space-y-3">
        <h2 className="font-serif text-3xl leading-tight text-deep-aubergine">
          <Link href={href} className="transition hover:text-wine-plum">
            {event.title}
          </Link>
        </h2>
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-warm-taupe">
          {event.location}
        </p>
        <p className="max-w-2xl leading-7 text-ink-brown/75">{event.description}</p>
      </div>
      <Button
        className="md:justify-self-end"
        href={event.registrationUrl || href}
        variant="secondary"
      >
        {event.cta}
      </Button>
    </article>
  );
}
