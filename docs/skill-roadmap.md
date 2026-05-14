# Skill Acquisition Roadmap

Documentation of every eyebrow-raising tool or skill currently on the portfolio carousel, with a concrete practice project to acquire it or back it up with public evidence.

Ordered by priority. Tackle Tier 1 before Tier 2.

---

## Tier 1 — Highest priority (claims hard to defend without evidence)

### 1. Tableau

| | |
|---|---|
| Risk | One `tableau_prep.py` script in repos. No workbook. |
| Proof needed | A published Tableau Public workbook with at least one calculated field and one LOD expression. |
| Practice project | "Customer SLA Dashboard" — rebuild the insights from the existing `Customer-Support-SLA-Optimization-Project` in Tableau. |
| Walkthrough | 1. Sign up at https://public.tableau.com (free). 2. Download Tableau Desktop Public Edition. 3. Export cleaned CSV from the SLA Jupyter notebook. 4. Connect Tableau to the CSV. 5. Build 4 worksheets: SLA breach rate by category, avg time-to-resolution by team, weekly trend, escalation funnel. 6. Combine into one dashboard with filters. 7. Add one LOD calc (e.g., `{FIXED [Team]: AVG([Resolution Time])}`). 8. Publish to Tableau Public and copy the public URL. |
| Proof location | Tableau Public URL embedded in `/work`. |
| Time | 8 to 12 hours (one weekend). |
| Interview line | "I rebuilt my SLA analysis in Tableau to compare visualization approaches against my Streamlit version. The Tableau version uses LOD expressions for moving SLA breach rates. Same business question, different lens." |

---

### 2. Power Automate

| | |
|---|---|
| Risk | No flows built. Recruiters know the difference between "tried it" and "built one." |
| Proof needed | One documented automated flow with screenshots, connecting 2+ services. |
| Practice project | "Email-to-Notion Triage" — auto-route inbound email by keyword to specific Notion databases. |
| Walkthrough | 1. Get a free Microsoft 365 trial or use a personal Microsoft account. 2. Open https://make.powerautomate.com. 3. New automated flow, trigger: "When a new email arrives in Outlook". 4. Add condition: "Subject contains [keyword]". 5. Add action: "Create item in Notion database". 6. Test with a sample email. 7. Screenshot the flow diagram and result. 8. Write a 1-paragraph case study covering trigger, condition, action, business value. |
| Proof location | Screenshot in `/work` project card + Notion case study link. |
| Time | 4 to 6 hours. |
| Interview line | "I built a triage automation that routes inbound requests by subject keyword. Simple pattern, same shape as enterprise incident routing in ServiceNow." |

---

### 3. ServiceNow

| | |
|---|---|
| Risk | Enterprise platform with specific workflows. Hardest to fake. |
| Proof needed | A documented custom workflow on a free Personal Developer Instance. |
| Practice project | "Custom Incident Workflow" — incident category + routing rule + SLA + notification on a free ServiceNow PDI. |
| Walkthrough | 1. Sign up for ServiceNow Personal Developer Instance at https://developer.servicenow.com (free). 2. Activate the PDI (full ServiceNow environment, personal use). 3. Complete the free "ServiceNow Fundamentals" learning path on the same site. 4. In the PDI: create one custom Incident category. 5. Set up a routing rule (new incidents in this category auto-assign to a specific group). 6. Configure an SLA: response time 4h, resolution 24h. 7. Add an email notification trigger on assignment. 8. Screenshot each piece: incident form, workflow editor, SLA definition, notification setup. 9. Write a case study: business problem, ServiceNow tables used (incident, task, CMDB), workflow logic, business value. |
| Proof location | Case study page in `/work` with screenshots. |
| Time | 20 to 30 hours over 2 to 3 weeks. |
| Interview line | "I built a custom incident category and SLA workflow in a ServiceNow PDI to learn the platform's data model. Incidents link to tasks; tasks link to the CMDB. The Fundamentals course is what gives me the vocabulary; the hands-on workflow is what makes it stick." |

---

### 4. Power BI / Looker Studio

