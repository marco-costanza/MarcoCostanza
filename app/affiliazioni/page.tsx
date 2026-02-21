import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliazioni – Marco Costanza",
  description: "Codici sconto e link affiliati per broker, exchange e servizi.",
};

export default function AffiliazioniPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-primary mb-6">Affiliazioni</h1>
      <p className="text-text-muted max-w-2xl">
        Pagina in costruzione. Codici sconto e partner.
      </p>
    </div>
  );
}
