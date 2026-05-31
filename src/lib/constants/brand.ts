export const brand = {
  name: "Stichting Lumina Collective",
  shortName: "Lumina Collective",
  domain: "stichtingluminacollective.nl",
  siteUrl: "https://stichtingluminacollective.nl",
  email: process.env.CONTACT_EMAIL ?? "",
  claim: "Ruimte voor vrouwen om te groeien, verbinden en zichtbaar te zijn.",
  description:
    "Stichting Lumina Collective brengt vrouwen samen in Nederland rond ontmoeting, kennis, cultuur en maatschappelijke betrokkenheid.",
  logoFull: "/brand/logo-full.jpeg",
  logoMark: "/brand/logo-mark.jpeg",
} as const;
