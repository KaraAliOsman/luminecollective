import Image from "next/image";

import { VisualPlaceholder } from "@/components/ui/VisualPlaceholder";
import type { VisualPlaceholder as VisualPlaceholderType } from "@/data/placeholders";
import { urlFor } from "@/lib/sanity/image";
import { cn } from "@/lib/utils/cn";
import type { SanityImageLike } from "@/types/cms";

type CMSImageProps = {
  image?: SanityImageLike;
  fallback: VisualPlaceholderType;
  altFallback?: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  caption?: string;
};

function getImageUrl(image?: SanityImageLike) {
  if (!image?.asset) return null;

  try {
    return urlFor(image).width(1400).quality(82).auto("format").url();
  } catch {
    return null;
  }
}

export function CMSImage({
  image,
  fallback,
  altFallback,
  className,
  imageClassName,
  sizes = "(min-width: 768px) 50vw, 100vw",
  priority = false,
  caption,
}: CMSImageProps) {
  const src = getImageUrl(image);
  const alt = image?.alt || altFallback || fallback.alt;

  if (!src) {
    return (
      <VisualPlaceholder className={className} visual={fallback}>
        {caption}
      </VisualPlaceholder>
    );
  }

  return (
    <figure
      className={cn(
        "relative overflow-hidden border border-deep-aubergine/10 bg-soft-linen",
        className,
      )}
      data-preview={image?.isPlaceholder ? "true" : undefined}
    >
      <Image
        alt={alt}
        className={cn("h-full w-full object-cover", imageClassName)}
        fill
        priority={priority}
        sizes={sizes}
        src={src}
      />
      {(caption || image?.caption || image?.credit || image?.isPlaceholder) && (
        <figcaption className="absolute bottom-3 left-3 right-3 max-w-xs border-l border-muted-gold/55 bg-warm-white/88 p-3 text-xs font-semibold uppercase tracking-[0.1em] text-wine-plum backdrop-blur sm:bottom-4 sm:left-4 sm:right-auto sm:tracking-[0.12em]">
          {caption || image?.caption || image?.credit || "Preview beeld"}
        </figcaption>
      )}
    </figure>
  );
}
