import { brand } from "@/lib/constants/brand";

// Public governance details from the foundation's Beleidsplan 2026-2030.
export const organization = {
  policyPeriod: "2026-2030",
  policyPages: 10,
  policySize: "1,5 MB",
  rsin: null as string | null,
  anbiStatus: "aangevraagd" as "aangevraagd" | "toegekend",
  quote:
    "De vrouw van nu: een bewuste, mondige, zelfredzame en actieve deelneemster in de samenleving. In onze kerngedachte kan elk mens, elke vrouw, iets waardevols teruggeven aan de maatschappij, een klein bloemblaadje van zichzelf. Met al onze krachten gebundeld, alle blaadjes verzameld, zijn we een grote bos bloeiende rozen, een bloeiende samenleving.",
  board: [
    { name: "Yasemin Ulu Aksu", role: "Voorzitter" },
    { name: "Seyma Yesil", role: "Secretaris" },
    { name: "Şeyma Söğüt", role: "Penningmeester" },
  ],
  remunerationPolicy:
    "Bestuursleden ontvangen geen beloning voor hun werkzaamheden. Alleen daadwerkelijk gemaakte kosten kunnen, indien redelijk en aantoonbaar, worden vergoed. De stichting heeft geen betaalde directie of personeel in loondienst. Eventuele vrijwilligersvergoedingen blijven binnen de kaders van de geldende wet- en regelgeving.",
  mission:
    "Het bevorderen van welzijn, zelfredzaamheid en maatschappelijke participatie van vrouwen, nieuwkomers, jongeren en gezinnen, door educatie, ontmoeting, samenwerking en maatschappelijke betrokkenheid — in een samenleving waarin gelijke kansen en verbondenheid centraal staan.",
  vision:
    "Een inclusieve samenleving waarin verbinding, gelijkwaardigheid en solidariteit centraal staan, en waarin de stichting uitgroeit tot een betrouwbare, toegankelijke maatschappelijke organisatie — lokaal, regionaal en waar mogelijk internationaal.",
  coreValues: [
    "Verbinding",
    "Respect",
    "Inclusiviteit",
    "Integriteit",
    "Transparantie",
    "Gelijkwaardigheid",
    "Vrijwillige inzet",
    "Ontwikkeling",
    "Duurzaamheid",
    "Maatschappelijke betrokkenheid",
  ],
  statutoryPurpose:
    "De stichting stelt zich ten doel het bevorderen van het welzijn, de zelfredzaamheid en de maatschappelijke participatie van vrouwen van alle leeftijdsgroepen, alsmede al hetgeen met het vorenstaande verband houdt of daartoe bevorderlijk kan zijn, alles in de ruimste zin des woords.",
  statutoryCategories: [
    {
      category: "Welzijn, kwetsbare situaties & gezinnen",
      items: [
        "Het verlenen van psychologische en crisishulp aan vrouwen in kwetsbare situaties.",
        "Het ondersteunen van alleenstaande moeders en moeders in een sociaal isolement.",
        "Het bereiken en begeleiden van vrouwen die in een sociaal isolement verkeren.",
        "Het bieden van ondersteuning aan personen met een verhoogd suïciderisico en begeleiding bij verslavingsproblematiek.",
        "Het organiseren van psychologische workshops en lotgenotengroepen.",
      ],
    },
    {
      category: "Inclusie, loopbaan & ondernemerschap",
      items: [
        "Het tegengaan van sociale uitsluiting en het bevorderen van de integratie van vrouwen met een beperking.",
        "Het stimuleren van loopbaanontwikkeling, loopbaanplanning en -begeleiding.",
        "Het bieden van ondersteuning bij ondernemerschap van de doelgroep.",
        "Het opzetten van mentorprogramma's en talentontwikkeling.",
        "Het organiseren van benefietavonden, donateursbijeenkomsten, fancy fairs en bazaars.",
      ],
    },
    {
      category: "Educatie, vorming & voorzieningen",
      items: [
        "Het opzetten van onderwijs- en huisvestingsprojecten, waaronder scholen en een eigen onderwijsinstelling op hoger niveau.",
        "Het faciliteren van internaten en woonvoorzieningen voor jonge vrouwen.",
        "Het organiseren van leeskampen met overnachting en taalbegeleiding.",
        "Het initiëren van zusterschoolprojecten.",
      ],
    },
    {
      category: "Internationale solidariteit & samenwerking",
      items: [
        "Het bieden van internationale hulp aan kwetsbare gemeenschappen.",
        "Het ondersteunen van weeshuizen in binnen- en buitenland.",
        "Het aanleggen van waterputten in gemeenschappen zonder toegang tot schoon drinkwater.",
        "Het samenwerken met andere maatschappelijke organisaties met een vergelijkbare doelstelling.",
      ],
    },
  ],
  swot: {
    strengths: [
      "Betrokken, gekwalificeerde professionals met maatschappelijke expertise",
      "Vooruitstrevende en verbindende visie geworteld in Tilburg",
      "Laagdrempelige activiteiten, koffieochtenden en ontmoetingsruimtes",
      "Inspirerende en vernieuwende initiatieven gericht op zelfredzaamheid",
      "Sterke culturele sensitiviteit en meertalige benaderbaarheid",
    ],
    weaknesses: [
      "Geen betaalde krachten (100% afhankelijk van vrijwillige inzet)",
      "Financieel afhankelijk van subsidies, fondsen en donaties",
      "Gevoelig voor bezuinigingen en beleidswijzigingen in het sociale domein",
    ],
    opportunities: [
      "Verder uitbreiden van een divers en inclusief bereik in Tilburg en de regio",
      "Kennis van betrokken professionals inzetten voor lezingen en seminars",
      "Gerichte deskundigheidsbevordering en trainingen bieden aan vrijwilligsters",
      "Structurele samenwerkingen met gemeenten, scholen en maatschappelijke partners",
      "Onderzoeksteam opzetten voor wetenschappelijke onderbouwing van activiteiten",
    ],
    threats: [
      "Toenemende tijdsdruk bij vrijwilligers door studie-, zorg- en werkverplichtingen",
      "Moeilijk bereikbare doelgroepen door taalbarrières of diep sociaal isolement",
      "Complexe aanvraagprocedures bij overheden en fondsen",
    ],
  },
  taxBenefits: {
    title: "Giftenaftrek voor inkomsten- en vennootschapsbelasting",
    description:
      "Stichting Lumina Collective is aangemeld als algemeen nut beogende instelling (ANBI). Hierdoor kunnen giften en donaties onder de geldende fiscale regels aftrekbaar zijn voor de inkomstenbelasting (particulieren) en vennootschapsbelasting (ondernemingen).",
  },
  document: {
    title: "Beleidsplan 2026-2030",
    href: brand.policyPlan,
    cover: "/documenten/beleidsplan-cover.png",
    sha256: "cbe36cad43ba1e8eaad8bdb6960ea79357aea1959b39b48200086166e373eb24",
  },
} as const;
