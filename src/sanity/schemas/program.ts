import { defineField, defineType } from "sanity";

const required = "Dit veld is verplicht.";

export const programSchema = defineType({
  name: "program",
  title: "Programma",
  type: "document",
  groups: [
    { name: "content", title: "Inhoud", default: true },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Titel",
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
      title: "Korte beschrijving",
      type: "text",
      rows: 3,
      group: "content",
      description: "Korte tekst voor kaarten, Home en overzichtspagina's.",
      validation: (Rule) =>
        Rule.required().min(20).max(220).error("Gebruik 20 tot 220 tekens."),
    }),
    defineField({
      name: "longDescription",
      title: "Lange beschrijving",
      type: "array",
      group: "content",
      of: [{ type: "block" }],
      description: "Uitgebreide tekst voor de detailpagina.",
    }),
    defineField({
      name: "featuredImage",
      title: "Afbeelding",
      type: "image",
      group: "content",
      options: { hotspot: true },
      validation: (Rule) => Rule.required().error(required),
      fields: [
        defineField({
          name: "alt",
          title: "Alt-tekst",
          type: "string",
          description: "Beschrijf wat er op de foto te zien is.",
          validation: (Rule) => Rule.required().error("Alt-tekst is nodig."),
        }),
        defineField({ name: "caption", title: "Onderschrift", type: "string" }),
        defineField({ name: "credit", title: "Fotocredit", type: "string" }),
        defineField({
          name: "isPlaceholder",
          title: "Tijdelijke afbeelding",
          type: "boolean",
          initialValue: false,
        }),
      ],
    }),
    defineField({
      name: "category",
      title: "Categorie",
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
      title: "Voor wie",
      type: "text",
      rows: 2,
      group: "content",
      description: "Voor wie is dit programma bedoeld?",
    }),
    defineField({
      name: "goals",
      title: "Doelen",
      type: "array",
      group: "content",
      of: [{ type: "string" }],
      description: "Korte punten, bijvoorbeeld wat deelnemers meenemen.",
    }),
    defineField({
      name: "ctaLabel",
      title: "Knoptekst",
      type: "string",
      group: "content",
      initialValue: "Doe mee",
      validation: (Rule) => Rule.required().error(required),
    }),
    defineField({
      name: "ctaHref",
      title: "Knoplink",
      type: "string",
      group: "content",
      initialValue: "/doe-mee",
      validation: (Rule) => Rule.required().error(required),
    }),
    defineField({
      name: "seoTitle",
      title: "SEO-titel",
      type: "string",
      group: "seo",
      validation: (Rule) => Rule.max(70).error("Gebruik maximaal 70 tekens."),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta-beschrijving",
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
    { title: "Titel A-Z", name: "titleAsc", by: [{ field: "title", direction: "asc" }] },
  ],
});
