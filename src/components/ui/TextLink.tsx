import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils/cn";

export function TextLink({ children, className, ...props }: ComponentPropsWithoutRef<typeof Link>) {
  return <Link className={cn("text-link", className)} {...props}>{children}<ArrowUpRight size={18} aria-hidden="true" /></Link>;
}
