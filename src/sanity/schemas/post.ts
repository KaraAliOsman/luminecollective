import { defineField, defineType } from "sanity";

export const postSchema = defineType({
  name: "post",
  title: "Nieuws & verhaal",
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
      description: "Gebruik een heldere titel, zonder clickbait.",
      validation: (Rule) => Rule.required().min(5).max(100),
    }),
    defineField({
      name: "slug",
      title: "URL (slug)",
      type: "slug",
      group: "content",
      options: { source: "title", maxLength: 96 },
      description: "Klik op Generate. Dit wordt de URL van het artikel.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Categorie",
      type: "string",
      group: "content",
      options: {
        list: [
          { title: "Nieuws", value: "nieuws" },
          { title: "Verhalen", value: "verhalen" },
          { title: "Interviews", value: "interviews" },
          { title: "Terugblik", value: "terugblik" },
          { title: "Kennis", value: "kennis" },
          { title: "Persbericht", value: "persbericht" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Publicatiedatum",
      type: "datetime",
      group: "content",
      description: "Kies de datum waarop dit artikel zichtbaar mag zijn.",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Auteur",
      type: "string",
      group: "content",
      initialValue: "Stichting Lumina Collective",
      description: "Laat staan als er geen specifieke auteur is.",
    }),
    defineField({
      name: "excerpt",
      title: "Samenvatting",
      type: "text",
      rows: 3,
      group: "content",
      description: "Korte introductie voor de artikellijst (max. 200 tekens).",
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "featuredImage",
      title: "Uitgelichte afbeelding",
      type: "image",
      group: "content",
      options: { hotspot: true },
      description: "Gebruik een echte, warme foto. Alt-tekst is verplicht.",
      fields: [
        defineField({
          name: "alt",
          title: "Alt-tekst",
          type: "string",
          description: "Beschrijf wat er op de foto te zien is.",
          validation: (Rule) => Rule.required(),
        }),
        defineField({ name: "caption", title: "Onderschrift", type: "string" }),
        defineField({ name: "credit", title: "Fotocredit", type: "string" }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      title: "Inhoud",
      type: "array",
      group: "content",
      description: "Schrijf rustig en leesbaar. Gebruik H2 voor tussenkoppen.",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "Alt-tekst", type: "string" }),
            defineField({ name: "caption", title: "Onderschrift", type: "string" }),
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "seoTitle",
      title: "SEO-titel",
      type: "string",
      description: "Laat leeg om de artikeltitel te gebruiken.",
      group: "seo",
    }),
    defineField({
      name: "metaDescription",
      title: "Meta-beschrijving",
      type: "text",
      rows: 2,
      validation: (Rule) => Rule.max(160),
      group: "seo",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "publishedAt",
      media: "featuredImage",
    },
    prepare({ title, subtitle, media }) {
      const date = subtitle
        ? new Date(subtitle as string).toLocaleDateString("nl-NL")
        : "Geen datum";
      return { title, subtitle: date, media };
    },
  },
  orderings: [
    { title: "Publicatiedatum (nieuwste eerst)", name: "publishedDesc", by: [{ field: "publishedAt", direction: "desc" }] },
  ],
});
