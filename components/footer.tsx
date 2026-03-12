import Link from "next/link";
import { SocialLinks } from "./social-links";

export default function Footer() {
  return (
    <footer className="dark-section border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-2xl font-bold text-white tracking-tight hover:opacity-90 transition-opacity"
            >
              Marco Costanza
            </Link>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              Formazione di alto livello su Bitcoin e mercati finanziari. Divulgazione, consulenza e percorsi con WhaleStreet e Bailout.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4 tracking-wide text-sm uppercase">
              Sito
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/progetti" className="text-sm text-white/70 hover:text-white transition-colors">
                  Progetti
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-white/70 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/chi-sono" className="text-sm text-white/70 hover:text-white transition-colors">
                  Chi sono
                </Link>
              </li>
              <li>
                <Link href="/contatti" className="text-sm text-white/70 hover:text-white transition-colors">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4 tracking-wide text-sm uppercase">
              Legale
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm text-white/70 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie" className="text-sm text-white/70 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
            <p className="text-xs text-white/60 mt-4 leading-relaxed max-w-xs">
              Torino — P.IVA: 12044330012 —{" "}
              <a href="mailto:info@marcocostanza.it" className="text-white/80 hover:text-white underline transition-colors">
                info@marcocostanza.it
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4 tracking-wide text-sm uppercase">
              Social
            </h3>
            <SocialLinks iconSize={22} className="gap-3" />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} Marco Costanza. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}
