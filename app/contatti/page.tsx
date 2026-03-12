"use client";

import Link from "next/link";
import { useState } from "react";
import { SocialLinks } from "@/components/social-links";

export default function ContattiPage() {
  // Step 1: stato per il form di contatto con apertura mailto
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [messaggio, setMessaggio] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contatto da vetrina: ${nome}`);
    const body = encodeURIComponent(
      `Nome: ${nome}\nEmail: ${email}\n\nMessaggio:\n${messaggio}`
    );
    window.location.href = `mailto:info@marcocostanza.it?subject=${subject}&body=${body}`;
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 max-w-2xl">
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">Contatti</h1>
      {/* Social principali */}
      <h2 className="text-xl font-semibold text-primary mb-3">
        Dove puoi trovarmi online
      </h2>
      <SocialLinks iconSize={24} showLabels className="mb-8" />

      {/* Step 5: form che apre il client email */}
      <h2 className="text-xl font-semibold text-primary mb-4">
        Inviami un messaggio
      </h2>
      <p className="text-sm text-muted-foreground mb-4">
        Compila il form: si aprirà il tuo client email con i campi già
        compilati. In futuro potrà essere attivato un invio diretto dal sito.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="nome"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Nome
          </label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            required
          />
        </div>
        <div>
          <label
            htmlFor="messaggio"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Messaggio
          </label>
          <textarea
            id="messaggio"
            value={messaggio}
            onChange={(e) => setMessaggio(e.target.value)}
            rows={5}
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-y"
            required
          />
        </div>
        <button
          type="submit"
          className="rounded-md bg-accent px-6 py-3 text-white font-medium hover:bg-accent/90 transition-colors min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Invia messaggio
        </button>
      </form>
    </div>
  );
}
