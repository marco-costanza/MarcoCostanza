import Link from "next/link";
import { SocialLinks } from "./social-links";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <Link
            href="/"
            className="text-2xl font-bold text-gradient hover:opacity-80 transition-opacity"
          >
            Marco Costanza
          </Link>

          <div className="max-w-3xl space-y-3">
            <p className="text-sm text-muted-foreground/80">
              Marco Costanza — Torino — P.IVA: 12044330012 —{" "}
              <a
                href="mailto:info@marcocostanza.it"
                className="text-primary hover:underline hover:text-accent transition-colors"
              >
                info@marcocostanza.it
              </a>
            </p>
          </div>

          <SocialLinks iconSize={24} />

          <div className="flex items-center gap-6 text-sm pt-6 border-t border-white/5 w-full max-w-md justify-center mt-6">
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-muted-foreground/30">|</span>
            <Link
              href="/cookie"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Cookie Policy
            </Link>
          </div>

          <p className="text-xs text-muted-foreground/60 mt-8">
            &copy; {new Date().getFullYear()} Marco Costanza. Tutti i diritti
            riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}
