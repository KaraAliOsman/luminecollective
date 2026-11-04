import Link from "next/link";
import { CMSImage } from "@/components/ui/CMSImage";
import type { ProgramDisplay } from "@/types/cms";

export function ProgramCard({ program }: { program: ProgramDisplay; index?: number }) {
  const href = `/programmas/${program.slug}`;
  return <article className="program-card" data-reveal>
    <Link href={href} tabIndex={-1} aria-hidden="true" className="program-card__image img-zoom">
      <CMSImage fallback={program.visual} image={program.image} sizes="(max-width: 640px) 80vw, (max-width: 1180px) 46vw, 24vw" />
    </Link>
    <div className="program-card__body">
      <h3><Link href={href}>{program.title}</Link></h3>
      <p>{program.description}</p>
      <div className="program-card__meta"><span>{program.category || "Programma"}</span></div>
    </div>
  </article>;
}
