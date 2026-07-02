import { visuals } from "@/data/placeholders";

export const programs = [
  {
    title: "Ontmoeting & Community",
    description:
      "Kleinschalige bijeenkomsten waar vrouwen elkaar leren kennen, ervaringen delen en een betrouwbaar netwerk opbouwen.",
    cta: "Ontdek de community",
    visual: visuals.communityTable,
    targetAudience:
      "Voor vrouwen in Tilburg en omgeving die op een toegankelijke manier nieuwe contacten, herkenning en gemeenschap zoeken.",
    goals: [
      "Nieuwe verbindingen laten ontstaan in een veilige sfeer.",
      "Ruimte geven aan verhalen, vragen en talenten.",
      "De drempel verlagen om later aan andere activiteiten mee te doen.",
    ],
    longDescription:
      "Onze ontmoetingen zijn warm, rustig en persoonlijk. Je hoeft niets te bewijzen om binnen te stappen. We maken ruimte voor gesprek, koffie, herkenning en praktische uitwisseling.\n\nDe bijeenkomsten zijn bedoeld als eerste ingang tot de gemeenschap: een plek waar vrouwen elkaar kunnen vinden en waar vertrouwen stap voor stap groeit.",
  },
  {
    title: "Groei & Ontwikkeling",
    description:
      "Workshops en gesprekken rond zelfvertrouwen, welzijn, communicatie, digitale vaardigheden en persoonlijke richting.",
    cta: "Bekijk workshops",
    visual: visuals.warmWorkshop,
    targetAudience:
      "Voor vrouwen die willen groeien in kennis, zelfvertrouwen, zichtbaarheid of praktische vaardigheden.",
    goals: [
      "Persoonlijke kracht en zelfvertrouwen versterken.",
      "Praktische kennis delen die direct toepasbaar is.",
      "Vrouwen ondersteunen bij een volgende stap in hun leven.",
    ],
    longDescription:
      "Groei hoeft niet hard of groot te zijn. Soms begint het met woorden vinden voor wat je wilt, met oefenen in een veilige groep of met iemand die naast je zit terwijl je een volgende stap voorbereidt.\n\nBinnen dit programma organiseren we workshops, themagesprekken en leerzame sessies rond welzijn, communicatie, talentontwikkeling en maatschappelijke oriëntatie.",
  },
  {
    title: "Cultuur & Verhalen",
    description:
      "Activiteiten waarin cultuur, creativiteit, taal en persoonlijke verhalen zichtbaar en gedeeld mogen worden.",
    cta: "Verken cultuur",
    visual: visuals.culturalMoment,
    targetAudience:
      "Voor vrouwen die hun achtergrond, creativiteit of verhaal willen delen en nieuwsgierig zijn naar anderen.",
    goals: [
      "Culturele uitwisseling zichtbaar en gelijkwaardig maken.",
      "Creatieve vormen gebruiken om gesprek en begrip te openen.",
      "Verhalen bewaren die anders te weinig ruimte krijgen.",
    ],
    longDescription:
      "Cultuur leeft in taal, eten, rituelen, muziek, herinneringen en de manier waarop vrouwen zorg dragen voor elkaar. Lumina geeft die rijkdom een plek.\n\nWe organiseren culturele middagen, creatieve sessies en momenten waarin verhalen met aandacht gedeeld worden. Zo ontstaat herkenning zonder dat iedereen hetzelfde hoeft te zijn.",
  },
  {
    title: "Mentorschap & Ondersteuning",
    description:
      "Zorgvuldige begeleiding, doorverwijzing en steun voor vrouwen die helderheid zoeken in een volgende stap.",
    cta: "Lees over steun",
    visual: visuals.supportCircle,
    targetAudience:
      "Voor vrouwen die behoefte hebben aan een luisterend oor, praktische richting of een betrouwbare eerste stap naar hulp.",
    goals: [
      "Vragen serieus nemen zonder oordeel.",
      "Samen helder maken welke stap passend is.",
      "Waar nodig zorgvuldig verbinden met passende partners of voorzieningen.",
    ],
    longDescription:
      "Niet elke vraag past in een workshop. Soms is eerst rust, aandacht en overzicht nodig. Binnen mentorschap en ondersteuning luisteren we zorgvuldig en denken we mee over wat haalbaar en passend is.\n\nLumina is geen crisisdienst en vervangt geen professionele zorg. We kunnen wel een veilige ingang zijn: iemand die meedenkt, helpt ordenen en waar nodig verbindt met de juiste organisatie.",
  },
  {
    title: "Vrouwen & participatie",
    description:
      "Programma's die vrouwen helpen hun stem, kennis en rol in de samenleving zichtbaar en krachtig in te nemen.",
    cta: "Bekijk participatie",
    visual: visuals.participation,
    targetAudience:
      "Voor vrouwen die actiever willen deelnemen aan buurt, vrijwilligerswerk, opleiding, werk of maatschappelijke initiatieven.",
    goals: [
      "Drempels naar deelname verlagen.",
      "Vrouwen ondersteunen om hun kennis en stem in te brengen.",
      "Samenwerking met lokale partners versterken.",
    ],
    longDescription:
      "Participatie gaat over meer dan aanwezig zijn. Het gaat over invloed, keuze, vertrouwen en de mogelijkheid om bij te dragen op een manier die past bij je leven.\n\nLumina helpt vrouwen hun plek te vinden in de buurt, bij activiteiten, in vrijwilligerswerk of in gesprekken met organisaties. We bouwen bruggen tussen persoonlijke kracht en maatschappelijke ruimte.",
  },
  {
    title: "Community events",
    description:
      "Bijeenkomsten, themadagen en samenwerkingen die de gemeenschap zichtbaar, levendig en uitnodigend maken.",
    cta: "Naar de agenda",
    visual: visuals.communityTable,
    targetAudience:
      "Voor deelnemers, vrijwilligers, partners en buurtgenoten die Lumina willen ontmoeten of samen iets mogelijk willen maken.",
    goals: [
      "De community zichtbaar en toegankelijk maken.",
      "Nieuwe samenwerkingen en ideeën laten ontstaan.",
      "Viering, ontmoeting en maatschappelijke betrokkenheid samenbrengen.",
    ],
    longDescription:
      "Community events brengen alles samen: ontmoeting, cultuur, kennis, partnerschap en de energie van vrouwen die iets willen betekenen.\n\nSoms is een event klein en persoonlijk, soms meer publiek. Altijd blijft het uitgangspunt hetzelfde: een warme, professionele setting waar mensen elkaar echt kunnen ontmoeten.",
  },
] as const;
