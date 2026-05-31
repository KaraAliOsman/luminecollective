import { defineField, defineType } from "sanity";

const required = "Dit veld is verplicht.";

export const programSchema = defineType({
  name: "program",
  title: "Program",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "content",
      validation: (Rule) =>
        Rule.required().min(3).max(90).error("Gebruik 3 tot 90 tekens."),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      options: { source: "title", maxLength: 90 },
      description: "Klik op Generate. Dit wordt de URL van het programma.",
      validation: (Rule) => Rule.required().error(required),
    }),
    defineField({
      name: "shortDescription",
      title: "Short description",
      type: "text",
      rows: 3,
      group: "content",
      description: "Korte tekst voor kaarten en overzichten.",
      validation: (Rule) =>
        Rule.required().min(20).max(220).error("Gebruik 20 tot 220 tekens."),
    }),
    defineField({
      name: "longDescription",
      title: "Long description",
      type: "array",
      group: "content",
      of: [{ type: "block" }],
      description: "Uitgebreide tekst voor de detailpagina later.",
    }),
    defineField({
      name: "featuredImage",
      title: "Featured image",
      type: "image",
      group: "content",
      options: { hotspot: true },
      validation: (Rule) => Rule.required().error(required),
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          validation: (Rule) => Rule.required().error("Alt text is nodig."),
        }),
        defineField({ name: "caption", title: "Caption", type: "string" }),
        defineField({ name: "credit", title: "Credit", type: "string" }),
        defineField({
          name: "isPlaceholder",
          title: "Is placeholder",
          type: "boolean",
          initialValue: false,
        }),
      ],
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      group: "content",
      options: {
        list: [
          { title: "Ontmoeting", value: "ontmoeting" },
          { title: "Groei", value: "groei" },
          { title: "Cultuur", value: "cultuur" },
          { title: "Ondersteuning", value: "ondersteuning" },
          { title: "Participatie", value: "participatie" },
          { title: "Community", value: "community" },
        ],
      },
      validation: (Rule) => Rule.required().error(required),
    }),
    defineField({
      name: "targetAudience",
      title: "Target audience",
      type: "text",
      rows: 2,
      group: "content",
      description: "Voor wie is dit programma bedoeld?",
    }),
    defineField({
      name: "goals",
      title: "Goals",
      type: "array",
      group: "content",
      of: [{ type: "string" }],
      description: "Korte punten, bijvoorbeeld wat deelnemers meenemen.",
    }),
    defineField({
      name: "ctaLabel",
      title: "CTA label",
      type: "string",
      group: "content",
      initialValue: "Doe mee",
      validation: (Rule) => Rule.required().error(required),
    }),
    defineField({
      name: "ctaHref",
      title: "CTA href",
      type: "string",
      group: "content",
      initialValue: "/doe-mee",
      validation: (Rule) => Rule.required().error(required),
    }),
    defineField({
      name: "seoTitle",
      title: "SEO title",
      type: "string",
      group: "seo",
      validation: (Rule) => Rule.max(70).error("Gebruik maximaal 70 tekens."),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta description",
      type: "text",
      rows: 2,
      group: "seo",
      validation: (Rule) => Rule.max(160).error("Gebruik maximaal 160 tekens."),
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "featuredImage" },
  },
  orderings: [
    { title: "Title A-Z", name: "titleAsc", by: [{ field: "title", direction: "asc" }] },
  ],
});
