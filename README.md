# NK Creations

Brand website for NK Creations, a denim manufacturer and wholesale supplier based in Ulhasnagar,
Maharashtra. A component-driven single-page site built with vanilla JavaScript, Vite and SCSS.

**Live site:** https://stackified.github.io/nk-creations/

Built for NK Creations by [Stackified](https://github.com/stackified).

## Features

- **Four pages with hash routing** - Home, Collections, About and Contact (`#collections`,
  `#about`, `#contact`), rendered by a small router in `src/main.js`
- **Smooth scrolling** with [Lenis](https://github.com/darkroomengineering/lenis), reset on every
  page change
- **Scroll animations** - IntersectionObserver-driven reveals, staggered product cards and a
  word-by-word headline reveal
- **Custom cursor** - a dot and a trailing follower that react to links, buttons and cards
- **Image parallax** on product and bento grid images
- **Search overlay** - quick links plus an instant client-side search over the site's
  collections and sections
- **Product grid** of featured denim styles, a scrolling marquee and a bento grid of brand
  highlights
- **Contact page** with email and phone links, location, and an inquiry form layout
- **Responsive layout** with a mobile menu

The site is fully static. The inquiry form and the "Download Catalog (PDF)" button are
presentational only: they are not connected to a backend or to a file. Enquiries go through the
email and phone links.

## Tech stack

- Vanilla JavaScript (ES modules), components written as functions that return HTML strings
- [Vite 5](https://vitejs.dev/) for the dev server and production build
- [Sass](https://sass-lang.com/) (SCSS) for styles
- [Lenis](https://github.com/darkroomengineering/lenis) for smooth scrolling
- Google Fonts: Host Grotesk, Inter and Space Mono

## Project structure

```
nk-creations/
├── index.html                  # Entry HTML, loads src/main.js
├── vite.config.js              # base: '/nk-creations/', output to dist/
├── public/
│   └── assets/images/          # Hero, product and brand images, logo, favicon
├── src/
│   ├── main.js                 # Lenis setup, hash router, search and mobile menu
│   ├── components/             # Header, Footer, Hero, Marquee, ProductGrid, BentoGrid, SearchOverlay
│   ├── pages/                  # Home, Collections, About, Contact
│   ├── utils/animations.js     # Scroll reveals, text reveal, custom cursor, parallax
│   └── styles/
│       ├── main.scss           # Entry stylesheet
│       ├── _variables.scss, _typography.scss, _reset.scss, _animations.scss
│       └── components/         # Header, footer, hero, product grid and contact styles
└── .github/workflows/          # GitHub Pages deployment and CodeQL scanning
```

## Getting started

Requires Node.js 18 or newer.

```bash
git clone https://github.com/stackified/nk-creations.git
cd nk-creations
npm install
npm run dev
```

Vite serves the site under the configured base path, at `http://localhost:5173/nk-creations/`
by default.

Other scripts:

```bash
npm run build     # production build to dist/
npm run preview   # serve the built dist/ locally
```

## Deployment

The site deploys to GitHub Pages through GitHub Actions. Every push to `main` runs
`.github/workflows/deploy.yml`, which installs dependencies, runs `npm run build` and publishes
`dist/`. The workflow can also be started manually from the Actions tab. Because the site is
served from `/nk-creations/`, the `base` option in `vite.config.js` must match the repository
name.

## License

Proprietary. Copyright (c) 2026 NK Creations. All rights reserved. Designed and developed by
[Stackified](https://github.com/stackified). See [LICENSE](LICENSE).
