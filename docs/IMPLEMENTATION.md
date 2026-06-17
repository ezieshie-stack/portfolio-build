# IMPLEMENTATION.md — Hard Contract for Building This Portfolio

> **Read this before writing any code.** The deployed build diverged badly because it was rebuilt freehand. This document is a **contract**, not a reference. Follow it literally. When in doubt, copy — do not invent.

## The three rules (non-negotiable)

1. **Import our CSS. Do not restyle in Tailwind.**
   `@import` these (in `globals.css` or `app/layout.tsx`), in this order:
   `styles.css` → which pulls in `tokens/colors.css, typography.css, spacing.css, effects.css, background.css, fonts.css` → then `portfolio.css`.
   Every visual value lives there. **Do not** re-derive colors, spacing, cards, or diagrams in Tailwind. Tailwind is only for net-new layout the prototype didn't cover.

2. **Mirror the `pf-*` / `ds-*` markup exactly.** Each component's JSX must output the **same class names and DOM structure** as the prototype files (`sections.jsx`, `sections-extra.jsx`, `pages.jsx`). You are porting markup + behavior to React/TSX, not redesigning. If a class is `pf-principle`, your `<div>` is `className="pf-principle"`. The diagrams (radial ring, numbered pipeline, principle cards) come through **because** you reuse the markup + CSS.

3. **`COPY.md` is the ONLY source of text.** Every headline, paragraph, label, list item, and metric must match `COPY.md` verbatim. **Do not** write your own copy. **Do not** pull copy from the repo's old `lib/content.ts`. If `COPY.md` and `lib/content.ts` disagree, `COPY.md` wins, always.

---

## Light-mode contrast — FIX THIS FIRST

The deployed build's light mode is unreadable because near-white text values were used on a light canvas. Light mode is **dark text on light canvas**. The tokens are already correct in `tokens/colors.css` under `[data-theme="light"]`. Use them — do not hardcode text colors.

| Role | Light value | Token |
|---|---|---|
| Canvas | `#f6f5fb` | `--bg` |
| Card surface | `#ffffff` | `--surface` |
| **Headings** | **`#15131c`** | `--text-heading` |
| **Body text** | **`#56535f`** | `--text-body` |
| Dim text | `#817e8d` | `--text-dim` |
| Accent | `#7c3aed` | `--accent` |
| Accent text | `#6d28d9` | `--accent-text` |
| Border | `#e7e6f0` | `--border` |
| Card shadow | `0 1px 2px rgba(24,20,40,.04), 0 16px 40px rgba(91,53,176,.10)` | `--card-shadow` |

Theme is driven by `data-theme="light|dark"` on `<html>`, persisted to `localStorage["pf-theme"]`. Every component reads semantic tokens, so theming is automatic **if you don't hardcode colors.** Verify BOTH themes on every page before shipping.

---

## Section-by-section: DEPLOYED (wrong) → MUST BE

### Home
| Section | Deployed (wrong) | Must be (from COPY.md) |
|---|---|---|
| Hero headline | "Diagnosing Workflows. Building The Fix." | **"I work the full lifecycle, from requirements to live operation."** (accent on "to live operation.") |
| Hero sub | old "I lead the full business-analysis lifecycle…" | the FIIT Co. paragraph in COPY.md |
| Hero portrait | `/portrait.png` (old cutout) | **`portrait-home-clean.png`**, framed glass card, `object-position: 34% 26%` |
| Core Capabilities | Process Diagnosis / Bottleneck Analysis / … | **Requirements Elicitation · Process & Data Modeling · BPMN Diagramming · User Acceptance Testing · Solution Delivery · Platform Administration** |
| About preview | "I Diagnose / I Redesign / I Deliver" | **Requirements / Modeling / Delivery & Operation**; headline "I work the requirement, model it, deliver it, and run it live." |
| **My Approach** | old node-flow + "Diagnose. Redesign. Deliver." | **4 principle cards** (`.pf-principle`): "The stated problem is rarely the real one." / "You learn a process from the people who run it." / "Data modeling matters as much as process modeling." / "A requirement isn't done until it's testable." |
| Anatomy of an Engagement | **present** | **DELETE IT** — removed by design (the Process page owns the step model) |
| Featured project | "Fiitco: Fitness Operations Platform" | **"FIIT Co. Operations Platform"**; highlights = six-person team / BRD,PRD / retained as sole administrator (see COPY.md) |
| Tools / Skills | old lists | the lists in COPY.md (no "Jupyter", no "AI-Accelerated Prototyping") |
| Currently Exploring | big cards | **compact rows** (`.pf-explore-row`) with a mono "In progress" tag |

