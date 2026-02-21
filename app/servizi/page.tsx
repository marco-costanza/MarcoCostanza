import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servizi – Marco Costanza",
  description:
    "Formazione 1to1, WhaleStreet Academy, Bailout Academy. Formazione su Bitcoin e mercati finanziari.",
};

export default function ServiziPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-primary mb-6">Servizi</h1>
      <p className="text-text-muted max-w-2xl">
        Pagina in costruzione. Formazione 1to1, WhaleStreet, Bailout.
      </p>
    </div>
  );
}
