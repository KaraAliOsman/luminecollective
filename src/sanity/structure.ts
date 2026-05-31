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
    .title("Lumina beheer")
    .items([
      S.listItem()
        .title("Start hier")
        .child(
          S.list()
            .title("Start hier")
            .items([
              singleton(S, "globalSettings", "Site instellingen"),
              S.divider(),
              pageSingleton(S, "Home", "home"),
              pageSingleton(S, "Over ons", "over-ons"),
              pageSingleton(S, "Programma's pagina", "programmas"),
              pageSingleton(S, "Agenda pagina", "agenda"),
              pageSingleton(S, "Doe mee pagina", "doe-mee"),
              pageSingleton(S, "Contact pagina", "contact"),
              pageSingleton(S, "Gemeenschap pagina", "gemeenschap"),
              pageSingleton(S, "Nieuws pagina", "nieuws"),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title("Content maken")
        .child(
          S.list()
            .title("Content maken")
            .items([
              S.documentTypeListItem("program").title("Programma's"),
              S.documentTypeListItem("event").title("Activiteiten / agenda"),
              S.documentTypeListItem("post").title("Nieuws & verhalen"),
              S.documentTypeListItem("galleryItem").title("Fotogalerij"),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title("Vertrouwen")
        .child(
          S.list()
            .title("Vertrouwen")
            .items([
              S.documentTypeListItem("teamMember").title("Team"),
              S.documentTypeListItem("partner").title("Partners"),
              S.documentTypeListItem("testimonial").title("Testimonials"),
            ]),
        ),
    ]);
