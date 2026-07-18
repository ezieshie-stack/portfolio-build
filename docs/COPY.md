# Portfolio Copy

Every user-facing string in the site, grouped by page. Edit here; changes get propagated back to source by Claude.

---

## Global · Layout / Root metadata
<!-- source: src/app/layout.tsx -->
- title: "David Ezieshi — Business Analyst"
- description:
> "Business Analyst in Toronto. I take business problems through the full lifecycle, requirements, process and data design, delivery, and live solution support."

---

## Global · Nav
<!-- source: src/components/Nav.tsx -->
<!-- source: src/lib/content.ts (site.brand, site.navLinks, site.cta) -->
- Brand initials tile: "DE"
- Brand name: "David Ezieshi"
- Brand role: "Business Analyst"
- Nav links (in order): Home / About / Work / Process / Insights / Contact
- CTA button: "Let's Connect" (href: /contact)
- Mobile menu — burger aria-label: "Open menu" / "Close menu"

---

## Global · Footer
<!-- source: src/components/PortfolioFooter.tsx -->
### CTA band
- Eyebrow: "Working on something I can help with?"
- H2: "Let's talk / through it."
- Body:
> "Open to business analyst roles in Toronto. I take initiatives from the first stakeholder interview through to the system people use every day."
- Primary button: "Let's Connect"
- Secondary button: "View Resume"

### Brand column
- Name: "David Ezieshi"
- Role: "Business Analyst"
- Blurb:
> "Full-lifecycle business analyst. Requirements, modeling, delivery, and live operation."

### Navigation column
- Heading: "Navigation"
- Links: Home / About / Work / Process / Insights / Contact

### Resources column
- Heading: "Resources"
- Links: Resume / LinkedIn / Email / GitHub

### Availability column
- Heading: "Availability"
- Body:
> "Toronto-based, eligible to work in Canada. Open to business analyst roles."
- Link: "Get In Touch"

### Bottom bar
- Copyright: "© {YEAR} David Ezieshi. All rights reserved."
- Right: "Built with clarity and purpose."

---

## Home (/)
<!-- source: src/app/page.tsx (composes Hero, CoreCapabilities, AboutPreview, ToolsCarousel, SkillsCarousel, MyApproach, FeaturedProjectsSlider, CurrentlyExploring) -->

### Hero
<!-- source: src/components/home/Hero.tsx -->
- Badge: "Business Analyst · Toronto, Canada"
- H1: "I work the full lifecycle, from requirements *to live operation.*"
- Subhead:
> "My current engagement is with FIIT Co. I led the analyst team through requirements, modeling, and delivery on two production systems. After the team rolled off, I was retained as the sole administrator. I now operate and improve the live platform myself."
- Primary CTA: "View My Work"
- Secondary CTA: "Let's Connect"
- Social row: LinkedIn / Email / Resume / GitHub

### Core Capabilities
<!-- source: src/components/home/CoreCapabilities.tsx -->
- Eyebrow: "Core Capabilities"
- Cards (label per card):
  - Requirements Elicitation
  - Process & Data Modeling
  - BPMN Diagramming
  - User Acceptance Testing
  - Solution Delivery
  - Platform Administration

### About preview card
<!-- source: src/components/home/AboutPreview.tsx -->
- Eyebrow: "About"
- H2: "I work the requirement, model it, deliver it, and run it live."
- Body:
> "I'm David Ezieshi, a business analyst in Toronto. I work the requirements lifecycle end to end. I sit with stakeholders and write down what's actually needed. I model the process and the data behind it. I validate the build against the business need through UAT. I deliver it into production, and I stay accountable for whether it holds in real use."
- Link: "More About Me"
- Points:
  - Requirements — > "I sit with stakeholders, walk the current process, and write requirements that are testable, traceable, and tied to the business need."
  - Modeling — > "I model the process in BPMN and the data underneath. The design and the system line up before anything gets built."
  - Delivery & Operation — > "I take the work from design through UAT into production. I'm accountable for whether it works once it's live."

### Tools carousel
<!-- source: src/components/home/ToolsCarousel.tsx -->
- Title: "Tools & Technologies"
- Items: Lucidchart / Visio, Miro / FigJam, Figma, Excel / Google Sheets, PostgreSQL, Python / pandas, R, Streamlit, Tableau, Power BI / Looker, Retool, Zapier / Make, UiPath, Power Automate, ServiceNow, Jira · Notion · Cursor

### Skills carousel
<!-- source: src/components/home/SkillsCarousel.tsx -->
- Title: "Skills & Practice"
- Items: Requirements Elicitation, BRD & FRD Authoring, As-Is / To-Be Process Modeling, BPMN 2.0, Data Modeling, Stakeholder Engagement, User Acceptance Testing, Process Improvement, Root Cause Analysis, SQL Analysis, Gap Analysis, Solution Validation, Standard Operating Procedures, Continuous Improvement, ETL Pipeline Design, Workflow Automation, Platform Administration

### My Approach
<!-- source: src/components/home/MyApproach.tsx -->
- Eyebrow: "My Approach"
- H2: "What I hold to on every engagement."
- Sub:
> "Four things I work by. They're the difference between analysis that looks finished and a solution that holds up in production."
- Principle 01 · Claim: "The stated problem is rarely the real one."
  > "I dig past the first complaint to what's actually wrong. Redesigning around the wrong problem is the most expensive mistake an analyst can make."
- Principle 02 · Claim: "You learn a process from the people who run it."
  > "The real workflow isn't in the documentation. It's in the heads of the people doing the work every day. That's where I start, not with assumptions."
- Principle 03 · Claim: "Data modeling matters as much as process modeling."
  > "Most problems that look like broken workflows are broken data underneath. I model both. Fixing the steps without fixing the data just moves the problem."
- Principle 04 · Claim: "A requirement isn't done until it's testable."
  > "If you can't check whether the solution met it, it wasn't a requirement. It was a wish. I write requirements so anyone can tell, later, whether the work delivered."

### Featured Projects slider
<!-- source: src/components/home/FeaturedProjectsSlider.tsx -->
- Section title: "Featured Projects"
- Slide 1 — Category: "Operations Platform" · Title: "FIIT Co. Operations Platform"
  > "A two-application operations platform for a fitness business, built on Next.js and Convex. I owned it through the full lifecycle, from requirements through delivery and into live administration. The platform spans 27 modules and a 32-table data model across class programming, instructor scheduling, and a self-service CMS."
  - Meta: "Full lifecycle", "Live in production"
  - Metric labels: Modules / Data Tables / Backend Services / In Production
  - Highlights:
    - "Led a six-person analyst team through four scopes from elicitation to delivery"
    - "Authored the engagement's BRD, PRD, and process design"
    - "Configured 27 modules and a 32-table data model to the requirements I wrote"
    - "Retained as sole administrator after the team rolled off"
  - Built With: Next.js, Convex, TypeScript, TipTap
  - Buttons: "View Case Study" / "Live Site"
- Slide 2 — Category: "Churn Analytics" · Title: "Telco Customer Churn Analysis"
  > "A churn analysis of 7,043 telecom customers. SQL segmentation across contract, tenure, and service tiers, followed by a logistic-regression model to predict who leaves and why."
  - Meta: "IBM public dataset", "Self-directed"
  - Metric labels: Customers / Model ROC-AUC / Churn Precision / Churn Recall
  - Highlights:
    - "Segmented 7,043 customers with 8 SQL queries across contract, tenure, and service tiers"
    - "Chi-square confirmed contract type as a real churn driver"
    - "Logistic regression at 0.86 ROC-AUC, 69% precision on flagged churners"
    - "Identified fiber-without-tech-support (~49% churn) as the highest-risk segment"
  - Built With: SQLite, Python, scikit-learn, SciPy
  - Buttons: "View Repo" / "View Analysis"
- Slide 3 — Category: "Analytics Dashboard" · Title: "Movie Industry Profitability Analysis"
  > "A profitability analysis of about 5,000 films from TMDB and IMDB. A 9-stage Python pipeline cleans and merges the data. The data feeds an investment-to-profitability model and drives a 5-page interactive Streamlit dashboard."
  - Meta: "TMDB + IMDB", "Live dashboard"
  - Metric labels: Films / Features Engineered / ETL Stages / Dashboard Pages
  - Highlights:
    - "Merged TMDB (4,803) and IMDB (5,043) into one ~5,000-film dataset with 42 features"
    - "9-stage Python pipeline outputting 6 analysis-ready datasets"
    - "8-stage profitability model tracing films from budget to return"
    - "5-page Streamlit dashboard with a filterable browser"
  - Built With: Python, pandas, Streamlit, Tableau
  - Buttons: "View Repo" / "Live Dashboard"
- Shared card labels: "Key Highlights", "Project Outcomes", "Built With"
- Bottom button: "View All Projects"

### Currently Exploring
<!-- source: src/components/home/CurrentlyExploring.tsx -->
- Eyebrow: "Currently Exploring"
- Rows (label + status pill "In progress"):
  - Advanced SQL & Window Functions
  - RPA with UiPath & Power Automate
  - ServiceNow Workflows
  - BI Dashboards (Power BI / Tableau)
  - CTFL (ISTQB Foundation)

---

## About (/about)
<!-- source: src/app/about/page.tsx -->
### Metadata
- title: "About | David Ezieshi"

### Hero
- Eyebrow: "About"
- H1: "Requirements through delivery, and the live operation after."
- Body:
> "I'm David Ezieshi, a business analyst in Toronto. I work the requirements lifecycle end to end. I sit with stakeholders, write what's actually needed, model the process and the data behind it, and validate through UAT before anything gets shipped. After delivery I stay on. On my current engagement with FIIT Co., I led the analyst team through four scopes for a client, and I was kept on as the sole administrator after the team rolled off."
- Primary CTA: "Let's Connect"
- Secondary CTA: "View My Work"

### Stat row
- ECBA — "IIBA Certified"
- 3.81 — "GPA · Dean's List"
- 2 — "Production Systems Delivered"
- 6 — "Analyst Team Led"

### Experience
- Eyebrow: "Experience"
- H2: "Four roles across business analysis, retail, financial services, and broadcast."
- Blurb:
> "A live BA engagement, a luxury retail floor, a financial services compliance review, and a daily news broadcast. Different work each time. The same instinct: read the process and the people in it, then make it run."
- Feb 2026 – Present · "Business Analyst & Platform Administrator · FIIT Co."
  > "I led the analyst team on a two-application Next.js and Convex platform for an industry partner through my George Brown placement. The platform runs as an internal class-management system and a public site. I authored the engagement's BRD, PRD, and process design, then turned them into the working configuration. That meant the forms, workflows, permissions, and CMS. After the team rolled off, I was retained as the sole administrator. I now operate and improve the platform in production."
- Apr 2024 – Present · "Brand Ambassador · Ralph Lauren"
  > "I assess what each client needs and build the complete look around it. The numbers carry the result. I hit 184% of my sales goal and $815 in sales per hour against a $450 target, among the top in the store."
- Dec 2023 – Mar 2024 · "Sales Consultant · Canadian Tire Financial Services"
  > "I reviewed credit-card applications under compliance validation. I identified a recurring pattern of incomplete and incorrect submissions and escalated it for follow-up."
- Apr 2021 – Aug 2022 · "Reporter & Programme Coordinator · Kaftan TV"
  > "I ran the daily news segment to a hard broadcast deadline. I coordinated reporters and production handoffs across the technical and editorial crews to keep it on air."

### What Drives Me
- Eyebrow: "What Drives Me"
- "Diagnose before designing" — > "I map what's actually happening before I propose a change. Redesigning around the wrong problem costs more than taking the time to look."
- "Own it through operation" — > "I carry a problem from the first interview to the live system, and I stay accountable for whether it holds up. Being retained to operate what my team delivered is what I'm proudest of, because the work held in real use."
- "Write it plainly" — > "I document so the people who run the system can understand it. Plain language is part of the deliverable."
- "Useful in both rooms" — > "I translate between the business side and the technical side. I know enough of each language to be credible in both."

### Core Strengths
- Eyebrow: "Core Strengths"
- Rows (numbered 01–10):
  - Requirements Elicitation
  - BRD / FRD Authoring
  - BPMN Process Modeling
  - Data Modeling
  - SQL Analysis
  - User Acceptance Testing
  - Power BI / Tableau
  - Workflow Configuration
  - Stakeholder Engagement
  - Platform Administration

### Education & Certifications
- Eyebrow: "Education & Certifications"
- H2: "Grounded in business analysis and systems."
- Entries:
  - Certification, 2026 · "ECBA, Entry Certificate in Business Analysis" — "IIBA (International Institute of Business Analysis)"
  - 2025 – 2026 · "PG Cert., Information Systems & Business Analysis" — "George Brown College. Dean's List, 3.81 / 4"
  - 2023 – 2024 · "PG Cert., Marketing Management & Digital Media" — "George Brown College. Dean's List"
  - 2017 – 2021 · "B.Sc., Mass Communication" — "Mountain Top University, Nigeria. Second Class Upper"

---

## Work index (/work)
<!-- source: src/app/work/page.tsx + src/components/work/WorkPageContent.tsx -->
### Metadata
- title: "Work | David Ezieshi"

### Hero
- Eyebrow: "Selected Work"
- H1: "A live operations platform, four data projects, and the analysis behind them."
- Intro:
> "Each project started with a question no one had framed yet, or a process that needed to actually work. Filter by type, or open one to see what I delivered."

### Featured Case Study card
- Pill: "Featured Case Study"
- H2: "FIIT Co. Operations Platform"
- Meta: "Business Analysis · Solution Delivery · Platform Administration"
- Description:
> "A two-application operations platform for a fitness business, owned through the full lifecycle on Next.js and Convex. It runs as an internal class-management system across 27 modules, paired with a public site and a self-service CMS. I led the analyst team that built it. After the team rolled off, I was retained to administer it."
- Buttons: "View Case Study" / "Live Site"
- Metrics: "27 Modules · Internal + CMS", "32 Tables · Convex data model", "Live · In Production"

### Filter pills
- All / Analytics / Business Analysis / Data Engineering

### Work cards
- "Data Analytics" · "Telco Customer Churn Analysis" — > "7,043 telecom customers segmented with 8 SQL queries and predicted with a logistic-regression model at 0.86 ROC-AUC." — Tags: SQL, Logistic Regression, Churn — CTA: "View Case Study"
- "Analytics Dashboard" · "Movie Industry Profitability" — > "A 9-stage Python pipeline on ~5,000 films feeding a profitability model and a live 5-page Streamlit dashboard." — Tags: ETL, Python, Streamlit
- "Data Engineering" · "Fraud Detection SQL Pipeline" — > "A 7-layer PostgreSQL pipeline using window functions to build velocity and risk features, feeding a rule-based scoring engine." — Tags: PostgreSQL, Window Functions, Risk Scoring
- "Predictive Analytics" · "Customer Support SLA Optimization" — > "A cost-sensitive Random Forest predicting SLA breaches and ranking tickets by financial risk in a Streamlit dashboard." — Tags: Machine Learning, Streamlit, Python
- "Business Analysis" · "Business Analysis & Process Design" — > "A full BABOK v3 set. BRD, as-is and to-be process design, BPMN swimlane maps, and use-case specifications." — Tags: BABOK v3, BPMN, Requirements
- "RPA · Automation" · "UiPath Supplier Price Monitor" — > "A UiPath bot that checks supplier prices on a schedule, flags anything past a ±5% threshold, and drops an Excel alert. Runs the seven-supplier list in under ten minutes vs. 60–90 manual." — Tags: UiPath, RPA, Excel

### How I Approach Work
- Eyebrow: "How I Approach Work"
- H2: "Every project moves through the same five stages."
- Intro:
> "Different work each time. Operations, analytics, documentation. The same path from a fuzzy ask to a result I can measure."
- Pipeline nodes:
  - Requirements — "Define what's actually needed"
  - Modeling — "Map the process and the data"
  - Build — "Configure or deliver the solution"
  - Validate — "Test against the need through UAT"
  - Operate — "Run it live and measure what changed"

---

## Process (/process)
<!-- source: src/app/process/page.tsx -->
### Metadata
- title: "Process | David Ezieshi"

### Hero
- Eyebrow: "Process Framework"
- H1: "Five phases from requirement to *live operation.*"
- Intro:
> "I run the same lifecycle on every engagement. Elicit what's needed. Model the process and the data. Deliver the solution. Operate it through evaluation. Click through the phases to see what happens at each one."

### Lifecycle Control ring (OpControlSystem)
<!-- source: src/components/process/OpControlSystem.tsx -->
- Header label: "Lifecycle Control"
- Status: "Live"
- Format: "Phase {n} of 4"
- Phase 01 · Analyze — Timeline: "Stakeholders Mapped — Inputs gathered", "Current-State Documented — As-is captured", "Gaps Quantified — Bottlenecks identified"
- Phase 02 · Design — Timeline: "Requirements Authored — BRD signed off", "Process & Data Modeled — BPMN + ERD", "Acceptance Criteria Set — Test conditions defined"
- Phase 03 · Deliver — Timeline: "Solution Configured — Built to spec", "UAT Completed — Validated against need", "System in Production — Live deployment"
- Phase 04 · Operate — Timeline: "Live Performance Monitored — Usage tracked", "Issues Resolved — Defects closed", "Improvements Shipped — Continuous evaluation"
- Per-phase metrics: Visibility / Throughput / Adoption

### Execution Model
- Eyebrow: "Execution Model"
- 01 · Stakeholder discovery · Elicit
  > "I interview the people who run the process and walk it end to end. The objective is the underlying problem, not the surface complaint."
  - Tags: Stakeholder Interviews, Requirements Elicitation, Current-State Walkthrough
- 02 · Process and data · Model
  > "I model the current state in BPMN and the data behind it. The picture lines up before any change is proposed."
  - Tags: BPMN 2.0, Data Modeling, As-Is Mapping
- 03 · To-be and requirements · Design
  > "I define the to-be process, the data structure, and the requirements. Each one is testable and tied to the business need."
  - Tags: To-Be Design, BRD / FRD, Acceptance Criteria
- 04 · Solution into production · Deliver
  > "I take the design through UAT and into production, with the documentation that makes it operable."
  - Tags: User Acceptance Testing, Solution Delivery, Documentation
- 05 · Live evaluation · Operate
  > "I administer the live system, evaluate performance against the requirement, and improve what doesn't hold up."
  - Tags: Platform Administration, Performance Evaluation, Continuous Improvement

### Recent Results
- Eyebrow: "Recent Results"
- 27 — "Modules in production (FIIT Co.)"
- 0.86 — "Churn model ROC-AUC (Telco)"
- 5,000+ — "Records analyzed (Movies)"
- Link: "See these phases applied. View Work."

---

## Contact (/contact)
<!-- source: src/app/contact/page.tsx + src/components/contact/ContactPageContent.tsx -->
### Metadata
- title: "Contact | David Ezieshi"

### Hero
- Eyebrow: "Get In Touch"
- H1: "Tell me what you're working on."
- Intro:
> "Hiring for a business analyst role, scoping a workflow problem, or thinking through an internal solution? Send me the details. I'll respond within a day."

### Channels
- Email — "ezieshie@gmail.com"
- LinkedIn — "linkedin.com/in/david-ezieshi"
- GitHub — "github.com/ezieshie-stack"
- Availability — > "Open to business analyst roles in Toronto. Eligible to work in Canada. Available for contract and full-time engagements."

### Contact form
- Form title: "Send a Message"
- Field labels / placeholders:
  - Name / "Your name"
  - Email / "you@email.com"
  - Subject / "What's this about?"
  - Message / "Tell me about the workflow or the role…"
- Submit button: "Send Message" (after submit: "Message Sent ✓")

### Alt channels
- Mono heading: "Prefer another channel?"
- Buttons: "View My LinkedIn" / "Email Me"

---

## Resume (/resume)
<!-- source: src/app/resume/page.tsx + src/lib/content.ts (resume) -->
### Metadata
- title: "Resume | Portfolio"

### Hero
- Eyebrow: "MY RESUME"
- H1: "My resume."
- Intro:
> "A snapshot of how I work, the kinds of problems I solve, and where I've delivered. The full PDF is below."

### What you'll find
- Eyebrow: "WHAT YOU'LL FIND"
- "End-to-end business analysis lifecycle, from requirements through delivery, UAT, and live solution support."
- "Real client engagement: a two-application FIIT Co. platform delivered through George Brown Work-Integrated Learning."
- "Analytical projects in SQL, Python, and Streamlit covering churn prediction, fraud detection, and SLA optimization."

### Areas of expertise
- Eyebrow: "AREAS OF EXPERTISE"
- Chips: Requirements Elicitation / Process Design & BPMN / Solution Delivery & UAT / Stakeholder Management / Business Analysis Documentation / Data Analysis & Reporting

### CTAs
- Download button: "Download Resume"
- View button: "View Resume Online"
- Empty state placeholder: "[Resume Preview Placeholder]"

---

## Insights hub (/insights)
<!-- source: src/app/insights/page.tsx + src/components/insights/InsightsPageContent.tsx -->
### Metadata
- title: "Insights | David Ezieshi"

