import { ProgramCard } from "@/components/cards/ProgramCard";
import { EventCard } from "@/components/cards/EventCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { CMSImage } from "@/components/ui/CMSImage";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { TextLink } from "@/components/ui/TextLink";
import type { EventDisplay, GalleryItemDisplay, HomeSection, PartnerDisplay, ProgramDisplay, TestimonialDisplay } from "@/types/cms";

type Props = { sections?: HomeSection[]; programs: ProgramDisplay[]; event?: EventDisplay; gallery: GalleryItemDisplay[]; testimonials: TestimonialDisplay[]; partners: PartnerDisplay[] };

export function HomeSections({ sections = [], programs, event, gallery, testimonials, partners }: Props) {
  return sections.map((section, index) => {
    const key = section._key || `${section._type}-${index}`;
    const title = ["title" in section ? section.title : undefined, "accent" in section ? section.accent : undefined].filter(Boolean).join(" ");
    const heading = <div className="section-heading"><div><p className="section-index">{section.eyebrow || "Lumina"}</p><Heading size="lg">{title}</Heading></div></div>;
    if (section._type === "homeManifesto") return <section className="section" key={key}><Container>{heading}<div className="values-grid">{section.items?.map((item, i) => <article key={item._key || i}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></Container></section>;
    if (section._type === "homePrograms") return <section className="section section--sage" key={key}><Container>{heading}{section.intro && <p className="lead mb-8">{section.intro}</p>}<div className="program-grid">{programs.slice(0, section.limit || 4).map((program, i) => <ProgramCard program={program} index={i} key={program.slug} />)}</div><TextLink className="mt-8" href="/programmas">{section.linkLabel || "Alle programma's"}</TextLink></Container></section>;
    if (section._type === "homeEvent") return event ? <section className="section" key={key}><Container><p className="section-index mb-8">{section.eyebrow || "Op de agenda"}</p><EventCard event={event} /></Container></section> : null;
    if (section._type === "homeGallery") return gallery.length ? <section className="section" key={key}><Container>{heading}<div className="gallery-grid">{gallery.slice(0, section.limit || 6).map(item => <figure key={item.id}><CMSImage image={item.image} fallback={item.visual} altFallback={item.alt} />{item.caption && <figcaption>{item.caption}</figcaption>}</figure>)}</div><TextLink className="mt-8" href="/gemeenschap">{section.linkLabel || "Onze gemeenschap"}</TextLink></Container></section> : null;
    if (section._type === "homeTestimonial") {
      const testimonial = testimonials[0];
      return testimonial ? <section className="section section--rose" key={key}><Container><p className="section-index mb-8">{section.eyebrow || "Een ervaring"}</p><div className="testimonial-grid"><figure><blockquote>{testimonial.quote}</blockquote><figcaption>{testimonial.anonymous ? "Anoniem" : testimonial.name}</figcaption></figure></div></Container></section> : null;
    }
    if (section._type === "homePartners") return partners.length ? <section className="section" key={key}><Container><p className="section-index mb-8">{section.eyebrow || "Samenwerking"}</p><div className="actions">{partners.slice(0, section.limit || 8).map(partner => partner.website ? <a className="text-link" href={partner.website} key={partner.name} rel="noreferrer" target="_blank">{partner.name}</a> : <span key={partner.name}>{partner.name}</span>)}</div></Container></section> : null;
    if (section._type === "homeCta") return <CtaBand key={key} title={title || "Er is ook een plek voor jou."} body={section.text || "Een eerste gesprek is een goed begin."} primary={section.primary || { label: "Doe mee", href: "/doe-mee" }} secondary={section.secondary} />;
    return null;
  });
}
