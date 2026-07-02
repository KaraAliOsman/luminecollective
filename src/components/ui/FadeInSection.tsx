"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type FadeInSectionProps = {
  children: ReactNode;
  className?: string;
  animation?: "fade-in-up" | "slide-left" | "slide-right" | "scale-in";
  delay?: number;
  threshold?: number;
};

export function FadeInSection({
  children,
  className,
  animation = "fade-in-up",
  delay = 0,
  threshold = 0.15,
}: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const animationClass = {
    "fade-in-up": "animate-fade-in-up",
    "slide-left": "animate-slide-left",
    "slide-right": "animate-slide-right",
    "scale-in": "animate-scale-in",
  }[animation];

  const delayClass = delay > 0 ? `delay-${delay}` : "";

  return (
    <div ref={ref} className={cn(animationClass, delayClass, className)}>
      {children}
    </div>
  );
}
