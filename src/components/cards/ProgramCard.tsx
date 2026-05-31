import Link from "next/link";

import { CMSImage } from "@/components/ui/CMSImage";
import { TextLink } from "@/components/ui/TextLink";
import type { ProgramDisplay } from "@/types/cms";

export function ProgramCard({ program }: { program: ProgramDisplay }) {
  const href = `/programmas/${program.slug}`;

  return (
    <article className="grid gap-5" data-preview={program.isFallback}>
      <Link href={href} tabIndex={-1} aria-hidden="true">
        <CMSImage
          className="aspect-[4/3] min-h-0"
          fallback={program.visual}
          image={program.image}
        />
      </Link>
      <div className="space-y-3">
        <h2 className="font-serif text-3xl leading-tight text-deep-aubergine">
          <Link href={href} className="transition hover:text-wine-plum">
            {program.title}
          </Link>
        </h2>
        <p className="leading-7 text-ink-brown/75">{program.description}</p>
        <TextLink href={href}>{program.ctaLabel}</TextLink>
      </div>
    </article>
  );
}
