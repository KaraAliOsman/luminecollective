import { defineField, defineType } from "sanity";

const required = "Dit veld is verplicht.";

export const pageSchema = defineType({
  name: "page",
  title: "Page",
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
      validation: (Rule) => Rule.required().error(required),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      options: { source: "title", maxLength: 90 },
      validation: (Rule) => Rule.required().error(required),
    }),
    defineField({
      name: "pageKey",
      title: "MVP page",
      type: "string",
      group: "content",
      description: "Kies een vaste MVP-pagina als dit content voor een bestaande route is.",
      options: {
        list: [
          { title: "Home", value: "home" },
          { title: "Over ons", value: "over-ons" },
          { title: "Programma's", value: "programmas" },
          { title: "Agenda", value: "agenda" },
          { title: "Doe mee", value: "doe-mee" },
          { title: "Contact", value: "contact" },
        ],
      },
    }),
    defineField({
      name: "heroTitle",
      title: "Hero title",
      type: "string",
      group: "content",
      validation: (Rule) => Rule.required().error(required),
    }),
    defineField({
      name: "heroText",
      title: "Hero text",
      type: "text",
      rows: 3,
      group: "content",
      validation: (Rule) =>
        Rule.required().max(260).error("Gebruik maximaal 260 tekens."),
    }),
    defineField({
      name: "heroImage",
      title: "Hero image",
      type: "image",
      group: "content",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          validation: (Rule) => Rule.required().error("Alt text is nodig."),
        }),
        defineField({
          name: "isPlaceholder",
          title: "Is placeholder",
          type: "boolean",
          initialValue: false,
        }),
      ],
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      group: "content",
      of: [{ type: "block" }],
      description: "Algemene tekstblokken voor latere CMS-koppeling.",
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
    select: { title: "title", subtitle: "slug.current", media: "heroImage" },
  },
});
