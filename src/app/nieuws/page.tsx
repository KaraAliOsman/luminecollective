import type { Metadata } from "next";
import { NewsCard } from "@/components/cards/NewsCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { getPageByKey, getPosts } from "@/lib/cms/content";
import { createMetadata } from "@/lib/seo/config";

export const metadata: Metadata = createMetadata({ title: "Nieuws & verhalen", description: "Maak kennis met de ideeën achter Lumina Collective. Lees over ontmoeting, vrijwilligerswerk en onze plannen voor Tilburg.", path: "/nieuws" });
export default async function NieuwsPage() {
  const [page, posts] = await Promise.all([getPageByKey("nieuws"), getPosts()]);
  return <>
    <header className="page-heading"><Container><p className="section-index">Van Lumina</p><Heading as="h1" size="xl">{page?.heroTitle || "Nieuws & verhalen"}</Heading><p className="lead">{page?.heroText || "Wat ons bezighoudt, waar we voor staan en hoe jij kunt bijdragen. Lees mee met Lumina."}</p></Container></header>
    <section className="section"><Container><div className="news-grid">{posts.map(post => <NewsCard key={post.slug} post={post} />)}</div></Container></section>
    <CtaBand title="Een verhaal om te delen?" body="Een ervaring, een idee of een onderwerp dat je belangrijk vindt. We horen graag van je." primary={{ label: "Vertel het ons", href: "/contact?onderwerp=Mijn%20verhaal" }} secondary={{ label: "Doe mee", href: "/doe-mee" }} />
  </>;
}
