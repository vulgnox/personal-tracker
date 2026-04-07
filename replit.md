# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### JEE Mains Journey Tracker (`/`)
- **Type**: react-vite (pure HTML/CSS/JS app served via Vite)
- **Location**: `artifacts/jee-tracker/`
- **Entry**: `artifacts/jee-tracker/index.html` — self-contained vanilla HTML/CSS/JS app
- **Storage**: All data in `localStorage` — no backend required
- **External libs**: Chart.js 4.4.1 (CDN), Google Fonts (Inter)
- **Features**:
  - Daily study log (Physics, Chemistry, Maths) with hour tracking
  - Daily goal setting + progress bar
  - Streak counter (consecutive study days)
  - Pomodoro-style timer (45 min study / 10 min break)
  - Focus Mode overlay with motivational quotes + beforeunload guard
  - Screen time tracking with configurable daily limit + warnings
  - Browser Notifications API reminders (custom time + days)
  - Daily check-in reminder if no session logged
  - Dashboard: stats grid, subject bars, weekly chart, motivational quote
  - Bottom nav: Home, Study Log, Timer, Reminders
  - Dark theme with deep blue + orange accents, mobile-first
