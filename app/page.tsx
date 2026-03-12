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

export default function HomePage() {
  return (
    <div className="page-shell">
      <section
        className="relative py-16 lg:py-24 border-b border-primary/20 bg-gradient-to-br from-background via-card/70 to-transparent overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <div className="absolute -top-16 -right-12 w-80 h-80 bg-primary/20 rounded-full filter blur-3xl opacity-70" aria-hidden />
        <div className="absolute top-8 right-44 w-72 h-72 bg-accent/20 rounded-full filter blur-3xl opacity-55" aria-hidden />
        <div className="absolute left-0 right-0 bottom-0 premium-divider" aria-hidden />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="section-surface grid gap-12 lg:grid-cols-2 lg:gap-20 items-center max-w-6xl mx-auto p-7 sm:p-10">
            <div className="text-center lg:text-left">
              <h1 id="hero-heading" className="hero-heading text-foreground mb-6">
                Chi è Marco Costanza
              </h1>
              <p className="text-foreground leading-relaxed mb-4 text-base sm:text-lg font-medium">
                Marco Costanza, anno 1994. Dopo 8 anni di lavoro come dipendente
                Enel mi sono licenziato per dedicarmi a tempo pieno
                all&apos;approfondimento della finanza e degli investimenti con un
                focus dal 2017 su Bitcoin.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nel 2024 entro nell&apos;intergruppo parlamentare &quot;Asset
                Digitali, Blockchain e Bitcoin&quot;, portando il tema &quot;Bitcoin
                è diritto al risparmio&quot; alla Camera dei Deputati.
              </p>
              <p className="text-foreground leading-relaxed mb-8 text-base sm:text-lg font-medium">
                Ad oggi posso vantare un pubblico di oltre 100.000 persone
                distribuite sui principali social network e considerarmi uno tra
                i maggiori esperti e divulgatori italiani di questa tecnologia.
              </p>
              <div className="mb-8 grid grid-cols-3 gap-3 text-left">
                <div className="rounded-xl border border-primary/20 bg-background/70 px-3 py-2">
                  <p className="text-lg font-bold text-foreground">100k+</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Audience</p>
                </div>
                <div className="rounded-xl border border-primary/20 bg-background/70 px-3 py-2">
                  <p className="text-lg font-bold text-foreground">2017</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Focus BTC</p>
                </div>
                <div className="rounded-xl border border-primary/20 bg-background/70 px-3 py-2">
                  <p className="text-lg font-bold text-foreground">2024</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Parlamento</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 sm:items-center">
                <Button variant="accent" size="lg" asChild>
                  <Link href="/progetti">
                    Scopri i progetti
                  </Link>
                </Button>
                <Button variant="default" size="lg" asChild>
                  <Link href="/contatti">
                    Prenota una consulenza
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-primary/30 bg-muted shadow-card shrink-0">
              <span className="absolute left-3 top-3 z-10 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                Intervento Ufficiale
              </span>
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

      <section className="relative py-16 lg:py-24 bg-muted/40 border-b border-primary/15" aria-labelledby="formazione-heading">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(rgb(33, 33, 33) 2px, transparent 2px)", backgroundSize: "32px 32px" }} aria-hidden />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <h2 id="formazione-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Formazione
            </h2>
            <p className="text-lg text-muted-foreground font-medium">
              Percorsi studiati per portarti da zero alla completa autonomia finanziaria e tecnologica.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            <Card className="flex flex-col h-full bg-card group">
              <div className="relative w-full aspect-video bg-muted overflow-hidden border-b border-border">
                <Image src={assets.servizi.formazione1to1} alt="Formazione 1 to 1 con Marco Costanza" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
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
                <Image src={assets.servizi.tradingAcademy} alt="WhaleStreet Trading Academy" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
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
                <Image src={assets.servizi.bitcoinAcademy} alt="Bailout Bitcoin Academy" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
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

      <section className="relative py-16 lg:py-24 dark-section border-b border-primary/25 overflow-hidden" aria-labelledby="trustpilot-heading">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" aria-hidden />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-card via-cypherpunk to-accent/20 text-foreground rounded-xl p-8 sm:p-10 md:p-16 text-center shadow-card border border-white/15">
            <div className="relative w-full max-w-2xl mx-auto aspect-video rounded-xl overflow-hidden mb-8 border border-white/10">
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
                className="border-white/50 text-white hover:bg-white/10 font-semibold"
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