### About
| Section | Must be |
|---|---|
| Hero | headline "Requirements through delivery, and the live operation after." + the COPY.md bio. **Do NOT** use "I diagnose, document, and own the solutions teams rely on" or invent a "56-finding audit." |
| Stat row | ECBA · 3.81 GPA · 2 Production Systems · 6 Analyst Team Led |
| Experience | the 4 roles verbatim from COPY.md (Brand Ambassador · Ralph Lauren, **not** "Sales Ambassador") |
| What Drives Me | **Diagnose before designing · Own it through operation · Write it plainly · Useful in both rooms** — NOT "Delivery, Not Just Decks / Bridge Operator" |
| Core Strengths | **editorial 2-col numbered checklist** (`.pf-strengthlist` / `.pf-strengthrow`, 01–10) — NOT a card grid |
| Education | 4 entries; About-page photo = `portrait-2.png` |

### Process
| Section | Must be |
|---|---|
| Hero | "Five phases from requirement to live operation." (text-only, full width) |
| Diagram | **radial Lifecycle ring** (`.pf-opring` + `.pf-oppanel`), phases **Analyze · Design · Deliver · Operate**, panel title **"Lifecycle Control"**, metrics Visibility/Throughput/Adoption that count up. NOT the old tabbed "Operational Control System" with Listen/Map/Diagnose/Deliver/Hand Off. |
| Execution Model | 5 steps **Elicit · Model · Design · Deliver · Operate** (COPY.md), `.pf-stepblock` |
| Recent Results | 27 / 0.86 / 5,000+ |

### Insights (new page — was unpublished in repo)
- Hero, **Featured Insight** card (amber badge), filter pills, **6 article cards** (`.pf-insightcard`).
- Clicking a card opens the **Article Reader overlay** (`.pf-reader`) with full body content from `pages.jsx` → `INSIGHTS_ARTICLES` / `INSIGHTS_FEATURED`. Close via ×, backdrop, or Escape.
- Add **Insights** to the nav (Home · About · Work · Process · Insights · Contact).

### Global
- **Eyebrows have NO `// ` prefix.** Just "Process Framework", "Recent Results", etc.
- Nav active state = underline; mobile (≤760px) collapses to a hamburger menu (name/role, links, theme toggle, button all hide into it).
- Footer = 4-column (brand / Navigation / Resources / Availability) + CTA band "Let's talk through it." + bottom bar.

---

## Behavior to port (React state)
- Theme toggle (sets `data-theme`, persists `pf-theme`).
- Project slider (`cur` index, `translateX(-cur*100%)`).
- Filter pills on Work + Insights (filter by category/group; "All" shows all).
- Lifecycle ring (`phase` 0–3; node click; conic sweep + count-up metrics).
- Article reader (`open` article | null; ×/backdrop/Escape close).
- Marquees (CSS keyframes, pause on hover).

## Production swaps (allowed, expected)
- `next/font/google` for **Geist** + **Geist Mono** (instead of the Google `<link>`).
- `lucide-react` for icons; keep inline brand SVGs for **GitHub / LinkedIn / Figma** (`window.PF_BRAND` in `sections.jsx`).
- `next/link` + `usePathname()` for nav + active state.
- `next/image` for portraits.
- Insights/Work data may come from Convex with COPY.md content as the published values.

## Definition of done
- [ ] Both light and dark themes readable on **every** page (light = dark text on light bg).
- [ ] Every section matches the DEPLOYED→MUST-BE table above.
- [ ] My Approach = 4 principles; Lifecycle = radial ring; Core Strengths = numbered list; Currently Exploring = rows; Anatomy removed.
- [ ] All copy matches `COPY.md` verbatim; no invented text.
- [ ] Portraits: `portrait-home-clean.png` (home), `portrait-2.png` (about).
- [ ] No `// ` eyebrow prefixes.

## Still unconfirmed (owner must verify before public)
Marketing PG GPA (shown as "Dean's List" only), Ralph Lauren "Present", Telco metrics (0.86 ROC-AUC / 69% precision), "9 Backend Services", "2 Production Systems / 6 Analyst Team Led".
