export type VisualPlaceholder = {
  label: string;
  tone: "community" | "culture" | "support" | "growth" | "participation";
  alt: string;
  src: string;
  credit: string;
  sourceUrl: string;
  isPreview: boolean;
  objectPosition?: string;
  isGroupPortrait?: boolean;
};

export const photography = {
  together: {
    label: "Samen in Amsterdam", tone: "community",
    alt: "Zes vrouwen van Lumina samen op de Dam tijdens een uitstapje in Amsterdam",
    src: "/images/lumina-amsterdam-groep.webp", credit: "Stichting Lumina Collective",
    sourceUrl: "https://www.instagram.com/stichtingluminacollective/p/DeUlL3bmK3c/?img_index=9", isPreview: false,
    objectPosition: "50% 58%", isGroupPortrait: true,
  },
  meeting: {
    label: "Burendag", tone: "community",
    alt: "Ingepakte lekkernijen voor de buren, klaargezet door Lumina voor Burendag",
    src: "/images/lumina-burendag.webp", credit: "Stichting Lumina Collective",
    sourceUrl: "https://www.instagram.com/stichtingluminacollective/p/DeUzLrFEzzz/", isPreview: false,
    objectPosition: "50% 45%",
  },
  conversation: {
    label: "De vrouwen van Lumina", tone: "support",
    alt: "Vrouwen van Lumina poseren samen voor het Koninklijk Paleis in Amsterdam",
    src: "/images/lumina-amsterdam-groep.webp", credit: "Stichting Lumina Collective",
    sourceUrl: "https://www.instagram.com/stichtingluminacollective/p/DeUlL3bmK3c/?img_index=9", isPreview: false,
    objectPosition: "50% 58%", isGroupPortrait: true,
  },
  learning: {
    label: "Samen leren", tone: "growth",
    alt: "Vrouwen bekijken een gezamenlijk project en maken aantekeningen aan tafel",
    src: "/images/samen-leren.webp", credit: "RF._.studio / Pexels",
    sourceUrl: "https://www.pexels.com/photo/photo-of-women-at-the-meeting-3810792/", isPreview: true,
  },
  connection: {
    label: "Aandacht voor elkaar", tone: "support",
    alt: "Een mand met cupcakes en kaartjes van Lumina voor de Week tegen Eenzaamheid",
    src: "/images/lumina-cupcakes-samen.webp", credit: "Stichting Lumina Collective",
    sourceUrl: "https://www.instagram.com/stichtingluminacollective/p/DeUyHppk9ne/?img_index=2", isPreview: false,
    objectPosition: "50% 48%",
  },
  creative: {
    label: "De stad verkennen", tone: "culture",
    alt: "Een fiets op een Amsterdamse brug, gefotografeerd tijdens Lumina's Colour Hunting-uitstapje",
    src: "/images/lumina-amsterdam-gracht.webp", credit: "Stichting Lumina Collective",
    sourceUrl: "https://www.instagram.com/stichtingluminacollective/p/DeUlL3bmK3c/", isPreview: false,
    objectPosition: "50% 62%",
  },
  youth: {
    label: "Samen op ontdekking", tone: "participation",
    alt: "Amsterdamse grachtenpanden en rondvaartboten tijdens Lumina's uitstapje in de stad",
    src: "/images/lumina-amsterdam-ontdekken.webp", credit: "Stichting Lumina Collective",
    sourceUrl: "https://www.instagram.com/stichtingluminacollective/p/DeUlL3bmK3c/?img_index=2", isPreview: false,
    objectPosition: "50% 52%",
  },
  volunteering: {
    label: "Een klein gebaar", tone: "participation",
    alt: "Een hand met een cupcake en een Lumina-kaartje bij woonzorgcentrum Heelwijk",
    src: "/images/lumina-cupcake-actie.webp", credit: "Stichting Lumina Collective",
    sourceUrl: "https://www.instagram.com/stichtingluminacollective/p/DeUyHppk9ne/", isPreview: false,
    objectPosition: "50% 62%",
  },
} satisfies Record<string, VisualPlaceholder>;

export const visuals = {
  communityTable: photography.together,
  warmWorkshop: photography.creative,
  culturalMoment: photography.creative,
  supportCircle: photography.connection,
  participation: photography.youth,
  conversation: photography.conversation,
  meeting: photography.meeting,
  presentation: photography.learning,
  presentation2: photography.learning,
  talking1: photography.conversation,
  smilingGroup: photography.together,
  workshop2: photography.creative,
  support2: photography.connection,
  laughingCafe: photography.meeting,
  seminar1: photography.learning,
  students1: photography.youth,
};
