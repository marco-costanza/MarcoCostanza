import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { assets } from "@/lib/assets";
import { getAllBlogPosts } from "@/lib/blog-repository";

export default async function HomePage() {
  const posts = await getAllBlogPosts();
  const latestPosts = posts.slice(0, 3);

  return (
    <div className="page-shell">
      <section
        className="relative py-14 lg:py-20 border-b border-primary/15 bg-gradient-to-br from-secondary via-background to-secondary/60 overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <div
          className="absolute -top-24 -right-16 w-80 h-80 bg-primary/20 rounded-full filter blur-3xl opacity-60"
          aria-hidden
        />
        <div
          className="absolute top-16 -left-10 w-72 h-72 bg-accent/20 rounded-full filter blur-3xl opacity-55"
          aria-hidden
        />
        <div className="absolute left-0 right-0 bottom-0 premium-divider opacity-70" aria-hidden />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto grid gap-10 lg:gap-14 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center py-6">
            <div className="space-y-6 text-center lg:text-left">
              <p className="accent-chip mx-auto lg:mx-0">
                Bitcoin, finanza e diritto al risparmio
              </p>
              <h1
                id="hero-heading"
                className="hero-heading text-balance"
              >
                Contenuti seri su Bitcoin
                <span className="block brand-gradient-text">senza fuffa finanziaria.</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                Video, articoli e percorsi di formazione per capire davvero come funziona il denaro
                oggi e come usare Bitcoin in modo responsabile.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 sm:items-center justify-center lg:justify-start">
                <Button variant="accent" size="lg" asChild>
                  <Link href="#ultimi-contenuti">
                    Guarda gli ultimi contenuti
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/servizi">
                    Scopri i miei servizi
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-3 text-left pt-4 border-t border-primary/15 max-w-md mx-auto lg:mx-0">
                <div className="rounded-xl border border-primary/15 bg-white/70 px-3 py-2">
                  <p className="text-lg font-bold text-foreground">100k+</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    Persone raggiunte
                  </p>
                </div>
                <div className="rounded-xl border border-primary/15 bg-white/70 px-3 py-2">
                  <p className="text-lg font-bold text-foreground">1.000+</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    Clienti formati
                  </p>
                </div>
                <div className="rounded-xl border border-primary/15 bg-white/70 px-3 py-2">
                  <p className="text-lg font-bold text-foreground">10+</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    Anni di esperienza
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-full max-w-xl mx-auto aspect-video rounded-2xl overflow-hidden border border-primary/20 bg-muted shadow-[0_24px_60px_-32px_rgba(15,23,42,0.45)]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dxQcBs2blwk?rel=0"
                title="Bitcoin e diritto al risparmio - Intervento Intergruppo parlamentare Bitcoin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative py-16 lg:py-20 bg-secondary/60 border-b border-primary/10"
        aria-labelledby="pilastri-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto mb-8 sm:mb-10 text-center">
            <h2
              id="pilastri-heading"
              className="text-2xl sm:text-3xl font-bold tracking-tight mb-3"
            >
              Cosa trovi qui
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tre modi diversi per lavorare con me: consulenze dirette, percorsi strutturati
              e un&apos;academy Bitcoin-only.
            </p>
          </div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            <Card className="flex flex-col h-full bg-card group">
              <div className="relative w-full aspect-video bg-muted overflow-hidden border-b border-border">
                <Image src={assets.servizi.formazione1to1} alt="Formazione 1 to 1 con Marco Costanza" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <CardHeader>
                <CardTitle>Formazione 1 to 1</CardTitle>
                <CardDescription>
                  Costruiamo insieme le tue competenze per muoverti con sicurezza
                  tra finanza tradizionale ed il mondo Bitcoin. Qualunque sia il
                  tuo dubbio lo risolveremo in videochiamate registrate.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="accent" asChild className="w-full sm:w-auto mt-auto">
                  <Link href="https://marcocostanza.it/formazione-1-to-1/" target="_blank" rel="noopener noreferrer">
                    Prenota
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col h-full bg-card group">
              <div className="relative w-full aspect-video bg-muted overflow-hidden border-b border-border">
                <Image src={assets.servizi.tradingAcademy} alt="WhaleStreet Trading Academy" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <CardHeader>
                <CardTitle>Trading Academy</CardTitle>
                <CardDescription>
                  Formazione pratica e concreta per chi vuole gestire con
                  consapevolezza il proprio denaro, comprendere le logiche della
                  finanza e operare in modo intelligente tra investimento e
                  speculazione. WhaleStreet.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="accent" asChild className="w-full sm:w-auto mt-auto">
                  <Link href="https://whalestreet.website" target="_blank" rel="noopener noreferrer">
                    Iscriviti
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col h-full bg-card group">
              <div className="relative w-full aspect-video bg-muted overflow-hidden border-b border-border">
                <Image src={assets.servizi.bitcoinAcademy} alt="Bailout Bitcoin Academy" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <CardHeader>
                <CardTitle>Bitcoin Academy</CardTitle>
                <CardDescription>
                  Realtà Bitcoin-only formata da un network di professionisti.
                  Uniamo la competenza tecnica, fiscale e strategica dei
                  migliori formatori italiani offrendo formazione di alto livello
                  per privati ed imprese. Bailout.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="accent" asChild className="w-full sm:w-auto mt-auto">
                  <Link href="https://bailout.website" target="_blank" rel="noopener noreferrer">
                    Iscriviti
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {latestPosts.length > 0 && (
        <section
          id="ultimi-contenuti"
          className="relative py-16 lg:py-20 border-b border-primary/10 bg-background"
          aria-labelledby="ultimi-contenuti-heading"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto flex flex-col gap-10 lg:flex-row lg:items-start">
              <div className="flex-1">
                <div className="mb-6 sm:mb-8">
                  <h2
                    id="ultimi-contenuti-heading"
                    className="text-2xl sm:text-3xl font-bold tracking-tight mb-3"
                  >
                    Ultimi articoli dal blog
                  </h2>
                  <p className="text-muted-foreground max-w-2xl">
                    Una selezione degli ultimi pezzi pubblicati su Bitcoin, mercati e finanza
                    personale.
                  </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  {latestPosts.map((post) => (
                    <Card key={post.slug} className="h-full flex flex-col">
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
                            sizes="(max-width: 768px) 100vw, 50vw"
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
                <div className="mt-6">
                  <Button variant="ghost" asChild>
                    <Link href="/blog" className="inline-flex items-center gap-2">
                      Vedi tutti gli articoli
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="w-full max-w-md mx-auto lg:mx-0 lg:w-80 xl:w-96">
                <div className="rounded-2xl border border-primary/15 bg-secondary/60 p-5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">
                    YouTube
                  </p>
                  <h3 className="text-lg font-semibold mb-2">
                    Playlist consigliata
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Una selezione di video per iniziare a capire Bitcoin, rischi e opportunità
                    senza tecnicismi inutili.
                  </p>
                  <div className="relative aspect-video rounded-xl overflow-hidden border border-border mb-4">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/videoseries?list=PLlCwZ0_SnX5n4rTtL_JzqUfrpsbR9f7D3"
                      title="Playlist YouTube Marco Costanza"
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
          </div>
        </section>
      )}

      <section
        className="relative py-16 lg:py-20 border-b border-primary/15 overflow-hidden bg-secondary/70"
        aria-labelledby="trustpilot-heading"
      >
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" aria-hidden />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-white via-secondary/80 to-accent/10 text-foreground rounded-2xl p-8 sm:p-10 md:p-16 text-center shadow-[0_22px_60px_-36px_rgba(15,23,42,0.75)] border border-primary/15">
            <div className="relative w-full max-w-2xl mx-auto aspect-video rounded-xl overflow-hidden mb-8">
              <Image
                src={assets.trustpilotHero}
                alt="Recensioni e valutazione Trustpilot - Marco Costanza"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>
            <h2 id="trustpilot-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Recensioni Verificate
            </h2>
            <p className="text-foreground text-base sm:text-lg font-medium max-w-2xl mx-auto mb-8 sm:mb-10">
              Scopri l&apos;esperienza di chi ha già lavorato con me e, se ti va, lascia anche la tua opinione.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6">
              <Button variant="accent" size="lg" asChild>
                <Link
                  href="https://it.trustpilot.com/review/marcocostanza.it"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Leggi le recensioni
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="shadow-sm hover:bg-primary/5 font-semibold"
              >
                <Link
                  href="https://it.trustpilot.com/evaluate/marcocostanza.it"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lascia una recensione
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
