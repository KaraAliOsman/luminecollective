import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CMSImage } from "@/components/ui/CMSImage";
import { Container } from "@/components/ui/Container";
import type { VisualPlaceholder } from "@/data/placeholders";
import type { SanityImageLike } from "@/types/cms";

type PageHeroProps = {
  eyebrow: string; title: string; body: string;
  visual: VisualPlaceholder; image?: SanityImageLike;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export function PageHero({ eyebrow, title, body, visual, image, primary, secondary }: PageHeroProps) {
  return <section className="subpage-hero">
    <CMSImage className="subpage-hero__visual" fallback={visual} image={image} priority sizes="100vw" />
    <Container>
      <div className="subpage-hero__copy">
        <p className="section-index">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="subpage-hero__intro">{body}</p>
        {(primary || secondary) && <div className="subpage-hero__actions">
          {primary && <Button href={primary.href} variant="light">{primary.label}<ArrowRight size={17} aria-hidden="true" /></Button>}
          {secondary && <Button href={secondary.href} variant="outlineOnDark">{secondary.label}</Button>}
        </div>}
      </div>
    </Container>
  </section>;
}
