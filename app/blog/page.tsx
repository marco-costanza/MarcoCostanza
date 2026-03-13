import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllBlogPosts } from "@/lib/blog-repository";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Blog – Marco Costanza",
  description: "Articoli e news su Bitcoin, mercati finanziari e divulgazione.",
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 page-shell section-surface p-6 sm:p-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">Blog</h1>
      <p className="text-lg text-muted-foreground max-w-2xl mb-10 sm:mb-12">
        Articoli, analisi e aggiornamenti su Bitcoin e mercati.
      </p>

      {posts.length > 0 && (
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {posts.map((post) => (
            <Card key={post.slug} className="h-full flex flex-col overflow-hidden">
              {post.thumbnail && (
                <Link
                  href={`/blog/${post.slug}`}
                  className="block relative w-full aspect-video bg-muted overflow-hidden border-b border-border"
                >
                  <Image
                    src={post.thumbnail}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </Link>
              )}
              <CardHeader>
                <CardTitle className="text-base leading-tight">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-foreground hover:text-accent transition-colors"
                  >
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="text-sm line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardFooter className="pt-0 mt-auto">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/blog/${post.slug}`}>Leggi</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      <div className="max-w-2xl space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          Altri articoli sono pubblicati su{" "}
          <a
            href="https://marcocostanza.it"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            marcocostanza.it
          </a>
          .
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Segui gli aggiornamenti su YouTube, Instagram e Telegram dalla pagina{" "}
          <Link href="/contatti" className="text-primary hover:underline font-medium">
            Contatti
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
