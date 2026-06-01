"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { mainNavigation } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils/cn";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        aria-controls="mobile-menu"
        aria-expanded={open}
        className={cn(
          "relative z-[100] inline-flex min-h-11 items-center gap-3 border px-3.5 py-2 text-sm font-semibold transition",
          open
            ? "border-warm-white/35 bg-warm-white text-deep-aubergine"
            : "border-deep-aubergine/25 bg-warm-white/70 text-deep-aubergine hover:border-deep-aubergine/50",
        )}
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        <span className="grid w-5 gap-1" aria-hidden="true">
          <span
            className={cn(
              "h-px bg-current transition",
              open && "translate-y-[5px] rotate-45",
            )}
          />
          <span className={cn("h-px bg-current transition", open && "opacity-0")} />
          <span
            className={cn(
              "h-px bg-current transition",
              open && "-translate-y-[5px] -rotate-45",
            )}
          />
        </span>
        <span>{open ? "Sluiten" : "Menu"}</span>
      </button>

      <div
        className={cn(
          "fixed inset-0 z-[90] overflow-y-auto bg-deep-aubergine px-5 pb-8 pt-24 text-warm-white transition duration-300",
          open
            ? "translate-x-0 opacity-100"
            : "pointer-events-none translate-x-full opacity-0",
        )}
        id="mobile-menu"
      >
        <div className="mx-auto grid min-h-[calc(100dvh-8rem)] max-w-xl content-between gap-10">
          <nav aria-label="Mobiele navigatie" className="grid gap-1">
            {mainNavigation.map((item, index) => (
              <Link
                className="group grid grid-cols-[2.25rem_1fr] items-center border-b border-warm-white/14 py-4 text-warm-white transition hover:text-soft-blush"
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                <span className="text-xs font-semibold text-muted-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-[clamp(2.15rem,11vw,3.45rem)] leading-[0.95]">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="border-l border-muted-gold/60 pl-5">
            <p className="max-w-sm font-serif text-2xl leading-tight text-warm-white">
              Ruimte voor vrouwen om te groeien, verbinden en zichtbaar te zijn.
            </p>
            <Link
              className="mt-5 inline-flex min-h-11 items-center border border-warm-white bg-warm-white px-5 py-3 text-sm font-semibold text-deep-aubergine"
              href="/doe-mee"
              onClick={() => setOpen(false)}
            >
              Doe mee
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
