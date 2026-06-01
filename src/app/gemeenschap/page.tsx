import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/CtaBand";
import { CMSImage } from "@/components/ui/CMSImage";
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

function itemSize(index: number) {
  if (index === 0 || index === 7) return "large";
  if (index === 3 || index === 4) return "medium";
  return "small";
}

export default async function GemeenschapPage() {
  const [page, galleryItems, testimonials] = await Promise.all([
    getPageByKey("gemeenschap"),
    getPublicGallery(),
    getApprovedTestimonials(),
  ]);

  return (
    <>
      <section className="py-16 md:py-24">
        <Container>
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
        </Container>
      </section>

      <section className="pb-16 md:pb-24">
        <Container>
          <div
            className="grid gap-4 md:grid-cols-3"
            role="list"
            aria-label="Galerij van momenten"
          >
            {galleryItems.slice(0, 12).map((item, index) => {
              const size = itemSize(index);
              return (
                <div
                  key={item.id}
                  role="listitem"
                  className={
                    size === "large"
                      ? "md:col-span-2 md:row-span-2"
                      : size === "medium"
                        ? "md:col-span-1 md:row-span-2"
                        : ""
                  }
                >
                  <CMSImage
                    altFallback={item.alt}
                    caption={item.caption}
                    className={
                      size === "large"
                        ? "min-h-[22rem] md:min-h-[36rem]"
                        : size === "medium"
                          ? "min-h-[18rem] md:min-h-[28rem]"
                          : "min-h-[18rem]"
                    }
                    fallback={item.visual}
                    image={item.image}
                  />
                </div>
              );
            })}
          </div>

          <p
            className="mt-8 text-center text-xs text-warm-taupe"
            data-internal="privacy-filter-note"
          >
            Alle foto&apos;s worden alleen getoond met expliciete toestemming van
            de betrokken personen. Privefoto&apos;s worden nooit gepubliceerd.
          </p>
        </Container>
      </section>

      {testimonials.length > 0 && (
        <section className="bg-soft-blush/30 py-16 md:py-24">
          <Container>
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <Eyebrow>Verhalen</Eyebrow>
              <Heading className="mt-4">
                Elke vrouw brengt haar eigen verhaal mee.
              </Heading>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.slice(0, 6).map((testimonial) => (
                <figure
                  className="border-t border-deep-aubergine/15 pt-6"
                  key={testimonial.quote}
                >
                  <blockquote className="font-serif text-2xl leading-tight text-deep-aubergine">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 text-sm font-semibold uppercase tracking-[0.12em] text-warm-taupe">
                    {testimonial.anonymous ? "Anoniem" : testimonial.name}
                    {testimonial.roleOrContext ? ` - ${testimonial.roleOrContext}` : ""}
                  </figcaption>
                </figure>
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
