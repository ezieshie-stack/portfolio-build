# Portfolio Audit — 2026-07-18

## Executive summary
- Overall quality bar is high: numbers are honest, model math is real, and most
  copy is analyst-voiced rather than marketing fluff. Three issues meaningfully
  hurt the interview surface: (1) the FIIT engagement is described with
  "owned" in two shipped components, violating the locked "led" spec; (2) the
  FIIT Data page's BR trace IDs contradict the FIIT Rules page's actual rule
  IDs — a reviewer following the trace will find scheduling rules attached to
  the CMS entity; (3) the Movie project's funnel stage count is stated three
  different ways across pages (7, 8, 9), and the Movie pipeline is called
  "9-stage" on the home slider but only 3 phases exist in the method diagram.

## Findings by project

### Global · Home page
Source: `src/app/page.tsx` (composes shared home components)

#### `src/components/home/Hero.tsx`
- **[VOICE]** `line 21-26` — quote: "I led the analyst team through requirements, modeling, and delivery on two production systems. After the team rolled off, I was retained as the sole administrator." — Reads clean. No issue. Matches locked "led" language.
- **[CLARITY]** `line 17-20` — quote: "I work the full lifecycle, from requirements *to live operation.*" — The "full lifecycle" phrasing is generic; the sub-line does the real work. Not a bug, but the H1 lands soft.

#### `src/components/home/CoreCapabilities.tsx`
- No issues. Clean six-cap list.

#### `src/components/home/AboutPreview.tsx`
- **[VOICE]** `line 32-33` — quote: "I work the requirement, model it, deliver it, and run it live." — Reads as a slogan. Combined with the Hero's "full lifecycle" line, the same idea is stated 3× on the same page (Hero, Capabilities headline, About headline). Recurring redundancy.

#### `src/components/home/MyApproach.tsx`
- No issues. Four principles are voiced well.

#### `src/components/home/FeaturedProjectsSlider.tsx`
- **[NUM]** `line 49` — quote: "I owned it through the full lifecycle, from requirements through delivery and into live administration." — **Contradicts the locked-language spec: FIIT engagement should say "led," not "owned."** Ship-blocker per `docs/IMPLEMENTATION.md`.
- **[HAL]** `line 54` — quote: `{ value: "9", label: "Backend Services", icon: <Server size={22} /> }` — **Flagged unverified in `docs/IMPLEMENTATION.md`.** Interviewer question: which nine services? No supporting artifact in the FIIT hub.
- **[NUM]** `line 58` — quote: "Led a six-person analyst team through four scopes from elicitation to delivery" — Matches locked fact. Good.
- **[XREF]** `line 108` — quote: "9-stage Python pipeline outputting 6 analysis-ready datasets" — **Movie method page (`method/page.tsx` lines 73-92) declares only 3 phases**, and the pipeline diagram groups into 6 groupings but no 9 stages. Contradicts sub-page.
- **[XREF]** `line 109` — quote: "8-stage profitability model tracing films from budget to return" — **FunnelExplorer (`FunnelExplorer.tsx` line 128) shows "Stage {sel + 1} of 7"** — 7 stages, not 8. And the funnel page's SEGMENTS array has 8 rows (line 21-30). Naming drifts: is it a 7-stage funnel or 8-segment funnel?
- **[GAP]** — FeaturedProjectsSlider only shows 3 projects (FIIT, Telco, Movie). The two strongest technical projects — Fraud (SQL/window functions) and SLA (cost-sensitive RF) — are not in the marquee slider. This is a shipped-scope call, not a bug, but worth flagging.

#### `src/components/home/CurrentlyExploring.tsx`
- **[GAP]** `line 24` — quote: "CTFL (ISTQB Foundation)" — sits alongside SQL and RPA which are broad craft skills. CTFL is a specific certification-in-progress; if not yet enrolled/booked, "exploring" reads as aspirational. Verify or reframe.

### Global · About page
Source: `src/app/about/page.tsx`

- **[HAL]** `line 46` — quote: "I hit 184% of my sales goal and $815 in sales per hour against a $450 target, among the top in the store." — **Flagged unverified per instruction. Leave as-is, but the owner review is outstanding.**
- **[VOICE]** `line 51` — quote: "I identified a recurring pattern of incomplete and incorrect submissions and escalated it for follow-up." — Passive framing of "escalated for follow-up" is weak. What was the outcome? Was the pattern acted on? Reads like a resume bullet the writer hedged.
- **[CLARITY]** `line 41` — quote: "I led the analyst team on a two-application Next.js and Convex platform for an industry partner through my George Brown placement." — Long sentence; two-application, Next.js, Convex, industry partner, George Brown placement all crammed into one clause.
- **[VOICE]** `line 41` — quote: "That meant the forms, workflows, permissions, and CMS." — Fragment sentence works for cadence, but the four items are a mix of granularities (forms is UI, permissions is data-model, CMS is a whole subsystem).
- **[GAP]** `line 33` — quote: `{ value: "2", label: "Production Systems Delivered" }` — **Flagged unverified in `docs/IMPLEMENTATION.md`.**
- **[GAP]** `line 34` — quote: `{ value: "6", label: "Analyst Team Led" }` — **Flagged unverified per instruction.**
- **[NUM]** `line 105` — quote: "George Brown College. Dean's List, 3.81 / 4" — matches the stat card. Consistent.
- **[VOICE]** `line 79` — quote: "I know enough of each language to be credible in both." — Understated in a good way. Good voice.
- **[CLARITY]** `line 69` — quote: "Being retained to operate what my team delivered is what I'm proudest of, because the work held in real use." — The last clause ("because the work held in real use") is elegant but takes a re-read. Consider tightening.

