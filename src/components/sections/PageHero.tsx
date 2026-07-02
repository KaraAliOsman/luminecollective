import { Button } from "@/components/ui/Button";
import { CMSImage } from "@/components/ui/CMSImage";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Prose } from "@/components/ui/Prose";
import type { VisualPlaceholder as VisualPlaceholderType } from "@/data/placeholders";
import type { SanityImageLike } from "@/types/cms";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  body: string;
  visual: VisualPlaceholderType;
  image?: SanityImageLike;
  primary?: {
    label: string;
    href: string;
  };
  secondary?: {
    label: string;
    href: string;
  };
};

export function PageHero({
  eyebrow,
  title,
  body,
  visual,
  image,
  primary,
  secondary,
}: PageHeroProps) {
  return (
    <section className="bg-gradient-hero py-10 sm:py-12 md:py-20">
      <Container className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div className="max-w-3xl space-y-6">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading as="h1" size="xl">
            {title}
          </Heading>
          <Prose>
            <p>{body}</p>
          </Prose>
          {(primary || secondary) && (
            <div className="grid gap-3 pt-2 sm:inline-flex sm:flex-row">
              {primary && <Button href={primary.href}>{primary.label}</Button>}
              {secondary && (
                <Button href={secondary.href} variant="secondary">
                  {secondary.label}
                </Button>
              )}
            </div>
          )}
        </div>
        <div className="relative">
          {/* Decorative gold accent */}
          <div className="absolute -right-3 -top-3 z-10 hidden h-24 w-24 border-r-2 border-t-2 border-muted-gold/30 lg:block" />
          <div className="img-zoom overflow-hidden">
            <CMSImage
              className="h-[min(68vw,21rem)] min-h-0 sm:h-[24rem] lg:h-[30rem]"
              fallback={visual}
              image={image}
              priority
            />
          </div>
          {/* Decorative gold accent bottom */}
          <div className="absolute -bottom-3 -left-3 z-10 hidden h-24 w-24 border-b-2 border-l-2 border-muted-gold/30 lg:block" />
        </div>
      </Container>
    </section>
  );
}
