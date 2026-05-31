import type { StructureResolver } from "sanity/structure";

const singleton = (
  S: Parameters<StructureResolver>[0],
  type: string,
  title: string,
  documentId = type,
  templateId?: string,
) =>
  S.listItem()
    .title(title)
    .schemaType(type)
    .child(() => {
      const document = S.document().schemaType(type).documentId(documentId).title(title);
      return templateId ? document.initialValueTemplate(templateId) : document;
    });

const pageSingleton = (
  S: Parameters<StructureResolver>[0],
  title: string,
  pageKey: string,
) => singleton(S, "page", title, `page-${pageKey}`, `page-${pageKey}`);

export const studioStructure: StructureResolver = (S) =>
  S.list()
    .title("Lumina yönetimi")
    .items([
      S.listItem()
        .title("Buradan başla")
        .child(
          S.list()
            .title("Buradan başla")
            .items([
              singleton(S, "globalSettings", "Site ayarları"),
              S.divider(),
              pageSingleton(S, "Ana sayfa", "home"),
              pageSingleton(S, "Hakkımızda", "over-ons"),
              pageSingleton(S, "Programlar sayfası", "programmas"),
              pageSingleton(S, "Ajanda sayfası", "agenda"),
              pageSingleton(S, "Katıl sayfası", "doe-mee"),
              pageSingleton(S, "İletişim sayfası", "contact"),
              pageSingleton(S, "Topluluk sayfası", "gemeenschap"),
              pageSingleton(S, "Haberler sayfası", "nieuws"),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title("İçerik oluştur")
        .child(
          S.list()
            .title("İçerik oluştur")
            .items([
              S.documentTypeListItem("program").title("Programlar"),
              S.documentTypeListItem("event").title("Etkinlikler / ajanda"),
              S.documentTypeListItem("post").title("Haberler & hikayeler"),
              S.documentTypeListItem("galleryItem").title("Fotoğraf galerisi"),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title("Güven")
        .child(
          S.list()
            .title("Güven")
            .items([
              S.documentTypeListItem("teamMember").title("Ekip"),
              S.documentTypeListItem("partner").title("Partnerler"),
              S.documentTypeListItem("testimonial").title("Yorumlar"),
            ]),
        ),
    ]);
