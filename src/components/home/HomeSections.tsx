import { Plus } from "lucide-react";
import { EventCard } from "@/components/cards/EventCard";
import { ProgramCard } from "@/components/cards/ProgramCard";
import { BloomGather } from "@/components/home/BloomGather";
import { TearStrips, type TearStrip } from "@/components/home/TearStrips";
import { CMSImage } from "@/components/ui/CMSImage";
import { TextLink } from "@/components/ui/TextLink";
import { photography } from "@/data/placeholders";
import { brand } from "@/lib/constants/brand";
import type { EventDisplay, GalleryItemDisplay, HomeSection, PartnerDisplay, ProgramDisplay, TestimonialDisplay } from "@/types/cms";

type Props = { sections?: HomeSection[]; programs: ProgramDisplay[]; event?: EventDisplay; gallery: GalleryItemDisplay[]; testimonials: TestimonialDisplay[]; partners: PartnerDisplay[] };

const statementTones = ["tone-perzik", "tone-mint"];

function Title({ title, accent, className = "poster__title" }: { title?: string; accent?: string; className?: string }) {
  return <h2 className={className} data-reveal>{title}{accent && <em> {accent}</em>}</h2>;
}

function Corner({ children }: { children?: string }) {
  return children ? <p className="poster__corner">{children}</p> : null;
}

function Paragraphs({ text }: { text?: string }) {
  return text?.split("\n\n").map((paragraph, index) => <p className={index === 0 ? "lead" : undefined} key={paragraph}>{paragraph}</p>) ?? null;
}

