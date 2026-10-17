# Arpit Tiwari portfolio

A responsive software engineer portfolio with a blush-and-serif editorial design, clear project summaries, and measurable career highlights. Built with HTML, CSS, and JavaScript. No build tools or runtime dependencies are required.

## Run locally

Install Node.js 18 or newer, then run:

```sh
npm run dev
```

Open http://localhost:3000. Use `npm run check` for JavaScript syntax validation.

## Customize

- Edit Arpit's biography, experience, stats, skills, education, and contact links in `index.html`.
- Replace project descriptions in `app.js` and project cards in `index.html`.
- Update the email address in both `index.html` and `app.js`.
- Adjust colors in `style.css` using its root variables.
- `favicon.svg` contains the site monogram. `world.svg` is a retained legacy illustration.

Project cards cover ten selected GitHub projects, with category filters, detail dialogs, and direct repository links. No live-demo links were supplied. See `PROJECT_REVIEW.md` for the selection rationale and source-review limitations. Email, GitHub, and LinkedIn links come from the resumes. Fontshare provides Sentient for headings and Google Fonts provides DM Sans for body text, with local serif and sans-serif fallbacks.

Content uses the updated resume for dates and figures, supplemented with project and tooling details from the older resume. Arpit is currently an Associate Python Cloud Engineer at Techolution, following his Python Cloud internship. The role transition is recorded as October 2026. Local PDF-reading and content-editing utilities in `.tmp/` are ignored and are not needed to run or deploy the website.

## Deploy

The portfolio is published with GitHub Pages at https://arpit-tiwari-dev.github.io/portfolio/. Pages uses the root of the `main` branch, so pushing updates to `main` republishes the site. `.nojekyll` serves the files without Jekyll processing.

Upload `index.html`, `style.css`, `app.js`, `world.svg`, and `favicon.svg` to any static host. `server.js` is only needed for the local Node preview.

Features include responsive navigation, shareable project category filters, accessible native dialogs, email copying, reduced-motion support, keyboard focus states, and a skip link.
