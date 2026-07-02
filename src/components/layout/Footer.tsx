import Link from "next/link";
import Image from "next/image";

import { brand } from "@/lib/constants/brand";
import { legalNavigation, mainNavigation } from "@/lib/constants/navigation";
import { socialLinks as fallbackSocialLinks } from "@/lib/constants/social";
import type { SiteSettings } from "@/types/cms";

export function Footer({ settings }: { settings?: SiteSettings }) {
  const year = new Date().getFullYear();
  const logoSrc = brand.logoMark;
  const footerText = settings?.footerText || brand.claim;
  const socials = settings?.socialLinks?.length
    ? settings.socialLinks
    : fallbackSocialLinks;

  return (
    <footer className="relative overflow-hidden border-t border-deep-aubergine/10 bg-warm-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_100%,rgba(234,208,205,0.2),transparent)]" />

      <div className="site-container relative py-12 sm:py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.3fr_2fr]">
          <div className="space-y-6">
            <Link
              href="/"
              aria-label={`${brand.name} - home`}
              className="inline-flex items-center gap-4 transition-all duration-300 hover:opacity-75 hover:scale-[1.01]"
            >
              <span className="relative block size-20 overflow-hidden rounded-full border border-muted-gold/25 bg-warm-white shadow-[0_12px_32px_rgba(66,21,47,0.08)]">
                <Image
                  src={logoSrc}
                  alt={brand.name}
                  fill
                  className="object-cover object-center"
                  sizes="80px"
                />
              </span>
              <span className="font-caveat text-3xl font-bold leading-none text-deep-aubergine">
                Lumina Collective
              </span>
            </Link>
            <p className="max-w-[24ch] font-serif text-xl leading-[1.55] text-deep-aubergine/85 italic">
              {footerText}
            </p>
            <div className="h-px w-12 bg-gradient-to-r from-muted-gold to-muted-gold/10" />
            <p className="text-xs uppercase tracking-widest text-warm-taupe/80">
              © {year} {brand.name}
            </p>
          </div>

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
                      className="text-sm text-ink-brown/68 transition-all duration-250 hover:text-deep-aubergine hover:translate-x-0.5"
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
                      className="text-sm text-ink-brown/68 transition-all duration-250 hover:text-deep-aubergine hover:translate-x-0.5"
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
                      className="text-sm text-ink-brown/68 transition-all duration-250 hover:text-deep-aubergine hover:translate-x-0.5"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-deep-aubergine/8 pt-8 text-xs text-warm-taupe/75 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Gemaakt met zorg. Niet-commercieel. Voor en door de gemeenschap.
          </p>
          <p>KVK: {brand.kvk} · {brand.address.city}</p>
        </div>
      </div>
    </footer>
  );
}
