"use client";

import { useEffect, useState } from "react";

/** One unbroken row of steps: which poster of the series is on show right now. */
export function SeriesRail() {
  const [count, setCount] = useState(0);
  const [now, setNow] = useState(0);

  useEffect(() => {
    const posters = [...document.querySelectorAll<HTMLElement>(".poster-series > .poster")];
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * .45;
      let current = 0;
      posters.forEach((poster, index) => {
        if (poster.getBoundingClientRect().top <= line) current = index;
      });
      setNow(current);
    };
    const onScroll = () => { frame ||= requestAnimationFrame(update); };
    const start = requestAnimationFrame(() => {
      setCount(posters.length);
      update();
    });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(start);
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (count < 2) return null;
  return <div className="series-rail" aria-hidden="true">
    {Array.from({ length: count }, (_, index) => <span key={index} data-on={index < now} data-now={index === now} />)}
  </div>;
}
