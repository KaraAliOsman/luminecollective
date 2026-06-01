"use client";

export type AnalyticsConsent = "granted" | "denied";

export const CONSENT_COOKIE_NAME = "lumina_analytics_consent";
export const CONSENT_STORAGE_KEY = "lumina.analyticsConsent";
export const CONSENT_EVENT_NAME = "lumina:analytics-consent-change";

const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365;

function isConsentValue(value: string | null | undefined): value is AnalyticsConsent {
  return value === "granted" || value === "denied";
}

function readCookie(): AnalyticsConsent | null {
  if (typeof document === "undefined") return null;

  const rawValue = document.cookie
    .split("; ")
    .find((item) => item.startsWith(`${CONSENT_COOKIE_NAME}=`))
    ?.split("=")[1];

  if (!rawValue) return null;

  const value = decodeURIComponent(rawValue);
  if (isConsentValue(value)) return value;
  if (value === "true") return "granted";
  if (value === "false") return "denied";

  return null;
}

function readStorage(): AnalyticsConsent | null {
  if (typeof window === "undefined") return null;

  try {
    const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return isConsentValue(value) ? value : null;
  } catch {
    return null;
  }
}

export function getAnalyticsConsent(): AnalyticsConsent | null {
  return readStorage() ?? readCookie();
}

export function hasAnalyticsConsent(): boolean {
  return getAnalyticsConsent() === "granted";
}

export function setAnalyticsConsent(value: AnalyticsConsent): void {
  if (typeof document === "undefined") return;

  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  const expires = new Date(Date.now() + ONE_YEAR_SECONDS * 1000).toUTCString();
  document.cookie = `${CONSENT_COOKIE_NAME}=${encodeURIComponent(
    value,
  )}; Max-Age=${ONE_YEAR_SECONDS}; Expires=${expires}; Path=/; SameSite=Lax${secure}`;

  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
  } catch {
    // The cookie remains available when localStorage is blocked.
  }

  window.dispatchEvent(
    new CustomEvent<AnalyticsConsent>(CONSENT_EVENT_NAME, { detail: value }),
  );
}

export function resetAnalyticsConsent(): void {
  if (typeof document === "undefined") return;

  document.cookie = `${CONSENT_COOKIE_NAME}=; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=/; SameSite=Lax`;
  document.cookie = `${CONSENT_COOKIE_NAME}=; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=/; SameSite=Lax; Secure`;

  try {
    window.localStorage.removeItem(CONSENT_STORAGE_KEY);
  } catch {
    // Ignore storage errors.
  }

  window.dispatchEvent(new CustomEvent(CONSENT_EVENT_NAME, { detail: null }));
}
