# Portfolio Site — Full Content Inventory

Every piece of user-facing copy on the portfolio, organized by page. Use this to review against your resume and LinkedIn, mark what to update, and we'll sync the changes back to the site.

**Source files behind each section:**
- `src/lib/content.ts` — most page-level copy
- `src/data/projects.ts` — the 6 Work case studies
- `src/app/about/page.tsx` — About page (hardcoded data arrays)
- `src/app/layout.tsx` — site metadata
- `src/components/*` — small hardcoded blocks (carousels, footer, hero social links, etc.)

---

# 🌐 Site-wide

## Page metadata (`layout.tsx`)
- **Title:** "David Ezieshi — Operations & Process Analyst"
- **Description:** "Early-career Operations & Process Analyst in Toronto. I diagnose workflow bottlenecks, redesign them, and prototype the internal tools that ship the fix."

## Brand block (nav logo area)
- **Initials:** DE
- **Name:** David Ezieshi
- **Role:** Operations & Process Analyst

## Navigation links
Home · About · Work · Process · Contact
*(Insights is currently hidden — re-add when real articles exist.)*

## Hero social-link row
LinkedIn · Email (ezieshie@gmail.com) · Resume · GitHub

## Footer

### CTA section
- **Eyebrow:** "Have a project in mind?"
- **Heading:** "Let's Build / The Fix."
- **Blurb:** "Open to operations, process, and business analyst roles. I diagnose workflows, redesign them, and prototype the tools that fix them."
- **Buttons:** "Let's Connect" → /contact · "View Resume" → /resume

### Brand block (left column)
- **Logo:** DE
- **Name:** David Ezieshi
- **Role:** Operations & Process Analyst
- **Tagline:** "Building systems that improve clarity, workflow design, and operational execution."

### "Navigation" column
Maps the site nav (Home · About · Work · Process · Contact)

### "Resources" column
Resume · LinkedIn · Email (ezieshie@gmail.com) · GitHub

### "Availability" column
- **Heading:** Availability
- **Body:** "Toronto-based, eligible to work in Canada. Open to operations, process, and business analyst roles."
- **Inline CTA:** "Get In Touch" → /contact

### Footer bottom
- "© [year] David Ezieshi. All rights reserved."
- "Built with clarity and purpose."

---

# 🏠 Home (`/`)

## Hero
- **Eyebrow chip:** `OPERATIONS & PROCESS ANALYST · TORONTO, CANADA`
- **Headline (white):** *Diagnosing Workflows.*
- **Headline (purple):** *Building The Fix.*
- **Sub:** "I diagnose operational bottlenecks, redesign the workflows that cause them, and prototype the internal tools that ship the fix. Early-career analyst. Toronto."
- **CTAs:** "View My Work" → /work · "Let's Connect" → /contact

## Core Capabilities (6 chips)
1. Process Diagnosis
2. Workflow Redesign
3. BPMN Mapping
4. Bottleneck Analysis
5. Rapid Prototyping
6. Internal Tooling

## About Me block

- **Eyebrow:** About Me
- **Headline:** "I diagnose the workflow, then ship the tool that fixes it."
- **Body:** "I'm David Ezieshi, an early-career Operations & Process Analyst. I diagnose operational bottlenecks, redesign workflows in BPMN, and prototype the internal tools that ship the fix. My projects show how a single analyst, with the right tools and a clear scope, can close gaps that usually wait for an engineering sprint."
- **Link:** "More About Me" → /about

### Three trait cards (right column)
1. **I Diagnose** — "I sit with stakeholders, walk the current process, and quantify exactly where time, money, or quality is leaking."
2. **I Redesign** — "I draw the to-be state in BPMN with swimlanes, gateways, and handoffs, so the fix is visual before it's built."
3. **I Build** — "When the engineering queue can't move fast enough, I prototype the internal tool myself and hand it off when it's ready to harden."

## Tools Carousel (16 cards, scrolling)

**Process & Workflow:** Lucidchart / Visio · Miro / FigJam · Figma
**Analysis & Data:** Excel / Google Sheets · PostgreSQL · Python / Jupyter / pandas · R
**Reporting & Build:** Streamlit · Tableau · Power BI / Looker Studio
**Prototyping:** Retool · Zapier / Make
**Operations Platforms:** UiPath · Power Automate · ServiceNow
**Working Environment:** Jira · Notion · Claude · Cursor

