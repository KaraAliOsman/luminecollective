import { defineField, defineType } from "sanity";

const required = "Dit veld is verplicht.";

export const eventSchema = defineType({
  name: "event",
  title: "Event",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "details", title: "Details" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
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
      title: "Description",
      type: "array",
      group: "content",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required().error(required),
    }),
    defineField({
      name: "program",
      title: "Related program",
      type: "reference",
      group: "content",
      to: [{ type: "program" }],
      description: "Koppel dit event aan een programma als er een duidelijke relatie is.",
    }),
    defineField({
      name: "dateStart",
      title: "Start date",
      type: "datetime",
      group: "details",
      validation: (Rule) => Rule.required().error(required),
    }),
    defineField({
      name: "dateEnd",
      title: "End date",
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
      title: "Location name",
      type: "string",
      group: "details",
      description: "Bijvoorbeeld de plaats of locatie. Geen adres invullen als dit nog niet zeker is.",
    }),
    defineField({
      name: "locationAddress",
      title: "Location address",
      type: "text",
      rows: 2,
      group: "details",
      description: "Alleen invullen als dit openbaar gedeeld mag worden.",
    }),
    defineField({
      name: "registrationUrl",
      title: "Registration URL",
      type: "url",
      group: "details",
      description: "Laat leeg als aanmelden via contact loopt.",
    }),
    defineField({
      name: "isFree",
      title: "Is free",
      type: "boolean",
      group: "details",
      initialValue: true,
    }),
    defineField({
      name: "priceDescription",
      title: "Price description",
      type: "string",
      group: "details",
      hidden: ({ document }) => Boolean(document?.isFree),
      description: "Bijvoorbeeld vrijwillige bijdrage. Niet invullen als gratis aan staat.",
    }),
    defineField({
      name: "capacity",
      title: "Capacity",
      type: "number",
      group: "details",
      validation: (Rule) => Rule.min(1).integer().error("Gebruik een positief getal."),
    }),
    defineField({
      name: "featuredImage",
      title: "Featured image",
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
      name: "status",
      title: "Status",
      type: "string",
      group: "details",
      options: {
        list: [
          { title: "Upcoming", value: "upcoming" },
          { title: "Past", value: "past" },
          { title: "Cancelled", value: "cancelled" },
        ],
        layout: "radio",
      },
      initialValue: "upcoming",
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
    select: { title: "title", subtitle: "dateStart", media: "featuredImage" },
    prepare({ title, subtitle, media }) {
      const date = subtitle
        ? new Date(String(subtitle)).toLocaleDateString("nl-NL")
        : "Geen datum";
      return { title, subtitle: date, media };
    },
  },
  orderings: [
    { title: "Date ascending", name: "dateAsc", by: [{ field: "dateStart", direction: "asc" }] },
    { title: "Date descending", name: "dateDesc", by: [{ field: "dateStart", direction: "desc" }] },
  ],
});