### Hero
- Eyebrow: "The Notebook"
- H1: "A working journal, kept in the open."
- Intro:
> "Some of this is about the work. A lot of it isn't. It's where I write down what I'm figuring out, what a hard year taught me, and the things I want to remember. I write when something's worth keeping, so entries come when they come."

### Featured entry card
<!-- source: src/data/insights-articles.ts (FEATURED) -->
- Badge: "Latest entry"
- Entry tag: "Personal"
- H2: "Familiar Was Never the Point"
- Sub:
> "I almost didn't go to my convocation. I'd graduated before, so another few hours in a hard chair felt like nothing I hadn't sat through already. I was wrong about what I needed to hear."
- Meta: "Jun 2026 · 5 min read"
- CTA: "Read the entry"

### Pull quotes (rotating carousel on entry card)
- > "Life is going to beat you up a bit. Some days it will break your heart."
- > "Hardship is guaranteed, but so is survival. And the thing that gets you through is joy."
- > "You have to insist on it. Refuse to let a bad week decide how you feel on the inside."

### Empty-state note
- > "One entry so far. This notebook is just getting started, more will land here as I write them."

### Reader modal chrome
- Back link: "All Insights"
- Foot: "Written by David Ezieshi"
- Foot button: "Back to Insights"
- Close button aria-label: "Close"

### Featured entry body (long-form)
> "I've been sitting with my convocation for a few days now, turning it over."
> "Not the ceremony itself, the gown, the walk, the names read out one after another. I keep coming back to something smaller and stranger. I almost didn't go at all."
> "I'd graduated before, so a convocation wasn't some once-in-a-lifetime thing for me. When this one came around, part of me had quietly filed it under been there. Another few hours in a hard chair, nothing I hadn't sat through before. Skip it, I told myself. You won't be missing anything."
> "But that was never really about the chairs."
> "The truth I wasn't saying out loud was harder. This certificate had meant starting over in a field I knew nothing about, at a point in life when I was supposed to have arrived already. Some days it felt less like moving forward and more like circling back to the beginning. Calling the ceremony boring was easier than sitting with the real question underneath it. Does this one even count, or am I just doing the same thing twice?"
> "My mom didn't see it that way. She kept asking for the date, and she kept nudging me to go. So did my friends. They treated it like it mattered, even while I was quietly insisting to myself that it didn't. Eventually I gave in, less because I'd changed my mind and more because saying no again was more effort than just showing up."
> "So there I was. A dark room, a gown, hundreds of us, and me half braced for a few forgettable hours."
- Image caption: "T405, Information Systems Business Analysis. The reason I was there."
> "Then Chancellor Geoff Smith began to speak, and it stopped feeling like a crowd. It started to feel like he was talking to me."
- Image caption: "Chancellor Geoff Smith, George Brown College convocation."
- Blockquote: > "Life is going to beat you up a bit. It beats everyone up a bit. Some days it will break your heart."
> "That got me, because he wasn't describing a stranger. He was describing the last stretch of my life. The job hunt in a country that wasn't home yet, and the rejection email that kept me asking what the point was. The textbooks I cracked open at midnight after a shift had already emptied me out. The loneliness of building a whole new life from scratch, an ocean away from everyone who knew my name before I got here."
> "Here was someone who had clearly made it, standing up there and saying the heartbreak was part of the deal, that struggling didn't mean I was failing. Something I'd been carrying in secret set itself down. Gritty, resilient, determined. I'd always heard those as resume words. He made them sound like what they actually are, which is the tools you survive with."
> "But he didn't leave us in the hard part. He turned it around."
- Blockquote: > "Hardship is guaranteed, but so is survival. And the thing that gets you through the dark stretches is joy."
> "Not the kind that lands in your lap, though, because that kind doesn't come. You have to dig for it, because it hides under the dull routine of ordinary days. You have to go looking, and train your eyes to catch the good even when the day has given you no reason to. And you have to insist on it. Claim it, and refuse to let a bad week decide how you feel on the inside."
> "Seventy years of living, and he boiled it down to one line. Finding that joy was the whole point."
> "That was the moment it stopped being a repeat ceremony to me. The thing I'd been too scared to say, the quiet does this count, he answered without knowing he was answering it. The starting over, the being a beginner again, the doing it the hard way when I didn't have to. It wasn't a detour. It counted. I counted. And so did every difficult midnight it took to get into that chair."
> "I came in convinced I already knew everything the day had to offer. That was the whole reason I almost stayed home. And I was right about one thing. Nothing new happened. The gown was familiar, the ceremony was familiar, and I'd done all of it before. But familiar was never the point. The point was being in that exact room, on that exact day, hearing exactly that. If I had talked myself out of going like I nearly did, I'd have been right that I wouldn't miss anything new, and completely wrong about what I needed."
> "So now, with the certificate in hand, I'm trying to hold onto the thing I almost skipped town to avoid hearing. It would be easy to start chasing the next milestone, the promotion, the raise, the better title. But the late nights and the shifts and the long road here weren't just obstacles to get past. They were the story, and they counted."
> "There is joy right here, right now, in this gown I almost didn't wear. And there will be more of it every day going forward, if I'm stubborn enough to look for it. This certificate proves I can survive the grind. Now I want to spend that same stubbornness on something better. A life with real meaning in it, some grit, and a flat refusal to let go of joy."
- Image caption: "Convocation day. George Brown College, June 2026."
> "Even on the days I'd rather stay home."

---

## Insight detail (/insights/[slug])
<!-- source: src/app/insights/[slug]/page.tsx -->
- Metadata title (matched): "{title} | Insights" — (unmatched): "Insight | Portfolio"
- Back link: "← All Insights"
- Category label format: "// {CATEGORY UPPERCASED}"
- Placeholder body when article not yet written:
> "Article body coming soon. Once published in Convex, this page will render the full markdown content."

### Insight [slug] error state
<!-- source: src/app/insights/[slug]/error.tsx -->
- Eyebrow: "Couldn't load this insight"
- H1: "This article failed to load."
- Body: > "The article exists but something went wrong fetching it. The rest of the site is unaffected."
- Button: "Try again"
- Link: "All insights"

### Insight [slug] not found
<!-- source: src/app/insights/[slug]/not-found.tsx -->
- Eyebrow: "Article not found"
- H1: "Can't find that insight."
- Body: > "Either the slug changed or the article was never published. The rest of the writing is still here."
- Link: "See all insights"

---

## Work · FIIT Co. Operations Platform (/work/fiitco)
<!-- source: src/app/work/fiitco/page.tsx -->
### Metadata
- title: "FIIT Co. Operations Platform | David Ezieshi"
- description: "The BA work behind a two-application fitness operations platform delivered on Next.js and Convex."

### Back link
- "Back to All Projects"

### Hero
- Badge: "Operations Platform"
- H1: "The BA work behind FIIT Co."
- Intro:
> "A fitness studio running its operations on manual, disconnected steps. This is the business analysis that turned that into two connected production systems, from the problem framing through to the modeled solution."

### The analyst's brief
- Eyebrow: "The analyst's brief"
- Sub: > "Before the models, the framing: why the engagement existed, the question it set out to answer, and the payoff of solving it."
- "Why it matters" — > "Class programming, scheduling, and the public site ran on manual, disconnected steps. Double-bookings were routine and web content went stale, costing staff hours and eroding member trust at the moment of booking."
- "The question" — > "Which operational workflows cause the most friction, and what would a single connected system have to do to eliminate double-bookings and keep the public site current without manual effort?"
- "Business benefit" — > "Two connected systems replacing the manual steps: conflict-checked scheduling that blocks double-bookings, same-day content publishing, and one shared data model as the single source of truth across all 27 modules."
- Data source — > "Stakeholder interviews and current-state walkthroughs with owner, front desk, and trainers. Elicited requirements documented in a Charter, BRD, and PRD, and traced through to closure."
- Analysis type — > "Diagnostic then design. As-is process mapping located the friction; to-be BPMN models, a data model, business rules, and a user-story backlog defined the solution."
- Scope & caveats — > "27 modules across a staff operations app and a public customer site. Payments and third-party integrations were scoped as dependencies, not built in this engagement."
- Tooling — > "BABOK v3 practice, BPMN 2.0 for process models, Given/When/Then user stories, and a 32-table logical model. Delivered on Next.js and Convex, validated through UAT."

### The live product
- Eyebrow: "The live product"
- Sub: "Two applications, shipped to production and still running."
- Card badge: "LIVE"
- Card 1: "Public marketing site" · "fiitco.ca" · "Customer-facing site: live schedule, trainer profiles, blog, referrals."
- Card 2: "Class Management Tool" · "fiit-ops-kappa.vercel.app" · "Staff operations app: scheduling, attendance, lesson library, reporting."
- Card CTA: "Visit"

### Explore the artifacts
- Eyebrow: "Explore the artifacts"
- Sub: "Eight deliverables, each as its own interactive surface."
- A1 "Process Models" — "As-is vs to-be, five core workflows." — meta "5 processes"
- A2 "Data & Scope Model" — "The scope boundary and the entity model." — meta "24 entities"
- A3 "Business Rules" — "The rules and the booking decision table." — meta "11 rules"
- A4 "Documents" — "Charter, BRD, PDD and UAT in a reading mode." — meta "9 documents"
- A5 "Stakeholder & RACI" — "Power and interest grid, plus the RACI matrix." — meta "8 stakeholders"
- A6 "Traceability" — "Objective to requirement to closure signal." — meta "8 requirements"
- A7 "RAID Log" — "Risks, assumptions, issues, dependencies." — meta "5 categories"
- A8 "Diagrams" — "Architecture, ERD, data flow, use case and more." — meta "11 diagrams"
- Card CTA: "Open"

### Findings, and what to do about them
- Eyebrow: "Findings, and what to do about them"
- Sub: > "Each finding came out of the as-is analysis. Each recommendation is the to-be design decision it drove, now traceable through the models on the following pages."
- Finding 1: > "Scheduling had no conflict check. A trainer or room could be booked twice for the same slot, and the clash surfaced only when someone noticed, so double-bookings were routine."
- Rec 1 bold: "A conflict gateway in the to-be booking flow."
  > "The redesigned process checks availability at save and blocks any overlap before it is committed, so a clash can no longer reach the calendar."
- Finding 2: > "Public content was edited out of band, so the schedule, pricing, and blog on the site drifted from reality. Stale pages met members at the exact moment they were deciding to book."
- Rec 2 bold: "CMS-driven content off the shared model."
  > "Staff edits publish to the live site the same day from one source, so what a member sees is always what the studio actually offers."
- Finding 3: > "Work spanned 27 modules with no shared data model. The same facts were re-entered in several places, which is exactly how the double-bookings and stale content took hold."
- Rec 3 bold: "One 32-table model as the single source of truth."
  > "Every requirement traces to it, so scheduling, attendance, and the public site all read and write the same records instead of their own copies."

### Metrics
- 27 · "Modules delivered"
- 32 · "Data tables modeled"
- 2 · "Production systems"
- Sole · "Retained as administrator"

### Under the hood
- Summary: "Under the hood"
- Hint: "method & stack"
- Body:
> "Requirements elicited through stakeholder interviews and current-state walkthroughs; modeled in BPMN 2.0 (as-is / to-be); specified as a user-story backlog with Given/When/Then acceptance criteria traced to a 32-table data model. Delivered on Next.js and Convex, validated through UAT, and operated in production."
- Chips: BABOK v3, BPMN 2.0, User Stories, Next.js, Convex, TypeScript

### Next
- Label: "Start with"
- Title: "Process Models"

---

## Work · FIIT Co. · Process Models (/work/fiitco/process)
<!-- source: src/app/work/fiitco/process/page.tsx -->
### Metadata
- title: "FIIT Co. · Process Models (A1) | David Ezieshi"
- description: > "Eleven FIIT Co. workflows as BPMN 2.0 swimlanes, each toggleable between the current (as-is) and redesigned (to-be) state."

### Hero
- Badge: "Artifact A1 · Process Models"
- H1: "Eleven processes, mapped as-is and to-be."
- Intro: > "The BA-11 process maps as BPMN swimlanes. Each was walked end-to-end with the people who run it, the pain named, and a future state designed to replace it. Pick a process, then flip between the current and redesigned workflow."

### How these were produced
- Eyebrow: "How these were produced"
- Sub: > "Current-state models came from walking each process with the people who run it; to-be models were validated with the sponsor before the backlog was written against them."
- "Elicitation" — "Each process walked end-to-end with its real actors to map how work actually happens."
- "As-Is / To-Be" — "Paired swimlanes so the pain, and the benefit, is explicit, not implied."
- "Validation" — "To-be flows signed off by the sponsor before requirements were drafted."

### Next
- Label: "Next artifact" · Title: "Data & Scope Model"

---

## Work · FIIT Co. · Data & Scope Model (/work/fiitco/data)
<!-- source: src/app/work/fiitco/data/page.tsx -->
### Metadata
- title: "FIIT Co. · Data & Scope Model (A2) | David Ezieshi"
- description: > "The scope boundary agreed at kickoff plus the BA-authored 24-entity logical data model, and how it maps to the ~32-table Convex schema."

### Hero
- Badge: "Artifact A2 · Data & Scope Model"
- H1: "What the platform owns, and the data behind it."
- Intro: > "The scope boundary agreed at kickoff, and the BA-authored logical data model the requirements traced to, 24 entities, their relationships, and how the logical layer maps to the ~32-table Convex schema."

### Scope model
- Eyebrow: "Scope model"
- Sub: > "The line between what this engagement delivered and what stayed with existing or third-party systems, agreed before a single requirement was written."
- Column heading: "In scope"
  - "Class Management Tool" — "Scheduling, RBAC, real-time attendance, lesson library, reporting"
  - "Customer marketing website" — "Live schedule, trainer profiles, brand, CMS"
  - "Refer-a-friend program" — "Trackable links with attribution & rewards"
  - "Guest-pass program" — "Monthly passes with front-desk verification"
- Column heading: "Out of scope"
  - "MindBody two-way sync" — "Deferred to Wave 3+ (R-01); deep-link fallback shipped"
  - "WCAG 2.1 AA audit" — "Wave 3 backlog (R-07); interim contrast/alt-text pass done"
  - "Trainerize pilot" — "O3 recommendation, 30 days post-closure"
  - "Payments & billing" — "External system of record"

### Logical data model
- Eyebrow: "Logical data model · 24 entities"
- Sub: > "The BA-authored logical model, the entities and relationships the requirements need the platform to hold. Built before the schema, iterated during the build, and now the reference for tracing any production issue to an owning entity. Each entity traces to the BR it serves."
- Entities (name — purpose):
  - User — "Person with any relationship to the platform"
  - Role — "Admin / Instructor / Member permission bundle"
  - RoleAssignment — "Join, user ↔ role, scoped + time-bounded"
  - Session — "Auth session for a signed-in user"
  - Instructor — "User subtype with credentials + assignments"
  - InstructorAvailability — "Weekly blocks an instructor can be booked into"
  - Member — "User subtype with membership + billing status"
  - Class — "Reusable offering template (e.g. 'HIIT 45')"
  - ClassSession — "An instance of a Class at a time, place, instructor"
  - Location — "Studio / room the session is held in"
  - AttendanceRecord — "Member checked in / marked at a session"
  - Exercise — "Item in the curated training library"
  - LessonPlan — "Ordered set of Exercises for a session"
  - LessonPlanItem — "Join, plan ↔ exercise with sets/reps"
  - TrainerProfile — "Public-site bio + certifications"
  - WebsitePage — "CMS-editable public page"
  - WebsiteBlock — "Modular content block within a page"
  - BlogPost — "TipTap-authored article on the public site"
  - ContactSubmission — "Inbound form submission from the site"
  - Referral — "Trackable link + referrer/referee pair"
  - Reward — "Payout / credit on a successful referral"
  - GuestPass — "Monthly pass issued with a quota"
  - Redemption — "Front-desk verification closing a GuestPass"
  - AuditLog — "Append-only record of every mutation"

### Relationships
- Eyebrow: "Relationships"
- Sub: "Cardinalities the business rules and process models depend on."
- Notes:
  - "One 'HIIT 45' definition generates dozens of weekly sessions."
  - "One instructor per session; the engine enforces no double-booking (BR-01)."
  - "Attendance is per-session, not per-class-definition (BR-03)."
  - "Via RoleAssignment; an instructor can also hold time-bounded admin rights (BR-02)."
  - "A reward exists only on a qualified referral (BR-07)."

### Metrics
- 24 · "Logical entities"
- ~32 · "Physical Convex tables"
- 8 · "BRs traced to entities"
- 100% · "Mutations audit-logged"

### Callout
- Bold: "Logical vs. physical:"
  > "this 24-entity logical model is sponsor-readable and implementation-agnostic. The physical Convex schema expands to ~32 tables through materialised views (attendance rollup, referral attribution), system tables, and audit variants (soft-delete tombstones, versioned config)."

### Next
- Label: "Next artifact" · Title: "Business Rules Model"

---

## Work · FIIT Co. · Business Rules (/work/fiitco/rules)
<!-- source: src/app/work/fiitco/rules/page.tsx -->
### Metadata
- title: "FIIT Co. · Business Rules Model (A3) | David Ezieshi"
- description: > "Business rules catalogue, constraints, derivations, and computations, plus the decision table governing booking flow."

### Hero
- Badge: "Artifact A3 · Business Rules Model"
- H1: "The rules the system has to enforce."
- Intro: > "Extracted from the process work and written as testable business rules, constraints, derivations, and computations, then folded into a decision table so the booking logic is unambiguous."

### Rules catalogue
- Eyebrow: "Rules catalogue"
- Group: "Scheduling & buffer"
  - BR-01: > "A booking is rejected if it starts before the instructor's previous class end time plus their travel buffer."
  - BR-02: "The applied buffer is derived from the instructor's home studio and the class type."
  - BR-03: "A class cannot be booked beyond its defined capacity."
- Group: "Membership & eligibility"
  - BR-04: "A member may only book classes their membership tier grants access to."
  - BR-05: "Eligible classes shown to a member are derived from tier access rules at browse time."
  - BR-06: "Remaining slots are computed as capacity minus confirmed bookings."
- Group: "Access & approval"
  - BR-07: "A schedule change flagged sensitive stays pending until an owner approves it."
  - BR-08: "Whether approval is required is derived from the actor's role and the change type."
  - BR-09: "Every privileged action must be written to the audit log with actor and timestamp."
- Group: "Publishing"
  - BR-10: "A class page is public only when its `published` flag is true."
  - BR-11: "The public timetable is derived from published class pages, ordered by start time."
- Type labels: "Constraint", "Derivation", "Computation"

### Decision table
- Eyebrow: "Decision table · Can this booking proceed?"
- Sub: > "The scheduling and eligibility rules resolved into one deterministic decision. Conditions are evaluated left to right; the first matching row wins."
- Columns: "Tier eligible?", "Buffer OK?", "Capacity left?", "Needs approval?", "Outcome"
- Outcomes: "Reject, not eligible", "Block, buffer conflict", "Reject, class full", "Hold for approval", "Confirm booking"
- Caption: > "Each outcome traces back to the rules above and forward to the scheduling process model."

### Next
- Label: "Next artifact" · Title: "Documents · BRD, PRD, Stories, UAT"

---

## Work · FIIT Co. · Documents (/work/fiitco/docs)
<!-- source: src/app/work/fiitco/docs/page.tsx -->
### Metadata
- title: "FIIT Co. · Documents (A4) | David Ezieshi"
- description: > "Reading-mode library, Charter, BRD, Executive Summary, and Closure Report, with a scroll-spy table of contents."

### Hero
- Badge: "Artifact A4 · Documents · Reading mode"
- H1: "Read the documents. Jump to the live artifact."
- Intro: > "The written BA deliverables, Charter, BRD, Executive Summary, Closure Report, in a proper reading mode: a scroll-spy table of contents, faithful tables and lists, and inline links that take you straight to the interactive artifact each document powers."

### Doc picker entries (from docs-manifest.ts)
- BA-01 · "Project Charter" — Group "Initiate" — Live: "View Stakeholder & RACI (A5)"
  > "The charter names the stakeholders and governance, see the full RACI matrix as an interactive artifact."
- BA-05 · "Executive Summary" — "The one-page summary of the whole engagement."
- BA-03 · "Business Requirements" — Live: "View Traceability (A6)"
  > "Every requirement here traces forward, follow it in the requirements traceability artifact."
- BA-04 · "Personas & Journeys" — Live: "View Process Models (A1)"
  > "The journeys these personas take are modelled as as-is / to-be process maps."
- PDD · "Product Design Document"
  - Authors: "David Ezieshi, Lead BA · Emmanuel Ametepe Ofori, UX Analyst"
  - Version: "v1.0 Final · April 25, 2026"
  - Source: "pdftotext extract, formatting approximate"
  - Live: "View Data & Scope Model (A2)" — > "The design's data model is explorable as an interactive ERD artifact."
- BA-10 · "User Story Backlog" — Live: "View Business Rules (A3)"
  > "The acceptance criteria here encode the business rules, see them as a decision table."
- BA-07 · "UAT Plan & Test Cases" — Live: "View Traceability (A6)"
  > "Each test case closes a requirement, see the closure signals in the traceability artifact."
