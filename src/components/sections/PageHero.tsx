import { Button } from "@/components/ui/Button";
import { CMSImage } from "@/components/ui/CMSImage";
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
    <section className="subpage-hero">
      <div className="site-container subpage-hero__grid">
        <div className="subpage-hero__copy">
          <p className="section-index">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="subpage-hero__intro">{body}</p>
          {(primary || secondary) && (
            <div className="subpage-hero__actions">
              {primary && <Button href={primary.href}>{primary.label}</Button>}
              {secondary && (
                <Button href={secondary.href} variant="secondary">
                  {secondary.label}
                </Button>
              )}
            </div>
          )}
        </div>
        <div className="subpage-hero__visual">
          <CMSImage className="subpage-hero__image" fallback={visual} image={image} priority />
          <span aria-hidden="true"><i />013<small>Tilburg</small></span>
        </div>
      </div>
    </section>
  );
}
