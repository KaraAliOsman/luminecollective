import Image from "next/image";
import type { ReactNode } from "react";
import type { VisualPlaceholder as Visual } from "@/data/placeholders";
import { cn } from "@/lib/utils/cn";

export function VisualPlaceholder({ visual, className, imageClassName, children, priority = false, sizes = "(min-width: 1024px) 50vw, 100vw" }: {
  visual: Visual;
  className?: string;
  imageClassName?: string;
  children?: ReactNode;
  priority?: boolean;
  sizes?: string;
}) {
  return <figure className={cn("photo", className)}>
    <Image alt={visual.alt} className={cn("photo__image", imageClassName)} fill priority={priority} sizes={sizes} src={visual.src} />
    {children && <figcaption className="photo__caption">{children}</figcaption>}
  </figure>;
}
