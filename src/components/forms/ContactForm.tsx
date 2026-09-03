"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { contactFormSchema, formMessages } from "@/lib/validation/forms";
import { ConsentField, FormFeedback, Honeypot } from "./FormFeedback";
import { useFormSubmission } from "./useFormSubmission";

export function ContactForm() {
  const subjectRef = useRef<HTMLInputElement>(null);
  const { state, pending, deliveryAvailable, onSubmit } = useFormSubmission({ endpoint: "/api/contact", schema: contactFormSchema, emailSubject: "Contact met Lumina", successMessage: formMessages.contactSuccess });
  useEffect(() => {
    const subject = new URLSearchParams(window.location.search).get("onderwerp");
    if (subject && subjectRef.current) subjectRef.current.value = subject.slice(0, 200);
  }, []);
  return <form className="form-grid" noValidate onSubmit={onSubmit} aria-label="Contactformulier">
    <div className="form-row">{[{ key: "name", label: "Naam", type: "text", autoComplete: "name" }, { key: "email", label: "E-mailadres", type: "email", autoComplete: "email" }].map(field => <div className="form-field" key={field.key}><label htmlFor={`contact-${field.key}`} className="form-label">{field.label}</label><input className="form-input" id={`contact-${field.key}`} name={field.key} type={field.type} autoComplete={field.autoComplete} required maxLength={field.key === "name" ? 100 : 254} aria-invalid={!!state.errors[field.key]} aria-describedby={state.errors[field.key] ? `contact-${field.key}-error` : undefined} />{state.errors[field.key] && <p className="form-error" id={`contact-${field.key}-error`}>{state.errors[field.key]?.[0]}</p>}</div>)}</div>
    <div className="form-field"><label className="form-label" htmlFor="contact-subject">Onderwerp</label><input ref={subjectRef} className="form-input" id="contact-subject" name="subject" type="text" required maxLength={200} aria-invalid={!!state.errors.subject} aria-describedby={state.errors.subject ? "contact-subject-error" : undefined} />{state.errors.subject && <p className="form-error" id="contact-subject-error">{state.errors.subject[0]}</p>}</div>
    <div className="form-field"><label className="form-label" htmlFor="contact-message">Waar kunnen we je mee helpen?</label><textarea className="form-input" id="contact-message" name="message" required maxLength={5000} aria-invalid={!!state.errors.message} aria-describedby={state.errors.message ? "contact-message-error" : undefined} />{state.errors.message && <p className="form-error" id="contact-message-error">{state.errors.message[0]}</p>}</div>
    <Honeypot id="contact-website" /><ConsentField id="contact-consent" error={state.errors.consent} /><FormFeedback {...state} />
    <div><button className="button button--primary" disabled={pending} type="submit">{pending ? "Bezig met versturen..." : deliveryAvailable === false ? "Verder via e-mail" : "Verstuur je bericht"}{deliveryAvailable === false ? <Mail size={17} aria-hidden="true" /> : <ArrowRight size={17} aria-hidden="true" />}</button></div>
  </form>;
}
