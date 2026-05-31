import type { StructureBuilder } from "sanity/structure";

export function studioStructure(S: StructureBuilder) {
  return S.list()
    .title("Lumina Collective")
    .items([
      S.listItem()
        .title("Instellingen")
        .child(
          S.document()
            .schemaType("globalSettings")
            .documentId("globalSettings")
            .title("Site-instellingen"),
        ),
      S.divider(),
      S.listItem()
        .title("Programma's")
        .schemaType("program")
        .child(S.documentTypeList("program").title("Programma's")),
      S.listItem()
        .title("Evenementen")
        .schemaType("event")
        .child(S.documentTypeList("event").title("Evenementen")),
      S.listItem()
        .title("Artikelen")
        .schemaType("post")
        .child(S.documentTypeList("post").title("Artikelen")),
      S.divider(),
      S.listItem()
        .title("Galerij")
        .schemaType("galleryItem")
        .child(S.documentTypeList("galleryItem").title("Galerij foto's")),
      S.divider(),
      S.listItem()
        .title("Team")
        .schemaType("teamMember")
        .child(S.documentTypeList("teamMember").title("Teamleden")),
      S.listItem()
        .title("Partners")
        .schemaType("partner")
        .child(S.documentTypeList("partner").title("Partners")),
      S.listItem()
        .title("Testimonials")
        .schemaType("testimonial")
        .child(S.documentTypeList("testimonial").title("Testimonials")),
    ]);
}
