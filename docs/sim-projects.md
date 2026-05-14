# Sim Projects — Portfolio Case Study Briefs

Simulated operational analyst engagements designed to fill the 0-years-experience gap with public, defensible work. Each project produces a full set of analyst artifacts (BPMN, requirements, prototype, UAT plan, executive summary) wrapped around a fictional but industry-realistic scenario.

## How sim projects work

**The pact:** the company is fictional, but every artifact is real. Recruiters know you invented the client. They care about how you handled the work, not whether the client was real.

**Rules:**
1. Fictional company names, real industry patterns (Canadian Toronto market when possible)
2. Real public datasets where the analysis requires data
3. Anonymized but specific stakeholders (names + roles + motivations, not "the manager")
4. All artifacts produced as if for a real engagement (no "this would be" placeholders)
5. Each sim project gets its own GitHub repo with a structured README
6. Each gets a `/work` case study page on the portfolio site

**Standard deliverable set per project:**
1. Discovery brief (1 page)
2. Stakeholder interview notes (anonymized transcripts)
3. As-is BPMN diagram
4. Diagnosis doc (5 Whys, fishbone, quantified bottlenecks)
5. To-be BPMN diagram
6. Functional + non-functional requirements doc
7. Prototype (varies per project: dashboard, automation, internal tool, RPA bot)
8. UAT test plan
9. Change management memo
10. Executive summary (1 page)

---

# Sim Project 1: Northstar Bank — Onboarding SLA Crisis

**Industry:** Mid-tier Canadian commercial bank, Toronto HQ
**Future repo name:** `northstar-bank-onboarding-sim`
**Time estimate:** 40 to 50 hours over 4 weeks
**Skills covered:** UiPath, Power Automate, BPMN, Stakeholder Interviews, Requirements Elicitation, UAT, SLA Diagnostics, Continuous Improvement (Lean), Retool, Power BI / Looker Studio, As-Is / To-Be Workflow Mapping

## The Engagement

You're embedded as an Operations Analyst with Northstar Bank's Commercial Onboarding team for an 8-week sprint. The COO has 90 days to show measurable improvement to the board on commercial customer onboarding time. You diagnose, redesign, and prototype.

## The Brief

Commercial customer onboarding currently takes a median 14 business days against a stated SLA of 3 business days. 47% of new commercial customers churn within the first 90 days, citing onboarding friction as the top reason in exit surveys.

Internal teams blame each other: Compliance says the application packets are incomplete; Onboarding says Compliance asks for unreasonable documentation; IT says both teams keep "manually working around" the core banking system instead of using it properly.

Your mandate: diagnose the actual bottleneck (not the political one), redesign the workflow, and prototype one operational tool plus one RPA component that closes the gap.

## Fictional Stakeholders

| Name | Role | Motivation |
|---|---|---|
| Janet Okonkwo | VP Commercial Banking | Wants the SLA hit. Doesn't care how. Reports to the board. |
| Marc Lefebvre | Director of Commercial Operations | Owns the team doing the work. Defensive. Resents Compliance. |
| Priya Rao | Senior Onboarding Specialist | Does the work daily. Has theories no one has asked her. |
| Adeola Bakare | Compliance Lead | Every shortcut hits a regulatory wall. Risk-averse. |
| Kenji Tanaka | IT Director | Protective of the core banking system. Allergic to new integrations. |

## Constraints

- Cannot replace the core banking system (Symcor / Finastra equivalent)
- Cannot violate AML or KYC requirements (FINTRAC compliance)
- Budget: one prototype tool + one RPA bot
- Must produce artifacts a real Canadian bank ops team would accept

## Data Approach

No real dataset is required. Generate a synthetic CSV with 500 onboarding cases over 12 months: case_id, customer_type, application_received_date, kyc_complete_date, credit_check_date, account_opened_date, churn_at_90_day. Use a Python script to generate it with realistic distributions (median 14 days, long right tail, 47% churn rate). Commit the generator script to the repo so it's reproducible.

## Deliverables

