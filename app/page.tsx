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
import { assets } from "@/lib/assets";

export default function HomePage() {
  return (
    <>
      {/* Chi è Marco Costanza - due colonne: testo + video YouTube */}
      <section className="relative py-24 border-b-4 border-foreground bg-white overflow-hidden">
        {/* Dynamic geometric decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />
        <div className="absolute top-0 right-32 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center max-w-6xl mx-auto">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 uppercase tracking-tight">
                Chi è Marco Costanza
              </h2>
              <p className="text-zinc-700 leading-relaxed mb-4 text-lg font-medium">
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
              <p className="text-zinc-700 leading-relaxed mb-8 text-lg font-medium">
                Ad oggi posso vantare un pubblico di oltre 100.000 persone
                distribuite sui principali social network e considerarmi uno tra
                i maggiori esperti e divulgatori italiani di questa tecnologia.
              </p>
            </div>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden brutalist-border brutalist-shadow shrink-0 bg-primary p-2">
              <div className="relative w-full h-full rounded-lg overflow-hidden border-2 border-foreground bg-muted">
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
        </div>
      </section>

      {/* Step 2: sezione formazione (ex progetti principali) */}
      <section className="relative py-28 bg-zinc-50 border-b-4 border-foreground">
        {/* Abstract pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#09090b 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6 uppercase">
              Formazione
            </h2>
            <p className="text-xl text-zinc-600 font-medium">
              Percorsi studiati per portarti da zero alla completa autonomia finanziaria e tecnologica.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="flex flex-col h-full bg-white group hover:brutalist-hover transition-all">
              <div className="relative w-full aspect-video bg-muted overflow-hidden border-b-2 border-foreground">
                <Image src={assets.servizi.formazione1to1} alt="" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
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
            <Card className="flex flex-col h-full bg-white group hover:brutalist-hover transition-all">
              <div className="relative w-full aspect-video bg-muted overflow-hidden border-b-2 border-foreground">
                <Image src={assets.servizi.tradingAcademy} alt="" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
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
            <Card className="flex flex-col h-full bg-white group hover:brutalist-hover transition-all">
              <div className="relative w-full aspect-video bg-muted overflow-hidden border-b-2 border-foreground">
                <Image src={assets.servizi.bitcoinAcademy} alt="" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
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

      {/* Step 3: nuova sezione Trustpilot con link diretto */}
      <section className="relative py-28 dark-section border-b-4 border-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
        {/* Big bold text behind */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03]">
          <h2 className="text-[15rem] font-black leading-none whitespace-nowrap">TRUSTPILOT</h2>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto bg-primary text-white brutalist-border brutalist-shadow rounded-2xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase">
              Recensioni Verificate
            </h2>
            <p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10">
              Scopri l&apos;esperienza di chi ha già lavorato con me e, se ti va, lascia anche la tua opinione.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="font-black text-md px-8 h-14 bg-white text-foreground hover:bg-zinc-100"
              >
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
                className="font-black text-md px-8 h-14 bg-transparent border-white text-white hover:bg-white/10 brutalist-shadow"
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
    </>
  );
}
