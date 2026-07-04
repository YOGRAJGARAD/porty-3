# Yograj Garad — AI & Data Science Portfolio

A premium single-page portfolio showcasing Yograj Garad's AI/Data Science projects, skills, education, and experience — built with React + Vite, Tailwind CSS, and Framer Motion.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/portfolio/src/` — all frontend code
- `artifacts/portfolio/src/index.css` — theme palette (HSL vars: cream bg, violet primary, orange accent)
- `artifacts/portfolio/src/data/projects.ts` — all project data including FYP
- `artifacts/portfolio/src/components/AntigravityCursor.tsx` — custom cursor physics
- `artifacts/portfolio/public/assets/` — project banner images

## Architecture decisions

- Fully static frontend — no API calls. All project data lives in `src/data/projects.ts`.
- Antigravity cursor implemented with `requestAnimationFrame` + lerp (factor 0.08) — NOT framer-motion spring — to avoid jitter on the ring. `useRef<number | null>(null)` required for React 19 TS types.
- Project images served from `artifacts/portfolio/public/assets/` (Vite serves `public/` at root).
- Wouter router uses `import.meta.env.BASE_URL` as base path for the Replit proxy.

## Product

Single-page portfolio at `/`. Sections: Hero (typewriter roles + metrics), About, Skills (categorized pills), Education (timeline), Projects (glassmorphism grid + full-screen modal), Experience (timeline), Contact. Features the Final Year Project "Learning Causal Semantic Representations for Robust OOD Prediction" as a featured card. Antigravity cursor: orange dot (precise) + violet ring (spring-lerp physics via rAF). Light/dark mode toggle stored in localStorage.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
