"use client";

import { ArrowRight, Mail } from "lucide-react";
import { formMessages, volunteerFormSchema } from "@/lib/validation/forms";
import { ConsentField, FormFeedback, Honeypot } from "./FormFeedback";
import { useFormSubmission } from "./useFormSubmission";

const interests = ["Events", "Communicatie", "Begeleiding", "Fotografie", "Organisatie", "Anders"];

export function VolunteerForm() {
  const { state, pending, deliveryAvailable, onSubmit } = useFormSubmission({ endpoint: "/api/volunteer", schema: volunteerFormSchema, emailSubject: "Vrijwilliger worden bij Lumina", successMessage: formMessages.volunteerSuccess });
  return <form className="form-grid" noValidate onSubmit={onSubmit} aria-label="Vrijwilligersformulier">
    <div className="form-row">{[{ key: "name", label: "Naam", type: "text", autoComplete: "name" }, { key: "email", label: "E-mailadres", type: "email", autoComplete: "email" }].map(field => <div className="form-field" key={field.key}><label htmlFor={`volunteer-${field.key}`} className="form-label">{field.label}</label><input className="form-input" id={`volunteer-${field.key}`} name={field.key} type={field.type} autoComplete={field.autoComplete} maxLength={field.key === "name" ? 100 : 254} required aria-invalid={!!state.errors[field.key]} aria-describedby={state.errors[field.key] ? `volunteer-${field.key}-error` : undefined} />{state.errors[field.key] && <p className="form-error" id={`volunteer-${field.key}-error`}>{state.errors[field.key]?.[0]}</p>}</div>)}</div>
    <div className="form-row"><div className="form-field"><label className="form-label" htmlFor="volunteer-phone">Telefoonnummer (optioneel)</label><input className="form-input" id="volunteer-phone" name="phone" type="tel" autoComplete="tel" maxLength={40} aria-invalid={!!state.errors.phone} aria-describedby={state.errors.phone ? "volunteer-phone-error" : undefined} />{state.errors.phone && <p className="form-error" id="volunteer-phone-error">{state.errors.phone[0]}</p>}</div><div className="form-field"><label className="form-label" htmlFor="volunteer-interest">Waar wil je aan bijdragen?</label><select className="form-input" id="volunteer-interest" name="interest" required aria-invalid={!!state.errors.interest} aria-describedby={state.errors.interest ? "volunteer-interest-error" : undefined}><option value="">Kies een onderwerp</option>{interests.map(value => <option value={value} key={value}>{value}</option>)}</select>{state.errors.interest && <p className="form-error" id="volunteer-interest-error">{state.errors.interest[0]}</p>}</div></div>
    <div className="form-field"><label className="form-label" htmlFor="volunteer-message">Vertel iets over jezelf en je beschikbaarheid</label><textarea className="form-input" id="volunteer-message" name="message" maxLength={5000} required aria-invalid={!!state.errors.message} aria-describedby={state.errors.message ? "volunteer-message-error" : undefined} />{state.errors.message && <p className="form-error" id="volunteer-message-error">{state.errors.message[0]}</p>}</div>
    <Honeypot id="volunteer-website" /><ConsentField id="volunteer-consent" error={state.errors.consent} /><FormFeedback {...state} />
    <div><button className="button button--primary" disabled={pending} type="submit">{pending ? "Bezig met versturen..." : deliveryAvailable === false ? "Verder via e-mail" : "Laat je interesse weten"}{deliveryAvailable === false ? <Mail size={17} aria-hidden="true" /> : <ArrowRight size={17} aria-hidden="true" />}</button></div>
  </form>;
}
