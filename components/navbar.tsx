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
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary hover:text-primary-dark transition-colors">
            <Image src={assets.logo.favicon} alt="Marco Costanza" width={48} height={48} className="rounded" />
            <span className="hidden sm:inline">Marco Costanza</span>
          </Link>

          {/* Desktop: link + contatti con popup */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {NAV_LINKS.filter((l) => l.href !== "/" && l.href !== "/contatti").map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm font-medium text-text-primary hover:text-accent transition-colors"
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
                <div className="absolute right-0 mt-2 w-72 rounded-lg border border-border bg-background shadow-lg p-4 z-50">
                  {/* Step 2: link principali di contatto e pagina chi sono */}
                  <div className="space-y-2 mb-4">
                    <Link
                      href="/contatti"
                      className="flex items-center gap-2 text-sm font-medium text-text-primary hover:text-accent transition-colors"
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
                      <User size={14} aria-hidden />
                      <span>Chi sono</span>
                    </Link>
                    <Link
                      href="https://it.trustpilot.com/review/marcocostanza.it"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-text-primary hover:text-accent transition-colors"
                      onClick={() => setContactsOpen(false)}
                    >
                      <Star size={14} aria-hidden />
                      <span>Recensioni Trustpilot</span>
                    </Link>
                  </div>
                  {/* Step 3: elenco social riutilizzando il componente esistente */}
                  <div className="border-t border-border pt-3">
                    <p className="text-xs font-semibold text-text-muted mb-2 uppercase tracking-wide">
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
            className="md:hidden p-2 text-text-primary hover:text-accent"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-4">
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block py-2 text-text-primary hover:text-accent"
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