## Skills Carousel (16 cards, scrolling)

**Process Analysis:** As-Is / To-Be Workflow Mapping · BPMN 2.0 Diagramming · SLA & Bottleneck Diagnostics · Stakeholder Interviews
**Business Analysis Practice:** Requirements Elicitation · User Acceptance Testing (UAT) · Process Improvement
**Operations Practice:** RPA Workflow Design · Standard Operating Procedures (SOPs) · Root Cause Analysis · Continuous Improvement (Lean)
**Analytical:** SQL Analysis (Window Functions, Aggregations) · Risk Scoring & Feature Engineering · ETL Pipeline Design
**Prototyping & Build:** AI-Accelerated Prototyping · Internal Tool Prototyping

## My Approach (5-node diagram + tagline card)

- **Eyebrow:** My Approach
- **Top-left input:** Stakeholder Interviews
- **Top-right input:** Current-State Data
- **Center (highlighted):** Diagnose and Redesign
- **Bottom-left output:** Prototype the Tool
- **Bottom-right output:** Documentation and Hand Off

### Methodology tagline card
- **Eyebrow:** MY METHOD
- **Headline:** "Diagnose. Redesign. Prototype."
- **Sub:** "Three steps. One analyst. No engineering ticket required."

## Anatomy of an Engagement (5-step flow)

- **Eyebrow:** ANATOMY OF AN ENGAGEMENT
- **01 Listen** — "Sit with stakeholders. Walk the current process. Note where they wince."
- **02 Map** — "Draw the as-is state in BPMN. Swimlanes, gateways, handoffs."
- **03 Diagnose** — "Quantify the bottleneck. Time, cost, quality, or volume."
- **04 Prototype** — "Build the tool or workflow that fixes it. Internal-tools platforms, AI-accelerated."
- **05 Hand Off** — "Document the change. Train the user. Transition ownership."

## Featured Projects (3-card carousel)

### Card 1 — Fiitco Operations Platform
- **Category:** Operations Platform
- **Title:** Fiitco: Fitness Operations Platform
- **Description:** "An end-to-end operations platform for a fitness business, built solo on Next.js 16 and Convex. Spans 27 modules and a 32-table data model covering class programming, instructor scheduling, delivery tracking, and a self-service CMS for the public website."
- **Meta:** Full-stack build · Live in production
- **Metrics:** 27 Operational Modules · 32 Data Tables · 9 Backend Services · Live (In Production)
- **Highlights:**
  - 27 operational and website-CMS modules in one platform
  - Role-based access with custom auth and approval workflows
  - Instructor scheduling with automated buffer-conflict detection
  - Auto-generates a Word business-analysis report (scope, data model, risk matrix)
- **Outcome note:** "A production operations tool built by one analyst, not an engineering team."
- **Built With:** Next.js 16 · Convex · TypeScript · TipTap
- **CTAs:** View Repo · Live Site (fiitco.ca)

### Card 2 — Telco Customer Churn Analysis
- **Category:** Churn Analytics
- **Title:** Telco Customer Churn Analysis
- **Description:** "A churn analysis of 7,043 telecom customers using SQL segmentation and a logistic-regression model. Identifies the contract, tenure, and service patterns most predictive of churn and recommends operational retention interventions."
- **Meta:** Public IBM dataset · Solo analysis
- **Metrics:** 7,043 Customers Analyzed · 0.86 Model ROC-AUC · 69% Churn Precision · 58% Churn Recall
- **Highlights:**
  - Segmented 7,043 customers across contract, tenure, and service tiers with 8 SQL queries
  - Chi-square validated contract type as a churn driver (p < 5.8e-258)
  - Logistic regression at 0.86 ROC-AUC, 69% precision on flagged churners
  - Surfaced fiber-without-tech-support (~49% churn) as the highest-risk segment
- **Outcome note:** "Month-to-month contracts emerged as the top churn driver, statistically validated."
- **Built With:** SQLite · Python · scikit-learn · SciPy
- **CTAs:** View Repo · View Analysis (htmlpreview)

