"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { mainNavigation } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils/cn";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setMounted(true), []);
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const overlay = open ? (
    <div className="fixed inset-0 z-[200] overflow-y-auto bg-deep-aubergine px-5 pb-8 pt-5 text-warm-white" role="dialog" aria-modal="true" aria-labelledby={titleId}>
      <div className="mx-auto flex min-h-[calc(100dvh-3rem)] max-w-xl flex-col">
        <div className="flex items-center justify-between border-b border-warm-white/14 pb-4">
          <p id={titleId} className="font-serif text-xl">Lumina Collective</p>
          <button ref={closeRef} className="inline-flex min-h-11 items-center border border-warm-white/35 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.12em]" onClick={() => setOpen(false)} type="button">Sluiten <span className="ml-2 text-lg font-normal leading-none" aria-hidden="true">×</span></button>
        </div>
        <nav aria-label="Mobiele navigatie" className="mt-7 grid gap-1">
          {mainNavigation.map((item, index) => (
            <Link
              aria-current={pathname === item.href ? "page" : undefined}
              className="group grid grid-cols-[2.25rem_1fr] items-center border-b border-warm-white/14 py-4 text-warm-white transition hover:text-soft-blush"
              href={item.href}
              key={item.href}
              onClick={() => setOpen(false)}
            >
              <span className="text-xs font-semibold text-muted-gold">{String(index + 1).padStart(2, "0")}</span>
              <span className="font-serif text-[clamp(2.15rem,11vw,3.45rem)] leading-[0.95]">{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="mt-auto border-l border-muted-gold/60 pl-5 pt-10">
          <p className="max-w-sm font-serif text-3xl leading-[1.05] text-warm-white">Neem je nieuwsgierigheid mee. De deur staat open.</p>
          <Link className="mt-5 inline-flex min-h-11 items-center border border-warm-white bg-warm-white px-5 py-3 text-sm font-semibold text-deep-aubergine" href="/doe-mee" onClick={() => setOpen(false)}>Doe mee</Link>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <div className="lg:hidden">
      <button
        aria-controls="mobile-menu"
        aria-expanded={open}
        className={cn(
          "relative z-[100] inline-flex min-h-11 items-center gap-3 border px-3.5 py-2 text-xs font-bold uppercase tracking-[0.12em] transition",
          "border-deep-aubergine/25 bg-warm-white/70 text-deep-aubergine hover:border-deep-aubergine/50",
        )}
        onClick={() => setOpen(true)}
        type="button"
      >
        <span className="grid w-5 gap-1" aria-hidden="true"><span className="h-px bg-current" /><span className="h-px bg-current" /><span className="h-px bg-current" /></span>
        <span>Menu</span>
      </button>
      {mounted && overlay ? createPortal(<div id="mobile-menu">{overlay}</div>, document.body) : null}
    </div>
  );
}
