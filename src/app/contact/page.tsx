import type { Metadata } from "next";

import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { StructuredData } from "@/components/seo/StructuredData";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { visuals } from "@/data/placeholders";
import { getPageByKey, getSiteSettings } from "@/lib/cms/content";
import { socialLinks } from "@/lib/constants/social";
import { createMetadata } from "@/lib/seo/config";
import { contactPageJsonLd } from "@/lib/seo/jsonLd";
import { brand } from "@/lib/constants/brand";

const description =
  "Neem contact op met Stichting Lumina Collective voor vragen, deelname, vrijwilligerswerk of samenwerking.";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageByKey("contact");

  return createMetadata({
    title: page?.seoTitle || "Contact & Bereikbaarheid",
    description: page?.metaDescription || description,
    path: "/contact",
  });
}

export default async function ContactPage() {
  const [page, settings] = await Promise.all([
    getPageByKey("contact"),
    getSiteSettings(),
  ]);
  const pageDescription = page?.metaDescription || description;
  const contactEmail = settings.contactEmail;
  const socials = settings.socialLinks.length ? settings.socialLinks : socialLinks;
  const address = `${brand.address.street}, ${brand.address.postalCode} ${brand.address.city}`;

  return (
    <>
      <StructuredData data={contactPageJsonLd({ description: pageDescription })} />

      <PageHero
        body={
          page?.heroText ||
          "Heb je een vraag, wil je meedoen of zie je een samenwerking in Tilburg? Stuur ons een bericht en we reageren zorgvuldig."
        }
        eyebrow="Contact"
        image={page?.heroImage}
        primary={{ label: "Stuur een bericht", href: "#contact-form" }}
        secondary={{ label: "Doe mee", href: "/doe-mee" }}
        title={page?.heroTitle || "Een helder begin voor contact, deelname en samenwerking."}
        visual={visuals.communityTable}
      />

      <section className="py-10 sm:py-14 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <FadeInSection animation="slide-left">
            <aside className="space-y-10">
              <div className="space-y-4">
                <Eyebrow>Email</Eyebrow>
                {contactEmail ? (
                  <a
                    className="font-serif text-xl sm:text-2xl md:text-3xl text-deep-aubergine break-all underline decoration-muted-gold/55 underline-offset-8 transition hover:decoration-deep-aubergine"
                    href={`mailto:${contactEmail}`}
                  >
                    {contactEmail}
                  </a>
                ) : (
                  <p className="font-serif text-3xl text-deep-aubergine">
                    E-mail wordt binnenkort gedeeld.
                  </p>
                )}
                <p className="text-sm italic text-warm-taupe">
                  Gebruik het formulier als er nog geen direct e-mailadres zichtbaar is.
                </p>
              </div>
              <div className="space-y-4">
                <Eyebrow>Vestiging</Eyebrow>
                <p className="font-serif text-3xl leading-tight text-deep-aubergine">
                  {address}
                </p>
                <p className="text-ink-brown/70">{brand.address.country}</p>
              </div>
              <div>
                <Eyebrow>Social media</Eyebrow>
                <ul className="mt-5 grid gap-3">
                  {socials.map((item) => (
                    <li key={item.href}>
                      <a
                        className="text-lg font-semibold text-deep-aubergine underline decoration-muted-gold/45 underline-offset-8 transition-all duration-250 hover:decoration-deep-aubergine hover:translate-x-0.5"
                        href={item.href}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </FadeInSection>

          <FadeInSection animation="slide-right">
            <div className="glass rounded-sm p-6 md:p-10" id="contact-form">
              <div className="mb-8 space-y-3">
                <Eyebrow>Contactformulier</Eyebrow>
                <Heading size="md">Stuur een bericht.</Heading>
                <p className="text-ink-brown/72">
                  We gebruiken je gegevens alleen om op je bericht te reageren.
                </p>
              </div>
              <ContactForm />
            </div>
          </FadeInSection>
        </Container>
      </section>
    </>
  );
}
