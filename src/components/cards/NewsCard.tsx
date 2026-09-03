import Link from "next/link";
import { CMSImage } from "@/components/ui/CMSImage";
import { TextLink } from "@/components/ui/TextLink";
import { formatDate } from "@/lib/utils/dates";
import type { PostDisplay } from "@/types/cms";

export const categoryLabels: Record<string, string> = { nieuws: "Nieuws", verhalen: "Verhalen", interviews: "Interviews", terugblik: "Terugblik", kennis: "Kennis", persbericht: "Persbericht" };

export function NewsCard({ post }: { post: PostDisplay }) {
  const href = `/nieuws/${post.slug}`;
  return <article className="news-card">
    <Link href={href} tabIndex={-1} aria-hidden="true" className="img-zoom"><CMSImage image={post.image} fallback={post.visual} sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw" /></Link>
    <span className="news-card__category">{categoryLabels[post.category] || post.category} <span aria-hidden="true">/</span> <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time></span>
    <h2><Link href={href}>{post.title}</Link></h2>
    <p>{post.excerpt}</p>
    <TextLink href={href}>Lees het verhaal</TextLink>
  </article>;
}
