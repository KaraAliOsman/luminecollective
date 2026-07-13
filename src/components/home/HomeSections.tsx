import Link from "next/link";

import { CMSImage } from "@/components/ui/CMSImage";
import type { EventDisplay, GalleryItemDisplay, HomeSection, PartnerDisplay, ProgramDisplay, TestimonialDisplay } from "@/types/cms";

type Props = {
  sections?: HomeSection[];
  programs: ProgramDisplay[];
  event?: EventDisplay;
  gallery: GalleryItemDisplay[];
  testimonials: TestimonialDisplay[];
  partners: PartnerDisplay[];
};

const defaults: HomeSection[] = [
  { _type: "homeManifesto", eyebrow: "Waarom Lumina", title: "Je hoeft het niet", accent: "alleen te doen.", items: [
    { title: "Ontmoeten", text: "Lumina is een laagdrempelige, veilige plek waar vrouwen van alle achtergronden samenkomen om verhalen te delen en steun te vinden." },
    { title: "Ontwikkelen", text: "Met workshops, bijeenkomsten en activiteiten bouwen we aan zelfvertrouwen, taalvaardigheid en maatschappelijke stappen." },
    { title: "Zichtbaarheid", text: "Niet vanuit een vast model, maar vanuit de eigen kracht. Samen maken we vrouwelijke initiatieven en talenten zichtbaar." },
  ] },
  { _type: "homePrograms", eyebrow: "Wat we doen", title: "Ruimte om te ontmoeten,", accent: "leren en maken.", intro: "Lumina biedt wekelijks een gevarieerd programma aan. Altijd vanuit de behoefte en het initiatief van onze deelneemsters.", limit: 3, footerPrompt: "Heb je zelf een idee voor een activiteit?", linkLabel: "Bekijk alle programma's" },
  { _type: "homeEvent", eyebrow: "Kom langs", badge: "Agenda", buttonLabel: "Bekijk activiteit" },
  { _type: "homeGallery", eyebrow: "Beeldbank", title: "Dit gebeurt wanneer", accent: "mensen samenkomen.", limit: 5, linkLabel: "Bekijk de hele gemeenschap" },
  { _type: "homeTestimonial", eyebrow: "Stemmen" },
  { _type: "homePartners", eyebrow: "Samenwerking", limit: 8 },
  { _type: "homeCta", eyebrow: "Sluit je aan", title: "Kom een keer", accent: "naast ons zitten.", text: "Een eerste bezoek, een vraag of een idee: zo begint het vaak.", primary: { label: "Ik wil meedoen", href: "/doe-mee" }, secondary: { label: "Neem contact op", href: "/contact" } },
];

const indexLabel = (index: number, label?: string) => `${String(index + 1).padStart(2, "0")} · ${label || "Lumina"}`;

