import { defineField, defineType } from "sanity";

const required = "Bu alan zorunludur.";

export const globalSettingsSchema = defineType({
  name: "globalSettings",
  title: "Site ayarları",
  type: "document",
  fields: [
    defineField({
      name: "siteTitle",
      title: "Site adı",
      type: "string",
      description: "Genelde Stichting Lumina Collective olarak kalır.",
      validation: (Rule) => Rule.required().error(required),
    }),
    defineField({
      name: "siteDescription",
      title: "Site açıklaması",
      type: "text",
      rows: 3,
      description: "Google ve sosyal medya önizlemeleri için kısa açıklama.",
      validation: (Rule) =>
        Rule.required().max(160).error("En fazla 160 karakter kullanın."),
    }),
    defineField({
      name: "defaultOgImage",
      title: "Varsayılan paylaşım görseli",
      type: "image",
      options: { hotspot: true },
      description: "Sosyal medyada paylaşım için önerilen boyut: 1200 x 630.",
      validation: (Rule) => Rule.required().error(required),
      fields: [
        defineField({
          name: "alt",
          title: "Alt metin",
          type: "string",
          validation: (Rule) => Rule.required().error("Görseli açıklayın."),
        }),
      ],
    }),
    defineField({
      name: "logoFull",
      title: "Tam logo",
      type: "image",
      description: "Header ve footer için tam logo.",
      validation: (Rule) => Rule.required().error(required),
      fields: [defineField({ name: "alt", title: "Alt metin", type: "string" })],
    }),
    defineField({
      name: "logoMark",
      title: "Küçük logo / L işareti",
      type: "image",
      description: "Küçük alanlarda kullanılan L işareti.",
      validation: (Rule) => Rule.required().error(required),
      fields: [defineField({ name: "alt", title: "Alt metin", type: "string" })],
    }),
    defineField({
      name: "contactEmail",
      title: "İletişim e-postası",
      type: "email",
      description: "Sadece resmi olarak onaylı e-posta varsa doldurun.",
    }),
    defineField({
      name: "socialLinks",
      title: "Sosyal medya linkleri",
      type: "array",
      description: "Sadece gerçek sosyal medya hesaplarını ekleyin.",
      of: [
        defineField({
          name: "socialLink",
          title: "Sosyal medya linki",
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
                  { title: "Diğer", value: "other" },
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
      title: "Footer metni",
      type: "text",
      rows: 2,
      description: "Logonun altında görünen kısa ve sıcak cümle.",
      validation: (Rule) => Rule.max(180).error("Kısa ve sakin tutun."),
    }),
    defineField({
      name: "donationEnabled",
      title: "Bağışı göster",
      type: "boolean",
      initialValue: false,
      description: "Bağış linki sitede görünmeli ise açın.",
    }),
    defineField({
      name: "donationUrl",
      title: "Bağış linki",
      type: "url",
      description: "Sadece bağış aktifse gereklidir.",
      hidden: ({ document }) => !document?.donationEnabled,
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?.donationEnabled && !value) {
            return "Bağış linki ekleyin veya bağışı kapatın.";
          }
          return true;
        }),
    }),
    defineField({
      name: "newsletterEnabled",
      title: "Bülteni göster",
      type: "boolean",
      initialValue: true,
      description: "Bülten aboneliği geçici olarak gerekmiyorsa kapatın.",
    }),
  ],
  preview: {
    select: { title: "siteTitle", subtitle: "siteDescription" },
  },
});
