import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – Marco Costanza",
  description: "Informativa sulla privacy del sito Marco Costanza.",
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-4xl font-bold text-primary mb-6">
        Privacy Policy
      </h1>
      <p className="text-text-muted">
        Pagina in costruzione. Contenuto privacy policy da inserire.
      </p>
    </div>
  );
}
