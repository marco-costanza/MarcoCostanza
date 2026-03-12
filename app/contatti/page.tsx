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
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <h1 className="text-4xl font-bold text-primary mb-4">Contatti</h1>
      {/* Social principali */}
      <h2 className="text-xl font-semibold text-primary mb-3">
        Dove puoi trovarmi online
      </h2>
      <SocialLinks iconSize={24} showLabels className="mb-8" />

      {/* Step 5: form che apre il client email */}
      <h2 className="text-xl font-semibold text-primary mb-4">
        Inviami un messaggio
      </h2>
      <p className="text-sm text-text-muted mb-4">
        Compila il form: si aprirà il tuo client email con i campi già
        compilati. In futuro potrà essere attivato un invio diretto dal sito.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="nome"
            className="block text-sm font-medium text-text-primary mb-1"
          >
            Nome
          </label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-text-primary mb-1"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>
        <div>
          <label
            htmlFor="messaggio"
            className="block text-sm font-medium text-text-primary mb-1"
          >
            Messaggio
          </label>
          <textarea
            id="messaggio"
            value={messaggio}
            onChange={(e) => setMessaggio(e.target.value)}
            rows={5}
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent resize-y"
            required
          />
        </div>
        <button
          type="submit"
          className="rounded-md bg-accent px-4 py-2 text-white font-medium hover:bg-accent/90 transition-colors"
        >
          Invia messaggio
        </button>
      </form>
    </div>
  );
}
