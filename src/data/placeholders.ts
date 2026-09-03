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
    src: "/images/samen-buiten.jpg", credit: "Samuel Peter / Pexels",
    sourceUrl: "https://www.pexels.com/photo/women-sitting-together-and-smiling-16934837/", isPreview: false,
  },
  meeting: {
    label: "Elkaar ontmoeten", tone: "community",
    alt: "Twee vrouwen in gesprek op een zonnig terras",
    src: "/images/ontmoeten.jpg", credit: "Gary Barnes / Pexels",
    sourceUrl: "https://www.pexels.com/photo/diverse-female-talking-while-sitting-on-terrace-6231634/", isPreview: false,
  },
  conversation: {
    label: "Een goed gesprek", tone: "support",
    alt: "Twee vrouwen praten met elkaar met een kop koffie",
    src: "/images/in-gesprek.jpg", credit: "George Milton / Pexels",
    sourceUrl: "https://www.pexels.com/photo/cheerful-diverse-best-friends-drinking-coffee-together-6953679/", isPreview: false,
  },
  learning: {
    label: "Samen leren", tone: "growth",
    alt: "Jonge mensen werken samen met schriften aan een tafel",
    src: "/images/samen-leren.jpg", credit: "Monstera Production / Pexels",
    sourceUrl: "https://www.pexels.com/photo/diverse-students-doing-homework-together-in-classroom-6238046/", isPreview: false,
  },
  connection: {
    label: "Tijd voor elkaar", tone: "support",
    alt: "Twee vrouwen drinken samen koffie op een terras",
    src: "/images/verbinding.jpg", credit: "RDNE Stock project / Pexels",
    sourceUrl: "https://www.pexels.com/photo/two-women-having-coffee-time-7020565/", isPreview: false,
  },
  creative: {
    label: "Samen iets maken", tone: "culture",
    alt: "Vrouwen werken samen met klei in een keramiekatelier",
    src: "/images/creatief.jpg", credit: "cottonbro studio / Pexels",
    sourceUrl: "https://www.pexels.com/photo/women-doing-pottery-6694314/", isPreview: false,
  },
  youth: {
    label: "Jong talent", tone: "participation",
    alt: "Twee jonge vrouwen maken samen aantekeningen aan een buitentafel",
    src: "/images/jongeren.jpg", credit: "Charlotte May / Pexels",
    sourceUrl: "https://www.pexels.com/photo/glad-diverse-students-taking-notes-while-working-on-project-5966011/", isPreview: false,
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
