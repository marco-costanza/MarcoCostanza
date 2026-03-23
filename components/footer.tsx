import Link from "next/link";
import { SocialLinks } from "./social-links";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-secondary/70 text-foreground">
      <div className="pointer-events-none absolute -top-24 -left-16 h-64 w-64 rounded-full bg-primary/15 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-accent/15 blur-3xl" aria-hidden />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight hover:text-accent transition-colors"
            >
              Marco Costanza
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Formazione di alto livello su Bitcoin e mercati finanziari. Divulgazione, consulenza e percorsi con WhaleStreet e Bailout.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4 tracking-wide text-sm uppercase text-foreground/80">
              Sito
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/servizi" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Servizi
                </Link>
              </li>
              <li>
                <Link href="/progetti" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Progetti
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Contenuti
                </Link>
              </li>
              <li>
                <Link href="/affiliazioni" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Affiliazioni &amp; Merch
                </Link>
              </li>
              <li>
                <Link href="/chi-sono" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Chi sono
                </Link>
              </li>
              <li>
                <Link href="/contatti" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4 tracking-wide text-sm uppercase text-foreground/80">
              Legale
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
            <p className="text-xs text-muted-foreground mt-4 leading-relaxed max-w-xs">
              Torino — P.IVA: 12044330012 —{" "}
              <a href="mailto:info@marcocostanza.it" className="text-foreground hover:text-accent underline transition-colors">
                info@marcocostanza.it
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4 tracking-wide text-sm uppercase text-foreground/80">
              Social
            </h3>
            <SocialLinks iconSize={22} className="gap-3" />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Marco Costanza. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}
