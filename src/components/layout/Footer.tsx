import Link from "next/link";
import { brand } from "@/lib/constants/brand";
import { legalNavigation, mainNavigation } from "@/lib/constants/navigation";
import { socialLinks as fallbackSocialLinks } from "@/lib/constants/social";
import type { SiteSettings } from "@/types/cms";

export function Footer({ settings }: { settings?: SiteSettings }) {
  const year = new Date().getFullYear();
  const socials = settings?.socialLinks?.length ? settings.socialLinks : fallbackSocialLinks;
  const navigation = settings?.navigation?.length ? settings.navigation : [...mainNavigation];
  const address = settings?.address || brand.address;

  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="site-footer__top">
          <Link href="/" className="site-footer__wordmark" aria-label={`${brand.name} - home`}>
            <span>{settings?.brandPrimaryText || "Lumina"}</span>
            <small>{settings?.brandSecondaryText || "Collective"}<i>013 · Tilburg</i></small>
          </Link>
          <p>{settings?.footerText || "Ontmoeten. Groeien. Samen zichtbaar worden."}</p>
        </div>

        <div className="site-footer__grid">
          <div>
            <p className="site-footer__label">Vind je weg</p>
            <nav>
              {navigation.filter((item) => item.href !== "/").map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
            </nav>
          </div>
          <div>
            <p className="site-footer__label">Volg Lumina</p>
            <nav>
              {socials.map((item) => <a href={item.href} key={item.href} rel="noreferrer" target="_blank">{item.label} ↗</a>)}
            </nav>
          </div>
          <div className="site-footer__address">
            <p className="site-footer__label">Hier vind je ons</p>
            <p>{address.street}<br />{address.postalCode} {address.city}<br />{address.country}</p>
            <Link href="/contact">Neem contact op →</Link>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© {year} Stichting Lumina Collective · KVK {brand.kvk}</p>
          <nav>{legalNavigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</nav>
          <p>{address.city}, NL</p>
        </div>
      </div>
    </footer>
  );
}
