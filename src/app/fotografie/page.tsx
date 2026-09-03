import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { photography } from "@/data/placeholders";
import { createMetadata } from "@/lib/seo/config";

export const metadata: Metadata = createMetadata({ title: "Fotografie", description: "Bronnen en credits bij de fotografie op de website van Lumina Collective.", path: "/fotografie" });

export default function PhotographyPage() {
  return <><header className="page-heading"><Container><p className="section-index">Met dank aan de makers</p><Heading as="h1" size="xl">Fotografie</Heading><p className="lead">De website gebruikt gelicentieerde sfeerfotografie om onze thema&apos;s te verbeelden. De afgebeelde personen zijn geen portretten van deelnemers, vrijwilligers of bestuurders van Lumina.</p></Container></header><section className="section"><Container><div className="editorial-text"><h2>Bronnen & credits</h2><p>De foto&apos;s zijn beschikbaar onder de <a href="https://www.pexels.com/license/" target="_blank" rel="noopener noreferrer">Pexels-licentie</a>. Foto&apos;s van eigen activiteiten publiceren we alleen met toestemming van de betrokkenen.</p><dl className="fact-list mt-8">{Object.values(photography).map(photo => <div key={photo.src}><dt>{photo.label}</dt><dd><a href={photo.sourceUrl} target="_blank" rel="noopener noreferrer">{photo.credit} <ArrowUpRight size={14} className="inline" aria-hidden="true" /></a></dd></div>)}</dl><h2>Logo & beleidsplan</h2><p>Het logo en het beleidsplan zijn van Stichting Lumina Collective. Voor vragen over beeldgebruik kun je contact opnemen met de stichting.</p></div></Container></section></>;
}