1. **Discovery brief** — `docs/00-discovery.md`
2. **Stakeholder interview notes** — `docs/01-interviews/` (5 anonymized transcripts, ~500 words each)
3. **As-is BPMN diagram** — `docs/02-as-is-bpmn.png` (Lucidchart export) showing the current 14-day flow with 4 swimlanes (Onboarding, Compliance, IT, Customer)
4. **Diagnosis doc** — `docs/03-diagnosis.md` with 5 Whys chain, fishbone diagram (`docs/03-fishbone.png`), quantified bottlenecks (which step adds the most days)
5. **To-be BPMN diagram** — `docs/04-to-be-bpmn.png` showing the target 3-day flow
6. **Requirements doc** — `docs/05-requirements.md` with functional + non-functional requirements
7. **SLA dashboard** — Power BI or Looker Studio, public link in README. Tracks current SLA breach rate, days per case, breakdown by step.
8. **RPA flow** — Either UiPath bot (KYC document check) or Power Automate flow (Compliance handoff notification). Screenshot the workflow editor + sample run.
9. **Retool prototype** — `prototype/retool-link.md` — internal tool for Onboarding Specialists: case list, status, document upload, route-to-Compliance button. Public read-only share link.
10. **UAT test plan** — `docs/08-uat.md` with 8 to 12 test cases (functional + edge case)
11. **Change management memo** — `docs/09-change-mgmt.md` covering rollout, training, risk
12. **Executive summary** — `docs/10-exec-summary.md` — 1 page, what was found, what was fixed, projected impact

## Suggested 4-Week Schedule

| Week | Focus | Hours |
|---|---|---|
| 1 | Discovery brief, generate synthetic dataset, draft 5 stakeholder interviews | 10 |
| 2 | As-is BPMN, 5 Whys, fishbone, diagnosis doc, requirements doc | 12 |
| 3 | To-be BPMN, build Retool prototype, build RPA flow | 14 |
| 4 | Build Power BI/Looker dashboard, UAT plan, change mgmt memo, executive summary | 12 |

## Repo Structure

```
northstar-bank-onboarding-sim/
├── README.md (case study landing page)
├── data/
│   ├── generate_onboarding_data.py
│   └── onboarding_cases.csv
├── docs/
│   ├── 00-discovery.md
│   ├── 01-interviews/
│   │   ├── janet-okonkwo.md
│   │   ├── marc-lefebvre.md
│   │   ├── priya-rao.md
│   │   ├── adeola-bakare.md
│   │   └── kenji-tanaka.md
│   ├── 02-as-is-bpmn.png
│   ├── 03-diagnosis.md
│   ├── 03-fishbone.png
│   ├── 04-to-be-bpmn.png
│   ├── 05-requirements.md
│   ├── 06-dashboard-link.md
│   ├── 07-rpa-flow.png
│   ├── 08-uat.md
│   ├── 09-change-mgmt.md
│   └── 10-exec-summary.md
└── prototype/
    └── retool-link.md
```

## Interview Talking Points

- "The political answer was 'Compliance is slow.' The actual answer was a missing handoff queue between Onboarding and Compliance — cases sat in a shared mailbox averaging 4.2 days before anyone picked them up."
- "I designed a triage queue with auto-routing logic and prototyped it in Retool. The Power Automate flow notifies the assigned Compliance reviewer instead of dropping the case in the shared mailbox."
- "The SLA dashboard surfaced one number Janet (VP) cared about: the median days per case by stakeholder team. That made the political conversation a data conversation."

---

# Sim Project 2: Acme Insurance — Claims Triage Backlog

**Industry:** Mid-size Canadian P&C insurance MGA
**Future repo name:** `acme-insurance-claims-triage-sim`
**Time estimate:** 35 to 45 hours over 3 weeks
**Skills covered:** ServiceNow, Retool, Risk Scoring & Feature Engineering, BPMN, Stakeholder Interviews, Requirements Elicitation, UAT, Continuous Improvement (Lean), Root Cause Analysis

## The Engagement

Acme Insurance is a Toronto-based P&C MGA writing auto and home policies on behalf of three carrier partners. The claims function has 12 adjusters handling ~400 first-notice-of-loss (FNOL) reports per week. Backlog has grown 12% month-over-month for the last 6 months. Adjusters are at capacity. Manual triage of each new claim is taking 4+ hours.

## The Brief

The COO wants a triage system that auto-classifies incoming claims by complexity and risk, routes simple claims to a fast-track lane, and only sends complex / high-risk claims to senior adjusters. The current system has all claims hitting one shared queue.

You build the triage logic, prototype the operational tool in Retool, configure the workflow in ServiceNow (PDI), and deliver the case study.

## Fictional Stakeholders

| Name | Role | Motivation |
|---|---|---|
| Heather Lin | COO | Backlog is a board-level issue. Wants results in 8 weeks. |
| Daniel Osei | Director of Claims | Worried automation will threaten his team. Needs reassurance. |
| Mei Nakamura | Senior Adjuster (15 years) | Sees herself as the de facto triage person. Has opinions. |
| Rohan Kapoor | Junior Adjuster (1 year) | Drowning. Hopes triage frees him to do real work. |
| Trevor Smith | Compliance Officer | Wants the auto-routing logic auditable. |

