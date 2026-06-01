import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type HeadingProps = {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  size?: "hero" | "xl" | "lg" | "md";
  className?: string;
};

const sizes = {
  hero:
    "text-[clamp(2.7rem,8vw,6.85rem)] leading-[0.92] tracking-normal",
  xl: "text-[clamp(2.15rem,5vw,4.6rem)] leading-[0.98]",
  lg: "text-[clamp(1.85rem,3.8vw,3.35rem)] leading-[1.04]",
  md: "text-[clamp(1.45rem,2.4vw,2.15rem)] leading-[1.12]",
};

export function Heading({
  children,
  as: Component = "h2",
  size = "lg",
  className,
}: HeadingProps) {
  return (
    <Component
      className={cn(
        "font-serif font-medium tracking-normal text-deep-aubergine text-balance",
        sizes[size],
        className,
      )}
    >
      {children}
    </Component>
  );
}
