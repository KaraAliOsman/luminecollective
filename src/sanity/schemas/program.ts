import { defineField, defineType } from "sanity";

const required = "Bu alan zorunludur.";

export const programSchema = defineType({
  name: "program",
  title: "Program",
  type: "document",
  groups: [
    { name: "content", title: "İçerik", default: true },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Başlık",
      type: "string",
      group: "content",
      validation: (Rule) =>
        Rule.required().min(3).max(90).error("3 ile 90 karakter kullanın."),
    }),
    defineField({
      name: "slug",
      title: "URL adı",
      type: "slug",
      group: "content",
      options: { source: "title", maxLength: 90 },
      description: "Generate butonuna basın. Bu programın URL adresi olur.",
      validation: (Rule) => Rule.required().error(required),
    }),
    defineField({
      name: "shortDescription",
      title: "Kısa açıklama",
      type: "text",
      rows: 3,
      group: "content",
      description: "Kartlarda, ana sayfada ve listelerde görünecek kısa metin.",
      validation: (Rule) =>
        Rule.required().min(20).max(220).error("20 ile 220 karakter kullanın."),
    }),
    defineField({
      name: "longDescription",
      title: "Uzun açıklama",
      type: "array",
      group: "content",
      of: [{ type: "block" }],
      description: "Program detay sayfasında görünecek uzun açıklama.",
    }),
    defineField({
      name: "featuredImage",
      title: "Görsel",
      type: "image",
      group: "content",
      options: { hotspot: true },
      validation: (Rule) => Rule.required().error(required),
      fields: [
        defineField({
          name: "alt",
          title: "Alt metin",
          type: "string",
          description: "Fotoğrafta ne göründüğünü açıklayın.",
          validation: (Rule) => Rule.required().error("Alt metin gereklidir."),
        }),
        defineField({ name: "caption", title: "Açıklama", type: "string" }),
        defineField({ name: "credit", title: "Fotoğraf kredisi", type: "string" }),
        defineField({
          name: "isPlaceholder",
          title: "Geçici görsel",
          type: "boolean",
          initialValue: false,
        }),
      ],
    }),
    defineField({
      name: "category",
      title: "Kategori",
      type: "string",
      group: "content",
      options: {
        list: [
          { title: "Buluşma", value: "ontmoeting" },
          { title: "Gelişim", value: "groei" },
          { title: "Kültür", value: "cultuur" },
          { title: "Destek", value: "ondersteuning" },
          { title: "Katılım", value: "participatie" },
          { title: "Topluluk", value: "community" },
        ],
      },
      validation: (Rule) => Rule.required().error(required),
    }),
    defineField({
      name: "targetAudience",
      title: "Kimler için",
      type: "text",
      rows: 2,
      group: "content",
      description: "Bu program kimlere yönelik?",
    }),
    defineField({
      name: "goals",
      title: "Hedefler",
      type: "array",
      group: "content",
      of: [{ type: "string" }],
      description: "Katılımcıların programdan ne alacağını kısa maddelerle yazın.",
    }),
    defineField({
      name: "ctaLabel",
      title: "Buton metni",
      type: "string",
      group: "content",
      initialValue: "Doe mee",
      validation: (Rule) => Rule.required().error(required),
    }),
    defineField({
      name: "ctaHref",
      title: "Buton linki",
      type: "string",
      group: "content",
      initialValue: "/doe-mee",
      validation: (Rule) => Rule.required().error(required),
    }),
    defineField({
      name: "seoTitle",
      title: "SEO başlığı",
      type: "string",
      group: "seo",
      validation: (Rule) => Rule.max(70).error("En fazla 70 karakter kullanın."),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta açıklaması",
      type: "text",
      rows: 2,
      group: "seo",
      validation: (Rule) => Rule.max(160).error("En fazla 160 karakter kullanın."),
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "featuredImage" },
  },
  orderings: [
    { title: "Başlık A-Z", name: "titleAsc", by: [{ field: "title", direction: "asc" }] },
  ],
});