## Constraints

- Auto-routing must be auditable (each routing decision must be explainable)
- Cannot deny claims automatically — only route
- Adjuster review required before any payout
- Senior adjusters must still see the queue (no black-box routing)

## Data Approach

Use a synthetic Claims FNOL dataset (300 rows) with: claim_id, claim_type (auto / home), reported_date, claim_amount, photos_count, prior_claims_count, fraud_flag_score, complexity_indicator. Build in Python — commit the generator script.

## Deliverables

1. **Discovery brief** — `docs/00-discovery.md`
2. **Stakeholder interviews** — 5 anonymized transcripts
3. **As-is BPMN** — current claims flow (all-to-shared-queue)
4. **Diagnosis doc** — 5 Whys on why simple claims sit in queue with complex ones
5. **To-be BPMN** — three-lane triage (fast-track, standard, senior)
6. **Risk scoring rubric** — `docs/05-risk-scoring.md` — the rules that classify a claim as simple / standard / complex (claim amount, prior history, fraud score, photos count). Show how each feature contributes to the score.
7. **ServiceNow workflow** — configured on PDI, screenshots of: new incident form mapped to claim, routing rule, SLA per lane, notification triggers
8. **Retool prototype** — adjuster cockpit: queue view filtered by lane, claim details, manual override button. Public link.
9. **Requirements doc** — functional + non-functional
10. **UAT test plan** — 10 to 15 test cases including edge cases (boundary scoring, manual override flow)
11. **Change management memo** — covering adjuster training, override policy, audit trail
12. **Executive summary**

## Suggested 3-Week Schedule

| Week | Focus | Hours |
|---|---|---|
| 1 | Discovery, synthetic dataset, stakeholder interviews, as-is BPMN | 12 |
| 2 | Diagnosis, to-be BPMN, risk scoring rubric, requirements, ServiceNow setup | 15 |
| 3 | Retool prototype, UAT plan, change mgmt, executive summary | 13 |

## Interview Talking Points

- "The triage logic isn't a black box. Every routing decision is explainable: under $5k + photos + no prior claims = fast track. Over $50k OR fraud flag > 0.7 = senior adjuster. Everything else = standard. Compliance signed off because every claim's path is auditable."
- "I configured the workflow in a ServiceNow PDI to learn the platform's data model. Incidents map cleanly to claims, tasks map to adjuster actions, SLAs enforce the queue boundaries."
- "Mei (senior adjuster) was the riskiest stakeholder. She thought triage would devalue her role. The design keeps her as the escalation owner — she sees everything, but she's not the bottleneck."

---

# Sim Project 3: TelcoCo — Customer Churn Diagnostic

**Industry:** Mid-tier Canadian telecom (Freedom Mobile / Public Mobile scale, not Bell)
**Future repo name:** `telcoco-churn-diagnostic-sim`
**Time estimate:** 25 to 35 hours over 2 to 3 weeks
**Skills covered:** SQL Analysis (Window Functions, Aggregations), Tableau, Power BI / Looker Studio, ETL Pipeline Design, Risk Scoring & Feature Engineering, Stakeholder Interviews, BPMN

## The Engagement

TelcoCo is a Canadian mobile carrier with 1.2M subscribers. Monthly churn is 8%, well above the industry average of 3 to 5%. Marketing has been chasing retention offers for 18 months with no movement. The VP of Customer Experience suspects the issue is operational, not promotional, but needs data to back the theory before reallocating budget.

## The Brief

Diagnose the operational drivers of churn (not the marketing drivers). Identify the 3 to 5 customer-journey moments most predictive of churn in the next 30 days. Recommend operational interventions (not promo offers) and build the SQL pipeline + dashboard that the Customer Experience team would use to monitor those moments in real time.

## Fictional Stakeholders

| Name | Role | Motivation |
|---|---|---|
| Asha Patel | VP Customer Experience | Skeptical of marketing's offers-first approach. Needs operational data. |
| Marcus Wong | Director of Retention | Believes promo offers work. Defensive. |
| Jordan Davies | Customer Service Manager | Knows what customers complain about. Hasn't been asked. |
| Priscilla Hernandez | Data Engineer | Owns the data warehouse. Cooperative but busy. |

## Data Approach

