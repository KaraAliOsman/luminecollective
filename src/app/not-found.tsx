import Link from "next/link";

import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-20">
      <Container className="max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-gold">
          404
        </p>
        <h1 className="mt-4 font-serif text-[clamp(2.25rem,5vw,4rem)] text-deep-aubergine">
          Pagina niet gevonden.
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-lg leading-8 text-ink-brown/72">
          De pagina die je zoekt bestaat niet of is verplaatst. Keer terug naar
          de homepagina of bekijk ons aanbod.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            className="inline-flex min-h-11 items-center border border-deep-aubergine bg-deep-aubergine px-5 py-3 text-sm font-semibold text-warm-white transition hover:bg-wine-plum"
            href="/"
          >
            Terug naar home
          </Link>
          <Link
            className="inline-flex min-h-11 items-center border border-deep-aubergine/25 px-5 py-3 text-sm font-semibold text-deep-aubergine transition hover:bg-deep-aubergine/5"
            href="/contact"
          >
            Neem contact op
          </Link>
        </div>
      </Container>
    </section>
  );
}
