import Image from "next/image";
import Link from "next/link";

import { MobileMenu } from "@/components/layout/MobileMenu";
import { brand } from "@/lib/constants/brand";
import { mainNavigation } from "@/lib/constants/navigation";
import type { SiteSettings } from "@/types/cms";

export function Header({ settings }: { settings?: SiteSettings }) {
  const logoSrc = settings?.logoMarkUrl || brand.logoMark;
  const navigation = mainNavigation.filter(
    (item) => item.href !== "/" && item.href !== "/doe-mee",
  );

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" aria-label={`${brand.name} - home`} className="wordmark">
          <Image src={logoSrc} width={42} height={42} alt="" priority />
          <span className="wordmark__text"><strong>Lumina</strong><small>Collective</small></span>
        </Link>

        <nav aria-label="Hoofdnavigatie" className="site-header__nav">
          {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>

        <Link href="/doe-mee" className="site-header__cta">
          Doe mee <span aria-hidden="true">↗</span>
        </Link>
        <MobileMenu />
      </div>
    </header>
  );
}
