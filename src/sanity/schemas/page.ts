import { defineField, defineType } from "sanity";

const required = "Dit veld is verplicht.";

export const pageSchema = defineType({
  name: "page",
  title: "Pagina",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Paginanaam",
      type: "string",
      group: "content",
      description: "Interne naam van de pagina in het beheer.",
      validation: (Rule) => Rule.required().error(required),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      options: { source: "title", maxLength: 90 },
      description: "URL-naam. Voor vaste pagina's staat deze meestal al goed.",
      validation: (Rule) => Rule.required().error(required),
    }),
    defineField({
      name: "pageKey",
      title: "Vaste pagina",
      type: "string",
      group: "content",
      description: "Laat dit staan voor de vaste pagina die je bewerkt.",
      options: {
        list: [
          { title: "Home", value: "home" },
          { title: "Over ons", value: "over-ons" },
          { title: "Programma's", value: "programmas" },
          { title: "Agenda", value: "agenda" },
          { title: "Doe mee", value: "doe-mee" },
          { title: "Contact", value: "contact" },
          { title: "Gemeenschap", value: "gemeenschap" },
          { title: "Nieuws", value: "nieuws" },
        ],
      },
      validation: (Rule) => Rule.required().error(required),
    }),
    defineField({
      name: "heroTitle",
      title: "Grote titel bovenaan",
      type: "string",
      group: "content",
      description: "De belangrijkste titel bovenaan de pagina.",
      validation: (Rule) => Rule.required().error(required),
    }),
    defineField({
      name: "heroText",
      title: "Introductietekst bovenaan",
      type: "text",
      rows: 3,
      group: "content",
      description: "Korte warme introductie. Houd dit rustig en helder.",
      validation: (Rule) =>
        Rule.required().max(260).error("Gebruik maximaal 260 tekens."),
    }),
    defineField({
      name: "heroImage",
      title: "Afbeelding bovenaan",
      type: "image",
      group: "content",
      options: { hotspot: true },
      description: "Gebruik een warme, echte foto met duidelijke alt-tekst.",
      fields: [
        defineField({
          name: "alt",
          title: "Alt-tekst",
          type: "string",
          description: "Beschrijf wat er op de afbeelding te zien is.",
          validation: (Rule) => Rule.required().error("Alt-tekst is nodig."),
        }),
        defineField({
          name: "isPlaceholder",
          title: "Tijdelijke afbeelding",
          type: "boolean",
          initialValue: false,
          description: "Zet aan als deze foto later vervangen moet worden.",
        }),
      ],
    }),
    defineField({
      name: "body",
      title: "Extra tekstblokken",
      type: "array",
      group: "content",
      of: [{ type: "block" }],
      description: "Optioneel. Gebruik voor langere tekst op de pagina.",
    }),
    defineField({
      name: "seoTitle",
      title: "SEO-titel",
      type: "string",
      group: "seo",
      description: "Laat leeg als de gewone paginatitel goed genoeg is.",
      validation: (Rule) => Rule.max(70).error("Gebruik maximaal 70 tekens."),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta-beschrijving",
      type: "text",
      rows: 2,
      group: "seo",
      description: "Korte tekst voor Google en social previews.",
      validation: (Rule) => Rule.max(160).error("Gebruik maximaal 160 tekens."),
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "slug.current", media: "heroImage" },
  },
});
