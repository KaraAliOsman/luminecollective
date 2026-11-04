import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export type TearStrip = { label: string; href: string };

/** The strips you tear off a neighbourhood poster: each one is a way to take the next step. */
export function TearStrips({ strips, label }: { strips: TearStrip[]; label: string }) {
  return <nav className="tear" aria-label={label}>
    {strips.map(strip => <Link href={strip.href} key={strip.href}>{strip.label}<ArrowUpRight size={20} aria-hidden="true" /></Link>)}
  </nav>;
}
