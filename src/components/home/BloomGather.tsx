"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { brand } from "@/lib/constants/brand";

const petals = [
  { src: "/images/lumina-cupcake-actie.webp", sx: -22, sy: -38, sr: -70 },
  { src: "/images/samen-in-de-buurt.webp", sx: 26, sy: -46, sr: 55 },
  { src: "/images/lumina-amsterdam-gracht.webp", sx: 52, sy: -6, sr: 90 },
  { src: "/images/samen-leren.webp", sx: 34, sy: 44, sr: -48 },
  { src: "/images/lumina-burendag.webp", sx: -18, sy: 50, sr: 64 },
  { src: "/images/vrijwilligers.webp", sx: -54, sy: 16, sr: -80 },
  { src: "/images/lumina-amsterdam-ontdekken.webp", sx: -40, sy: -14, sr: 40 },
];

/** Small acts drift in from the edges and gather into one bloom as the poster rolls up. */
export function BloomGather() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bloom = ref.current;
    if (!bloom || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const { top } = bloom.getBoundingClientRect();
      const height = window.innerHeight;
      const progress = Math.min(1, Math.max(0, (height * .95 - top) / (height * .72)));
      const eased = 1 - (1 - progress) ** 3;
      bloom.style.setProperty("--p", eased.toFixed(3));
    };
    const onScroll = () => { frame ||= requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return <div className="bloom" ref={ref} aria-hidden="true">
    {petals.map((petal, index) => <figure
      className="bloom__petal"
      key={petal.src}
      style={{
        "--a": `${(360 / petals.length) * index}deg`,
        "--sx": `${petal.sx}vmin`,
        "--sy": `${petal.sy}vmin`,
        "--sr": `${petal.sr}deg`,
      } as React.CSSProperties}
    >
      <Image alt="" height={320} loading="lazy" src={petal.src} width={320} />
    </figure>)}
    <span className="bloom__heart"><Image alt="" height={96} loading="lazy" src={brand.logoMark} width={96} /></span>
  </div>;
}
