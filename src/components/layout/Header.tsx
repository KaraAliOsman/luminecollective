import Link from "next/link";
import Image from "next/image";

import { MobileMenu } from "@/components/layout/MobileMenu";
import { brand } from "@/lib/constants/brand";
import { mainNavigation } from "@/lib/constants/navigation";
import type { SiteSettings } from "@/types/cms";

export function Header({ settings }: { settings?: SiteSettings }) {
  const logoSrc = settings?.logoFullUrl || brand.logoFull;

  return (
    <header className="sticky top-0 z-[80] border-b border-deep-aubergine/10 bg-lumina-ivory">
      <div className="site-container flex min-h-[4.75rem] items-center justify-between gap-4 lg:min-h-[5.25rem]">
        {/* Logo */}
        <Link
          href="/"
          aria-label={`${brand.name} - home`}
          className="flex min-w-0 shrink-0 items-center transition-opacity hover:opacity-85"
        >
          <span className="relative block aspect-[2.45/1] w-[9.75rem] max-w-[48vw] overflow-hidden sm:w-[11rem] lg:w-[13.5rem]">
            <Image
              src={logoSrc}
              alt={brand.name}
              fill
              priority
              className="object-cover object-center"
              sizes="(min-width: 1024px) 216px, 176px"
            />
          </span>
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
            className="inline-flex min-h-10 items-center border border-deep-aubergine bg-deep-aubergine px-5 py-2.5 text-sm font-semibold tracking-wide text-warm-white transition duration-200 hover:border-wine-plum hover:bg-wine-plum"
          >
            Doe mee
          </Link>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
