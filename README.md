# GameForge showcase website

Static single-page showcase for GameForge, a chat-driven game-asset forge.
Everything deployable lives in `public/` — plain HTML/CSS/JS, no build step,
no server code. Fonts are self-hosted; there are no third-party requests.

## Structure

```
public/
├── index.html    # all eight stations
├── styles.css    # design tokens + station styles (fonts inlined at top)
├── main.js       # scroll-driven camera, sprite players, audio pills
├── i18n.js       # EN/ZH dictionary + language toggle
└── assets/       # curated images/audio exported from the product repo
```

## Local preview

```bash
python3 -m http.server 8642 --directory public
# open http://localhost:8642
```

Debug helpers (query params):

- `?flat` — plain vertical scroll with every section active (screenshot-friendly)
- `?cam=N` — frame station N (0–7) without scrolling
- `?lang=en` / `?lang=zh` — force a language (otherwise: saved choice, then browser language)

## Deploy to Cloudflare Pages

Direct upload (no repo needed):

```bash
npx wrangler pages deploy public --project-name gameforge
```

Or in the Cloudflare dashboard: Pages → Create → Upload assets → drag the
`public/` folder. With a connected git repo, set build command to none and
output directory to `public`.

## Notes

- The scroll camera degrades to plain vertical scrolling on screens ≤900px
  wide and for `prefers-reduced-motion` users.
- Language preference persists in `localStorage` (`gf-lang`).
- Asset sources and provenance are documented in the product repo
  (`~/Feeling_GameForge`); regenerate GIF exports via the app's
  `/api/assets/[id]/animation.gif` route.