- BA-13 · "Vendor Comparison"
- BA-16 · "Closure Report" — Live: "View RAID Log (A7)"
  > "Closure carries open items forward, they live in the RAID log artifact."

### Reader chrome
- TOC heading: "On this page"
- Default loading label: "Loading document…"
- Default error label: "Could not load this document"
- Phase order: Initiate / Analyze / Design / Deliver / Close

### Next
- Label: "Next artifact" · Title: "Stakeholder Map & RACI"

---

## Work · FIIT Co. · Stakeholder & RACI (/work/fiitco/stakeholder)
<!-- source: src/app/work/fiitco/stakeholder/page.tsx -->
### Metadata
- title: "FIIT Co. · Stakeholder & RACI (A5) | David Ezieshi"
- description: > "BA-02 stakeholder register, power/interest grid, RACI matrix, comms cadence, and the post-handover operating model."

### Hero
- Badge: "Artifact A5 · Stakeholder Map & RACI"
- H1: "Who mattered, and who owned what."
- Intro: > "BA-02. Eight stakeholders, plotted by power and interest, with one accountable owner for every deliverable, the register every requirement in the RTM traces back to."

### Power / interest grid
- Eyebrow: "Power / interest grid"
- Sub: > "Engagement strategy follows position: the top-right quadrant is managed closely; the rest are kept informed or monitored."
- Axis labels: "Low interest", "High interest", "High power", "Low power"
- Quadrants: "Keep satisfied", "Manage closely", "Monitor", "Keep informed"
- Chips: "S8 Vendors", "S5 Instructors", "S6 Members", "S7 Coordinator"

### Stakeholder register
- Eyebrow: "Stakeholder register"
- Sub: "Each stakeholder carries an ID used across every downstream artifact."
- S1 · Arden · "Sponsor, owns operational outcomes and sign-off on every deliverable" · Manage Closely
- S2 · Jason Battiste · "Founder & Head Coach, brand voice, training philosophy, final aesthetic call" · Manage Closely
- S3 · David Ezieshi · "Business Analyst, requirements, process design, UAT, admin post-handover" · Continuous
- S4 · Claude · "Development & design partner, builds both apps against the BA specs" · Continuous
- S5 · Instructor Team · "~12 trainers, end users of the CMT; team-UAT participants" · Keep Informed
- S6 · Members & Community · "End users of the public site, guest-pass, and referral flow" · Monitor
- S7 · GBC Co-op Coordinator · "Academic oversight for the placement engagement" · Keep Satisfied
- S8 · External Vendors · "MindBody, Trainerize, Vercel, Convex, constrain API & integration" · Monitor

### RACI matrix
- Eyebrow: "RACI matrix"
- Sub: "One row per deliverable, one accountable owner each. Hover a row to trace it."
- Row labels: BA-01 Charter / BA-02 Stakeholder Register / BA-03 Business Requirements Doc / BA-04 Process Design (BPMN) / BA-05 Squarespace UAT (diagnostic) / BA-06 Class Management Tool spec / BA-07 UAT Plan & Test Cases / BA-10 User Story Backlog / BA-12 Requirements Traceability Matrix / BA-13 Vendor Comparison Matrix / BA-14 Customer Website spec / BA-16 Closure Report / Class Management Tool, build & deploy / Customer Website, build & deploy / Ongoing platform administration
- Legend: "R Responsible", "A Accountable", "C Consulted", "I Informed"

### Communication cadence
- Eyebrow: "Communication cadence"
- "Weekly sponsor sync" · 30 min · S1 · S3 · "Deliverable status, RAID review, sign-off asks"
- "Bi-weekly executive review" · 45 min · S1 · S2 · S3 · "Brand + roadmap decisions requiring the Founder"
- "Ad-hoc build sessions" · varies · S3 · S4 · "Requirements clarification, spec iteration"
- "Team UAT window" · 1 week · S3 · S5 · S1 · "Instructor validation of the CMT"
- "Academic checkpoints" · per calendar · S3 · S7 · "Coursework artefact review"

### Post-handover callout
- Bold: "Post-handover (Apr 14 2026):"
  > "the RACI collapses. S3 (David Ezieshi) was retained as sole platform administrator after Claude and the analyst team rolled off; S1 (Arden) remains sponsor and escalation. Change requests are filed via S3 and decided by S1."

### Next
- Label: "Next artifact" · Title: "Requirements Traceability"

---

## Work · FIIT Co. · Requirements Traceability (/work/fiitco/rtm)
<!-- source: src/app/work/fiitco/rtm/page.tsx -->
### Metadata
- title: "FIIT Co. · Requirements Traceability (A6) | David Ezieshi"
- description: "BA-12 sponsor slice, Charter Objective → Stakeholder → Business Requirement → closure signal."

### Hero
- Badge: "Artifact A6 · Requirements Traceability"
- H1: "Every requirement traced to a why."
- Intro: > "BA-12, the sponsor slice. Each row reads Charter Objective → the stakeholder who originated the ask → the Business Requirement → the closure signal. No orphan requirements; no silent scope creep."

### Objective → requirement trace
- Eyebrow: "Objective → requirement trace"
- Sub: "Filter by build objective to isolate its requirement chain."
- Filter buttons: "All (8)", "O2 · CMT (5)", "O4 · Website (3)"
- Row headers: "Obj", "Originated by", "Business requirement", "Closure signal"
- Signal badges: "Delivered", "In build"
- BR-01: > "A single source of truth for the weekly schedule, instructor assignments, and studio bookings so conflicts are prevented before publication." — Delivered · in UAT · 0 failures
- BR-02: > "Role-based access so Admins manage the operation while Instructors see only their own schedule and roster." — Delivered · FR-01/02/03 passed
- BR-03: > "Attendance captured at the class in real time, not reconciled after the fact, so the record matches the studio." — Delivered · tap-through + revert window
- BR-04: > "A curated exercise library and lesson-plan builder so programming stays consistent with the FIIT philosophy." — Delivered · library + builder shipped
- BR-05: > "Operations reporting the Admin can pull without an analyst, weekly attendance and utilisation on demand." — Delivered · weekly report live
- BR-06: > "A public site reflecting the live schedule, trainer profiles, and current brand, so prospects see the studio as it operates today." — In build · MVP in production review
- BR-07: > "Members can refer friends through a trackable link so the studio attributes sign-ups and rewards the referrer." — In build · flow specced · UAT → Wave 3
- BR-08: > "A monthly guest-pass program with front-desk verification so trials convert without manual bookkeeping." — In build · issuance specced · UAT → Wave 3

### Objectives that produced no BRs
- Eyebrow: "Objectives that produced no BRs, by design"
- Sub: > "Two objectives were diagnostic or research scopes, declared upfront in the Charter; one was documentation. All three traced through the RTM as recommendation packages."
- O1: "Diagnose the current Squarespace site" — "Retrospective UAT + defect log." — "8 defects · 13 recommendations · 82% nav health · Met"
- O3: "Recommend a client-tracking platform" — "Weighted vendor scorecard (BA-13)." — "Trainerize 4.55/5 · pilot scoped · Met (pending sign-off)"
- O5: "Document the engagement end-to-end" — "Full BA artefact package." — "19 documents delivered (BA-01 → BA-19) · Met"

### Metrics
- 5 · "Charter objectives committed"
- 8 · "Business requirements traced"
- 0 · "Requirements failed after commit"
- 37 · "Rows in the full RTM"

### Callout
- Bold: "What this proves:"
  > "every BR rolls up to a named objective and stakeholder (no orphans); objectives with no BRs were diagnostic by design (no silent creep); zero requirements failed or were descoped after commit. The full BA-12 drops each row through BR → User Story → FR/NFR → Test Case → UAT verdict across all 37 rows."

### Next
- Label: "Next artifact" · Title: "RAID Log"

---

## Work · FIIT Co. · RAID Log (/work/fiitco/raid)
<!-- source: src/app/work/fiitco/raid/page.tsx -->
### Metadata
- title: "FIIT Co. · RAID Log (A7) | David Ezieshi"
- description: > "BA-15 RAID log, Risks (P×I scored), Assumptions, Issues, Dependencies, and the formal change register."

### Hero
- Badge: "Artifact A7 · RAID Log"
- H1: "The operating ledger, not a filed document."
- Intro: > "BA-15. Risks, assumptions, issues, and dependencies, reviewed in every weekly sponsor sync and carried into ongoing administration. Snapshot at closure, April 14 2026."

### Callout
- Bold: "Carried into operations:"
  > "R-05 Convex usage (monthly check), R-06 bus-factor of 1 (sponsor-accepted), R-07 WCAG (Wave 3), D-03 Trainerize pilot (30-day clock), and D-05 Convex upgrade (trigger at 70%) are all still tracked by the sole administrator after closure."

### Tabs
- Risks / Assumptions / Issues / Dependencies / Changes

### Risks (id · text · status)
- R-01 · > "MindBody API deprecates legacy auth mid-engagement, blocking two-way sync" · "Transferred"
- R-02 · > "Vercel edge cache serves stale content after CMS publish, causing drift on fiitco.ca" · "Realised → Mitigated"
- R-03 · > "Instructor team fails to complete UAT in the 1-week window due to shift overlap" · "Mitigated"
- R-04 · > "Sponsor unavailable for weekly sign-off (travel), delaying acceptance" · "Closed"
- R-05 · > "Convex free-tier cap breached at go-live traffic, forcing emergency upgrade" · "Open"
- R-06 · > "Sole-administrator model creates a bus-factor of 1 post-handover" · "Open"
- R-07 · > "WCAG 2.1 AA non-compliance surfaces post-launch (NFR-04 deferred)" · "Open"
- Legend: "Low", "Watch", "Escalate"

### Assumptions
- A-01: "Sponsor has sign-off authority without Board escalation" · "Confirmed"
- A-02: "Instructors accept a single-tool workflow (no parallel spreadsheets)" · "Confirmed · 4.6/5"
- A-03: "GBC placement calendar aligns with the Wave-1→2→Closure cadence" · "Confirmed"
- A-04: "Convex + Vercel free tiers cover build + first 3 months of ops" · "Confirmed · 34%"
- A-05: "Squarespace has an exportable inventory (needed for O1)" · "Partially, manual"
- A-06: "Trainer bios + certs are photograph-ready" · "Partially, 8 of 12"

### Issues
- I-01: "Broken external footer link on the legacy Squarespace site, surfaced in Scope 1 UAT" · "Wave 1"
- I-02: "Stale Vercel edge cache served ~24h-old schedule after a mid-week update" · "Same day"
- I-03: "N+1 query on the instructor 'My Classes' view, 4.2s vs 2.5s NFR" · "Wave 2 · p95 830ms"
- I-04: "Role-based redirect leaked the admin URL to Instructors via 302 flash" · "Wave 2 · TC-042"
- I-05: "Referral attribution failed in incognito, moved cookie → link-token" · "Wave 2 · FR-16"

### Dependencies
- D-01: "CMT go-live ← sponsor sign-off of team UAT" · "Met · Wave 2"
- D-02: "Customer website go-live ← 4 remaining trainer bios (A-06)" · "Blocked, reassigned"
- D-03: "Trainerize pilot ← sponsor pilot sign-off (O3)" · "Pending, 30-day clock"
- D-04: "WCAG 2.1 AA audit ← Wave 3 scoping" · "Deferred → R-07"
- D-05: "Convex plan upgrade ← traffic at 70% of free tier" · "Trigger, at 34%"
- D-06: "Instructor onboarding ← RBAC role assignments (BR-02)" · "Met, 12 provisioned"
- D-07: "Public-site publishing ← TipTap CMS + Convex live-content" · "Met, Wave 2"

### Changes
- C-01: "Refer-a-friend promoted to a first-class scope item (BR-07), +3 stories, +2 FRs" · "Approved · Wave 2"
- C-02: "MindBody two-way sync deferred to Wave 3+ on R-01 risk, deep-link fallback (FR-15) added" · "Approved · signed note"
- C-03: "Front-desk verification added to guest-pass redemption (BR-08), +1 FR, +1 test case" · "Approved · Wave 2"

### Next
- Label: "Back to" · Title: "FIIT Co. artifact index"

---

## Work · FIIT Co. · Diagrams (/work/fiitco/diagrams)
<!-- source: src/app/work/fiitco/diagrams/page.tsx -->
### Metadata
- title: "FIIT Co. · Diagrams (A8) | David Ezieshi"
- description: > "Interactive architecture, data-flow, ERD, functional-decomposition, use-case, and Ishikawa root-cause diagrams, each with its source narrative and talking points."

### Hero
- Badge: "Artifact A8 · Diagrams · Live"
- H1: "The system, drawn, and fully interactive."
- Intro: > "The architecture, data-flow, ERD, functional-decomposition, use-case, and root-cause diagrams, custom-built as interactive graphics. Hover any node to trace its connections, pan and zoom, and open any diagram fullscreen; read the talking points beside it."

### Diagram titles (from data.ts)
- "System Context"
- "Container Architecture"
- "Data Domain View"
- "Auth & Session Lifecycle"
- "Deployment Topology"
- "Entity-Relationship Diagram · 28 tables"
- "Level 0 · Context DFD"
- "Level 1 · Process breakdown"
- "Functional Decomposition · L0 → L2"
- "Use Case Diagram · 22 use cases"
- "Ishikawa 6M · stale-cache incident (I-02)"

### Diagram picker meta (from diagrams-manifest.ts)
- Architecture · "System Architecture · 5 diagrams" — Artifact "BA-08b · C4-style layered architecture"; Source "Technical Architecture Handoff v1.0 · BA-08 Data Model"; Snapshot "April 30, 2026 · handover v1.0"
  - Live: "Visit the live product" — > "These diagrams describe the two-site, one-backend platform that runs in production today."
- Data · "Entity-Relationship Diagram · 28 tables" — Artifact "BA-08 · Physical data model (Convex schema)"; Source "Technical Architecture Handoff §2 · convex/schema.ts"; Scope "28 tables · 4 domains"
  - Live: "View Data & Scope Model (A2)" — > "The BA-authored logical model is explorable as its own interactive artifact. This is the physical schema behind it."
- Data · "Data Flow Diagram · L0 + L1" — Artifact "BA-08c · Gane-Sarson DFD (Level 0 + Level 1)"; Source "BA-03 BRD · BA-08 Data Model · Tech Architecture Handoff"
  - Live: "View Data & Scope Model (A2)" — "Where the data lives is the data model; this shows where it moves."
- Function & Behaviour · "Functional Decomposition · 59 leaves" — Artifact "BA-11b · Functional decomposition (L0 → L3)"; Source "BA-03 BRD · BA-10 Backlog · BA-12 RTM"
  - Live: "View Traceability (A6)" — > "Every leaf function traces to a business requirement. See the full trace in the RTM artifact."
- Function & Behaviour · "Use Case Diagram · 22 use cases" — Artifact "BA-10b · UML use case diagram"; Source "BA-02 Stakeholders · BA-09 RBAC · BA-10 Backlog"
  - Live: "View Business Rules (A3)" — > "The authenticated use cases encode the access business rules. See them as a decision table."
- Analysis · "Fishbone (Ishikawa) · incident I-02" — Artifact "BA-06b · Ishikawa root-cause analysis"; Incident "Stale-edge-cache · RAID entry I-02"; Author "David Ezieshi"
  - Live: "View RAID Log (A7)" — > "This analyses the real production incident logged as I-02 in the RAID log."

### Ishikawa fishbone
- Problem: > "Stale schedule served for ~24h on fiitco.ca after a mid-week update"
- Categories: People, Machine, Method, Material, Measurement, Environment
- Causes (People): "Admin published without knowing the edge cache", "No second reviewer (single admin)"
- Causes (Machine): "Vercel edge-cache TTL longer than expected", "No invalidation hook on CMS publish"
- Causes (Method): "No revalidation step in the runbook", "No post-publish smoke test"
- Causes (Material): "Free-tier lacks push invalidation", "Two schedule tables caused confusion"
- Causes (Measurement): "No monitoring of what was served", "Detected by member complaint"
- Causes (Environment): "Mid-week change was rare, unrehearsed", "Single-admin, no peer challenge"

### Loading / error states
- Loading: "Loading diagrams…"
- Error prefix: "Could not load this diagram set"

### Next
- Label: "Back to" · Title: "FIIT Co. artifact index"

---

## Work · FIIT Co. · Shared components

<!-- source: src/components/work/fiitco/FiitSubNav.tsx -->
### Breadcrumb + tabs
- Breadcrumb: "Work" > "FIIT Co."
- Tabs (label · idx): Process Models · A1 / Data & Scope Model · A2 / Business Rules · A3 / Documents · A4 / Stakeholder & RACI · A5 / Traceability · A6 / RAID Log · A7 / Diagrams · A8

<!-- source: src/components/work/fiitco/process/BpmnLegend.tsx -->
- Legend: "Start / end event", "Task", "Gateway (decision)", "Manual / failure point", "Automated by system"

<!-- source: src/components/work/fiitco/process/ProcessClient.tsx -->
- Sub suffix: "BPMN 2.0 swimlane"
- Toggle: "As-Is", "To-Be"
- Verdict (as-is): "Current state, manual and error-prone"
- Verdict (to-be): "Redesigned, one tool in real time"

<!-- source: src/components/work/fiitco/process/process-data.ts -->
### Process P1 · Class scheduling
- Name: "Class scheduling"
- Desc: "Building next week's class slots and getting them to the team."
- As-Is caption: > "Two systems of record, a spreadsheet and MindBody, drift out of sync; scheduling depends on synchronous chat replies; the team has no single live source. Arden spends roughly 90 minutes a week on the loop."
- To-Be caption: > "One source of truth, zero manual re-entry, and conflict prevention at the moment of save. Arden's weekly scheduling time drops from ninety minutes to under twenty."

### Process P2 · Attendance & check-in
- Name: "Attendance & check-in"
- Desc: "Capturing who actually showed up to each class."
- As-Is caption: > "Data entry happens twice; handwriting is illegible on roughly one sheet in ten; no-show tracking is effectively absent; month-end reconciliation takes half a day and still misses entries."
- To-Be caption: > "No double entry, no paper, no month-end reconciliation. Attendance flows directly from the instructor's phone into the admin dashboard in real time."

### Process P3 · Lesson plan preparation
- Name: "Lesson plan preparation"
- Desc: "How instructors build and share what they teach."
- As-Is caption: > "Every instructor reinvents plans individually; there is no shared library; Jason's training philosophy is not uniformly reflected; Arden cannot see what is being taught."
- To-Be caption: > "Consistent pedagogy across the team, visible quality assurance for Arden and Jason, reduced prep time, and a training corpus that grows instead of leaving with each instructor."

### Process P4 · New member onboarding
- Name: "New member onboarding"
- Desc: "A prospect's first journey from Instagram to first class."
- As-Is caption: > "Booking requires account creation before the prospect has even met the studio; the front desk has no profile or history when the member walks in; the first experience feels impersonal."
- To-Be caption: > "The first touchpoint becomes recognisable. The front desk and the instructor both know who is new, and Arden has a follow-up surface built in."

### Process P5 · Monthly operations review
- Name: "Monthly operations review"
- Desc: "Turning a month of activity into decisions."
- As-Is caption: > "Half a day every month consumed by reconciliation; decisions are reactive because the data is always a month stale; no visibility into class-level health while it still matters."
- To-Be caption: > "Decisions become weekly instead of monthly. The half-day reconciliation disappears. Arden and Jason spend their joint time deciding what to do, not reconstructing what happened."

### Process P6 · Referral flow
- Name: "Referral flow"
- Desc: "How a member refers a friend and earns a reward."
- As-Is caption: > "Word of mouth worked, but the studio never knew a referral happened. No attribution, no reward, and no incentive to keep referring."
- To-Be caption: > "Every referral is attributed to an identified member via a link-token (the I-05 fix). A reward can only fire after a two-step admin check that the friend completed a paid class."

### Process P7 · Monthly guest pass
- Name: "Monthly guest pass"
- Desc: "Issuing and redeeming monthly guest passes."
- As-Is caption: > "Paper roster or scattered messages. The front desk had no single current view of who had used what, so passes were over-issued or refused unfairly."
- To-Be caption: > "Quota is enforced before the pass is issued, the front desk sees it on-screen at check-in, and the monthly reset happens automatically."

### Process P8 · Password reset
- Name: "Password reset"
- Desc: "Resetting a forgotten password without an admin."
- As-Is caption: > "Every reset was a manual Arden action, often sent as a cleartext temporary password, and users were never forced to change it."
- To-Be caption: > "Self-serve, single-use, time-boxed reset link. Zero admin time, the password never travels in cleartext, and the endpoint is rate-limited."

### Process P9 · Availability approval
- Name: "Availability approval"
- Desc: "Instructors propose hours; admins approve them."
- As-Is caption: > "Availability lived in several places; every change was a manual sync across all of them, and one miss caused visible drift on the public site."
- To-Be caption: > "One source of truth. The instructor submits, it queues as a pending change, and an admin approves or denies with a reason, leaving an auditable record."

