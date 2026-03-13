# MarcoCostanza.it — Sito vetrina personale

Sito personale vetrina di **Marco Costanza**: formazione, divulgazione e progetti su Bitcoin e mercati finanziari.

---

## Cosa c'è in questo progetto

- **Home** — Chi è Marco, servizi, collaborazioni, articoli recenti
- **Chi sono** — Bio completa, timeline, milestones
- **Servizi** — Formazione 1to1, WhaleStreet Academy, Bailout Academy
- **Progetti** — WhaleStreet, Bailout, BlockTime e altri
- **Blog** — Articoli e news
- **Affiliazioni** — Codici sconto e partnership
- **Eventi** — Masterclass, conferenze, apparizioni
- **Contatti** — Email, social, form contatti

---

## Stack tecnico

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS** + **shadcn/ui**
- **Framer Motion** (animazioni)
- **Lucide React** (icone)
- **Vercel Analytics**
- Deploy automatico su **Vercel**

---

## Deploy su Vercel (andare in live)

Il codice è su GitHub. Per mettere il sito online:

1. Vai su **[vercel.com](https://vercel.com)** e accedi (o crea account).
2. **Add New** → **Project** → **Import Git Repository**.
3. Seleziona il repo **marco-costanza/MarcoCostanza** (collega GitHub se richiesto).
4. Vercel rileva Next.js in automatico. Clicca **Deploy**.
5. Al termine avrai un URL tipo `marcocostanza-xxx.vercel.app`. Puoi aggiungere un dominio (es. sottodominio) o poi spostare **marcocostanza.it** da Infomaniak a Vercel.

Ogni **push** su `main` farà un nuovo deploy automatico.

---

## Come lavorare sul progetto

1. Modifica i file in Cursor (o chiedi all'AI).
2. Anteprima locale: `npm run dev` (porta 3002).
3. Fai **commit** con messaggio chiaro in italiano.
4. Fai **push** quando vuoi andare in live — il sito si aggiorna in automatico su Vercel.

---

## Guide

| File | A cosa serve |
|------|-------------|
| [CHANGELOG.md](CHANGELOG.md) | Registro delle modifiche importanti |

---

## Contenuti blog (articoli da N8N)

Gli articoli possono essere importati come HTML (es. da N8N). Alla renderizzazione viene applicata una pulizia automatica ai paragrafi "fonte":

- **Regola:** se un paragrafo contiene solo un prefisso (es. "Fonte: ", "Fonti: ") seguito da link e un punto finale, in pagina si mostra **solo il contenuto con i link** (prefisso e punto rimossi).
- **Prefissi attuali:** `Fonte: `, `Fonti: `, `Approfondimento e metodologia: `, `Panoramica aggiornata e leggibile: `.
- **Dove aggiungere nuovi prefissi:** in `lib/clean-article-html.ts`, array `SOURCE_PREFIXES`. Aggiungere la stringa esatta (con spazio dopo i due punti se presente).

---

## Riferimenti

- **Dominio attuale:** marcocostanza.it (su Infomaniak, verrà spostato a Vercel)
- **Email:** info@marcocostanza.it
- **P.IVA:** 12044330012 — Torino
- **Progetto fratello:** [WhaleStreet](https://whalestreet.website) · [Bailout](https://bailout.website)
