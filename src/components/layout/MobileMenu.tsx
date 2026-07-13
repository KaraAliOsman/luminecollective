"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { mainNavigation } from "@/lib/constants/navigation";
import type { NavigationItem } from "@/types/cms";

type MobileMenuProps = {
  navigation?: NavigationItem[];
  cta?: NavigationItem;
};

export function MobileMenu({ navigation, cta }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const items = navigation?.length ? navigation : [...mainNavigation];
  const menuItems = items.filter((item) => item.href !== cta?.href);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

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
    <div className="mobile-menu" role="dialog" aria-modal="true" aria-labelledby={titleId}>
      <div className="mobile-menu__wash" aria-hidden="true" />
      <div className="mobile-menu__top">
        <p id={titleId}><span>Lumina</span> / Collective</p>
        <button ref={closeButtonRef} onClick={() => setOpen(false)} type="button">
          Sluiten <span aria-hidden="true">×</span>
        </button>
      </div>

      <div className="mobile-menu__body">
        <nav aria-label="Mobiele navigatie">
          {menuItems.map((item, index) => (
            <Link
              aria-current={pathname === item.href ? "page" : undefined}
              href={item.href}
              key={`${item.href}-${index}`}
            >
              <small>{String(index + 1).padStart(2, "0")}</small>
              <span>{item.label}</span>
              <i aria-hidden="true">↗</i>
            </Link>
          ))}
        </nav>

        <div className="mobile-menu__aside">
          <p>Een open tafel voor ontmoeting, groei en nieuwe verhalen.</p>
          {cta && <Link href={cta.href}>{cta.label}<span aria-hidden="true">→</span></Link>}
          <small>Tilburg · 013 · NL</small>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        aria-controls="mobile-menu-layer"
        aria-expanded={open}
        aria-label="Navigatiemenu openen"
        className="mobile-menu-trigger"
        onClick={() => setOpen(true)}
        type="button"
      >
        <span aria-hidden="true"><i /><i /></span>
        Menu
      </button>
      {mounted && overlay ? createPortal(<div id="mobile-menu-layer">{overlay}</div>, document.body) : null}
    </>
  );
}
