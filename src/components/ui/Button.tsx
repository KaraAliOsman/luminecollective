import Link from "next/link";
import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/utils/cn";

type ButtonProps<T extends ElementType = "button"> = {
  as?: T;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "light" | "outlineOnDark";
  size?: "sm" | "md";
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "href" | "variant" | "size">;

export function Button({ as, href, variant = "primary", size = "md", className, children, ...props }: ButtonProps) {
  const classes = cn("button", `button--${variant}`, `button--${size}`, className);
  if (href) {
    return <Link href={href} className={classes} {...props as Omit<ComponentPropsWithoutRef<typeof Link>, "href">}>{children}</Link>;
  }
  const Tag = (as ?? "button") as ElementType;
  return <Tag className={classes} {...props}>{children}</Tag>;
}
