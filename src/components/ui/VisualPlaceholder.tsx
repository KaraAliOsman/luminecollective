import type { ReactNode } from "react";
import Image from "next/image";

import type { VisualPlaceholder as VisualPlaceholderType } from "@/data/placeholders";
import { cn } from "@/lib/utils/cn";

type Props = {
  visual: VisualPlaceholderType;
  className?: string;
  children?: ReactNode;
  priority?: boolean;
  sizes?: string;
};

export function VisualPlaceholder({
  visual,
  className,
  children,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: Props) {
  return (
    <figure
      className={cn(
        "relative min-h-80 overflow-hidden border border-deep-aubergine/10 bg-soft-linen text-deep-aubergine",
        className,
      )}
      data-preview={visual.isPreview}
    >
      <Image
        alt={visual.alt}
        className="h-full w-full object-cover"
        fill
        priority={priority}
        sizes={sizes}
        src={visual.src}
      />
      {children && (
        <figcaption className="absolute bottom-4 left-4 z-10 max-w-xs border-l border-muted-gold/55 bg-warm-white/78 p-4 text-xs font-semibold uppercase tracking-[0.12em] text-wine-plum backdrop-blur">
          {children}
        </figcaption>
      )}
    </figure>
  );
}
