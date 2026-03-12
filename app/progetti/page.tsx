import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
  },
  {
    name: "Bailout",
    description:
      "Masterclass Bitcoin in live: dall'acquisto alla custodia fino alla spesa. Percorso in 2 settimane con numero limitato di studenti. Realtà Bitcoin-only con network di professionisti.",
    href: "https://bailout.website",
    label: "Vai a Bailout",
  },
];

export default function ProgettiPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 page-shell section-surface p-6 sm:p-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">Progetti</h1>
      <p className="text-lg text-muted-foreground max-w-2xl mb-10 sm:mb-12">
        I principali progetti di formazione e divulgazione su Bitcoin e mercati
        finanziari.
      </p>

      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PROGETTI.map((p) => (
          <Card key={p.name}>
            <CardHeader>
              <CardTitle>{p.name}</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                {p.description}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="outline" asChild>
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
    </div>
  );
}
