"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
const COOKIE_NAME = "lumina_analytics_consent";

function getConsent(): boolean | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]*)`));
  if (!match) return null;
  return match[1] === "true";
}

function setConsent(value: boolean) {
  const maxAge = 60 * 60 * 24 * 365; // 1 year
  document.cookie = `${COOKIE_NAME}=${value}; max-age=${maxAge}; path=/; SameSite=Lax`;
}

// ─── Cookie Banner ─────────────────────────────────────────────────────────

export function CookieBanner() {
  const [visible, setVisible] = useState(() => getConsent() === null);

  function accept() {
    setConsent(true);
    setVisible(false);
  }

  function decline() {
    setConsent(false);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-deep-aubergine/12 bg-warm-white/96 px-4 py-5 backdrop-blur-sm md:px-8"
      role="dialog"
      aria-label="Cookiemelding"
      aria-describedby="cookie-banner-desc"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-6 text-ink-brown/78" id="cookie-banner-desc">
          We gebruiken functionele cookies voor de werking van deze website.
          Analytische cookies worden alleen geplaatst met jouw toestemming.{" "}
          <a
            href="/cookies"
            className="font-semibold text-deep-aubergine underline underline-offset-4 transition hover:text-wine-plum"
          >
            Meer over cookies
          </a>
        </p>
        <div className="grid shrink-0 gap-3 sm:flex sm:flex-wrap">
          <button
            className="min-h-10 border border-deep-aubergine/25 bg-warm-white px-4 py-2 text-sm font-semibold text-deep-aubergine transition hover:bg-soft-linen focus-visible:outline focus-visible:outline-2 focus-visible:outline-deep-aubergine"
            onClick={decline}
            type="button"
          >
            Alleen functioneel
          </button>
          <button
            className="min-h-10 border border-deep-aubergine bg-deep-aubergine px-4 py-2 text-sm font-semibold text-warm-white transition hover:border-wine-plum hover:bg-wine-plum focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-aubergine"
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

// ─── Analytics scripts (only loaded with consent) ──────────────────────────

export function AnalyticsScripts() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    function checkConsent() {
      setConsented(getConsent() === true);
    }
    checkConsent();
    // Re-check if user accepts via banner after mount
    const interval = setInterval(checkConsent, 1000);
    return () => clearInterval(interval);
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
