import Link from "next/link";
import { brand } from "@/lib/constants/brand";

export function ConsentField({ id, error }: { id: string; error?: string[] }) {
  return <div><label className="form-consent" htmlFor={id}><input id={id} name="consent" type="checkbox" required aria-invalid={!!error} aria-describedby={error ? `${id}-error` : undefined} /><span>Ik geef toestemming om mijn gegevens te gebruiken voor deze aanvraag. Lees het <Link href="/privacy">privacybeleid</Link>.</span></label>{error && <p id={`${id}-error`} className="form-error">{error[0]}</p>}</div>;
}
export function FormFeedback({ status, message, emailHref }: { status: string; message?: string; emailHref?: string }) {
  if (!message) return null;
  return <div className={`form-status${status === "error" ? " form-status--error" : ""}`} role={status === "error" ? "alert" : "status"} aria-live="polite"><p>{message}</p>{emailHref && <a href={emailHref}>Open bericht aan {brand.email}</a>}</div>;
}
export function Honeypot({ id }: { id: string }) {
  return <div className="form-honeypot" aria-hidden="true"><label htmlFor={id}>Website</label><input id={id} name="website" type="text" tabIndex={-1} autoComplete="off" /></div>;
}