### Global · Work index page
Source: `src/app/work/page.tsx` → `src/components/work/WorkPageContent.tsx`

- **[NUM]** `line 163-164` — quote: "A two-application operations platform for a fitness business, owned through the full lifecycle on Next.js and Convex." — **Contradicts locked "led" spec. Same violation as FeaturedProjectsSlider.**
- **[XREF]** `line 58` — quote: "A 9-stage Python pipeline on ~5,000 films" — Movie method page declares 3 phases. Same 9-stage drift as home page.
- **[VOICE]** `line 76` — quote: "A cost-sensitive Random Forest predicting SLA breaches and ranking tickets by financial risk in a Streamlit dashboard." — Clean.
- **[CLARITY]** `line 93` — quote: "Runs the seven-supplier list in under ten minutes vs. 60–90 manual." — "vs. 60–90" without a unit lets the reader supply "minutes" from context. Add "min" for symmetry with "under ten minutes."
- **[VOICE]** `line 142-144` — quote: "Each project started with a question no one had framed yet, or a process that needed to actually work." — Reads as marketing lede. "A question no one had framed yet" is unfalsifiable.

### Global · Process page
Source: `src/app/process/page.tsx`

- **[NUM]** `line 66-68` — RESULTS card: "27 Modules in production (FIIT Co.)", "0.86 Churn model ROC-AUC (Telco)", "5,000+ Records analyzed (Movies)" — All three match locked facts.
- **[GAP]** — Recent Results shows only 3 metrics. SLA (0.83 ROC-AUC, 100% recall) and Fraud (7 layers, PostgreSQL) are absent from the summary strip. If Process is the pitch page, the strongest results are underrepresented.
- **[VOICE]** `line 189` — Clean. Good.

### Global · Contact page
Source: `src/components/contact/ContactPageContent.tsx`

- **[GAP]** `line 50-53` — quote: `function handleSubmit(e) { e.preventDefault(); setSent(true); }` — **The form does not actually send anything.** Clicks "Send Message" and shows "Message Sent ✓" without any network call. Interviewer clicking the button on the live site will get a false success state. High-visibility bug.
- **[NUM]** `line 23` — quote: "ezieshie@gmail.com" — matches user email.
- **[CLARITY]** `line 37` — quote: "Open to business analyst roles in Toronto. Eligible to work in Canada. Available for contract and full-time engagements." — Clean, informative.

### Global · Resume page
Source: `src/app/resume/page.tsx`

- **[GAP]** `line 30-36` — The iframe embed uses `#toolbar=0&navpanes=0`. In-browser PDF preview support varies; on Safari and mobile the iframe may render blank. Not a copy issue, but a shipped-quality one.
- **[VOICE]** — Content is pulled from `resume` in `content.ts` — auditor did not open that block for voice. Flagged for later pass.

### Global · Nav
Source: `src/components/Nav.tsx`

- No issues. Auto-hide behavior noted. Uses `site.navLinks` from content.ts.

### Global · Footer
Source: `src/components/PortfolioFooter.tsx`

- **[VOICE]** `line 120` — quote: "Built with clarity and purpose." — Cliché tagline. Reads like a template default; not analyst voice.
- **[VOICE]** `line 25-27` — quote: "Open to business analyst roles in Toronto. I take initiatives from the first stakeholder interview through to the system people use every day." — "take initiatives from the first stakeholder interview through to..." — "take initiatives" is oddly phrased. "Take work from the first stakeholder interview through to the system people use every day" would be tighter.

---

### Telco Churn · Hub (T1–T5 index)
Source: `src/app/work/telco-churn/page.tsx`

- **[GAP]** `line 51-52` — quote: `{ k: "Fiber · no support · M2M", rate: 49, n: 1140 }` — **The cohort explorer's top row (Fiber+no-support+M2M, n=1,140, 49%) does not appear in the SQL Explorer page.** Q6 shows Fiber+no-support in general (n=2,230, 49.4%). The M2M subset of 1,140 is not surfaced in any query. Interviewer question: where does 1,140 come from? Either flag it as computed or add a Q9.
- **[NUM]** `line 66` — quote: "A 20% conversion protects an estimated $340K a year." — Where does $340K come from? No arithmetic shown. Same for "$180K a year" (line 71) and "$520K in annual revenue" (line 157). These are unsourced dollar estimates. Interviewer will ask.
- **[VOICE]** `line 111` — quote: "Interactive reconstruction of the logistic-regression model (0.86 ROC-AUC). Coefficients calibrated to the documented churn drivers." — Honest and analyst-voiced. Good.
- **[CLARITY]** `line 135-138` — quote: "Acquiring a new subscriber costs 5 to 7× more than keeping one." — This is a repeated industry cliché without a citation. If it's from a specific source (Bain, Forrester), name it; otherwise soften.
- **[CLARITY]** `line 74` — quote: "The cliff is a month-to-month story, long-contract customers who clear year one flatten at 3 to 12%." — the shift from "cliff is a M2M story" (structural claim) to "long-contract customers who clear year one" (a different cohort) is jammed together with a comma. Two sentences would read cleaner.
- **[VOICE]** `line 63-64` — quote: "roughly 15× the two-year rate (2.8%). Stack in electronic-check payment and it hits 53.7%, a coin flip, covering 1,850 customers (26% of the base)." — Excellent analyst voice. Ships numbers with the implication.

