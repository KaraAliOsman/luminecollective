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
      heroTitle: "Samen groeit meer.",
      heroText:
        "Een plek waar vrouwen elkaar ontmoeten, hun verhaal delen en samen de volgende stap zetten.",
      heroEyebrow: "Stichting Lumina · Tilburg",
      heroPrimary: { _type: "object", label: "Doe mee", href: "/doe-mee" },
      heroSecondary: { _type: "object", label: "Leer ons kennen", href: "/over-ons" },
      heroBadge: "Tilburg · Samen groeien",
      heroCaption: "Lumina Collective · Tilburg",
      heroTicker: ["Ontmoeten", "Ontwikkelen", "Cultuur", "Participatie", "Samen groeien"],
      homeSections: [
        { _type: "homeManifesto", _key: "intro", eyebrow: "Waarom Lumina", title: "Je hoeft het niet", accent: "alleen te doen.", items: [
          { _type: "principle", _key: "meet", title: "Ontmoeten", text: "Een veilige plek waar vrouwen samenkomen, verhalen delen en steun vinden." },
          { _type: "principle", _key: "grow", title: "Ontwikkelen", text: "Workshops en activiteiten die zelfvertrouwen en nieuwe stappen mogelijk maken." },
          { _type: "principle", _key: "visible", title: "Zichtbaarheid", text: "Samen maken we vrouwelijke initiatieven, verhalen en talenten zichtbaar." },
        ] },
        { _type: "homePrograms", _key: "programs", eyebrow: "Wat we doen", title: "Ruimte om te ontmoeten,", accent: "leren en maken.", limit: 3, footerPrompt: "Heb je zelf een idee voor een activiteit?", linkLabel: "Bekijk alle programma's" },
        { _type: "homeEvent", _key: "event", eyebrow: "Kom langs", badge: "Agenda", buttonLabel: "Bekijk activiteit" },
        { _type: "homeGallery", _key: "gallery", eyebrow: "Beeldbank", title: "Dit gebeurt wanneer", accent: "mensen samenkomen.", limit: 5, linkLabel: "Bekijk de hele gemeenschap" },
        { _type: "homeTestimonial", _key: "voice", eyebrow: "Stemmen" },
        { _type: "homePartners", _key: "partners", eyebrow: "Samenwerking", limit: 8 },
        { _type: "homeCta", _key: "cta", eyebrow: "Sluit je aan", title: "Kom een keer", accent: "naast ons zitten.", text: "Een eerste bezoek, een vraag of een idee: zo begint het vaak.", primary: { label: "Ik wil meedoen", href: "/doe-mee" }, secondary: { label: "Neem contact op", href: "/contact" } },
      ],
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
