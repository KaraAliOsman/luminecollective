import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { brand } from "@/lib/constants/brand";
import { createMetadata } from "@/lib/seo/config";
import { StructuredData } from "@/components/seo/StructuredData";
import { webPageJsonLd } from "@/lib/seo/jsonLd";

const description = "Neem contact op met Lumina Collective. Stel je vraag, maak kennis of bespreek een samenwerking.";
export const metadata: Metadata = createMetadata({ title: "Contact", description, path: "/contact" });

export default function ContactPage() {
  return <>
    <StructuredData data={webPageJsonLd({ path: "/contact", title: "Contact", description })} />
    <header className="page-heading"><Container><p className="section-index">We horen graag van je</p><Heading as="h1" size="xl">Contact met Lumina</Heading><p className="lead">Een vraag, een idee of een eerste kennismaking? Stuur ons een bericht of bel ons.</p></Container></header>
    <section className="section"><Container className="contact-layout">
      <div><Heading size="md">Contact met Lumina</Heading><div className="contact-methods">
        <div className="contact-method"><Mail size={21} aria-hidden="true" /><div><h3>E-mail</h3><a href={`mailto:${brand.email}`}>{brand.email}</a></div></div>
        <div className="contact-method"><Phone size={21} aria-hidden="true" /><div><h3>Telefoon</h3><a href={brand.phoneHref}>{brand.phone}</a></div></div>
      </div><div className="notice"><strong>Een bericht met persoonlijke informatie?</strong><p>Deel in het formulier alleen wat nodig is om je vraag te begrijpen. Uitgebreide persoonlijke of medische details bespreken we liever rechtstreeks.</p></div><Link href="/anbi" className="text-link mt-5">Organisatiegegevens & ANBI<ArrowUpRight size={16} aria-hidden="true" /></Link></div>
      <div className="contact-form-panel"><h2>Stuur ons een bericht</h2><p>Vertel ons kort waarover je contact wilt. We komen bij je terug via het opgegeven e-mailadres.</p><ContactForm /></div>
    </Container></section>
  </>;
}