### Telco Churn · SQL Explorer (T1)
Source: `src/app/work/telco-churn/sql/page.tsx`

- **[NUM]** — all 8 query results (Q1–Q8) cross-check against locked "7,043 customers, contract type as churn driver" — internally consistent.
- **[VOICE]** `line 253-259` — quote: "A p-value of 5.86 × 10⁻²⁵⁸ is not merely significant, it means there is no realistic universe in which contract type and churn are independent." — Confident and technical without being pompous. Good.
- **[CLARITY]** `line 165-168` — quote: "The problem is not new customers — it is new customers who never committed." — Elegant.

### Telco Churn · Data Dictionary (T2)
Source: `src/app/work/telco-churn/data/page.tsx`

- No numerical issues. Two-decision explanation (leakage vs identifier) is a strong analyst-voice signal.
- **[VOICE]** `line 87` — quote: "Feeding these to a churn model would leak the answer it is meant to predict." — Good.

### Telco Churn · Model Card (T3)
Source: `src/app/work/telco-churn/model/page.tsx`

- **[NUM]** — All numbers match locked facts. TP=218, FP=96, FN=155, TN=940. Precision 69%, recall 58%, F1 0.63, AUC 0.86. Verified.
- **[VOICE]** `line 156-162` — quote: "58% recall / At the default threshold the model misses more than 4 in 10 actual churners." — Refreshingly self-critical. Good.
- **[CLARITY]** `line 183-185` — quote: "Uncorrected imbalance / Training is ~73% stayers. class_weight='balanced' would trade precision for recall; it was left off by default." — A reviewer might ask why "it was left off by default" — implicit passive. Consider "I left it off to prioritize precision" or similar.

### Telco Churn · TelcoThresholdSlider component
Source: `src/components/work/telco/TelcoThresholdSlider.tsx`

- **[GAP]** `line 115-119` — quote: "Other threshold counts interpolate linearly between the real anchor and the endpoints (flag none · flag everyone), so they show the shape of the trade-off, not the exact counts a re-scored run would give." — Honest caveat. But linear interpolation is a crude approximation of a logistic-regression's PR curve; a reviewer with an ML background may push back. This is fine to ship with the caveat visible.
- **[NUM]** `line 33-34` — quote: `const FN = P_CHURN - TP;` — the interpolation math: at t=0.5, TP=218 → FN = 373-218 = 155 ✓. At t=0 all flagged → TP=373 (correct total churn). Math is honest.

### Telco Churn · Method (T4)
Source: `src/app/work/telco-churn/method/page.tsx`

- No issues.

### Telco Churn · Write-up (T5)
Source: `src/app/work/telco-churn/doc/page.tsx`

- **[VOICE]** `line 27` — quote: "The analysis, in prose." — This same phrase ("The analysis, in prose.") appears verbatim on **SLA doc, Fraud doc, and Movie doc pages**. Vary at least one so the four writeups don't all open identically.

---

### SLA Optimization · Hub (S1–S5 index)
Source: `src/app/work/sla-optimization/page.tsx`

- **[VOICE]** `line 66` — quote: "Escalate the right tickets." — Clean, verbed hero.
- **[NUM]** `line 44` — quote: "Ticket volume peaks at 21:00 but breach risk peaks at 22:00" — This claim is repeated on the Diagnostics page and drives the heatmap component. Consistent within the project.
- **[HAL]** `line 44-46` — quote: "Ticket volume peaks at 21:00 but breach risk peaks at 22:00, at the evening-to-night shift handover" — **The heatmap component (`SlaHourHeatmap.tsx` line 1-14) discloses this is modeled, not measured** — the underlying per-hour extract does not exist in source data. The finding on the hub reads as an observation. Reader will not know it's synthetic without opening the heatmap caption. Consider adding "(modeled)" to the finding.
- **[VOICE]** `line 48` — quote: "Accept the low precision deliberately: a false alarm costs minutes, a missed Critical costs $500." — Excellent asymmetry framing.
- **[VOICE]** `line 66-73` — "Sniper Command Center" — **militaristic branding.** For a hiring-context site, "Sniper" and "kill list" (repeated line 46, 107, 140) may read as gauche. Also "sniper" doesn't match the analytical framing of the widget (it's a triage tool, not a targeting one).
- **[CLARITY]** `line 111` — quote: "Cancellation request... Refund request... Technical issue... Product inquiry... Billing inquiry" — Diagnostic bars are given but the D1 table on Diagnostics shows the same content. Slight redundancy hub → sub-page.

