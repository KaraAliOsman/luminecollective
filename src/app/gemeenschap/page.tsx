import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/CtaBand";
import { CMSImage } from "@/components/ui/CMSImage";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import {
  getApprovedTestimonials,
  getPageByKey,
  getPublicGallery,
} from "@/lib/cms/content";
import { createMetadata } from "@/lib/seo/config";

const description =
  "Een blik op de momenten, ontmoetingen en verhalen die de gemeenschap van Lumina Collective vormen.";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageByKey("gemeenschap");

  return createMetadata({
    title: page?.seoTitle || "Onze Gemeenschap & Activiteiten",
    description: page?.metaDescription || description,
    path: "/gemeenschap",
  });
}

export default async function GemeenschapPage() {
  const [page, galleryItems, testimonials] = await Promise.all([
    getPageByKey("gemeenschap"),
    getPublicGallery(),
    getApprovedTestimonials(),
  ]);

  const getWeight = (item: (typeof galleryItems)[number]) => {
    const alt = item.alt || "";
    if (alt.includes("deelnemen") || alt.includes("Spreker")) return 2;
    return 1;
  };

  const getWeightSum = (items: typeof galleryItems) => {
    return items.reduce((sum, item) => sum + getWeight(item), 0);
  };

  // Enforce a perfect grid by calculating weights: double-width items count as 2, others as 1.
  // The total weight sum must be a multiple of 4 (min weight sum 12) for a perfect rectangle on PC.
  const displayItems = [...galleryItems];
  const fallbacks = await getPublicGallery();
  let fbIdx = 0;

  // First, pad up to a minimum weight of 12
  while (getWeightSum(displayItems) < 12) {
    const fb = fallbacks[fbIdx++ % fallbacks.length];
    displayItems.push({
      ...fb,
      id: `pad-${displayItems.length}`
    });
  }

  // Then, pad until total weight is a multiple of 4
  while (getWeightSum(displayItems) % 4 !== 0) {
    const fb = fallbacks[fbIdx++ % fallbacks.length];
    if (getWeight(fb) === 1) {
      displayItems.push({
        ...fb,
        id: `pad-weight-${displayItems.length}`
      });
    }
  }

  return (
    <>
      <section className="bg-gradient-hero py-10 sm:py-14 md:py-20">
        <Container>
          <FadeInSection>
            <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:items-end">
              <div>
                <Eyebrow>Gemeenschap</Eyebrow>
                <h1 className="mt-4 font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.02] text-deep-aubergine">
                  {page?.heroTitle || "Onze gemeenschap in beeld."}
                </h1>
              </div>
              <p className="text-lg leading-8 text-ink-brown/75 md:max-w-xl md:pb-2">
                {page?.heroText ||
                  "Een blik op de momenten, ontmoetingen en verhalen die onze gemeenschap vormen."}
              </p>
            </div>
          </FadeInSection>
        </Container>
      </section>

      <section className="pb-10 sm:pb-16 md:pb-24">
        <Container>
          <div
            className="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4"
            role="list"
            aria-label="Galerij van momenten"
          >
            {displayItems.map((item, index) => {
              const isDouble = getWeight(item) === 2;
              return (
                <FadeInSection
                  key={item.id}
                  animation="scale-in"
                  className={isDouble ? "col-span-1 lg:col-span-2" : "col-span-1"}
                  delay={Math.min(((index % 4) + 1) * 100, 300) as 100 | 200 | 300}
                >
                  <div role="listitem">
                    <div className="img-zoom overflow-hidden">
                      <CMSImage
                        altFallback={item.alt}
                        caption={item.caption}
                        className="h-40 sm:h-52 md:h-60"
                        fallback={item.visual}
                        image={item.image}
                      />
                    </div>
                  </div>
                </FadeInSection>
              );
            })}
          </div>

          <p
            className="mt-8 text-center text-xs text-warm-taupe"
            data-internal="privacy-filter-note"
          >
            Alle foto&apos;s worden alleen getoond met expliciete toestemming van
            de betrokken personen. Privéfoto&apos;s worden nooit gepubliceerd.
          </p>
        </Container>
      </section>

      {testimonials.length > 0 && (
        <section className="bg-soft-blush/30 py-10 sm:py-14 md:py-20">
          <Container>
            <FadeInSection>
              <div className="mx-auto mb-10 max-w-3xl text-center">
                <Eyebrow>Verhalen</Eyebrow>
                <Heading className="mt-4">
                  Elke vrouw brengt haar eigen verhaal mee.
                </Heading>
              </div>
            </FadeInSection>
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.slice(0, 6).map((testimonial, index) => (
                <FadeInSection key={testimonial.quote} delay={Math.min((index % 3 + 1) * 100, 300) as 100 | 200 | 300}>
                  <figure
                    className="border-t border-deep-aubergine/15 pt-6 transition-colors duration-300 hover:border-muted-gold/50"
                  >
                    <blockquote className="font-serif text-2xl leading-tight text-deep-aubergine">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-5 text-sm font-semibold uppercase tracking-[0.12em] text-warm-taupe">
                      {testimonial.anonymous ? "Anoniem" : testimonial.name}
                      {testimonial.roleOrContext ? ` — ${testimonial.roleOrContext}` : ""}
                    </figcaption>
                  </figure>
                </FadeInSection>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBand
        body="Word deel van de gemeenschap. Meedoen kan op jouw eigen manier en tempo."
        primary={{ label: "Doe mee", href: "/doe-mee" }}
        secondary={{ label: "Bekijk programma's", href: "/programmas" }}
        title="Maak deel uit van wat groeit."
      />
    </>
  );
}
