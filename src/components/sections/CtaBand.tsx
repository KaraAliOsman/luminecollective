import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";

type CtaBandProps = {
  title: string;
  body: string;
  primary: {
    label: string;
    href: string;
  };
  secondary?: {
    label: string;
    href: string;
  };
};

export function CtaBand({ title, body, primary, secondary }: CtaBandProps) {
  return (
    <section className="bg-gradient-cta relative py-10 text-warm-white sm:py-10 sm:py-14 md:py-20 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full border border-warm-white/5" />
      <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full border border-muted-gold/10" />

      <Container className="relative grid items-end gap-8 md:grid-cols-[1fr_auto]">
        <div className="max-w-3xl space-y-5">
          <Heading className="text-warm-white" size="lg">
            {title}
          </Heading>
          <p className="text-lg leading-8 text-warm-white/78">{body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
          <Button
            href={primary.href}
            variant="light"
          >
            {primary.label}
          </Button>
          {secondary && (
            <Button
              href={secondary.href}
              variant="outlineOnDark"
            >
              {secondary.label}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}