### SLA Optimization · Diagnostics (S1)
Source: `src/app/work/sla-optimization/diagnostics/page.tsx`

- **[NUM]** `line 21` — quote: "Average handling across all tickets is about 7.7 hours" — **Hub page (line 45) says "average handling sits near 8h against a 4h Critical target."** ~7.7h vs "near 8h" is minor rounding, but the exact figures drift across pages.
- **[HAL]** `line 133-152` — quote: "Volume peaks at 21:00... Breach risk peaks at 22:00... Overlap the shifts" — Same modeled/observed conflation as above. The three "Volume/Risk/Overlap" cards read as observed patterns; the caption above the heatmap says "makes that gap unmissable" but the heatmap component's comment file says it's synthetic. Reader loses the caveat.
- **[VOICE]** `line 92-94` — quote: "Before building a model, the analysis had to locate where and why the SLA was failing across 8,469 tickets." — Nice framing.

### SLA Optimization · Data Dictionary (S2)
Source: `src/app/work/sla-optimization/data/page.tsx`

- **[VOICE]** `line 56-60` — Reason codes explanation with four types (def/leak/id/held) is a strong analyst-voice signal. Good.
- **[CLARITY]** `line 34` — quote: "Held out to avoid demographic bias; low predictive signal." — Two reasons in one clause. If low signal, why frame the held-out as bias avoidance? Order: "low predictive signal, and held out to avoid demographic bias."

### SLA Optimization · Model Card (S3)
Source: `src/app/work/sla-optimization/model/page.tsx`

- **[NUM]** — TP=136, FN=0, FP=701, TN=857. Precision = 136/837 = 16.2% → 16% ✓. Recall = 136/136 = 100% ✓. Matches locked facts.
- **[VOICE]** `line 41` — quote: "A model tuned for dollars, not accuracy." — Sharp hero. Good.
- **[CLARITY]** `line 44-47` — quote: "A Random Forest with balanced class weights, trained to predict SLA breaches on a held-out set of 1,694 tickets." — **1,694 rows is a specific test-set size, but there's no explicit statement that this maps to the resolved-tickets subset (2,769 per S2 data page).** A reviewer will ask: 8,469 tickets total but only 1,694 in test — what fraction of what?
- **[NUM]** — S3 test = 1,694 rows; S2 Data page (line 47) says "Time to Resolution... Populated for only 2,769 of 8,469." 1,694 / 2,769 = 61%. Method page says "80/20 split" (line 47 of method). 1,694 is not 20% of 2,769 (that would be 554). The train/test math doesn't reconcile. Cross-page numerical drift.

### SLA Optimization · Method (S4)
Source: `src/app/work/sla-optimization/method/page.tsx`

- **[XREF]** `line 39-52` — nodes labeled "P1"–"P8" but the PHASES array (line 75-100) groups into 4 phases spanning P0→P8. The hub (line 40) meta says "Phase 0 → 8" — so is it 8 phases or 9? Method page labels P0 → P8 = 9 stages. Wording drift.
- **[VOICE]** `line 175-181` — quote: "Diagnose, validate, then predict... Skipping the validation gate is the difference between noticing a pattern and defending a decision to leadership." — Good.

### SLA · SniperCenter component
Source: `src/components/work/sla/SniperCenter.tsx`

- **[HAL]** `line 12-14` — quote: "Reconstruction of the Streamlit command center in the analytics repo, not a fitted model." — Discloses it's synthetic. Good honesty in the component comment; the caption on the hub says the same.
- **[VOICE]** — "kill list" appears in labels (`line 140`: "Today's kill list · top {reviews} of {day.length}"). Same voice concern as hub.
- **[NUM]** `line 89` — ROI = net / opsCost — mathematically correct. Fine.

### SLA · BreachFlatness / SlaHourHeatmap components
Sources: `src/components/work/sla/BreachFlatness.tsx`, `SlaHourHeatmap.tsx`

- **[HAL]** SlaHourHeatmap — modeled, disclosed in component comment and caption. See above.
- BreachFlatness — real numbers from the diagnostics; consistent.

### SLA Optimization · Write-up (S5)
Source: `src/app/work/sla-optimization/doc/page.tsx`

- **[VOICE]** — Same "The analysis, in prose" opening. Repeated across 4 writeups.

---

### Fraud Detection · Hub (F1–F5 index)
Source: `src/app/work/fraud-detection/page.tsx`

- **[NUM]** — 7-layer PostgreSQL pipeline, 4 weighted rules summing to 110, PaySim dataset. Matches locked facts.
- **[VOICE]** `line 50` — quote: "A GROUP BY cannot see that; a window function can." — Sharp. Good.
- **[CLARITY]** `line 52` — quote: "Set the queue at score ≥ 80 and tune to capacity." — clear.
- **[VOICE]** — "Score a transaction for fraud." (line 70) — clean.
- **[CLARITY]** `line 114` — quote: "Merchants are inferred from nameDest since PaySim does not flag them explicitly." — Reasonable caveat.

