import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/social-links";
import { Building2, Bitcoin, Users, Landmark } from "lucide-react";

export const metadata: Metadata = {
  title: "Chi sono – Marco Costanza",
  description:
    "Marco Costanza: dalla formazione Enel al mondo Bitcoin, divulgazione e intergruppo parlamentare Asset Digitali. Bio e percorso.",
};

const MILESTONES = [
  {
    year: "Fino al 2022",
    title: "Enel",
    description: "8 anni di lavoro come dipendente. Poi la scelta di dedicarmi a tempo pieno alla finanza e agli investimenti.",
    Icon: Building2,
  },
  {
    year: "Dal 2017",
    title: "Focus Bitcoin",
    description: "Approfondimento costante su Bitcoin e asset digitali. Divulgazione e formazione.",
    Icon: Bitcoin,
  },
  {
    year: "Oggi",
    title: "Oltre 100.000 persone",
    description: "Un pubblico distribuito sui principali social network. Tra i maggiori esperti e divulgatori italiani di questa tecnologia.",
    Icon: Users,
  },
  {
    year: "2024",
    title: "Camera dei Deputati",
    description: "Ingresso nell'intergruppo parlamentare \"Asset Digitali, Blockchain e Bitcoin\". Il tema \"Bitcoin è diritto al risparmio\" portato in Parlamento.",
    Icon: Landmark,
  },
];

export default function ChiSonoPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold text-primary mb-4">Chi sono</h1>
      <p className="text-xl text-text-muted mb-12">
        Marco Costanza, anno 1994. Formazione, divulgazione e impegno per il
        diritto al risparmio.
      </p>

      <div className="prose prose-lg max-w-none text-text-primary space-y-6 mb-16">
        <p className="leading-relaxed">
          Dopo 8 anni di lavoro come dipendente Enel mi sono licenziato per
          dedicarmi a tempo pieno all&apos;approfondimento della finanza e degli
          investimenti, con un focus dal 2017 su Bitcoin.
        </p>
        <p className="leading-relaxed">
          Nel 2024 entro nell&apos;intergruppo parlamentare &quot;Asset Digitali,
          Blockchain e Bitcoin&quot;, portando il tema &quot;Bitcoin è diritto al
          risparmio&quot; alla Camera dei Deputati.
        </p>
        <p className="leading-relaxed">
          Ad oggi posso vantare un pubblico di oltre 100.000 persone distribuite
          sui principali social network e considerarmi uno tra i maggiori
          esperti e divulgatori italiani di questa tecnologia.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-primary mb-8">
        Il percorso
      </h2>
      <ul className="space-y-8">
        {MILESTONES.map(({ year, title, description, Icon }) => (
          <li key={year} className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
              <Icon size={24} aria-hidden />
            </div>
            <div>
              <span className="text-sm font-medium text-accent">{year}</span>
              <h3 className="text-lg font-semibold text-primary mt-1">
                {title}
              </h3>
              <p className="text-text-muted mt-1">{description}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-16 pt-12 border-t border-border text-center">
        <p className="text-text-muted mb-6">
          Restiamo in contatto: seguimi sui social o scrivimi per collaborazioni
          e consulenze.
        </p>
        <SocialLinks iconSize={24} className="justify-center mb-6" />
        <Button variant="accent" size="lg" asChild>
          <Link href="/contatti">Contattami</Link>
        </Button>
      </div>
    </div>
  );
}
