# <div align="center"> Niharika Dutta - Portfolio </div>

Personal portfolio site built with Next.js 15 (App Router), Tailwind CSS v4, and Framer Motion. Statically exported for GitHub Pages / Netlify.

## 🌐 Live Demo

- **Website**: https://niharika-dutta.vercel.app/
- **GitHub Pages**: https://niharika2k00.github.io/portfolio/

## Stack

- **Framework:** Next.js 15, TypeScript
- **Styling:** Tailwind CSS v4 (`@theme` tokens in `globals.css`)
- **Animation:** Framer Motion
- **Fonts:** Geist, Geist Mono, Playfair Display, Bonheur Royale

## Dev

```bash
npm install
npm run dev        # localhost:3000
npm run build      # static export → out/
npm run lint
```

## Deploy

```bash
# GitHub Pages
DEPLOY_TARGET=github npm run build

# Netlify / default
npm run build
```
