# 🧬 HUMANDNA — What Kind of Human Are You?

A personality DNA generator. 5 weird questions. Your unique strand. Shareable results.

## Tech Stack
- **Vite** — build tool & dev server
- **Vanilla JS** (ES Modules)
- **CSS Custom Properties** — design system
- **Google Fonts** — Syne + Inter
- No frameworks. No dependencies beyond Vite.

## Local Development

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Build for Production

```bash
npm run build
```

Output goes to `dist/`

## Deploy to Vercel

### Option 1 — Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2 — GitHub + Vercel Dashboard
1. Push this folder to a GitHub repo
2. Go to vercel.com → New Project → Import your repo
3. Framework: **Vite** (auto-detected)
4. Click Deploy

The `vercel.json` is already configured.

## Project Structure

```
humandna/
├── index.html          # Entry point
├── vite.config.js      # Vite config
├── vercel.json         # Vercel deploy config
├── package.json
└── src/
    ├── main.js         # App controller, quiz logic
    ├── data.js         # Questions + 12 human types
    ├── dna.js          # DNA strand rendering utilities
    └── style.css       # Full design system
```

## Customization

- **Add questions** → `src/data.js` → `QUESTIONS` array
- **Add human types** → `src/data.js` → `HUMAN_TYPES.default_types`
- **Change colors** → `src/style.css` → `:root` variables
- **Add traits** → `src/data.js` → `TRAIT_COLORS`
