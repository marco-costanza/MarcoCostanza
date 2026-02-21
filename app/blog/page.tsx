import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog – Marco Costanza",
  description: "Articoli e news su Bitcoin, mercati finanziari e divulgazione.",
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-primary mb-4">Blog</h1>
      <p className="text-xl text-text-muted max-w-2xl mb-12">
        Articoli, analisi e aggiornamenti su Bitcoin e mercati. I contenuti
        completi sono sul sito principale.
      </p>

      <div className="max-w-2xl space-y-4">
        <p className="text-text-muted">
          Gli articoli sono pubblicati su{" "}
          <a
            href="https://marcocostanza.it"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            marcocostanza.it
          </a>
          . Qui verrà aggiunta una griglia con gli ultimi post (link a WordPress)
          quando il feed sarà configurato.
        </p>
        <p className="text-sm text-text-muted">
          Nel frattempo puoi seguire gli aggiornamenti su YouTube, Instagram e
          Telegram dalla pagina{" "}
          <Link href="/contatti" className="text-accent hover:underline">
            Contatti
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
