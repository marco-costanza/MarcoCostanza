import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – Marco Costanza",
  description: "Informativa sulla privacy del sito Marco Costanza.",
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 max-w-3xl">
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight">
        Privacy Policy
      </h1>
      <p className="text-muted-foreground">
        Pagina in costruzione. Contenuto privacy policy da inserire.
      </p>
    </div>
  );
}
