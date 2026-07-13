import Link from "next/link";
import Image from "next/image";

import { MobileMenu } from "@/components/layout/MobileMenu";
import { brand } from "@/lib/constants/brand";
import { mainNavigation } from "@/lib/constants/navigation";
import type { SiteSettings } from "@/types/cms";

export function Header({ settings }: { settings?: SiteSettings }) {
  const logoSrc = settings?.logoMarkUrl || brand.logoMark;
  const navigation = settings?.navigation?.length ? settings.navigation : [...mainNavigation];
  const cta = settings?.headerCta || { label: "Doe mee", href: "/doe-mee" };
  const desktopNavigation = navigation.filter(
    (item) => item.href !== "/" && item.href !== cta.href,
  );

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" aria-label={`${brand.name} - home`} className="wordmark">
          <span className="wordmark__mark"><Image src={logoSrc} width={40} height={40} alt="" priority /></span>
          <span className="wordmark__lockup">
            <strong>{settings?.brandPrimaryText || "Lumina"}</strong>
            <small>{settings?.brandSecondaryText || "Collective"}<i>013</i></small>
          </span>
        </Link>

        <nav aria-label="Hoofdnavigatie" className="site-header__nav">
          {desktopNavigation.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>

        <Link href={cta.href} className="site-header__cta">
          {cta.label} <span aria-hidden="true">↗</span>
        </Link>
        <MobileMenu navigation={navigation} cta={cta} />
      </div>
    </header>
  );
}
