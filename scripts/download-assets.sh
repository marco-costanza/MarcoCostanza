#!/bin/bash
BASE="/Users/marcocostanza/Workspace/Projects/Website Master/MarcoCostanza"
cd "$BASE" || exit 1
while IFS= read -r url; do
  [ -z "$url" ] && continue
  path="${url#https://marcocostanza.it/wp-content/uploads/}"
  dir="$BASE/public/images/$(/usr/bin/dirname "$path")"
  /bin/mkdir -p "$dir"
  out="$BASE/public/images/$path"
  echo "Downloading $path ..."
  /usr/bin/curl -sS -L -o "$out" "$url" && echo "  OK" || echo "  FAIL"
done < "$BASE/scripts/download-assets.txt"
echo "Done."
