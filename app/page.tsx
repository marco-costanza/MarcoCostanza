import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SocialLinks } from "@/components/social-links";
import CollaborazioniSection from "@/components/collaborazioni-section";
import BailoutBlock from "@/components/bailout-block";
import ArticleCardsHome from "@/components/article-cards-home";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-background-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Formazione di alto livello su Bitcoin e Mercati Finanziari
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto mb-8">
            Nella vita ci vuole Costanza. Divulgazione, consulenza 1to1 e
            percorsi formativi per muoverti con sicurezza tra finanza
            tradizionale e mondo Bitcoin.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="accent" size="lg" asChild>
              <Link href="/servizi">Corsi di formazione</Link>
            </Button>
            <Button variant="accent" size="lg" asChild>
              <Link href="https://marcocostanza.it/formazione-1-to-1/" target="_blank" rel="noopener noreferrer">
                Formazione 1 to 1
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contatti">Contattami</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/chi-sono">Chi sono</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Collabora con */}
      <CollaborazioniSection />

      {/* Servizi - 3 card */}
      <section className="py-16 bg-background-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Servizi e formazione
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Formazione 1 to 1</CardTitle>
                <CardDescription>
                  Costruiamo insieme le tue competenze per muoverti con sicurezza
                  tra finanza tradizionale ed il mondo Bitcoin. Qualunque sia il
                  tuo dubbio lo risolveremo in videochiamate registrate.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="accent" asChild className="w-full sm:w-auto">
                  <Link href="https://marcocostanza.it/formazione-1-to-1/" target="_blank" rel="noopener noreferrer">
                    Prenota
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
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
                <Button variant="accent" asChild className="w-full sm:w-auto">
                  <Link href="https://whalestreet.website" target="_blank" rel="noopener noreferrer">
                    Iscriviti
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
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
                <Button variant="accent" asChild className="w-full sm:w-auto">
                  <Link href="https://bailout.website" target="_blank" rel="noopener noreferrer">
                    Iscriviti
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Chi è Marco Costanza - dopo servizi, con social */}
      <section className="py-16 border-t border-border bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Chi è Marco Costanza
            </h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Marco Costanza, anno 1994. Dopo 8 anni di lavoro come dipendente
              Enel mi sono licenziato per dedicarmi a tempo pieno
              all&apos;approfondimento della finanza e degli investimenti con un
              focus dal 2017 su Bitcoin.
            </p>
            <p className="text-text-muted leading-relaxed mb-4">
              Nel 2024 entri nell&apos;intergruppo parlamentare &quot;Asset
              Digitali, Blockchain e Bitcoin&quot;, portando il tema &quot;Bitcoin
              è diritto al risparmio&quot; alla Camera dei Deputati.
            </p>
            <p className="text-text-muted leading-relaxed mb-6">
              Ad oggi posso vantare un pubblico di oltre 100.000 persone
              distribuite sui principali social network e considerarmi uno tra
              i maggiori esperti e divulgatori italiani di questa tecnologia.
            </p>
            <SocialLinks iconSize={22} className="justify-center flex-wrap gap-4 mb-6" />
            <Button variant="outline" asChild>
              <Link href="/chi-sono">Leggi la storia completa</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Bailout Academy - blocco dedicato */}
      <BailoutBlock />

      {/* News e Articoli */}
      <ArticleCardsHome />

      {/* Merchandise - teaser */}
      <section className="py-12 border-t border-border bg-background-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Merchandise</h2>
          <p className="text-text-muted mb-6 max-w-xl mx-auto">
            Scopri i prodotti e lo shop ufficiale.
          </p>
          <Button variant="accent" asChild>
            <Link href="https://marcocostanza.it/" target="_blank" rel="noopener noreferrer">
              Scopri
            </Link>
          </Button>
        </div>
      </section>

      {/* Affiliazioni - teaser */}
      <section className="py-12 border-t border-border bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Affiliazioni</h2>
          <p className="text-text-muted mb-6 max-w-xl mx-auto">
            Codici sconto e link affiliati per broker, exchange e servizi che
            utilizzo.
          </p>
          <Button variant="outline" asChild>
            <Link href="/affiliazioni">Scopri le affiliazioni</Link>
          </Button>
        </div>
      </section>

      {/* BlockTime - teaser */}
      <section className="py-12 border-t border-border bg-background-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">BlockTime</h2>
          <p className="text-text-muted mb-6 max-w-xl mx-auto">
            Il podcast e il progetto BlockTime. Scopri tutti i progetti.
          </p>
          <Button variant="outline" asChild>
            <Link href="/progetti">Scopri i progetti</Link>
          </Button>
        </div>
      </section>

      {/* Playlist YouTube - teaser */}
      <section className="py-12 border-t border-border bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Playlist YouTube
          </h2>
          <p className="text-text-muted mb-6 max-w-xl mx-auto">
            Video, live e contenuti sul canale YouTube.
          </p>
          <Button variant="accent" asChild>
            <Link href="https://www.youtube.com/@marcocostanza_/videos" target="_blank" rel="noopener noreferrer">
              Vai al canale
            </Link>
          </Button>
        </div>
      </section>

      {/* Restiamo in contatto / CTA finale */}
      <section className="py-16 border-t border-border bg-background-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Restiamo in contatto
          </h2>
          <p className="text-text-muted mb-6 max-w-xl mx-auto">
            YouTube, Instagram, Telegram, X. Per collaborazioni o domande
            scrivi a info@marcocostanza.it.
          </p>
          <SocialLinks iconSize={24} className="justify-center" />
          <div className="mt-8">
            <Button variant="accent" size="lg" asChild>
              <Link href="/contatti">Contattami</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
