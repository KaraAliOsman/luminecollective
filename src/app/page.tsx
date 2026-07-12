import type { Metadata } from "next";
import Link from "next/link";

import { StructuredData } from "@/components/seo/StructuredData";
import { CMSImage } from "@/components/ui/CMSImage";
import { visuals } from "@/data/placeholders";
import {
  getApprovedTestimonials,
  getPageByKey,
  getPrograms,
  getPublicGallery,
  getUpcomingEvents,
  getVisiblePartners,
} from "@/lib/cms/content";
import { createMetadata } from "@/lib/seo/config";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo/jsonLd";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageByKey("home");
  return createMetadata({
    title: page?.seoTitle && page.seoTitle !== "Home" ? page.seoTitle : "Samen groeit meer",
    description: page?.metaDescription || "Lumina brengt vrouwen in Tilburg samen rond ontmoeting, ontwikkeling en cultuur.",
    path: "/",
  });
}

export default async function Home() {
  const [page, programs, events, gallery, testimonials, partners] = await Promise.all([
    getPageByKey("home"),
    getPrograms(),
    getUpcomingEvents(),
    getPublicGallery(),
    getApprovedTestimonials(),
    getVisiblePartners(),
  ]);
  const event = events[0];

  return (
    <>
      <StructuredData data={organizationJsonLd()} />
      <StructuredData data={websiteJsonLd()} />

      <section className="studio-hero">
        <CMSImage
          className="studio-hero__image"
          fallback={visuals.communityTable}
          image={page?.heroImage}
          imageClassName="object-center"
          priority
          sizes="100vw"
        />
        <div className="studio-hero__shade" />
        <div className="site-container studio-hero__inner">
          <div className="studio-hero__copy">
            <p className="studio-label studio-label--light">Stichting Lumina · Tilburg</p>
            <h1>Samen<br /><em>groeit meer.</em></h1>
            <p>{page?.heroText || "Een plek waar vrouwen elkaar ontmoeten, hun verhaal delen en samen de volgende stap zetten."}</p>
            <div className="studio-actions">
              <Link className="studio-button studio-button--light" href="/doe-mee">Doe mee</Link>
              <Link className="studio-link studio-link--light" href="/over-ons">Leer ons kennen <span>→</span></Link>
            </div>
          </div>
          <nav className="studio-hero__routes" aria-label="Uitgelichte onderdelen">
            {programs.slice(0, 3).map((program, index) => (
              <Link href={`/programmas/${program.slug}`} key={program.slug}>
                <span>0{index + 1}</span>
                <strong>{program.title}</strong>
                <i aria-hidden="true">↗</i>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="studio-intro">
        <div className="site-container studio-intro__grid">
          <div>
            <p className="studio-label">Waarom Lumina</p>
            <h2>Je hoeft het niet<br />alleen te doen.</h2>
          </div>
          <div className="studio-intro__body">
            <p className="studio-intro__lead">Lumina is een gemeenschap van vrouwen met verschillende verhalen, achtergronden en ambities.</p>
            <p>We organiseren ontmoetingen, workshops en culturele activiteiten. Niet vanuit een vast beeld van wat vrouwen nodig hebben, maar vanuit wat zij zelf inbrengen.</p>
            <Link className="studio-link" href="/over-ons">Dit is onze aanpak <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="studio-programs">
        <div className="site-container">
          <header className="studio-heading">
            <div>
              <p className="studio-label">Onze programma&apos;s</p>
              <h2>Ruimte om te ontmoeten,<br /><em>leren en maken.</em></h2>
            </div>
            <Link className="studio-link" href="/programmas">Bekijk alles <span>→</span></Link>
          </header>
          <div className="studio-programs__grid">
            {programs.slice(0, 3).map((program, index) => (
              <article className="studio-program" key={program.slug}>
                <Link href={`/programmas/${program.slug}`} className="studio-program__image-link" tabIndex={-1}>
                  <CMSImage className="studio-program__image" fallback={program.visual} image={program.image} sizes="(min-width: 768px) 33vw, 100vw" />
                  <span>0{index + 1}</span>
                </Link>
                <h3><Link href={`/programmas/${program.slug}`}>{program.title}</Link></h3>
                <p>{program.description}</p>
                <Link className="studio-link" href={`/programmas/${program.slug}`}>Ontdek meer <span>→</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {event && (
        <section className="studio-event">
          <div className="site-container studio-event__grid">
            <div className="studio-event__visual">
              <CMSImage className="studio-event__image" fallback={event.visual} image={event.image} sizes="(min-width: 768px) 50vw, 100vw" />
              <span>AGENDA</span>
            </div>
            <div className="studio-event__copy">
              <p className="studio-label studio-label--light">De volgende ontmoeting</p>
              <p className="studio-event__date">{event.date} · {event.location}</p>
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              <Link className="studio-button studio-button--light" href={`/agenda/${event.slug}`}>Bekijk de activiteit</Link>
            </div>
          </div>
        </section>
      )}

      <section className="studio-community">
        <div className="site-container">
          <header className="studio-heading">
            <div>
              <p className="studio-label">Onze gemeenschap</p>
              <h2>Dit gebeurt wanneer<br /><em>mensen samenkomen.</em></h2>
            </div>
            <Link className="studio-link" href="/gemeenschap">Bekijk de gemeenschap <span>→</span></Link>
          </header>
          <div className="studio-community__grid">
            {gallery.slice(0, 4).map((item, index) => (
              <CMSImage
                altFallback={item.alt}
                className={`studio-community__image studio-community__image--${index + 1}`}
                fallback={item.visual}
                image={item.image}
                key={item.id}
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="studio-quote">
        <div className="site-container studio-quote__inner">
          <span aria-hidden="true">“</span>
          <blockquote>{testimonials[0]?.quote || "Ik kwam binnen zonder iemand te kennen. Ik ging naar huis met het gevoel dat ik ergens bij hoor."}</blockquote>
          <p>{testimonials[0] ? (testimonials[0].anonymous ? "Deelnemer, anoniem" : testimonials[0].name) : "Een deelnemer van Lumina"}</p>
        </div>
      </section>

      {partners.length > 0 && (
        <section className="studio-partners">
          <div className="site-container">
            <p className="studio-label">Samen met</p>
            <div>{partners.slice(0, 8).map((partner) => <span key={partner.name}>{partner.name}</span>)}</div>
          </div>
        </section>
      )}

      <section className="studio-cta">
        <div className="site-container studio-cta__inner">
          <div>
            <p className="studio-label studio-label--light">Welkom bij Lumina</p>
            <h2>Kom een keer<br /><em>naast ons zitten.</em></h2>
          </div>
          <div>
            <p>Een eerste bezoek, een vraag of een idee: zo begint het vaak.</p>
            <div className="studio-actions">
              <Link className="studio-button studio-button--light" href="/doe-mee">Ik wil meedoen</Link>
              <Link className="studio-link studio-link--light" href="/contact">Neem contact op <span>→</span></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