Use the **IBM Telco Customer Churn dataset** from Kaggle (https://www.kaggle.com/datasets/blastchar/telco-customer-churn) — 7,043 rows, real-world-shaped, widely recognized. Existing `telco-churn-analysis` repo can be the starting point. Add SQL-based feature engineering and time-window analysis.

## Constraints

- Cannot propose new promo offers (out of scope)
- Recommendations must be operational (process, handoff, automation, training)
- Dashboard must be usable by non-technical Customer Experience team
- SQL pipeline must be reproducible (commit the SQL files)

## Deliverables

1. **Discovery brief** — `docs/00-discovery.md`
2. **Stakeholder interviews** — 4 anonymized transcripts
3. **ETL pipeline (SQL)** — `sql/` directory mirroring the fraud-detection repo structure: schema, load, staging, features, scoring. Use window functions for rolling tenure, support-ticket velocity, payment-failure recency.
4. **Feature engineering doc** — `docs/04-features.md` — every churn predictor explained: what it measures, why it's operational not promotional, how it's calculated
5. **Risk scoring rubric** — combine features into a 0–100 churn risk score
6. **As-is BPMN** — current customer service flow (where touchpoints happen)
7. **To-be BPMN** — proposed operational interventions at the 3 to 5 churn-predictive moments
8. **Tableau workbook** — published to Tableau Public, churn risk by segment, churn moments visualized, dashboard for Customer Experience team. Public URL.
9. **Power BI / Looker Studio dashboard** — alternate visualization (Tableau for exploration, Looker for monitoring)
10. **Recommendation memo** — `docs/09-recommendations.md` — top 3 operational interventions with projected impact
11. **Executive summary**

## Suggested 2-to-3-Week Schedule

| Week | Focus | Hours |
|---|---|---|
| 1 | Discovery, dataset prep, stakeholder interviews, SQL schema + staging | 10 |
| 2 | SQL features (window functions), risk scoring, Tableau workbook, Looker dashboard | 14 |
| 3 | BPMN diagrams, recommendation memo, executive summary | 8 |

## Interview Talking Points

- "Marketing was chasing churn with offers. The data showed three operational moments where 30-day churn jumped: month 3 (post-honeymoon billing surprise), the first support ticket (especially if unresolved at 48 hours), and the first auto-pay failure. None of these are promo problems."
- "The SQL pipeline uses window functions to calculate rolling metrics: tenure-bucketed churn rate, support ticket velocity, payment failure recency. The feature with the highest signal-to-noise ratio was 'days since last unresolved support ticket.'"
- "Tableau for executive exploration, Looker Studio for the live ops monitoring view. Two tools, same data, different audience."

---

# Sim Project 4: TechCo SaaS — Internal Approval Workflow

**Industry:** Mid-size B2B SaaS company, ~200 employees, Toronto/distributed
**Future repo name:** `techco-approval-workflow-sim`
**Time estimate:** 20 to 30 hours over 2 weeks
**Skills covered:** Retool, Power Automate, Zapier / Make, Figma, BPMN, Stakeholder Interviews, Requirements Elicitation, UAT, Internal Tool Prototyping

## The Engagement

TechCo is a 200-person SaaS company growing fast. Finance approvals (vendor purchases, contractor invoices, marketing spend) currently flow through Slack DMs and email. Nothing is tracked. Approvals get lost. Two departments have been duplicating purchases. The CFO wants this fixed in 6 weeks without buying a $50k enterprise tool.

## The Brief

Design and prototype an internal approval workflow tool that replaces the Slack-and-email chaos. It must support multi-level approvals (manager, then finance), maintain an audit trail, integrate with the tools the team already uses (Slack for notifications, Google Sheets for finance's reporting), and be operable by non-technical staff.

## Fictional Stakeholders

| Name | Role | Motivation |
|---|---|---|
| Sarah Chen | CFO | Wants visibility and audit trail. Doesn't want to spend money on a tool. |
| David Achebe | VP Engineering | Resistant to "another tool." Will block if it looks fragile. |
| Lila Berhane | Office Manager | Lives the chaos daily. Wants this fixed yesterday. |
| Marco Russo | Senior Engineer | Submits 5+ purchase requests/month. Vocal about the friction. |

## Constraints

- No new enterprise software ($50k+ tools are out)
- Must integrate with Slack and Google Sheets
- Audit trail is non-negotiable (finance regulatory requirement)
- Non-technical operators must be able to maintain it after handoff

## Data Approach

No external dataset. The data IS the requests — synthetic 50-row sample (vendor name, amount, category, requester, status, approvals) seeded into the prototype's backing store.

## Deliverables

1. **Discovery brief** — `docs/00-discovery.md`
2. **Stakeholder interviews** — 4 anonymized transcripts
3. **As-is BPMN** — current Slack + email approval chaos (deliberately messy diagram to show the problem)
4. **Diagnosis doc** — what's actually broken (lost messages, no audit trail, duplicate purchases)
5. **To-be BPMN** — clean workflow: request → manager approval → finance approval → vendor payment → audit log
6. **Figma wireframes** — `docs/figma-link.md` — 4 screens (submit, manager queue, finance queue, audit log)
7. **Requirements doc** — functional (multi-level approval, audit log, Slack integration, Sheets export) + non-functional (response time, uptime, who can maintain)
8. **Retool prototype** — `prototype/retool-link.md` — the actual tool, public read-only share link
9. **Power Automate flow** — sends Slack notification when a request reaches each approval stage
10. **Zapier / Make flow** — appends approved requests to a Google Sheet for finance
11. **UAT test plan** — 10 test cases (functional + edge cases like denied approvals, edits-after-submit)
12. **Change management memo** — rollout plan, who maintains it after, escalation if it breaks
13. **Executive summary**

## Suggested 2-Week Schedule

| Week | Focus | Hours |
|---|---|---|
| 1 | Discovery, interviews, as-is + to-be BPMN, Figma wireframes, requirements | 11 |
| 2 | Retool prototype, Power Automate + Zapier integrations, UAT, change mgmt, exec summary | 14 |

## Interview Talking Points

- "The CFO didn't want enterprise software. The engineers didn't want yet another tool. The compromise was a Retool app that fits into the existing stack: Slack for notifications, Google Sheets for finance's monthly reporting. The Retool app is the source of truth; everything else is a mirror."
- "I wireframed it in Figma first so I could get stakeholder sign-off before building. Sarah (CFO) and David (VP Eng) both pushed back on different things in the wireframe stage — much cheaper than discovering it after the Retool build."
- "The audit trail was the non-negotiable. Every approval, denial, and edit logs to Sheets immediately via the Zapier flow. Finance can run their monthly reports without touching the tool."

---

# Execution Playbook

## How to actually run a sim project

1. **Spin up the GitHub repo** (private at first, public when artifacts are ready)
2. **Write the discovery brief in week 1** — this anchors the whole engagement
3. **Build the stakeholder interview notes first**, before doing any other work — they constrain everything else
4. **Diagrams before prototypes** — never start building the Retool app or RPA bot before the as-is and to-be are done. Save the temptation to skip ahead.
5. **One artifact per session** — pick one deliverable per work block (2 to 3 hours). Done > perfect.
6. **Commit early, commit often** — every artifact gets a commit. The commit log itself becomes interview evidence ("I work in 1-deliverable increments").

## How to present on /work

Each sim project becomes a Featured Project card with:
- A short framing line (the one-liner business problem)
- 4 to 6 inline screenshots from the artifacts (BPMN, dashboard, prototype, scoring rubric)
- A link to the repo
- A live link to the prototype (Retool share, Tableau Public URL, Looker Studio link)
- A "What I'd do next" section showing growth mindset

Every recruiter who clicks the card sees: real problem → real method → real artifacts → real interview ammunition.

## Honest framing on every project README

The README of each sim repo should open with:

> This is a simulated case study. The company and stakeholders are fictional. The dataset, artifacts, and analytical approach are real. I built this to demonstrate end-to-end Operations & Process Analyst work — diagnosis, redesign, prototyping, handoff — at the level a hiring team can evaluate.

That sentence is the trust signal. Don't hide that the company is invented. Recruiters respect candor; they punish concealment.

---

# Suggested Order

The 4 projects build on each other. Recommended sequence:

| # | Project | Why this position |
|---|---|---|
| 1 | TechCo SaaS Approval Workflow | Smallest scope, fastest win, low data complexity. Confidence-builder. |
| 2 | Acme Insurance Claims Triage | Medium scope, adds ServiceNow + risk scoring. Builds on Project 1. |
| 3 | Northstar Bank Onboarding | Largest scope, full RPA + dashboard + Retool. Showcase project. |
| 4 | TelcoCo Churn Diagnostic | Heaviest data work, leverages SQL drill practice. Closes the analytical loop. |

Total: ~140 hours over 10 to 12 weeks. At 12 to 15 hrs/week alongside the skill roadmap and volunteer engagement, doable in 3 months.

## Endgame

After all 4: the portfolio has 4 distinct featured case studies spanning Banking, Insurance, Telecom, and SaaS — exactly the industries that hire heaviest in Toronto. Every eyebrow-raising skill has a public artifact behind it. The carousel claims become defensible by repository.

The candidate at the end of this is unrecognizable from the candidate at the start. Same brain, much sharper proof.
