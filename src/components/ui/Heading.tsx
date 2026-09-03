import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

export function Heading({ children, as: Tag = "h2", size = "lg", className }: {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  size?: "hero" | "xl" | "lg" | "md";
  className?: string;
}) {
  return <Tag className={cn("heading", `heading--${size}`, className)}>{children}</Tag>;
}
