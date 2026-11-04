"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const REVEAL_SELECTOR = "[data-reveal]";

/** Only what is still below the fold gets armed, so nothing visible ever flashes away. */
function trackReveals() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => undefined;
  const items = [...document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)].filter(item => item.getBoundingClientRect().top > window.innerHeight * .9);
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-in");
      entry.target.classList.remove("is-armed");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: .08 });
  items.forEach(item => {
    item.classList.add("is-armed");
    observer.observe(item);
  });
  return () => observer.disconnect();
}

export function PosterMotion() {
  const pathname = usePathname();
  useEffect(() => {
    return trackReveals();
  }, [pathname]);
  return null;
}
