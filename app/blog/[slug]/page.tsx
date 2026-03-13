import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { cleanSourceParagraphs } from "@/lib/clean-article-html";
import { ChevronLeft } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Articolo non trovato" };
  return {
    title: `${post.title} – Blog – Marco Costanza`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="page-shell">
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ChevronLeft className="size-4" aria-hidden />
          Torna al blog
        </Link>
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            {post.title}
          </h1>
          {post.date && (
            <p className="mt-2 text-sm text-muted-foreground">{post.date}</p>
          )}
        </header>
        <div
          className="article-content prose prose-lg prose-invert max-w-none
            prose-headings:font-semibold prose-headings:mt-4 prose-headings:mb-1.5 prose-headings:first:mt-0
            prose-p:my-1.5 prose-ul:my-2 prose-li:my-0
            prose-img:rounded-lg"
          dangerouslySetInnerHTML={{ __html: cleanSourceParagraphs(post.content) }}
        />
      </article>
    </div>
  );
}
