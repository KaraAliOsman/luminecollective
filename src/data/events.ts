import { visuals } from "@/data/placeholders";

export const events = [
  {
    date: "Binnenkort",
    title: "Community ontmoeting",
    location: "Locatie wordt later gedeeld",
    description:
      "Een warme bijeenkomst voor vrouwen die kennis willen maken met Lumina Collective.",
    cta: "Interesse tonen",
    isPlaceholder: true,
    visual: visuals.communityTable,
  },
  {
    date: "Binnenkort",
    title: "Workshop groei & zichtbaarheid",
    location: "Nederland",
    description:
      "Een kleinschalige workshop rond zelfvertrouwen, verbinding en nieuwe mogelijkheden.",
    cta: "Meer weten",
    isPlaceholder: true,
    visual: visuals.warmWorkshop,
  },
  {
    date: "Binnenkort",
    title: "Culturele middag",
    location: "Locatie volgt",
    description:
      "Een moment voor ontmoeting, verhalen en culturele uitwisseling binnen de community.",
    cta: "Updates ontvangen",
    isPlaceholder: true,
    visual: visuals.culturalMoment,
  },
] as const;
