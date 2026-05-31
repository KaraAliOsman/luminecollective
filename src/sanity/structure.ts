import type { StructureResolver } from "sanity/structure";

const singleton = (S: Parameters<StructureResolver>[0], type: string, title: string) =>
  S.listItem()
    .title(title)
    .schemaType(type)
    .child(S.document().schemaType(type).documentId(type).title(title));

export const studioStructure: StructureResolver = (S) =>
  S.list()
    .title("Lumina beheer")
    .items([
      singleton(S, "globalSettings", "Global settings"),
      S.divider(),
      S.documentTypeListItem("page").title("Pages"),
      S.documentTypeListItem("program").title("Programs"),
      S.documentTypeListItem("event").title("Events"),
      S.divider(),
      S.documentTypeListItem("galleryItem").title("Gallery"),
      S.documentTypeListItem("teamMember").title("Team"),
      S.documentTypeListItem("partner").title("Partners"),
      S.documentTypeListItem("testimonial").title("Testimonials"),
    ]);
