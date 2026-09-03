"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { mainNavigation } from "@/lib/constants/navigation";
import { brand } from "@/lib/constants/brand";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const id = useId();

  useEffect(() => { dialogRef.current?.close(); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onResize = () => {
      if (window.innerWidth > 900) dialogRef.current?.close();
    };
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  function close() { dialogRef.current?.close(); }

  return <>
    <button ref={triggerRef} className="icon-button mobile-menu-trigger" aria-label="Menu openen" title="Menu openen" aria-expanded={open} aria-controls={id} onClick={() => { dialogRef.current?.showModal(); setOpen(true); }} type="button">
      <Menu size={22} aria-hidden="true" />
    </button>
    <dialog ref={dialogRef} id={id} className="mobile-dialog" aria-label="Navigatie" onClose={() => { setOpen(false); triggerRef.current?.focus(); }}>
      <div className="mobile-dialog__top">
        <Link href="/" onClick={close} className="wordmark"><span className="wordmark__text"><strong>Lumina Collective</strong><small>Samen leven. Samen groeien.</small></span></Link>
        <button className="icon-button" type="button" onClick={close} aria-label="Menu sluiten" title="Menu sluiten" autoFocus><X size={22} aria-hidden="true" /></button>
      </div>
      <nav className="mobile-dialog__links" aria-label="Mobiele navigatie">
        {mainNavigation.filter(item => item.href !== "/").map(item => <Link key={item.href} href={item.href} onClick={close} aria-current={pathname === item.href || pathname.startsWith(item.href + "/") ? "page" : undefined}>{item.label}<ArrowUpRight size={18} aria-hidden="true" /></Link>)}
      </nav>
      <div className="mobile-dialog__contact"><a href={`mailto:${brand.email}`}>{brand.email}</a><a href={brand.phoneHref}>{brand.phone}</a></div>
    </dialog>
  </>;
}
