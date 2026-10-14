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
  welcome: {
    label: "Een vrolijk moment samen", tone: "community",
    alt: "Vier vrouwen dansen hand in hand in een groene tuin en genieten van een vrolijk moment samen",
    src: "/images/vrouwen-samen-buiten.webp", credit: "Elina Fairytale / Pexels",
    sourceUrl: "https://www.pexels.com/photo/group-of-friends-dancing-holding-hands-in-the-park-4834133/", isPreview: true,
    objectPosition: "50% 42%", isGroupPortrait: true,
  },
  together: {
    label: "Samen doen", tone: "community",
    alt: "Twee vrouwen werken samen in een groene tuin en bekijken de planten die ze hebben geoogst",
    src: "/images/samen-in-de-buurt.webp", credit: "Centre for Ageing Better / Pexels",
    sourceUrl: "https://www.pexels.com/photo/women-planting-plants-on-the-garden-7849457/", isPreview: true,
    objectPosition: "50% 38%", isGroupPortrait: true,
  },
  meeting: {
    label: "Burendag", tone: "community",
    alt: "Ingepakte lekkernijen voor de buren, klaargezet door Lumina voor Burendag",
    src: "/images/lumina-burendag.webp", credit: "Stichting Lumina Collective",
    sourceUrl: "https://www.instagram.com/stichtingluminacollective/p/DeUzLrFEzzz/", isPreview: false,
    objectPosition: "50% 45%",
  },
  conversation: {
    label: "Samen het verschil maken", tone: "support",
    alt: "Twee vrijwilligers sorteren samen kleding en houden bij wat er voor een inzameling is klaargezet",
    src: "/images/vrijwilligers.webp", credit: "Julia M Cameron / Pexels",
    sourceUrl: "https://www.pexels.com/photo/people-packing-donations-in-boxes-6995044/", isPreview: true,
    objectPosition: "50% 0%", isGroupPortrait: true,
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
