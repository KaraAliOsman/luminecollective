"use client";

import { useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { brand } from "@/lib/constants/brand";

export function CopyIban() {
  const [status, setStatus] = useState("");
  const valueRef = useRef<HTMLElement>(null);
  async function copy() {
    try {
      await navigator.clipboard.writeText(brand.ibanCompact);
      setStatus("Rekeningnummer gekopieerd.");
    } catch {
      if (valueRef.current) {
        const range = document.createRange();
        range.selectNodeContents(valueRef.current);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
      setStatus("Automatisch kopiëren lukt niet. Het rekeningnummer is geselecteerd.");
    }
  }
  return <div className="donation-box"><h3>Onze bankrekening</h3><div className="iban-row"><code ref={valueRef}>{brand.iban}</code><button className="icon-button" type="button" onClick={copy} aria-label="IBAN kopiëren" title="IBAN kopiëren">{status === "Rekeningnummer gekopieerd." ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}</button></div><p>Ten name van {brand.name}.<br />Vermeld bij een bijdrage als omschrijving: Donatie Lumina.</p><p role="status" aria-live="polite" className={status ? "" : "sr-only"}>{status}</p></div>;
}
