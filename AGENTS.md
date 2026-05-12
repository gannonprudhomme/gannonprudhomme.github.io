# AGENTS.md

## Project Overview

This repo is Gannon Prudhomme's personal projects site hosted at `gannonprudhomme.github.io`.

The site is a static Astro app using Tailwind CSS v4 and daisyUI. It is intentionally lightweight: no React runtime, no CMS, and most project content lives in one TypeScript data file.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
npm run astro -- check
```

Always run `npm run build` and `npm run astro -- check` after code/content changes.

## Routes

- `/` - Home page with intro, GitHub/LinkedIn links, and featured project cards.
- `/projects/` - One-column projects list.
- `/projects/[slug]/` - Generated project detail pages from `src/data/projects.ts`.

GitHub Pages deployment is configured in `.github/workflows/deploy.yml` and serves from the root domain with no Astro `base` path.

## Key Files

- `src/data/projects.ts` - Source of truth for project content, tech badges, links, images, screenshots, and demo videos.
- `src/layouts/BaseLayout.astro` - Shared HTML shell, nav, footer, metadata, and active nav state.
- `src/components/ProjectCard.astro` - Compact project cards used on the Home page.
- `src/components/ProjectMedia.astro` - Shared image/phone-frame rendering.
- `src/pages/projects/[slug].astro` - Project detail template.
- `src/styles/global.css` - Tailwind/daisyUI imports, custom dark theme, layout utilities, phone frame styles.

## Design Notes

- The site uses a custom dark daisyUI theme named `projects` (internal name only; do not rename without a clear reason).
- The user disliked the prior green/low-contrast palette. Keep primary CTAs high-contrast with white text/icons.
- Project cards on `/projects/` should remain a vertical list, not a multi-column grid.
- Home should stack intro above featured projects, not use a side-by-side hero layout.
- Social links should only be GitHub and LinkedIn. Do not add Twitter, Instagram, or other socials unless asked.

## Project Content Rules

- Current launch projects are:
  - Cineduel
  - Artificer
  - Desktop Control Tablet
  - Rev Registration
- Cineduel is a work-in-progress and is not launched on the App Store yet. Preserve that status in copy.
- Cineduel source is private; do not add a public GitHub/source link for it.
- Detail-page source links should use the GitHub icon button, not the text label `Source`.
- Keep dates visible on project detail pages and project list items.

## Assets

Static assets live under `public/`.

- Project screenshots/videos: `public/projects/`
- Social icons: `public/social/`

For iPhone screenshots, prefer compressed web-friendly images around half device width rather than original multi-megabyte PNG exports. Current Cineduel screenshots are 603x1311 JPGs, converted from 1206x2622 iPhone screenshots.

For screen recordings, prefer browser-friendly H.264 MP4 over GIF. The Cineduel rating demo was converted from HEVC to H.264, muted, resized, and fast-started for web playback.

## Implementation Preferences

- Keep project content data-driven through `src/data/projects.ts`.
- Keep page templates generic; avoid hardcoding project-specific logic outside of media-type handling.
- Use ASCII text in source files unless existing content requires otherwise.
- Avoid large visual redesigns without an explicit request. The user is iterating on a minimal projects site, not a marketing site.
- If adding assets from local downloads, copy/convert them into `public/projects/` and verify file sizes before committing to the design.
