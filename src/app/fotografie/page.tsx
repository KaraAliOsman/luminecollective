import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { photography } from "@/data/placeholders";
import { createMetadata } from "@/lib/seo/config";

export const metadata: Metadata = createMetadata({ title: "Fotografie", description: "Bronnen en credits bij de fotografie op de website van Lumina Collective.", path: "/fotografie" });

export default function PhotographyPage() {
  const photos = [...new Map(Object.values(photography).map(photo => [photo.src, photo])).values()];
  return <><header className="page-heading"><Container><p className="section-index">Met dank aan de makers</p><Heading as="h1" size="xl">Fotografie</Heading><p className="lead">Foto&apos;s van onze eigen activiteiten laten zien wat Lumina in het dagelijks leven betekent. Waar eigen beeld nog ontbreekt, gebruiken we gelicentieerde sfeerfotografie.</p></Container></header><section className="section"><Container><div className="editorial-text"><h2>Bronnen & credits</h2><p>De eigen beelden komen uit publicaties van Stichting Lumina Collective. We gaan zorgvuldig om met beeldgebruik en publiceren herkenbare personen alleen met toestemming. Aanvullende sfeerfotografie valt onder de <a href="https://www.pexels.com/license/" target="_blank" rel="noopener noreferrer">Pexels-licentie</a>; de personen op die beelden zijn geen deelnemers, vrijwilligers of bestuurders van Lumina.</p><dl className="fact-list mt-8">{photos.map(photo => <div key={photo.src}><dt>{photo.label}{photo.isPreview ? " (sfeerfotografie)" : ""}</dt><dd><a href={photo.sourceUrl} target="_blank" rel="noopener noreferrer">{photo.credit} <ArrowUpRight size={14} className="inline" aria-hidden="true" /></a></dd></div>)}</dl><h2>Logo & beleidsplan</h2><p>Het logo en het beleidsplan zijn van Stichting Lumina Collective. Voor vragen over beeldgebruik kun je contact opnemen met de stichting.</p></div></Container></section></>;
}
