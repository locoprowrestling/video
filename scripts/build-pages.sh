#!/bin/bash
set -euo pipefail
# Allow-list public files; private working folders never enter the artifact.
SRC_DIR="${1:-.}"
OUT_DIR="${2:-_site}"
mkdir -p "$OUT_DIR/assets"
for file in index.html styles.css script.js portfolio.json CNAME .nojekyll; do
  cp "$SRC_DIR/$file" "$OUT_DIR/$file"
done
rsync -a "$SRC_DIR/assets/" "$OUT_DIR/assets/"
