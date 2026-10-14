# Portfolio SPA

The SPA branch keeps the original portfolio homepage and its 30 UGC cards while adding four internal profile/project routes:

- `/Portfolio/fiverr/`
- `/Portfolio/upwork/`
- `/Portfolio/linkedin/`
- `/Portfolio/avenqora/`

The four platform selector cards route to these pages using Next.js client navigation. Page transitions use Motion for React (the current Framer Motion successor). A GitHub Actions workflow builds a static export for GitHub Pages; the deploy job only runs on `main`.

## Local development

- Install Node.js 22 or later.
- Run `npm install`.
- Run `npm run dev`.

The GitHub Pages build uses `GITHUB_PAGES=1` to set the project-site base path to `/Portfolio`. The existing root `index.html` is preserved as a source/reference file; the published homepage is generated from the preserved HTML body saved in `app/legacy-data.js`.
