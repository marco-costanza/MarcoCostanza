import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Servizi – Marco Costanza",
  description:
    "Consulenze 1:1, WhaleStreet Trading Academy e Bailout Bitcoin Academy. Tutti i servizi per formarti su Bitcoin e finanza.",
};

const SERVIZI = [
  {
    id: "consulenze",
    title: "Consulenze 1:1",
    tag: "Per chi vuole un confronto diretto",
    image: assets.servizi.formazione1to1,
    description:
      "Sessioni personalizzate per fare chiarezza su Bitcoin, investimenti e gestione del rischio. Ci concentriamo solo sui tuoi dubbi, senza promesse di guadagni facili.",
    bullets: [
      "Call video registrata che puoi rivedere",
      "Focus su situazione personale e obiettivi",
      "Approccio prudente e concreto, niente fuffa",
    ],
    href: "https://marcocostanza.it/formazione-1-to-1/",
    cta: "Prenota una consulenza",
  },
  {
    id: "whalestreet",
    title: "WhaleStreet Trading Academy",
    tag: "Formazione su mercati e strategie",
    image: assets.servizi.tradingAcademy,
    description:
      "Academy dedicata a chi vuole capire davvero come funzionano i mercati, le strategie operative e la gestione del rischio nel tempo.",
    bullets: [
      "Percorsi su trading, analisi e gestione rischio",
      "Report, community e contenuti aggiornati",
      "Per chi vuole autonomia, non segnali di trading",
    ],
    href: "https://whalestreet.website",
    cta: "Vai a WhaleStreet",
  },
  {
    id: "bailout",
    title: "Bailout Bitcoin Academy",
    tag: "Percorso Bitcoin-only",
    image: assets.servizi.bitcoinAcademy,
    description:
      "Masterclass Bitcoin-only in live: dall’acquisto alla custodia fino alla spesa quotidiana, con un network di professionisti.",
    bullets: [
      "Percorso intensivo in 2 settimane",
      "Custodia, tassazione e uso pratico di Bitcoin",
      "Numero limitato di partecipanti",
    ],
    href: "https://bailout.website",
    cta: "Vai a Bailout",
  },
];

export default function ServiziPage() {
  return (
    <div className="page-shell">
      <section
        className="relative border-b border-primary/15 bg-gradient-to-br from-secondary via-background to-secondary/70 overflow-hidden"
        aria-labelledby="servizi-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <p className="accent-chip mx-auto mb-4">
              Come possiamo lavorare insieme
            </p>
            <h1
              id="servizi-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4"
            >
              Servizi
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dalle consulenze individuali alle academy strutturate: scegli il percorso che
              si adatta meglio al tuo livello e ai tuoi obiettivi con Bitcoin e la finanza.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-3">
          {SERVIZI.map((servizio) => (
            <Card key={servizio.id} className="flex flex-col h-full bg-card">
              <div className="relative w-full aspect-video bg-muted overflow-hidden border-b border-border">
                <Image
                  src={servizio.image}
                  alt={servizio.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{servizio.title}</CardTitle>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mt-2">
                  {servizio.tag}
                </p>
                <CardDescription className="mt-3 text-sm leading-relaxed">
                  {servizio.description}
                </CardDescription>
              </CardHeader>
              <ul className="px-6 pt-0 pb-2 space-y-2 text-sm text-muted-foreground">
                {servizio.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <CardFooter className="mt-auto pt-2">
                <Button variant="accent" asChild className="w-full sm:w-auto">
                  <Link
                    href={servizio.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {servizio.cta}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-primary/15 bg-secondary/60 px-6 py-5 sm:px-8 sm:py-6 flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-[0.18em] mb-1">
              Non sai da dove partire?
            </p>
            <p className="text-sm text-muted-foreground max-w-xl">
              Se sei alle prime armi o hai una situazione complessa, possiamo capire insieme
              in una call quale percorso ha più senso per te.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/contatti">Scrivimi da qui</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
