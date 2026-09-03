import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NewsCard, categoryLabels } from "@/components/cards/NewsCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CMSImage } from "@/components/ui/CMSImage";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { PortableText } from "@/components/ui/PortableText";
import { TextLink } from "@/components/ui/TextLink";
import { StructuredData } from "@/components/seo/StructuredData";
import { getPostBySlug, getPostSlugs, getRelatedPosts, getPosts } from "@/lib/cms/content";
import { createMetadata } from "@/lib/seo/config";
import { blogPostingJsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonLd";
import { formatDate } from "@/lib/utils/dates";
import type { SanityBlock } from "@/types/sanity";

type Props = { params: Promise<{ slug: string }> };
export async function generateStaticParams() { return getPostSlugs(); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return post ? createMetadata({ title: post.seoTitle || post.title, description: post.metaDescription || post.excerpt, path: `/nieuws/${slug}` }) : {};
}

export default async function NieuwsDetailPage({ params }: Props) {
  const { slug } = await params;
  const [post, related] = await Promise.all([getPostBySlug(slug), getRelatedPosts(slug)]);
  if (!post) notFound();
  const relatedPosts = related.length ? related : (await getPosts()).filter(item => item.slug !== slug).slice(0, 3);
  const crumbs = [{ name: "Home", path: "/" }, { name: "Nieuws & verhalen", path: "/nieuws" }, { name: post.title, path: `/nieuws/${slug}` }];
  return <>
    <StructuredData data={blogPostingJsonLd({ title: post.title, description: post.excerpt, slug, datePublished: new Date(post.publishedAt).toISOString() })} />
    <StructuredData data={breadcrumbJsonLd(crumbs)} />
    <Breadcrumbs items={crumbs} />
    <article>
      <header className="page-heading article-heading"><Container>
        <p className="section-index">{categoryLabels[post.category] || post.category}</p>
        <Heading as="h1" size="xl">{post.title}</Heading>
        <p className="article-meta"><time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time><span aria-hidden="true">/</span>{post.author}</p>
        <p className="lead">{post.excerpt}</p>
      </Container></header>
      <Container><CMSImage className="article-photo" image={post.image} fallback={post.visual} priority sizes="(min-width: 1320px) 1224px, 100vw" /></Container>
      <section className="section"><Container><div className="editorial-text article-body">{post.body?.length ? <PortableText value={post.body as SanityBlock[]} /> : (post.bodyText || post.excerpt).split("\n\n").map((paragraph, i) => <p key={i}>{paragraph}</p>)}<div className="article-links"><TextLink href="/anbi">Ons beleidsplan & transparantie</TextLink><TextLink href="/nieuws">Terug naar alle verhalen</TextLink></div></div></Container></section>
    </article>
    {relatedPosts.length > 0 && <section className="section section--sage"><Container><div className="section-heading"><div><p className="section-index">Verder lezen</p><Heading size="lg">Meer van Lumina.</Heading></div></div><div className="news-grid">{relatedPosts.map(item => <NewsCard key={item.slug} post={item} />)}</div></Container></section>}
    <CtaBand title="Geef jouw idee de ruimte." body="Wil je iets organiseren, je kennis delen of gewoon kennismaken? We denken graag met je mee." primary={{ label: "Neem contact op", href: "/contact" }} secondary={{ label: "Doe mee", href: "/doe-mee" }} />
  </>;
}
