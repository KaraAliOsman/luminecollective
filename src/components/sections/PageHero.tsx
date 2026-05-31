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
    <section className="py-14 md:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-7">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading as="h1" size="xl">
            {title}
          </Heading>
          <Prose>
            <p>{body}</p>
          </Prose>
          {(primary || secondary) && (
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              {primary && <Button href={primary.href}>{primary.label}</Button>}
              {secondary && (
                <Button href={secondary.href} variant="secondary">
                  {secondary.label}
                </Button>
              )}
            </div>
          )}
        </div>
        <CMSImage
          className="min-h-[28rem]"
          fallback={visual}
          image={image}
          priority
        />
      </Container>
    </section>
  );
}
