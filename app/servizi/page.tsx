import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servizi – Marco Costanza",
  description:
    "Questa pagina non è più attiva. Scopri i progetti principali di formazione e divulgazione.",
};

export default function ServiziPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <h1 className="text-4xl font-bold text-primary mb-4">Pagina non attiva</h1>
      <p className="text-xl text-text-muted mb-6">
        La sezione Servizi è stata riorganizzata. Ora tutti i percorsi di
        formazione e i progetti principali sono raccolti nella pagina Progetti.
      </p>
      <p className="text-text-muted mb-4">
        Puoi continuare da qui:
      </p>
      <ul className="list-disc list-inside text-text-muted space-y-2 mb-8">
        <li>
          Vai alla pagina{" "}
          <Link href="/progetti" className="text-accent hover:underline">
            Progetti
          </Link>{" "}
          per una panoramica completa.
        </li>
        <li>
          Se vuoi scrivermi direttamente, usa la pagina{" "}
          <Link href="/contatti" className="text-accent hover:underline">
            Contatti
          </Link>
          .
        </li>
      </ul>
      <p className="text-sm text-text-muted">
        Se sei arrivato qui da un vecchio link, puoi aggiornare il tuo
        segnalibro alla nuova struttura del sito.
      </p>
    </div>
  );
}
