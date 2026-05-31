import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="editorial-kicker">{children}</p>;
}
