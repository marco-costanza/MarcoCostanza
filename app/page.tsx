import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SocialLinks } from "@/components/social-links";

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
              <Link href="/contatti">Contattami</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/chi-sono">Chi sono</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Bio breve */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Chi è Marco Costanza
            </h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Marco Costanza, anno 1994. Dopo 8 anni come dipendente Enel mi
              sono licenziato per dedicarmi a tempo pieno alla finanza e agli
              investimenti, con un focus dal 2017 su Bitcoin.
            </p>
            <p className="text-text-muted leading-relaxed mb-4">
              Nel 2024 entro nell&apos;intergruppo parlamentare &quot;Asset
              Digitali, Blockchain e Bitcoin&quot;, portando il tema &quot;Bitcoin
              è diritto al risparmio&quot; alla Camera dei Deputati.
            </p>
            <p className="text-text-muted leading-relaxed mb-6">
              Oggi posso vantare un pubblico di oltre 100.000 persone sui
              principali social e considerarmi uno tra i maggiori esperti e
              divulgatori italiani di questa tecnologia.
            </p>
            <Button variant="outline" asChild>
              <Link href="/chi-sono">Leggi la storia completa</Link>
            </Button>
          </div>
        </div>
      </section>

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
                  tra finanza tradizionale e mondo Bitcoin. Videochiamate
                  registrate, qualunque sia il tuo dubbio.
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
                  WhaleStreet: formazione pratica su trading e investimenti.
                  Gestisci con consapevolezza il tuo denaro e comprendi le logiche
                  della finanza.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="accent" asChild className="w-full sm:w-auto">
                  <Link href="https://whalestreet.website" target="_blank" rel="noopener noreferrer">
                    Vai a WhaleStreet
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Bitcoin Academy</CardTitle>
                <CardDescription>
                  Bailout: realtà Bitcoin-only. Masterclass in live, numero
                  limitato di studenti. Dall&apos;acquisto alla custodia fino
                  alla spesa, in 2 settimane.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="accent" asChild className="w-full sm:w-auto">
                  <Link href="https://bailout.website" target="_blank" rel="noopener noreferrer">
                    Vai a Bailout
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA + social */}
      <section className="py-16 border-t border-border">
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
