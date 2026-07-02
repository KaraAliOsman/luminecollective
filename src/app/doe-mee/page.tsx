import type { Metadata } from "next";

import { VolunteerForm } from "@/components/forms/VolunteerForm";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { VisualPlaceholder } from "@/components/ui/VisualPlaceholder";
import { visuals } from "@/data/placeholders";
import { getPageByKey } from "@/lib/cms/content";
import { createMetadata } from "@/lib/seo/config";

const description =
  "Ontdek hoe je kunt deelnemen, vrijwilliger worden, partner worden, doneren of een verhaal delen met Lumina Collective.";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageByKey("doe-mee");

  return createMetadata({
    title: page?.seoTitle || "Doe Mee & Vrijwilliger Worden",
    description: page?.metaDescription || description,
    path: "/doe-mee",
  });
}

const options = [
  {
    title: "Deelnemer worden",
    text: "Kom naar een bijeenkomst, leer de community kennen en ontdek wat bij jou past.",
    icon: "01",
  },
  {
    title: "Vrijwilliger worden",
    text: "Draag bij met tijd, kennis, organisatiekracht of warme aanwezigheid.",
    icon: "02",
  },
  {
    title: "Partner worden",
    text: "Werk met ons samen rond programma's, locaties, kennis of zichtbaarheid.",
    icon: "03",
  },
  {
    title: "Doneren / donatie interesse",
    text: "Steun activiteiten die ruimte maken voor meer vrouwen in de community.",
    icon: "04",
  },
  {
    title: "Verhaal delen",
    text: "Breng een ervaring, idee of perspectief in dat anderen kan raken.",
    icon: "05",
  },
];

export default async function DoeMeePage() {
  const page = await getPageByKey("doe-mee");

  return (
    <>
      <PageHero
        body={
          page?.heroText ||
          "Meedoen hoeft niet groot te beginnen. Je kunt aansluiten als deelnemer, vrijwilliger, partner, donateur of door een verhaal te delen."
        }
        eyebrow="Doe mee"
        image={page?.heroImage}
        primary={{ label: "Neem contact op", href: "/contact" }}
        secondary={{ label: "Bekijk programma's", href: "/programmas" }}
        title={page?.heroTitle || "Jouw betrokkenheid maakt ruimte voor meer vrouwen."}
        visual={visuals.participation}
      />

      <section className="py-10 sm:py-14 md:py-20">
        <Container>
          <FadeInSection>
            <div className="mb-12 max-w-3xl space-y-4">
              <Eyebrow>Manieren om mee te doen</Eyebrow>
              <Heading>Kies een vorm die past bij jou.</Heading>
            </div>
          </FadeInSection>
          <div className="grid gap-5 sm:grid-cols-2">
            {options.map((option, index) => (
              <FadeInSection key={option.title} delay={Math.min((index + 1) * 100, 500) as 100 | 200 | 300 | 400 | 500}>
                <article
                  className="group border-t border-deep-aubergine/15 bg-warm-white/45 p-6 pt-7 transition-all duration-300 hover:bg-warm-white hover:shadow-[0_8px_30px_rgba(66,21,47,0.06)] hover:border-muted-gold/40"
                >
                  <p className="text-sm font-semibold text-muted-gold">
                    {option.icon}
                  </p>
                  <h3 className="mt-5 font-serif text-3xl text-deep-aubergine transition group-hover:text-wine-plum">
                    {option.title}
                  </h3>
                  <p className="mt-4 max-w-xl leading-7 text-ink-brown/75">
                    {option.text}
                  </p>
                </article>
              </FadeInSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-warm-white py-10 sm:py-14 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <FadeInSection animation="slide-left">
            <div className="space-y-5">
              <Eyebrow>Aanmeldformulier</Eyebrow>
              <Heading size="md">Vertel hoe je wilt bijdragen.</Heading>
              <p className="text-lg leading-8 text-ink-brown/75">
                We zoeken vrouwen en partners die met aandacht willen bijdragen. Een
                eerste bericht is genoeg om te verkennen wat mogelijk is.
              </p>
            </div>
          </FadeInSection>
          <FadeInSection animation="slide-right">
            <div>
              <VolunteerForm />
            </div>
          </FadeInSection>
        </Container>
      </section>

      <section className="bg-soft-blush/35 py-10 sm:py-14 md:py-20">
        <Container className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <FadeInSection animation="slide-left">
            <div className="space-y-5">
              <Eyebrow>Zacht en concreet</Eyebrow>
              <Heading>We zoeken geen perfecte profielen.</Heading>
              <p className="text-lg leading-8 text-ink-brown/78">
                We zoeken vrouwen en partners die met aandacht willen bijdragen.
                Een eerste bericht is genoeg om te verkennen wat mogelijk is.
              </p>
            </div>
          </FadeInSection>
          <FadeInSection animation="slide-right">
            <div className="img-zoom overflow-hidden">
              <VisualPlaceholder className="h-72 sm:h-80 md:h-[27rem]" visual={visuals.supportCircle} />
            </div>
          </FadeInSection>
        </Container>
      </section>

      <CtaBand
        body="Vertel kort wie je bent en hoe je betrokken wilt zijn. We reageren persoonlijk en zorgvuldig."
        primary={{ label: "Contact opnemen", href: "/contact" }}
        title="Laat ons weten hoe je wilt meedoen."
      />
    </>
  );
}
