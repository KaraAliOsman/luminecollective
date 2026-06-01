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
    <section className="bg-deep-aubergine py-16 text-warm-white md:py-20">
      <Container className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
        <div className="max-w-3xl space-y-5">
          <Heading className="text-warm-white" size="lg">
            {title}
          </Heading>
          <p className="text-lg leading-8 text-warm-white/78">{body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
          <Button
            className="border-warm-white bg-warm-white text-deep-aubergine hover:bg-soft-linen"
            href={primary.href}
          >
            {primary.label}
          </Button>
          {secondary && (
            <Button
              className="border-warm-white/35 bg-transparent text-warm-white hover:border-warm-white hover:bg-warm-white/10"
              href={secondary.href}
              variant="secondary"
            >
              {secondary.label}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}
