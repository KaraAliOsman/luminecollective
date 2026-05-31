import { defineField, defineType } from "sanity";

export const postSchema = defineType({
  name: "post",
  title: "Haber & hikaye",
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
      description: "Clickbait değil, açık ve güven veren bir başlık yazın.",
      validation: (Rule) => Rule.required().min(5).max(100),
    }),
    defineField({
      name: "slug",
      title: "URL adı",
      type: "slug",
      group: "content",
      options: { source: "title", maxLength: 96 },
      description: "Generate butonuna basın. Bu yazının URL adresi olur.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Kategori",
      type: "string",
      group: "content",
      options: {
        list: [
          { title: "Haber", value: "nieuws" },
          { title: "Hikayeler", value: "verhalen" },
          { title: "Röportajlar", value: "interviews" },
          { title: "Etkinlik sonrası", value: "terugblik" },
          { title: "Bilgi", value: "kennis" },
          { title: "Basın bülteni", value: "persbericht" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Yayın tarihi",
      type: "datetime",
      group: "content",
      description: "Yazının hangi tarihle yayınlanacağını seçin.",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Yazar",
      type: "string",
      group: "content",
      initialValue: "Stichting Lumina Collective",
      description: "Özel bir yazar yoksa bu şekilde bırakabilirsiniz.",
    }),
    defineField({
      name: "excerpt",
      title: "Kısa özet",
      type: "text",
      rows: 3,
      group: "content",
      description: "Yazı listesinde görünecek kısa giriş. En fazla 200 karakter.",
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "featuredImage",
      title: "Öne çıkan görsel",
      type: "image",
      group: "content",
      options: { hotspot: true },
      description: "Gerçek ve sıcak bir fotoğraf kullanın. Alt metin zorunludur.",
      fields: [
        defineField({
          name: "alt",
          title: "Alt metin",
          type: "string",
          description: "Fotoğrafta ne göründüğünü açıklayın.",
          validation: (Rule) => Rule.required(),
        }),
        defineField({ name: "caption", title: "Açıklama", type: "string" }),
        defineField({ name: "credit", title: "Fotoğraf kredisi", type: "string" }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      title: "Yazı içeriği",
      type: "array",
      group: "content",
      description: "Sakin ve okunabilir yazın. Uzun yazılarda ara başlık kullanın.",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "Alt metin", type: "string" }),
            defineField({ name: "caption", title: "Açıklama", type: "string" }),
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "seoTitle",
      title: "SEO başlığı",
      type: "string",
      description: "Boş bırakılırsa yazı başlığı kullanılır.",
      group: "seo",
    }),
    defineField({
      name: "metaDescription",
      title: "Meta açıklaması",
      type: "text",
      rows: 2,
      validation: (Rule) => Rule.max(160),
      group: "seo",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "publishedAt",
      media: "featuredImage",
    },
    prepare({ title, subtitle, media }) {
      const date = subtitle
        ? new Date(subtitle as string).toLocaleDateString("tr-TR")
        : "Tarih yok";
      return { title, subtitle: date, media };
    },
  },
  orderings: [
    {
      title: "Yayın tarihi (en yeni önce)",
      name: "publishedDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
});
