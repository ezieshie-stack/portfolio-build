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
| 4 | Replace hover lift / glow / transition values with tokens | done |
| 5 | Typography normalization (replace clamp() literals + weight pairings) | done |
| 6 | Replace ad-hoc easing curves + durations | done |
| 7 | UX: loading skeletons + button progress indicators | done |

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

### Hover lift mapping applied (Phase 4)

| Old translateY | New token |
|---|---|
| -1px, -2px | `var(--lift-sm)` = -2px |
| -4px, -6px, -8px | `var(--lift-md)` = -4px (caps over-lifts per the 4px ceiling) |

Kept unchanged: `translateY(-50%)` (vertical centering), `translateY(0)`
(reset states), `translateY(30px)` (Reveal entry), `translateY(6px)`
(keyframe initial), and compound `translateY(...) scale(...)` expressions.

### Glow removal applied (Phase 4)

Two generic purple-glow hover shadows replaced with neutral elevation
shadows:
- `.btn-pill:hover` was `box-shadow: 0 8px 25px var(--primary-glow)`
  → `0 6px 18px rgba(0, 0, 0, 0.35)`
- `.resume-modal-download:hover` was `0 6px 18px var(--primary-glow)`
  → `0 4px 12px rgba(0, 0, 0, 0.3)`

Kept: `.status-dot` uses `var(--primary-glow)` as its decorative pulse,
not a hover effect.

### Typography mapping applied (Phase 5)

**Static sizes (CSS + TSX):**

| Old literal(s) | New token |
|---|---|
| 11px, 12px | `--text-xs` (12px) / Tailwind `text-xs` |
| 13px, 14px | `--text-sm` (14px) / Tailwind `text-sm` |
| 15px, 16px | `--text-base` (16px) / Tailwind `text-base` |
| 17px, 18px | `--text-lg` (18px) / Tailwind `text-lg` |
| 22px, 24px | `--text-xl` (24px) / Tailwind `text-2xl` |
| 26px, 28px, 32px | `--text-2xl` (32px) / Tailwind `text-2xl` |
| 40px | `--text-3xl` (fluid 36–48px) |
| 42px, 44px | `--text-4xl` (fluid 48–72px) |
| 56px, 64px, 68px | `--text-display` (fluid 56–104px) |

**Fluid clamps (CSS + TSX):**

| Old clamp formula | New token |
|---|---|
| `clamp(20, 2.4vw, 26)`, `clamp(24, 3vw, 34)` | `--text-2xl` |
| `clamp(26, 3vw, 36)`, `clamp(28, 3vw/3.4vw, 36/42)`, `clamp(32, 5vw, 52)`, `clamp(34, 3vw/10vw, 44/48)`, `clamp(36, 4vw, 60)` | `--text-3xl` |
| `clamp(34, 4vw, 64)`, `clamp(36, 5vw, 56)`, `clamp(40, 6vw, 80)`, `clamp(42, 5.5vw, 76)`, `clamp(44, 12vw, 64)`, `clamp(48, 6.4vw, 72)`, `clamp(64, 6vw, 92)` | `--text-4xl` |
| `clamp(48, 8vw, 108)`, `clamp(52, 7vw, 104)`, `clamp(64, 9vw, 96)`, `clamp(72, 6.5vw, 100)`, `clamp(72, 7vw, 118)` | `--text-display` |

Kept as literals (intentional outliers): `9px`, `10px` (sub-token fine
print eyebrow tags), `0.9em`, `0`, and `text-[clamp(96px,18vw,200px)]`
(404-page giant code number).

Net: 14 px literals + 13 clamp formulas (CSS) + 11 px literals + 10
clamp formulas (TSX) → 9 token tiers + 4 intentional literals.

### Easing + duration mapping applied (Phase 6)

**Easing curves** (the cubic-bezier values already matched the tokens
verbatim; replacement is consistency-only, zero visual change):

| Old value | New token |
|---|---|
| `cubic-bezier(0.2, 0.8, 0.2, 1)` (8 uses) | `var(--ease-out)` |
| `cubic-bezier(0.4, 0, 0.2, 1)` (4 uses) | `var(--ease-in-out)` |
| `cubic-bezier(0.34, 1.56, 0.64, 1)` (1 use) | `var(--ease-spring)` |
| `ease` keyword in transitions | `var(--ease-out)` |
| `ease-out` / `ease-in-out` keyword in animations | `var(--ease-out)` / `var(--ease-in-out)` |

**Transition durations:**

| Old duration | New token |
|---|---|
| 150ms, 180ms, 200ms, 240ms | `var(--duration-fast)` (150ms) |
| 250ms, 300ms, 320ms | `var(--duration-base)` (250ms) |
| 400ms, 600ms, 800ms | `var(--duration-slow)` (400ms — caps over-slow transitions) |

Kept as literals (intentional motion design): long animation durations
for infinite/looped motion (1.8s opPulse, 5s opTravel, 7s dashFlow, 8s
heroGridPulse, 25s orbFloat, 28s toolsScroll, 40s marquee) and the
0.001ms reduced-motion media-query overrides.

### UX behaviors added (Phase 7)

- **`Spinner` component** — Pure-CSS rotating ring. Uses
  `var(--duration-slow)` for the rotation period; `currentColor` so it
  inherits parent text color. Includes `role="status"` and `sr-only`
  label for screen readers.
- **`PageSkeleton` component** — Generic page-level skeleton with a
  tag/title block and a 3-card grid placeholder. Uses the new
  `.skeleton` class (gradient shimmer keyframed at 1.4s).
- **`loading.tsx`** files added for `/`, `/about`, `/work`, `/process`,
  `/insights`. Next.js auto-renders these while the server component
  streams. Layout shape matches the real page closely enough to avoid
  a visible jump on hydration.
- **ContactForm** — wired a real sending state. `sending` flag disables
  all fields, swaps button text to "Sending…" with an inline Spinner,
  and uses `aria-busy={true}` for AT. Placeholder 800ms timeout stands
  in for the real submission; replace with the actual fetch when the
  form is wired to mailto/Formspree/Resend.
- **ResumeViewer modal** — tracks `frameLoaded`. Until the iframe
  fires its `onLoad`, a centered Spinner overlay sits above the dark
  iframe background so the modal never looks empty during the PDF
  fetch. Resets to "loading" when the modal closes/reopens.
- **CSS additions** — `.spinner`, `.sr-only`, `.skeleton` +
  `skeletonShimmer` keyframe, `spin` keyframe, plus
  `.resume-modal-frame-wrap` / `.resume-modal-frame-loader` for the
  iframe overlay.

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
