import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";

export function CtaBand({ title, body, primary, secondary }: {
  title: string; body: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return <section className="cta-band">
    <Container className="cta-band__inner">
      <Heading>{title}</Heading>
      <div><p>{body}</p><div className="actions">
        <Button href={primary.href}>{primary.label}<ArrowRight size={17} aria-hidden="true" /></Button>
        {secondary && <Button href={secondary.href} variant="secondary">{secondary.label}</Button>}
      </div></div>
    </Container>
  </section>;
}
