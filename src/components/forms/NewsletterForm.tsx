"use client";

import { useState, type FormEvent } from "react";

import {
  errorStyle,
  inputStyle,
  statusStyle,
  submitStyle,
} from "@/components/forms/formStyles";
import {
  formMessages,
  type FormErrors,
  newsletterFormSchema,
} from "@/lib/validation/forms";

type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors: FormErrors;
};

const contactEmail = "info@stichtingluminacollective.nl";
const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === "true";

export function NewsletterForm() {
  const [state, setState] = useState<FormState>({ status: "idle", errors: {} });
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setState({ status: "idle", errors: {} });

    const formData = new FormData(event.currentTarget);
    const payload = {
      email: String(formData.get("email") ?? ""),
      consent: formData.get("consent") === "on",
      website: String(formData.get("website") ?? ""),
    };

    const clientParsed = newsletterFormSchema.safeParse(payload);
    if (!clientParsed.success) {
      setState({
        status: "error",
        message: formMessages.error,
        errors: clientParsed.error.flatten().fieldErrors,
      });
      setPending(false);
      return;
    }

    if (isStaticExport) {
      const data = clientParsed.data;
      const subject = encodeURIComponent("Aanmelding nieuwsbrief");
      const body = encodeURIComponent(`E-mail: ${data.email}`);
      window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
      setState({
        status: "success",
        message: "Je e-mailprogramma wordt geopend om de aanmelding te versturen.",
        errors: {},
      });
      setPending(false);
      return;
    }

    const response = await fetch("/api/newsletter", {
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
      message: body?.message ?? formMessages.newsletterSuccess,
      errors: {},
    });
    setPending(false);
  }

  return (
    <form className="grid gap-4" noValidate onSubmit={onSubmit}>
      <div>
        <label className="sr-only" htmlFor="newsletter-email">
          E-mail
        </label>
        <input
          className={inputStyle}
          id="newsletter-email"
          name="email"
          placeholder="E-mailadres"
          type="email"
        />
        {state.errors.email && (
          <p className={errorStyle}>{state.errors.email[0]}</p>
        )}
      </div>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="newsletter-website">Website</label>
        <input id="newsletter-website" name="website" tabIndex={-1} type="text" />
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
        {pending ? "Inschrijven..." : "Inschrijven"}
      </button>
    </form>
  );
}
