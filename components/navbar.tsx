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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactsOpen, setContactsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/65">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 text-lg font-semibold text-foreground transition-opacity hover:opacity-90"
          >
            <div className="rounded-lg overflow-hidden shrink-0">
              <Image src={assets.logo.favicon} alt="Marco Costanza" width={40} height={40} className="brightness-0 invert" />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {NAV_LINKS.filter((l) => l.href !== "/" && l.href !== "/contatti").map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:text-accent"
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
                className="shadow-glow-sm hover:shadow-glow"
              >
                Contatti
              </Button>
              {contactsOpen && (
                <div
                  className="absolute right-0 mt-3 w-72 rounded-lg border border-border p-5 shadow-lg z-50 animate-in fade-in slide-in-from-top-2 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.6)]"
                  style={{ backgroundColor: "rgb(var(--background))" }}
                >
                  <div className="space-y-3 mb-5">
                    <Link
                      href="/contatti"
                      className="flex items-center gap-3 text-sm font-medium text-foreground hover:bg-muted transition-colors p-2 rounded-md"
                      onClick={() => setContactsOpen(false)}
                    >
                      <Mail size={14} aria-hidden />
                      <span>Form di contatto</span>
                    </Link>
                    <Link
                      href="/chi-sono"
                      className="flex items-center gap-2 text-sm font-medium text-foreground hover:bg-muted transition-colors p-2 rounded-md"
                      onClick={() => setContactsOpen(false)}
                    >
                      <User size={18} strokeWidth={2.5} aria-hidden />
                      <span>Chi sono</span>
                    </Link>
                    <Link
                      href="https://it.trustpilot.com/review/marcocostanza.it"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm font-medium text-foreground hover:bg-muted transition-colors p-2 rounded-md"
                      onClick={() => setContactsOpen(false)}
                    >
                      <Star size={18} strokeWidth={2.5} aria-hidden />
                      <span>Recensioni Trustpilot</span>
                    </Link>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider text-center">
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

          <button
            type="button"
            className="md:hidden p-2 text-muted-foreground hover:text-accent transition-colors rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-label="Apri menu"
          >
            {mobileOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-border py-6 space-y-6 animate-in slide-in-from-top-2">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block py-3 px-4 text-foreground font-medium rounded-md hover:bg-muted transition-colors"
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
