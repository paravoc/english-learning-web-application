# Danobius

Danobius is a plain static English-learning web app built with:

- `index.html`
- `styles.css`
- `app.js`
- `public/`

It opens directly from a file and works on GitHub Pages without:

- `npm`
- `vite`
- `localhost`
- any backend

## What is included

- Duolingo-inspired mobile-friendly learning path
- all major English tenses
- extra topic lessons beyond tenses
- theory mode without levels
- offline dictionary with A-Я filtering
- browser-based audio playback for examples and listening lessons
- progress, XP and streak saved in `localStorage`

## Local launch

Open `index.html` in a browser.

That is enough.

## GitHub Pages

The repository contains `.github/workflows/deploy.yml`.

GitHub Pages publishes the static files directly:

- `index.html`
- `styles.css`
- `app.js`
- `public/`

No build step is required.
