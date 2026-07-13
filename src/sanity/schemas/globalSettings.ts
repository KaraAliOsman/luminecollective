import { defineField, defineType } from "sanity";

const required = "Dit veld is verplicht.";

const linkFields = [
  defineField({ name: "label", title: "Tekst", type: "string", validation: (Rule) => Rule.required().error(required) }),
  defineField({
    name: "href",
    title: "Link",
    type: "string",
    description: "Gebruik /pagina voor een pagina op de site of een volledige https://-link.",
    validation: (Rule) => Rule.required().error(required),
  }),
];

export const globalSettingsSchema = defineType({
  name: "globalSettings",
  title: "Website-instellingen",
  type: "document",
  groups: [
    { name: "identity", title: "Identiteit", default: true },
    { name: "navigation", title: "Navigatie" },
    { name: "footer", title: "Footer & contact" },
    { name: "seo", title: "SEO & delen" },
    { name: "features", title: "Functies" },
  ],
  fields: [
    defineField({ name: "siteTitle", title: "Naam van de website", type: "string", group: "identity", validation: (Rule) => Rule.required().error(required) }),
    defineField({ name: "brandPrimaryText", title: "Eerste woord in het logo", type: "string", group: "identity", initialValue: "Lumina", validation: (Rule) => Rule.required().max(24) }),
    defineField({ name: "brandSecondaryText", title: "Tweede woord in het logo", type: "string", group: "identity", initialValue: "Collective", validation: (Rule) => Rule.required().max(24) }),
    defineField({
      name: "logoMark",
      title: "Beeldmerk",
      type: "image",
      group: "identity",
      options: { hotspot: true },
      description: "Het compacte beeldmerk in de navigatie. Een transparante PNG werkt het best.",
      fields: [defineField({ name: "alt", title: "Alt-tekst", type: "string" })],
    }),
    defineField({
      name: "logoFull",
      title: "Volledig logo (optioneel)",
      type: "image",
      group: "identity",
      fields: [defineField({ name: "alt", title: "Alt-tekst", type: "string" })],
    }),
    defineField({
      name: "navigation",
      title: "Menu-items",
      type: "array",
      group: "navigation",
      description: "Sleep om te sorteren. Items kunnen worden toegevoegd, hernoemd of verwijderd zonder code.",
      of: [defineField({ name: "navigationItem", title: "Menu-item", type: "object", fields: linkFields, preview: { select: { title: "label", subtitle: "href" } } })],
      validation: (Rule) => Rule.max(10).error("Gebruik maximaal 10 menu-items."),
    }),
    defineField({
      name: "headerCta",
      title: "Opvallende knop in het menu",
      type: "object",
      group: "navigation",
      fields: linkFields,
    }),
    defineField({ name: "footerText", title: "Kernzin in de footer", type: "text", rows: 3, group: "footer", validation: (Rule) => Rule.max(180) }),
    defineField({
      name: "address",
      title: "Adres",
      type: "object",
      group: "footer",
      fields: [
        defineField({ name: "street", title: "Straat en huisnummer", type: "string" }),
        defineField({ name: "postalCode", title: "Postcode", type: "string" }),
        defineField({ name: "city", title: "Plaats", type: "string" }),
        defineField({ name: "country", title: "Land", type: "string", initialValue: "Nederland" }),
      ],
    }),
    defineField({ name: "contactEmail", title: "Contact-e-mailadres", type: "email", group: "footer" }),
    defineField({
      name: "socialLinks",
      title: "Sociale media",
      type: "array",
      group: "footer",
      of: [defineField({
        name: "socialLink",
        title: "Sociaal kanaal",
        type: "object",
        fields: [
          defineField({ name: "platform", title: "Platform", type: "string", options: { list: ["instagram", "facebook", "linkedin", "tiktok", "x", "other"] }, validation: (Rule) => Rule.required() }),
          defineField({ name: "url", title: "URL", type: "url", validation: (Rule) => Rule.required().uri({ scheme: ["https"] }) }),
        ],
        preview: { select: { title: "platform", subtitle: "url" } },
      })],
    }),
    defineField({ name: "siteDescription", title: "Beschrijving voor zoekmachines", type: "text", rows: 3, group: "seo", validation: (Rule) => Rule.required().max(160) }),
    defineField({
      name: "defaultOgImage",
      title: "Standaard deelafbeelding",
      type: "image",
      group: "seo",
      options: { hotspot: true },
      description: "Aanbevolen formaat: 1200 × 630 px.",
      fields: [defineField({ name: "alt", title: "Alt-tekst", type: "string", validation: (Rule) => Rule.required() })],
    }),
    defineField({ name: "donationEnabled", title: "Donaties tonen", type: "boolean", group: "features", initialValue: false }),
    defineField({ name: "donationUrl", title: "Donatielink", type: "url", group: "features", hidden: ({ document }) => !document?.donationEnabled }),
    defineField({ name: "newsletterEnabled", title: "Nieuwsbrief tonen", type: "boolean", group: "features", initialValue: true }),
  ],
  preview: { select: { title: "siteTitle", subtitle: "siteDescription" } },
});