### Card 3 — Movie Industry Profitability
- **Category:** Analytics Dashboard
- **Title:** Movie Industry Profitability Analysis
- **Description:** "An end-to-end analytics project on ~5,000 films from TMDB and IMDB. A 9-stage Python ETL pipeline feeds an 8-stage investment-to-profitability funnel and a 5-page interactive Streamlit dashboard that traces where studio capital is won and lost."
- **Meta:** Public TMDB + IMDB data · Live dashboard
- **Metrics:** 5,000+ Films Analyzed · 42 Features Engineered · 9 ETL Stages · 5 Dashboard Pages
- **Highlights:**
  - Merged TMDB (4,803) and IMDB (5,043) into a ~5,000-film master dataset, 42 features
  - 9-stage Python ETL pipeline outputting 6 analysis-ready datasets
  - 8-stage investment-to-profitability funnel model
  - 5-page interactive Streamlit dashboard with filterable movie browser
- **Outcome note:** "An investment-funnel model that traces where film capital is lost, stage by stage."
- **Built With:** Python · pandas · Streamlit · Tableau
- **CTAs:** View Repo · Live Dashboard (Streamlit)

## Currently Exploring (4 cards)
1. Advanced SQL & Window Functions
2. RPA with UiPath & Power Automate
3. ServiceNow Workflows
4. BI Dashboards (Tableau / Power BI)

---

# 👤 About (`/about`)

## Hero
- **Eyebrow:** About Me
- **Headline:** "I diagnose, document, and build the systems teams **rely on.**"
- **Body:** "I'm David Ezieshi, an early-career Operations & Process Analyst based in Toronto. I own the full lifecycle, from stakeholder requirements and BRD authoring to workflow design, data integrity, and live administration, and I'm currently running and managing a two-application Next.js + Convex platform for an industry partner through my George Brown co-op."

## Stats row (4 cards)
- **ECBA** — IIBA Certified
- **3.8** — GPA · Dean's List
- **2** — Live Apps Shipped
- **5,000+** — Records Analyzed

## Experience section

- **Eyebrow:** Experience
- **Heading:** "Systems thinking, backed by real delivery."
- **Intro:** "From a live BA co-op to luxury retail and broadcast operations, my experience spans requirements, workflow design, data integrity, and client-facing service."

### Timeline

**Jan 2026 – Present · Business Analyst & Platform Administrator · FIIT Co.**
"Running and managing a two-application Next.js + Convex ecosystem (an internal class-management platform plus a public site) for an industry partner through my George Brown co-op. Authored the engagement's BA Report and translated it into working configuration: forms, workflows, and permissions, from requirements through deployment."

**Apr 2024 – Present · Sales Ambassador · Ralph Lauren**
"At Ralph Lauren I read what a client needs, build the complete outfit around it, and make every visit feel effortless. That consultative service shows in the results: I ranked among the store's top performers at 184% of sales goal and $815 in sales per hour against a $450 target."

**Dec 2023 – Mar 2024 · Sales Consultant · Canadian Tire Financial Services**
"Reduced processing delays by escalating recurring data-quality patterns I identified during compliance-validated credit application reviews."

**Apr 2021 – Aug 2022 · Reporter & Programme Coordinator · Kaftan TV**
"Improved broadcast operational reliability by 25% by streamlining editorial workflows and coordinating handoffs across technical and production crews under strict deadlines."

## What Drives Me (4 cards)

- **Diagnostic-First** — "I map the current state before proposing a change. Redesigning the wrong thing costs more than taking the time to look."
- **Builder's Hands** — "I don't wait for an engineering sprint to validate an idea. I prototype the tool, prove it works, and hand it off clean."
- **Plain-Language Documentation** — "I write so the people who use a system can actually understand it, a habit carried over from my communications background."
- **Bridge Operator** — "I translate between business stakeholders and technical implementation, speaking both languages well enough to be useful in both rooms."

## Core Strengths (8 chips)
Requirements Elicitation · BRD / FRD Authoring · BPMN Process Mapping · SQL & Data Integrity · User Acceptance Testing · Power BI / Tableau · Workflow Configuration · Stakeholder Management

## Education & Certifications

