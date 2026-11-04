import { defineField, defineType } from "sanity";

const short = (name: string, title: string) => defineField({ name, title, type: "string" });
const link = (name: string, title: string) => defineField({
  name,
  title,
  type: "object",
  fields: [short("label", "Tekst"), short("href", "Link")],
});

export const homeManifestoSchema = defineType({
  name: "homeManifesto",
  title: "Introductie met kernpunten",
  type: "object",
  fields: [
    short("eyebrow", "Kleine sectietitel"),
    short("title", "Grote titel"),
    short("accent", "Gekleurd laatste deel"),
    defineField({
      name: "items",
      title: "Kernpunten",
      type: "array",
      of: [defineField({ name: "principle", title: "Kernpunt", type: "object", fields: [short("title", "Titel"), defineField({ name: "text", title: "Tekst", type: "text", rows: 3 })], preview: { select: { title: "title", subtitle: "text" } } })],
      validation: (Rule) => Rule.max(6),
    }),
  ],
  preview: { prepare: () => ({ title: "Introductie met kernpunten" }) },
});

export const homeProgramsSchema = defineType({
  name: "homePrograms",
  title: "Programma-overzicht",
  type: "object",
  fields: [
    short("eyebrow", "Kleine sectietitel"), short("title", "Titel"), short("accent", "Gekleurd laatste deel"),
    defineField({ name: "intro", title: "Introductie", type: "text", rows: 3 }),
    defineField({ name: "limit", title: "Aantal programma's", type: "number", initialValue: 3, validation: (Rule) => Rule.integer().min(1).max(8) }),
    short("footerPrompt", "Vraag onder de lijst"), short("linkLabel", "Tekst van de overzichtslink"),
  ],
  preview: { prepare: () => ({ title: "Programma-overzicht" }) },
});

export const homeEventSchema = defineType({
  name: "homeEvent",
  title: "Eerstvolgende activiteit",
  type: "object",
  fields: [short("eyebrow", "Kleine sectietitel"), short("badge", "Label op de foto"), short("buttonLabel", "Knoptekst")],
  preview: { prepare: () => ({ title: "Eerstvolgende activiteit" }) },
});

export const homeGallerySchema = defineType({
  name: "homeGallery",
  title: "Fotogalerij",
  type: "object",
  fields: [
    short("eyebrow", "Kleine sectietitel"), short("title", "Titel"), short("accent", "Gekleurd laatste deel"),
    defineField({ name: "limit", title: "Aantal foto's", type: "number", initialValue: 5, validation: (Rule) => Rule.integer().min(2).max(8) }),
    short("linkLabel", "Tekst van de galerijlink"),
  ],
  preview: { prepare: () => ({ title: "Fotogalerij" }) },
});

export const homeTestimonialSchema = defineType({
  name: "homeTestimonial",
  title: "Ervaring / citaat",
  type: "object",
  fields: [short("eyebrow", "Kleine sectietitel")],
  preview: { prepare: () => ({ title: "Ervaring / citaat" }) },
});

export const homePartnersSchema = defineType({
  name: "homePartners",
  title: "Partners",
  type: "object",
  fields: [short("eyebrow", "Kleine sectietitel"), defineField({ name: "limit", title: "Maximum aantal", type: "number", initialValue: 8, validation: (Rule) => Rule.integer().min(1).max(16) })],
  preview: { prepare: () => ({ title: "Partners" }) },
});

export const homeCtaSchema = defineType({
  name: "homeCta",
  title: "Afsluitende oproep",
  type: "object",
  fields: [
    short("eyebrow", "Kleine sectietitel"), short("title", "Titel"), short("accent", "Cursief laatste deel"),
    defineField({ name: "text", title: "Tekst", type: "text", rows: 2 }), link("primary", "Primaire knop"), link("secondary", "Secundaire link"),
  ],
  preview: { select: { subtitle: "title" }, prepare: ({ subtitle }) => ({ title: "Afsluitende oproep", subtitle }) },
});

const hidden = (name: string) => defineField({ name, title: name, type: "string", hidden: true });
const items = defineField({
  name: "items",
  title: "Satırlar",
  type: "array",
  of: [defineField({ name: "row", title: "Satır", type: "object", fields: [short("title", "Başlık"), defineField({ name: "text", title: "Metin", type: "text", rows: 3 })] })],
});

export const homeTextSchema = defineType({
  name: "homeText",
  title: "Metin afişi",
  type: "object",
  fields: [short("eyebrow", "Köşe yazısı"), short("title", "Başlık"), short("accent", "Vurgulu başlık satırı"), defineField({ name: "text", title: "Metin", type: "text", rows: 5 }), link("link", "Bağlantı"), hidden("tone"), hidden("spacing")],
  preview: { select: { title: "title", subtitle: "accent" } },
});

export const homeStorySchema = defineType({
  name: "homeStory",
  title: "Fotoğraflı afiş",
  type: "object",
  fields: [short("eyebrow", "Köşe yazısı"), short("title", "Başlık"), short("accent", "Vurgulu başlık satırı"), defineField({ name: "text", title: "Metin", type: "text", rows: 5 }), defineField({ name: "image", title: "Fotoğraf", type: "image", options: { hotspot: true }, fields: [short("alt", "Fotoğraf açıklaması"), short("credit", "Fotoğraf kaynağı"), defineField({ name: "isPlaceholder", title: "Geçici fotoğraf", type: "boolean" })] }), link("link", "Bağlantı"), hidden("tone")],
  preview: { select: { title: "title", subtitle: "accent", media: "image" } },
});

export const homeQuoteSchema = defineType({
  name: "homeQuote",
  title: "Alıntı afişi (çiçek animasyonu)",
  type: "object",
  fields: [short("eyebrow", "Köşe yazısı"), defineField({ name: "text", title: "Alıntı", type: "text", rows: 3 }), short("accent", "Alıntının vurgulu sonu"), short("attribution", "Kaynak"), link("link", "Bağlantı"), hidden("tone")],
  preview: { select: { subtitle: "text" }, prepare: ({ subtitle }) => ({ title: "Alıntı afişi", subtitle }) },
});

export const homeStepsSchema = defineType({
  name: "homeSteps",
  title: "Adımlar",
  type: "object",
  fields: [short("eyebrow", "Köşe yazısı"), short("title", "Başlık"), short("accent", "Vurgulu başlık satırı"), items],
  preview: { select: { title: "title", subtitle: "accent" } },
});

export const homeFaqSchema = defineType({
  name: "homeFaq",
  title: "Sık sorulan sorular",
  type: "object",
  fields: [short("eyebrow", "Köşe yazısı"), short("title", "Başlık"), short("accent", "Vurgulu başlık satırı"), items, link("link", "Bağlantı")],
  preview: { select: { title: "title", subtitle: "accent" } },
});

export const homeSectionSchemas = [
  homeTextSchema,
  homeStorySchema,
  homeQuoteSchema,
  homeStepsSchema,
  homeFaqSchema,
  homeManifestoSchema,
  homeProgramsSchema,
  homeEventSchema,
  homeGallerySchema,
  homeTestimonialSchema,
  homePartnersSchema,
  homeCtaSchema,
];
