import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi sono – Marco Costanza",
  description:
    "Marco Costanza: dalla formazione Enel al mondo Bitcoin, divulgazione e intergruppo parlamentare Asset Digitali.",
};

export default function ChiSonoPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-primary mb-6">Chi sono</h1>
      <p className="text-text-muted max-w-2xl">
        Pagina in costruzione. Qui troverai bio completa, timeline e social.
      </p>
    </div>
  );
}
