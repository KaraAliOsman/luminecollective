import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type SectionProps = {
  children: ReactNode;
  className?: string;
  tone?: "default" | "warm" | "blush" | "deep";
};

const tones = {
  default: "",
  warm: "bg-warm-white",
  blush: "bg-soft-blush/35",
  deep: "bg-deep-aubergine text-warm-white",
};

export function Section({
  children,
  className,
  tone = "default",
}: SectionProps) {
  return (
    <section className={cn("py-10 sm:py-14 md:py-20", tones[tone], className)}>
      {children}
    </section>
  );
}
