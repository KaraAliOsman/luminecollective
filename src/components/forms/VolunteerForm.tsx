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
  formMessages,
  type FormErrors,
  volunteerFormSchema,
} from "@/lib/validation/forms";

const interests = [
  "Events",
  "Communicatie",
  "Begeleiding",
  "Fotografie",
  "Organisatie",
  "Anders",
] as const;

type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors: FormErrors;
};

const contactEmail = "info@stichtingluminacollective.nl";
const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === "true";

export function VolunteerForm() {
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
      phone: String(formData.get("phone") ?? ""),
      interest: String(formData.get("interest") ?? ""),
      message: String(formData.get("message") ?? ""),
      consent: formData.get("consent") === "on",
      website: String(formData.get("website") ?? ""),
    };

    const clientParsed = volunteerFormSchema.safeParse(payload);
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
      const subject = encodeURIComponent(`Doe mee: ${data.interest}`);
      const body = encodeURIComponent(
        [
          `Naam: ${data.name}`,
          `E-mail: ${data.email}`,
          data.phone ? `Telefoon: ${data.phone}` : "",
          `Interesse: ${data.interest}`,
          "",
          data.message,
        ]
          .filter(Boolean)
          .join("\n"),
      );
      window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
      setState({
        status: "success",
        message: "Je e-mailprogramma wordt geopend om je interesse te versturen.",
        errors: {},
      });
      setPending(false);
      return;
    }

    const response = await fetch("/api/volunteer", {
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
      message: body?.message ?? formMessages.volunteerSuccess,
      errors: {},
    });
    setPending(false);
  }

  return (
    <form className="grid gap-5" noValidate onSubmit={onSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        <div className={fieldWrap}>
          <label className={labelStyle} htmlFor="volunteer-name">
            Naam
          </label>
          <input className={inputStyle} id="volunteer-name" name="name" type="text" />
          {state.errors.name && (
            <p className={errorStyle}>{state.errors.name[0]}</p>
          )}
        </div>
        <div className={fieldWrap}>
          <label className={labelStyle} htmlFor="volunteer-email">
            E-mail
          </label>
          <input
            className={inputStyle}
            id="volunteer-email"
            name="email"
            type="email"
          />
          {state.errors.email && (
            <p className={errorStyle}>{state.errors.email[0]}</p>
          )}
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div className={fieldWrap}>
          <label className={labelStyle} htmlFor="volunteer-phone">
            Telefoon optioneel
          </label>
          <input
            className={inputStyle}
            id="volunteer-phone"
            name="phone"
            type="tel"
          />
          {state.errors.phone && (
            <p className={errorStyle}>{state.errors.phone[0]}</p>
          )}
        </div>
        <div className={fieldWrap}>
          <label className={labelStyle} htmlFor="volunteer-interest">
            Ik wil helpen met
          </label>
          <select className={inputStyle} id="volunteer-interest" name="interest">
            <option value="">Kies een optie</option>
            {interests.map((interest) => (
              <option key={interest} value={interest}>
                {interest}
              </option>
            ))}
          </select>
          {state.errors.interest && (
            <p className={errorStyle}>{state.errors.interest[0]}</p>
          )}
        </div>
      </div>
      <div className={fieldWrap}>
        <label className={labelStyle} htmlFor="volunteer-message">
          Bericht
        </label>
        <textarea
          className={textareaStyle}
          id="volunteer-message"
          name="message"
        />
        {state.errors.message && (
          <p className={errorStyle}>{state.errors.message[0]}</p>
        )}
      </div>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="volunteer-website">Website</label>
        <input id="volunteer-website" name="website" tabIndex={-1} type="text" />
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
        {pending ? "Versturen..." : "Interesse versturen"}
      </button>
    </form>
  );
}
