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
      <section className="relative py-20 border-t border-white/5 overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-6">
                Chi è Marco Costanza
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
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
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                Ad oggi posso vantare un pubblico di oltre 100.000 persone
                distribuite sui principali social network e considerarmi uno tra
                i maggiori esperti e divulgatori italiani di questa tecnologia.
              </p>
            </div>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden glass-panel shrink-0 shadow-glow p-1">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-muted">
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
      <section className="relative py-24 bg-card/20 border-y border-white/5">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
              Formazione
            </h2>
            <p className="text-lg text-muted-foreground">
              Percorsi studiati per portarti da zero alla completa autonomia finanziaria e tecnologica.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="overflow-hidden group flex flex-col h-full">
              <div className="relative w-full aspect-video bg-muted overflow-hidden border-b border-white/10">
                <Image src={assets.servizi.formazione1to1} alt="" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
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
            <Card className="overflow-hidden group flex flex-col h-full">
              <div className="relative w-full aspect-video bg-muted overflow-hidden border-b border-white/10">
                <Image src={assets.servizi.tradingAcademy} alt="" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
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
            <Card className="overflow-hidden group flex flex-col h-full">
              <div className="relative w-full aspect-video bg-muted overflow-hidden border-b border-white/10">
                <Image src={assets.servizi.bitcoinAcademy} alt="" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
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
      <section className="relative py-20 border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full max-w-[800px] h-[400px] bg-primary/20 blur-[150px] rounded-full pointer-events-none -z-10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-10 md:p-16 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Recensioni su Trustpilot
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
              Le recensioni verificate su di me e sui miei percorsi sono raccolte
              su Trustpilot. Leggile per capire l&apos;esperienza di chi ha
              già lavorato con me e, se ti va, lascia anche la tua.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button
                variant="default"
                size="lg"
                asChild
                className="font-semibold text-md px-8 h-12"
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
                className="font-semibold text-md px-8 h-12"
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