### Fraud · SQL Explorer (F1)
Source: `src/app/work/fraud-detection/sql/page.tsx`

- **[NUM]** — 7 queries. Matches hub. Fine.
- **[VOICE]** `line 91-102` — Q05 "Risk scoring logic" description includes the whole rules engine as one CASE block, matches the F3 sandbox. Consistent.

### Fraud · Data Dictionary (F2)
Source: `src/app/work/fraud-detection/data/page.tsx`

- **[NUM]** — 11 PaySim columns. Matches locked facts.
- No voice issues.

### Fraud · Rules Engine (F3)
Source: `src/app/work/fraud-detection/rules/page.tsx`

- **[XREF]** — 4 weighted rules summing to 40+30+25+15 = 110 ✓. Tier thresholds (≥80 Queue, ≥60 High, 30-59 Medium, <30 Low) — but the ScoringSandbox (line 68-70 of `ScoringSandbox.tsx`) uses only 3 tiers: `score >= 60 ? "High" : score >= 30 ? "Medium" : "Low"` — no "Queue" tier at ≥80 in the sandbox tier logic; only `inQueue = score >= 80` displayed separately. Slight taxonomy drift between the tier table (4 tiers) and the sandbox output (3 tiers + queue flag).
- **[HAL]** `CapacityPrecisionChart.tsx` line 22-24 — quote: "Modeled — PaySim scored by the four-rule engine on the F3 page. The shape reflects the writeup finding that precision rises monotonically with score and volume is right-skewed." — Chart is modeled/illustrative; disclosed. But the "150 alerts/day" derived from ≥80 = 4,540 / 30 in the tier column may confuse readers who don't spot the "30 days" note in the tiny caption below. GAP for readability.

### Fraud · Method (F4)
Source: `src/app/work/fraud-detection/method/page.tsx`

- No numerical issues. Layered pipeline clean.

### Fraud · Write-up (F5)
Source: `src/app/work/fraud-detection/doc/page.tsx`

- Same "The analysis, in prose" opening.

### Fraud · ScoringSandbox
Source: `src/components/work/fraud/ScoringSandbox.tsx`

- **[NUM]** — weights and thresholds match F3 exactly. Good.
- **[XREF]** — Tier logic ≥60 High / ≥30 Medium / else Low but rules page shows 4 tiers (Queue, High, Medium, Low). See F3 note.

---

### Movie Profitability · Hub (M1–M5 index)
Source: `src/app/work/movie-profitability/page.tsx`

- **[NUM]** `line 30-32` — quote: "5,009 films tracked through an 8-stage investment-to-profitability funnel" — **XREF: FunnelExplorer says "Stage {sel + 1} of 7" (7 stages, not 8).** The 8-segment / 7-stage split is intentional in the sub-pages (funnel has 7 cumulative stages, then 8 exclusive segments) but the hub description reads "8-stage funnel," which contradicts the 7-stage explorer directly below the paragraph.
- **[NUM]** `line 198` — quote: "16 EDA charts, then an 8-stage investment-to-profitability funnel." — Same 8-stage claim in Under the hood; contradicts the FunnelExplorer.
- **[VOICE]** `line 72-74` — quote: "Nearly half of all films lose money. This funnel tracks 5,009 of them from investment to profit, one stage at a time." — Sharp hook. Good.
- **[GAP]** `line 45-48` — TIER data has "note" describing sweet spot but the "n" values (1277 + 1319 + 988 + 310 = 3,894 with budget) matches the 3,894-with-budget-on-record locked fact. Consistent.
- **[NUM]** `line 53` — quote: "Weighted toward those genres, a slate's success rate runs 84.6 to 85.7% against the 72.5% industry average." — 72.5% "industry average" not sourced. Is it the dataset's overall rate? A reviewer will ask.
- **[HAL]** `line 110` — quote: "lifts the slate success rate from 72.5% toward 85%. On 100 films that is 12 fewer losses per cycle." — 12-loss math is (85 - 73) × 100 / 100 ≈ 12. Fine arithmetic, but the "toward 85%" upper bound is not from data — it's from the Horror/Mystery band. Presentation blurs projection with observation.

### Movie · Genre & Budget (M1)
Source: `src/app/work/movie-profitability/genre/page.tsx`

- **[NUM]** `line 10` — quote: "(Paranormal Activity: $15K budget, $194M revenue)" — **Verify:** Paranormal Activity's actual production budget is often cited as $15K, but IMDB/BoxOfficeMojo lists worldwide gross as ~$194M. Fine, but this is the one specific film-name claim; ensure it survives fact-check.
- **[VOICE]** `line 34-39` — quote: "You cannot control whether a film connects, but you can choose its budget tier and its genre before a dollar is spent." — Good analyst framing.
- **[CLARITY]** `line 22` — quote: "Horror / Mystery... Audiences show up regardless of budget. No need for $100M of VFX, so capital efficiency is unmatched." — Confident. Good.

### Movie · Funnel Model (M3)
Source: `src/app/work/movie-profitability/funnel/page.tsx`

