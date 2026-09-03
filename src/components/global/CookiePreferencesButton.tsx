"use client";

import { SlidersHorizontal } from "lucide-react";
import { analyticsEnabled } from "./Analytics";
import { resetAnalyticsConsent } from "@/lib/analytics/consent";

export function CookiePreferencesButton() {
  if (!analyticsEnabled) return <p className="notice">Op deze website zijn geen analytische meetinstrumenten actief. Je hoeft hiervoor geen toestemming te geven.</p>;
  return <button className="button button--secondary" onClick={resetAnalyticsConsent} type="button"><SlidersHorizontal size={17} aria-hidden="true" />Cookievoorkeuren aanpassen</button>;
}
