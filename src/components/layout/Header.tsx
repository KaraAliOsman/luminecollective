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
        <Link
          href="/"
          aria-label={`${brand.name} - home`}
          className="flex min-w-0 shrink-0 items-center gap-3 transition-all duration-300 hover:opacity-85 hover:scale-[1.01]"
        >
          <span className="relative block size-12 overflow-hidden rounded-full border border-muted-gold/25 bg-warm-white shadow-[0_8px_24px_rgba(66,21,47,0.08)] lg:size-14">
            <Image
              src={logoSrc}
              alt={brand.name}
              fill
              priority
              className="object-cover object-center"
              sizes="(min-width: 1024px) 56px, 48px"
            />
          </span>
          <span className="hidden min-w-0 flex-col leading-[0.9] sm:flex">
            <span className="font-caveat text-3xl font-bold text-deep-aubergine lg:text-[2.2rem]">
              Lumina Collective
            </span>
            <span className="mt-1 font-outfit text-[0.58rem] font-bold uppercase tracking-[0.26em] text-muted-gold">
              Stichting
            </span>
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
