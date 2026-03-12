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
    <nav className="sticky top-0 z-50 w-full border-b-4 border-foreground bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-black hover:-translate-y-0.5 transition-transform">
            <div className="brutalist-border rounded-lg overflow-hidden shrink-0">
              <Image src={assets.logo.favicon} alt="Marco Costanza" width={40} height={40} />
            </div>
            <span className="hidden sm:inline text-foreground tracking-tight uppercase">Marco Costanza</span>
          </Link>

          {/* Desktop: link + contatti con popup */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {NAV_LINKS.filter((l) => l.href !== "/" && l.href !== "/contatti").map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm font-bold text-zinc-600 hover:text-primary transition-colors hover:underline decoration-2"
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
                <div className="absolute right-0 mt-3 w-72 bg-white brutalist-border brutalist-shadow rounded-xl p-5 z-50 animate-in fade-in slide-in-from-top-2">
                  {/* Step 2: link principali di contatto e pagina chi sono */}
                  <div className="space-y-3 mb-5">
                    <Link
                      href="/contatti"
                      className="flex items-center gap-3 text-sm font-bold text-foreground hover:bg-zinc-100 transition-colors p-2 rounded-lg"
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
                      <User size={18} strokeWidth={2.5} aria-hidden />
                      <span>Chi sono</span>
                    </Link>
                    <Link
                      href="https://it.trustpilot.com/review/marcocostanza.it"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm font-bold text-foreground hover:bg-zinc-100 transition-colors p-2 rounded-lg"
                      onClick={() => setContactsOpen(false)}
                    >
                      <Star size={18} strokeWidth={2.5} aria-hidden />
                      <span>Recensioni Trustpilot</span>
                    </Link>
                  </div>
                  {/* Step 3: elenco social riutilizzando il componente esistente */}
                  <div className="border-t-2 border-foreground pt-4">
                    <p className="text-[10px] font-black text-zinc-500 mb-3 uppercase tracking-widest text-center">
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
            {mobileOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t-2 border-foreground py-6 space-y-6 animate-in slide-in-from-top-4 bg-white">
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block py-3 px-4 text-foreground font-bold text-lg hover:bg-zinc-100 rounded-lg transition-colors uppercase tracking-tight"
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
