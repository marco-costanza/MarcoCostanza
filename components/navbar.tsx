"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Mail, User, Star } from "lucide-react";
import { SocialLinks } from "./social-links";
import { Button } from "@/components/ui/button";
import { assets } from "@/lib/assets";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/progetti", label: "Progetti" },
  { href: "/blog", label: "Blog" },
  { href: "/affiliazioni", label: "Affiliazioni" },
  { href: "/contatti", label: "Contatti" },
];

export default function Navbar() {
  // Step 1: stato per menu mobile e popup contatti
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactsOpen, setContactsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold hover:opacity-80 transition-opacity">
            <Image src={assets.logo.favicon} alt="Marco Costanza" width={48} height={48} className="rounded-lg shadow-sm" />
            <span className="hidden sm:inline text-gradient-primary">Marco Costanza</span>
          </Link>

          {/* Desktop: link + contatti con popup */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {NAV_LINKS.filter((l) => l.href !== "/" && l.href !== "/contatti").map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors hover:shadow-glow-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="relative">
              <Button
                variant="accent"
                size="sm"
                type="button"
                aria-haspopup="dialog"
                aria-expanded={contactsOpen}
                onClick={() => setContactsOpen((open) => !open)}
              >
                Contatti
              </Button>
              {contactsOpen && (
                <div className="absolute right-0 mt-3 w-72 rounded-2xl border border-white/10 shadow-2xl p-5 z-50 glass-panel animate-in fade-in slide-in-from-top-2">
                  {/* Step 2: link principali di contatto e pagina chi sono */}
                  <div className="space-y-3 mb-5">
                    <Link
                      href="/contatti"
                      className="flex items-center gap-3 text-sm font-medium text-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-white/5"
                      onClick={() => setContactsOpen(false)}
                    >
                      <Mail size={14} aria-hidden />
                      <span>Form di contatto</span>
                    </Link>
                    <Link
                      href="/chi-sono"
                      className="flex items-center gap-2 text-sm font-medium text-text-primary hover:text-accent transition-colors"
                      onClick={() => setContactsOpen(false)}
                    >
                      <User size={16} aria-hidden />
                      <span>Chi sono</span>
                    </Link>
                    <Link
                      href="https://it.trustpilot.com/review/marcocostanza.it"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm font-medium text-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-white/5"
                      onClick={() => setContactsOpen(false)}
                    >
                      <Star size={16} aria-hidden />
                      <span>Recensioni Trustpilot</span>
                    </Link>
                  </div>
                  {/* Step 3: elenco social riutilizzando il componente esistente */}
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-[10px] font-bold text-muted-foreground mb-3 uppercase tracking-widest text-center">
                      Social
                    </p>
                    <SocialLinks
                      iconSize={18}
                      layout="stacked"
                      showLabels
                      className="gap-2"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile: hamburger */}
          <button
            type="button"
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/5 py-6 space-y-6 animate-in slide-in-from-top-4">
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block py-3 px-4 text-foreground hover:text-primary hover:bg-white/5 rounded-lg transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <SocialLinks iconSize={22} />
            <Button variant="accent" size="sm" asChild className="w-full">
              <Link href="/contatti" onClick={() => setMobileOpen(false)}>
                Contatti
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
