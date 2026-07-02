import Link from "next/link";
import Image from "next/image";

import { MobileMenu } from "@/components/layout/MobileMenu";
import { brand } from "@/lib/constants/brand";
import { mainNavigation } from "@/lib/constants/navigation";
import type { SiteSettings } from "@/types/cms";

export function Header({ settings }: { settings?: SiteSettings }) {
  const logoSrc = settings?.logoFullUrl || brand.logoFull;

  return (
    <header className="sticky top-0 z-[80] border-b border-deep-aubergine/8 glass">
      <div className="site-container flex min-h-16 items-center justify-between gap-3 lg:min-h-[4.5rem]">
        {/* Logo */}
        <Link
          href="/"
          aria-label={`${brand.name} - home`}
          className="flex min-w-0 shrink-0 items-center transition-all duration-300 hover:opacity-85 hover:scale-[1.02]"
        >
          <span className="relative block h-11 w-[8.75rem] max-w-[44vw] overflow-hidden sm:w-[9.5rem] lg:h-12 lg:w-[10.75rem]">
            <Image
              src={logoSrc}
              alt={brand.name}
              fill
              priority
              className="object-contain object-left"
              sizes="(min-width: 1024px) 172px, 152px"
            />
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Hoofdnavigatie" className="hidden items-center gap-8 lg:flex">
          {mainNavigation.slice(0, -1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium tracking-wide text-ink-brown/70 transition-all duration-300 hover:text-deep-aubergine after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-muted-gold after:transition-all after:duration-500 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link
            href="/doe-mee"
            className="inline-flex min-h-10 items-center rounded-sm border border-deep-aubergine bg-deep-aubergine px-5 py-2.5 text-sm font-semibold tracking-wide text-warm-white transition-all duration-250 hover:border-wine-plum hover:bg-wine-plum hover:shadow-[0_6px_24px_rgba(66,21,47,0.2)] hover:scale-[1.02] active:scale-[0.97]"
          >
            Doe mee
          </Link>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
