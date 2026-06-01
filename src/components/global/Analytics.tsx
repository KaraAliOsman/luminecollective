"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

import {
  CONSENT_EVENT_NAME,
  getAnalyticsConsent,
  hasAnalyticsConsent,
  setAnalyticsConsent,
} from "@/lib/analytics/consent";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getAnalyticsConsent() === null);

    function handleConsentChange() {
      setVisible(getAnalyticsConsent() === null);
    }

    window.addEventListener(CONSENT_EVENT_NAME, handleConsentChange);
    window.addEventListener("storage", handleConsentChange);

    return () => {
      window.removeEventListener(CONSENT_EVENT_NAME, handleConsentChange);
      window.removeEventListener("storage", handleConsentChange);
    };
  }, []);

  function accept() {
    setAnalyticsConsent("granted");
    setVisible(false);
  }

  function decline() {
    setAnalyticsConsent("denied");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      aria-atomic="true"
      aria-describedby="cookie-banner-desc"
      aria-label="Cookiemelding"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-deep-aubergine/12 bg-warm-white/96 px-4 py-5 backdrop-blur-sm md:px-8"
      role="dialog"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-6 text-ink-brown/78" id="cookie-banner-desc">
          We gebruiken functionele cookies voor de werking van deze website.
          Analytische cookies worden alleen geplaatst met jouw toestemming.{" "}
          <a
            className="font-semibold text-deep-aubergine underline underline-offset-4 transition hover:text-wine-plum"
            href="/cookies"
          >
            Meer over cookies
          </a>
        </p>
        <div className="grid shrink-0 gap-3 sm:flex sm:flex-wrap">
          <button
            className="min-h-10 border border-deep-aubergine/25 bg-warm-white px-4 py-2 text-sm font-semibold text-deep-aubergine transition hover:bg-soft-linen focus-visible:outline focus-visible:outline-2 focus-visible:outline-deep-aubergine"
            data-cookie-choice="denied"
            onClick={decline}
            type="button"
          >
            Alleen functioneel
          </button>
          <button
            className="min-h-10 border border-deep-aubergine bg-deep-aubergine px-4 py-2 text-sm font-semibold text-warm-white transition hover:border-wine-plum hover:bg-wine-plum focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-aubergine"
            data-cookie-choice="granted"
            onClick={accept}
            type="button"
          >
            Accepteer alles
          </button>
        </div>
      </div>
    </div>
  );
}

export function AnalyticsScripts() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    function checkConsent() {
      setConsented(hasAnalyticsConsent());
    }

    checkConsent();
    window.addEventListener(CONSENT_EVENT_NAME, checkConsent);
    window.addEventListener("storage", checkConsent);

    return () => {
      window.removeEventListener(CONSENT_EVENT_NAME, checkConsent);
      window.removeEventListener("storage", checkConsent);
    };
  }, []);

  if (!consented) return null;

  return (
    <>
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}
      {PLAUSIBLE_DOMAIN && (
        <Script
          data-domain={PLAUSIBLE_DOMAIN}
          defer
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      )}
    </>
  );
}
