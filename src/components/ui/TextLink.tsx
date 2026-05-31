import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type TextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
};

export function TextLink({ children, href, className, ...props }: TextLinkProps) {
  return (
    <Link
      className={cn(
        "font-semibold text-deep-aubergine underline decoration-muted-gold/55 underline-offset-8 transition hover:decoration-deep-aubergine",
        className,
      )}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
}
