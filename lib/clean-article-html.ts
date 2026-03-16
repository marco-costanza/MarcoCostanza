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

const YOUTUBE_EMBED_HTML = (videoId: string) =>
  `<div class="relative aspect-video w-full max-w-2xl mx-auto my-6 rounded-lg overflow-hidden"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/${videoId}" title="YouTube" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="absolute inset-0 w-full h-full"></iframe></div>`;

// Trasforma <figure> con URL YouTube semplice in un iframe responsive
function transformYouTubeFigures(html: string): string {
  // 1) figure con solo URL (es. https://youtube.com/live/ID)
  const YT_FIGURE_URL_REGEX =
    /<figure[^>]*>[\s\n]*https?:\/\/(?:www\.)?(?:youtube\.com\/(?:watch\?v=|live\/)|youtu\.be\/)([a-zA-Z0-9_-]+)[\s\n]*<\/figure>/gi;

  let out = html.replace(YT_FIGURE_URL_REGEX, (_match, videoId: string) =>
    YOUTUBE_EMBED_HTML(String(videoId))
  );

  // 2) figure con div + iframe YouTube (WordPress oEmbed, dimensioni fisse tipo width="500" height="281")
  const YT_FIGURE_IFRAME_REGEX =
    /<figure[^>]*>[\s\S]*?youtube\.com\/embed\/([a-zA-Z0-9_-]+)[\s\S]*?<\/figure>/gi;

  out = out.replace(YT_FIGURE_IFRAME_REGEX, (_match, videoId: string) =>
    YOUTUBE_EMBED_HTML(String(videoId))
  );

  return out;
}

// Riscrive URL delle immagini sponsor WordPress in path locali quando disponibili
function rewriteSponsorImageUrls(html: string): string {
  let out = html;

  out = out.replace(
    /https:\/\/marcocostanza\.it\/wp-content\/uploads\/[A-Za-z0-9/_-]*RELAI_web\.jpg/gi,
    "/images/RELAI_web.jpg"
  );

  out = out.replace(
    /https:\/\/marcocostanza\.it\/wp-content\/uploads\/[A-Za-z0-9/_-]*XTB_web\.jpg/gi,
    "/images/XTB_web.jpg"
  );

  return out;
}

/**
 * Rimuove dai paragrafi "fonte" il prefisso testuale (Fonte:, Fonti:, ecc.) e il
 * punto finale, lasciando solo il contenuto con i link. Da usare prima del
 * render del body articolo (dangerouslySetInnerHTML).
 *
 * @param html - HTML del contenuto articolo
 * @returns HTML con paragrafi fonte puliti
 */
export function cleanSourceParagraphs(html: string): string {
  // 1) Normalizza i paragrafi \"Fonte:\"
  const escaped = SOURCE_PREFIXES.map((p) =>
    p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  ).join("|");
  const regex = new RegExp(
    `<p>(${escaped})([\\s\\S]*?)\\.</p>`,
    "gi"
  );
  let processed = html.replace(regex, "<p>$2</p>");

  // 2) Riscrive URL immagini sponsor WordPress → path locali
  processed = rewriteSponsorImageUrls(processed);

  // 3) Converte figure con URL YouTube in iframe responsive
  processed = transformYouTubeFigures(processed);

  return processed;
}
