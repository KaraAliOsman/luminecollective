"use client";

import { ArrowRight } from "lucide-react";
import { formMessages, newsletterFormSchema } from "@/lib/validation/forms";
import { ConsentField, FormFeedback, Honeypot } from "./FormFeedback";
import { useFormSubmission } from "./useFormSubmission";

export function NewsletterForm() {
  const { state, pending, deliveryAvailable, onSubmit } = useFormSubmission({ endpoint: "/api/newsletter", schema: newsletterFormSchema, emailSubject: "Op de hoogte blijven van Lumina", successMessage: formMessages.newsletterSuccess });
  return <form className="form-grid" noValidate onSubmit={onSubmit} aria-label="Nieuwsbrief aanvragen">
    <div className="form-field"><label className="form-label" htmlFor="newsletter-email">E-mailadres</label><input className="form-input" id="newsletter-email" name="email" autoComplete="email" type="email" required maxLength={254} aria-invalid={!!state.errors.email} aria-describedby={state.errors.email ? "newsletter-email-error" : undefined} />{state.errors.email && <p className="form-error" id="newsletter-email-error">{state.errors.email[0]}</p>}</div>
    <Honeypot id="newsletter-website" /><ConsentField id="newsletter-consent" error={state.errors.consent} /><FormFeedback {...state} />
    <div><button className="button button--primary" disabled={pending} type="submit">{pending ? "Bezig met versturen..." : deliveryAvailable === false ? "Aanvragen via e-mail" : "Houd me op de hoogte"}<ArrowRight size={17} aria-hidden="true" /></button></div>
  </form>;
}
