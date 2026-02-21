import Link from "next/link";
import { SocialLinks } from "./social-links";
import { FaqAccordion } from "./faq-accordion";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center space-y-6">
          <Link
            href="/"
            className="text-xl font-bold text-primary hover:text-primary-dark transition-colors"
          >
            Marco Costanza
          </Link>

          <FaqAccordion className="text-left" />

          <div className="max-w-3xl space-y-3">
            <p className="text-sm text-text-muted leading-relaxed">
              Formazione e divulgazione su Bitcoin e mercati finanziari. Non
              forniamo consulenza fiscale o finanziaria. I contenuti hanno scopo
              didattico e informativo e non costituiscono sollecitazione al
              pubblico risparmio.
            </p>
            <p className="text-xs text-text-muted/80">
              Marco Costanza — Torino — P.IVA: 12044330012 —{" "}
              <a
                href="mailto:info@marcocostanza.it"
                className="text-accent hover:underline"
              >
                info@marcocostanza.it
              </a>
            </p>
          </div>

          <SocialLinks iconSize={20} />

          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-text-muted hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-text-muted/50">|</span>
            <Link
              href="/cookie"
              className="text-text-muted hover:text-accent transition-colors"
            >
              Cookie Policy
            </Link>
          </div>

          <p className="text-xs text-text-muted/80">
            &copy; {new Date().getFullYear()} Marco Costanza. Tutti i diritti
            riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}
