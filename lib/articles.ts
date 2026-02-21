export interface ArticleItem {
  title: string;
  excerpt: string;
  url: string;
  date?: string;
}

/** Articoli in evidenza per la home (link a WordPress / marcocostanza.it) */
export const HOME_ARTICLES: ArticleItem[] = [
  {
    title:
      "Errore da 2.000 Bitcoin, istituzioni che accumulano e nuove tensioni tecniche: cosa sta succedendo nel mondo Bitcoin",
    excerpt: "",
    url: "https://marcocostanza.it/",
  },
  {
    title:
      "Bitcoin e AI: come gli agenti autonomi iniziano a pagare, lavorare e scambiarsi servizi con Lightning e Nostr",
    excerpt: "",
    url: "https://marcocostanza.it/",
  },
  {
    title:
      "Epstein, le e-mail e Bitcoin: cosa c'è di vero su investimenti, MIT Media Lab e controllo dello sviluppo",
    excerpt: "",
    url: "https://marcocostanza.it/",
  },
  {
    title:
      "Mining, privacy e nodi più veloci: le novità che stanno cambiando Bitcoin (e perché contano)",
    excerpt: "",
    url: "https://marcocostanza.it/",
  },
];