- **Eyebrow:** Education & Certifications
- **Heading:** "Grounded in business analysis and systems."

### Timeline
| Date | Program | School |
|---|---|---|
| Certification | ECBA — Entry Certificate in Business Analysis | IIBA (International Institute of Business Analysis) |
| 2025–2026 | PG Cert., Information Systems & Business Analysis | George Brown College · Dean's List, 3.8 / 4 |
| 2023–2024 | PG Cert., Marketing Management & Digital Media | George Brown College · Dean's List, 3.7 / 4 |
| 2017–2021 | B.Sc., Mass Communication | Mountain Top University, Nigeria · Second Class Upper |

## My Approach section

- **Eyebrow:** My Approach
- **Heading:** "Diagnose. / Redesign. / Prototype."
- **Paragraph 1:** "I diagnose before I design. I sit with stakeholders, map the current workflow, and quantify where time or quality is leaking before proposing a change."
- **Paragraph 2:** "Then I redesign the process and, when the engineering queue can't move fast enough, prototype the tool that delivers it. The goal is always a system the team can actually use, documented in plain language and handed off clean."
- **Link:** "Let's Connect" → /contact

---

# 🗂️ Work (`/work`)

## Hero
- **Eyebrow:** `// SELECTED WORK`
- **Title:** "Operational systems, data analysis, and the artifacts behind them."
- **Intro:** "A curated set of projects across platform delivery, data analysis, SQL engineering, and business-analysis documentation."

## Filters
All · Analytics · Business Analysis · Data Engineering

## Featured case study
- **Pill:** Featured Case Study
- **Title:** FIIT Co. Operational Ecosystem
- **Meta:** Business Analysis • Platform Administration • Workflow Design
- **Description:** "A two-application operations platform for a fitness business, built and administered end to end on Next.js and Convex: an internal class-management system spanning 27 modules plus a paired public site with a self-service CMS."
- **Metrics:** 27 Modules (Internal + public CMS) · 32 Tables (Convex data model) · Live (In production)
- **CTAs:** "View Case Study" → /work/fiitco · "Live Site" → fiitco.ca

## Project grid (5 cards, each linking to its case study)

| Card | Category | Description |
|---|---|---|
| Telco Customer Churn Analysis | Data Analytics | Segmented 7,043 telecom customers with 8 SQL queries and a logistic-regression model (0.86 ROC-AUC) to find and predict churn drivers. |
| Movie Industry Profitability | Analytics Dashboard | A 9-stage Python ETL pipeline on ~5,000 films feeding an 8-stage profitability funnel and a live 5-page Streamlit dashboard. |
| Fraud Detection SQL Pipeline | Data Engineering | A 7-layer PostgreSQL pipeline using window functions for velocity and risk features feeding an interpretable, rule-based scoring engine. |
| Customer Support SLA Optimization | Predictive Analytics | A cost-sensitive Random Forest that predicts SLA breaches and ranks tickets by financial risk in a Streamlit decision dashboard. |
| Business Analysis & Process Design | Business Analysis | BABOK v3 artifacts: a BRD, an As-Is / To-Be process design, BPMN swimlane maps, and use-case specifications. |

## Philosophy flow

- **Eyebrow:** `// HOW I APPROACH WORK`
- **Heading:** "I focus on projects that connect:"
- **Flow:** Requirements (Understand the need) → Workflows (Design the process) → Systems (Build or optimize) → Reporting (Trace every metric) → Outcomes (Ship the change)

---

# 📁 Work case studies (`/work/[slug]`) — 6 detail pages

Each page renders: title, summary, repo/live links, meta grid (Client / Timeline / Role / Team / Tools), The Challenge, My Approach, The Impact (metrics), Deliverables.

## 1. `/work/fiitco` — FIIT Co. Operational Ecosystem

