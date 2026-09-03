import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DM_Sans, DM_Serif_Display } from "next/font/google";

import { AnalyticsScripts, CookieBanner } from "@/components/global/Analytics";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { getSiteSettings } from "@/lib/cms/content";
import { createMetadata } from "@/lib/seo/config";

import "./globals.css";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const serif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return createMetadata({
    title: settings?.siteTitle,
    description: settings?.siteDescription,
    ogImage: settings?.defaultOgImageUrl,
  });
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const settings = await getSiteSettings();

  return (
    <html lang="nl" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <a
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-warm-white focus:px-4 focus:py-3 focus:text-deep-aubergine"
          href="#main-content"
        >
          Naar inhoud
        </a>
        <Header settings={settings} />
        <main id="main-content">{children}</main>
        <Footer settings={settings} />
        <CookieBanner />
        <AnalyticsScripts />
      </body>
    </html>
  );
}
