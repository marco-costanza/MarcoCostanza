import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servizi – Marco Costanza",
  description:
    "Questa pagina non è più attiva. Scopri i progetti principali di formazione e divulgazione.",
};

export default function ServiziPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 max-w-2xl page-shell section-surface p-6 sm:p-8">
      <h1 className="text-3xl sm:text-4xl font-bold brand-gradient-text mb-4 tracking-tight">Pagina non attiva</h1>
      <p className="text-lg text-muted-foreground mb-6">
        La sezione Servizi è stata riorganizzata. Ora tutti i percorsi di
        formazione e i progetti principali sono raccolti nella pagina Progetti.
      </p>
      <p className="text-muted-foreground mb-4">
        Puoi continuare da qui:
      </p>
      <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-8">
        <li>
          Vai alla pagina{" "}
          <Link href="/progetti" className="text-primary hover:underline font-medium">
            Progetti
          </Link>{" "}
          per una panoramica completa.
        </li>
        <li>
          Se vuoi scrivermi direttamente, usa la pagina{" "}
          <Link href="/contatti" className="text-primary hover:underline font-medium">
            Contatti
          </Link>
          .
        </li>
      </ul>
      <p className="text-sm text-muted-foreground">
        Se sei arrivato qui da un vecchio link, puoi aggiornare il tuo
        segnalibro alla nuova struttura del sito.
      </p>
    </div>
  );
}
