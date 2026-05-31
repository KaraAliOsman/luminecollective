import { defineField, defineType } from "sanity";

const required = "Dit veld is verplicht.";

export const globalSettingsSchema = defineType({
  name: "globalSettings",
  title: "Global Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteTitle",
      title: "Site title",
      type: "string",
      description: "De naam van de website, meestal Stichting Lumina Collective.",
      validation: (Rule) => Rule.required().error(required),
    }),
    defineField({
      name: "siteDescription",
      title: "Site description",
      type: "text",
      rows: 3,
      description: "Korte beschrijving voor zoekmachines en social previews.",
      validation: (Rule) =>
        Rule.required().max(160).error("Gebruik maximaal 160 tekens."),
    }),
    defineField({
      name: "defaultOgImage",
      title: "Default OG image",
      type: "image",
      options: { hotspot: true },
      description: "Standaard deelafbeelding. Aanbevolen formaat: 1200 x 630.",
      validation: (Rule) => Rule.required().error(required),
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          validation: (Rule) => Rule.required().error("Beschrijf de afbeelding."),
        }),
      ],
    }),
    defineField({
      name: "logoFull",
      title: "Logo full",
      type: "image",
      description: "Volledig logo voor header en footer.",
      validation: (Rule) => Rule.required().error(required),
      fields: [
        defineField({ name: "alt", title: "Alt text", type: "string" }),
      ],
    }),
    defineField({
      name: "logoMark",
      title: "Logo mark",
      type: "image",
      description: "Kleine L-mark voor compacte plekken.",
      validation: (Rule) => Rule.required().error(required),
      fields: [
        defineField({ name: "alt", title: "Alt text", type: "string" }),
      ],
    }),
    defineField({
      name: "contactEmail",
      title: "Contact email",
      type: "email",
      description: "Alleen invullen als dit officieel bevestigd is.",
    }),
    defineField({
      name: "socialLinks",
      title: "Social links",
      type: "array",
      description: "Links naar sociale kanalen. Alleen echte kanalen toevoegen.",
      of: [
        defineField({
          name: "socialLink",
          title: "Social link",
          type: "object",
          fields: [
            defineField({
              name: "platform",
              title: "Platform",
              type: "string",
              options: {
                list: [
                  { title: "Facebook", value: "facebook" },
                  { title: "Instagram", value: "instagram" },
                  { title: "TikTok", value: "tiktok" },
                  { title: "X", value: "x" },
                  { title: "LinkedIn", value: "linkedin" },
                  { title: "Other", value: "other" },
                ],
              },
              validation: (Rule) => Rule.required().error(required),
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
              validation: (Rule) => Rule.required().uri({ scheme: ["https"] }),
            }),
          ],
          preview: {
            select: { title: "platform", subtitle: "url" },
          },
        }),
      ],
    }),
    defineField({
      name: "footerText",
      title: "Footer text",
      type: "text",
      rows: 2,
      description: "Korte warme zin onder het logo.",
      validation: (Rule) => Rule.max(180).error("Houd dit kort en rustig."),
    }),
    defineField({
      name: "donationEnabled",
      title: "Donation enabled",
      type: "boolean",
      initialValue: false,
      description: "Zet aan als donaties zichtbaar mogen zijn.",
    }),
    defineField({
      name: "donationUrl",
      title: "Donation URL",
      type: "url",
      description: "Alleen nodig als donaties actief zijn.",
      hidden: ({ document }) => !document?.donationEnabled,
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?.donationEnabled && !value) {
            return "Voeg een donatielink toe of zet donaties uit.";
          }
          return true;
        }),
    }),
    defineField({
      name: "newsletterEnabled",
      title: "Newsletter enabled",
      type: "boolean",
      initialValue: true,
      description: "Zet uit als nieuwsbriefinschrijving tijdelijk niet nodig is.",
    }),
  ],
  preview: {
    select: { title: "siteTitle", subtitle: "siteDescription" },
  },
});
