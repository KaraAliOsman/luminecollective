import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { brand } from "@/lib/constants/brand";
import { socialLinks } from "@/lib/constants/social";
import { legalNavigation } from "@/lib/constants/navigation";
import type { SiteSettings } from "@/types/cms";

export function Footer({ settings }: { settings?: SiteSettings }) {
  const socials = settings?.socialLinks?.length ? settings.socialLinks : socialLinks;
  return <footer className="site-footer">
    <div className="site-container">
      <div className="site-footer__grid">
        <div className="site-footer__brand">
          <Link href="/" className="wordmark" aria-label={`${brand.name} - home`}>
            <Image src={settings?.logoMarkUrl || brand.logoMark} width={60} height={60} alt="" />
            <span className="wordmark__text"><strong>Lumina</strong><small>Collective</small></span>
          </Link>
          <p className="site-footer__intro">Een stichting voor verbinding, ontwikkeling en gelijke kansen. Vanuit Tilburg, met aandacht voor elkaar.</p>
        </div>
        <div>
          <p className="site-footer__label">Ontdek Lumina</p>
          <nav aria-label="Over Lumina"><Link href="/over-ons">Over ons</Link><Link href="/programmas">Programma&apos;s</Link><Link href="/agenda">Agenda</Link><Link href="/gemeenschap">Gemeenschap</Link><Link href="/nieuws">Nieuws & verhalen</Link></nav>
        </div>
        <div>
          <p className="site-footer__label">Bouw mee</p>
          <nav aria-label="Betrokken raken"><Link href="/doe-mee">Meedoen</Link><Link href="/doe-mee#vrijwilliger">Vrijwilliger worden</Link><Link href="/doe-mee#steunen">Lumina steunen</Link><Link href="/contact?onderwerp=Samenwerken">Samenwerken</Link><Link href="/anbi">ANBI & transparantie</Link></nav>
        </div>
        <div className="site-footer__contact-column">
          <p className="site-footer__label">We horen graag van je</p>
          <div className="site-footer__contact"><a href={`mailto:${brand.email}`}>{brand.email}</a><a href={brand.phoneHref}>{brand.phone}</a>
            <address>{brand.address.street}<br />{brand.address.postalCode} {brand.address.city}</address>
            <Link href="/contact">Contact <ArrowUpRight size={14} className="inline" aria-hidden="true" /></Link>
          </div>
          {socials.length > 0 && <nav aria-label="Sociale media" className="mt-5">{socials.map(item => <a href={item.href} key={item.href} target="_blank" rel="noopener noreferrer">{item.label} <ArrowUpRight size={13} className="inline" aria-hidden="true" /></a>)}</nav>}
        </div>
      </div>
      <div className="site-footer__bottom"><p>© {new Date().getFullYear()} Stichting Lumina Collective · KVK {brand.kvk} · RSIN {brand.rsin}</p><nav aria-label="Juridisch">{legalNavigation.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}<Link href="/fotografie">Fotografie</Link></nav></div>
    </div>
  </footer>;
}
