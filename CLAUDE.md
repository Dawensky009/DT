# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install      # dependencies
npm run dev      # Vite dev server → http://localhost:5173 (/en/ and /fr/ both resolve)
npm run build    # client bundle + SSR bundle + prerender → dist/
npm run preview  # serve the built dist/ locally (port 4173)
```

`npm run build` chains three steps — `build:client`, `build:ssr`, then
`node scripts/prerender.mjs`. Running `vite build` on its own leaves an unusable `dist/`:
no per-language pages, no sitemap, no robots.txt.

There is no test suite, linter, or formatter in this project. Verification is visual: run the dev
server and check the result in a browser (the Playwright MCP tools are pre-allowed in
`.claude/settings.json` for navigating, resizing, and screenshotting). Always check both EN and FR,
and both desktop and mobile widths — the layout and the copy length differ meaningfully between them.

## What this is

A bilingual (EN/FR) portfolio site for Dawensky Thermildort, a Business Risk & Data Analyst.
React 18 + Vite + Tailwind + Framer Motion, no backend, no state library. One page of content,
shipped as two prerendered HTML documents — `/en/` and `/fr/` — plus a root redirect.

## Architecture

### All copy lives in one file

[src/i18n/content.js](src/i18n/content.js) is the single source of truth for every visible string.
It exports `profile` (contact links, asset paths) and `content`, whose `en` and `fr` branches are
**mirrored objects with identical keys**. Components never hardcode user-facing text: they call
`useLang()` from [src/i18n/LanguageContext.jsx](src/i18n/LanguageContext.jsx) and read `t.<section>.*`.

The hard rule: **any copy change must be made in both `en` and `fr`.** A key added to only one
branch renders as `undefined` when the visitor toggles languages. Commit messages in this repo mark
this explicitly (e.g. "…(EN+FR)"). This now covers `t.seo` too — the `<title>`, meta description
and Open Graph copy are read from `content.js` like everything else, so a page's SEO text is
translated in the same place as its body text.

### One URL per language, prerendered

Each language is a real page: `/en/` and `/fr/`. There is still no router — the language is
*derived from the path* by `langFromPath()` in
[LanguageContext.jsx](src/i18n/LanguageContext.jsx), and switching language is a real navigation
(`window.location.assign`), not a state change. Language switchers must stay real `<a href>`
elements so crawlers can walk from one version to the other; the `onClick` only exists to carry
the current hash across.

The build prerenders both pages with `renderToString`:

- [src/entry-server.jsx](src/entry-server.jsx) renders the tree for a given language
- [scripts/prerender.mjs](scripts/prerender.mjs) writes `dist/en/index.html`, `dist/fr/index.html`,
  a redirecting `dist/index.html`, plus `sitemap.xml` and `robots.txt`
- [src/main.jsx](src/main.jsx) hydrates that markup (it checks `firstElementChild`, not
  `hasChildNodes()` — the `<!--app-html-->` placeholder is itself a child node)

**New code must survive server rendering.** No `window`, `document` or `localStorage` access during
render — put it in `useEffect`, or guard with `typeof window === 'undefined'`. State that differs
between server and client causes a hydration mismatch. Framer Motion is fine: its `initial` styles
serialise identically on both sides, and a `<noscript>` block in `index.html` lifts the resulting
`opacity: 0` for visitors without JavaScript.

### SEO lives in src/seo/

[site.js](src/seo/site.js) holds `SITE_URL` — **the one line to change when the domain is known.**
It feeds the canonical, the hreflang set, the sitemap, the robots.txt and `og:image`, which social
crawlers only accept as an absolute URL. [head.js](src/seo/head.js) builds each page's `<head>`;
[jsonld.js](src/seo/jsonld.js) derives the schema.org `Person` / `ProfilePage` graph from
`content.js`, so certifications, schools and skills stay in sync with the CV automatically —
never hand-write facts into the JSON-LD.

The `<head>` between the `<!-- seo:start -->` / `<!-- seo:end -->` markers in
[index.html](index.html) is **dev-only scaffolding**; the prerender replaces the whole block.

### Section components

[src/App.jsx](src/App.jsx) is a flat list of section components in render order. Each component in
[src/components/](src/components/) follows the same shape:

- a `<section id="…" className="scroll-mt-24 py-24 sm:py-32">` whose `id` is what `t.nav.links`
  anchors to
- an inner `.container-page` wrapper
- a header block of `.eyebrow` label + `<h2>` heading + intro paragraph
- content wrapped in [`<Reveal>`](src/components/Reveal.jsx), the shared scroll-fade wrapper
  (stagger siblings with `delay={(i % 3) * 0.06}`)

Adding a section means: write the component, add its keys to both language branches, import it in
`App.jsx`, and add a `{ id, label }` entry to `nav.links` in both branches if it should be navigable.

### Design system

Tokens are defined in [tailwind.config.js](tailwind.config.js) — `paper` / `canvas` / `ink` /
`muted` / `line` / `dark` / `spark` — and reusable component classes in
[src/index.css](src/index.css) — `.container-page`, `.eyebrow`, `.btn-dark` / `.btn-outline` /
`.btn-light`, `.link-underline`, `.portrait`, `tracking-label`. Use these rather than raw hex values
or one-off spacing; the site's whole look is a restrained neutral-grey editorial palette and drifting
from the tokens shows immediately. The single typeface is General Sans, loaded from the Fontshare CDN
in [index.html](index.html) and mapped to both `font-display` and `font-sans`.

### Custom cursor

[Cursor.jsx](src/components/Cursor.jsx) replaces the native cursor on fine-pointer devices with a
dot + lagging ring. Interactive elements are detected by selector, but two opt-in attributes exist:
`data-cursor="link"` makes a non-`<a>`/`<button>` element grow the ring, and `data-cursor="hide"`
hides the cursor visuals entirely (used over photos and the project modal backdrop). Add
`data-cursor="link"` to any new custom clickable.

### Motion and accessibility

`prefers-reduced-motion` is honoured in three places and new animated code should follow suit:
a global CSS override in `index.css`, an early return in `Cursor.jsx`, and a jump-to-final-value
branch in [useCountUp.js](src/hooks/useCountUp.js). Framer Motion handles it for `Reveal`.

## Conventions

**Hide, don't delete.** Sections and entries that aren't ready are kept in the codebase behind a
flag or a comment rather than removed — the `Services` import and render are commented out in
`App.jsx` with `// hidden for now — re-enable when ready`, and unproven work items carry
`hidden: true`, which [Work.jsx](src/components/Work.jsx) filters out. Follow this when asked to
"remove" something from the site; it is usually meant to come back.

