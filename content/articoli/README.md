# Articoli — contenuti file-based

Questa cartella è la fonte degli articoli mostrati nella sezione **Articoli** del sito.

## Formato

Per ogni articolo servono **due file** con lo stesso slug:

- `{slug}.html` — contenuto HTML del corpo articolo
- `{slug}.meta.json` — metadati (titolo, excerpt, data, thumbnail)

### Esempio

**spendere-bitcoin-anonimato.html** — corpo articolo (HTML)

**spendere-bitcoin-anonimato.meta.json**:
```json
{
  "title": "Titolo dell'articolo",
  "excerpt": "Breve descrizione per anteprima in lista.",
  "date": "2026-03-13",
  "thumbnail": "https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg",
  "published": true
}
```

## Workflow n8n → GitHub

Il workflow n8n può pushare qui i file generati. Campi attesi:

- `slug` — nome file (senza estensione)
- `titolo` → `title`
- `excerpt`
- `date` (es. `2026-03-13T17:19:30` → usato `date.slice(0,10)` per `2026-03-13`)
- `thumbnail`
- `content` → contenuto del file `.html`

Dopo il push, Vercel esegue il build e gli articoli compaiono automaticamente in lista e nelle pagine singole.
