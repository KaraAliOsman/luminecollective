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
  tone?: "roos" | "wijn" | "blad" | "perzik" | "mint";
};

export function PageHero({ title, body, visual, image, primary, secondary, tone = "roos" }: PageHeroProps) {
  return <section className={`subpage-hero tone-${tone}`}>
    <CMSImage className="subpage-hero__visual" fallback={visual} image={image} priority sizes="100vw" />
    <Container>
      <div className="subpage-hero__copy">
        <div>
        <h1>{title}</h1>
        <p className="subpage-hero__intro">{body}</p>
        {(primary || secondary) && <div className="subpage-hero__actions">
          {primary && <Button href={primary.href}>{primary.label}<ArrowRight size={17} aria-hidden="true" /></Button>}
          {secondary && <Button href={secondary.href} variant="outlineOnDark">{secondary.label}</Button>}
        </div>}
        </div>
      </div>
    </Container>
  </section>;
}