- **[NUM]** `line 11-18` — STAGES has 7 entries, matching FunnelExplorer's "7 of 7". But hub still says 8-stage. See hub XREF.
- **[NUM]** `line 21-30` — SEGMENTS array 8 entries; sums: 1058+184+576+459+387+326+594+1425 = 5,009 ✓. Math reconciles.
- **[VOICE]** `line 47-51` — Good.

### Movie · Data Dictionary (M2)
Source: `src/app/work/movie-profitability/data/page.tsx`

- No issues.

### Movie · Method (M4)
Source: `src/app/work/movie-profitability/method/page.tsx`

- **[XREF]** `line 73-92` — PHASES declares 3 phases (EDA / ETL / Funnel). **Home slider says "9-stage Python pipeline." Work page says "9-stage." No 9-stage view of the pipeline exists on the sub-page.** Number drift home → work → method.

### Movie · Write-up (M5)
Source: `src/app/work/movie-profitability/doc/page.tsx`

- Same "The analysis, in prose" opening.

### Movie · GenreBudgetExplorer
Source: `src/components/work/movie/GenreBudgetExplorer.tsx`

- **[HAL]** `line 5-11` — quote: "Base tier rates come from the real dataset... the intersection is modeled multiplicatively using the genre-efficiency multipliers surfaced in the M1 findings." — Disclosed as modeled. Caption on line 201-206 makes the caveat visible. Good analyst honesty.

### Movie · FunnelExplorer
Source: `src/components/work/movie/FunnelExplorer.tsx`

- **[NUM]** — Numbers verbatim from dataset. Sums check.

---

### FIIT Co. · Hub (A1–A8 index)
Source: `src/app/work/fiitco/page.tsx`

- **[NUM]** `line 84-88` — hub meta for A1 says "5 processes", A2 says "24 entities", A3 says "11 rules", A6 says "8 requirements".
- **[XREF]** `line 84` — quote: `{ ... title: "Process Models", desc: "As-is vs to-be, five core workflows.", meta: "5 processes" }` — **Process sub-page (`process/page.tsx` line 46) says "Eleven processes, mapped as-is and to-be."** **Direct contradiction: hub says 5, sub-page says 11.**
- **[NUM]** `line 88` — quote: `meta: "9 documents"` for A4 — but the Documents artifact (docs/page.tsx line 30-34) mentions only "Charter, BRD, Executive Summary, Closure Report" (4 named), and metadata description says "Reading-mode library, Charter, BRD, Executive Summary, and Closure Report" (4 named). Where does "9 documents" come from? Not defended on the sub-page.
- **[NUM]** `line 132` — quote: `meta: "11 diagrams"` — Diagrams sub-page (line 27-31) mentions "architecture, data-flow, ERD, functional-decomposition, use-case, and root-cause" — 6 diagrams named. 11 is stated but not itemized.
- **[VOICE]** `line 187-195` — clean, and correctly uses "led."
- **[GAP]** `line 190-192` — quote: "This is the business analysis that turned that into two connected production systems, from the problem framing through to the modeled solution." — Solid.
- **[NUM]** `line 384-402` — Hub metrics: "27 Modules delivered", "32 Data tables modeled", "2 Production systems", "Sole Retained as administrator". "Sole" as a metric value reads awkward — "retained as administrator" is descriptive, "Sole" is a modifier that doesn't parse standalone. Consider "Retained / As sole administrator" split.

### FIIT · Process Models (A1)
Source: `src/app/work/fiitco/process/page.tsx`

- **[XREF]** `line 46` — quote: "Eleven processes, mapped as-is and to-be." — Contradicts hub A1 meta "5 processes." **Interview-catchable.**

### FIIT · Data & Scope Model (A2)
Source: `src/app/work/fiitco/data/page.tsx`

- **[XREF]** `line 32-52` — **The entity trace-back BR IDs contradict the actual rule IDs on the Rules page.** Examples:
  - `User` traces `["BR-02"]` — but BR-02 on rules page is "The applied buffer is derived from the instructor's home studio and the class type" (buffer/scheduling rule, not a user/role rule).
  - `Instructor` traces `["BR-01", "BR-03", "BR-04"]` — BR-04 on rules page is "A member may only book classes their membership tier grants access to" (member rule, not instructor).
  - `Member` traces `["BR-06", "BR-07", "BR-08"]` — BR-06 on rules page is "Remaining slots are computed as capacity minus confirmed bookings" (booking computation, not a member rule).
  - `WebsitePage`, `BlogPost`, `TrainerProfile`, `ContactSubmission` trace `["BR-06"]` — BR-06 is a booking computation, not a publishing rule. The relevant rules would be BR-10 or BR-11.
  - **Reader following the trace to the Rules page will land on the wrong rule for every entity.** High-severity XREF bug.
- **[NUM]** `line 210-227` — metric: "24 Logical entities", "~32 Physical Convex tables", "8 BRs traced to entities", "100% Mutations audit-logged." — 24 entities ✓ (24 entries in ENTITIES). 8 BRs traced — but the ENTITIES BR list references BR-01…BR-08 and one NFR-03. Only 8 unique BR IDs. But the Rules page defines BR-01…BR-11 (11 rules). So only 8 of 11 rules are traced to entities. This may be by design, but the "8 BRs traced" doesn't disclose that 3 are orphan-from-data-model.
- **[VOICE]** `line 234-239` — "Logical vs. physical" callout — clean, sponsor-readable framing.

