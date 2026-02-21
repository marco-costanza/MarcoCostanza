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
import { SocialLinks } from "@/components/social-links";
import CollaborazioniSection from "@/components/collaborazioni-section";
import BailoutBlock from "@/components/bailout-block";
import ArticleCardsHome from "@/components/article-cards-home";
import { assets } from "@/lib/assets";

export default function HomePage() {
  return (
    <>
      {/* Hero - sfondo blu e immagine come riferimento */}
      <section
        className="relative py-20 md:py-28 bg-primary text-white overflow-hidden"
        style={{
          backgroundImage: `url(${assets.hero.background})`,
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Formazione di alto livello su Bitcoin e Mercati Finanziari
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Nella vita ci vuole Costanza. Divulgazione, consulenza 1to1 e
            percorsi formativi per muoverti con sicurezza tra finanza
            tradizionale e mondo Bitcoin.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg" asChild className="bg-white text-primary hover:bg-white/90">
              <Link href="/servizi">Corsi di formazione</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild className="bg-white text-primary hover:bg-white/90">
              <Link href="https://marcocostanza.it/formazione-1-to-1/" target="_blank" rel="noopener noreferrer">
                Formazione 1 to 1
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white/10">
              <Link href="/contatti">Contattami</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white/10">
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
            <Card className="overflow-hidden">
              <div className="relative w-full aspect-video bg-muted">
                <Image src={assets.servizi.formazione1to1} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
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
                <Button variant="accent" asChild className="w-full sm:w-auto">
                  <Link href="https://marcocostanza.it/formazione-1-to-1/" target="_blank" rel="noopener noreferrer">
                    Prenota
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative w-full aspect-video bg-muted">
                <Image src={assets.servizi.tradingAcademy} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
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
                <Button variant="accent" asChild className="w-full sm:w-auto">
                  <Link href="https://whalestreet.website" target="_blank" rel="noopener noreferrer">
                    Iscriviti
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative w-full aspect-video bg-muted">
                <Image src={assets.servizi.bitcoinAcademy} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
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

      {/* Chi è Marco Costanza - due colonne: testo + video YouTube */}
      <section className="py-16 border-t border-border bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-start max-w-6xl mx-auto">
            <div className="text-center lg:text-left">
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
            <SocialLinks iconSize={22} className="justify-center lg:justify-start flex-wrap gap-4 mb-6" />
            <Button variant="outline" asChild>
              <Link href="/chi-sono">Leggi la storia completa</Link>
            </Button>
            </div>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-muted shrink-0">
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

      {/* Bailout Academy - blocco dedicato */}
      <BailoutBlock />

      {/* News e Articoli */}
      <ArticleCardsHome />

      {/* 4 card: Merchandise, Affiliazioni, BlockTime, Playlist */}
      <section className="py-16 border-t border-border bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="https://marcocostanza.myspreadshop.net" target="_blank" rel="noopener noreferrer" className="group block rounded-lg overflow-hidden border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
              <div className="relative w-full aspect-video bg-muted">
                <Image src={assets.cards.merchandise} alt="Merchandise" fill className="object-cover group-hover:scale-[1.02] transition-transform" sizes="(max-width: 640px) 100vw, 50vw" />
              </div>
              <h2 className="text-lg font-bold text-primary p-4 text-center">Merchandise</h2>
            </Link>
            <Link href="https://linktr.ee/marcocostanza" target="_blank" rel="noopener noreferrer" className="group block rounded-lg overflow-hidden border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
              <div className="relative w-full aspect-video bg-muted">
                <Image src={assets.cards.affiliazioni} alt="Affiliazioni" fill className="object-cover group-hover:scale-[1.02] transition-transform" sizes="(max-width: 640px) 100vw, 50vw" />
              </div>
              <h2 className="text-lg font-bold text-primary p-4 text-center">Affiliazioni</h2>
            </Link>
            <Link href="https://open.spotify.com/show/0gUVINh9VDMyJcqT3kFiMP" target="_blank" rel="noopener noreferrer" className="group block rounded-lg overflow-hidden border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
              <div className="relative w-full aspect-video bg-muted">
                <Image src={assets.cards.blocktime} alt="BlockTime" fill className="object-cover group-hover:scale-[1.02] transition-transform" sizes="(max-width: 640px) 100vw, 50vw" />
              </div>
              <h2 className="text-lg font-bold text-primary p-4 text-center">BlockTime</h2>
            </Link>
            <Link href="https://www.youtube.com/@marcocostanza_/playlists" target="_blank" rel="noopener noreferrer" className="group block rounded-lg overflow-hidden border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
              <div className="relative w-full aspect-video bg-muted">
                <Image src={assets.cards.playlist} alt="Playlist YouTube" fill className="object-cover group-hover:scale-[1.02] transition-transform" sizes="(max-width: 640px) 100vw, 50vw" />
              </div>
              <h2 className="text-lg font-bold text-primary p-4 text-center">Playlist YouTube</h2>
            </Link>
          </div>
        </div>
      </section>

      {/* Recensioni / Trustpilot */}
      <section className="py-16 border-t border-border bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden">
            <Image src={assets.trustpilot} alt="Recensioni Trustpilot" width={1024} height={576} className="w-full h-auto object-contain" />
          </div>
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