### Process P10 · Website content publish
- Name: "Website content publish"
- Desc: "Getting a content change live on the public site."
- As-Is caption: > "Clicking Save did not mean the customer saw it. The edge cache held stale content for about a day, and members arrived for moved or cancelled classes."
- To-Be caption: > "Cache invalidation is baked into the publish action, with a runbook smoke-test after, so a save is actually visible. Anomalies get logged straight to the RAID."

### Process P11 · Sign-up & approval
- Name: "Sign-up & approval"
- Desc: "New accounts and the admin approval gate."
- As-Is caption: > "Every new account meant manual entries across multiple systems, credentials sent over SMS, and roles assigned from memory with no audit trail."
- To-Be caption: > "Self-serve sign-up does not mean self-serve access. The account is created as pending and an admin approval sets the role; deactivation is soft, so the record persists."

<!-- source: src/components/work/fiitco/FigFrame.tsx -->
- Zoom decoration label: "100%"

---

## Work · Business Analysis & Process Design (/work/ba-process-design)
<!-- source: src/app/work/ba-process-design/page.tsx -->
### Metadata
- title: "Business Analysis & Process Design Portfolio | David Ezieshi"
- description: > "BABOK v3 artifact set: BRD, as-is / to-be process design, BPMN swimlanes, and use-case specifications on a representative operational scenario."

### Back link
- "Back to All Projects"

### Hero
- Badge: "Business Analysis Methodology"
- H1: "The BA toolkit, end to end."
- Intro: > "A representative BABOK v3 artifact set, Business Requirements Document, as-is / to-be process design, BPMN swimlane diagrams, and use-case specifications, demonstrating the methodology a business analyst runs on an operational-optimisation engagement."

### The analyst's brief
- Eyebrow: "The analyst's brief"
- Sub: > "Business analysis gets judged on artifacts. This portfolio shows the ones a hiring team will actually ask to see."
- "Why it matters" — > "Every operational-optimisation project fails at one of three seams: unclear scope, undocumented as-is, or ambiguous acceptance criteria. The four artifacts below cover all three."
- "The question" — > "Can the analyst scope a business problem, model the process and data behind it, and specify the solution well enough that a developer, a compliance reviewer, and an operator can each pick up their part without asking follow-up questions?"
- "Business benefit" — > "A signed BRD kills scope creep. A gap-analysed to-be process cuts rework. BPMN + use cases together shorten hand-off friction. The artifacts are the deliverable, but the traceability between them is the point."
- Practice framework — > "BABOK v3 knowledge areas, Business Analysis Planning, Elicitation, Requirements Life Cycle Management, Strategy Analysis, and Solution Evaluation."
- Notation — > "BPMN 2.0 for process modelling, UML use cases for actor-system interactions, MoSCoW for requirements prioritisation, Given/When/Then for acceptance criteria."
- Traceability — > "Every requirement in the BRD carries an ID. Every process step and use case references those IDs, so a single row in a traceability matrix links business objective → requirement → process step → use case → acceptance criterion."
- Scope of this portfolio — > "A representative operational-optimisation scenario chosen to exercise every BABOK knowledge area without depending on any specific domain. The methodology is the deliverable, not the domain."

### Practice notes, and what to do about them
- Eyebrow: "Practice notes, and what to do about them"
- Sub: "The three habits that separate BA work that ships from BA work that stalls."
- Note 1: > "Operational optimisation projects that skip the requirements step ship faster but re-scope more. A signed BRD converts 'let's try this' into a decision with an owner."
- Practice 1 bold: "Author the BRD before touching design."
  > "Scope, stakeholders, and functional/non-functional requirements up front. Every downstream artifact traces to a numbered requirement."
- Note 2: > "As-is process maps get skipped because they feel like a lot of work for 'what we already know.' The gap analysis is where the real design decisions surface."
- Practice 2 bold: "Map as-is before to-be."
  > "Every to-be step should answer a specific pain in the as-is map. If it doesn't, it's a nice-to-have, not a requirement."
- Note 3: > "Use-case specs and BPMN diagrams look redundant to non-BAs, they answer different questions. BPMN shows what the process does; use cases show what the actor does inside it."
- Practice 3 bold: "Ship both. They're not duplicates."
  > "Use cases feed the developer's user stories. BPMN feeds the operator's runbook. Different audience, same underlying design."

### The four artifacts
- Eyebrow: "The four artifacts"
- Sub: "Each stands alone, but each references the others through a shared requirements register."
- B1 · "Business Requirements Document" — > "Scope, stakeholder register, functional and non-functional requirements, the sponsor-signable spec." — meta "BRD"
- B2 · "Process Design (As-Is / To-Be)" — > "Current-state walkthrough, gap analysis, and the redesigned to-be process with exception handling." — meta "As-Is / To-Be"
- B3 · "BPMN Swimlane Diagrams" — > "Formal process notation with swimlanes, decision gateways, and message flows across actors." — meta "BPMN 2.0"
- B4 · "Use Case Specifications" — "Actor-system flows with pre-conditions, post-conditions, and alternate paths." — meta "UML use cases"
- Card CTA: "Open"

### Metrics
- 4 · "Core BA artifacts"
- BRD · "Sponsor-signable spec"
- BPMN 2.0 · "Process notation"
- As-Is/To-Be · "Gap analysis"

### Under the hood
- Summary: "Under the hood"
- Hint: "practice & framework"
- Body: > "Requirements elicited through stakeholder analysis and current-state walkthroughs, prioritised with MoSCoW, and validated through use-case walkthroughs. Process modelled in BPMN 2.0 with swimlanes per actor. Acceptance criteria written in Given/When/Then form so each requirement is testable."
- Chips: BABOK v3, BPMN 2.0, UML, MoSCoW, Given/When/Then, Lucidchart

### Next
- Label: "Start with" · Title: "Business Requirements Document"

---

## Work · BA · BRD (/work/ba-process-design/brd)
<!-- source: src/app/work/ba-process-design/brd/page.tsx -->
### Metadata
- title: "BA · Business Requirements Document (B1) | David Ezieshi"
- description: "BRD sections: scope, stakeholder register, functional and non-functional requirements, MoSCoW prioritisation."

### Hero
- Badge: "Artifact B1 · Business Requirements Document"
- H1: "The sponsor-signable spec."
- Intro: > "The BRD is the single source of truth for scope, stakeholders, and requirements. Every downstream artifact, process design, BPMN, use cases, references the requirement IDs below, so traceability is preserved end to end."

### Scope
- Eyebrow: "Scope"
- Sub: > "'What is in' is only useful when paired with 'what is out.' Every deferral is documented before build begins."
- In scope:
  - "Request submission and approval workflow for the operational-optimisation scenario"
  - "Role-based access control (submitter, approver, admin)"
  - "Audit logging of every state change"
  - "Weekly reporting to the operations lead"
- Out of scope:
  - "Financial reconciliation and general ledger integration"
  - "Mobile-native applications (responsive web only)"
  - "Multi-tenant hosting"
  - "Automated escalation to third-party systems"

### Stakeholder register
- Eyebrow: "Stakeholder register"
- Sub: > "Six stakeholders, each with a role and an engagement quadrant. IDs (S1–S6) are the traceability keys downstream artifacts refer to."
- S1 · Sponsor · "Owns operational outcomes and signs off deliverables." · Manage Closely
- S2 · Operations Lead · "Owns the current process and the team affected by change." · Manage Closely
- S3 · Business Analyst · "Author of every artifact; runs elicitation + traceability." · Continuous
- S4 · Development Partner · "Delivers the technical solution against the specs." · Continuous
- S5 · End Users · "Submitters and approvers who exercise the system daily." · Keep Informed
- S6 · Compliance / Audit · "Reviews the audit trail and data handling posture." · Keep Satisfied

### Functional requirements
- Eyebrow: "Functional requirements"
- Sub: "What the system must do, in numbered form. Each FR is testable and carries a MoSCoW priority."
- FR-01 · "The system shall allow an authorised user to submit an operational request with the fields defined in Appendix A." · Must
- FR-02 · "The system shall route each submitted request to the correct approver based on the routing matrix (Section 4.3)." · Must
- FR-03 · "The system shall notify the approver by email within one minute of submission." · Must
- FR-04 · "The system shall allow the approver to approve, reject with reason, or return for revision." · Must
- FR-05 · "The system shall record every state change with a timestamp and the identity of the actor." · Must
- FR-06 · "The system shall let the submitter view the current status of any request they authored." · Should
- FR-07 · "The system shall produce a weekly operational report grouped by team and outcome." · Should
- FR-08 · "The system shall support delegation of approver authority for a fixed date range." · Could

### Non-functional requirements
- Eyebrow: "Non-functional requirements"
- Sub: > "How the system must perform. Non-functional requirements are as binding as functional ones and often shape more of the delivery plan."
- NFR-01 · "95th percentile page load under 2.5 seconds on a standard broadband connection." · Must
- NFR-02 · "The system shall be available 99.5% during operational hours." · Must
- NFR-03 · "All mutations shall write to an append-only audit log." · Must
- NFR-04 · "The user interface shall meet WCAG 2.1 AA on public routes." · Should
- NFR-05 · "The system shall support browsers released within the last 24 months." · Should
- NFR-06 · "Handover documentation shall be delivered alongside the production release." · Must

### Traceability note
- Bold: "Traceability rule."
  > "Every FR and NFR ID above is referenced by at least one process step (B2 / B3) and at least one use case (B4). If a requirement has no downstream reference, it is either un-implemented or over-scoped, both cases trigger a review with the sponsor."

### Next
- Label: "Next artifact" · Title: "Process Design (As-Is / To-Be)"

---

## Work · BA · Process Design (/work/ba-process-design/process)
<!-- source: src/app/work/ba-process-design/process/page.tsx -->
### Metadata
- title: "BA · Process Design (B2) | David Ezieshi"
- description: "As-is / to-be process design with gap analysis and exception handling for the operational-optimisation scenario."

### Hero
- Badge: "Artifact B2 · Process Design · As-Is / To-Be"
- H1: "Every to-be step answers a specific as-is pain."
- Intro: > "Three process pairs, submission, approval, reporting, with the documented pain in the as-is, the specific redesign in the to-be, and the requirement IDs each step traces back to."

### Process 1 · Request submission
- Requirements ref: FR-01 · FR-02 · FR-03
- As-Is pain: > "Requests arrive via email, chat, and walk-ups. The operations lead spends the first hour of every day just sorting."
- As-Is steps: "Requester emails / messages / walks up to operations lead", "Operations lead reads request, guesses the right approver", "Forwards to approver, sometimes CCs the wrong person", "Request may sit in an inbox for hours", "No structured record of what was requested"
- To-Be win: > "One submission surface with structured fields. Routing happens automatically off the routing matrix, not off the operations lead's memory."
- To-Be steps: "Requester fills a structured form on the system (FR-01)", "System reads routing matrix and picks the approver (FR-02)", "Approver receives email notification within 1 minute (FR-03)", "Every field captured; audit log written from step 1"

### Process 2 · Approval decision
- Requirements ref: FR-04 · FR-05 · NFR-03
- As-Is pain: > "The approver sees the request but has no consistent way to record a 'returned for revision.' They usually reply-all with a comment and no state change is recorded."
- As-Is steps: "Approver reads the email", "Replies with approve, reject, or ambiguous questions", "Requester (and everyone CCed) parses the reply", "'Returned for revision' state doesn't exist, it's a natural-language response", "No timestamp on the decision moment"
- To-Be win: > "Approve / reject / return-for-revision are three explicit actions. Each writes a timestamped state change to the audit log."
- To-Be steps: "Approver opens the request in the system", "Selects Approve / Reject / Return-for-revision (FR-04)", "Return-for-revision requires a reason string", "System writes state change with timestamp + actor identity (FR-05, NFR-03)", "Requester sees the state update immediately (FR-06)"

### Process 3 · Weekly operational reporting
- Requirements ref: FR-07 · NFR-01
- As-Is pain: > "The operations lead spends Friday afternoon assembling numbers from three different mailboxes and a spreadsheet. Numbers are always 'approximately' right."
- As-Is steps: "Operations lead scrolls three inboxes on Friday", "Manually counts approvals, rejections, revisions", "Types results into a spreadsheet", "Emails spreadsheet to sponsor", "Prone to counting errors", "No historical record, spreadsheets get overwritten"
- To-Be win: > "The report is a query. Numbers are exact, generated on demand, and identical for every stakeholder viewing them."
- To-Be steps: "System aggregates state-change events from the audit log", "Weekly report generated on demand (FR-07)", "Grouped by team and outcome, sub-2.5s response (NFR-01)", "Sponsor + ops lead see identical numbers, any time they open it"

### Exception handling
- Eyebrow: "Exception handling"
- Sub: "The to-be process is only useful when it holds under stress. Four documented exception paths."
- EX-01 · "Approver is unavailable (leave, illness, travel)"
  > "System supports fixed-date delegation (FR-08, Could). Absent that, request routes to the approver's manager after a documented timeout."
- EX-02 · "Requester submits with missing required fields"
  > "Form-level validation prevents submission. No half-formed request ever reaches the approver."
- EX-03 · "Approver rejects but requester disagrees"
  > "Requester can re-submit as a new request with a reference to the rejected one. Escalation to the sponsor is out of scope for v1, flagged in the RAID log."
- EX-04 · "System is unavailable during operational hours"
  > "NFR-02 governs (99.5% availability). Documented fallback: paper-based submission with same-day back-fill by the operations lead."

### Gap analysis callout
- Bold: "Gap analysis output."
  > "Every to-be step above answers a specific as-is pain and closes at least one requirement in the BRD. Steps that don't serve either an as-is pain or a requirement are cut, no nice-to-haves survive the gap analysis."

### Next
- Label: "Next artifact" · Title: "BPMN Swimlane Diagrams"

---

## Work · BA · BPMN (/work/ba-process-design/bpmn)
<!-- source: src/app/work/ba-process-design/bpmn/page.tsx -->
### Metadata
- title: "BA · BPMN Swimlane Diagrams (B3) | David Ezieshi"
- description: "Formal BPMN 2.0 process notation for the approval workflow, swimlanes, gateways, and message flows."

### Hero
- Badge: "Artifact B3 · BPMN 2.0 Swimlane Diagrams"
- H1: "The process as a formal diagram."
- Intro: > "Four swimlanes, Requester, System, Approver, Operations Lead — covering the full approval workflow. Every task carries an actor, every decision carries a gateway, every cross-lane hand-off carries a message flow. This is what a developer or operator reads to build or run the process."

### BPMN element legend
- Eyebrow: "BPMN 2.0 element legend"
- Sub: "The notation is standardised, anyone who reads BPMN reads it the same way."
- Start event — "Where the process begins. On this diagram, a request submission triggers it."
- Task — "A unit of work done by one actor. Each task lives in one swimlane."
- Exclusive gateway — "A decision point. Exactly one outgoing path is taken based on the condition."
- Parallel gateway — "Fork or join for concurrent paths."
- Message flow — "Communication between swimlanes (or between the diagram and an external actor)."
- End event — "Where the process terminates. A well-formed BPMN diagram has at least one."

### The four swimlanes
- Eyebrow: "The four swimlanes"
- Sub: "Each lane is one actor. Steps read top-down within a lane. Symbols match the legend above."
- Requester lane: "Start · request needed", "Fill submission form", "Submit", "View status update", "End · request closed"
- System lane: "Validate submission fields", "Look up routing matrix", "Send email to approver", "Record state change to audit log", "Update status view"
- Approver lane: "Receive notification", "Review request", "Decision · approve / reject / return-for-revision", "Enter reason (if reject or revise)", "Submit decision"
- Operations Lead lane: "Weekly report trigger · Friday 15:00", "Open weekly report", "Review outcomes by team", "Share with sponsor"

### Cross-lane message flows
- Eyebrow: "Cross-lane message flows"
- Sub: > "Message flows are what distinguish BPMN from a simple flowchart — they show communication across actor boundaries. Every hand-off below is a message flow."
- "Requester → Submit → System → Validate, Message flow across swimlane"
- "System → Send email → Approver → Receive notification, Message flow, email channel"
- "Approver → Decision (approve) → System → Record state change, Sequence flow within decision"
- "Approver → Decision (reject/revise) → System → Send notification back to requester, Alternate path from gateway"
- "System → Weekly aggregation → Ops Lead → Weekly report trigger, Timer-based sequence"

### Rendering note
> "The formal `.bpmn` XML files render visually as swimlane diagrams at demo.bpmn.io. Each of the four lanes above corresponds to one `bpmn:lane` element inside a shared `bpmn:process` block. Interactive rendering embedded in this page ships in a follow-up slice."
- Link text: "demo.bpmn.io"

### Next
- Label: "Next artifact" · Title: "Use Case Specifications"

---

## Work · BA · Use Cases (/work/ba-process-design/use-cases)
<!-- source: src/app/work/ba-process-design/use-cases/page.tsx -->
### Metadata
- title: "BA · Use Case Specifications (B4) | David Ezieshi"
- description: "UML use case specifications with actor-system flows, pre-conditions, post-conditions, and alternate paths."

### Hero
- Badge: "Artifact B4 · Use Case Specifications"
- H1: "Four use cases, every path documented."
- Intro: > "Where the BPMN diagram shows the process shape, use cases show the actor-system interaction step by step, with pre-conditions, main flow, alternate paths, and post-conditions. This is what feeds a developer's user-story backlog."

### UC-01 · Submit an operational request
- Actor: Requester · Requirements: FR-01 · FR-02 · FR-03
- Goal: "Log a request in the system so it reaches the correct approver without manual routing."
- Pre-condition: "Actor is authenticated and holds the Requester role."
- Main flow:
  1. "Requester opens the submission form."
  2. "Requester fills all required fields (Appendix A)."
  3. "Requester submits."
  4. "System validates every required field is present and well-formed."
  5. "System looks up the correct approver in the routing matrix."
  6. "System writes the request with status = Pending and an audit-log entry."
  7. "System sends an email notification to the approver within one minute."
  8. "System displays a confirmation with the request ID."
- Alternate paths:
  - 4a: "Validation fails — System highlights invalid fields; request is not submitted; requester stays on the form."
  - 5a: "Routing matrix has no match — System routes to the default approver defined for the requester's team, logs the event as a routing exception."
  - 7a: "Email delivery fails — System retries with exponential backoff up to 3 attempts; on final failure, requester is shown a warning and operations lead is notified out-of-band."
- Post-condition: "Request is persisted, routed to the correct approver, notification sent, audit log entry written."

### UC-02 · Approve, reject, or return a request
- Actor: Approver · Requirements: FR-04 · FR-05
- Goal: "Record an authoritative decision on a request so downstream actions can proceed."
- Pre-condition: "Actor is authenticated, holds the Approver role, and the request is assigned to them with status = Pending."
- Main flow:
  1. "Approver opens the pending request from their inbox link or dashboard."
  2. "Approver reviews the request fields and context."
  3. "Approver selects one action: Approve, Reject, or Return-for-revision."
  4. "If Reject or Return, approver enters a reason (required, min. 20 characters)."
  5. "Approver confirms the decision."
  6. "System writes state change with timestamp and actor identity to the audit log."
  7. "System notifies the requester of the outcome."
  8. "System updates the request's visible status."
- Alternate paths:
  - 3a: "Approver has delegation active — System reroutes the request to the delegate's queue instead of accepting the decision from the original approver."
  - 4a: "Reason field is under 20 characters — System blocks submission and highlights the reason field."
  - 6a: "Audit-log write fails — System does not persist the state change; approver is shown an error and prompted to retry."
- Post-condition: "Request state is updated to Approved, Rejected, or Returned-for-revision; audit-log entry written; requester notified."

### UC-03 · View request status
- Actor: Requester · Requirements: FR-06
- Goal: "See the current state of a request the actor previously submitted."
- Pre-condition: "Actor is authenticated and holds the Requester role."
- Main flow:
  1. "Requester navigates to 'My Requests.'"
  2. "System lists all requests authored by the requester, most recent first."
  3. "Requester selects a request."
  4. "System displays the request's current state, submission timestamp, decision timestamp (if any), and reason (if any)."
  5. "System displays the audit-log entries for the request in chronological order."
- Alternate paths:
  - 3a: "Requester has authored no requests — System displays the empty state with a link to the submission form."
  - 4a: "Request was decided but no reason was provided — System shows the state change with an empty reason placeholder; the audit log still shows the actor and timestamp."
- Post-condition: "Actor sees the current state and full audit trail for the requested item."

### UC-04 · Run the weekly operational report
- Actor: Operations Lead · Requirements: FR-07 · NFR-01
- Goal: "Get the week's outcomes grouped by team without manually assembling data."
- Pre-condition: "Actor is authenticated, holds the Operations Lead role, and the week has at least one closed request."
- Main flow:
  1. "Operations Lead navigates to the Weekly Report page."
  2. "System reads the last 7 days of state-change events from the audit log."
  3. "System groups events by team and by outcome (Approved, Rejected, Returned)."
  4. "System renders the report table plus per-team totals in under 2.5s (NFR-01)."
  5. "Operations Lead reviews the numbers."
  6. "Operations Lead shares the report link with the sponsor."