### FIIT · Business Rules (A3)
Source: `src/app/work/fiitco/rules/page.tsx`

- **[NUM]** — 11 rules total, sums check.
- **[CLARITY]** `line 42-46` — quote: "A member may only book classes their **membership tier** grants access to." — Clean BR text.

### FIIT · Documents (A4)
Source: `src/app/work/fiitco/docs/page.tsx`

- **[NUM]** — Hub says "9 documents" but this page's description names 4. Content lives in `DocsReaderClient` (not opened this pass). Verify.

### FIIT · RTM (A6)
Source: `src/app/work/fiitco/rtm/page.tsx`

- **[NUM]** `line 24-26` — quote: "19 documents delivered (BA-01 → BA-19) · Met" — First mention of "19 documents." Hub says "9 documents." Are these different sets (BA artifact package vs. Documents-reading-mode)? Clarify.
- **[NUM]** `line 78-97` — metrics: "5 Charter objectives committed", "8 Business requirements traced", "0 Requirements failed after commit", "37 Rows in the full RTM." — All internal; 8 BRs matches locked fact.

### FIIT · Stakeholder & RACI (A5)
Source: `src/app/work/fiitco/stakeholder/page.tsx`

- **[HAL]** `line 20` — quote: `["S4", "Claude", "Development & design partner, builds both apps against the BA specs"...]` — **Naming Anthropic's Claude as a stakeholder in a hiring-portfolio RACI is unusual and, for a technical interviewer, will invite the "which parts were you and which were LLM" conversation.** Not a bug; a strategic disclosure choice worth flagging. If the point is honesty about AI-assisted development, own it in prose; if not, generalize to "Development partner."
- **[NUM]** `line 22` — quote: `["S5", "Instructor Team", "~12 trainers, ..."]` — Where does "~12 trainers" come from? Not sourced.
- **[NUM]** `line 167` — quote: `sub="BA-02 · 15 deliverables"` — RACI table has 15 rows ✓.

### FIIT · RAID (A7)
Source: `src/app/work/fiitco/raid/page.tsx`

- **[NUM]** — RAID content lives in `RaidClient`; not opened this pass. Hub A7 meta says "5 categories" which doesn't match RAID's usual 4 (R/A/I/D). Investigate.

### FIIT · Diagrams (A8)
Source: `src/app/work/fiitco/diagrams/page.tsx`

- **[NUM]** — Hub says "11 diagrams" but this description names 6. Balance is unaccounted-for. Content in `DiagramsPageClient`; verify.

### Companion BA hub
Source: `src/app/work/ba-process-design/page.tsx`

- **[GAP]** — Hub links to 4 sub-artifacts (B1-B4) at `/work/ba-process-design/brd`, `/process`, `/bpmn`, `/use-cases`. Auditor did not verify these sub-pages exist. If they don't, all four artifact tiles 404.
- **[VOICE]** `line 114-115` — quote: "The BA toolkit, end to end." — Slightly generic hero.
- **[CLARITY]** `line 88-92` — quote: "Use-case specs and BPMN diagrams look redundant to non-BAs, they answer different questions." — Comma splice; sentence would read cleaner with "but they answer" or a semicolon.

---

### UiPath Automation
Source: `src/app/work/uipath-automation/page.tsx` + `uipath-process-data.ts`

