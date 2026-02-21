import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BailoutBlock() {
  return (
    <section className="py-16 border-t border-border bg-background-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Bailout Academy
          </h2>
          <p className="text-text-muted leading-relaxed mb-4">
            La masterclass Bitcoin è un percorso in live, accessibile ad un
            numero limitato di studenti, che si svolge nell&apos;arco di 2
            settimane. Dall&apos;acquisto, alla custodia fino alla spesa, il
            tutto condito con pratiche di privacy, sicurezza ed anonimato.
          </p>
          <p className="text-text-muted leading-relaxed mb-6">
            Alla fine di questo percorso, durante il quale hai anche la
            possibilità di fare tutte le domande che vuoi, sarai autonomo al 100%.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-md bg-primary/10 text-primary border border-primary/20">
              Percorso in sviluppo
            </span>
            <Button variant="accent" size="sm" asChild>
              <Link href="https://bailout.website" target="_blank" rel="noopener noreferrer">
                Scopri su Bailout
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
