import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy – Marco Costanza",
  description: "Informativa sui cookie del sito Marco Costanza.",
};

export default function CookiePage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-4xl font-bold text-primary mb-6">
        Cookie Policy
      </h1>
      <p className="text-text-muted">
        Pagina in costruzione. Contenuto cookie policy da inserire.
      </p>
    </div>
  );
}
