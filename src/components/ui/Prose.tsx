import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

export function Prose({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl space-y-5 text-base leading-8 text-ink-brown/82 md:text-lg",
        className,
      )}
    >
      {children}
    </div>
  );
}
