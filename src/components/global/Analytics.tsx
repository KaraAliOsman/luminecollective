"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { CONSENT_EVENT_NAME, getAnalyticsConsent, hasAnalyticsConsent, setAnalyticsConsent } from "@/lib/analytics/consent";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
export const analyticsEnabled = Boolean(GA_ID || PLAUSIBLE_DOMAIN);

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    function update() { setVisible(analyticsEnabled && getAnalyticsConsent() === null); }
    update();
    window.addEventListener(CONSENT_EVENT_NAME, update);
    window.addEventListener("storage", update);
    return () => {
      window.removeEventListener(CONSENT_EVENT_NAME, update);
      window.removeEventListener("storage", update);
    };
  }, []);
  if (!visible) return null;
  return <aside className="cookie-banner" aria-label="Cookievoorkeuren">
    <p>Met jouw toestemming gebruiken we statistieken om onze website te verbeteren. Je kunt ook zonder analytische cookies verder. <a href="/cookies">Meer over cookies</a></p>
    <div className="actions">
      <button className="button button--secondary button--sm" type="button" onClick={() => setAnalyticsConsent("denied")}>Alleen functioneel</button>
      <button className="button button--secondary button--sm" type="button" onClick={() => setAnalyticsConsent("granted")}>Statistieken toestaan</button>
    </div>
  </aside>;
}

export function AnalyticsScripts() {
  const [consented, setConsented] = useState(false);
  const wasLoaded = useRef(false);
  useEffect(() => {
    function update() {
      const allowed = analyticsEnabled && hasAnalyticsConsent();
      // Reload on withdrawal so previously loaded trackers cannot keep running.
      if (wasLoaded.current && !allowed) { window.location.reload(); return; }
      wasLoaded.current = allowed;
      setConsented(allowed);
    }
    update();
    window.addEventListener(CONSENT_EVENT_NAME, update);
    window.addEventListener("storage", update);
    return () => {
      window.removeEventListener(CONSENT_EVENT_NAME, update);
      window.removeEventListener("storage", update);
    };
  }, []);
  if (!consented) return null;
  return <>
    {GA_ID && <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`} strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config',${JSON.stringify(GA_ID)},{anonymize_ip:true});`}</Script>
    </>}
    {PLAUSIBLE_DOMAIN && <Script data-domain={PLAUSIBLE_DOMAIN} defer src="https://plausible.io/js/script.js" strategy="afterInteractive" />}
  </>;
}
