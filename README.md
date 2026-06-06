# Dawensky Thermildort — Portfolio

Personal portfolio of **Dawensky Thermildort**, Business Risk Analyst & Data Analyst.
Bilingual (EN/FR), built to showcase analytical credibility and convert visitors into clients.

🔗 **Services:** Business Risk Analysis · Consulting & Training · Website Creation

## Tech stack

- **React 18** + **Vite** — fast SPA, instant dev server
- **Tailwind CSS** — design system (Trust & Authority palette)
- **Framer Motion** — restrained scroll-reveal animations
- **Lucide React** — SVG icon set
- Fonts: **Fraunces** (display) + **IBM Plex Sans** (body)

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

## Project structure

```
src/
├─ App.jsx                 # section assembly
├─ index.css               # Tailwind layers + design tokens
├─ i18n/
│  ├─ content.js           # ALL copy (EN + FR) + profile links — edit here
│  └─ LanguageContext.jsx  # EN/FR toggle, persisted to localStorage
├─ hooks/useCountUp.js     # count-up metrics
└─ components/             # Nav, Hero, TrustBar, Services, Skills,
                           # Timeline, Projects, Metrics, About, Contact, Footer
public/                    # logo.png, profile.jpg, cv-dawensky.pdf, og-image.png
```

## Customize

All text lives in [`src/i18n/content.js`](src/i18n/content.js) — edit once, both languages update.

To make it fully yours, replace these placeholders:

- `public/profile.jpg` — your photo
- `public/logo.png` — your logo
- `public/cv-dawensky.pdf` — your real CV
- `public/og-image.png` — social-share image (1200×630 recommended)
- In `content.js` → `profile`: your **WhatsApp** number and confirm LinkedIn/Facebook URLs
- Review the **timeline** and **projects** entries with your real details

## Deploy

`npm run build` outputs a static `dist/` folder — deploy free on **Netlify**,
**Vercel**, or **GitHub Pages**.

---

© Dawensky Thermildort. All rights reserved.
