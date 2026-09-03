import type { Metadata } from "next";
import { HeartHandshake, MessagesSquare, Sparkles } from "lucide-react";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { CMSImage } from "@/components/ui/CMSImage";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { TextLink } from "@/components/ui/TextLink";
import { photography } from "@/data/placeholders";
import { getApprovedTestimonials, getPageByKey, getPublicGallery } from "@/lib/cms/content";
import { createMetadata } from "@/lib/seo/config";

export const metadata: Metadata = createMetadata({ title: "Gemeenschap", description: "Bij Lumina is ruimte voor jouw verhaal, talent en ideeën. Maak kennis met onze gemeenschap in Tilburg.", path: "/gemeenschap" });

export default async function GemeenschapPage() {
  const [page, gallery, testimonials] = await Promise.all([getPageByKey("gemeenschap"), getPublicGallery(), getApprovedTestimonials()]);
  return <>
    <PageHero eyebrow="Bij elkaar" title={page?.heroTitle || "De gemeenschap van Lumina"} body={page?.heroText || "Je brengt iets mee wat niemand anders heeft: jouw verhaal. Hier is ruimte om het te delen, anderen te leren kennen en samen iets op te bouwen."} image={page?.heroImage} visual={photography.connection} primary={{ label: "Kom kennismaken", href: "/contact?onderwerp=Kennismaken" }} />
    <section className="section"><Container className="intro-grid"><div><p className="section-index">Dichtbij elkaar</p><Heading size="lg">Verschillende verhalen. Gedeelde mogelijkheden.</Heading></div><div className="intro-grid__body"><p className="lead">Een buurt wordt sterker als mensen elkaar weten te vinden. Lumina wil in Tilburg een plek zijn waar vrouwen, nieuwkomers, jongeren en gezinnen elkaar ontmoeten. Waar je je vraag kunt stellen, maar ook iets kunt betekenen voor een ander.</p><TextLink href="/programmas">Ontdek onze programma&apos;s</TextLink></div></Container></section>
    <section className="section section--lilac"><Container><div className="section-heading"><div><p className="section-index">Zo willen we samen zijn</p><Heading size="lg">Aandacht maakt het verschil.</Heading></div></div><div className="values-grid">
      <article><MessagesSquare size={26} aria-hidden="true" /><h3>We luisteren naar elkaar</h3><p>Je hoeft niet hetzelfde te denken of dezelfde achtergrond te hebben om iets van elkaar te kunnen leren.</p></article>
      <article><HeartHandshake size={26} aria-hidden="true" /><h3>We respecteren jouw grenzen</h3><p>Jij bepaalt wat je deelt. We gaan zorgvuldig om met persoonlijke verhalen en met foto&apos;s.</p></article>
      <article><Sparkles size={26} aria-hidden="true" /><h3>Iedere bijdrage telt</h3><p>Een idee, een helpende hand of een talent dat je wilt delen. Samen ontdekken we wat mogelijk is.</p></article>
    </div></Container></section>
    {gallery.length > 0 && <section className="section"><Container><div className="section-heading"><div><p className="section-index">Uit de gemeenschap</p><Heading size="lg">Momenten om te delen.</Heading></div></div><div className="gallery-grid">{gallery.map(item => <figure key={item.id}><CMSImage image={item.image} fallback={item.visual} altFallback={item.alt} />{item.caption && <figcaption>{item.caption}</figcaption>}</figure>)}</div></Container></section>}
    {testimonials.length > 0 && <section className="section"><Container><div className="section-heading"><div><p className="section-index">Ervaringen</p><Heading size="lg">In hun eigen woorden.</Heading></div></div><div className="testimonial-grid">{testimonials.map(item => <figure key={item.quote}><blockquote>{item.quote}</blockquote><figcaption>{item.anonymous ? "Anoniem" : item.name}{item.roleOrContext ? `, ${item.roleOrContext}` : ""}</figcaption></figure>)}</div></Container></section>}
    <CtaBand title="Er is ook ruimte voor jou." body="Je hoeft niemand te kennen om een eerste stap te zetten. Stuur een bericht, stel je vraag of deel je idee." primary={{ label: "Doe mee", href: "/doe-mee" }} secondary={{ label: "Neem contact op", href: "/contact" }} />
  </>;
}
