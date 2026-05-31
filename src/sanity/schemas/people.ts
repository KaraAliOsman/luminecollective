import { defineField, defineType } from "sanity";

const required = "Dit veld is verplicht.";

export const teamMemberSchema = defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required().error(required),
    }),
    defineField({
      name: "role",
      title: "Role",
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
      title: "Portrait",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          validation: (Rule) => Rule.required().error("Alt text is nodig."),
        }),
      ],
    }),
    defineField({
      name: "email",
      title: "Email optional",
      type: "email",
      description: "Alleen invullen als dit openbaar gedeeld mag worden.",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      initialValue: 99,
      validation: (Rule) => Rule.integer().error("Gebruik een heel getal."),
    }),
    defineField({
      name: "visible",
      title: "Visible",
      type: "boolean",
      initialValue: true,
      description: "Alleen zichtbare teamleden worden later getoond.",
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "role", media: "portrait" },
  },
  orderings: [
    { title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
});

export const partnerSchema = defineType({
  name: "partner",
  title: "Partner",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
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
          title: "Alt text",
          type: "string",
          validation: (Rule) => Rule.required().error("Alt text is nodig."),
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
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "visible",
      title: "Visible",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      initialValue: 99,
      validation: (Rule) => Rule.integer().error("Gebruik een heel getal."),
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "website", media: "logo" },
  },
  orderings: [
    { title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
});

export const testimonialSchema = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 4,
      validation: (Rule) =>
        Rule.required().max(320).error("Gebruik maximaal 320 tekens."),
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Laat leeg als anonymous aan staat.",
      hidden: ({ document }) => Boolean(document?.anonymous),
    }),
    defineField({
      name: "roleOrContext",
      title: "Role or context",
      type: "string",
      description: "Bijvoorbeeld deelneemster, vrijwilliger of partner.",
    }),
    defineField({
      name: "image",
      title: "Image optional",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "Alt text", type: "string" }),
      ],
    }),
    defineField({
      name: "anonymous",
      title: "Anonymous",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "approvedForPublication",
      title: "Approved for publication",
      type: "boolean",
      initialValue: false,
      description: "Alleen goedgekeurde testimonials worden later getoond.",
    }),
    defineField({
      name: "order",
      title: "Order",
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
        subtitle: anonymous ? "Anonymous" : name || "Geen naam",
        media,
      };
    },
  },
  orderings: [
    { title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
});
