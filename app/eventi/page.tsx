import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eventi – Marco Costanza",
  description:
    "Masterclass, conferenze, apparizioni. Prossimi e passati eventi.",
};

export default function EventiPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-primary mb-4">Eventi</h1>
      <p className="text-xl text-text-muted max-w-2xl mb-12">
        Masterclass, conferenze e apparizioni. Qui troverai i prossimi eventi e
        l&apos;archivio di quelli passati.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary mb-4">
          Prossimi eventi
        </h2>
        <p className="text-text-muted">
          Nessun evento in programma al momento. Resta aggiornato seguendo i
          canali social o iscrivendoti alla newsletter sul sito principale.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-primary mb-4">
          Eventi passati
        </h2>
        <ul className="space-y-3 text-text-muted">
          <li>
            <strong className="text-text-primary">2024</strong> — Intergruppo
            parlamentare &quot;Asset Digitali, Blockchain e Bitcoin&quot;,
            Camera dei Deputati. Tema: Bitcoin è diritto al risparmio.
          </li>
          <li>
            Masterclass Bailout Academy (edizioni in live, numero limitato di
            studenti).
          </li>
        </ul>
      </section>
    </div>
  );
}
