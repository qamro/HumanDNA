<div align="center">

![HUMANDNA Banner](https://img.shields.io/badge/HUMANDNA-Personality%20Sequencer%20v1.0-7c3aed?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9IiMwYTBiMTQiLz48cmVjdCB4PSIxMiIgeT0iOCIgd2lkdGg9IjciIGhlaWdodD0iNDgiIHJ4PSIzLjUiIGZpbGw9IiM3YzNhZWQiLz48cmVjdCB4PSI0NSIgeT0iOCIgd2lkdGg9IjciIGhlaWdodD0iNDgiIHJ4PSIzLjUiIGZpbGw9IiM3YzNhZWQiLz48cmVjdCB4PSIxOSIgeT0iMTQiIHdpZHRoPSIyNiIgaGVpZ2h0PSI2IiByeD0iMyIgZmlsbD0iIzdjM2FlZCIvPjxyZWN0IHg9IjE5IiB5PSIyNCIgd2lkdGg9IjI2IiBoZWlnaHQ9IjYiIHJ4PSIzIiBmaWxsPSIjZjQzZjVlIi8+PHJlY3QgeD0iMTkiIHk9IjM0IiB3aWR0aD0iMjYiIGhlaWdodD0iNyIgcng9IjMuNSIgZmlsbD0iI2Y1OWUwYiIvPjxyZWN0IHg9IjE5IiB5PSI0NCIgd2lkdGg9IjI2IiBoZWlnaHQ9IjYiIHJ4PSIzIiBmaWxsPSIjMTBiOTgxIi8+PC9zdmc+)

**5 questions. No right answers. Your unique DNA strand.**

*Generated from how you actually think not how you pretend to.*

[![Built with Vite](https://img.shields.io/badge/Built%20with-Vite-646cff?style=flat-square&logo=vite)](https://vitejs.dev)
[![Vanilla JS](https://img.shields.io/badge/Vanilla-JavaScript-f7df1e?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Deploy on Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=flat-square&logo=vercel)](https://vercel.com)
[![License MIT](https://img.shields.io/badge/License-MIT-10b981?style=flat-square)](LICENSE)

</div>

---

## ✦ What is HUMANDNA?

HUMANDNA is a **personality DNA generator** a web app that sequences your personality into a unique visual DNA strand based on 5 carefully crafted, unexpected questions. No Myers-Briggs boxes. No color tests. Just raw, honest, slightly absurd questions that reveal how you actually operate.

You answer 5 questions. The app builds your strand in real time. Then it reveals your **Human Type** one of 12 distinct personality archetypes along with a visual DNA strand, trait bars, and a shareable result card.

> *"Your answers don't lie. Only your introduction does."*

---

## ✦ Features

- 🧬 **Live DNA strand** — builds block by block as you answer each question
- 🎯 **12 unique Human Types** — from *The Silent Strategist* to *The Chaotic Empath*
- ⚡ **Animated UI** — smooth screen transitions, scan animations, trait bar reveals
- 📤 **Share your result** — native share sheet on mobile, clipboard copy on desktop
- ⌨️ **Keyboard support** — press A/B/C/D or 1/2/3/4 to answer, Enter to start
- 🔁 **Logo navigation** — click HUMANDNA logo anytime to return home
- 📱 **Fully responsive** — works on mobile, tablet, and desktop
- 🎨 **Zero dependencies** — pure Vite + Vanilla JS + CSS, no frameworks

---

## ✦ Screens

| Screen | Description |
|--------|-------------|
| **Landing** | Hero page with animated DNA preview, stats, and CTA |
| **Questions** | 5 questions with live DNA strand building in real time |
| **Analyzing** | Scanning animation while your type is being computed |
| **Result** | Your Human Type, full DNA strand, trait bars, and share button |

---

## 🛠 Tech Stack
- **Vite** — build tool & dev server
- **Vanilla JS** (ES Modules)
- **CSS Custom Properties** — design system
- **Google Fonts** — Syne + Inter
- **No frameworks. No dependencies beyond Vite**.

---

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

---

## 🚢 Deployment

This project is deployed on **[Vercel](https://vercel.com/)**.

---

## 👨‍💻 Author

Developed by:

**Mohamed Qamar Eddine Bakhouche** 

Computer Science Student · ESTIN

Higher School of Computer Science and Digital Technologies
