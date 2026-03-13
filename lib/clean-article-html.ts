/**
 * Prefissi da rimuovere dai paragrafi "fonte" negli articoli.
 * Regola: se un <p> inizia con uno di questi prefissi e termina con ".</p>",
 * si mostra solo il contenuto (link) senza prefisso e senza il punto finale.
 *
 * Per articoli futuri (es. da N8N): se compare un nuovo prefisso simile
 * (es. "Fonte e approfondimento: "), aggiungerlo a questo array.
 */
export const SOURCE_PREFIXES = [
  "Fonte: ",
  "Fonti: ",
  "Approfondimento e metodologia: ",
  "Panoramica aggiornata e leggibile: ",
] as const;

/**
 * Rimuove dai paragrafi "fonte" il prefisso testuale (Fonte:, Fonti:, ecc.) e il
 * punto finale, lasciando solo il contenuto con i link. Da usare prima del
 * render del body articolo (dangerouslySetInnerHTML).
 *
 * @param html - HTML del contenuto articolo
 * @returns HTML con paragrafi fonte puliti
 */
export function cleanSourceParagraphs(html: string): string {
  const escaped = SOURCE_PREFIXES.map((p) =>
    p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  ).join("|");
  const regex = new RegExp(
    `<p>(${escaped})([\\s\\S]*?)\\.</p>`,
    "gi"
  );
  return html.replace(regex, "<p>$2</p>");
}
