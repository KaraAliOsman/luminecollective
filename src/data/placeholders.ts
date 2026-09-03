export type VisualPlaceholder = {
  label: string;
  tone: "community" | "culture" | "support" | "growth" | "participation";
  alt: string;
  src: string;
  credit: string;
  sourceUrl: string;
  isPreview: boolean;
};

export const photography = {
  together: {
    label: "Samen buiten", tone: "community",
    alt: "Vrouwen lachen samen op een bank in een park",
    src: "/images/samen-buiten.webp", credit: "Samuel Peter / Pexels",
    sourceUrl: "https://www.pexels.com/photo/women-sitting-together-and-smiling-16934837/", isPreview: false,
  },
  meeting: {
    label: "Elkaar ontmoeten", tone: "community",
    alt: "Vrouwen lachen met elkaar terwijl ze samen eten bereiden",
    src: "/images/ontmoeten.webp", credit: "Yakup Polat / Pexels",
    sourceUrl: "https://www.pexels.com/photo/women-in-kitchen-in-hijabs-22604236/", isPreview: false,
  },
  conversation: {
    label: "Een goed gesprek", tone: "support",
    alt: "Vrouwen wisselen ideeën uit tijdens een gezamenlijke workshop",
    src: "/images/in-gesprek.webp", credit: "Xhemi Photo / Pexels",
    sourceUrl: "https://www.pexels.com/photo/discussion-of-women-during-conference-15018889/", isPreview: false,
  },
  learning: {
    label: "Samen leren", tone: "growth",
    alt: "Vrouwen bekijken een gezamenlijk project en maken aantekeningen aan tafel",
    src: "/images/samen-leren.webp", credit: "RF._.studio / Pexels",
    sourceUrl: "https://www.pexels.com/photo/photo-of-women-at-the-meeting-3810792/", isPreview: false,
  },
  connection: {
    label: "Tijd voor elkaar", tone: "support",
    alt: "Een jonge vrouw en een oudere vrouw omarmen elkaar tijdens een wandeling",
    src: "/images/verbinding.webp", credit: "Danik Prihodko / Pexels",
    sourceUrl: "https://www.pexels.com/photo/two-happy-women-walking-together-in-a-park-17066532/", isPreview: false,
  },
  creative: {
    label: "Samen iets maken", tone: "culture",
    alt: "Vrouwen werken met papier, inkt en penselen tijdens een creatieve activiteit",
    src: "/images/creatief.webp", credit: "Anna Tarazevich / Pexels",
    sourceUrl: "https://www.pexels.com/photo/women-working-on-artwork-project-6146630/", isPreview: false,
  },
  youth: {
    label: "Jong talent", tone: "participation",
    alt: "Jongeren helpen elkaar met aantekeningen en schoolwerk aan een tafel",
    src: "/images/jongeren.webp", credit: "Monstera Production / Pexels",
    sourceUrl: "https://www.pexels.com/photo/diverse-students-doing-homework-together-in-classroom-6238046/", isPreview: false,
  },
  volunteering: {
    label: "Samen iets betekenen", tone: "participation",
    alt: "Twee vrijwilligers sorteren gedoneerde kleding aan een grote tafel",
    src: "/images/vrijwilligers.webp", credit: "Julia M Cameron / Pexels",
    sourceUrl: "https://www.pexels.com/photo/people-packing-donations-in-boxes-6995044/", isPreview: false,
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
