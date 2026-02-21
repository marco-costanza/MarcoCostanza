import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog – Marco Costanza",
  description: "Articoli e news su Bitcoin, mercati finanziari e divulgazione.",
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-primary mb-6">Blog</h1>
      <p className="text-text-muted max-w-2xl">
        Pagina in costruzione. Griglia articoli con link a WordPress.
      </p>
    </div>
  );
}
