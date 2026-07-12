export const brand = {
  name: "Stichting Lumina Collective",
  shortName: "Lumina Collective",
  domain: "stichtingluminacollective.nl",
  siteUrl: "https://stichtingluminacollective.nl",
  email: process.env.CONTACT_EMAIL ?? "info@stichtingluminacollective.nl",
  claim: "Voor vrouwen die ruimte zoeken. En voor vrouwen die ruimte maken.",
  description:
    "Lumina is een Tilburgs collectief waar vrouwen elkaar ontmoeten, kennis delen, verhalen zichtbaar maken en samen nieuwe ruimte creëren.",
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
  logoSocial: "/brand/logo-social.png",
} as const;
