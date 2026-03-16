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
  title: "Progetti – Marco Costanza",
  description:
    "WhaleStreet, Bailout e altri progetti di formazione e divulgazione su Bitcoin.",
};

const PROGETTI = [
  {
    name: "WhaleStreet",
    description:
      "Formazione premium su Bitcoin e asset digitali. Trading Academy, report, formazione 1to1 e community. Per professionisti e aziende che vogliono operare in autonomia.",
    href: "https://whalestreet.website",
    label: "Vai a WhaleStreet",
    logo: assets.progetti.whalestreet,
  },
  {
    name: "Bailout",
    description:
      "Masterclass Bitcoin in live: dall'acquisto alla custodia fino alla spesa. Percorso in 2 settimane con numero limitato di studenti. Realtà Bitcoin-only con network di professionisti.",
    href: "https://bailout.website",
    label: "Vai a Bailout",
    logo: assets.progetti.bailout,
  },
];

export default function ProgettiPage() {
  return (
    <div className="page-shell">
      <section className="border-b border-primary/15 bg-secondary/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 max-w-4xl">
          <p className="accent-chip mb-4">Academy e progetti in evidenza</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Progetti
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            I principali progetti di formazione e divulgazione su Bitcoin e mercati
            finanziari che porto avanti ogni giorno.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 max-w-6xl">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {PROGETTI.map((p) => (
            <Card key={p.name} className="flex flex-col overflow-hidden">
              <div className="relative w-full h-24 sm:h-28 flex items-center justify-start bg-muted/80 border-b border-border overflow-hidden">
                <Image
                  src={p.logo}
                  alt={`Logo ${p.name}`}
                  fill
                  className="object-contain object-left p-4"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{p.name}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {p.description}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="accent" asChild>
                  <Link
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {p.label}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <section
          aria-labelledby="lavori-passati-heading"
          className="mt-4 border-t border-primary/15 pt-10"
        >
          <h2
            id="lavori-passati-heading"
            className="text-2xl font-bold tracking-tight mb-4"
          >
            Lavori passati e apparizioni
          </h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
            Alcuni contesti in cui ho portato i temi Bitcoin, finanza e diritto al
            risparmio negli ultimi anni.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-primary/15 bg-secondary/60 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-primary mb-1">
                Istituzioni
              </p>
              <p className="font-semibold text-foreground">
                Camera dei Deputati
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Intervento su Bitcoin e diritto al risparmio nell&apos;intergruppo
                parlamentare Asset Digitali, Blockchain e Bitcoin.
              </p>
            </div>
            <div className="rounded-2xl border border-primary/15 bg-secondary/60 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-primary mb-1">
                Eventi e conferenze
              </p>
              <p className="font-semibold text-foreground">
                Panel e talk su Bitcoin
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Presenza periodica in eventi di settore e conferenze dedicate al mondo
                Bitcoin e alla finanza personale.
              </p>
            </div>
            <div className="rounded-2xl border border-primary/15 bg-secondary/60 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-primary mb-1">
                Contenuti
              </p>
              <p className="font-semibold text-foreground">
                Collaborazioni con media e podcast
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Partecipazioni a podcast, interviste e contenuti editoriali dedicati
                al tema Bitcoin e mercati.
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
