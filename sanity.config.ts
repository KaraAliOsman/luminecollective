import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { schemaTypes } from "./src/sanity/schemas";
import { studioStructure } from "./src/sanity/structure";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "user9c35";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

const pageTemplates = [
  {
    id: "page-home",
    title: "Ana sayfa",
    value: {
      _id: "page-home",
      title: "Home",
      slug: { _type: "slug", current: "home" },
      pageKey: "home",
      heroTitle: "Ruimte voor vrouwen om te groeien, verbinden en zichtbaar te zijn.",
      heroText:
        "Stichting Lumina Collective brengt vrouwen samen in Nederland rond ontmoeting, kennis, cultuur en maatschappelijke betrokkenheid.",
    },
  },
  {
    id: "page-over-ons",
    title: "Hakkımızda",
    value: {
      _id: "page-over-ons",
      title: "Over ons",
      slug: { _type: "slug", current: "over-ons" },
      pageKey: "over-ons",
      heroTitle: "Wij zijn Lumina Collective.",
      heroText:
        "Een warme, zichtbare en toegankelijke plek waar vrouwen elkaar kunnen ontmoeten, ervaringen delen en nieuwe stappen zetten.",
    },
  },
  {
    id: "page-programmas",
    title: "Programlar sayfası",
    value: {
      _id: "page-programmas",
      title: "Programma's",
      slug: { _type: "slug", current: "programmas" },
      pageKey: "programmas",
      heroTitle: "Programma's die vrouwen samenbrengen en versterken.",
      heroText:
        "Onze programma's brengen vrouwen samen rond ontmoeting, persoonlijke ontwikkeling, cultuur, ondersteuning en maatschappelijke betrokkenheid.",
    },
  },
  {
    id: "page-agenda",
    title: "Ajanda sayfası",
    value: {
      _id: "page-agenda",
      title: "Agenda",
      slug: { _type: "slug", current: "agenda" },
      pageKey: "agenda",
      heroTitle: "Activiteiten met aandacht voor ontmoeting en groei.",
      heroText:
        "Hier delen we komende bijeenkomsten, workshops en momenten waarop vrouwen elkaar kunnen ontmoeten, leren en deelnemen.",
    },
  },
  {
    id: "page-doe-mee",
    title: "Katıl sayfası",
    value: {
      _id: "page-doe-mee",
      title: "Doe mee",
      slug: { _type: "slug", current: "doe-mee" },
      pageKey: "doe-mee",
      heroTitle: "Jouw betrokkenheid maakt ruimte voor meer vrouwen.",
      heroText:
        "Meedoen hoeft niet groot te beginnen. Je kunt aansluiten als deelnemer, vrijwilliger, partner, donateur of door een verhaal te delen.",
    },
  },
  {
    id: "page-contact",
    title: "İletişim sayfası",
    value: {
      _id: "page-contact",
      title: "Contact",
      slug: { _type: "slug", current: "contact" },
      pageKey: "contact",
      heroTitle: "Een helder begin voor contact en samenwerking.",
      heroText:
        "Heb je een vraag, idee of voorstel voor samenwerking? We horen graag van je.",
    },
  },
  {
    id: "page-gemeenschap",
    title: "Topluluk sayfası",
    value: {
      _id: "page-gemeenschap",
      title: "Gemeenschap",
      slug: { _type: "slug", current: "gemeenschap" },
      pageKey: "gemeenschap",
      heroTitle: "Momenten die onze gemeenschap zichtbaar maken.",
      heroText:
        "Een blik op de momenten, ontmoetingen en verhalen die onze gemeenschap vormen.",
    },
  },
  {
    id: "page-nieuws",
    title: "Haberler sayfası",
    value: {
      _id: "page-nieuws",
      title: "Nieuws & verhalen",
      slug: { _type: "slug", current: "nieuws" },
      pageKey: "nieuws",
      heroTitle: "Verhalen, kennis en nieuws van de gemeenschap.",
      heroText:
        "We delen artikelen over thema's die onze gemeenschap raken: ontmoeting, groei, cultuur en participatie.",
    },
  },
];

export default defineConfig({
  name: "lumina-collective",
  title: "Lumina Collective",
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [structureTool({ structure: studioStructure })],
  schema: {
    types: schemaTypes,
    templates: (prev) => [
      ...prev,
      ...pageTemplates.map((template) => ({
        id: template.id,
        title: template.title,
        schemaType: "page",
        value: template.value,
      })),
    ],
  },
});
