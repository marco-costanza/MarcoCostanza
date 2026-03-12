import Link from "next/link";
import { SocialLinks } from "./social-links";

export default function Footer() {
  return (
    <footer className="dark-section border-t-4 border-foreground relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <Link
            href="/"
            className="text-3xl font-black text-white uppercase tracking-tight hover:-translate-y-1 transition-transform"
          >
            Marco Costanza
          </Link>

          <div className="max-w-3xl space-y-3">
            <p className="text-sm text-zinc-400 font-bold uppercase tracking-wider">
              Marco Costanza — Torino — P.IVA: 12044330012 —{" "}
              <a
                href="mailto:info@marcocostanza.it"
                className="text-white hover:underline decoration-2 hover:text-primary transition-colors"
              >
                info@marcocostanza.it
              </a>
            </p>
          </div>

          <div className="p-4 bg-white/5 brutalist-border brutalist-shadow rounded-xl">
            <SocialLinks iconSize={24} />
          </div>

          <div className="flex items-center gap-6 text-sm font-bold pt-8 border-t-2 border-zinc-800 w-full max-w-md justify-center mt-6">
            <Link
              href="/privacy"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-zinc-700">|</span>
            <Link
              href="/cookie"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Cookie Policy
            </Link>
          </div>

          <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider mt-8">
            &copy; {new Date().getFullYear()} Marco Costanza. Tutti i diritti
            riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}
