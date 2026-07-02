export type VisualPlaceholder = {
  label: string;
  tone: "community" | "culture" | "support" | "growth" | "participation";
  alt: string;
  src: string;
  credit: string;
  sourceUrl: string;
  isPreview: boolean;
};

export const visuals = {
  communityTable: {
    label: "Vrouwen in gesprek",
    tone: "community",
    alt: "Diverse groep vrouwen die samen in een warme ruimte in gesprek zijn",
    src: "/images/hero-community.jpg",
    credit: "Matheus Bertelli / Pexels",
    sourceUrl: "https://www.pexels.com/photo/diverse-group-of-women-in-casual-learning-setting-33714914/",
    isPreview: false,
  },
  warmWorkshop: {
    label: "Creatieve workshop",
    tone: "growth",
    alt: "Vrouwen die samenwerken tijdens een creatieve workshop",
    src: "/images/workshop-growth.jpg",
    credit: "Pavel Danilyuk / Pexels",
    sourceUrl: "https://www.pexels.com/photo/smiling-women-in-the-art-workshop-6925365/",
    isPreview: false,
  },
  culturalMoment: {
    label: "Cultureel evenement",
    tone: "culture",
    alt: "Spreker tijdens een cultureel evenement met warm publiek",
    src: "/images/cultural-event.jpg",
    credit: "Matheus Bertelli / Pexels",
    sourceUrl: "https://www.pexels.com/photo/woman-speaking-during-workshop-in-a-hall-18999485/",
    isPreview: false,
  },
  supportCircle: {
    label: "Ondersteunend gesprek",
    tone: "support",
    alt: "Vrouwen in een intiem en ondersteunend gesprek",
    src: "/images/support-circle.jpg",
    credit: "Age Cymru / Unsplash",
    sourceUrl: "https://unsplash.com/photos/two-women-sitting-at-a-table-with-papers-in-front-of-them-W1jlTkMzaQg",
    isPreview: false,
  },
  participation: {
    label: "Actieve participatie",
    tone: "participation",
    alt: "Vrouwen die actief deelnemen aan een planningssessie",
    src: "/images/participation.jpg",
    credit: "Walls.io / Pexels",
    sourceUrl: "https://www.pexels.com/photo/women-sitting-at-a-table-in-a-boardroom-and-talking-15555794/",
    isPreview: false,
  },
  conversation: {
    label: "Professioneel gesprek",
    tone: "community",
    alt: "Twee vrouwen in een professioneel mentorgesprek",
    src: "/images/conversation.jpg",
    credit: "Hillary Ungson / Unsplash",
    sourceUrl: "https://unsplash.com/photos/women-crafting-with-greenery-at-workshop-table-TdpSX7XAcKo",
    isPreview: false,
  },
  meeting: {
    label: "Teamoverleg",
    tone: "growth",
    alt: "Vrouwen tijdens een warm en betrokken teamoverleg",
    src: "/images/meeting.jpg",
    credit: "Matheus Bertelli / Pexels",
    sourceUrl: "https://www.pexels.com/photo/group-of-people-at-a-meeting-18999286/",
    isPreview: false,
  },
  presentation: {
    label: "Kennis delen",
    tone: "growth",
    alt: "Vrouw die kennis deelt tijdens een presentatie",
    src: "/images/presentation.jpg",
    credit: "ICSA / Pexels",
    sourceUrl: "https://www.pexels.com/photo/woman-holding-microphone-standing-in-front-of-crowd-1708912/",
    isPreview: false,
  },
} satisfies Record<string, VisualPlaceholder>;