- Alternate paths:
  - 3a: "A team has zero events this week — System still renders the row with zeros, absence is data."
  - 4a: "Report generation exceeds 2.5s — System renders progressively (per-team rows stream in) and logs the slow query for follow-up."
- Post-condition: "Report is rendered on-screen and available for share; no side effects."

### Downstream callout
- Bold: "Downstream artifact."
  > "Every step in every main flow above maps to one user story with Given/When/Then acceptance criteria in the delivery backlog. Every alternate path maps to a test case. That's how the BRD → process design → use cases → user stories → test cases chain is preserved end to end."

### Return CTA
- Label: "Return to" · Title: "BA Portfolio hub"

---

## Work · BA · Shared components
<!-- source: src/components/work/ba/BaSubNav.tsx -->
- Back link: "Back to BA Portfolio hub"
- Tabs: "B1 · BRD", "B2 · Process Design", "B3 · BPMN Flows", "B4 · Use Cases"

---

## Work · UiPath Supplier Price Monitor (/work/uipath-automation)
<!-- source: src/app/work/uipath-automation/page.tsx -->
### Metadata
- title: "UiPath Supplier Price Monitor | David Ezieshi"
- description: > "A UiPath bot that scrapes seven supplier prices, flags anything past a ±5% threshold, and drops an Excel alert. Native replay embedded on the page."

### Back link
- "Back to All Projects"

### Hero
- Eyebrow: "UiPath RPA · Attended Automation"
- H1: "Supplier Price & Availability Monitor."
- Intro: > "A procurement bot that checks seven retail suppliers every morning, compares live prices against the last known price, and raises alerts on ≥5% moves or stock changes, replacing a 60–90 minute manual routine. Hit replay to watch a verified run."

### Metric row
- "7" — "Supplier pages checked"
- "6" — "Alerts raised on the last run"
- "±5%" — "Alert threshold, read per-supplier"
- "<10 min" — "Bot runtime vs 60–90 min manual"

### The analyst's brief
- Eyebrow: "The analyst's brief"
- Sub: > "Before the automation, the framing: why the manual routine hurts, the operational question the bot answers, and the payoff."
- "Why it matters" — > "Procurement can only negotiate the movements it sees. Late catches on price hikes cost margin; missed stock outs cost delivery dates. An hour of daily copy-paste is also a bad use of a buyer's time."
- "The question" — > "Can a bot check every supplier every morning, apply a threshold the buyer controls per-supplier, and land the report on their desk before the first meeting?"
- "Business benefit" — > "A ranked alert sheet plus an audit log turns reactive firefighting into a same-day negotiation surface, and the buyer gets an hour back to work upstream deals instead of copy-pasting prices."
- Data source — > "Shared Excel workbook (supplier_list_template.xlsx) with one row per supplier: URL, part number, selector, last known price, per-supplier threshold, and last check timestamp."
- Analysis type — > "Attended automation. UiPath Studio drives Chrome per supplier, extracts price + availability, computes the delta vs. the workbook row, and writes back to two tabs."
- Scope & caveats — > "Seven suppliers in the demo run; the same workflow scales to dozens with no code change (one row per supplier). Selectors are site-specific; a page redesign triggers the add-to-cart fallback, and the run log makes the fallback explicit."
- Tooling — > "UiPath Studio + Community, Excel activities, Windows Task Scheduler for the daily run, plain .csv audit log for portability."

### Findings, and what to do about them
- Eyebrow: "Findings, and what to do about them"
- Sub: > "Each finding is a fact from the operational data; each recommendation is the specific rule the bot enforces to act on it."
- Finding 1: > "Manual checks take 60–90 minutes daily and skew toward the top of the supplier list, so late-list suppliers get checked less often and their breaches slip through."
- Rec 1 bold: "Automate the whole list every morning."
  > "A scheduled UiPath run treats every supplier the same, ships in under 10 minutes, and frees an hour a day of procurement time for actual negotiation."
- Finding 2: > "Site redesigns silently break single-selector scrapers, and the ops team doesn't notice until a downstream stakeholder asks about missing data."
- Rec 2 bold: "Two-tier detection with a visible fallback."
  > "A primary per-site selector plus an add-to-cart availability heuristic keeps the run useful when a page redesign lands, and the log makes the fallback explicit so the selector can be fixed the same day."
- Finding 3: > "Alert fatigue is the real risk, so every ±1% wiggle can't reach the escalation queue."
- Rec 3 bold: "Per-supplier ±5% threshold, read from the workbook."
  > "The threshold lives in the Excel row, not the code, so procurement can raise or lower it per supplier without a redeploy. Six of seven suppliers alerted on the last run, one sat inside the band."

### AS-IS vs TO-BE process
- Eyebrow: "AS-IS vs TO-BE process"
- Sub: > "Both flows drawn from the Manual and Automated Process Walkthroughs in the PDD pack. Toggle between the two to see where the 60–90 minute manual routine collapses into a bot loop plus a five-minute review."
- Caption: "High-fidelity swimlanes live on Canva: open the process design."

### Selector strategy
- Eyebrow: "Selector strategy"
- Sub: > "The bot survives site redesigns because it never trusts a single selector. A primary path is fast when the page hasn't moved; a fallback path keeps the run honest when it has."

### Run history
- Eyebrow: "Run history"
- Sub: > "The bot runs on a Windows Task Scheduler cron at 09:00 every weekday. This strip is the last 14 executions, each a real morning run against the same workbook."

### What the workbook looks like after a run
- Eyebrow: "What the workbook looks like after a run"
- Sub: > "Two artifacts land after every run: the Alert Sheet (rows the buyer opens) and the audit log CSV (rows for anyone running downstream analytics). The values below match the replay above."

### How the bot works
- Eyebrow: "How the bot works"
- Sub: > "Four sequential UiPath workflows, each with its own XAML file, so a reviewer can open the repo and follow the automation stage by stage."
- 1 · Read — > "Loads the seven suppliers, their per-row thresholds, and the last known prices from the shared Excel workbook." (Read_Input.xaml)
- 2 · Scrape — > "Opens Chrome per supplier; site-specific selectors extract the price and availability, with a reference-data fallback if a selector breaks." (Process_Supplier.xaml)
- 3 · Compare — > "Computes (new − old) / old, checks the ±5% threshold and any stock change, and applies the PDD's exception rules per supplier." (Main.xaml)
- 4 · Write — > "Appends every check to the audit log, breaches to the Alert Sheet, and refreshes the supplier list with fresh prices and timestamps." (Write_Output.xaml)

### Under the hood
- Eyebrow: "Under the hood"
- Sub: > "A UiPath Studio workflow drives Excel and Chrome through per-site selectors, with an add-to-cart availability heuristic as the fallback signal when a price element is missing."
- Chips: UiPath, RPA, Excel, Web Scraping, Windows

### The write-up, in prose
- Eyebrow: "The write-up, in prose"
- Sub: > "The case study distilled from the Process Design Document, the AS-IS survey, the objectives that shaped the TO-BE, and the exception rules the team agreed on before a line of UiPath was authored."

### Footer nav
- "Source & PDD" — "UiPath-Automation-Project on GitHub"
- "Back to" — "All Projects"

### UiPath components (shared)
<!-- source: src/components/work/uipath/UipathChart.tsx -->
- Panel title: "Price change vs last known — alert threshold ±5%"
- Row names: Adorama, B&H Photo Video, Micro Center, Insight, Micro Card, Tomauri, Canada Computers
- Caption: > "Warm bars mark upward breaches, teal marks downward breaches, gray sits inside the ±5% band. Micro Card also flipped to Out of Stock, the second alert condition."

<!-- source: src/components/work/uipath/UipathDocReaderClient.tsx -->
- Doc title: "Automating the morning price check"
- Meta: "Author" — "David Ezieshi"; "Length" — "~1,500 words · 7 min read"; "Repo" — "github.com/ezieshie-stack/UiPath-Automation-Project"
- Doc code: "UiPath Automation · Case study"
- Live CTA label: "Watch the replay"
- Live CTA blurb: > "Prefer the interactive version? The replay streams the run's log and populates the workbook row by row."
- Loading: "Loading…"

<!-- source: src/components/work/uipath/UipathProcessFlows.tsx -->
- Toggle: "Current State", "Future State"
- Stage suffix: "· BPMN 2.0 swimlane"
- Verdict labels: "Current state · manual", "Future state · automated"

<!-- source: src/components/work/uipath/UipathProofStrip.tsx -->
- Panel titles: "alerts.xlsx · Alert Sheet", "audit_log.csv · Run R-2027-07-17-01"
- Table headers: Time, Supplier, Last, Scraped, Δ%, Reason
- Reasons: "Price ↑ breach", "Price ↑ breach + Stock: OOS", "Price ↓ breach"

<!-- source: src/components/work/uipath/UipathReplay.tsx -->
- Buttons: "Replay run" / "Playing…" / "Resume"
- Speed aria-label: "Playback speed"
- Caption pill: > "Browser re-enactment, real supplier data, real alert logic, re-played from a verified run."
- Log panel title: "UiPath · Execution log — Main.xaml"
- Log empty state: "Waiting for the bot…"
- Table panel title: "supplier_list_template.xlsx · live view"
- Table headers: Supplier, Last known, Scraped, Δ%, Stock, Status
- Stock values: "In Stock", "Out of Stock"
- Status labels: "Alert", "within 5%"

<!-- source: src/components/work/uipath/UipathRunHistory.tsx -->
- Panel title: "Run history · last 14 weekdays"
- Legend: "Success", "Retry (selector broke, second attempt landed)", "No run (holiday)"

<!-- source: src/components/work/uipath/UipathSelectorStrategy.tsx -->
- Card 1: "Primary" · "Site-specific selector"
  > "Each supplier row in the workbook carries the exact selector for its price element. UiPath uses it directly; if it matches, the bot reads the price and moves on."
  - Footer: "Fast, exact, per-supplier — the common path."
- Card 2: "Fallback" · "Add-to-cart availability heuristic"
  > "When the primary selector misses (site redesign, promo overlay, A/B test), the bot clicks Add to cart. A visible cart dialog means the item is in stock and the confirmation shows the current price — the same signal a shopper would read."
  - Footer: "Robust to page redesigns — the resilience path."

<!-- source: src/components/work/uipath/uipath-process-data.ts -->
- Lane names: "Procurement Analyst", "Web Browser", "Excel System", "Email System"
- S1 · "Initialise sweep" — "Open the list and pick the first product URL."
- S2 · "Load product page" — "Launch, retry on failure, clear pop-ups."
- S3 · "Capture price" — "Record price, compute change, flag breaches."
- S4 · "Capture availability" — "Stock status via text or add-to-cart check."
- S5 · "Consolidate alerts" — "Loop suppliers, filter, build the alert sheet."
- S6 · "Report & notify" — "Summarise, save and email the manager."

---

## Work · Telco Customer Churn Analysis (/work/telco-churn)
<!-- source: src/app/work/telco-churn/page.tsx -->
### Metadata
- title: "Telco Customer Churn Analysis | David Ezieshi"
- description: "7,043-customer churn analysis with 8 SQL queries and a logistic-regression model at 0.86 ROC-AUC."

### Hero
- Badge: "Churn Analytics · Interactive"
- H1: "Score a customer for churn."
- Intro: > "This is the model I built on 7,043 telecom customers, running live in your browser. Change the inputs and watch the prediction move. No slides, the thing itself."

### Scorer caption
- Caption: > "Interactive reconstruction of the logistic-regression model (0.86 ROC-AUC). Coefficients calibrated to the documented churn drivers."

### The analyst's brief
- Eyebrow: "The analyst's brief"
- Sub: > "A churn score is only useful if the intervention it triggers costs less than the revenue it saves."
- "Why it matters" — > "Acquiring a new subscriber costs 5 to 7× more than keeping one. Across 7,043 accounts, every churn is lost monthly revenue plus wasted acquisition spend, but the business cannot see who is about to leave or why until they are already gone."
- "The question" — > "Which customers will churn next, which segments are driving the loss, and which single intervention per segment costs less than the revenue it protects?"
- "Business benefit" — > "A per-customer churn score plus a segment diagnosis turns blanket retention spend into three targeted programs. Together they defend an estimated $520K in annual revenue at a fraction of that in cost."
- Data source — > "7,043-row Telco dataset loaded into a SQLite database (churn.db) so every finding is a versioned, re-runnable query. 21 columns, no missing rows."
- Analysis type — > "Descriptive first (8 SQL segmentations), then diagnostic (a Chi-Square test proves the pattern is real), then predictive (a logistic-regression model scores each customer)."
- Scope & caveats — > "A single point-in-time snapshot, no time series. `customerid` and `totalcharges` are excluded (identifier and target leakage). Model trained on an 80/20 split, seed 42."
- Tooling — "SQLite and SQL for exploration, SciPy for the significance test, scikit-learn for the classifier."

### Churn rate by segment
- Eyebrow: "Churn rate by segment"
- Sub: > "Eight segments ranked by churn rate. The top segment churns at nearly one in two."
- Cohorts: "Fiber · no support · M2M", "Month-to-month (all)", "Fiber optic (all)", "No tech support", "Paperless billing", "DSL", "One year contract", "Two year contract"

### Findings, and what to do about them
- Eyebrow: "Findings, and what to do about them"
- Sub: > "Every finding is a fact from the data. Every recommendation is a costed action tied directly to it."
- Finding 1: > "Month-to-month contracts churn at 42.7%, roughly 15× the two-year rate (2.8%). Stack in electronic-check payment and it hits 53.7%, a coin flip, covering 1,850 customers (26% of the base)."
- Rec 1 bold: "\"Lock & Shield\" contract migration."
  > "Target month-to-month customers in their first 6 months with a ~15% discounted 1-year contract plus an onboarding concierge call. A 20% conversion protects an estimated $340K a year."
- Finding 2: > "Fiber-optic customers without Tech Support churn at ~49.4%, the highest of any segment. Adding support more than halves it, to 22.6%. The premium product without premium support is the problem."
- Rec 2 bold: "\"Support Bundle\" for Fiber."
  > "Auto-bundle Tech Support into Fiber plans at a marginal $5/mo discount. Closing that service gap by even 15 points saves an estimated $180K a year."
- Finding 3: > "The first 6 months are catastrophic: 52.9% attrition, falling to 14% past 25 months. The cliff is a month-to-month story, long-contract customers who clear year one flatten at 3 to 12%."
- Rec 3 bold: "\"First 90 Days\" onboarding program."
  > "Automated check-ins at Day 7, 30, and 60 plus proactive success calls for high-value accounts. Structured onboarding typically cuts early churn 10 to 25%."

### Go deeper
- Eyebrow: "Go deeper"
- Sub: > "Five artifacts open the analysis up, from the raw SQL to the model card and the full write-up."
- T1 "SQL Explorer" — "The 8 analytical queries, real SQL and results." — meta "8 queries"
- T2 "Data Dictionary" — "21 columns, what each means, what feeds the model." — meta "21 columns"
- T3 "Model Card" — "Metrics, coefficients, and a live threshold slider." — meta "0.86 ROC-AUC"
- T4 "Methodology" — "The full pipeline from CSV to recommendations." — meta "CSV → model"
- T5 "Write-up" — "The long-form case study in prose." — meta "7 min read"

### Outcomes
- 7,043 · "Customers analyzed"
- 0.86 · "Model ROC-AUC"
- 69% · "Precision on flagged"
- 49% · "Top-segment churn"

### Under the hood
- Body: > "Data segmented in SQLite with 8 analytical queries; hypothesis tested with SciPy chi-square; model trained with scikit-learn logistic regression, evaluated on a held-out split (ROC-AUC 0.86). Every model number on T3 is from the real run."
- Chips: SQLite, Python, scikit-learn, SciPy, Logistic Regression

### Next
- Label: "Start with" · Title: "SQL Query Explorer"

---

## Work · Telco · SQL (/work/telco-churn/sql)
<!-- source: src/app/work/telco-churn/sql/page.tsx -->
### Metadata
- title: "Telco · SQL Query Explorer (T1) | David Ezieshi"
- description: "The 8 analytical SQL queries with their actual grouped results from a fresh run against churn.db."

### Hero
- Badge: "Artifact T1 · SQL Query Explorer"
- H1: "Eight queries, the real SQL and the real numbers."
- Intro: > "Every segmentation lived as a versioned SQL query against a SQLite database of 7,043 customers. Each card shows the exact query, the grouped result it produced, and what the numbers mean."

### Queries
- Q1: "Churn rate by contract type" — "Do short-term contracts churn more than long-term ones, and by how much?"
  > "Month-to-month churns at 15× the rate of two-year contracts. Committing a customer to a longer contract is the single strongest defence in the dataset."
- Q2: "Churn rate by payment method" — "Does how someone pays predict whether they leave?"
  > "Manual payment methods churn at 2 to 3× the rate of automatic ones. Auto-payment is a proxy for commitment."
- Q3: "Contract × Payment cross-tab" — "Stack the two risk signals, what is the worst-case segment?"
  > "Month-to-month + Electronic check = 53.7% churn, a coin flip. 1,850 customers (26% of the base) sit in this one cell."
- Q4: "Churn rate by tenure band" — "When in a customer's lifecycle do they leave?"
  > "The first six months are catastrophic: over 50% attrition. Onboarding is not marketing, it is a retention lever."
- Q5: "Tenure × Contract interaction" — "Is the early-tenure cliff universal, or just month-to-month?"
  > "The cliff is a month-to-month story. Long-contract customers who pass year one flatten at 3 to 11%. The problem is not new customers — it is new customers who never committed."
- Q6: "Service quality · Internet × Tech Support" — "Is expensive internet without support worse than cheaper internet with it?"
  > "Fiber-optic customers without Tech Support churn at ~49%. Adding support more than halves it (49.4% → 22.6%). Premium product without premium support is the worst segment in the data."
- Q7: "Pricing sensitivity by charge band" — "Are higher-paying customers more likely to churn?"
  > "Churn triples from cheapest to mid band, then plateaus. Above $60/mo, higher price does not push churn further, so it is not the price. It is the value gap at those price points."
- Q8: "Statistical validation · Chi-Square" — "Is the contract-vs-churn relationship real, or noise?"
- Q8 verdict: "Reject H₀, dependent"
  > "A p-value of 5.86 × 10⁻²⁵⁸ is not merely significant, it means there is no realistic universe in which contract type and churn are independent. The relationship is structural."

### Next
- Label: "Next artifact" · Title: "Data Dictionary & Schema"

---

## Work · Telco · Data Dictionary (/work/telco-churn/data)
<!-- source: src/app/work/telco-churn/data/page.tsx -->
### Metadata
- title: "Telco · Data Dictionary (T2) | David Ezieshi"

### Hero
- Badge: "Artifact T2 · Data Dictionary & Schema"
- H1: "Twenty-one columns, eighteen features."
- Intro: > "Every column in the customers table: its type, what it means, and how it is used. The story is the two columns that don't feed the model, and why their reasons differ, one is an identifier, the other is target leakage."

### Column meanings (representative)
- customerid: > "Unique subscriber ID. A model that learns from IDs is a lookup table, not a classifier."
- gender: "Male / Female. Kept, but near-zero coefficient, no material signal."
- seniorcitizen: "Whether the subscriber is 65+. A positive churn signal."
- tenure: "Months with the company (0–72). Numeric feature."
- contract: "Month-to-month / One year / Two year. Highest-impact feature."
- paymentmethod: "How they pay. Electronic check is the risk signal."
- monthlycharges: "Current monthly bill in USD (18.25–118.75). Numeric feature."
- totalcharges: "Cumulative billed amount. Equals monthly × tenure, embeds the churn signal. Dropped to prevent target leakage."
- internetservice: "DSL / Fiber optic / No. Fiber optic is the 2nd-highest churn signal."
- techsupport: "Add-on: tech support. Strongest protective add-on."
- streamingmovies: "Add-on: streaming movies. Positive churn signal."

### Legend
- Leakage risk: > "Derived from the outcome or known only after it. Feeding these to a churn model would leak the answer it is meant to predict."
- Identifier: > "Unique per subscriber. No generalisable signal; a model that learns from it is a lookup table that fails on new customers."

### Target callout
> "churn (TEXT · Yes/No) is the prediction target, binary-encoded to 1/0 in the pipeline. The other 18 usable columns become ~30 features after one-hot encoding, all pointing at this one flag."

### Two decisions worth explaining
- "Dropped totalcharges" — > "It equals monthly × tenure and embeds the churn signal itself. Feeding it would train the model to spot customers who already stopped paying, not who will. Textbook target leakage."
- "Dropped customerid" — > "A unique value per row. A model that learns from it is a lookup table, and any apparent signal evaporates on new customers."

### Next
- Label: "Next artifact" · Title: "Model Card"

---

## Work · Telco · Model Card (/work/telco-churn/model)
<!-- source: src/app/work/telco-churn/model/page.tsx -->
### Metadata
- title: "Telco · Model Card (T3) | David Ezieshi"
- description: "Logistic regression on 7,043 customers · ROC-AUC 0.8607 · precision 0.69 · recall 0.58 · with the real top-10 coefficients."

