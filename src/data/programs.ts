import { visuals } from "@/data/placeholders";

export const programs = [
  {
    title: "Ontmoeting & community",
    description:
      "Laagdrempelige momenten waar vrouwen elkaar leren kennen, verhalen delen en nieuwe verbindingen opbouwen.",
    cta: "Ontdek ontmoetingen",
    visual: visuals.communityTable,
  },
  {
    title: "Groei & ontwikkeling",
    description:
      "Workshops en gesprekken rond persoonlijke groei, vaardigheden, welzijn en zichtbaarheid.",
    cta: "Bekijk groeimomenten",
    visual: visuals.warmWorkshop,
  },
  {
    title: "Culturele activiteiten",
    description:
      "Ruimte voor cultuur, creativiteit en uitwisseling, met aandacht voor verschillende achtergronden.",
    cta: "Verken cultuur",
    visual: visuals.culturalMoment,
  },
  {
    title: "Mentorschap & ondersteuning",
    description:
      "Zorgvuldige begeleiding en steun voor vrouwen die een volgende stap willen zetten.",
    cta: "Lees over ondersteuning",
    visual: visuals.supportCircle,
  },
  {
    title: "Vrouwen & participatie",
    description:
      "Programma's die vrouwen helpen hun stem, kennis en rol in de samenleving te versterken.",
    cta: "Bekijk participatie",
    visual: visuals.participation,
  },
  {
    title: "Community events",
    description:
      "Bijeenkomsten, themadagen en activiteiten die de gemeenschap zichtbaar en levendig maken.",
    cta: "Naar de agenda",
    visual: visuals.communityTable,
  },
] as const;
