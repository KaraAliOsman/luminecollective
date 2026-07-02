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
        "relative max-w-full overflow-hidden border border-deep-aubergine/10 bg-soft-linen text-deep-aubergine shadow-[0_24px_70px_rgba(66,21,47,0.10)]",
        className,
      )}
      data-preview={visual.isPreview ? "true" : undefined}
    >
      <Image
        alt={visual.alt}
        className="h-full w-full object-cover object-center"
        fill
        priority={priority}
        sizes={sizes}
        src={visual.src}
      />
      {children && (
        <figcaption className="absolute bottom-3 left-3 right-3 z-10 max-w-xs glass rounded-sm p-3 text-xs font-semibold uppercase tracking-[0.1em] text-wine-plum sm:bottom-4 sm:left-4 sm:right-auto sm:p-4 sm:tracking-[0.12em]">
          {children}
        </figcaption>
      )}
    </figure>
  );
}
