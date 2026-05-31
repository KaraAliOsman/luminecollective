import { defineField, defineType } from "sanity";

const required = "Dit veld is verplicht.";

export const teamMemberSchema = defineType({
  name: "teamMember",
  title: "Teamlid",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Naam",
      type: "string",
      validation: (Rule) => Rule.required().error(required),
    }),
    defineField({
      name: "role",
      title: "Rol",
      type: "string",
      validation: (Rule) => Rule.required().error(required),
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      rows: 4,
      description: "Korte menselijke bio. Houd dit warm en concreet.",
    }),
    defineField({
      name: "portrait",
      title: "Portret",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt-tekst",
          type: "string",
          validation: (Rule) => Rule.required().error("Alt-tekst is nodig."),
        }),
      ],
    }),
    defineField({
      name: "email",
      title: "E-mail optioneel",
      type: "email",
      description: "Alleen invullen als dit openbaar gedeeld mag worden.",
    }),
    defineField({
      name: "order",
      title: "Volgorde",
      type: "number",
      initialValue: 99,
      validation: (Rule) => Rule.integer().error("Gebruik een heel getal."),
    }),
    defineField({
      name: "visible",
      title: "Zichtbaar",
      type: "boolean",
      initialValue: true,
      description: "Alleen zichtbare teamleden worden later getoond.",
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "role", media: "portrait" },
  },
  orderings: [
    { title: "Volgorde", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
});

export const partnerSchema = defineType({
  name: "partner",
  title: "Partner",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Naam",
      type: "string",
      validation: (Rule) => Rule.required().error(required),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt-tekst",
          type: "string",
          validation: (Rule) => Rule.required().error("Alt-tekst is nodig."),
        }),
      ],
    }),
    defineField({
      name: "website",
      title: "Website",
      type: "url",
      validation: (Rule) => Rule.uri({ scheme: ["https"] }),
    }),
    defineField({
      name: "description",
      title: "Beschrijving",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "visible",
      title: "Zichtbaar",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "order",
      title: "Volgorde",
      type: "number",
      initialValue: 99,
      validation: (Rule) => Rule.integer().error("Gebruik een heel getal."),
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "website", media: "logo" },
  },
  orderings: [
    { title: "Volgorde", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
});

export const testimonialSchema = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "quote",
      title: "Citaat",
      type: "text",
      rows: 4,
      validation: (Rule) =>
        Rule.required().max(320).error("Gebruik maximaal 320 tekens."),
    }),
    defineField({
      name: "name",
      title: "Naam",
      type: "string",
      description: "Laat leeg als anoniem aan staat.",
      hidden: ({ document }) => Boolean(document?.anonymous),
    }),
    defineField({
      name: "roleOrContext",
      title: "Rol of context",
      type: "string",
      description: "Bijvoorbeeld deelneemster, vrijwilliger of partner.",
    }),
    defineField({
      name: "image",
      title: "Afbeelding optioneel",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "Alt-tekst", type: "string" }),
      ],
    }),
    defineField({
      name: "anonymous",
      title: "Anoniem",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "approvedForPublication",
      title: "Goedgekeurd voor publicatie",
      type: "boolean",
      initialValue: false,
      description: "Alleen goedgekeurde testimonials worden later getoond.",
    }),
    defineField({
      name: "order",
      title: "Volgorde",
      type: "number",
      initialValue: 99,
      validation: (Rule) => Rule.integer().error("Gebruik een heel getal."),
    }),
  ],
  preview: {
    select: {
      quote: "quote",
      name: "name",
      anonymous: "anonymous",
      media: "image",
    },
    prepare({ quote, name, anonymous, media }) {
      const text = String(quote || "Testimonial");
      return {
        title: text.length > 60 ? `${text.slice(0, 60)}...` : text,
        subtitle: anonymous ? "Anoniem" : name || "Geen naam",
        media,
      };
    },
  },
  orderings: [
    { title: "Volgorde", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
});
