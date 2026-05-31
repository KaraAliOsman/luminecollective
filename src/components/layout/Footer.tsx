import Link from "next/link";
import Image from "next/image";

import { brand } from "@/lib/constants/brand";
import { legalNavigation, mainNavigation } from "@/lib/constants/navigation";
import { socialLinks as fallbackSocialLinks } from "@/lib/constants/social";
import type { SiteSettings } from "@/types/cms";

export function Footer({ settings }: { settings?: SiteSettings }) {
  const year = new Date().getFullYear();
  const logoSrc = settings?.logoFullUrl || brand.logoFull;
  const footerText = settings?.footerText || brand.claim;
  const socials = settings?.socialLinks?.length
    ? settings.socialLinks
    : fallbackSocialLinks;

  return (
    <footer className="border-t border-deep-aubergine/10 bg-warm-white">
      <div className="site-container py-16 md:py-20">
        <div className="grid gap-14 md:grid-cols-[1.3fr_2fr]">
          {/* Brand */}
          <div className="space-y-6">
            <Link
              href="/"
              aria-label={`${brand.name} — home`}
              className="inline-block transition-opacity hover:opacity-75"
            >
              <Image
                src={logoSrc}
                alt={brand.name}
                width={148}
                height={48}
                className="h-10 w-auto object-contain"
                sizes="148px"
              />
            </Link>
            <p className="max-w-[22ch] font-serif text-xl leading-[1.55] text-deep-aubergine/85 italic">
              {footerText}
            </p>
            <p className="text-xs tracking-widest text-warm-taupe/80 uppercase">
              © {year} {brand.name}
            </p>
          </div>

          {/* Links */}
          <div className="grid gap-10 sm:grid-cols-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-wine-plum">
                Navigatie
              </p>
              <ul className="mt-5 space-y-3">
                {mainNavigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-ink-brown/68 transition hover:text-deep-aubergine"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-wine-plum">
                Sociaal
              </p>
              <ul className="mt-5 space-y-3">
                {socials.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-ink-brown/68 transition hover:text-deep-aubergine"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-wine-plum">
                Juridisch
              </p>
              <ul className="mt-5 space-y-3">
                {legalNavigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-ink-brown/68 transition hover:text-deep-aubergine"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-deep-aubergine/8 pt-8 text-xs text-warm-taupe/75">
          <p>
            Gemaakt met zorg. Niet-commercieel. Voor en door de gemeenschap.
          </p>
        </div>
      </div>
    </footer>
  );
}
