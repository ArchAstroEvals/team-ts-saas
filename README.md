# team-ts-saas

Next.js SaaS starter: plans, signup, billing, teams.

## Run

`npm install`, then `npm run dev`.

## Test

- Unit: `npm test` (vitest, `lib/` only)
- E2E: `npm run e2e` (Playwright smoke specs in `e2e/`)
- Full: `npm run build`

## Tickets

Work tracks against `linear:`-prefixed issues (LIN-101 and up).

## Layout

- `app/` — routes and pages (server components; client only for forms)
- `components/` — presentational pieces
- `lib/` — pricing, billing, auth, teams math with tests
- `e2e/` — Playwright smoke specs
