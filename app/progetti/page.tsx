import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Progetti – Marco Costanza",
  description:
    "WhaleStreet, Bailout, BlockTime e altri progetti di Marco Costanza.",
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
  {
    name: "BlockTime",
    description:
      "Progetto di divulgazione e contenuti sul mondo Bitcoin e blockchain. Approfondimenti, interviste e risorse per restare aggiornati.",
    href: "/contatti",
    label: "Scopri BlockTime",
  },
];

export default function ProgettiPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-primary mb-4">Progetti</h1>
      <p className="text-xl text-text-muted max-w-2xl mb-12">
        I principali progetti di formazione e divulgazione su Bitcoin e mercati
        finanziari.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PROGETTI.map((p) => (
          <Card key={p.name}>
            <CardHeader>
              <CardTitle>{p.name}</CardTitle>
              <CardDescription className="text-base">
                {p.description}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="outline" asChild>
                <Link
                  href={p.href}
                  target={p.href.startsWith("http") ? "_blank" : undefined}
                  rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
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