| | |
|---|---|
| Risk | No dashboards in any public repo. |
| Proof needed | One published dashboard with multiple charts, filters, and one calculated measure. |
| Practice project | "Fraud Detection KPI Dashboard" — connect to the output tables from `Fraud-Detection-SQL-Window-Functions` and build a real ops dashboard. |
| Walkthrough (Looker Studio path) | 1. Run the fraud detection SQL to produce alert and risk output tables. 2. Export the output to Google Sheets (or connect Looker directly to Postgres via a connector). 3. Open https://lookerstudio.google.com, New Report, connect to the Sheet. 4. Build the dashboard: Daily alert volume (line chart); Alerts by type velocity / structuring / balance (stacked bar); False positive rate (single value KPI); Top-risk merchants (table, sorted desc). 5. Add date filter and category filter. 6. Add one calculated field: `FP Rate = (False Positives / Total Alerts) * 100`. 7. Publish, copy the public share link. 8. Embed in `/work`. |
| Proof location | Looker Studio public URL embedded in `/work`. |
| Time | 4 to 6 hours. |
| Interview line | "I used Looker Studio to visualize the output of my SQL fraud pipeline. It surfaces the alert volume and false-positive trends a fraud ops team would actually monitor." |

---

### 5. SQL Analysis (Window Functions, Aggregations)

| | |
|---|---|
| Risk | Real SQL in repo, but you've said you can't author unassisted. Defense breaks if asked to whiteboard. |
| Proof needed | Ability to read, explain, and write basic window functions with only PostgreSQL docs (no AI). |
| Practice project | "Without-AI SQL Drills" — re-implement 3 to 5 queries from the fraud-detection repo by hand. |
| Walkthrough | 1. Pick 3 to 5 SQL files from the fraud repo (start with `03_features.sql`). 2. Paste each into a blank doc with the business question above it ("calculate hourly transaction velocity per customer"). 3. Without looking at the existing SQL, write the query yourself using only https://www.postgresql.org/docs. 4. Compare your version to the original. 5. Note what tripped you up (syntax? frame clauses? joins?). 6. Repeat 2 to 3 queries per week for 4 weeks. 7. By week 4, you should write basic window queries from scratch using docs only. |
| Proof location | GitHub gist with before/after side-by-side. |
| Time | 6 to 10 hours over 4 weeks. |
| Interview line | "My fraud repo uses window functions for velocity features. The PARTITION BY isolates per-customer, ORDER BY orders by transaction step, RANGE BETWEEN defines the time window. I can write basic versions on a whiteboard; complex ones I'll reference docs for." |

---

### 6. Risk Scoring & Feature Engineering

| | |
|---|---|
| Risk | Real notebook in repo, but features haven't been articulated in your own words. |
| Proof needed | A 2 to 3 page case study walking through every feature, why it was chosen, how it's calculated. |
| Practice project | "Feature Walkthrough Document" — write the case study in your own words, from scratch, no copy-paste from README. |
| Walkthrough | 1. Open `03_features.sql` and the predictive risk modeling notebook. 2. List every feature: `txn_cnt_1h`, `spend_1h`, `fraud_rate_30d`, etc. 3. For each: 2 to 3 sentences covering what it measures, why it indicates fraud risk, how it's calculated. 4. Add a section: "How the rules engine combines these into a score." 5. Add a section: "What I'd improve if I had more time" (shows growth mindset). 6. Save as `docs/feature-walkthrough.md` in the fraud repo. |
| Proof location | `/docs` in fraud-detection repo + link from `/work`. |
| Time | 4 to 6 hours. |
| Interview line | "The system uses 8 velocity and risk features. The most important one is the rolling 30-day fraud rate for the receiving account. Destinations with high historic fraud rates score higher even for normal-shaped transactions. Want me to walk through the others?" |

---

## Tier 2 — Medium priority (kept these; need rehearsal + light practice)

### 7. Figma

| | |
|---|---|
| Risk | If asked "show me a Figma file you built" you don't have one. |
| Practice project | "Internal Tool Wireframe" — wireframe one of the Fiitco-Operation admin pages (or a future Retool page) in Figma. Single screen, 6 to 8 components. |
| Walkthrough | Sign up free at figma.com, New design file, frame size desktop, wireframe one operational page (form, table, status indicators), add basic auto-layout, share view link. |
| Time | 3 to 5 hours. |
| Interview line | "I use Figma to wireframe internal tools before building them in Retool or Streamlit. The wireframe forces me to make layout decisions before I commit them to code." |

