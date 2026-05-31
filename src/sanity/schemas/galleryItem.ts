import { defineField, defineType } from "sanity";

const required = "Dit veld is verplicht.";

export const galleryItemSchema = defineType({
  name: "galleryItem",
  title: "Foto",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Foto",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required().error(required),
    }),
    defineField({
      name: "alt",
      title: "Alt-tekst",
      type: "string",
      description: "Beschrijf kort wat zichtbaar is op de foto.",
      validation: (Rule) => Rule.required().error("Alt-tekst is verplicht."),
    }),
    defineField({ name: "caption", title: "Onderschrift", type: "string" }),
    defineField({
      name: "event",
      title: "Activiteit",
      type: "reference",
      to: [{ type: "event" }],
      description: "Koppel aan een event als dit relevant is.",
    }),
    defineField({
      name: "program",
      title: "Programma",
      type: "reference",
      to: [{ type: "program" }],
      description: "Koppel aan een programma als dit relevant is.",
    }),
    defineField({ name: "date", title: "Datum", type: "date" }),
    defineField({
      name: "credit",
      title: "Fotocredit",
      type: "string",
      description: "Fotograaf of bron, indien nodig.",
    }),
    defineField({
      name: "isPlaceholder",
      title: "Tijdelijke foto",
      type: "boolean",
      initialValue: false,
      description: "Aanvinken als dit beeld later vervangen moet worden.",
    }),
    defineField({
      name: "visibility",
      title: "Zichtbaarheid",
      type: "string",
      options: {
        list: [
          { title: "Publiek", value: "public" },
          { title: "Prive", value: "private" },
          { title: "Intern", value: "internal" },
        ],
        layout: "radio",
      },
      initialValue: "private",
      validation: (Rule) => Rule.required().error(required),
      description: "Alleen public wordt later op de website getoond.",
    }),
    defineField({
      name: "consentConfirmed",
      title: "Toestemming bevestigd",
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
        title: title || "Foto",
        subtitle: subtitle === "public" ? "Publiek" : "Niet voor website",
        media,
      };
    },
  },
});
