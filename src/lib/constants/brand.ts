export const brand = {
  name: "Stichting Lumina Collective",
  shortName: "Lumina Collective",
  domain: "stichtingluminacollective.nl",
  siteUrl: "https://stichtingluminacollective.nl",
  email: process.env.CONTACT_EMAIL ?? "",
  claim: "Ruimte voor vrouwen om te groeien, verbinden en zichtbaar te zijn.",
  description:
    "Stichting Lumina Collective is een Tilburgse stichting voor sociaal-maatschappelijk welzijnswerk. We brengen vrouwen samen rond ontmoeting, ondersteuning, cultuur, kennis en maatschappelijke participatie.",
  kvk: "42082909",
  establishmentNumber: "420829090000",
  sbi: "88992 - Sociaal-maatschappelijk welzijnswerk",
  address: {
    street: "Nimrodstraat 30",
    postalCode: "5042 WX",
    city: "Tilburg",
    country: "Nederland",
  },
  logoFull: "/brand/logo-mark.png",
  logoMark: "/brand/logo-mark.png",
} as const;
