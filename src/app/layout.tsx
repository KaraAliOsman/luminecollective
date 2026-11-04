import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Hanken_Grotesk, Jost } from "next/font/google";

import { AnalyticsScripts, CookieBanner } from "@/components/global/Analytics";
import { PosterMotion } from "@/components/global/PosterMotion";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { getSiteSettings } from "@/lib/cms/content";
import { createMetadata } from "@/lib/seo/config";

import "./globals.css";

export const dynamic = "force-dynamic";

export const viewport: Viewport = {
  themeColor: "#ffffff",
  viewportFit: "cover",
};

const sans = Hanken_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

const display = Jost({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
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
    <html lang="nl" className={`${sans.variable} ${display.variable}`}>
      <body>
        <a
          className="skip-link"
          href="#main-content"
        >
          Naar inhoud
        </a>
        <Header settings={settings} />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer settings={settings} />
        <CookieBanner />
        <AnalyticsScripts />
        <PosterMotion />
      </body>
    </html>
  );
}