---

### 8. R

| | |
|---|---|
| Risk | One project. "What statistical test did you use and why?" could trip you. |
| Practice project | "R Statistical Drills" — re-run the employee dataset analysis without AI, document each test choice. |
| Walkthrough | Open the existing R notebook, for each statistical test (t-test, ANOVA, regression) write 2 to 3 sentences in markdown explaining what it does, why this test for this question, and what the p-value told you. Commit back to the repo. |
| Time | 3 to 5 hours. |
| Interview line | "I use R when the statistical test or model has a specific R package that does it cleaner than Python, like the `lme4` package for mixed-effects models." |

---

### 9. Retool

| | |
|---|---|
| Risk | Fiitco is Next.js, not Retool. Need a real Retool app to back the claim. |
| Practice project | "Operational Approval Tool" — small internal Retool app: form submission, status workflow, admin view. |
| Walkthrough | retool.com free tier, create app, connect to a Google Sheet or simple Postgres, add form (submit new request), add table (list requests with status), add buttons (approve / reject), write the SQL/JS for state transitions, publish and share read-only link. |
| Time | 6 to 10 hours. |
| Interview line | "Retool is what I reach for when an operations team needs a small internal tool and engineering can't allocate sprint time. Form, table, status, done." |

---

### 10. Zapier / Make

| | |
|---|---|
| Risk | No automation shown. |
| Practice project | "Form-to-Slack-and-Sheet Pipeline" — Typeform / Google Form, Slack notification, log to Sheet, email confirmation. |
| Walkthrough | zapier.com or make.com free tier, new zap, trigger: form submission, action 1: Slack message to a channel, action 2: append row to Sheet, action 3: send confirmation email, test end-to-end, screenshot the zap diagram. |
| Time | 2 to 3 hours. |
| Interview line | "Zapier or Make is my go-to for connecting tools an ops team already uses. Form submission flows through Slack, Sheets, and email in one zap." |

---

### 11. BPMN 2.0 Diagramming

| | |
|---|---|
| Risk | "Draw the to-be state of this process with swimlanes and gateways" needs to be doable live. |
| Practice project | "Three Real-World Process Maps" — pick three operational scenarios (customer onboarding, fraud triage, ticket escalation) and diagram each in Lucidchart with full BPMN compliance. |
| Walkthrough | For each scenario: 1. Identify pools and swimlanes (departments / roles). 2. Map activities (rounded rectangles). 3. Add gateways (diamond, XOR / AND / OR). 4. Add events (circles: start, intermediate, end). 5. Add message flows between pools. 6. Export as PNG and add to portfolio. |
| Time | 4 to 6 hours total. |
| Interview line | "I keep three reference process maps for common ops scenarios: onboarding, triage, escalation. When a stakeholder describes a workflow, I can match it against one of those patterns within minutes." |

---

### 12. Stakeholder Interviews + Requirements Elicitation + UAT (bundled)

| | |
|---|---|
| Risk | At 0 years, claiming methodology without practice. "Tell me about a real stakeholder you interviewed" leads to silence. |
| Practice project | "Volunteer Process Engagement" — find one nonprofit or small business in Toronto, do a 1-cycle engagement: stakeholder interviews, requirements doc, process recommendation, UAT plan. |
| Walkthrough | 1. Find a nonprofit via Volunteer Toronto (volunteertoronto.ca) or LinkedIn outreach. 2. Pitch a 4-week pro-bono engagement to map and improve one of their workflows. 3. Week 1: 2 to 3 stakeholder interviews (30 min each), recorded transcripts. 4. Week 2: Requirements doc (problem, current state, success criteria, constraints). 5. Week 3: To-be recommendation with BPMN diagram. 6. Week 4: UAT plan with test cases. 7. Deliver a written report + presentation. 8. Get a LinkedIn recommendation from the stakeholder. |
| Proof location | Case study in `/work` + LinkedIn recommendation. |
| Time | 30 to 40 hours over 4 weeks. |
| Interview line | "Most recently I ran a process engagement with [nonprofit name]. Two weeks of stakeholder interviews, a requirements doc, a to-be redesign, and a UAT plan they used to validate the change. Want me to walk through the requirements doc?" |