### Hero
- Badge: "Artifact T3 · Model Card"
- H1: "The model, its scores, and its honest limits."
- Intro: > "Logistic regression on 5,634 training customers, tested on 1,409 held out. Every headline number below is from the real run against the shipped SQLite database."

### Metric labels
- ROC-AUC / Precision on churn / Recall on churn / F1 (churn) / Accuracy

### Confusion matrix
- Headers: "Pred. stay", "Pred. churn"
- Row headers: "Actual stay", "Actual churn"
- Cell keys: "true negative", "false alarm", "missed churner", "true positive"

### Coefficients
- Eyebrow: "Top 10 feature coefficients"
- Caption: "protective · raises churn · log-odds scale"

### Honest limits
- "58% recall" — > "At the default threshold the model misses more than 4 in 10 actual churners. Lowering the threshold trades precision to catch more."
- "No time dimension" — > "A snapshot model. It does not track how a customer's risk moves as tenure and charges change."
- "Uncorrected imbalance" — > "Training is ~73% stayers. class_weight='balanced' would trade precision for recall; it was left off by default."

### Note
> "Interactive threshold slider (drag to watch precision, recall, and the confusion matrix trade off live) ships in a follow-up slice. The static view above shows the default 0.50 threshold from the real run."

### Next
- Label: "Next artifact" · Title: "Methodology Diagram"

---

## Work · Telco · Methodology (/work/telco-churn/method)
<!-- source: src/app/work/telco-churn/method/page.tsx -->
### Metadata
- title: "Telco · Methodology (T4) | David Ezieshi"
- description: "The full analysis pipeline from raw CSV to recommendations, one stage per script."

### Hero
- Badge: "Artifact T4 · Methodology"
- H1: "Raw data in, recommendations out."
- Intro: > "The whole pipeline in one diagram, so a reviewer sees the method, not just the results. Every node maps to a script. Hover a stage to trace what feeds it and what it produces."

### Phases
- 1 · Data Engineering — > "Convert the flat CSV into a queryable SQL database so exploration is repeatable and traceable." — 01_load_telco_to_sqlite.py
- 2 · Exploratory SQL — > "Isolate each hypothesised churn driver as its own SQL query before combining them." — 02 through 08
- 3 · Statistical Validation — > "Prove the contract-churn relationship is not coincidence. Chi-Square rejects the null at p < 5.86 × 10⁻²⁵⁸." — 09_stats_chi_square.py
- 4 · Predictive Modelling — > "Train a logistic-regression classifier so churn risk can be scored per customer, not just per segment." — 10_ml_logistic_regression.py

### Callout
> "Descriptive, then validated, then predictive. Every finding passes three gates: an SQL query surfaces the pattern, Chi-Square proves it is not random, and the model scores individual customers. Skipping the statistical gate is the difference between noticing a pattern and defending a decision."

### Next
- Label: "Next artifact" · Title: "The write-up"

---

## Work · Telco · Write-up (/work/telco-churn/doc)
<!-- source: src/app/work/telco-churn/doc/page.tsx -->
### Metadata
- title: "Telco · Write-up (T5) | David Ezieshi"
- description: "The long-form case study behind the interactive Telco churn dashboard, problem, method, findings, recommendations."

### Hero
- Badge: "Artifact T5 · Write-up · Reading mode"
- H1: "The analysis, in prose."
- Intro: > "The long-form case study behind the interactive dashboard, for readers who want the story rather than the toggles. A scroll-spy table of contents tracks where you are."

### Reader content
<!-- source: src/components/work/telco/TelcoDocReaderClient.tsx -->
- Title: "Identifying the $1.7M Revenue Leak"
- Meta: Author "David Ezieshi" · Length "~1,500 words · 7 min read" · Repo "github.com/ezieshie-stack/telco-churn-analysis"
- Doc code: "Telco Churn · Case study"
- Live CTA: "View Model Card (T3)"
- Live blurb: > "Prefer the interactive version? The model card has the live threshold and confusion matrix."
- Error/loading empty states

### Next
- Label: "Back to" · Title: "Telco Churn overview"

---

## Work · Telco · Shared components
<!-- source: src/components/work/telco/ChurnScorer.tsx -->
- Field labels: Contract / Internet Service / Tech Support / Paperless Billing / Tenure / Monthly Charges
- Contract options: "Month-to-month", "One year", "Two year"
- Internet options: "Fiber optic", "DSL", "None"
- Yes/No options: "Yes", "No"
- Risk states: "HIGH RISK", "AT RISK", "LOW RISK"
- Gauge label: "CHURN PROBABILITY"
- Drivers header: "What's driving it"
- Legend: "raises churn", "lowers churn"

<!-- source: src/components/work/telco/TelcoSubNav.tsx -->
- Back link: "Back to Telco Churn hub"
- Tabs: "T1 · SQL", "T2 · Data", "T3 · Model", "T4 · Method", "T5 · Write-up"

---

## Work · Customer Support SLA Optimization (/work/sla-optimization)
<!-- source: src/app/work/sla-optimization/page.tsx -->
### Metadata
- title: "Customer Support SLA Optimization | David Ezieshi"
- description: "A cost-sensitive Random Forest predicting SLA breaches on 8,469 tickets, 0.83 ROC-AUC, 100% breach recall, wrapped in a capacity-aware Sniper Command Center."

### Hero
- Badge: "Predictive Analytics · Interactive"
- H1: "Escalate the right tickets."
- Intro: > "This is the Sniper Command Center I built to intercept SLA breaches before they happen, running live in your browser. Set the team's daily review capacity and watch how much breach cost the model catches. No slides, the thing itself."

### Sniper caption
> "Interactive reconstruction of the capacity simulation. A seeded day of tickets calibrated to the real data (8.03% breach rate, Critical breach $500, High breach $200, per-ticket predicted risk)."

### The analyst's brief
- Eyebrow: "The analyst's brief"
- Sub: > "Before a line of code, the framing: why this matters, the question it answers, and the payoff. A model that flags 500 tickets a day is useless to a team that can review 50, so the business constraint shaped the whole solution."
- "Why it matters" — > "Every breached ticket is a direct, quantifiable loss: $500 on a Critical, $200 on a High. At an 8.03% breach rate across 8,469 tickets, the leak is continuous and invisible, and escalation only reacts after the money is already gone."
- "The question" — > "Which tickets will breach their SLA, and given a fixed daily review capacity, which ones should the escalation team act on first to prevent the most financial loss per hour of effort?"
- "Business benefit" — > "A ranked daily kill-list turns reactive firefighting into targeted prevention. Reviewing the top 50 highest-risk tickets recovers the majority of preventable breach cost at a fraction of the effort of reviewing everything."
- Data source — > "8,469 support tickets across email, chat, phone, and social; four priority tiers with distinct SLA targets (Critical 4h, High 8h, Normal 24h, Low 72h)."
- Analysis type — > "Diagnostic (why breaches happen) into predictive (which tickets will breach) into prescriptive (which to escalate under capacity)."
- Scope & limits — > "Ticket creation time inferred from first-response (a documented assumption); breach cost is a priority-based flat rate, not modelled churn. Scores are set at intake, not re-ranked as tickets age."

### Story beats
- 01 · "The problem" — > "Support was losing money on missed deadlines with no early warning. Escalation was reactive: managers saw a breach only after it happened, and no one could quantify the cost."
- 02 · "The diagnosis" — > "Breach rates were nearly flat across ticket types and channels. A chi-square test confirmed the failure is structural, tied to SLA design under Critical load, not any one team underperforming."
- 03 · "The outcome" — > "A cost-sensitive Random Forest at 0.83 ROC-AUC that catches 100% of test-set breaches, wrapped in a capacity-aware tool a manager can actually run each morning."

### Breach rate by ticket type
- Eyebrow: "Breach rate by ticket type"
- Sub: > "The bars are almost level, from 7.7% to 8.3%. That flatness is the finding: no single ticket type is to blame, so the fix is structural, not disciplinary."

### Go deeper
- S1 "Diagnostics" — "Where the money leaks, and the test that proved it is systemic." — 8,469 tickets
- S2 "Data Dictionary" — "Every column, and the ones engineered for the model." — 17 + 6 fields
- S3 "Model Card" — "The cost-sensitive Random Forest and a live threshold." — 0.83 ROC-AUC
- S4 "Methodology" — "The eight-phase pipeline as an interactive diagram." — Phase 0 → 8
- S5 "Write-up" — "The full case study in reading mode." — 6 min read

### Findings, and what to do about them
- Finding: > "Breach rates are flat across ticket types (7.7% to 8.3%) and channels, yet average handling sits near 8h against a 4h Critical target. A chi-square test confirms priority, not team, drives breaches."
- Recommendation: > "Reset the Critical SLA target to match real handling capacity, and stand up a dedicated response lane for the highest-scored tickets. Stop coaching teams for a structural problem."
- Finding: > "Financial exposure is concentrated: Critical breaches cost $500, High $200, and roughly 80% of breach cost sits in the top 20% of tickets by predicted risk."
- Recommendation: > "Deploy the model to score every ticket at creation so the queue self-sorts by risk. Escalate a fixed daily kill-list rather than reviewing the whole queue."
- Finding: > "Ticket volume peaks at 21:00 but breach risk peaks at 22:00, at the evening-to-night shift handover, not at peak volume."
- Recommendation: > "Staff to the risk, not the volume: overlap the evening and night shifts from 21:00 to 23:00 to close the handover gap that volume-based rostering misses."
- Finding: > "A cost-sensitive Random Forest reaches 0.83 ROC-AUC and, at the deployed threshold, catches 100% of test-set breaches at 16% precision."
- Recommendation: > "Accept the low precision deliberately: a false alarm costs minutes, a missed Critical costs $500. Wrap the score in a capacity-aware tool the escalation lead opens each morning."

### Outcomes
- 8,469 · "Tickets analyzed"
- 0.83 · "Model ROC-AUC"
- 100% · "Test breaches caught"
- 8.03% · "Baseline breach rate"

### Under the hood
- Body: > "SLA breach logic derived per priority (Critical 4h, High 8h, Normal 24h, Low 72h); patterns validated with SciPy chi-square; a Random Forest with balanced class weights trained in scikit-learn and evaluated on a held-out split (ROC-AUC 0.83). The Sniper simulation reruns the escalation logic client-side, matching the Streamlit command center in the repo."
- Chips: Python, pandas, scikit-learn, SciPy, Random Forest, Streamlit

### Next
- Label: "Back to" · Title: "All Projects"

---

## Work · SLA · Diagnostics (/work/sla-optimization/diagnostics)
<!-- source: src/app/work/sla-optimization/diagnostics/page.tsx -->
### Metadata
- title: "SLA · Diagnostics (S1) | David Ezieshi"

### Hero
- Badge: "Artifact S1 · Operational Diagnostics"
- H1: "Find the leak before fixing the pipe."
- Intro: > "Before building a model, the analysis had to locate where and why the SLA was failing across 8,469 tickets. Each card is a diagnostic question, the grouped result, and what the numbers mean."

### Diagnostic cards
- D1 "Breach rate by ticket type" — "Is one kind of ticket dragging down the SLA?"
  > "The bars barely move: 7.7% to 8.3% across every type. That flatness is the headline. No single ticket category is the culprit, so the failure is structural, not a training or staffing gap on one desk."
- D2 "SLA target vs. the ~7.7h average" — "Which priority tier is set up to fail?"
  - Verdicts: "Below avg, breaches", "Right at the line", "Comfortable", "Comfortable"
  > "Average handling across all tickets is about 7.7 hours. Critical tickets are held to a 4-hour target, well under that average, so they breach structurally; High sits right at its 8-hour line."
- D3 "Cost of a breach by priority" — "What does a missed deadline actually cost?"
  > "Financial exposure is concentrated in the top two tiers: a Critical breach costs $500, a High breach $200. That lopsided downside is what makes a \"catch every breach\" model worth its false alarms."
- D4 "Optimization scenarios" — "How much breach rate can targeted action recover?"
  > "Predictive triage cuts the breach rate from 8.03% to 6.52%, the largest simulated improvement. Assigning specialists to refund requests recovers less on its own, which is why triage became the primary recommendation."

### Chi-square validation
- Eyebrow: "Statistical validation · Chi-square"
- Sub: > "The charts suggested priority drives breaches. A chi-square test of independence confirmed it is real, not noise."
- Hypothesis: "Breach status is independent of priority"
- Test: "chi-square test of independence"
- Result: "p < 0.05 · reject H₀"
- Interpretation: > "Priority significantly affects breach rate; the failure is structural, tied to SLA design under Critical load."
- Read: > "A Welch t-test also confirmed Critical and High tickets differ significantly in resolution time. Together these move the conversation off \"which team is slow\" and onto \"the Critical SLA target is set too aggressively for current handling speed.\""

### The riskiest hour is a handover
- Eyebrow: "The riskiest hour is a handover, not a rush"
- "Volume peaks at 21:00" — "Ticket arrival is highest at 9 PM, which is where staffing intuition would add headcount."
- "Breach risk peaks at 22:00" — "The highest breach rate is one hour later, at the 10 PM evening-to-night shift handover, not at peak volume."
- "Overlap the shifts" — "Extending the evening shift or overlapping 9 to 11 PM covers the dangerous gap that pure volume-based staffing misses."

### Next
- Label: "Next artifact" · Title: "Data Dictionary"

---

## Work · SLA · Data Dictionary (/work/sla-optimization/data)
<!-- source: src/app/work/sla-optimization/data/page.tsx -->
### Metadata
- title: "SLA · Data Dictionary (S2) | David Ezieshi"

### Hero
- Badge: "Artifact S2 · Data Dictionary & Schema"
- H1: "Seventeen raw fields, six engineered."
- Intro: > "Every column in the ticket dataset: its type, what it means, and how it is used. \"Not in the model\" is not one thing, so each unused field carries a reason code."

### Legend
- "Usable, deferred" — > "Real signal left on the table: low-cardinality categoricals, or fields needing encoding or NLP first. The honest modelling backlog."
- "Leakage risk" — > "Known only at or after resolution. Feeding these to a model that predicts breach would leak the answer."
- "Identifier" — > "Names, emails, IDs, free-text notes. Unique per row, no generalisable signal, never features."
- "Held out" — > "Available but deliberately excluded to avoid demographic bias; signal is weak."

### Engineered fields
- Eyebrow: "Engineered fields · the SLA layer"
- Sub: > "The raw data had no notion of a breach. This layer was built first: infer a creation time, compute resolution hours, apply per-priority targets, then attach cost and model score."
- Card title: "Derived in the pipeline"
- Resolution_Hours: "Resolution minus inferred creation time, in hours. The core SLA measure."
- SLA_Target_Hours: "Target by priority: Critical 4, High 8, Normal 24, Low 72."
- Is_SLA_Breach: "True when Resolution_Hours exceeds the target. The model label."
- Breach_Cost: "Dollars lost on a breach: $500 Critical, $200 High, else $0."
- Pred_Breach_Prob: "Model output, 0 to 1. The score the escalation queue ranks by."
- Risk_Bucket: "Low / Medium / High, bucketed from the predicted probability."

### Target callout
> "Is_SLA_Breach (BOOL) is the prediction target. Four raw columns (priority, channel, type, customer age) become the feature set after one-hot encoding."

### Data-quality calls worth explaining
- "Timestamps are the least complete fields" — > "First Response Time is present on 5,650 of 8,469 rows and Time to Resolution on only 2,769. Rows missing either are dropped, so SLA analysis runs on the resolved subset. Volume and CSAT stats still use all 8,469."
- "No true creation timestamp" — > "The raw data only had first-response and resolution times. A creation time was inferred as a 1–5 hour window before first response so resolution hours were realistic. A documented assumption, flagged as a limitation."
- "Dropped negative durations" — > "Rows where the inferred math produced a negative resolution time were removed as source-data logic errors before any analysis ran."

### Next
- Label: "Next artifact" · Title: "Model Card"

---

## Work · SLA · Model Card (/work/sla-optimization/model)
<!-- source: src/app/work/sla-optimization/model/page.tsx -->
### Metadata
- title: "SLA · Model Card (S3) | David Ezieshi"

### Hero
- Badge: "Artifact S3 · Model Card"
- H1: "A model tuned for dollars, not accuracy."
- Intro: > "A Random Forest with balanced class weights, trained to predict SLA breaches on a held-out set of 1,694 tickets. Every headline number is from the real run."

### Metric labels
- ROC-AUC / "Precision on breach" / "Recall on breach" / "F1 (breach)" / Accuracy

### Confusion matrix
- Headers: "Pred. safe", "Pred. breach"
- Row headers: "Actual safe", "Actual breach"
- Cell keys: "true negative", "false alarm", "missed breach", "caught breach"
- Caption: > "A missed breach costs $200–$500; a false alarm costs minutes of review. The threshold sits low on purpose."

### Model comparison
- Logistic Regression · baseline — "Linear benchmark trained for comparison."
- Random Forest · chosen — "Balanced class weights. Chosen for the cost-sensitive operating point, not raw accuracy."

### Model inputs
- Ticket Priority: "Critical vs. the rest is the dominant split. Sets the SLA target and carries the cost."
- Ticket Type: "Refund and cancellation load run slightly hotter on handling time."
- Ticket Channel: "Modest signal; the diagnostics showed channel effect is small."
- Customer Age: "The one numeric input; interacts with priority in the tree splits."

### Honest limits
- "16% precision by design" — > "Catching every breach means flagging roughly six safe tickets per real one. That is acceptable only because a review is cheap and a miss is not."
- "Scores at intake, not over time" — > "The model scores a ticket once. It does not re-rank a ticket as it ages toward its deadline, which is the natural next version."
- "Four features only" — > "Priority, type, channel, and age. Ticket age at scoring and live agent workload would sharpen it, but were not in the source data."

### Next
- Label: "Next artifact" · Title: "Methodology Diagram"

---

## Work · SLA · Methodology (/work/sla-optimization/method)
<!-- source: src/app/work/sla-optimization/method/page.tsx -->
### Metadata
- title: "SLA · Methodology (S4) | David Ezieshi"
- description: "The eight-phase pipeline from raw tickets to a capacity-aware escalation plan, one stage per notebook phase."

### Hero
- Badge: "Artifact S4 · Methodology"
- H1: "Raw tickets in, escalation plan out."
- Intro: > "The whole pipeline in one diagram, so a reviewer sees the method, not just the results. Every node maps to a phase in the notebook. Hover a stage to trace what feeds it and what it produces."

### Phases
- 0 → 1 · Foundation — > "Infer a valid creation time, clean impossible durations, and derive per-priority SLA targets so a breach can be defined at all."
- 2 → 3 · Diagnose & validate — > "EDA locates the loss; chi-square and a Welch t-test prove the priority effect is real, not noise."
- 4 · Predictive model — > "Encode features, split 80/20, train a Random Forest with balanced weights against a logistic-regression baseline."
- 5 → 8 · Optimize & deploy — > "Sweep escalation capacity, staff to the risk hour, and package it as a command center plus three recommendations."

### Callout
> "Diagnose, validate, then predict. The order is deliberate: EDA finds where the money leaks, a statistical test proves the pattern is structural, and only then does a model score individual tickets. Skipping the validation gate is the difference between noticing a pattern and defending a decision to leadership."

### Next
- Label: "Next artifact" · Title: "The write-up"

---

## Work · SLA · Write-up (/work/sla-optimization/doc)
<!-- source: src/app/work/sla-optimization/doc/page.tsx -->
### Metadata
- title: "SLA · Write-up (S5) | David Ezieshi"
- description: "The long-form case study behind the interactive Sniper Command Center, problem, method, findings, recommendations."

### Hero
- Badge: "Artifact S5 · Write-up · Reading mode"
- H1: "The analysis, in prose."
- Intro: > "The long-form case study behind the interactive command center, for readers who want the story rather than the controls. A scroll-spy table of contents tracks where you are."

### Reader content
<!-- source: src/components/work/sla/SlaDocReaderClient.tsx -->
- Title: "Stopping SLA Breaches Before They Happen"
- Meta: Author "David Ezieshi" · Length "~1,300 words · 6 min read" · Repo "github.com/ezieshie-stack/Customer-Support-SLA-Optimization-Project"
- Doc code: "SLA Optimization · Case study"
- Live CTA: "Open the Sniper Command Center"
- Live blurb: > "Prefer the interactive version? The command center lets you set capacity and watch the breach cost caught."

### Next
- Label: "Back to" · Title: "SLA Optimization overview"

---

## Work · SLA · Shared components
<!-- source: src/components/work/sla/SniperCenter.tsx -->
- Field: "Daily escalation capacity" — Options: 10 / 25 / 50 / 75 / 100 / All
- Field: "Review cost per ticket"
- Section header: "Today's kill list · top {reviews} of {day.length}"
- Legend: "will breach", "safe"
- Gauge label: "of breach cost caught"
- Metric labels: "Targeted reviews", "Gross savings", "Review cost", "Net savings · ROI"

<!-- source: src/components/work/sla/SlaSubNav.tsx -->
- Back link: "Back to SLA hub"
- Tabs: "S1 · Diagnostics", "S2 · Data", "S3 · Model", "S4 · Method", "S5 · Write-up"

