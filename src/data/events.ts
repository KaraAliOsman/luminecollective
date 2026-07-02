import { visuals } from "@/data/placeholders";

export const events = [
  {
    date: "Binnenkort",
    title: "Lumina Community Ontmoeting",
    location: "Tilburg",
    description:
      "Een laagdrempelige bijeenkomst voor vrouwen die Lumina willen leren kennen, nieuwe verbindingen zoeken of rustig willen aansluiten bij de community.",
    cta: "Interesse tonen",
    isPlaceholder: false,
    visual: visuals.communityTable,
  },
  {
    date: "Binnenkort",
    title: "Workshop Groei & Zichtbaarheid",
    location: "Tilburg",
    description:
      "Een kleinschalige sessie rond zelfvertrouwen, persoonlijke richting en zichtbaar worden op een manier die bij je past.",
    cta: "Meer weten",
    isPlaceholder: false,
    visual: visuals.warmWorkshop,
  },
  {
    date: "Binnenkort",
    title: "Culturele Middag",
    location: "Tilburg",
    description:
      "Een warm moment voor ontmoeting, verhalen, creatieve uitwisseling en herkenning binnen de gemeenschap.",
    cta: "Updates ontvangen",
    isPlaceholder: false,
    visual: visuals.culturalMoment,
  },
] as const;