export function HomeSections({ sections = [], programs, event, gallery, testimonials, partners }: Props) {
  let statements = 0;
  return sections.map((section, index) => {
    const key = section._key || `${section._type}-${index}`;
    switch (section._type) {
      case "homeText": {
        const tone = statementTones[statements++ % statementTones.length];
        const compact = section.spacing === "compact";
        return <section className={`poster statement ${tone}${compact ? " statement--compact poster--auto" : ""}`} key={key}>
          <Corner>{section.eyebrow}</Corner>
          <Title title={section.title} accent={section.accent} />
          <div className="statement__foot"><div className="poster__body">
            <Paragraphs text={section.text} />
            {section.link?.href && <TextLink href={section.link.href}>{section.link.label}</TextLink>}
          </div></div>
        </section>;
      }
      case "homePrograms":
        return <section className="poster street tone-wijn poster--auto" key={key}>
          <Corner>{section.eyebrow}</Corner>
          <div className="street__head">
            <Title title={section.title} accent={section.accent} />
            <div className="poster__body">{section.intro && <p>{section.intro}</p>}<TextLink href="/programmas">{section.linkLabel || "Alle programma's"}</TextLink></div>
          </div>
          <div className="program-grid">{programs.slice(0, section.limit || 4).map((program, i) => <ProgramCard program={program} index={i} key={program.slug} />)}</div>
        </section>;
      case "homeStory":
        return <section className="poster story tone-blad" key={key}>
          <Corner>{section.eyebrow}</Corner>
          <div className="story__photo"><CMSImage className="petal" fallback={photography.conversation} image={section.image} sizes="(max-width: 960px) 100vw, 56vw" /></div>
          <div className="story__copy">
            <Title title={section.title} accent={section.accent} />
            <div className="poster__body"><Paragraphs text={section.text} /></div>
            {section.link?.href && <TextLink href={section.link.href}>{section.link.label}</TextLink>}
          </div>
        </section>;
      case "homeQuote":
        return <section className="poster poster--dwell bloom-poster tone-roos" aria-label={section.eyebrow || "Waar we in geloven"} key={key}>
          <Corner>{section.eyebrow}</Corner>
          <BloomGather />
          <figure className="quote">
            <blockquote>&ldquo;{section.text}<em>{section.accent}&rdquo;</em></blockquote>
            <figcaption><cite>{section.attribution}</cite></figcaption>
            {section.link?.href && <div><TextLink href={section.link.href}>{section.link.label}</TextLink></div>}
          </figure>
        </section>;
      case "homeSteps":
        return <section className="poster tone-wit poster--auto" key={key}>
          <Corner>{section.eyebrow}</Corner>
          <Title title={section.title} accent={section.accent} />
          <ol className="steps">{section.items?.map((item, i) => <li key={item._key || i} data-reveal style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}><span className="steps__number" aria-hidden="true">{i + 1}</span><h3>{item.title}</h3><p>{item.text}</p></li>)}</ol>
        </section>;
      case "homeFaq":
        return <section className="poster tone-wit poster--auto" key={key}>
          <div className="faq-layout">
            <div>
              <Corner>{section.eyebrow}</Corner>
              <Title className="heading heading--lg" title={section.title} accent={section.accent} />
              {section.link?.href && <div><TextLink href={section.link.href}>{section.link.label}</TextLink></div>}
            </div>
            <div className="faq-list">{section.items?.map((item, i) => <details key={item._key || i}><summary>{item.title}<Plus aria-hidden="true" /></summary><p>{item.text}</p></details>)}</div>
          </div>
        </section>;
      case "homeCta": {
        const strips: TearStrip[] = [
          section.primary || { label: "Doe mee", href: "/doe-mee" },
          ...(section.secondary?.href ? [section.secondary] : []),
          { label: `Bel ${brand.phone}`, href: brand.phoneHref },
        ].filter((strip): strip is TearStrip => Boolean(strip.href));
        return <section className="poster closing tone-roos" key={key}>
          <Corner>{section.eyebrow}</Corner>
          <div className="closing__body">
            <Title title={section.title || "Er is ook een plek voor jou."} accent={section.accent} />
            <p className="lead">{section.text || "Een eerste gesprek is een goed begin."}</p>
          </div>
          <TearStrips label="Neem de volgende stap" strips={strips} />
        </section>;
      }
      case "homeManifesto":
        return <section className="poster tone-mint poster--auto" key={key}>
          <Corner>{section.eyebrow}</Corner>
          <Title title={section.title} accent={section.accent} />
          <div className="values-grid mt-8">{section.items?.map((item, i) => <article key={item._key || i}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        </section>;
      case "homeEvent":
        return event ? <section className="poster tone-perzik poster--auto" key={key}><Corner>{section.eyebrow || "Op de agenda"}</Corner><div className="event-list mt-8"><EventCard event={event} /></div></section> : null;
      case "homeGallery":
        return gallery.length ? <section className="poster tone-wit poster--auto" key={key}>
          <Corner>{section.eyebrow}</Corner>
          <Title title={section.title} accent={section.accent} />
          <div className="gallery-grid mt-8">{gallery.slice(0, section.limit || 6).map(item => <figure key={item.id}><CMSImage image={item.image} fallback={item.visual} altFallback={item.alt} />{item.caption && <figcaption>{item.caption}</figcaption>}</figure>)}</div>
          <TextLink className="mt-6" href="/gemeenschap">{section.linkLabel || "Onze gemeenschap"}</TextLink>
        </section> : null;
      case "homeTestimonial": {
        const testimonial = testimonials[0];
        return testimonial ? <section className="poster tone-perzik poster--auto" key={key}>
          <Corner>{section.eyebrow || "Een ervaring"}</Corner>
          <figure className="quote mt-8"><blockquote>{testimonial.quote}</blockquote><figcaption><cite>{testimonial.anonymous ? "Anoniem" : testimonial.name}</cite></figcaption></figure>
        </section> : null;
      }
      case "homePartners":
        return partners.length ? <section className="poster tone-wit poster--auto" key={key}>
          <Corner>{section.eyebrow || "Samenwerking"}</Corner>
          <div className="actions mt-6">{partners.slice(0, section.limit || 8).map(partner => partner.website ? <a className="text-link" href={partner.website} key={partner.name} rel="noreferrer" target="_blank">{partner.name}</a> : <span key={partner.name}>{partner.name}</span>)}</div>
        </section> : null;
      default:
        return null;
    }
  });
}