<!-- source: src/components/work/sla/BreachFlatness.tsx -->
- Cohorts: "Cancellation request", "Refund request", "Technical issue", "Product inquiry", "Billing inquiry"

---

## Work · Movie Industry Profitability (/work/movie-profitability)
<!-- source: src/app/work/movie-profitability/page.tsx -->
### Metadata
- title: "Movie Industry Profitability | David Ezieshi"
- description: "5,009 films tracked through an 8-stage investment-to-profitability funnel, where the money dies and which levers actually work."

### Hero
- Badge: "Profitability Analytics · Interactive"
- H1: "Where does the money die?"
- Intro: > "Nearly half of all films lose money. This funnel tracks 5,009 of them from investment to profit, one stage at a time. Click any stage to see how many films survive it, and where the most capital is destroyed."

### Funnel caption
> "Investment-to-Profitability funnel, 5,009 films (1970–2017). Counts verbatim from the movies-dataset repo. Open the live Streamlit dashboard →"

### The analyst's brief
- Eyebrow: "The analyst's brief"
- "Why it matters" — > "A studio spends ~$35M to produce one film with no prototype and no soft launch. Nearly half never recover their cost. Every misallocated greenlight is production capital that could have funded a structurally safer bet."
- "The question" — > "Where in the investment-to-profit pipeline does money get lost, and which levers, budget tier, genre, talent, actually reduce that risk rather than just raising the stakes?"
- "Business benefit" — > "Reframing greenlights as a portfolio, weighted toward the mid-budget sweet spot and capital-efficient genres, lifts the slate success rate from 72.5% toward 85%. On 100 films that is 12 fewer losses per cycle."
- Data source — > "TMDB 5000 (budget, revenue, genres, ratings) merged with IMDB metadata (directors, cast, social) into a 5,009-row, 42-column master. Sourced from Kaggle, cleaned in the ETL pipeline."
- Analysis type — > "Descriptive (distributions, correlations across 16 charts), then a business-framework funnel modeled on sales-pipeline conversion to locate the leak."
- Scope & caveats — > "Production budget only, so true break-even (2 to 2.5× with marketing) sits higher. Theatrical revenue only, no streaming or merchandise. Data ends 2017, not inflation-adjusted."
- Tooling — > "Python (Pandas, NumPy) for the pipeline, Matplotlib and Seaborn for the 16 static charts, Streamlit and Plotly for the live 5-page dashboard."

### Bigger budgets are not safer returns
- Eyebrow: "Bigger budgets are not safer returns"
- Sub: > "Success rate by budget tier. Budget correlates with revenue at 0.73, yet the mid tier, not the mega tier, is the best risk-adjusted bet once you weigh the cost of a single failure."
- Tier "Low (<$15M)" — > "High variance. Most fail quietly; the rare hit returns thousands of percent."
- Tier "Mid ($15M–$40M)" (best) — > "Best risk-adjusted: consistent returns, limited downside. The sweet spot."
- Tier "High ($40M–$100M)" — "Solid performers, but capital-intensive per bet."
- Tier "Mega ($100M+)" — > "Highest success rate, but a single failure wipes out multiple wins."

### Findings, and what to do about them
- Finding: > "The biggest capital leak is the 576 films that earned box office revenue but recovered under 50% of their budget. The failure is at the cost line, not the demand line."
- Rec bold: "Break-even analysis before every greenlight."
  > "Lowering the break-even threshold by 20% converts hundreds of almost-profitable films into profitable ones. Tighter upfront cost modeling is the highest-leverage intervention."
- Finding: > "Horror and Mystery deliver the highest ROI on the lowest budgets. Weighted toward those genres, a slate's success rate runs 84.6 to 85.7% against the 72.5% industry average."
- Rec bold: "Weight capital toward Horror and Mystery."
  > "Treat genre as an investment decision, not just a creative one. On a 100-film portfolio the genre tilt is worth 12 fewer losses per cycle."
- Finding: > "Mega-budget films succeed 90.6% of the time but cost $100M+ each, so one failure erases several wins. Mid-budget films are the most consistent at 68.5%. Proven directors beat the average on both revenue and ROI."
- Rec bold: "Anchor the slate on mid-budget, attach proven directors to the big bets."
  > "Reserve nine-figure budgets for titles hedged by a track-record director. Model director history as a greenlight input."

### Go deeper
- M1 "Genre & Budget" — "Which genres and budget tiers actually pay back." — Risk levers
- M2 "Data Dictionary" — "42 columns across two sources, and what feeds the analysis." — 42 columns
- M3 "Funnel Model" — "The 8-segment funnel with profit and rating per stage." — 8 segments
- M4 "Methodology" — "EDA, ETL, and funnel pipeline as an interactive diagram." — 3 phases
- M5 "Write-up" — "The full case study in reading mode." — 7 min read

### Outcomes
- 5,009 · "Films analyzed"
- 54.5% · "Profitable"
- 0.78 · "Votes ↔ revenue"
- 0.73 · "Budget ↔ revenue"

### Under the hood
- Body: > "Two Kaggle sources (TMDB 5000, IMDB metadata) merged into a 42-column master; JSON genre strings parsed, financial metrics derived (Profit, ROI, Is Profitable), and categorical features engineered (budget tier, ROI band, era, runtime). 16 EDA charts, then an 8-stage investment-to-profitability funnel. Packaged as a 5-page Streamlit dashboard."
- Chips: Python, Pandas, Matplotlib, Seaborn, Streamlit, Plotly

### Next
- Label: "Start with" · Title: "Genre & Budget"

---

## Work · Movie · Genre & Budget (/work/movie-profitability/genre)
<!-- source: src/app/work/movie-profitability/genre/page.tsx -->
### Metadata
- title: "Movie · Genre & Budget (M1) | David Ezieshi"

### Hero
- Badge: "Artifact M1 · Genre & Budget"
- H1: "The two levers a studio actually controls."
- Intro: > "You cannot control whether a film connects, but you can choose its budget tier and its genre before a dollar is spent. Both move the odds measurably, and neither works the way intuition suggests."

### Budget tier · success rate
- Eyebrow: "Budget tier · success rate"
- Sub: > "Success = revenue exceeds production budget. Exact rates across 3,894 films with budget data. The mega tier wins most often but costs the most to lose."
- Low (<$15M) — ROI "High variance" — > "Most fail quietly; the rare hit (Paranormal Activity: $15K budget, $194M revenue) returns thousands of percent."
- Mid ($15M–$40M) — ROI "86.5% median" — > "Best risk-adjusted returns: consistent, with limited downside. The sweet spot for a slate's core."
- High ($40M–$100M) — ROI "Moderate" — "Solid performers, but capital-intensive per bet."
- Mega ($100M+) — ROI "Lower" — > "Highest success rate of any tier, but when they fail the losses are catastrophic."
- Callout: > "The counter-intuitive read: budget correlates with revenue at 0.73, so bigger films do earn more. But the marginal return on each extra dollar falls. A $200M film does not earn twice a $100M film. Mid-budget titles ($15M–$40M) deliver the best return per dollar of risk, which is why they anchor a healthy slate."

### Genre · as a risk lever
- Eyebrow: "Genre · as a risk lever"
- Sub: > "Genre selection is an investment decision, not just a creative one. Ranked by ROI efficiency, highest first."
- "Horror / Mystery" · Highest — > "Audiences show up regardless of budget. No need for $100M of VFX, so capital efficiency is unmatched."
- "Animation / Family" · High — > "Built-in audience of kids plus parents, and merchandise revenue extends value well beyond the box office."
- "Comedy" · Moderate — > "The steady earner. Consistent returns on moderate budgets, but rarely spectacular."
- "Action / Adventure" · Moderate — > "Highest total revenue, but requires massive budgets ($80M+) and carries the steepest downside risk."
- "Drama" · Lowest — > "The most produced and most oversaturated genre. Too many films chase the same audience."

### Callout
> "Quantified impact. Had a studio weighted its portfolio toward Horror and Mystery titles, its success rate would have run 84.6 to 85.7%, against the industry's 72.5% overall. That is a 12+ point gain in capital efficiency, or 12 fewer losses on a 100-film slate. These are the actual success rates from the 5,009 films in the dataset, not a projection."

### Next
- Label: "Next artifact" · Title: "Data Dictionary"

---

## Work · Movie · Data Dictionary (/work/movie-profitability/data)
<!-- source: src/app/work/movie-profitability/data/page.tsx -->
### Metadata
- title: "Movie · Data Dictionary (M2) | David Ezieshi"

### Hero
- Badge: "Artifact M2 · Data Dictionary"
- H1: "Two messy sources, one clean master."
- Intro: > "TMDB (4,803 rows) and IMDB metadata (5,043 rows) merged into a 5,009-row, 42-column master. Every column, its type, what it means, and its role."

### Legend
- "Source gap" — > "A source column with material missingness (Budget ~10%, Revenue ~13%). Handled in ETL; films missing these drop out at the funnel's first two stages, which is itself a finding."
- "Derived outcome" — > "Computed from Budget and Revenue (Profit, ROI, Is Profitable). These define success and drive the funnel thresholds, outputs, never treated as independent inputs."
- "Identifier" — > "Unique per film (id, Title). Used to join sources and label rows; no generalisable analytical signal on their own."

### Callout
> "Data quality, honestly. Genres arrived as raw JSON strings needing custom parsing. Budget was missing for 10% of films, revenue for 13%, and social metrics had nulls that were logically imputed. Every gap is documented rather than silently filled, because the missing-budget films are not noise, they are the funnel's first and largest drop-off."

### Next
- Label: "Next artifact" · Title: "The Funnel Model"

---

## Work · Movie · Funnel (/work/movie-profitability/funnel)
<!-- source: src/app/work/movie-profitability/funnel/page.tsx -->
### Metadata
- title: "Movie · Funnel Model (M3) | David Ezieshi"

### Hero
- Badge: "Artifact M3 · Funnel Model"
- H1: "The investment-to-profitability funnel."
- Intro: > "Borrowing the method from sales-pipeline analysis, each film is tracked from investment through to profit. The framework is the deliverable: it does not just say 54.5% are profitable, it shows exactly where the other 45.5% fall out."

### Cumulative funnel
- Eyebrow: "Cumulative funnel"
- Sub: > "How many of the 5,009 films reach at least each stage. Width is share of the total cohort."
- Stages (with notes):
  - "Total films" · "starting cohort"
  - "Has budget data" · "budget missing for 1,058"
  - "Generated revenue" · "184 earned nothing"
  - "Recovered 50%+ of budget" · "biggest capital leak: 576 lost here"
  - "Profitable (rev > budget)" · "the break-even line"
  - "Strong ROI (>100%)" · "doubled the budget"
  - "Exceptional ROI (>300%)" · "the capital-efficient hits"

### 8 segments by outcome
- Eyebrow: "The 8 segments, by outcome"
- Sub: > "Each film counted once, in the single furthest bucket it reached. Average ROI and audience rating are real per-segment figures. Notice the rating climb as outcomes improve."
- "No investment data" — "Budget unknown, so ROI is undefined."
- "Invested, no revenue" — "Shelved or unreleased."
- "Major loss (<50% back)" — "The biggest capital leak."
- "Partial recovery" — "Earned most of it back, not all."
- "Break even" — "Just cleared the line."
- "Moderate profit" — "Comfortable return."
- "Strong profit" — "More than doubled."
- "Exceptional ROI (>300%)" — "The hits. Highest ratings too."
- Footnote: > "The exceptional bucket's average is distorted by extreme outliers (Paranormal Activity returned ~4000%), which is why the funnel reports counts, not mean ROI."

### Callouts
- > "The #1 bottleneck. 576 films sit in \"major loss\": they earned box office revenue but recovered under half their budget. This is where the most capital is destroyed industry-wide. The highest-leverage fix is not making better films, it is tighter cost control before greenlight. Lower the break-even threshold 20% and hundreds of almost-profitable titles tip into profit."
- > "Quality and profit move together. Average audience rating rises at every stage, from 5.57 among total losses to 6.72 among the exceptional performers. Better films do earn more, but rating alone does not clear the break-even wall."

### Next
- Label: "Next artifact" · Title: "Methodology"

---

## Work · Movie · Methodology (/work/movie-profitability/method)
<!-- source: src/app/work/movie-profitability/method/page.tsx -->
### Metadata
- title: "Movie · Methodology (M4) | David Ezieshi"
- description: "The three-phase pipeline from two raw CSVs to the funnel and dashboard, one stage per script."

### Hero
- Badge: "Artifact M4 · Methodology"
- H1: "Two raw CSVs in, a funnel out."
- Intro: > "The whole pipeline in one diagram, so a reviewer sees the method, not just the charts. Every node maps to a script in the repo. Hover a stage to trace what feeds it and what it produces."

### Phases
- 1 · Exploratory analysis — > "Understand the data before judging it: distributions, correlations, genre and people rankings across 16 visualizations."
- 2 · ETL pipeline — > "Merge two messy sources, parse JSON genres, derive Profit and ROI, and engineer budget, era, and rating tiers into 6 clean tables."
- 3 · Funnel analysis — > "Model the lifecycle as an 8-stage investment-to-profit funnel, broken down by genre, budget tier, and era to find the leak."

### Callout
> "Understand, engineer, then frame. The order matters: EDA builds intuition for the data's shape, ETL turns two messy sources into analysis-ready tables, and only then does the funnel impose a business framework on top. The funnel was the most valuable output, not because the numbers surprised anyone, but because it gave stakeholders a way to reason about where a movie investment actually fails."

### Next
- Label: "Next artifact" · Title: "The write-up"

---

## Work · Movie · Write-up (/work/movie-profitability/doc)
<!-- source: src/app/work/movie-profitability/doc/page.tsx -->
### Metadata
- title: "Movie · Write-up (M5) | David Ezieshi"
- description: "The long-form case study behind the interactive movie profitability funnel, problem, method, findings, recommendations."

### Hero
- Badge: "Artifact M5 · Write-up · Reading mode"
- H1: "The analysis, in prose."
- Intro: > "The full case study behind the interactive funnel, for readers who want the story rather than the controls. A scroll-spy table of contents tracks where you are."

### Reader content
<!-- source: src/components/work/movie/MovieDocReaderClient.tsx -->
- Title: "Where Money Dies in the Movie Business"
- Meta: Author "David Ezieshi" · Length "~1,100 words · 7 min read" · Repo "github.com/ezieshie-stack/movies-dataset"
- Doc code: "Movie Profitability · Case study"
- Live CTA: "Open the interactive funnel"
- Live blurb: > "Prefer the interactive version? The case-study hub lets you click through the funnel stage by stage."

### Next
- Label: "Back to" · Title: "Movie Profitability overview"

---

## Work · Movie · Shared components
<!-- source: src/components/work/movie/MovieSubNav.tsx -->
- Back link: "Back to Movie Profitability hub"
- Tabs: "M1 · Genre & Budget", "M2 · Data", "M3 · Funnel", "M4 · Method", "M5 · Write-up"

<!-- source: src/components/work/movie/FunnelExplorer.tsx -->
### Stage stories
- "Total films" — > "The full dataset: 5,009 films released between 1970 and 2017, merged from TMDB (4,803 rows) and IMDB metadata (5,043 rows) into one 42-column master."
- "Has budget data" — > "1,058 films drop out here with no production budget on record. This is a data-availability gap, not an economic one, so ROI is undefined for them and they sit outside the money analysis."
- "Generated revenue" — > "184 films had a budget but never recorded box office revenue: shelved, unreleased, or data-incomplete projects."
- "Recovered 50%+ of budget" — > "576 films earned money at the box office but could not recover even half their production cost. This is the single biggest capital leak in the industry, and where tighter pre-greenlight cost control has the most leverage."
- "Profitable (rev > budget)" — > "The break-even line. 54.5% of all films clear it, meaning nearly half never do. This is why studios must think in portfolio terms rather than betting on individual titles."
- "Strong ROI (>100%)" — > "40.3% of films more than doubled their production budget. Profit and quality track together here: average audience rating keeps climbing through every stage of the funnel."
- "Exceptional ROI (>300%)" — > "28.4% of films returned more than 300%. These are the capital-efficient hits, disproportionately low-budget Horror and Mystery titles that need no nine-figure VFX to succeed."
- Drop label prefix: "↓ {d} lost from prior stage"
- Suffix (biggest leak): "· biggest capital leak"
- First stage label: "starting cohort"
- Detail panel index: "Stage {sel + 1} of 7"
- Detail panel sub: "{pctTotal}% of all films · {conv}% kept from prior"
- Tag: "Biggest leak"

---

## Work · Fraud Detection SQL Pipeline (/work/fraud-detection)
<!-- source: src/app/work/fraud-detection/page.tsx -->
### Metadata
- title: "Fraud Detection SQL Pipeline | David Ezieshi"
- description: "A 7-layer PostgreSQL pipeline scoring PaySim transactions with 4 weighted, auditable rules."

### Hero
- Badge: "Fraud & Risk Analytics · Interactive"
- H1: "Score a transaction for fraud."
- Intro: > "This is the rules engine I wrote in SQL, running live in your browser. Toggle which rules a transaction trips and watch the risk score, tier, and the action a fraud analyst would take. No black box, every point is explainable."

### Sandbox caption
> "Weights, thresholds, and tiers verbatim from sql/04_rules_engine.sql. Built on the PaySim dataset in PostgreSQL."

### The analyst's brief
- Eyebrow: "The analyst's brief"
- Sub: > "Fraud systems rarely fail by missing fraud, they fail by over-alerting. Precision, not just recall, is the business constraint."
- "Why it matters" — > "Every false positive burns an analyst's hour and freezes a real customer's payment. Precision is what turns a scoring system from an alert firehose into a decision tool."
- "The question" — > "Which transaction patterns reliably indicate fraud, how do we score risk without a black-box model, and where should the alert threshold sit to balance fraud loss against the team's real capacity?"
- "Business benefit" — > "An interpretable, fully auditable engine produces a prioritized daily queue and a merchant blocklist the business can act on same-day, and it survives a compliance review because every alert states its reasons."
- Data source — > "PaySim synthetic financial transactions (Kaggle), loaded into PostgreSQL. 11 columns including balances before and after for both parties, plus an isFraud label. Time is an integer step, treated as 1 hour."
- Analysis type — > "Diagnostic and rule-based. Window functions build velocity and destination-history features; a weighted SQL scoring engine turns them into an interpretable risk score, no ML."
- Scope & caveats — > "PaySim is synthetic, so absolute fraud rates are illustrative. Merchants are inferred from nameDest since PaySim does not flag them explicitly. 30-day history approximated as 720 steps."
- Tooling — > "PostgreSQL only: window functions (COUNT/SUM OVER with RANGE frames), views for each pipeline layer, and QA assertions. Portable to DuckDB."

### Where to draw the line
- Eyebrow: "Where to draw the line"
- Sub: "The threshold is a capacity decision, not a statistical one."
- Score ≥ 80 · Queue — > "Velocity + spend must both fire (plus one more). Highest confidence, smallest queue."
- Score ≥ 60 · High — > "Any combination reaching 60. Freeze-worthy. Wider net, more analyst load."
- Score ≥ 40 · Watch — > "A single strong signal (velocity alone). Broadest coverage, highest noise."

### Findings, and what to do about them
- Finding: > "Fraud is a pattern within a timeframe, not a lifetime total. An account's overall volume looks normal even when it made a dozen transfers in one hour. A GROUP BY cannot see that; a window function can."
- Rec bold: "Build velocity features with window functions."
  > "Rolling 1-hour counts and spend per account, plus a 30-day destination fraud rate, preserve transaction-level detail while scoring behavior over time."
- Finding: > "A regulated team cannot act on a score it cannot explain. A frozen account has to be defended to compliance, and 'the model said so' is not a defense."
- Rec bold: "Score with weighted, auditable rules."
  > "Four readable conditions summing to 110, each attaching its own reason string, so every alert explains itself and the logic can be tuned by a human."
- Finding: > "Precision rises with the score: the highest-scoring alerts are far likelier to be true fraud. Flooding analysts with low-score alerts destroys the queue's value."
- Rec bold: "Set the queue at score ≥ 80 and tune to capacity."
  > "That cutoff needs velocity and spend to both fire, delivering the highest-confidence slice. Simulate ≥60 and ≥40 only if the team has the headroom."

### Go deeper
- F1 "SQL Explorer" — "The 7 analysis queries: velocity, balance, structuring, precision." — 7 queries
- F2 "Data Dictionary" — "The 11 PaySim columns and how each one is used." — 11 columns
- F3 "Rules Engine" — "The 4 weighted rules, tiers, actions, and precision framework." — 4 rules · 110 max
- F4 "Methodology" — "The layered SQL pipeline as an interactive diagram." — 7 layers
- F5 "Write-up" — "The full case study in reading mode." — 6 min read

### Outcomes
- 7 · "Pipeline layers (SQL)"
- 4 · "Weighted scoring rules"
- 3 · "Risk tiers + actions"
- 0 · "Black-box models"

