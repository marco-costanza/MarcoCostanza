import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Eventi – Marco Costanza",
  description:
    "Questa pagina non è più attiva. Segui i canali social per aggiornamenti sugli eventi.",
};

export default function EventiPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <h1 className="text-4xl font-bold text-primary mb-4">Pagina non attiva</h1>
      <p className="text-xl text-text-muted mb-6">
        Al momento non esiste una sezione eventi dedicata sul sito. Gli
        aggiornamenti su masterclass e conferenze vengono comunicati tramite i
        social e i progetti principali.
      </p>
      <p className="text-text-muted mb-4">
        Per restare aggiornato puoi:
      </p>
      <ul className="list-disc list-inside text-text-muted space-y-2 mb-8">
        <li>
          Visitare la pagina{" "}
          <Link href="/progetti" className="text-accent hover:underline">
            Progetti
          </Link>
          .
        </li>
        <li>
          Contattarmi dalla pagina{" "}
          <Link href="/contatti" className="text-accent hover:underline">
            Contatti
          </Link>
          .
        </li>
      </ul>
      <p className="text-sm text-text-muted">
        Se sei arrivato qui da un vecchio link, puoi aggiornare il tuo
        segnalibro alle nuove pagine del sito.
      </p>
    </div>
  );
}
