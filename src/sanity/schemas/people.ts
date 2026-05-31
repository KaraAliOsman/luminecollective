import { defineField, defineType } from "sanity";

const required = "Bu alan zorunludur.";

export const teamMemberSchema = defineType({
  name: "teamMember",
  title: "Ekip üyesi",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Ad soyad",
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
      title: "Kısa biyografi",
      type: "text",
      rows: 4,
      description: "Kısa, insani ve net bir biyografi yazın.",
    }),
    defineField({
      name: "portrait",
      title: "Portre",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt metin",
          type: "string",
          validation: (Rule) => Rule.required().error("Alt metin gereklidir."),
        }),
      ],
    }),
    defineField({
      name: "email",
      title: "E-posta opsiyonel",
      type: "email",
      description: "Sadece herkese açık paylaşılabilecekse doldurun.",
    }),
    defineField({
      name: "order",
      title: "Sıralama",
      type: "number",
      initialValue: 99,
      validation: (Rule) => Rule.integer().error("Tam sayı girin."),
    }),
    defineField({
      name: "visible",
      title: "Görünür",
      type: "boolean",
      initialValue: true,
      description: "Sadece görünür olan ekip üyeleri sitede gösterilir.",
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "role", media: "portrait" },
  },
  orderings: [
    { title: "Sıralama", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
});

export const partnerSchema = defineType({
  name: "partner",
  title: "Partner",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Ad",
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
          title: "Alt metin",
          type: "string",
          validation: (Rule) => Rule.required().error("Alt metin gereklidir."),
        }),
      ],
    }),
    defineField({
      name: "website",
      title: "Web sitesi",
      type: "url",
      validation: (Rule) => Rule.uri({ scheme: ["https"] }),
    }),
    defineField({
      name: "description",
      title: "Açıklama",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "visible",
      title: "Görünür",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "order",
      title: "Sıralama",
      type: "number",
      initialValue: 99,
      validation: (Rule) => Rule.integer().error("Tam sayı girin."),
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "website", media: "logo" },
  },
  orderings: [
    { title: "Sıralama", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
});

export const testimonialSchema = defineType({
  name: "testimonial",
  title: "Yorum",
  type: "document",
  fields: [
    defineField({
      name: "quote",
      title: "Alıntı",
      type: "text",
      rows: 4,
      validation: (Rule) =>
        Rule.required().max(320).error("En fazla 320 karakter kullanın."),
    }),
    defineField({
      name: "name",
      title: "Ad",
      type: "string",
      description: "Anonim seçiliyse boş bırakın.",
      hidden: ({ document }) => Boolean(document?.anonymous),
    }),
    defineField({
      name: "roleOrContext",
      title: "Rol veya bağlam",
      type: "string",
      description: "Örneğin katılımcı, gönüllü veya partner.",
    }),
    defineField({
      name: "image",
      title: "Görsel opsiyonel",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt metin", type: "string" })],
    }),
    defineField({
      name: "anonymous",
      title: "Anonim",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "approvedForPublication",
      title: "Yayın için onaylandı",
      type: "boolean",
      initialValue: false,
      description: "Sadece onaylı yorumlar web sitesinde gösterilir.",
    }),
    defineField({
      name: "order",
      title: "Sıralama",
      type: "number",
      initialValue: 99,
      validation: (Rule) => Rule.integer().error("Tam sayı girin."),
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
      const text = String(quote || "Yorum");
      return {
        title: text.length > 60 ? `${text.slice(0, 60)}...` : text,
        subtitle: anonymous ? "Anonim" : name || "İsim yok",
        media,
      };
    },
  },
  orderings: [
    { title: "Sıralama", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
});
