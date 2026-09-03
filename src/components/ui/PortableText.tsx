import { PortableText as SanityPortableText } from "@portabletext/react";
import type { SanityBlock } from "@/types/sanity";

const components = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="mt-5 leading-[1.85] text-ink-brown/78 first:mt-0 last:mb-0">
        {children}
      </p>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="mt-10 mb-4 font-serif text-3xl font-normal leading-tight text-deep-aubergine">
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="mt-8 mb-3 font-serif text-2xl font-normal leading-tight text-deep-aubergine">
        {children}
      </h3>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="my-6 border-l-2 border-muted-gold/60 pl-6 font-serif text-xl italic text-deep-aubergine/85">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="my-5 list-disc space-y-2 pl-5 text-ink-brown/78">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="my-5 list-decimal space-y-2 pl-5 text-ink-brown/78">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="pl-1 leading-[1.75]">
        {children}
      </li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <li className="leading-[1.75]">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-semibold text-ink-brown">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="font-serif italic text-deep-aubergine/90">{children}</em>
    ),
    link: ({
      value,
      children,
    }: {
      value?: { href: string };
      children?: React.ReactNode;
    }) => (
      <a
        href={value?.href}
        className="text-deep-aubergine underline underline-offset-4 decoration-muted-gold/50 transition hover:decoration-deep-aubergine"
        target={value?.href?.startsWith("http") ? "_blank" : undefined}
        rel={value?.href?.startsWith("http") ? "noreferrer" : undefined}
      >
        {children}
      </a>
    ),
  },
};

export function PortableText({ value }: { value: SanityBlock[] }) {
  return (
    <div className="max-w-prose">
      <SanityPortableText value={value} components={components} />
    </div>
  );
}
