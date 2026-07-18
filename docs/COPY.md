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
