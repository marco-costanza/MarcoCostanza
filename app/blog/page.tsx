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
  title: "Articoli – Marco Costanza",
  description: "Articoli e news su Bitcoin, mercati finanziari e divulgazione.",
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="page-shell">
      <section className="border-b border-primary/15 bg-secondary/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 max-w-4xl">
          <p className="accent-chip mb-4">Articoli &amp; analisi</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Articoli
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Articoli, analisi e aggiornamenti su Bitcoin, mercati e finanza personale.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 max-w-6xl">
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

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
          <div className="max-w-2xl space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Una parte dei contenuti viene pubblicata anche su altre piattaforme, sempre con
              lo stesso approccio: niente scorciatoie, niente promesse di guadagni veloci.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Per non perderti gli aggiornamenti, puoi seguire le mie comunicazioni sui social
              dalla pagina{" "}
              <Link href="/contatti" className="text-primary hover:underline font-medium">
                Contatti
              </Link>
              .
            </p>
          </div>
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <div className="rounded-2xl border border-primary/15 bg-secondary/60 p-5 sm:p-6 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                YouTube
              </p>
              <h2 className="text-lg font-semibold">
                Playlist articoli in video
              </h2>
              <p className="text-sm text-muted-foreground">
                Alcuni concetti affrontati negli articoli hanno anche una versione video,
                pensata per chi preferisce approfondire guardando e ascoltando.
              </p>
              <div className="relative aspect-video rounded-xl overflow-hidden border border-border">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/videoseries?list=PLlCwZ0_SnX5l2nCfKYnP2ojm8g2fVtOvC"
                  title="Playlist video articoli Marco Costanza"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <Button variant="accent" className="w-full" asChild>
                <Link
                  href="https://www.youtube.com/@MarcoCostanza"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vai al canale YouTube
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
