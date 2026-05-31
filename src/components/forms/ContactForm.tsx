"use client";

import { useState, type FormEvent } from "react";

import {
  errorStyle,
  fieldWrap,
  inputStyle,
  labelStyle,
  statusStyle,
  submitStyle,
  textareaStyle,
} from "@/components/forms/formStyles";
import {
  contactFormSchema,
  formMessages,
  type FormErrors,
} from "@/lib/validation/forms";

type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors: FormErrors;
};

export function ContactForm() {
  const [state, setState] = useState<FormState>({ status: "idle", errors: {} });
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setState({ status: "idle", errors: {} });

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
      consent: formData.get("consent") === "on",
      website: String(formData.get("website") ?? ""),
    };

    const clientParsed = contactFormSchema.safeParse(payload);
    if (!clientParsed.success) {
      setState({
        status: "error",
        message: formMessages.error,
        errors: clientParsed.error.flatten().fieldErrors,
      });
      setPending(false);
      return;
    }

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(clientParsed.data),
    }).catch(() => null);

    if (!response?.ok) {
      const body = await response?.json().catch(() => null);
      setState({
        status: "error",
        message: body?.message ?? formMessages.error,
        errors: body?.errors ?? {},
      });
      setPending(false);
      return;
    }

    event.currentTarget.reset();
    const body = await response.json().catch(() => null);
    setState({
      status: "success",
      message: body?.message ?? formMessages.contactSuccess,
      errors: {},
    });
    setPending(false);
  }

  return (
    <form className="grid gap-5" noValidate onSubmit={onSubmit}>
      <div className={fieldWrap}>
        <label className={labelStyle} htmlFor="contact-name">
          Naam
        </label>
        <input
          aria-describedby={state.errors.name ? "contact-name-error" : undefined}
          className={inputStyle}
          id="contact-name"
          name="name"
          type="text"
        />
        {state.errors.name && (
          <p className={errorStyle} id="contact-name-error">
            {state.errors.name[0]}
          </p>
        )}
      </div>
      <div className={fieldWrap}>
        <label className={labelStyle} htmlFor="contact-email">
          E-mail
        </label>
        <input
          aria-describedby={state.errors.email ? "contact-email-error" : undefined}
          className={inputStyle}
          id="contact-email"
          name="email"
          type="email"
        />
        {state.errors.email && (
          <p className={errorStyle} id="contact-email-error">
            {state.errors.email[0]}
          </p>
        )}
      </div>
      <div className={fieldWrap}>
        <label className={labelStyle} htmlFor="contact-subject">
          Onderwerp
        </label>
        <input
          aria-describedby={
            state.errors.subject ? "contact-subject-error" : undefined
          }
          className={inputStyle}
          id="contact-subject"
          name="subject"
          type="text"
        />
        {state.errors.subject && (
          <p className={errorStyle} id="contact-subject-error">
            {state.errors.subject[0]}
          </p>
        )}
      </div>
      <div className={fieldWrap}>
        <label className={labelStyle} htmlFor="contact-message">
          Bericht
        </label>
        <textarea
          aria-describedby={
            state.errors.message ? "contact-message-error" : undefined
          }
          className={textareaStyle}
          id="contact-message"
          name="message"
        />
        {state.errors.message && (
          <p className={errorStyle} id="contact-message-error">
            {state.errors.message[0]}
          </p>
        )}
      </div>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" name="website" tabIndex={-1} type="text" />
      </div>
      <div>
        <label className="flex items-start gap-3 text-sm leading-6 text-ink-brown/75">
          <input className="mt-1" name="consent" type="checkbox" />
          {formMessages.consent}
        </label>
        {state.errors.consent && (
          <p className={errorStyle}>{state.errors.consent[0]}</p>
        )}
      </div>
      {state.message && (
        <p aria-live="polite" className={statusStyle}>
          {state.message}
        </p>
      )}
      <button className={submitStyle} disabled={pending} type="submit">
        {pending ? "Versturen..." : "Bericht versturen"}
      </button>
    </form>
  );
}
