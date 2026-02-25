# AGENTS.md

## Cursor Cloud specific instructions

This is a **Next.js 15 portfolio website** (static, no backend/database). Single service architecture.

### Quick reference

| Action | Command |
|--------|---------|
| Install deps | `npm install` |
| Dev server | `npm run dev` (port **3002**) |
| Lint | `npm run lint` |
| Build | `npm run build` |

### Non-obvious caveats

- **ESLint config**: The repo requires `.eslintrc.json` with `{"extends": "next/core-web-vitals"}` for `npm run lint` to work non-interactively. Without it, `next lint` prompts for interactive setup and fails in CI/headless environments.
- **Image assets not in repo**: The `public/images/` directory is `.gitignore`d. Images must be downloaded from `marcocostanza.it` using the URL list in `scripts/download-assets.txt`. The bundled `scripts/download-assets.sh` uses macOS-specific paths and won't work directly in Cloud environments. Instead, run:
  ```bash
  mkdir -p public/images
  while IFS= read -r url; do [ -z "$url" ] && continue; path="${url#https://marcocostanza.it/wp-content/uploads/}"; dir="public/images/$(dirname "$path")"; mkdir -p "$dir"; curl -sS -L -o "public/images/$path" "$url"; done < scripts/download-assets.txt
  ```
- **No environment variables** are needed; no `.env` file required.
- **No automated tests** exist in this project; validation is done via lint + build + manual browser checks.
- **Port convention**: WhaleStreet = 3000, Bailout = 3001, MarcoCostanza = **3002**.
