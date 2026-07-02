import { TextLink } from "@/components/ui/TextLink";
import type { EventDisplay } from "@/types/cms";

export function EventCard({ event }: { event: EventDisplay }) {
  const href = event.slug ? `/agenda/${event.slug}` : "/agenda";

  return (
    <article
      className="group grid gap-6 border-b border-deep-aubergine/10 py-8 transition-colors hover:bg-warm-white/40 md:grid-cols-[15rem_1fr] md:items-center md:gap-10"
      data-placeholder={event.isPlaceholder}
    >
      <div className="space-y-1">
        <p className="inline-flex items-center gap-2 rounded-sm bg-soft-blush/40 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-wine-plum">
          {event.date}
        </p>
        <p className="text-sm text-warm-taupe">{event.location}</p>
      </div>
      <div className="space-y-3">
        <h3 className="font-serif text-3xl leading-tight text-deep-aubergine transition group-hover:text-wine-plum">
          {event.title}
        </h3>
        <p className="max-w-2xl leading-7 text-ink-brown/72">
          {event.description}
        </p>
        <TextLink href={href}>{event.cta}</TextLink>
      </div>
    </article>
  );
}
