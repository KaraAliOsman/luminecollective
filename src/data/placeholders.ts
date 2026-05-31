export type VisualPlaceholder = {
  label: string;
  tone: "community" | "culture" | "support" | "growth" | "participation";
  alt: string;
  src: string;
  credit: string;
  sourceUrl: string;
  isPreview: true;
};

export const visuals = {
  communityTable: {
    label: "Preview fotografie: vrouwen in gesprek",
    tone: "community",
    alt: "Diverse groep vrouwen die samen binnen in gesprek zijn",
    src: "/preview/community.jpg",
    credit: "RDNE Stock project / Pexels",
    sourceUrl: "https://www.pexels.com/photo/group-of-women-talking-7951932/",
    isPreview: true,
  },
  warmWorkshop: {
    label: "Preview fotografie: creatieve workshop",
    tone: "growth",
    alt: "Vrouwen die samenwerken in een creatieve workshopruimte",
    src: "/preview/workshop.jpg",
    credit: "Thirdman / Pexels",
    sourceUrl: "https://www.pexels.com/photo/women-having-a-meeting-8483549/",
    isPreview: true,
  },
  culturalMoment: {
    label: "Preview fotografie: activiteit en gesprek",
    tone: "culture",
    alt: "Workshop met spreker en publiek in een warme zaal",
    src: "/preview/event.jpg",
    credit: "Matheus Bertelli / Pexels",
    sourceUrl:
      "https://www.pexels.com/photo/woman-speaking-during-workshop-in-a-hall-18999485/",
    isPreview: true,
  },
  supportCircle: {
    label: "Preview fotografie: ondersteunend gesprek",
    tone: "support",
    alt: "Drie vrouwen in hijab die samen aan tafel in gesprek zijn",
    src: "/preview/support.jpg",
    credit: "Cedric Fauntleroy / Pexels",
    sourceUrl: "https://www.pexels.com/photo/women-having-a-meeting-8154683/",
    isPreview: true,
  },
  participation: {
    label: "Preview fotografie: samenwerking en participatie",
    tone: "participation",
    alt: "Diverse groep vrouwen die samen rond een tafel overleggen",
    src: "/preview/participation.jpg",
    credit: "RDNE Stock project / Pexels",
    sourceUrl: "https://www.pexels.com/photo/women-having-a-meeting-7491012/",
    isPreview: true,
  },
  conversation: {
    label: "Preview fotografie: professioneel gesprek",
    tone: "community",
    alt: "Vrouwen die een professioneel gesprek voeren in een lichte ruimte",
    src: "/preview/conversation.jpg",
    credit: "PICHA Stock / Pexels",
    sourceUrl:
      "https://www.pexels.com/photo/women-having-a-conversation-3869641/",
    isPreview: true,
  },
  meeting: {
    label: "Preview fotografie: overleg aan tafel",
    tone: "growth",
    alt: "Vrouwen die samen aan een project werken tijdens een vergadering",
    src: "/preview/meeting.jpg",
    credit: "RF._.studio / Pexels",
    sourceUrl: "https://www.pexels.com/photo/women-at-the-meeting-3810793/",
    isPreview: true,
  },
  presentation: {
    label: "Preview fotografie: kennis delen",
    tone: "growth",
    alt: "Vrouw die onderzoek presenteert tijdens een bijeenkomst",
    src: "/preview/growth.jpg",
    credit: "Roxanne Minnish / Pexels",
    sourceUrl:
      "https://www.pexels.com/photo/women-having-a-conversation-12319326/",
    isPreview: true,
  },
} satisfies Record<string, VisualPlaceholder>;
