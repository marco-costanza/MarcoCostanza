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
    <div className="page-shell">
      <section className="border-b border-primary/15 bg-secondary/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 max-w-4xl">
          <p className="accent-chip mb-4">Bitcoin, finanza e diritto al risparmio</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Chi sono
          </h1>
          <p className="text-lg text-muted-foreground">
            Marco Costanza, anno 1994. Formazione, divulgazione e impegno per il
            diritto al risparmio.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 max-w-4xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-start">
          <div className="space-y-5">
            <p className="leading-relaxed text-muted-foreground">
              Dopo 8 anni di lavoro come dipendente Enel mi sono licenziato per
              dedicarmi a tempo pieno all&apos;approfondimento della finanza e degli
              investimenti, con un focus dal 2017 su Bitcoin.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Nel 2024 entro nell&apos;intergruppo parlamentare &quot;Asset Digitali,
              Blockchain e Bitcoin&quot;, portando il tema &quot;Bitcoin è diritto al
              risparmio&quot; alla Camera dei Deputati.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Ad oggi posso vantare un pubblico di oltre 100.000 persone distribuite
              sui principali social network e considerarmi uno tra i maggiori
              esperti e divulgatori italiani di questa tecnologia.
            </p>
          </div>

          <div className="rounded-2xl border border-primary/15 bg-secondary/60 p-5 sm:p-6 space-y-4">
            <h2 className="text-base font-semibold tracking-[0.18em] uppercase text-primary">
              In numeri
            </h2>
            <dl className="grid grid-cols-2 gap-4">
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">
                  Pubblico
                </dt>
                <dd className="text-2xl font-semibold text-foreground">100k+</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">
                  Anni di esperienza
                </dt>
                <dd className="text-2xl font-semibold text-foreground">10+</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">
                  Focus Bitcoin
                </dt>
                <dd className="text-2xl font-semibold text-foreground">dal 2017</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">
                  Ambito istituzionale
                </dt>
                <dd className="text-sm font-semibold text-foreground">
                  Intergruppo parlamentare su Bitcoin
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-14 sm:mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-6 sm:mb-8 tracking-tight">
            Il percorso
          </h2>
          <ul className="space-y-6 sm:space-y-8" role="list">
            {MILESTONES.map(({ year, title, description, Icon }) => (
              <li key={year} className="flex gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary"
                  aria-hidden
                >
                  <Icon size={24} />
                </div>
                <div>
                  <span className="text-sm font-medium text-primary">{year}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-1">
                    {title}
                  </h3>
                  <p className="text-muted-foreground mt-1 leading-relaxed">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <section
            className="mt-14 sm:mt-16 pt-10 sm:pt-12 border-t border-border text-center"
            aria-labelledby="contatti-cta"
          >
            <p id="contatti-cta" className="text-muted-foreground mb-6">
              Restiamo in contatto: seguimi sui social o scrivimi per collaborazioni
              e consulenze.
            </p>
            <SocialLinks iconSize={24} className="justify-center mb-6" />
            <Button variant="accent" size="lg" asChild>
              <Link href="/contatti">Contattami</Link>
            </Button>
          </section>
        </div>
      </section>
    </div>
  );
}
