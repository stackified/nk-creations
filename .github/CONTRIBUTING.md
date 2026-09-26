# Contributing to NK Creations

This is a client project: the code is owned by NK Creations and is designed, built and
maintained by the [Stackified](https://github.com/stackified) team. The repository is public for
portfolio purposes, so outside pull requests are not part of the normal workflow. Bug reports
through [issues](https://github.com/stackified/nk-creations/issues) are welcome, and security
problems should be reported privately (see [SECURITY.md](SECURITY.md)).

The notes below are for Stackified team members working on the site.

## Getting set up

The site is built with Vite, vanilla JavaScript and SCSS. You need Node.js 18 or newer and npm.

1. Clone the repository:
   ```bash
   git clone https://github.com/stackified/nk-creations.git
   cd nk-creations
   ```
2. Install dependencies and start the dev server:
   ```bash
   npm install
   npm run dev
   ```
   Then open `http://localhost:5173/nk-creations/` (Vite serves under the `base` path set in
   `vite.config.js`).
3. Check a production build:
   ```bash
   npm run build
   npm run preview
   ```

## Project structure

- `index.html` - entry HTML, loads Google Fonts and `src/main.js`
- `src/main.js` - Lenis smooth scrolling, the hash router, search overlay and mobile menu logic
- `src/components/` - Header, Footer, Hero, Marquee, ProductGrid, BentoGrid, SearchOverlay
  (functions that return HTML strings)
- `src/pages/` - Home, Collections, About, Contact
- `src/utils/animations.js` - scroll reveals, word-by-word text reveal, custom cursor, parallax
- `src/styles/` - `main.scss` plus partials for variables, typography, reset, animations and
  per-component styles in `components/`
- `public/assets/images/` - site images, logo and favicon
- `vite.config.js` - `base: '/nk-creations/'`, build output to `dist/`
- `.github/workflows/` - GitHub Pages deployment and CodeQL scanning

## Branches and deployment

- `main` is the only long-lived branch and the deployment branch. Every push to `main` runs
  `.github/workflows/deploy.yml`, which runs `npm install` and `npm run build` and publishes
  `dist/` to GitHub Pages at https://stackified.github.io/nk-creations/.
- The workflow can also be started manually from the Actions tab.

Because a merge to `main` goes live straight away, do all work on a feature branch.

## Making changes

1. Create a branch from `main`: `git checkout -b fix/short-description`
2. Keep changes focused. One feature or fix per pull request.
3. Match the existing style: vanilla JS components that return template strings, `nk-` prefixed
   BEM-style class names, and SCSS partials in `src/styles/`. No frameworks.
4. After changing markup, remember that `render()` in `src/main.js` rebuilds the page on every
   route change, so event handlers must be (re)attached in the init functions it calls.
5. Reference images with relative `assets/images/...` paths so they resolve under the
   `/nk-creations/` base path.
6. Run `npm run build` and check every page (Home, Collections, About, Contact), the search
   overlay and the mobile menu before opening a pull request.

## Pull requests

1. Push your branch and open a pull request against `main`.
2. Fill in the pull request template: what changed, why, and how you tested it.
3. Link any related issue (for example, `Closes #12`).
4. CodeQL runs on every pull request to `main`; resolve any new alerts before merging.

For security issues, follow [SECURITY.md](SECURITY.md) instead of opening a public issue.
