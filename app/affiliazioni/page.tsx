import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliazioni – Marco Costanza",
  description: "Codici sconto e link affiliati per broker, exchange e servizi.",
};

export default function AffiliazioniPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-primary mb-4">Affiliazioni</h1>
      <p className="text-xl text-text-muted max-w-2xl mb-8">
        Codici sconto e link affiliati per broker, exchange e servizi che utilizzo
        o consiglio. Usando questi link supporti il mio lavoro senza costi
        aggiuntivi per te.
      </p>

      <div className="max-w-2xl space-y-4">
        <p className="text-text-muted">
          L&apos;elenco completo e aggiornato dei codici sconto è disponibile sul
          sito principale{" "}
          <a
            href="https://marcocostanza.it"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            marcocostanza.it
          </a>
          . Qui verranno inserite le partnership principali con descrizione e
          link.
        </p>
        <p className="text-sm text-text-muted">
          I contenuti e i link presenti su questo sito possono includere
          collaborazioni commerciali. I servizi menzionati sono utilizzati
          personalmente; per domande scrivi a{" "}
          <a
            href="mailto:info@marcocostanza.it"
            className="text-accent hover:underline"
          >
            info@marcocostanza.it
          </a>
          .
        </p>
      </div>
    </div>
  );
}
