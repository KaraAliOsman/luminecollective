import Link from "next/link";
import Image from "next/image";

import { MobileMenu } from "@/components/layout/MobileMenu";
import { brand } from "@/lib/constants/brand";
import { mainNavigation } from "@/lib/constants/navigation";
import type { SiteSettings } from "@/types/cms";

export function Header({ settings }: { settings?: SiteSettings }) {
  const logoSrc = settings?.logoFullUrl || brand.logoFull;

  return (
    <header className="sticky top-0 z-50 border-b border-deep-aubergine/8 bg-lumina-ivory/92 backdrop-blur-md">
      <div className="site-container flex min-h-[4.5rem] items-center justify-between gap-6">
        {/* Logo */}
        <Link
          href="/"
          aria-label={`${brand.name} — home`}
          className="shrink-0 transition-opacity hover:opacity-80"
        >
          <Image
            src={logoSrc}
            alt={brand.name}
            width={160}
            height={52}
            priority
            className="h-10 w-auto object-contain"
            sizes="160px"
          />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Hoofdnavigatie" className="hidden items-center gap-8 lg:flex">
          {mainNavigation.slice(0, -1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium tracking-wide text-ink-brown/70 transition-colors hover:text-deep-aubergine after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-muted-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link
            href="/doe-mee"
            className="inline-flex min-h-10 items-center border border-deep-aubergine bg-deep-aubergine px-5 py-2.5 text-sm font-semibold tracking-wide text-warm-white transition duration-200 hover:bg-wine-plum"
          >
            Doe mee
          </Link>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
