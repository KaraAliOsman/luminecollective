"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const REVEAL_SELECTOR = "[data-reveal]";

/** Posters taller than the viewport scroll to their end before the next one rolls over them. */
function trackPosterRoll() {
  const posters = [...document.querySelectorAll<HTMLElement>(".poster-series > .poster")];
  if (!posters.length) return () => undefined;
  const measure = () => {
    const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 60;
    const top = header + 8;
    const room = window.innerHeight - top;
    posters.forEach(poster => {
      poster.style.setProperty("--roll-top", `${Math.min(top, top + room - poster.offsetHeight - 10)}px`);
    });
  };
  measure();
  const observer = new ResizeObserver(measure);
  posters.forEach(poster => observer.observe(poster));
  window.addEventListener("resize", measure);
  return () => {
    observer.disconnect();
    window.removeEventListener("resize", measure);
  };
}

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
    const stopRoll = trackPosterRoll();
    const stopReveals = trackReveals();
    return () => {
      stopRoll();
      stopReveals();
    };
  }, [pathname]);
  return null;
}
