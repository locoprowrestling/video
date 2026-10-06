# LoCo Pro Video

Independent static portfolio for LoCo Pro Video, intended for https://video.locopro.pw on GitHub Pages. Initial focus: hype reels. Repository: https://github.com/locoprowrestling/video. DNS and Pages deployment remain pending.

Initial selection: The Provider (Joey) career reel, Tyra Russamee career reel, Slave to the Deathmatch 17 promo sizzle, Slave ultimate historical highlights, and LoCo's Last Stand official trailer. The four Primos IDs and titles were resolved from the public Primos YouTube channel through vidIQ on October 5, 2026. Night 1 and Night 2 post-event reels are excluded. Thumbnails are served from YouTube; videos play on YouTube so large originals stay outside GitHub Pages. Preserve source and photography credits in the linked video descriptions.

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
