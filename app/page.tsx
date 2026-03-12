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

      {/* Step 2: sezione formazione (ex progetti principali) */}
      <section className="py-16 bg-background-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Formazione
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

      {/* Step 3: nuova sezione Trustpilot con link diretto */}
      <section className="py-16 border-t border-border bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Recensioni su Trustpilot
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Le recensioni verificate su di me e sui miei percorsi sono raccolte
            su Trustpilot. Leggile per capire l&apos;esperienza di chi ha
            già lavorato con me e, se ti va, lascia anche la tua.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="secondary"
              size="lg"
              asChild
              className="bg-white text-primary hover:bg-white/90"
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
              variant="secondary"
              size="lg"
              asChild
              className="bg-white text-primary hover:bg-white/90"
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
      </section>
    </>
  );
}
