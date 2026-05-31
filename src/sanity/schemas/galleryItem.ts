import { defineField, defineType } from "sanity";

const required = "Bu alan zorunludur.";

export const galleryItemSchema = defineType({
  name: "galleryItem",
  title: "Fotoğraf",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Fotoğraf",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required().error(required),
    }),
    defineField({
      name: "alt",
      title: "Alt metin",
      type: "string",
      description: "Fotoğrafta ne göründüğünü kısa şekilde açıklayın.",
      validation: (Rule) => Rule.required().error("Alt metin zorunludur."),
    }),
    defineField({ name: "caption", title: "Açıklama", type: "string" }),
    defineField({
      name: "event",
      title: "Etkinlik",
      type: "reference",
      to: [{ type: "event" }],
      description: "Fotoğraf bir etkinliğe bağlıysa seçin.",
    }),
    defineField({
      name: "program",
      title: "Program",
      type: "reference",
      to: [{ type: "program" }],
      description: "Fotoğraf bir programa bağlıysa seçin.",
    }),
    defineField({ name: "date", title: "Tarih", type: "date" }),
    defineField({
      name: "credit",
      title: "Fotoğraf kredisi",
      type: "string",
      description: "Fotoğrafçı veya kaynak gerekiyorsa yazın.",
    }),
    defineField({
      name: "isPlaceholder",
      title: "Geçici fotoğraf",
      type: "boolean",
      initialValue: false,
      description: "Bu fotoğraf daha sonra değiştirilecekse işaretleyin.",
    }),
    defineField({
      name: "visibility",
      title: "Görünürlük",
      type: "string",
      options: {
        list: [
          { title: "Web sitesinde yayınla", value: "public" },
          { title: "Özel", value: "private" },
          { title: "Sadece iç kullanım", value: "internal" },
        ],
        layout: "radio",
      },
      initialValue: "private",
      validation: (Rule) => Rule.required().error(required),
      description: "Sadece 'Web sitesinde yayınla' seçili fotoğraflar sitede görünür.",
    }),
    defineField({
      name: "consentConfirmed",
      title: "Yayın izni onaylandı",
      type: "boolean",
      initialValue: false,
      description: "Fotoğraftaki kişilerden yayın izni alındıysa işaretleyin.",
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?.visibility === "public" && value !== true) {
            return "Sitede yayınlanacak fotoğraflar için izin onayı zorunludur.";
          }
          return true;
        }),
    }),
  ],
  preview: {
    select: { title: "alt", subtitle: "visibility", media: "image" },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "Fotoğraf",
        subtitle: subtitle === "public" ? "Web sitesinde yayınlanır" : "Sitede görünmez",
        media,
      };
    },
  },
});
