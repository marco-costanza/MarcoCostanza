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
  title: "Servizi – Marco Costanza",
  description:
    "Formazione 1to1, WhaleStreet Academy, Bailout Academy. Formazione su Bitcoin e mercati finanziari.",
};

const SERVICI = [
  {
    title: "Formazione 1 to 1",
    description:
      "Costruiamo insieme le tue competenze per muoverti con sicurezza tra finanza tradizionale e mondo Bitcoin. Qualunque sia il tuo dubbio lo risolveremo in videochiamate registrate. Un percorso su misura per te.",
    cta: "Prenota",
    href: "https://marcocostanza.it/formazione-1-to-1/",
    external: true,
  },
  {
    title: "Trading Academy",
    description:
      "WhaleStreet: formazione pratica e concreta per chi vuole gestire con consapevolezza il proprio denaro, comprendere le logiche della finanza e operare in modo intelligente tra investimento e speculazione.",
    cta: "Vai a WhaleStreet",
    href: "https://whalestreet.website",
    external: true,
  },
  {
    title: "Bitcoin Academy",
    description:
      "Bailout: realtà Bitcoin-only formata da un network di professionisti. Competenza tecnica, fiscale e strategica. Formazione di alto livello per privati ed imprese. Masterclass in live, 2 settimane, numero limitato di studenti.",
    cta: "Vai a Bailout",
    href: "https://bailout.website",
    external: true,
  },
];

export default function ServiziPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-primary mb-4">Servizi</h1>
      <p className="text-xl text-text-muted max-w-2xl mb-12">
        Formazione di alto livello su Bitcoin e mercati finanziari: consulenza
        1to1 e percorsi in academy.
      </p>

      <div className="grid gap-10 md:grid-cols-1 max-w-3xl">
        {SERVICI.map((s) => (
          <Card key={s.title}>
            <CardHeader>
              <CardTitle>{s.title}</CardTitle>
              <CardDescription className="text-base">
                {s.description}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="accent" asChild>
                <Link
                  href={s.href}
                  target={s.external ? "_blank" : undefined}
                  rel={s.external ? "noopener noreferrer" : undefined}
                >
                  {s.cta}
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <p className="mt-12 text-sm text-text-muted max-w-2xl">
        Per domande su programmi, prezzi o disponibilità scrivi a{" "}
        <a
          href="mailto:info@marcocostanza.it"
          className="text-accent hover:underline"
        >
          info@marcocostanza.it
        </a>{" "}
        o vai alla pagina{" "}
        <Link href="/contatti" className="text-accent hover:underline">
          Contatti
        </Link>
        .
      </p>
    </div>
  );
}