- **Category:** Operations Platform
- **Summary:** "A two-application operations platform for a fitness business: an internal class-management system and a paired public site, built and administered end to end on Next.js and Convex."
- **Meta:** Client: FIIT Co. (George Brown industry co-op) · Timeline: Jan 2026 – Present · Role: Business Analyst & Platform Administrator · Team: Solo build · Tools: Next.js 16, Convex, TypeScript, TipTap, Excel
- **Challenge:** "FIIT Co. needed one system to run class programming, instructor scheduling, delivery tracking, and a public marketing site, without a dedicated engineering team. The work had to go from stakeholder requirements all the way to a live, maintainable deployment."
- **Approach:**
  - Ran requirements elicitation with the partner and authored the engagement's BA Report covering scope, stakeholders, current and future state, and the data model.
  - Translated the BA Report into working configuration: forms, workflows, permissions, and a 32-table Convex data model.
  - Built role-based access with custom auth, approval workflows, and instructor scheduling with automated buffer-conflict detection.
  - Shipped a self-service CMS so the partner can manage the public site (pricing, testimonials, blog, FAQ) without a developer.
- **Impact:** 27 Operational Modules · 32 Data Tables · 9 Backend Services · Live (In Production)
- **Deliverables:**
  - BA Report documenting scope, data model, and requirements
  - Internal class-management platform spanning 27 modules
  - Public marketing site with a self-service CMS
  - Role-based access, approval workflows, and Excel import tooling
- **Links:** View Live Site (fiitco.ca) · View Repo (Fiitco-Operation)

## 2. `/work/telco-churn` — Telco Customer Churn Analysis

- **Category:** Data Analytics
- **Summary:** "A SQL and Python churn analysis of 7,043 telecom customers that segments churn drivers across contract, tenure, and service dimensions and predicts at-risk customers with a logistic-regression model."
- **Meta:** Client: Self-directed project (IBM Telco dataset) · Timeline: 2025 · Role: Data Analyst · Team: Solo · Tools: SQLite, Python, scikit-learn, SciPy, pandas
- **Challenge:** "Month-to-month telecom customers churn far faster than contract customers, but marketing-led retention had stalled. The goal was to find the operational drivers of churn in the data and build a model that flags at-risk customers before they leave."
- **Approach:**
  - Loaded the 7,043-customer dataset into SQLite and wrote 8 SQL segmentation queries across contract, payment method, tenure, and service quality.
  - Validated contract type as a churn driver with a chi-square test (p < 5.8e-258).
  - Built a logistic-regression pipeline with one-hot encoding and an 80/20 split, reaching 0.86 ROC-AUC.
  - Identified fiber-without-tech-support (~49% churn) and month-to-month contracts (about 4x churn) as the highest-risk segments.
- **Impact:** 7,043 Customers · 0.86 ROC-AUC · 69% Precision · 58% Recall
- **Deliverables:**
  - 8 SQL segmentation queries
  - Chi-square statistical validation of churn drivers
  - Logistic-regression churn model at 0.86 ROC-AUC
  - Rendered analysis report with retention recommendations
- **Links:** View Repo · View Analysis (htmlpreview)

## 3. `/work/movie-profitability` — Movie Industry Profitability Analysis

- **Category:** Analytics Dashboard
- **Summary:** "An end-to-end analytics project on roughly 5,000 films from TMDB and IMDB: a 9-stage Python ETL pipeline feeding an investment-to-profitability funnel and a 5-page interactive Streamlit dashboard."
- **Meta:** Client: Self-directed project (TMDB + IMDB data) · Timeline: 2025 · Role: Data Analyst · Team: Solo · Tools: Python, pandas, Streamlit, Tableau, Plotly
- **Challenge:** "Studio profitability data is messy: split across TMDB and IMDB, full of JSON-encoded genres, missing budgets, and inconsistent formats. The goal was to clean and merge it into something that could answer where film capital is won and lost."
- **Approach:**
  - Merged TMDB (4,803) and IMDB (5,043) into a roughly 5,000-film master dataset with 42 features.
  - Built a 9-stage Python ETL pipeline (JSON parsing, financial cleaning, feature engineering) outputting 6 analysis-ready datasets.
  - Modeled an 8-stage investment-to-profitability funnel to locate the biggest value drop-offs.
  - Shipped a 5-page interactive Streamlit dashboard with a filterable movie browser.
- **Impact:** 5,000+ Films · 42 Features · 9 ETL Stages · 5 Dashboard Pages
- **Deliverables:**
  - 9-stage ETL pipeline and 6 clean datasets
  - 8-stage profitability funnel model
  - 5-page Streamlit dashboard (live)
  - Documented data limitations (2017 cutoff, marketing excluded)
