<div align="center">

# Strand

### One canvas for every model.

Strand is a marketing landing page for a fictional **AI workflow app** — a node-based canvas where
creators chain text, image, video, audio, pixel-art and 3D models into a single flowing pipeline.

Every illustration is original, hand-drawn-style inline SVG. A glowing **workflow trajectory** travels
the page as you scroll, lighting each section up like a node in a running pipeline. Light and dark
themes share the same artwork.

</div>

---

## ✨ Highlights

- **19 original SVG illustrations** — drawn as layered inline SVG with organic wobble (turbulence
  displacement), watercolor gradient washes, paper grain, glow filters, and idle float/twinkle/spark
  animations. No raster assets, no stock art.
- **Signature scroll trajectory** — a GSAP ScrollTrigger-scrubbed thread runs down the middle of the
  page with a glowing spark at its tip. It auto-discovers every section as a workflow node, draws into
  each one, lights it, and flows onward. Respects `prefers-reduced-motion`.
- **Interactive workflow demo** — a real, draggable [React Flow](https://reactflow.dev) canvas
  (`brief → text → image → upscale → output`) with a **Run** button that animates the pipeline node by
  node. Lazy-loaded so it never weighs down first paint.
- **Light + dark themes** — CSS-variable design tokens, persisted to `localStorage`, no flash on load.
  Illustrations are theme-neutral; only the ink color flips for legibility.
- **Fully responsive** — fluid type via `clamp()`, collapsing grids, a mobile hamburger menu, and a
  trajectory that simplifies then hides on smaller screens. Verified 375 → 1920px.

## 🧱 Tech stack

| Concern            | Choice |
| ------------------ | ------ |
| Framework          | [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org) |
| Build tool         | [Vite](https://vite.dev) |
| Styling            | [Tailwind CSS v4](https://tailwindcss.com) (CSS-first `@theme`) with CSS-variable design tokens |
| Reveal animation   | [Framer Motion](https://www.framer.com/motion/) |
| Scroll animation   | [GSAP](https://gsap.com) + ScrollTrigger |
| Node canvas        | [@xyflow/react](https://reactflow.dev) (React Flow), lazy-loaded |
| Illustrations      | Hand-authored inline SVG components |

## 🚀 Getting started

Requires **Node 18+**.

```bash
# install dependencies
npm install

# start the dev server (http://localhost:5173)
npm run dev

# type-check + production build to dist/
npm run build

# preview the production build locally
npm run preview

# lint
npm run lint
```

## 🗂️ Project structure

```
src/
├─ App.tsx                  # page composition
├─ index.css                # Tailwind v4 import, theme tokens, illustration keyframes
├─ lib/theme.ts             # light/dark persistence
├─ components/              # one file per section + Nav, ThemeToggle, TrajectoryLine, Waitlist
│  └─ flow/                 # React Flow demo (DemoFlow, custom nodes, flow.css)
└─ illustrations/           # SvgDefs + every hand-drawn SVG (hero, model spots, features, industries)
```

The trajectory line discovers sections automatically: any `<section id="…">` rendered inside `<main>`
becomes a node on the scroll thread — no manual wiring per section.

## 🎨 Design notes

The visual direction takes layout cues from [qvery.ai](https://qvery.ai) — frosted pill nav, centered
badge → headline → subheading section headers, soft decorative color washes — and adds a purple
co-primary alongside the teal/coral palette. Headings use Lato 900; body copy uses Inter.

---

<div align="center">
<sub>Built with Claude Code.</sub>
</div>