- **[NUM]** — 7 suppliers, ±5% threshold, <10 min vs 60-90 manual, Windows + Excel + Chrome. Matches locked facts.
- **[NUM]** `line 132` — quote: "6 Alerts raised on the last run" — Specific claim about "the last run." Where in the artifact set is this run visible? Repo README or the workbook? Not linked from the page. Verify sourceable.
- **[NUM]** `line 82-84` — quote: "Six of seven suppliers alerted on the last run, one sat inside the band." — Same "6/7" specific claim. Repeated but not defended.
- **[VOICE]** `line 105-110` — quote: "A procurement bot that checks seven retail suppliers every morning..." — Clean voice.
- **[NUM]** `uipath-process-data.ts` line 1-71` — 6 sub-processes (S1–S6). Matches PDD spec described.
- **[VOICE]** `line 27` — "Rachel opens the supplier workbook..." — Named persona ("Rachel") is fine but implies a real user. If Rachel is a stand-in, it's fine; if she's real, the anecdote isn't sourced.
- **[GAP]** `line 306-311` — quote: "The bot runs on a Windows Task Scheduler cron at 09:00 every weekday. This strip is the last 14 executions, each a real morning run against the same workbook." — Very specific claim (last 14, weekday, 09:00). Where's the log? UipathRunHistory component would need to show 14 real timestamps. Interviewer will ask.

---

## Cross-project audit findings

- **"Owned" vs "led" for FIIT engagement:** appears in FeaturedProjectsSlider.tsx line 49 and WorkPageContent.tsx line 163 in shipped copy. Locked spec is "led." Two direct violations.
- **The analysis, in prose:** verbatim H1 across 4 writeup pages (Telco T5, SLA S5, Fraud F5, Movie M5). Vary at least two.
- **Movie "stages" drift:** 7 (FunnelExplorer), 8 (hub description + genre page), 9 (home slider + work page). Three different numbers for the same thing.
- **FIIT process count drift:** 5 (hub A1 tile) vs 11 (Process sub-page). Direct contradiction on adjacent pages.
- **FIIT BR trace mismatch:** Data page BR IDs point to unrelated rules on Rules page. High-severity XREF bug.
- **FIIT document count drift:** 9 (hub A4 tile) vs 19 (RTM sub-page objective O5) vs 4 named on Documents sub-page. Three different totals for the BA artifact set.
- **FIIT diagram count drift:** 11 (hub A8 tile) vs 6 named on Diagrams sub-page.
- **SLA "hours" drift:** hub says "near 8h", diagnostics says "about 7.7 hours" for the same handling-time claim.
- **Interactive widget disclosure quality:** SlaHourHeatmap, CapacityPrecisionChart, and parts of the SniperCenter/ScoringSandbox are modeled/synthetic. Component comments consistently disclose this. Captions inconsistently do. On the SLA hub, the "peak volume vs peak risk" finding lands as observed fact without a modeled caveat next to it — the caveat lives in the caption below the heatmap.
- **Militaristic framing:** "Sniper Command Center" and "kill list" appear on SLA hub, SniperCenter component, and diagnostics finding. For a business-analyst hiring surface, this may land poorly with some hiring managers. Cross-project voice choice worth reviewing.

## Overall analyst-voice patterns

- **Repeated hero phrasings:** "I work the full lifecycle," "requirements through delivery," and "the analysis, in prose" each recur across 2-4 shipped pages. The site's own voice pattern is being copy-pasted.
- **Strong signals:** confusion-matrix honesty (Telco T3), leakage-column reasoning (Telco T2, SLA S2), "diagnose before designing" recurring principle. These are the parts an interviewer will notice.
- **Weak signals:** "Built with clarity and purpose" footer, "a question no one had framed yet" work-page lede, and "the BA toolkit, end to end" BA-hub hero — three template-style hero lines that dilute the site's otherwise-punchy voice.
- **Unsourced dollar and percent projections:** $340K, $180K, $520K on the Telco hub; "72.5% industry average" on the Movie hub. Confident-sounding numbers without a shown derivation invite the "how did you get there?" question.
- **AI/LLM disclosure asymmetry:** Claude is named as a stakeholder in the FIIT RACI but not mentioned in the About, Process, Home, or FIIT hub prose. A reviewer who spots S4=Claude will wonder how much of the platform build was Claude vs. the analyst team.

## Priority fix list

1. **[NUM][XREF] FeaturedProjectsSlider line 49** — Change "I owned it through the full lifecycle" to "I led it..." per locked spec. Home-visible, ship-blocker per IMPLEMENTATION.md.
2. **[NUM][XREF] WorkPageContent line 163-164** — Change "owned through the full lifecycle" to "led through the full lifecycle." /work-visible.
3. **[XREF] FIIT Data page (A2) line 32-52** — Entity trace BRs contradict Rules page. Every entity's trace is wrong. Interview-catchable in 30 seconds.
4. **[XREF] FIIT hub A1 tile ("5 processes") vs Process sub-page ("Eleven processes")** — Direct hub-vs-subpage contradiction. Fix one.
5. **[GAP] Contact form** — `handleSubmit` shows "Message Sent ✓" without sending. Interviewer clicks Send, sees success, nothing arrives. Silent failure on the primary CTA.
6. **[XREF] Movie funnel stage count** — 7/8/9 drift across home, work, hub, and sub-pages. Pick one (7 stages is what the widget actually shows) and rewrite the others.
7. **[HAL] FeaturedProjectsSlider line 54 "9 Backend Services"** — Verify or remove. Flagged unverified in IMPLEMENTATION.md.
8. **[NUM] FIIT docs count** — 9 (hub) vs 19 (RTM) vs 4 named. Reconcile before an interviewer opens two tabs.
9. **[NUM] SLA test-set math** — 1,694 rows is not 20% of the 2,769 resolved-tickets subset. The Method page's "80/20 split" claim conflicts with S3's stated test-set size. Fix or footnote.
10. **[HAL] SLA hub "peak volume vs peak risk" finding** — heatmap is modeled; the finding on the hub reads as observed. Add "(modeled)" tag.
11. **[VOICE] "The analysis, in prose" H1** — Repeated verbatim on 4 writeups. Vary at least the SLA and Movie ones.
12. **[VOICE] "Sniper Command Center" / "kill list"** — Cross-project militaristic branding is a stylistic risk for a BA hiring surface. Review.
13. **[NUM] Telco hub cohort "Fiber · no support · M2M · 49% · 1,140"** — Not defended in any SQL query on T1. Either surface the query or drop the row.
14. **[HAL] Unsourced dollar estimates on Telco hub** — $340K, $180K, $520K land without arithmetic shown. Add a footnote or a "back-of-envelope" callout.
15. **[VOICE] Footer "Built with clarity and purpose."** — Cliché tagline mismatches the analyst voice everywhere else. Rewrite or delete.