- **Links:** View Repo · Live Dashboard (Streamlit)

## 4. `/work/fraud-detection` — Fraud Detection SQL Pipeline

- **Category:** Data Engineering
- **Summary:** "A PostgreSQL fraud-detection architecture on the synthetic PaySim dataset, using window functions to engineer transaction-velocity and destination-risk features for an interpretable, rule-based scoring engine."
- **Meta:** Client: Self-directed project (PaySim dataset) · Timeline: 2025 · Role: Data / SQL Analyst · Team: Solo · Tools: PostgreSQL, SQL Window Functions, PaySim
- **Challenge:** "Fraud detection fails when it over-alerts and buries analysts. The goal was to design an interpretable, rule-based pipeline whose every alert can be explained and audited, rather than a black-box model."
- **Approach:**
  - Designed a 7-layer pipeline from raw load through staging, feature engineering, scoring, and alerting.
  - Engineered velocity and destination-risk features using window functions (partitioned, time-ranged SUM, COUNT, and AVG OVER).
  - Built a transparent rule-based scoring engine (0 to 110) across 4 fraud patterns: velocity, structuring, balance anomalies, and behavioral sequences.
  - Added merchant-risk profiling, a daily investigation queue, and data-quality assertions.
- **Impact:** 9 SQL Build Files · 7 Pipeline Layers · 4 Fraud Patterns · 4 Scoring Rules
- **Deliverables:**
  - 9-file SQL build pipeline from schema to QA
  - Window-function feature views
  - Rule-based risk-scoring engine
  - Daily alert queue and merchant-risk profiles
- **Links:** View Repo

## 5. `/work/sla-optimization` — Customer Support SLA Optimization

- **Category:** Predictive Analytics
- **Summary:** "A cost-sensitive machine-learning model that predicts which support tickets will breach SLA and ranks them by financial risk, surfaced in a Streamlit decision dashboard."
- **Meta:** Client: Self-directed project · Timeline: 2025 · Role: Data Analyst · Team: Solo · Tools: Python, scikit-learn, Streamlit, Tableau, pandas
- **Challenge:** "Support teams miss SLAs predictably, not at random, and chasing every ticket equally wastes capacity. The goal was to predict which tickets will breach and rank them by financial risk so managers escalate only the ones that matter."
- **Approach:**
  - Engineered ticket-age, priority, and channel features from a support-ticket dataset.
  - Trained a cost-sensitive Random Forest with a threshold tuned to minimize expected financial loss rather than raw accuracy.
  - Built a two-tab Streamlit dashboard: a strategic-context view and a command center that ranks tickets by predicted breach probability.
  - Modeled a capacity-constrained escalation strategy that escalates only the top-ranked tickets each day.
- **Impact:** RF (Cost-Sensitive Model) · 4 SLA Priority Tiers · 2-Tab Decision Dashboard · Top-N Daily Triage Queue
- **Deliverables:**
  - Cost-sensitive Random Forest breach-prediction model
  - Feature engineering and financial-loss threshold optimization
  - Two-tab Streamlit decision dashboard
  - Capacity-constrained escalation simulation
- **Links:** View Repo

## 6. `/work/ba-process-design` — Business Analysis & Process Design Portfolio

- **Category:** Business Analysis
- **Summary:** "A set of BABOK v3 business-analysis artifacts (a Business Requirements Document, an As-Is / To-Be process design, BPMN swimlane maps, and use-case specifications) demonstrating end-to-end BA methodology on a representative operational scenario."
- **Meta:** Client: Methodology portfolio (self-directed) · Timeline: 2025 · Role: Business Analyst · Team: Solo · Tools: Lucidchart, BPMN, BABOK v3, MoSCoW
- **Challenge:** "Business analysis is judged on artifacts: can you scope requirements, map a process, and specify a solution clearly? This portfolio demonstrates that toolkit end to end on a representative operational-optimization scenario."
- **Approach:**
  - Authored a Business Requirements Document covering scope, stakeholder analysis, and functional and non-functional requirements.
  - Produced an As-Is / To-Be process design with gap analysis and exception handling.
  - Drew BPMN swimlane diagrams with decision gateways and message flows.
  - Wrote use-case specifications with actor-system flows and pre and post conditions.
