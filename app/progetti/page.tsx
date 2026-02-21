import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Progetti – Marco Costanza",
  description:
    "WhaleStreet, Bailout, BlockTime e altri progetti di Marco Costanza.",
};

export default function ProgettiPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-primary mb-6">Progetti</h1>
      <p className="text-text-muted max-w-2xl">
        Pagina in costruzione. WhaleStreet, Bailout, BlockTime.
      </p>
    </div>
  );
}
