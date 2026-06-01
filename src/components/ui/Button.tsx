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

export function Button({
  as,
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center border font-semibold tracking-wide transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-aubergine disabled:cursor-not-allowed disabled:opacity-60";

  const variants = {
    primary:
      "border-deep-aubergine bg-deep-aubergine text-[#fffaf2] shadow-none hover:border-wine-plum hover:bg-wine-plum",
    secondary:
      "border-deep-aubergine/35 bg-warm-white text-deep-aubergine hover:border-deep-aubergine hover:bg-soft-linen",
    ghost:
      "border-transparent bg-transparent text-deep-aubergine hover:border-deep-aubergine/20 hover:text-wine-plum",
    light:
      "border-warm-white bg-warm-white text-deep-aubergine hover:border-soft-linen hover:bg-soft-linen",
    outlineOnDark:
      "border-warm-white/40 bg-transparent text-warm-white hover:border-warm-white hover:bg-warm-white/10",
  };

  const sizes = {
    sm: "min-h-10 px-4 py-2 text-xs",
    md: "min-h-11 px-5 py-3 text-sm sm:px-6",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    const linkProps = props as Omit<ComponentPropsWithoutRef<typeof Link>, "href">;

    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const Tag = (as ?? "button") as ElementType;
  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
}