- **Impact:** 4 Core BA Artifacts · BRD (Requirements Doc) · BPMN (Process Notation) · As-Is/To-Be (Gap Analysis)
- **Deliverables:**
  - Business Requirements Document (BRD)
  - Process Design Document (As-Is / To-Be)
  - BPMN swimlane process maps
  - Use-case specifications
- **Links:** View Repo

---

# ⚙️ Process (`/process`)

## Hero
- **Eyebrow:** `// PROCESS FRAMEWORK`
- **Headline:** "Systems designed for **execution.**"
- **Description:** "My process turns operational complexity into working systems: I diagnose the bottleneck, redesign the workflow, and prototype the tool that ships the fix."

## OpControlSystem hero visualization

> *Pending merge of PR #7 — once merged, the values below match the live page. Current production still shows the pre-PR values (Analyze/Design/Deploy/Improve + Visibility 92%/Efficiency 4.2×/Adoption 100%).*

### Stage rail (5 stages, hoverable)
- **01 Listen** — events: "Stakeholders interviewed / Pain points captured" · "Current workflow walked / Friction noted" · "Requirements gathered / Scope agreed"
- **02 Map** — events: "As-is drawn in BPMN / Swimlanes set" · "Handoffs documented / Gaps made visible" · "Process baselined / Shared with the team"
- **03 Diagnose** *(default active)* — events: "Bottleneck located / Constraint named" · "Impact quantified / Cost measured" · "Root cause traced / Evidence logged"
- **04 Prototype** — events: "To-be redesigned / New flow defined" · "Tool prototyped / Build shipped" · "Output validated / Logic checked"
- **05 Hand Off** — events: "Change documented / Plain language" · "User trained / UAT passed" · "Ownership transferred / Fix sticks"

### Metric rail
- **Modules:** 27
- **Churn AUC:** 0.86
- **Records:** 5K+

### Header
- **Eyebrow:** OPERATIONAL CONTROL SYSTEM
- **Status:** Live

## Execution Model (5 phases)

- **Eyebrow:** `// EXECUTION MODEL`

### 01 · Stakeholder discovery · Listen
"I sit with the people who live the process, walk the current workflow end to end, and note exactly where they wince. The goal is the real problem, not just the one everyone complains about."
**Tags:** Stakeholder Interviews · Requirements Elicitation · Current-State Walkthrough

### 02 · The as-is in BPMN · Map
"I draw the current state in BPMN with swimlanes, gateways, and handoffs, so the bottleneck is visible to everyone before anyone proposes a fix."
**Tags:** BPMN 2.0 · Swimlane Mapping · Process Documentation

### 03 · Quantify the bottleneck · Diagnose
"I find where time, cost, quality, or volume is leaking and put a number on it, so the redesign targets the real constraint instead of a symptom."
**Tags:** Bottleneck Analysis · Root Cause Analysis · Gap Analysis

### 04 · Build the fix · Prototype
"I redesign the to-be workflow and, when the engineering queue can't move fast enough, prototype the tool that delivers it using internal-tools platforms and AI-accelerated builds."
**Tags:** To-Be Design · Rapid Prototyping · Internal Tooling

### 05 · Document and transition · Hand Off
"I document the change in plain language, train the user, and transition ownership, so the fix sticks after I step away."
**Tags:** Documentation · User Acceptance Testing · Change Management

## Recent Results

- **Eyebrow:** `// RECENT RESULTS`
- **27** — Module platform delivered (FIIT Co.)
- **0.86** — Churn model ROC-AUC (Telco)
- **5,000+** — Records analyzed (Movies)
- **CTA:** "See these phases applied — View Work" → /work

---

# 💬 Contact (`/contact`)

## Hero
- **Eyebrow:** GET IN TOUCH
- **Title:** "Let's diagnose the problem and ship the fix."
- **Intro:** "Whether you're hiring for an operations or analyst role, untangling a workflow, or scoping an internal tool, I'm open to conversations that move things from ambiguity to action."

