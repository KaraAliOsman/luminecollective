import type { HomeSection } from "@/types/cms";

/** Shown when no home sections are published in Sanity. */
export const defaultHomeSections: HomeSection[] = [
  {
    _key: "dit-is-lumina", _type: "homeText", eyebrow: "Dit is Lumina", title: "Mensen maken", accent: "Lumina.",
    text: "Een vrouw die haar talent ontdekt. Een nieuwkomer die aansluiting vindt. Iemand die tijd maakt voor een ander.\n\nLumina zet zich in voor vrouwen, nieuwkomers, jongeren en gezinnen. We brengen mensen samen om te leren, ervaringen te delen en mee te doen. Met aandacht voor ieders achtergrond, mogelijkheden en ambities.",
    link: { label: "Leer Lumina kennen", href: "/over-ons" },
  },
  { _key: "programmas", _type: "homePrograms", eyebrow: "Onze programma's", title: "Wat wil", accent: "jij doen?", limit: 4, linkLabel: "Bekijk het aanbod" },
  {
    _key: "vrijwilligers", _type: "homeStory", eyebrow: "Vrijwilligers maken het mogelijk", title: "Wat jij kunt,", accent: "helpt een ander verder.",
    text: "Organiseren, iemand begeleiden, een workshop geven of foto's maken. Wat je graag doet, kan bij Lumina van betekenis zijn.\n\nWe bouwen aan een betrokken groep vrijwilligers. Vertel ons waar je energie van krijgt en hoeveel tijd je hebt. Samen bekijken we wat past.",
    link: { label: "Deel je talent", href: "/doe-mee#vrijwilliger" },
  },
  {
    _key: "visie", _type: "homeQuote", eyebrow: "Waar we in geloven",
    text: "Met al onze krachten gebundeld, alle blaadjes verzameld, zijn we een grote bos bloeiende rozen,",
    accent: "een bloeiende samenleving.", attribution: "Beleidsplan 2026-2030 · Stichting Lumina Collective",
    link: { label: "Lees ons beleidsplan", href: "/anbi#beleidsplan" },
  },
  {
    _key: "meedoen", _type: "homeSteps", eyebrow: "Meedoen bij Lumina", title: "Kom erbij.",
    items: [
      { _key: "laat-horen", title: "Laat van je horen", text: "Stuur een bericht of bel ons voor een kennismaking. Een vraag, een idee of gewoon meer weten: je bent welkom." },
      { _key: "kennismaken", title: "We leren je kennen", text: "In een laagdrempelig gesprek ontdekken we wat je zoekt en welke activiteit, workshop of vrijwilligersrol het beste bij jou past." },
      { _key: "groei-mee", title: "Sluit aan en groei mee", text: "Ontmoet nieuwe mensen, ontwikkel je talenten en draag bij aan de gemeenschap. Op jouw eigen tempo." },
    ],
  },
  {
    _key: "open", _type: "homeText", eyebrow: "ANBI & transparantie", title: "Open over", accent: "onze stichting.", spacing: "compact",
    text: "Wie neemt de beslissingen? Hoe zetten we donaties in? Lees ons beleidsplan, maak kennis met het bestuur en bekijk onze verantwoording.",
    link: { label: "ANBI & transparantie", href: "/anbi" },
  },
  {
    _key: "vragen", _type: "homeFaq", eyebrow: "Goed om te weten", title: "Veelgestelde vragen",
    link: { label: "Stel jouw vraag", href: "/contact" },
    items: [
      { _key: "voor-wie", title: "Voor wie is Lumina er?", text: "Lumina zet zich in voor vrouwen van alle leeftijden, nieuwkomers, jongeren en gezinnen. Bij ieder programma lees je voor wie het bedoeld is. We staan open voor verschillende achtergronden en ervaringen." },
      { _key: "alleen", title: "Kan ik meedoen als ik nog niemand ken?", text: "Zeker. Je kunt alleen contact opnemen of iemand meenemen bij een eerste kennismaking. Vertel ons wat je zoekt; we denken met je mee over een activiteit of volgende stap die bij je past." },
      { _key: "kosten", title: "Kost deelname geld?", text: "Dat verschilt per activiteit. Bij activiteiten waarvoor een eigen bijdrage geldt, houden we rekening met de financiële mogelijkheden van de doelgroep. Je hoort vooraf wat de eventuele kosten zijn." },
      { _key: "vrijwilliger", title: "Hoe kan ik vrijwilliger worden?", text: "Via de pagina Doe mee kun je je interesse doorgeven. Of je nu graag organiseert, mensen begeleidt of een praktische vaardigheid wilt delen: we maken graag kennis." },
    ],
  },
  {
    _key: "kennismaken", _type: "homeCta", eyebrow: "Een eerste stap", title: "Zullen we kennismaken?",
    text: "Als deelnemer, vrijwilliger of samenwerkingspartner. Vertel ons wat jou bezighoudt.",
    primary: { label: "Neem contact op", href: "/contact" }, secondary: { label: "Doe mee", href: "/doe-mee" },
  },
];