### Under the hood
- Body: > "A layered PostgreSQL pipeline: raw table → staging view → feature mart (window functions for 1-hour velocity and 30-day destination history) → rules-engine view (weighted score + reasons) → daily alerts, merchant risk, and a customer watchlist. Seven ad-hoc analysis scripts prototype and tune the logic; QA assertions guard data integrity."
- Chips: PostgreSQL, Window Functions, Rule-based Scoring, PaySim, DuckDB-portable

### Next
- Label: "Start with" · Title: "SQL Query Explorer"

---

## Work · Fraud · SQL (/work/fraud-detection/sql)
<!-- source: src/app/work/fraud-detection/sql/page.tsx -->
### Metadata
- title: "Fraud · SQL Explorer (F1) | David Ezieshi"
- description: "The 7 fraud-detection analysis queries, velocity, balance anomalies, structuring, precision analysis."

### Hero
- Badge: "Artifact F1 · SQL Query Explorer"
- H1: "Seven queries, the real SQL."
- Intro: > "Each detection pattern lives as a versioned SQL script against the PaySim table. Every card shows the exact query and what the pattern means."

### Queries
- 01 · "Baseline metrics" (Discovery) — "What is normal? Volume, fraud rate, amount distribution, and the worst senders."
  > "Establishes the baseline every later rule is measured against. In PaySim fraud lives almost entirely in TRANSFER and CASH_OUT, so the whole system focuses there."
- 02 · "Velocity fraud (burst detection)" (Discovery) — "Which accounts fire a rapid burst of transfers in a short window?"
  > "A window function counts transactions and sums spend over a rolling 3-step (3-hour) frame per account, so a normal-looking lifetime total cannot hide an hourly burst."
- 03 · "Balance anomalies (follow the money)" (Anomaly) — "Do the balances reconcile, and who receives big money into an empty wallet?"
  > "When newbalance does not equal oldbalance − amount, the ledger has been tampered with. An empty destination suddenly receiving a large sum is a classic cash-out endpoint."
- 04 · "Structuring / smurfing" (Anomaly) — "Who splits a big transfer into chunks to stay under the reporting threshold?"
  > "Smurfing is a daily total over $10,000 where every single transfer stays under a $3,000 cap: deliberately engineered to slip beneath reporting rules."
- 05 · "Risk scoring logic" (Risk engineering) — "How do the signals combine into one interpretable score?"
  > "Four weighted CASE statements sum to a score out of 110. This is the whole engine, and it is fully auditable: no coefficients, no black box, just readable thresholds."
- 06 · "False-positive analysis" (Risk engineering) — "Does precision actually rise with the score?"
  > "Bucketing flagged transactions by score and measuring precision per bucket proves the score separates high-risk from low-risk traffic, which justifies drawing the queue at the top."
- 07 · "Alert threshold simulation" (Risk engineering) — "How many alerts per day at each threshold, and can the team handle it?"
  > "Average alerts per day at each cutoff turns the threshold into a staffing decision. Pick the score that fills the team's capacity without overflowing the queue."

### Next
- Label: "Next artifact" · Title: "Data Dictionary"

---

## Work · Fraud · Data Dictionary (/work/fraud-detection/data)
<!-- source: src/app/work/fraud-detection/data/page.tsx -->
### Metadata
- title: "Fraud · Data Dictionary (F2) | David Ezieshi"
- description: "The 11 PaySim columns grouped by role, with reconciliation callouts."

### Hero
- Badge: "Artifact F2 · Data Dictionary"
- H1: "Eleven columns, one ledger."
- Intro: > "The PaySim schema: what each column means and how it is used. The four balance columns do the quiet work, they let a reconciliation check catch tampering that the amount alone would never reveal."

### Column meanings
- step: "Unit of time. PaySim uses integer steps; this project treats 1 step = 1 hour, and every window function is built on it."
- type: "CASH-IN, CASH-OUT, DEBIT, PAYMENT, or TRANSFER. Fraud concentrates in TRANSFER and CASH_OUT, so detection focuses there."
- amount: "Transaction amount. Drives the high-spend rule and the structuring threshold."
- nameOrig: "Originating customer. Partition key for velocity and spend windows; uniquely identifies a sender."
- nameDest: "Recipient. Partition key for the 30-day destination fraud rate; a merchant or another user."
- oldbalanceOrg: "Sender balance before. With the amount, gives the expected post-balance for reconciliation."
- newbalanceOrig: "Sender balance after. A mismatch vs (old − amount) signals ledger tampering."
- oldbalanceDest: "Recipient balance before. Zero here plus a large inbound amount flags a cash-out endpoint."
- newbalanceDest: "Recipient balance after. Checked against (old + amount) for reconciliation."
- isFraud: "Ground-truth fraud flag (1/0). Used only to validate precision, never as a scoring input."
- isFlaggedFraud: "PaySim's own flag for very large transfers (>200k). A reference marker, not used by the engine."

### Legend
- "Outcome label" — > "isFraud and isFlaggedFraud are ground truth, used only to measure precision after the fact. Feeding them into the score would leak the answer the engine is meant to infer."
- "Identifier / partition key" — > "nameOrig and nameDest identify the parties and act as the PARTITION BY keys for the window functions; no standalone signal, but essential to per-account behavior."

### Callout
> "Integrity first. A QA script asserts the pipeline's health before any scoring runs: no null accounts or steps, no negative amounts, and every isFraud value strictly 0 or 1. A detection system is only as trustworthy as the ledger under it."

### Next
- Label: "Next artifact" · Title: "The Rules Engine"

---

## Work · Fraud · Rules Engine (/work/fraud-detection/rules)
<!-- source: src/app/work/fraud-detection/rules/page.tsx -->
### Metadata
- title: "Fraud · Rules Engine (F3) | David Ezieshi"
- description: "Four weighted rules summing to 110, three tiers, and the precision framework behind the queue cutoff."

### Hero
- Badge: "Artifact F3 · Rules Engine"
- H1: "An auditable score, not a black box."
- Intro: > "The engine is four weighted rules summing to 110. A compliance officer can read every point, and every alert carries the exact reasons it fired. Interpretability is the design goal, chosen deliberately over a higher-accuracy model nobody could defend."

### The four weighted rules
- Eyebrow: "The four weighted rules"
- Sub: > "Each rule is a single SQL CASE. Points accumulate; the reason string is concatenated alongside so the score always explains itself."
- "High velocity" +40 — > "Five or more transactions inside one hour. The strongest single signal, the fingerprint of an automated burst attack."
- "High spend" +30 — "At least $1,000 moved within a single hour window."
- "Risky destination" +25 — > "The recipient's fraud rate over the last 30 days (720 steps) is 2% or higher: a known cash-out endpoint."
- "Odd hours" +15 — "Transaction fired between midnight and 5am, when legitimate activity is lowest."
- Callout: > "Maximum score is 110. To clear the queue cutoff of 80, a transaction needs high velocity (40) and high spend (30) plus at least one more rule, so the queue that reaches a human always represents a rapid, high-value burst, never a single weak signal."

### Score to action
- Eyebrow: "Score to action"
- Sub: "The score is only useful if it maps to a decision. Each tier has a defined operational response."
- ">= 80" · Queue — > "Reaches the daily investigation queue. Requires velocity + spend to both fire, so it is the highest-confidence slice."
- ">= 60" · High — "Freeze account + investigator review."
- "30 – 59" · Medium — "Step-up authentication (OTP) + continue monitoring."
- "< 30" · Low — "No action."

### Callout
> "Why the cutoff is defensible. A false-positive analysis buckets flagged transactions by score and measures precision per bucket. Precision rises with the score, so the highest-scoring alerts are the likeliest to be real fraud. That is the evidence behind drawing the queue at the top rather than alerting on everything."

### Next
- Label: "Next artifact" · Title: "Methodology"

---

## Work · Fraud · Methodology (/work/fraud-detection/method)
<!-- source: src/app/work/fraud-detection/method/page.tsx -->
### Metadata
- title: "Fraud · Methodology (F4) | David Ezieshi"
- description: "A layered PostgreSQL pipeline from raw PaySim logs to a ranked investigator queue, with an analytics lab tuning the engine."

### Hero
- Badge: "Artifact F4 · Methodology"
- H1: "Raw logs in, a ranked queue out."
- Intro: > "A layered pipeline where each SQL view builds on the last, with an analytics lab off to the side that tunes the engine. Hover a stage to trace what feeds it and what it produces."

### Phases
- 1 · Ingest & stage — > "Load PaySim into a raw table, then a staging view that guarantees consistent casing and a clean interface for everything downstream."
- 2 · Engineer features — > "Window functions build 1-hour velocity and spend per account, plus a 30-day rolling fraud rate per destination."
- 3 · Score & serve — > "The rules engine assigns a weighted, explainable score, feeding a daily alert queue, a merchant blocklist, and a watchlist."
- 4 · Analytics lab — > "Seven ad-hoc scripts discover patterns and tune the thresholds, then feed the tuned logic back into the engine."

### Callout
> "Views, not black boxes. Every layer is a SQL view a reviewer can open and read, and the analytics lab loops back into the engine: patterns discovered ad-hoc become weighted rules, and the threshold simulation sets where the queue is drawn. The pipeline is a decision system, not just a report."

### Next
- Label: "Next artifact" · Title: "The write-up"

---

## Work · Fraud · Write-up (/work/fraud-detection/doc)
<!-- source: src/app/work/fraud-detection/doc/page.tsx -->
### Metadata
- title: "Fraud · Write-up (F5) | David Ezieshi"
- description: "The long-form case study behind the interactive scoring sandbox, problem, method, findings, recommendations."

### Hero
- Badge: "Artifact F5 · Write-up · Reading mode"
- H1: "The analysis, in prose."
- Intro: > "The full case study behind the scoring sandbox, for readers who want the story rather than the controls. A scroll-spy table of contents tracks where you are."

### Reader content
<!-- source: src/components/work/fraud/FraudDocReaderClient.tsx -->
- Title: "Catching Fraud Without Drowning the Analysts"
- Meta: Author "David Ezieshi" · Length "~950 words · 6 min read" · Repo "github.com/ezieshie-stack/Fraud-Detection-SQL-Window-Functions"
- Doc code: "Fraud Detection · Case study"
- Live CTA: "Open the scoring sandbox"
- Live blurb: > "Prefer the interactive version? The case-study hub lets you toggle the rules and watch the score move."

### Next
- Label: "Back to" · Title: "Fraud Detection overview"

---

## Work · Fraud · Shared components
<!-- source: src/components/work/fraud/ScoringSandbox.tsx -->
- Section header: "Toggle the rules that fire for a transaction"
- Rule: "High velocity" — "· txn_cnt_1h ≥ 5"
- Rule: "High spend" — "· spend_1h ≥ $1,000"
- Rule: "Risky destination" — "· dest_fraud_rate_30d ≥ 2%"
- Rule: "Odd hours" — "· hour ∈ [00:00, 05:00]"
- Toggle labels: "Fires", "Clear"
- Gauge label: "RISK SCORE / 110"
- Section header: "Recommended action"
- Actions: "Freeze account + investigator review", "Step-up auth (OTP) + monitor", "No action"
- Section header: "Daily queue (score ≥ 80)"
- Queue in: "Reaches an investigator today."
- Queue below: "Below the queue cutoff, monitored not escalated."
- Section header: "risk_reasons"
- Empty state: "none"

<!-- source: src/components/work/fraud/FraudSubNav.tsx -->
- Back link: "Back to Fraud Detection hub"
- Tabs: "F1 · SQL", "F2 · Data", "F3 · Rules", "F4 · Method", "F5 · Write-up"

---

## Work · Dynamic project detail (/work/[slug])
<!-- source: src/app/work/[slug]/page.tsx -->
### Metadata
- Title (matched slug): "{project.title} | David Ezieshi"
- Title (unmatched): "Project | David Ezieshi"

### Chrome
- Back link: "Back to All Projects"
- Meta strip labels: Client / Timeline / My Role / Team / Tools
- Section eyebrows: "The Challenge", "My Approach", "The Impact", "Deliverables"

(Category, title, summary, challenge text, approach items, metrics, deliverables — sourced from `@/data/projects` per slug; not hardcoded in this file.)

### Error state
<!-- source: src/app/work/[slug]/error.tsx -->
- Eyebrow: "Couldn't load this project"
- H1: "This case study failed to load."
- Body: > "The project exists but something went wrong fetching the details. The rest of the site is unaffected."
- Button: "Try again"
- Link: "All projects"

### Not found
<!-- source: src/app/work/[slug]/not-found.tsx -->
- Eyebrow: "Project not found"
- H1: "Can't find that case study."
- Body: > "The project slug doesn't match anything in the work catalog. It may have been renamed or removed."
- Link: "See all work"

### Project catalog (for reference / fallback content)
<!-- source: src/data/projects.ts -->
- FIIT Co. Operational Ecosystem — Category: "Operations Platform" — Client: "FIIT Co. (George Brown Work-Integrated Learning)" — Role: "Business Analyst & Platform Administrator" — Team: "Within a six-person engagement"
  - Summary: > "A two-application operations platform for a fitness business: an internal class-management system and a paired public site, delivered and administered end to end on Next.js and Convex."
  - Challenge: > "FIIT Co. needed one system to run class programming, instructor scheduling, delivery tracking, and a public marketing site, without a dedicated engineering team. The work had to go from stakeholder requirements all the way to a live, maintainable deployment."
  - Approach items:
    - "Ran requirements elicitation with the partner and authored the engagement's BA Report covering scope, stakeholders, current and future state, and the data model."
    - "Translated the BA Report into working configuration: forms, workflows, permissions, and a 32-table Convex data model."
    - "Built role-based access with custom auth, approval workflows, and instructor scheduling with automated buffer-conflict detection."
    - "Shipped a self-service CMS so the partner can manage the public site (pricing, testimonials, blog, FAQ) without a developer."
  - Deliverables: BA Report; UAT Report (12 slides; 8 bugs; 13 recommendations); 56-finding P0–P3 pre-walkthrough audit; Internal class-management platform spanning 27 modules; Public marketing site with a self-service CMS; Role-based access, approval workflows, and Excel import tooling
  - Links: "View Live Site", "View Repo"
- Telco Customer Churn Analysis — Category: "Data Analytics"
  - Summary: > "A SQL and Python churn analysis of 7,043 telecom customers that segments churn drivers across contract, tenure, and service dimensions and predicts at-risk customers with a logistic-regression model."
  - Challenge: > "Month-to-month telecom customers churn far faster than contract customers, but marketing-led retention had stalled. The goal was to find the operational drivers of churn in the data and build a model that flags at-risk customers before they leave."
- Movie Industry Profitability Analysis — Category: "Analytics Dashboard"
  - Summary: > "An end-to-end analytics project on roughly 5,000 films from TMDB and IMDB: a 9-stage Python ETL pipeline feeding an investment-to-profitability funnel and a 5-page interactive Streamlit dashboard."
  - Challenge: > "Studio profitability data is messy: split across TMDB and IMDB, full of JSON-encoded genres, missing budgets, and inconsistent formats. The goal was to clean and merge it into something that could answer where film capital is won and lost."
- Fraud Detection SQL Pipeline — Category: "Data Engineering"
  - Summary: > "A PostgreSQL fraud-detection architecture on the synthetic PaySim dataset, using window functions to engineer transaction-velocity and destination-risk features for an interpretable, rule-based scoring engine."
  - Challenge: > "Fraud detection fails when it over-alerts and buries analysts. The goal was to design an interpretable, rule-based pipeline whose every alert can be explained and audited, rather than a black-box model."
- Customer Support SLA Optimization — Category: "Predictive Analytics"
  - Summary: > "A cost-sensitive machine-learning model that predicts which support tickets will breach SLA and ranks them by financial risk, surfaced in a Streamlit decision dashboard."
  - Challenge: > "Support teams miss SLAs predictably, not at random, and chasing every ticket equally wastes capacity. The goal was to predict which tickets will breach and rank them by financial risk so managers escalate only the ones that matter."
- Business Analysis & Process Design Portfolio — Category: "Business Analysis"
  - Summary: > "A set of BABOK v3 business-analysis artifacts (a Business Requirements Document, an As-Is / To-Be process design, BPMN swimlane maps, and use-case specifications) demonstrating end-to-end BA methodology on a representative operational scenario."
  - Challenge: > "Business analysis is judged on artifacts: can you scope requirements, map a process, and specify a solution clearly? This portfolio demonstrates that toolkit end to end on a representative operational-optimization scenario."

---

## Global · Errors and loading
<!-- source: src/app/error.tsx -->
- Eyebrow: "Something broke"
- H1: "That wasn't supposed to happen."
- Body: > "An unexpected error stopped this page from rendering. The issue has been logged. Try again, or head back home and pick another path."
- Button: "Try again"
- Link: "Back to home"
- Digest label prefix: "Reference:"

<!-- source: src/app/not-found.tsx (renders src/lib/content.ts `notFound`) -->
- Metadata title: "Page Not Found | Portfolio"
- Code: "404"
- H1: "Page Not Found"
- Description: > "The page you're looking for doesn't exist or has been moved."
- CTA label: "Go Back Home"

<!-- source: src/app/loading.tsx (and per-section loading.tsx variants) -->
- (No user-facing copy — pure skeleton placeholders. Applies to about, process, work, insights loading files.)

---

## Global · Small components / primitives
<!-- source: src/components/insights/Constellation.tsx -->
- (No user-facing copy — decorative canvas background)

<!-- source: src/components/PageShell.tsx -->
- (No user-facing copy — layout wrapper + eyebrow slot)

<!-- source: src/components/cms/ResumeViewer.tsx -->
- Modal heading: "Resume"
- Modal action link: "Download"
- Disabled-state note: "Resume not uploaded yet"
- Button labels supplied by parent (`downloadLabel` / `viewLabel`)

<!-- source: src/components/cms/PageSkeleton.tsx -->
- (No user-facing copy)

<!-- source: src/components/cms/LiveText.tsx -->
- (No user-facing copy — passes through `fallback` prop)

<!-- source: src/components/cms/LiveImage.tsx -->
- (No user-facing copy — passes through `alt` prop)

<!-- source: src/components/cms/Spinner.tsx -->
- Default sr-only label: "Loading"

<!-- source: src/components/Reveal.tsx -->
- (No user-facing copy — animation wrapper)

<!-- source: src/components/ThemeToggle.tsx -->
- (Icon-only control. Non-prose aria labels not included per rules.)

<!-- source: src/lib/content.ts (static fallback content) -->
- Home fallback tag: "BUSINESS ANALYST · TORONTO, CANADA"
- Home fallback titleStart: "Diagnosing Workflows."
- Home fallback titleHighlight: "Building The Fix."
- Home fallback subtitle:
> "I lead the full business-analysis lifecycle, from stakeholder requirements and process design to delivery, UAT, and evaluating the live solution. I owned exactly that on a six-person client engagement, and was the only analyst kept on to run the platform afterward. Business Analyst. Toronto."
- Home fallback metric card: "Diagnose. Redesign. Deliver." — "Three steps. One analyst. From problem to working solution."
- Featured project fallback: "Fiitco: Fitness Platform Process Redesign" — > "Redesigned end-to-end workflows, implemented role-based systems, and built operational reporting that improved efficiency by 28%."
- About page fallback tag: "ABOUT ME"
- About drives tag: "WHAT DRIVES ME"
- Insights fallback tag: "// INSIGHTS"
- Insights fallback title: "Thinking through systems, workflows, and operational clarity."
- Insights fallback intro:
> "Notes on business analysis, process design, operational systems, reporting infrastructure, and the practical work of improving how teams execute."
- Insights featured pill: "Featured Insight"
- Insights featured title: "Operational systems are only valuable when people can actually use them."
- Insights featured body: > "Good systems do more than organize information. They reduce friction, clarify ownership, improve visibility, and help teams make better decisions faster."
- Insights CTA label: "Read Insight"
- Insights filters: All / Process Design / Business Analysis / Analytics / Systems
- Insights article stubs:
  - "operational-clarity-workflows" · "Why operational clarity starts with better workflows" · Process Design · Mar 2026 · 5 min read
    > "A breakdown of how process visibility, ownership, and documentation improve team execution."
  - "requirements-to-systems" · "Turning requirements into systems teams can actually use" · Business Analysis · Mar 2026 · 6 min read
    > "How strong requirements gathering connects business needs to practical execution."
  - "dashboards-and-decisions" · "Dashboards are only useful when they support decisions" · Analytics · Feb 2026 · 4 min read
    > "Why reporting systems should focus on action, not just visualization."
- Contact fallback tag: "GET IN TOUCH"
- Contact fallback title: "Let's diagnose the problem and ship the fix."
- Contact fallback intro:
> "Whether you're hiring for an operations or analyst role, untangling a workflow, or scoping an internal tool, I'm open to conversations that move things from ambiguity to action."
- Contact form title: "Send a Message"
- Process page fallback eyebrow: "// PROCESS FRAMEWORK"
- Process page fallback title: "Systems designed for execution."
- Process page fallback description: > "My process turns operational complexity into working systems: I diagnose the bottleneck, redesign the workflow, and deliver the solution that fixes it."
- Process fallback steps (01 Listen — 02 Map — 03 Diagnose — 04 Deliver — 05 Hand Off) — see canonical /process page copy for full text
