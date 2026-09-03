"use client";

import { useEffect, useState, type FormEvent } from "react";
import type { ZodType } from "zod";
import { brand } from "@/lib/constants/brand";
import { formMessages, type FormErrors } from "@/lib/validation/forms";

type State = { status: "idle" | "success" | "error" | "prepared"; message?: string; errors: FormErrors; emailHref?: string };
type Payload = Record<string, string | boolean>;

export function useFormSubmission({ endpoint, schema, emailSubject, successMessage }: {
  endpoint: string; schema: ZodType; emailSubject: string; successMessage: string;
}) {
  const [state, setState] = useState<State>({ status: "idle", errors: {} });
  const [pending, setPending] = useState(false);
  const [deliveryAvailable, setDeliveryAvailable] = useState<boolean | undefined>();

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/forms/status", { signal: controller.signal })
      .then(response => response.ok ? response.json() : null)
      .then(data => { if (typeof data?.available === "boolean") setDeliveryAvailable(data.available); })
      .catch(() => undefined);
    return () => controller.abort();
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload: Payload = Object.fromEntries(Array.from(data.entries()).map(([key, value]) => [key, String(value)]));
    payload.consent = data.get("consent") === "on";
    const parsed = schema.safeParse(payload);
    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors as FormErrors;
      setState({ status: "error", errors, message: "Controleer de gemarkeerde velden." });
      const field = form.elements.namedItem(Object.keys(errors)[0]);
      if (field instanceof HTMLElement) field.focus();
      return;
    }

    const labels: Record<string, string> = { name: "Naam", email: "E-mail", phone: "Telefoon", interest: "Interesse", subject: "Onderwerp", message: "Bericht" };
    const body = Object.entries(payload).filter(([key, value]) => labels[key] && value).map(([key, value]) => `${labels[key]}: ${value}`).join("\n\n");
    const emailHref = `mailto:${brand.email}?subject=${encodeURIComponent(String(payload.subject || emailSubject))}&body=${encodeURIComponent(body)}`;
    if (deliveryAvailable === false) {
      window.location.href = emailHref;
      setState({ status: "prepared", errors: {}, emailHref, message: "Je bericht is nog niet verstuurd. Verstuur het vanuit je e-mailprogramma." });
      return;
    }

    setPending(true);
    setState({ status: "idle", errors: {} });
    try {
      const response = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(parsed.data), signal: AbortSignal.timeout(15000) });
      const result = await response.json().catch(() => null);
      if (!response.ok || result?.success !== true) {
        if (response.status === 503) setDeliveryAvailable(false);
        setState({ status: "error", errors: result?.errors || {}, emailHref, message: result?.message || formMessages.error });
        return;
      }
      form.reset();
      setState({ status: "success", errors: {}, message: result?.message || successMessage });
    } catch {
      setState({ status: "error", errors: {}, emailHref, message: "Versturen is niet gelukt. Je bericht staat nog in het formulier. Probeer het opnieuw of stuur het via e-mail." });
    } finally {
      setPending(false);
    }
  }
  return { state, pending, deliveryAvailable, onSubmit };
}
