# Changelog — MarcoCostanza.it

Registro delle modifiche importanti al sito.

---

## 21-02-2026 (asset da HomePage.html + layout identico)

- **Download asset:** Estratti da `Workspace/HomePage.html` tutti gli URL immagini (hero, logo, partner, servizi, articoli, card, recensioni); scaricate 37 immagini in `public/images/` con struttura 2024/01, 2024/02, 2024/03, 2025/06, 2025/07, 2025/12, 2026/01, 2026/02. Script: `scripts/download-assets.sh` + `scripts/download-assets.txt`.
- **lib/assets.ts:** Mappa centralizzata dei path (`/images/...`) per hero, logo, collaborazioni (9 partner), servizi (3), bailout, articoli (4), card (Merchandise, Affiliazioni, BlockTime, Playlist), Trustpilot, recensioni.
- **Hero:** Sfondo blu (`bg-primary`) + immagine `Sfondo-3.png`; titolo e sottotitolo bianchi; pulsanti bianchi/outline come riferimento.
- **Collabora con:** 9 loghi partner reali (Relai, Investing, Bitcare, BitBox, Binance, Sole 24 ore, Telelombardia, Plan B Network, XTB) con `next/image`, griglia responsive, grayscale.
- **Servizi:** Le 3 card hanno immagine in alto (pc2, Investire-con-successo-classe-live, Foto-di-gruppo).
- **Chi è Marco:** Layout a due colonne: testo + social a sinistra, embed YouTube “Bitcoin e diritto al risparmio” (dxQcBs2blwk) a destra.
- **Bailout block:** Immagine Masterclass-Bitcoin-4 a sinistra, testo a destra (desktop).
- **News e Articoli:** Sezione con sfondo blu; 4 card con immagine + titolo + link agli articoli reali su marcocostanza.it; CTA “Carica altri articoli”.
- **4 card:** Merchandise (myspreadshop), Affiliazioni (linktr.ee), BlockTime (Spotify), Playlist YouTube: card con immagine e titolo, link esterni.
- **Recensioni:** Sezione con immagine Trustpilot (sfondo blu).
- **Navbar:** Logo (favicon 48x48) accanto a “Marco Costanza”.
- **Articoli:** URL aggiornati ai permalink reali degli articoli su marcocostanza.it.

---

## 21-02-2026 (allineamento a marcocostanza.it)

- **Home:** Riordinata per allineamento al sito di riferimento: Hero → Collabora con → Servizi → Chi è Marco → Bailout Academy → News e Articoli → Merchandise → Affiliazioni → BlockTime → Playlist YouTube → Restiamo in contatto.
- **Hero:** Aggiunti CTAs "Corsi di formazione" (→ /servizi) e "Formazione 1 to 1" (→ marcocostanza.it); mantenuti Contattami e Chi sono.
- **Collabora con:** Nuova sezione con titolo e griglia placeholder per loghi partner (`components/collaborazioni-section.tsx`); cartella `public/collaborazioni/` per asset.
- **Servizi:** Copy delle 3 card allineato al riferimento (Formazione 1to1, Trading Academy/WhaleStreet, Bitcoin Academy/Bailout); CTA "Iscriviti" per le academy.
- **Chi è Marco:** Spostata dopo i servizi; copy bio allineato (entri, Ad oggi, distribuite sui principali social network, approfondimento); social links integrati sotto la bio.
- **Bailout Academy:** Nuovo blocco dedicato con testo lungo e badge "Percorso in sviluppo" + link a bailout.website (`components/bailout-block.tsx`).
- **News e Articoli:** Nuova sezione con 4 card (dati in `lib/articles.ts`) e CTA "Carica altri articoli" → /blog (`components/article-cards-home.tsx`).
- **Teaser:** Aggiunte sezioni Merchandise, Affiliazioni, BlockTime, Playlist YouTube con CTA verso pagine o link esterni.
- **Social:** Estesi `SocialLinks` con Spotify, TikTok, Facebook (icone Lucide: Music, Video, Facebook).
- **Stile:** Sfondi alternati (bg-background / bg-background-muted) tra le sezioni. Navbar e footer invariati (nessun carrello, nessuna notifica push).

---

## 21-02-2026 (aggiornamento)

- **Fase 2:** Setup Next.js 15, Tailwind, palette (blu #466F9D/#3B95D9, nero #212121, bianco), font Roboto, Vercel Analytics, shadcn Button/Card, porta 3002
- **Fase 3:** Navbar (menu + social + CTA), Footer (disclaimer, P.IVA, social, link privacy/cookie), componente SocialLinks
- **Fase 4:** Homepage con hero, bio breve, 3 card servizi (1to1, WhaleStreet, Bailout), CTA e social
- **Pagine:** Create tutte le route: /chi-sono, /servizi, /progetti, /blog, /affiliazioni, /eventi, /contatti, /privacy, /cookie
- **Chi sono:** Bio completa, timeline (Enel, Bitcoin 2017, 100k, Parlamento 2024), social e CTA
- **Servizi:** 3 blocchi con descrizioni e CTA (Prenota, WhaleStreet, Bailout)
- **Progetti:** 3 card (WhaleStreet, Bailout, BlockTime) con link
- **Blog, Affiliazioni, Eventi:** Contenuto e struttura (link a WP, prossimi/passati eventi)
- **Contatti:** Form nome/email/messaggio con invio mailto
- **Footer:** FAQ accordion con 5 domande (consulenza, video, contatto gratuito, rimborso, pagamento Bitcoin)
- Build OK, 11 route

---

## 21-02-2026

- Creato repository e struttura iniziale del progetto
- Aggiunto `.gitignore`, `README.md`, `CLAUDE.md`, `CHANGELOG.md`
- Creato `.cursor/rules/` con regole locali
