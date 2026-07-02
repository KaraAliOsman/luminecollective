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
    "inline-flex items-center justify-center border font-semibold tracking-wide transition-all duration-250 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-aubergine disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.97]";

  const variants = {
    primary:
      "border-deep-aubergine bg-deep-aubergine text-[#fffaf2] shadow-none hover:border-wine-plum hover:bg-wine-plum hover:shadow-[0_6px_24px_rgba(66,21,47,0.2)] hover:scale-[1.02]",
    secondary:
      "border-deep-aubergine/35 bg-warm-white text-deep-aubergine hover:border-deep-aubergine hover:bg-soft-linen hover:shadow-[0_4px_16px_rgba(66,21,47,0.08)] hover:scale-[1.02]",
    ghost:
      "border-transparent bg-transparent text-deep-aubergine hover:border-deep-aubergine/20 hover:text-wine-plum",
    light:
      "border-warm-white bg-warm-white text-deep-aubergine hover:border-soft-linen hover:bg-soft-linen hover:shadow-[0_6px_24px_rgba(255,250,242,0.3)] hover:scale-[1.02]",
    outlineOnDark:
      "border-warm-white/40 bg-transparent text-warm-white hover:border-warm-white hover:bg-warm-white/10 hover:shadow-[0_4px_20px_rgba(255,250,242,0.1)] hover:scale-[1.02]",
  };

  const sizes = {
    sm: "min-h-10 px-4 py-2 text-xs rounded-sm",
    md: "min-h-11 px-5 py-3 text-sm sm:px-6 rounded-sm",
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
