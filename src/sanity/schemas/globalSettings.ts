import { defineField, defineType } from "sanity";

const required = "Dit veld is verplicht.";

export const globalSettingsSchema = defineType({
  name: "globalSettings",
  title: "Site instellingen",
  type: "document",
  fields: [
    defineField({
      name: "siteTitle",
      title: "Sitenaam",
      type: "string",
      description: "De naam van de website, meestal Stichting Lumina Collective.",
      validation: (Rule) => Rule.required().error(required),
    }),
    defineField({
      name: "siteDescription",
      title: "Sitebeschrijving",
      type: "text",
      rows: 3,
      description: "Korte beschrijving voor zoekmachines en social previews.",
      validation: (Rule) =>
        Rule.required().max(160).error("Gebruik maximaal 160 tekens."),
    }),
    defineField({
      name: "defaultOgImage",
      title: "Standaard deelafbeelding",
      type: "image",
      options: { hotspot: true },
      description: "Standaard deelafbeelding. Aanbevolen formaat: 1200 x 630.",
      validation: (Rule) => Rule.required().error(required),
      fields: [
        defineField({
          name: "alt",
          title: "Alt-tekst",
          type: "string",
          validation: (Rule) => Rule.required().error("Beschrijf de afbeelding."),
        }),
      ],
    }),
    defineField({
      name: "logoFull",
      title: "Volledig logo",
      type: "image",
      description: "Volledig logo voor header en footer.",
      validation: (Rule) => Rule.required().error(required),
      fields: [
        defineField({ name: "alt", title: "Alt-tekst", type: "string" }),
      ],
    }),
    defineField({
      name: "logoMark",
      title: "Klein logo / L-mark",
      type: "image",
      description: "Kleine L-mark voor compacte plekken.",
      validation: (Rule) => Rule.required().error(required),
      fields: [
        defineField({ name: "alt", title: "Alt-tekst", type: "string" }),
      ],
    }),
    defineField({
      name: "contactEmail",
      title: "Contact e-mail",
      type: "email",
      description: "Alleen invullen als dit officieel bevestigd is.",
    }),
    defineField({
      name: "socialLinks",
      title: "Social media links",
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
      title: "Footer tekst",
      type: "text",
      rows: 2,
      description: "Korte warme zin onder het logo.",
      validation: (Rule) => Rule.max(180).error("Houd dit kort en rustig."),
    }),
    defineField({
      name: "donationEnabled",
      title: "Donaties tonen",
      type: "boolean",
      initialValue: false,
      description: "Zet aan als donaties zichtbaar mogen zijn.",
    }),
    defineField({
      name: "donationUrl",
      title: "Donatielink",
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
      title: "Nieuwsbrief tonen",
      type: "boolean",
      initialValue: true,
      description: "Zet uit als nieuwsbriefinschrijving tijdelijk niet nodig is.",
    }),
  ],
  preview: {
    select: { title: "siteTitle", subtitle: "siteDescription" },
  },
});