## Channels (4 cards)
| Label | Value |
|---|---|
| Email | ezieshie@gmail.com |
| LinkedIn | linkedin.com/in/david-ezieshi |
| GitHub | github.com/ezieshie-stack |
| Availability | Toronto-based, eligible to work in Canada. Open to operations, process, and business analyst roles, plus short-term project work. |

## Form
- **Form heading:** "Send a Message"
- **Fallback error message** (when Resend isn't configured): "Email service isn't configured yet. Please email ezieshie@gmail.com directly."

## Alt CTAs (bottom of page)
- **Lead-in:** "Prefer to connect another way?"
- View My LinkedIn · Email Me

---

# 📄 Resume (`/resume`)

> Still using placeholder copy in `content.ts` — body comes from the PDF in `public/resume.pdf` via the modal viewer. The text below is what currently renders if/where this object is consumed.

- **Eyebrow:** MY RESUME
- **Title:** "[Resume headline placeholder line 1] / [Resume headline placeholder line 2]"
- **Intro:** "[Resume intro paragraph placeholder.]"
- **What you'll find (heading):** WHAT YOU'LL FIND
  - "[Resume highlight one placeholder.]"
  - "[Resume highlight two placeholder.]"
  - "[Resume highlight three placeholder.]"
- **Areas of Expertise:** Process Optimization · Data Analysis & Reporting · Systems Design · Workflow Automation · Business Analysis · Stakeholder Management
- **Download CTA:** Download Resume
- **View CTA:** View Resume Online

---

# 📰 Insights (`/insights`) — currently hidden from nav

> The article bodies live in Convex (not yet authored), so the detail pages currently dead-end on "Article body coming soon." Hidden from nav until real posts exist.

- **Eyebrow:** `// INSIGHTS`
- **Title:** "Thinking through systems, workflows, and operational clarity."
- **Intro:** "Notes on business analysis, process design, operational systems, reporting infrastructure, and the practical work of improving how teams execute."

## Featured insight
- **Pill:** Featured Insight
- **Title:** "Operational systems are only valuable when people can actually use them."
- **Body:** "Good systems do more than organize information. They reduce friction, clarify ownership, improve visibility, and help teams make better decisions faster."
- **CTA:** "Read Insight" → /insights/operational-systems

## Filters
All · Process Design · Business Analysis · Analytics · Systems

## Article placeholders (3)
1. **Why operational clarity starts with better workflows** — "A breakdown of how process visibility, ownership, and documentation improve team execution." · Process Design · Mar 2026 · 5 min read
2. **Turning requirements into systems teams can actually use** — "How strong requirements gathering connects business needs to practical execution." · Business Analysis · Mar 2026 · 6 min read
3. **Dashboards are only useful when they support decisions** — "Why reporting systems should focus on action, not just visualization." · Analytics · Feb 2026 · 4 min read

---

# 🚫 404 page (`not-found`)

- **Code:** 404
- **Title:** Page Not Found
- **Description:** "The page you're looking for doesn't exist or has been moved."
- **CTA:** "Go Back Home" → /

---

# 📋 Likely review focus areas

When comparing against your résumé and LinkedIn, the spots most worth a careful look:

1. **Hero sub-tagline** — "Early-career analyst. Toronto." reads honestly but if LinkedIn says something different, align.
2. **About page hero body + Experience timeline bullets** — these were drawn directly from your résumé; if you update the résumé tone (e.g., for RBC application), update here too.
3. **About stats row** — "ECBA / 3.8 GPA / 2 Live Apps / 5,000+ Records" — these stay accurate as you ship more.
4. **Project case studies' Timelines** — five say `2025` as an estimate; replace with real months/quarters if you remember.
5. **Footer Availability + Contact Availability** — both say "Toronto-based, eligible to work in Canada." If you decide to spell out *citizen / PR / work permit*, change both at once for consistency.
6. **Currently Exploring** — should match what's *actually* on your skill-roadmap right now (Advanced SQL · RPA · ServiceNow · BI Dashboards).
7. **Resume page placeholders** — never replaced. Either fill in or remove the unused fields.
8. **Insights articles** — currently hidden; if you decide to write the three drafted titles, content needs to be written.

---

*Generated from the current state of the site source as of this commit. Save your edits to this doc and we'll sync the changes back to the relevant source files in one pass.*
