# LoCo Pro Video

Static site for LoCo Pro Video, live at https://video.locopro.pw on GitHub Pages (repository https://github.com/locoprowrestling/video, deploys on push to `main`). Since 2026-10-25 it uses the itch store theme (purple #760cf5, yellow #f8f136 links, green #174f2a buttons, filmstrip banner); tokens and history are in `design-system.md`. Sections: What we do, Store (itch store cards for the three music suites and the historical 3D props, plus the Notion Story Bible: Full Edition on Gumroad and the free Character Tracker sample on Notion), Selected video work, The studio.

Store links and counts are hand-written in `index.html`. Re-check them against the live stores when products change: the itch dashboard audit in `/Users/gecko/locoprowrestling/.claude/skills/post-itch-devlogs/` prints the current product list, and the Story Bible URLs are recorded in `/Users/gecko/locoprowrestling/.knowledgebase/tools/notion-templates-marketplace.md`. Store cover images live in `assets/itch/`.

Selected video work, initial selection: The Provider (Joey) career reel, Tyra Russamee career reel, Slave to the Deathmatch 17 promo sizzle, Slave ultimate historical highlights, and LoCo's Last Stand official trailer. The four Primos IDs and titles were resolved from the public Primos YouTube channel through vidIQ on October 5, 2026. Night 1 and Night 2 post-event reels are excluded. Thumbnails are served from YouTube; videos play on YouTube so large originals stay outside GitHub Pages. Preserve source and photography credits in the linked video descriptions.

## Preview

```sh
cd /Users/gecko/locoprowrestling/LoCoProWebsites/video
python3 -m http.server 8106
```

Open http://localhost:8106. No installation required.

## Portfolio entries

Edit `/Users/gecko/locoprowrestling/LoCoProWebsites/video/portfolio.json` with approved hype reels. Example entry:

```json
{"title":"Approved reel title","description":"Factual project description","type":"link","url":"https://www.youtube.com/watch?v=APPROVED_ID","poster":"assets/approved-thumbnail.jpg"}
```

Use `link` for YouTube/HTTPS project links; `video` for approved MP4/WebM URLs played in the native dialog. Poster is optional. Public assets go in `/Users/gecko/locoprowrestling/LoCoProWebsites/video/assets`. Include rights and credits in descriptions. Keep original footage and private work out of this public repository.

## Build

```sh
cd /Users/gecko/locoprowrestling/LoCoProWebsites/video
./scripts/build-pages.sh . _site
node --check script.js
git diff --check
```

Build into a fresh output folder for release. Only public runtime files and assets are copied; documentation, scripts, Git metadata and verification reports are excluded. YouTube hosting avoids placing large originals in GitHub Pages.

## Publishing handoff

Repository: `locoprowrestling/video`, branch `main`. Existing Pages workflow deploys on push to main or manual dispatch. Publishing requires owner authorization: configure Pages with GitHub Actions, deploy, configure DNS per the canonical static-site runbook, bind `video.locopro.pw`, then enable HTTPS after certificate issuance. CNAME alone does not change DNS or Pages settings. Verify actual live playback, links and mobile layouts before release.

## Redesign backups

`verification/` is gitignored on purpose and never publishes. Save before/after copies of a redesign there (the cinema design is at `verification/redesign/before-itch-theme-2026-10-25/`), but never pass that path to `git add`: git refuses ignored paths, the chained commit and push silently never run, and the live site stays on the old version. Commit only `index.html`, `styles.css`, docs and `assets/`. Bump the `styles.css?v=` query to the stylesheet's SHA-256 prefix after every CSS change so browsers drop the cached file.
