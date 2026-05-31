import { defineField, defineType } from "sanity";

const required = "Dit veld is verplicht.";

export const eventSchema = defineType({
  name: "event",
  title: "Activiteit",
  type: "document",
  groups: [
    { name: "content", title: "Inhoud", default: true },
    { name: "details", title: "Details" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
      group: "content",
      validation: (Rule) =>
        Rule.required().min(3).max(100).error("Gebruik 3 tot 100 tekens."),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      options: { source: "title", maxLength: 90 },
      description: "Klik op Generate. Dit wordt later de event-URL.",
      validation: (Rule) => Rule.required().error(required),
    }),
    defineField({
      name: "description",
      title: "Beschrijving",
      type: "array",
      group: "content",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required().error(required),
    }),
    defineField({
      name: "program",
      title: "Gekoppeld programma",
      type: "reference",
      group: "content",
      to: [{ type: "program" }],
      description: "Koppel dit event aan een programma als er een duidelijke relatie is.",
    }),
    defineField({
      name: "dateStart",
      title: "Startdatum",
      type: "datetime",
      group: "details",
      validation: (Rule) => Rule.required().error(required),
    }),
    defineField({
      name: "dateEnd",
      title: "Einddatum",
      type: "datetime",
      group: "details",
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const start = context.document?.dateStart;
          if (value && start && new Date(String(value)) < new Date(String(start))) {
            return "Einddatum moet na de startdatum liggen.";
          }
          return true;
        }),
    }),
    defineField({
      name: "locationName",
      title: "Locatienaam",
      type: "string",
      group: "details",
      description: "Bijvoorbeeld de plaats of locatie. Geen adres invullen als dit nog niet zeker is.",
    }),
    defineField({
      name: "locationAddress",
      title: "Adres",
      type: "text",
      rows: 2,
      group: "details",
      description: "Alleen invullen als dit openbaar gedeeld mag worden.",
    }),
    defineField({
      name: "registrationUrl",
      title: "Aanmeldlink",
      type: "url",
      group: "details",
      description: "Laat leeg als aanmelden via contact loopt.",
    }),
    defineField({
      name: "isFree",
      title: "Gratis",
      type: "boolean",
      group: "details",
      initialValue: true,
    }),
    defineField({
      name: "priceDescription",
      title: "Prijsomschrijving",
      type: "string",
      group: "details",
      hidden: ({ document }) => Boolean(document?.isFree),
      description: "Bijvoorbeeld vrijwillige bijdrage. Niet invullen als gratis aan staat.",
    }),
    defineField({
      name: "capacity",
      title: "Capaciteit",
      type: "number",
      group: "details",
      validation: (Rule) => Rule.min(1).integer().error("Gebruik een positief getal."),
    }),
    defineField({
      name: "featuredImage",
      title: "Afbeelding",
      type: "image",
      group: "content",
      options: { hotspot: true },
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
      name: "status",
      title: "Status",
      type: "string",
      group: "details",
      options: {
        list: [
          { title: "Komend", value: "upcoming" },
          { title: "Geweest", value: "past" },
          { title: "Geannuleerd", value: "cancelled" },
        ],
        layout: "radio",
      },
      initialValue: "upcoming",
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
    select: { title: "title", subtitle: "dateStart", media: "featuredImage" },
    prepare({ title, subtitle, media }) {
      const date = subtitle
        ? new Date(String(subtitle)).toLocaleDateString("nl-NL")
        : "Geen datum";
      return { title, subtitle: date, media };
    },
  },
  orderings: [
    { title: "Datum oplopend", name: "dateAsc", by: [{ field: "dateStart", direction: "asc" }] },
    { title: "Datum aflopend", name: "dateDesc", by: [{ field: "dateStart", direction: "desc" }] },
  ],
});