This single project unlocks **three eyebrow-raising claims at once.** Highest leverage of any item in this roadmap.

---

### 13. Continuous Improvement (Lean)

| | |
|---|---|
| Risk | "Walk me through your 5 Whys / fishbone / PDCA on a real problem" needs vocabulary cold. |
| Practice project | "Lean Vocabulary + One Real RCA" — learn the methodology, then apply it to one real operational problem from past work or volunteer engagement. |
| Walkthrough | 1. Read https://www.lean.org/learn-lean (free 1-hour overview). 2. Learn 5 tools cold: 5 Whys, Fishbone (Ishikawa), Pareto, PDCA, Kaizen. 3. Pick ONE real problem (volunteer project, past role, or fraud-detection alert fatigue). 4. Apply 5 Whys: write the chain. 5. Build a fishbone diagram in Lucidchart. 6. Document as a 1-page case study. |
| Time | 4 to 6 hours. |
| Interview line | "On the fraud detection project, the surface problem was 'too many alerts.' Five Whys traced it to overweighting velocity features without contextual scoring. Fishbone surfaced four contributing factors: feature weights, threshold calibration, lack of feedback loop, no analyst tooling. That's how I framed the next iteration." |

---

### 14. ETL Pipeline Design

| | |
|---|---|
| Risk | "Design" implies architectural ownership. The movies-dataset pipeline is real but could be probed on tradeoffs. |
| Practice project | "Pipeline Architecture Document" — write a 1-page architecture doc for the existing `movies-dataset` ETL pipeline. |
| Walkthrough | 1. Open the movies-dataset repo. 2. Map the pipeline: source, 02_full_data_merge, 02_etl_tableau_prep, 03_funnel_analysis. 3. Write the doc: data sources (with size and shape); each transformation step (purpose, technology, runtime); output schema; tradeoffs made (Python vs SQL, batch vs streaming, why pandas not Spark); what you'd improve at scale. 4. Commit as `docs/architecture.md`. |
| Time | 3 to 4 hours. |
| Interview line | "It's a Python-pandas batch pipeline. Three ETL stages, each writes intermediate CSVs so I can debug a single stage without rerunning the whole thing. At larger scale I'd swap pandas for DuckDB or Polars for the joins." |

---

### 15. Internal Tool Prototyping (formerly Internal Tools Development)

| | |
|---|---|
| Risk | Already softer with the reframe. Just need a clear example. |
| Practice project | The Retool project above (#9) covers this. Reuse. |
| Interview line | "My Fiitco-Operation is the full-stack version of this: Next.js, Convex, real auth. My Retool tool is the prototyping version: same operational logic, faster build, easier handoff. I use whichever fits the team's bandwidth." |

---

## Suggested order of execution

If you do one item per week with the volunteer engagement running in parallel:

| Week | Tier 1 | Tier 2 | Notes |
|---|---|---|---|
| 1 | Power Automate flow + Looker Studio dashboard | Start volunteer outreach | Quick wins (10 hrs total) |
| 2 | Tableau workbook | Volunteer interviews | Big visible artifact |
| 3 | SQL drills (start) + Risk feature doc | Volunteer requirements doc | Defensive depth |
| 4 | ServiceNow Fundamentals start | Volunteer to-be design + BPMN maps | Heavy week |
| 5 | ServiceNow workflow build | Volunteer UAT + final report | Heaviest, but volunteer wraps |
| 6 | SQL drills continue | Retool app + Zapier/Make | |
| 7 | SQL drills continue | R drills + Figma wireframe | |
| 8 | SQL drills finish + ETL doc | Lean RCA case study | Closeout |

Eight weeks. ~10 hours/week. Total: ~80 hours. At the end, every eyebrow-raising claim on the site has a public artifact behind it, the volunteer engagement has produced a LinkedIn recommendation, and "AI-assisted" becomes "AI-supervised."
