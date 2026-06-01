import { hasAnalyticsConsent } from "@/lib/analytics/consent";

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

function isGA4Available(): boolean {
  return typeof window !== "undefined" && typeof window.gtag === "function";
}

function isPlausibleAvailable(): boolean {
  return typeof window !== "undefined" && typeof window.plausible === "function";
}

export function trackEvent(name: EventName, payload: EventPayload = {}): void {
  if (!hasAnalyticsConsent()) return;

  if (isGA4Available()) {
    window.gtag("event", name, payload);
  }

  if (isPlausibleAvailable()) {
    window.plausible(name, { props: payload });
  }
}

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    plausible: (event: string, options?: { props?: Record<string, unknown> }) => void;
    dataLayer: unknown[];
  }
}
