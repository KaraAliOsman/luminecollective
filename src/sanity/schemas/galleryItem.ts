import { defineField, defineType } from "sanity";

const required = "Dit veld is verplicht.";

export const galleryItemSchema = defineType({
  name: "galleryItem",
  title: "Gallery Item",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required().error(required),
    }),
    defineField({
      name: "alt",
      title: "Alt",
      type: "string",
      description: "Beschrijf kort wat zichtbaar is op de foto.",
      validation: (Rule) => Rule.required().error("Alt text is verplicht."),
    }),
    defineField({ name: "caption", title: "Caption", type: "string" }),
    defineField({
      name: "event",
      title: "Event",
      type: "reference",
      to: [{ type: "event" }],
      description: "Koppel aan een event als dit relevant is.",
    }),
    defineField({
      name: "program",
      title: "Program",
      type: "reference",
      to: [{ type: "program" }],
      description: "Koppel aan een programma als dit relevant is.",
    }),
    defineField({ name: "date", title: "Date", type: "date" }),
    defineField({
      name: "credit",
      title: "Credit",
      type: "string",
      description: "Fotograaf of bron, indien nodig.",
    }),
    defineField({
      name: "isPlaceholder",
      title: "Is placeholder",
      type: "boolean",
      initialValue: false,
      description: "Aanvinken als dit beeld later vervangen moet worden.",
    }),
    defineField({
      name: "visibility",
      title: "Visibility",
      type: "string",
      options: {
        list: [
          { title: "Public", value: "public" },
          { title: "Private", value: "private" },
          { title: "Internal", value: "internal" },
        ],
        layout: "radio",
      },
      initialValue: "private",
      validation: (Rule) => Rule.required().error(required),
      description: "Alleen public wordt later op de website getoond.",
    }),
    defineField({
      name: "consentConfirmed",
      title: "Consent confirmed",
      type: "boolean",
      initialValue: false,
      description: "Aanvinken als toestemming voor publicatie bevestigd is.",
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?.visibility === "public" && value !== true) {
            return "Publieke beelden hebben bevestigde toestemming nodig.";
          }
          return true;
        }),
    }),
  ],
  preview: {
    select: { title: "alt", subtitle: "visibility", media: "image" },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "Gallery item",
        subtitle: subtitle === "public" ? "Public" : "Niet voor frontend",
        media,
      };
    },
  },
});
