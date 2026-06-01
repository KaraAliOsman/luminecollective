"use client";

import { resetAnalyticsConsent } from "@/lib/analytics/consent";

export function CookiePreferencesButton() {
  return (
    <button
      className="mt-4 inline-flex min-h-11 items-center border border-deep-aubergine bg-deep-aubergine px-5 py-3 text-sm font-semibold text-warm-white transition hover:border-wine-plum hover:bg-wine-plum focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-aubergine"
      onClick={resetAnalyticsConsent}
      type="button"
    >
      Cookievoorkeuren aanpassen
    </button>
  );
}
