# GameForge Showcase

GameForge is a static product showcase for a conversational game-asset creation agent. It presents character animation, props, maps, tilemaps, game UI kits, music, sound effects, and voice generation on an interactive canvas.

## Experience

- A scroll-driven infinite-canvas presentation on desktop.
- A mobile-specific asset rail with lightweight scroll parallax.
- Animated sprite previews and collision-map overlays.
- Playable BGM, SFX, and voice samples.
- English and Simplified Chinese localization.
- Reduced-motion support and a conventional vertical-scroll fallback.

## Stack

- Semantic HTML
- Vanilla CSS
- Vanilla JavaScript
- Self-hosted fonts
- Local image and audio assets

There is no build step, package manager, framework, or external runtime dependency.

## Project Structure

```text
.
├── index.html       # Page structure and all showcase sections
├── styles.css       # Design tokens, desktop canvas, and responsive layouts
├── main.js          # Camera motion, mobile parallax, menus, audio, and interactions
├── i18n.js          # English and Simplified Chinese dictionaries
└── assets/
    ├── anim/        # Character references and sprite sheets
    ├── audio/       # BGM, SFX, and voice samples
    ├── fonts/       # Self-hosted web fonts
    ├── hero/        # Hero artwork and animated assets
    ├── how/         # Product screenshots
    ├── maps/        # Map previews and collision data
    ├── props/       # Prop references and animations
    ├── tilemap/     # Tiles, buildings, and Tiled project data
    └── ui/          # Game UI mockups and extracted elements
```

## Local Development

Run any static file server from the repository root:

```bash
python3 -m http.server 8642
```

Open <http://localhost:8642>.

Useful query parameters:

- `?flat` uses the vertical-scroll fallback and activates every section.
- `?cam=N` frames desktop station `N`, where `N` is from `0` to `7`.
- `?lang=en` forces English.
- `?lang=zh` forces Simplified Chinese.

## Cloudflare Pages Deployment

This repository is connected to the existing Cloudflare Pages project named `gameforge`.

Production configuration:

- Git repository: `socekin/GameForge`
- Production branch: `main`
- Build command: none
- Build output directory: `/`

Pushing to `main` triggers an automatic production deployment. The deployable site intentionally lives at the repository root so the existing Cloudflare configuration can be reused without changes.

To inspect deployments with Wrangler:

```bash
wrangler pages deployment list --project-name gameforge
```

## Notes

- Language preference is stored in `localStorage` under `gf-lang`.
- Mobile and reduced-motion visitors use the static page structure instead of the desktop camera.
- All assets required by the site are committed to this repository.
