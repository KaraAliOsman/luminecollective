"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { brand } from "@/lib/constants/brand";
import { headerNavigation } from "@/lib/constants/navigation";
import type { SiteSettings } from "@/types/cms";

export function Header({ settings }: { settings?: SiteSettings }) {
  const pathname = usePathname();
  return <header className="site-header">
    <div className="site-header__inner">
      <Link href="/" aria-label={`${brand.name} - home`} className="wordmark">
        <Image src={settings?.logoMarkUrl || brand.logoMark} width={54} height={54} alt="" priority />
        <span className="wordmark__text"><strong>Lumina</strong><small>Collective</small></span>
      </Link>
      <nav aria-label="Hoofdnavigatie" className="site-header__nav">
        {headerNavigation.map(item => <Link key={item.href} href={item.href} aria-current={pathname.startsWith(item.href) ? "page" : undefined}>{item.label}</Link>)}
      </nav>
      <Link href="/doe-mee" className="button button--primary site-header__cta">Doe mee<ArrowUpRight size={17} aria-hidden="true" /></Link>
      <MobileMenu />
    </div>
  </header>;
}
