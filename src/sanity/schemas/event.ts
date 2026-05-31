import { defineField, defineType } from "sanity";

const required = "Bu alan zorunludur.";

export const eventSchema = defineType({
  name: "event",
  title: "Etkinlik",
  type: "document",
  groups: [
    { name: "content", title: "İçerik", default: true },
    { name: "details", title: "Detaylar" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Başlık",
      type: "string",
      group: "content",
      validation: (Rule) =>
        Rule.required().min(3).max(100).error("3 ile 100 karakter kullanın."),
    }),
    defineField({
      name: "slug",
      title: "URL adı",
      type: "slug",
      group: "content",
      options: { source: "title", maxLength: 90 },
      description: "Generate butonuna basın. Bu etkinliğin URL adresi olur.",
      validation: (Rule) => Rule.required().error(required),
    }),
    defineField({
      name: "description",
      title: "Açıklama",
      type: "array",
      group: "content",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required().error(required),
    }),
    defineField({
      name: "program",
      title: "Bağlı program",
      type: "reference",
      group: "content",
      to: [{ type: "program" }],
      description: "Etkinlik bir programa bağlıysa buradan seçin.",
    }),
    defineField({
      name: "dateStart",
      title: "Başlangıç tarihi",
      type: "datetime",
      group: "details",
      validation: (Rule) => Rule.required().error(required),
    }),
    defineField({
      name: "dateEnd",
      title: "Bitiş tarihi",
      type: "datetime",
      group: "details",
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const start = context.document?.dateStart;
          if (value && start && new Date(String(value)) < new Date(String(start))) {
            return "Bitiş tarihi başlangıç tarihinden sonra olmalıdır.";
          }
          return true;
        }),
    }),
    defineField({
      name: "locationName",
      title: "Yer adı",
      type: "string",
      group: "details",
      description: "Örneğin şehir veya mekan adı. Kesin değilse adres yazmayın.",
    }),
    defineField({
      name: "locationAddress",
      title: "Adres",
      type: "text",
      rows: 2,
      group: "details",
      description: "Sadece halka açık paylaşılabilecekse doldurun.",
    }),
    defineField({
      name: "registrationUrl",
      title: "Kayıt linki",
      type: "url",
      group: "details",
      description: "Kayıt iletişim üzerinden yapılacaksa boş bırakın.",
    }),
    defineField({
      name: "isFree",
      title: "Ücretsiz",
      type: "boolean",
      group: "details",
      initialValue: true,
    }),
    defineField({
      name: "priceDescription",
      title: "Ücret açıklaması",
      type: "string",
      group: "details",
      hidden: ({ document }) => Boolean(document?.isFree),
      description: "Örneğin gönüllü katkı. Ücretsiz seçiliyse boş bırakın.",
    }),
    defineField({
      name: "capacity",
      title: "Kapasite",
      type: "number",
      group: "details",
      validation: (Rule) => Rule.min(1).integer().error("Pozitif tam sayı girin."),
    }),
    defineField({
      name: "featuredImage",
      title: "Görsel",
      type: "image",
      group: "content",
      options: { hotspot: true },
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
      name: "status",
      title: "Durum",
      type: "string",
      group: "details",
      options: {
        list: [
          { title: "Yaklaşan", value: "upcoming" },
          { title: "Geçmiş", value: "past" },
          { title: "İptal edildi", value: "cancelled" },
        ],
        layout: "radio",
      },
      initialValue: "upcoming",
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
    select: { title: "title", subtitle: "dateStart", media: "featuredImage" },
    prepare({ title, subtitle, media }) {
      const date = subtitle
        ? new Date(String(subtitle)).toLocaleDateString("tr-TR")
        : "Tarih yok";
      return { title, subtitle: date, media };
    },
  },
  orderings: [
    { title: "Tarih artan", name: "dateAsc", by: [{ field: "dateStart", direction: "asc" }] },
    { title: "Tarih azalan", name: "dateDesc", by: [{ field: "dateStart", direction: "desc" }] },
  ],
});