export function HomeSections({ sections, programs, event, gallery, testimonials, partners }: Props) {
  const content = sections?.length ? sections : defaults;

  return content.map((section, index) => {
    const key = section._key || `${section._type}-${index}`;

    if (section._type === "homeManifesto") {
      return (
        <section className="home-manifesto" key={key}>
          <div className="site-container">
            <div className="home-manifesto__grid">
              <span className="section-index">{indexLabel(index, section.eyebrow)}</span>
              <div className="home-manifesto__statement"><p>{section.title || "Je hoeft het niet"} <span>{section.accent || "alleen te doen."}</span></p></div>
            </div>
            <div className="home-principles">
              {(section.items || []).map((item, itemIndex) => (
                <article key={item._key || `${item.title}-${itemIndex}`}>
                  <span>{String(itemIndex + 1).padStart(2, "0")}</span>
                  <h2>{item.title}</h2><p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      );
    }

    if (section._type === "homePrograms") {
      return (
        <section className="home-programs" key={key}>
          <div className="site-container">
            <header className="home-section-head">
              <span className="section-index">{indexLabel(index, section.eyebrow)}</span>
              <div><h2>{section.title || "Ruimte om te ontmoeten,"}<br /><em>{section.accent || "leren en maken."}</em></h2><p>{section.intro}</p></div>
            </header>
            <div className="home-program-list">
              {programs.slice(0, section.limit || 3).map((program, itemIndex) => (
                <Link href={`/programmas/${program.slug}`} className="home-program" key={program.slug}>
                  <span className="home-program__number">{String(itemIndex + 1).padStart(2, "0")}</span><h3>{program.title}</h3><p>{program.description}</p><span className="home-program__arrow">↗</span>
                </Link>
              ))}
            </div>
            <div className="home-programs__footer"><p>{section.footerPrompt}</p><Link className="home-text-link" href="/programmas">{section.linkLabel || "Bekijk alle programma's"}</Link></div>
          </div>
        </section>
      );
    }

    if (section._type === "homeEvent") {
      if (!event) return null;
      return (
        <section className="home-agenda" key={key}>
          <div className="site-container home-agenda__grid">
            <div className="home-agenda__image-wrap"><CMSImage className="home-agenda__image" fallback={event.visual} image={event.image} sizes="(min-width: 1024px) 50vw, 100vw" /><span className="home-agenda__label">{section.badge || "Agenda"}</span></div>
            <div className="home-agenda__content"><span className="section-index section-index--light">{indexLabel(index, section.eyebrow)}</span><p className="home-agenda__date">{event.date}</p><h2>{event.title}</h2><p className="home-agenda__place">{event.location}</p><p className="home-agenda__body">{event.description}</p><Link className="studio-button studio-button--light" href={`/agenda/${event.slug}`}>{section.buttonLabel || "Bekijk activiteit"}</Link></div>
          </div>
        </section>
      );
    }

    if (section._type === "homeGallery") {
      const items = gallery.slice(0, section.limit || 5);
      return (
        <section className="home-gallery" key={key}>
          <div className="site-container"><header className="home-section-head home-gallery__head"><span className="section-index">{indexLabel(index, section.eyebrow)}</span><div><h2>{section.title || "Dit gebeurt wanneer"}<br /><em>{section.accent || "mensen samenkomen."}</em></h2></div></header></div>
          <div className="home-gallery__grid">{items.map((item, itemIndex) => <div className={`home-gallery__item home-gallery__item--${(itemIndex % 5) + 1}`} key={item.id}><CMSImage altFallback={item.alt} className="home-gallery__image" fallback={item.visual} image={item.image} sizes="(min-width: 768px) 33vw, 100vw" /></div>)}</div>
          <div className="site-container home-gallery__footer"><Link className="home-text-link" href="/gemeenschap">{section.linkLabel || "Bekijk de hele gemeenschap"}</Link></div>
        </section>
      );
    }

    if (section._type === "homeTestimonial") {
      const testimonial = testimonials[0];
      return <section className="home-voice" key={key}><div className="site-container home-voice__grid"><span className="section-index">{indexLabel(index, section.eyebrow)}</span><div><blockquote>{testimonial?.quote || "Ik kwam binnen zonder iemand te kennen. Ik ging naar huis met het gevoel dat ik ergens bij hoor."}</blockquote><p className="home-voice__byline">{testimonial ? (testimonial.anonymous ? "Deelnemer, anoniem" : testimonial.name) : "Een deelnemer van Lumina"}</p></div></div></section>;
    }

    if (section._type === "homePartners") {
      if (!partners.length) return null;
      return <section className="home-partners" key={key}><div className="site-container"><span className="section-index">{indexLabel(index, section.eyebrow)}</span><div className="home-partners__list">{partners.slice(0, section.limit || 8).map((partner) => partner.website ? <a href={partner.website} key={partner.name} rel="noreferrer" target="_blank">{partner.name}</a> : <span key={partner.name}>{partner.name}</span>)}</div></div></section>;
    }

    if (section._type === "homeCta") {
      return <section className="home-cta" key={key}><div className="site-container home-cta__grid"><span className="section-index section-index--light">{indexLabel(index, section.eyebrow)}</span><div><h2>{section.title || "Kom een keer"}<br /><em>{section.accent || "naast ons zitten."}</em></h2><p>{section.text}</p><div className="home-cta__actions">{section.primary?.href && <Link className="studio-button studio-button--light" href={section.primary.href}>{section.primary.label}</Link>}{section.secondary?.href && <Link className="home-text-link" href={section.secondary.href}>{section.secondary.label}</Link>}</div></div></div></section>;
    }

    return null;
  });
}
