# Arpit Tiwari portfolio

A responsive software engineer portfolio with straightforward professional copy and a retro pixel-art design. Built from scratch with HTML, CSS, JavaScript, and an original SVG pixel-art scene. No build tools or runtime dependencies are required.

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
- `world.svg` is an original, editable pixel-art illustration.

Project cards cover ten selected GitHub projects, with category filters, detail dialogs, and direct repository links. No live-demo links were supplied. See `PROJECT_REVIEW.md` for the selection rationale and source-review limitations. Email, GitHub, and LinkedIn links come from the resumes. Google Fonts provides Press Start 2P and VT323 with monospace fallbacks when offline.

Content uses the updated resume for dates and figures, supplemented with project and tooling details from the older resume. Arpit confirmed his current Techolution internship and full-time transition to Associate Python Cloud Engineer in October 2026. Update the experience section when that role begins. Local PDF-reading and content-editing utilities in `.tmp/` are ignored and are not needed to run or deploy the website.

## Deploy

Upload `index.html`, `style.css`, `app.js`, `world.svg`, and `favicon.svg` to any static host. `server.js` is only needed for the local Node preview.

Features include responsive navigation, project category filters, accessible native dialogs, email copying, reduced-motion support, keyboard focus states, and a skip link.
