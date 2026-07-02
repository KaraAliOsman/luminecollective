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
    src: "/images/hero-community.png",
    credit: "Stichting Lumina Collective",
    sourceUrl: "",
    isPreview: false,
  },
  warmWorkshop: {
    label: "Creatieve workshop",
    tone: "growth",
    alt: "Vrouwen die samenwerken tijdens een creatieve workshop",
    src: "/images/workshop-growth.png",
    credit: "Stichting Lumina Collective",
    sourceUrl: "",
    isPreview: false,
  },
  culturalMoment: {
    label: "Cultureel evenement",
    tone: "culture",
    alt: "Spreker tijdens een cultureel evenement met warm publiek",
    src: "/images/cultural-event.png",
    credit: "Stichting Lumina Collective",
    sourceUrl: "",
    isPreview: false,
  },
  supportCircle: {
    label: "Ondersteunend gesprek",
    tone: "support",
    alt: "Vrouwen in een intiem en ondersteunend gesprek",
    src: "/images/support-circle.png",
    credit: "Stichting Lumina Collective",
    sourceUrl: "",
    isPreview: false,
  },
  participation: {
    label: "Actieve participatie",
    tone: "participation",
    alt: "Vrouwen die actief deelnemen aan een planningssessie",
    src: "/images/participation.png",
    credit: "Stichting Lumina Collective",
    sourceUrl: "",
    isPreview: false,
  },
  conversation: {
    label: "Professioneel gesprek",
    tone: "community",
    alt: "Twee vrouwen in een professioneel mentorgesprek",
    src: "/images/conversation.png",
    credit: "Stichting Lumina Collective",
    sourceUrl: "",
    isPreview: false,
  },
  meeting: {
    label: "Teamoverleg",
    tone: "growth",
    alt: "Vrouwen tijdens een warm en betrokken teamoverleg",
    src: "/images/meeting.png",
    credit: "Stichting Lumina Collective",
    sourceUrl: "",
    isPreview: false,
  },
  presentation: {
    label: "Kennis delen",
    tone: "growth",
    alt: "Vrouw die kennis deelt tijdens een presentatie",
    src: "/images/presentation.png",
    credit: "Stichting Lumina Collective",
    sourceUrl: "",
    isPreview: false,
  },
} satisfies Record<string, VisualPlaceholder>;
