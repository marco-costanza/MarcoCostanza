import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eventi – Marco Costanza",
  description:
    "Masterclass, conferenze, apparizioni. Prossimi e passati eventi.",
};

export default function EventiPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-primary mb-6">Eventi</h1>
      <p className="text-text-muted max-w-2xl">
        Pagina in costruzione. Eventi passati e futuri.
      </p>
    </div>
  );
}
