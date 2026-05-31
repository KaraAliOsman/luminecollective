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
    "text-[clamp(3.1rem,8vw,6.85rem)] leading-[0.88] tracking-normal",
  xl: "text-[clamp(2.45rem,5vw,4.6rem)] leading-[0.95]",
  lg: "text-[clamp(2rem,3.8vw,3.35rem)] leading-[1]",
  md: "text-[clamp(1.55rem,2.4vw,2.15rem)] leading-[1.08]",
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
