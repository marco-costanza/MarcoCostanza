# Changelog — MarcoCostanza.it

Registro delle modifiche importanti al sito.

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