**Project entries** in `content.work.items` are grouped by `category` (`'web'` or `'data'`) and
carry `ready` (false → the card shows "In progress" instead of the year), optional `url`, and
optional `images` as `{ src, webp }` pairs.

**Images** live in `public/` and are shipped as JPEG + WebP pairs rendered through `<picture>`
elements (see [ProjectModal.jsx](src/components/ProjectModal.jsx)); optimize before committing.
Loose `*.jpeg` files at the repo root are gitignored browser screenshots, not site assets.

**The copy is factual.** Content describes a real person's real CV, certifications, and employment
history. When editing experience, education, certification, or metric copy, only rephrase or
restructure what is already there — never invent roles, dates, numbers, or credentials.

## Notes

`.claude/`, `skills/`, and `Ressources/` are gitignored local tooling, not product code.

[README.md](README.md) was rewritten alongside the prerendering work and now matches the code.
Keep it that way if you touch the stack, the build pipeline or the folder structure.

Icons in `public/` (`favicon.ico`, `favicon.svg`, `apple-touch-icon.png`, `icon-512.png`) are a
`DT` monogram on the `dark` token, rendered through the browser rather than a design tool. To
regenerate them, serve an HTML page styling the monogram, screenshot it at 32 / 180 / 512 px, and
rebuild the `.ico` as an ICO header wrapping the 32 px PNG.
