import type { Metadata } from "next";

import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { StructuredData } from "@/components/seo/StructuredData";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { visuals } from "@/data/placeholders";
import { getPageByKey, getSiteSettings } from "@/lib/cms/content";
import { socialLinks } from "@/lib/constants/social";
import { createMetadata } from "@/lib/seo/config";
import { contactPageJsonLd } from "@/lib/seo/jsonLd";

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

  return (
    <>
      <StructuredData data={contactPageJsonLd({ description: pageDescription })} />

      <PageHero
        body={
          page?.heroText ||
          "Heb je een vraag, idee of voorstel voor samenwerking? We horen graag van je."
        }
        eyebrow="Contact"
        image={page?.heroImage}
        primary={{ label: "Stuur een bericht", href: "#contact-form" }}
        secondary={{ label: "Doe mee", href: "/doe-mee" }}
        title={page?.heroTitle || "Een helder begin voor contact en samenwerking."}
        visual={visuals.communityTable}
      />

      <section className="py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="space-y-10">
            <div className="space-y-4">
              <Eyebrow>Email</Eyebrow>
              {contactEmail ? (
                <a
                  className="font-serif text-3xl text-deep-aubergine underline decoration-muted-gold/55 underline-offset-8 transition hover:decoration-deep-aubergine"
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
                We tonen geen contactgegevens die nog niet officieel bevestigd zijn.
              </p>
            </div>
            <div>
              <Eyebrow>Social media</Eyebrow>
              <ul className="mt-5 grid gap-3">
                {socials.map((item) => (
                  <li key={item.href}>
                    <a
                      className="text-lg font-semibold text-deep-aubergine underline decoration-muted-gold/45 underline-offset-8 transition hover:decoration-deep-aubergine"
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

          <div className="bg-warm-white p-6 md:p-10" id="contact-form">
            <div className="mb-8 space-y-3">
              <Eyebrow>Contactformulier</Eyebrow>
              <Heading size="md">Stuur een bericht.</Heading>
              <p className="text-ink-brown/72">
                We gebruiken je gegevens alleen om op je bericht te reageren.
              </p>
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
