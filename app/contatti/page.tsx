import type { Metadata } from "next";
import { SocialLinks } from "@/components/social-links";

export const metadata: Metadata = {
  title: "Contatti – Marco Costanza",
  description: "Contatta Marco Costanza: email, social, form.",
};

export default function ContattiPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-primary mb-6">Contatti</h1>
      <p className="text-text-muted max-w-2xl mb-6">
        Per collaborazioni, consulenze o informazioni:
      </p>
      <a
        href="mailto:info@marcocostanza.it"
        className="text-accent font-medium hover:underline text-lg"
      >
        info@marcocostanza.it
      </a>
      <div className="mt-8">
        <SocialLinks iconSize={24} />
      </div>
      <p className="text-sm text-text-muted mt-8 max-w-xl">
        Form contatti in costruzione. Per ora puoi scrivere via email o sui
        social.
      </p>
    </div>
  );
}
