import Link from "next/link";
import { CMSImage } from "@/components/ui/CMSImage";
import { TextLink } from "@/components/ui/TextLink";
import type { ProgramDisplay } from "@/types/cms";

export function ProgramCard({ program, index }: { program: ProgramDisplay; index?: number }) {
  const href = `/programmas/${program.slug}`;
  return <article className="program-card">
    <Link href={href} tabIndex={-1} aria-hidden="true" className="program-card__image img-zoom">
      <CMSImage fallback={program.visual} image={program.image} sizes="(max-width: 640px) 100vw, 50vw" />
    </Link>
    <div className="program-card__body">
      <div className="program-card__meta"><span>{program.category || "Programma"}</span>{index !== undefined && <span>{String(index + 1).padStart(2, "0")}</span>}</div>
      <h3><Link href={href}>{program.title}</Link></h3>
      <p>{program.description}</p>
      <TextLink href={href}>Ontdek het programma</TextLink>
    </div>
  </article>;
}
