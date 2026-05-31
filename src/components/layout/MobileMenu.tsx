"use client";

import Link from "next/link";
import { useState } from "react";

import { mainNavigation } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils/cn";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        aria-controls="mobile-menu"
        aria-expanded={open}
        className="min-h-11 border border-deep-aubergine/20 px-4 py-2 text-sm font-semibold text-deep-aubergine"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        {open ? "Sluit" : "Menu"}
      </button>
      <div
        className={cn(
          "fixed inset-0 z-40 bg-lumina-ivory px-6 pb-8 pt-24 transition duration-200",
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0",
        )}
        id="mobile-menu"
      >
        <nav aria-label="Mobiele navigatie" className="grid gap-5">
          {mainNavigation.map((item) => (
            <Link
              className="border-b border-deep-aubergine/12 pb-4 font-serif text-4xl text-deep-aubergine"
              href={item.href}
              key={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
