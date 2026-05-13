# Design System Audit

Phase 1 baseline for the anti-vibe-coded design overhaul. Tokens are
defined in `src/app/globals.css :root`. This doc tracks current
violations and the migration plan.

---

## Current state (audit findings)

### Border radius — 21 distinct values

Found in `globals.css`:
`0, 2px, 4px, 6px, 7px, 8px, 10px, 12px, 14px, 16px, 18px, 20px, 24px,
28px, 32px, 36px (asymmetric), 50%, 100px, 999px`.

**Target**: 3 tokens + pill.
- `--radius-sm: 8px` — chips, inputs, small tags
- `--radius-md: 16px` — cards, modals
- `--radius-lg: 24px` — hero/feature cards
- `--radius-pill: 999px` — pill buttons, avatars

Migration: replace `border-radius: 6px|7px|8px|10px` → `var(--radius-sm)`;
`12px|14px|16px|18px|20px` → `var(--radius-md)`; `24px|28px|32px` →
`var(--radius-lg)`; `100px|999px` → `var(--radius-pill)`. Asymmetric
radii (e.g., `36px 36px 0 0` on the nav) keep explicit values — they're
intentional.

### Hover translateY — 8 distinct values (−1, −2, −4, −6, −8, +6, +30 px)

Cap per spec: 2–4px lift on hover.

**Target**: `--lift-sm: -2px` (buttons, small chips), `--lift-md: -4px`
(cards). Any `-6px`, `-8px` translates must drop to `-4px`. The `+30px`
value is a Reveal entry animation and stays.

### Easing curves — 5 distinct

`cubic-bezier(0.2, 0.8, 0.2, 1)`, `cubic-bezier(0.4, 0, 0.2, 1)`,
`ease-out`, `ease-in-out`, `linear`.

**Target**: 3 tokens.
- `--ease-out` (default for entrances) → `cubic-bezier(0.2, 0.8, 0.2, 1)`
- `--ease-in-out` (symmetric state changes) → `cubic-bezier(0.4, 0, 0.2, 1)`
- `--ease-spring` (overshoot for delight) → `cubic-bezier(0.34, 1.56, 0.64, 1)`

`linear` stays only for true-linear motion (e.g., infinite carousels).

### Durations — 7 distinct (`0.15s 0.2s 0.25s 0.3s 0.4s 0.6s 0.8s`)

**Target**: 3 tokens.
- `--duration-fast: 150ms` — hovers, focus states
- `--duration-base: 250ms` — most transitions
- `--duration-slow: 400ms` — Reveal entrances, layout shifts

### Font sizes — 14 px literals + 10 distinct `clamp()` formulas

Hero/title clamps are nearly duplicates of each other (`clamp(42px,5.5vw,76px)`
vs `clamp(48px,8vw,108px)` vs `clamp(52px,7vw,104px)` etc).

**Target**: 9-step scale.
- `--text-xs: 12px`
- `--text-sm: 14px`
- `--text-base: 16px`
- `--text-lg: 18px`
- `--text-xl: 24px`
- `--text-2xl: 32px`
- `--text-3xl: clamp(36px, 4vw, 48px)` — section headings
- `--text-4xl: clamp(48px, 6vw, 72px)` — page headings
- `--text-display: clamp(56px, 7vw, 104px)` — hero only

Plus weight tokens (`--weight-regular/medium/semibold/bold/black`) and
line-height tokens (`--leading-tight/snug/normal/relaxed`).

---

## Migration plan

Each phase is a separate PR.

| # | Phase | Status |
|---|---|---|
| 1 | Define tokens, audit, no visual change | done |
| 2 | Copy + non-functional icon cleanup | done |
| 3 | Replace border-radius literals with tokens | done |
| 4 | Replace hover lift / glow / transition values with tokens | pending |
| 5 | Typography normalization (replace clamp() literals + weight pairings) | pending |
| 6 | Replace ad-hoc easing curves + durations | pending |
| 7 | UX: loading skeletons + button progress indicators | pending |

### Radius mapping applied (Phase 3)

| Old literal(s) | New token |
|---|---|
| 6px, 7px, 8px, 10px, 12px (in CSS), `rounded-xl` (Tailwind 12px), `9px` inline | `var(--radius-sm)` = 8px |
| 14px, 16px, 18px, 20px, `rounded-[20px]` arbitrary | `var(--radius-md)` = 16px |
| 24px, 28px, 32px | `var(--radius-lg)` = 24px |
| 100px, 999px | `var(--radius-pill)` |

Kept as literals (intentional): `0`, `2px` (2 uses — tiny inset accents),
`4px` (1 use), `50%` (5 uses — circular avatars), asymmetric
`36px 36px 0 0` and `0 0 36px 36px` (decorative nav corner).

Net: 21 distinct values → 4 tokens + 4 intentional literals (down from 21).

Each subsequent PR replaces literals with the relevant tokens. Run
`git grep` against the audit categories to verify zero remaining
literals before marking a phase done.

---

## Non-goals

- Purple is the brand color (`--primary: #8b5cf6`). "No default purple
  gradients" is interpreted as "kill lazy purple-to-transparent fades
  used decoratively without intent" — not "ban purple".
- Hero/portrait images deserve their own pass; this audit is layout
  and type only.
