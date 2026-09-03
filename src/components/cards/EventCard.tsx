import { CalendarDays, MapPin, ArrowUpRight } from "lucide-react";
import { CMSImage } from "@/components/ui/CMSImage";
import { Button } from "@/components/ui/Button";
import type { EventDisplay } from "@/types/cms";

export function EventCard({ event }: { event: EventDisplay }) {
  return <article className="event-row">
    <CMSImage fallback={event.visual} image={event.image} sizes="180px" />
    <div><div className="event-row__meta"><span><CalendarDays size={14} aria-hidden="true" />{event.date}{event.time ? ` · ${event.time}` : ""}</span><span><MapPin size={14} aria-hidden="true" />{event.location}</span></div><h2>{event.title}</h2><p className="text-sm text-warm-taupe">{event.description}</p></div>
    <Button href={`/agenda/${event.slug}`} variant="secondary" size="sm">Bekijk activiteit<ArrowUpRight size={15} aria-hidden="true" /></Button>
  </article>;
}
