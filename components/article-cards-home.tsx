import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HOME_ARTICLES } from "@/lib/articles";

export default function ArticleCardsHome() {
  return (
    <section className="py-16 border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          News e Articoli
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {HOME_ARTICLES.map((article) => (
            <Card key={article.url + article.title} className="h-full flex flex-col">
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
          <Button variant="outline" asChild>
            <Link href="/blog">Carica altri articoli</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
