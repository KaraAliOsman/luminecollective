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
      <VisualPlaceholder className={className} imageClassName={imageClassName} priority={priority} sizes={sizes} visual={{ ...fallback, alt }}>
        {caption}
      </VisualPlaceholder>
    );
  }

  return (
    <figure
      className={cn(
        "photo",
        className,
      )}
      data-preview={image?.isPlaceholder ? "true" : undefined}
    >
      <Image
        alt={alt}
        className={cn("photo__image", imageClassName)}
        fill
        priority={priority}
        sizes={sizes}
        src={src}
      />
      {caption && (
        <figcaption className="photo__caption">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
