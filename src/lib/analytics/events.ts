/**
 * Analytics event helper — centralised tracking for all user interactions.
 *
 * Usage:
 *   import { trackEvent } from "@/lib/analytics/events";
 *   trackEvent("cta_hero_click", { label: "Doe mee" });
 *
 * Events are only fired when:
 * 1. The user has granted analytics consent (checked via cookie).
 * 2. The relevant analytics provider is loaded (GA4 or Plausible).
 *
 * No data is sent without explicit consent.
 */

type EventName =
  | "cta_hero_click"
  | "cta_doe_mee_click"
  | "form_contact_submit"
  | "form_volunteer_submit"
  | "form_newsletter_submit"
  | "donate_click"
  | "social_click"
  | "email_click"
  | "program_click"
  | "event_click"
  | "article_click"
  | "scroll_75_home";

type EventPayload = Record<string, string | number | boolean | undefined>;

function hasConsent(): boolean {
  if (typeof document === "undefined") return false;
  return document.cookie.includes("lumina_analytics_consent=true");
}

function isGA4Available(): boolean {
  return typeof window !== "undefined" && typeof window.gtag === "function";
}

function isPlausibleAvailable(): boolean {
  return typeof window !== "undefined" && typeof window.plausible === "function";
}

export function trackEvent(name: EventName, payload: EventPayload = {}): void {
  if (!hasConsent()) return;

  // GA4
  if (isGA4Available()) {
    window.gtag("event", name, payload);
  }

  // Plausible
  if (isPlausibleAvailable()) {
    window.plausible(name, { props: payload });
  }
}

// ─── Typed declarations so TypeScript doesn't complain ──────────────────────

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    plausible: (event: string, options?: { props?: Record<string, unknown> }) => void;
    dataLayer: unknown[];
  }
}
