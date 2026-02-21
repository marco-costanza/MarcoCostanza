import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HOME_ARTICLES } from "@/lib/articles";
import { assets } from "@/lib/assets";

export default function ArticleCardsHome() {
  return (
    <section className="py-16 border-t border-border bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          News e Articoli
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {HOME_ARTICLES.map((article, i) => (
            <Card key={article.url + article.title} className="h-full flex flex-col overflow-hidden bg-white">
              <Link href={article.url} target="_blank" rel="noopener noreferrer" className="block relative w-full aspect-video bg-muted">
                <Image
                  src={assets.articoli[i]?.image ?? "/images/2026/02/Istituzionali-1024x576.png"}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </Link>
              <CardHeader>
                <CardTitle className="text-base line-clamp-3">
                  <Link
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent transition-colors"
                  >
                    {article.title}
                  </Link>
                </CardTitle>
                {article.excerpt && (
                  <CardDescription className="line-clamp-2">
                    {article.excerpt}
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent className="mt-auto pt-0">
                <Link
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-accent hover:underline"
                >
                  Leggi →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button variant="secondary" asChild className="bg-white text-primary hover:bg-white/90">
            <Link href="/blog">Carica altri articoli</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
