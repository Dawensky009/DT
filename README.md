# Dawensky Thermildort — Portfolio

Portfolio personnel de **Dawensky Thermildort**, Business Risk Analyst & Data Analyst.
Bilingue (EN/FR), une page par langue, pré-rendu en HTML statique.

🔗 Production : voir `SITE_URL` dans [`src/seo/site.js`](src/seo/site.js)

## Stack

- **React 18** + **Vite 5** — SPA pré-rendue au build, pas de routeur, pas de backend
- **Tailwind CSS 3** — tokens maison (`paper` / `canvas` / `ink` / `muted` / `line` / `dark` / `spark`)
- **Framer Motion 11** — révélations au scroll, parallax, curseur personnalisé
- **Lucide React** — jeu d'icônes SVG
- Police unique : **General Sans** (Fontshare CDN)

## Démarrer

```bash
npm install      # dépendances
npm run dev      # serveur de dev → http://localhost:5173 (/en/ et /fr/ fonctionnent aussi)
npm run build    # build complet → dist/  (client + SSR + prérendu)
npm run preview  # sert le dist/ construit
```

`npm run build` enchaîne trois étapes :

1. `build:client` — bundle navigateur (`vite build`)
2. `build:ssr` — bundle de rendu serveur (`vite build --ssr`)
3. `scripts/prerender.mjs` — écrit les pages finales

## Ce que produit le build

```
dist/
├─ index.html          # racine : redirige vers la langue du visiteur
├─ en/index.html       # version anglaise, contenu déjà dans le HTML
├─ fr/index.html       # version française, idem
├─ sitemap.xml         # les deux URLs + hreflang
├─ robots.txt
└─ assets/             # JS + CSS hachés
```

Chaque page de langue est autonome : son `<title>`, sa `description`, son `canonical`,
ses balises Open Graph et son JSON-LD lui sont propres. Les réseaux sociaux et les
moteurs qui n'exécutent pas JavaScript voient le contenu complet.

## Structure

```
src/
├─ App.jsx                 # assemblage des sections, dans l'ordre de rendu
├─ main.jsx                # entrée navigateur (hydrate le HTML pré-rendu)
├─ entry-server.jsx        # entrée du prérendu
├─ index.css               # couches Tailwind + classes réutilisables
├─ i18n/
│  ├─ content.js           # TOUTE la copie (EN + FR) + profile — éditer ici
│  └─ LanguageContext.jsx  # langue déduite de l'URL (/en/ ou /fr/)
├─ seo/
│  ├─ site.js              # SITE_URL, locales  ← la ligne à changer au déploiement
│  ├─ head.js              # construction du <head> de chaque langue
│  └─ jsonld.js            # schema.org Person / ProfilePage, dérivé de content.js
├─ hooks/useCountUp.js
└─ components/             # Nav, Hero, About, Expertise, Experience, Education,
                           # Certifications, Work, Banner, Footer + Cursor,
                           # ScrollProgress, Reveal, ProjectModal, BrandLogos
public/                    # logo, portrait, CV, captures projets, icônes, og-image
scripts/prerender.mjs      # génère dist/en, dist/fr, dist/index.html, sitemap, robots
```

## Mettre le site en ligne

`npm run build` produit un `dist/` statique : déployable tel quel sur Vercel,
Netlify ou GitHub Pages. Les dossiers `en/` et `fr/` contiennent un `index.html`,
donc aucune règle de réécriture n'est nécessaire.

**Avant le premier déploiement**, remplacer `SITE_URL` dans
[`src/seo/site.js`](src/seo/site.js) par l'adresse réelle du site, puis rebuild :
cette constante alimente le canonical, l'`og:image` (que LinkedIn et WhatsApp
exigent en URL absolue), le hreflang, le sitemap et le robots.txt.

## Personnaliser

Toute la copie vit dans [`src/i18n/content.js`](src/i18n/content.js) — les branches
`en` et `fr` sont des objets miroirs à clés identiques. **Toute modification doit
être faite dans les deux.**

---

© Dawensky Thermildort. Tous droits réservés.
