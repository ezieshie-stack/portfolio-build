# Portfolio Artifact Checklist

Every project's "show" material — where it already lives, where it goes,
what still needs to be produced. Print this or check items off as you
gather them.

## How to use

1. Assets that already exist get **copied** from the source repo into
   `public/artifacts/<slug>/` on this repo.
2. Assets that need generation get **produced** (run a notebook,
   screenshot a tool, render a BPMN diagram, etc.) and land in the
   same folder.
3. Once assets are in `public/artifacts/<slug>/`, we'll wire a gallery
   component into each case-study page. Filenames follow the convention
   `<order>-<what-it-is>.<ext>` — e.g. `01-cover.png`,
   `02-erd.png`, `03-flow-as-is.png`.

## Legend

| Symbol | Meaning |
|---|---|
| ✅ | Already exists in the source repo — copy operation only |
| 🖼 | Needs to be generated / screenshotted / recorded |
| 📄 | Document — PDF that could be embedded or previewed |
| 🎥 | Screen recording (optional, high impact) |
| 🎯 | Recommended cover artifact |

Every artifact has a **status checkbox**. Tick when it lands in `public/artifacts/<slug>/`.

---

## Global summary

| Project | Ready to copy | Needs work | Total |
|---|---|---|---|
| FIIT Co. Operations Platform (`fiitco`) | 32 | 5 | 37 |
| Contact Center (`contact-center`) | 3 | 3 | 6 |
| Movie Profitability (`movie-profitability`) | 17 | 2 | 19 |
| SLA Optimization (`sla-optimization`) | 11 | 1 | 12 |
| Telco Churn (`telco-churn`) | 2 | 5 | 7 |
| Fraud Detection SQL (`fraud-detection`) | 3 | 4 | 7 |
| BA Process Design (`ba-process-design`) | 4 | 4 | 8 |
| R Employee Analysis (`employee-r-analysis`) | 1 | 1 | 2 |
| **Totals** | **73** | **25** | **98** |

**Estimated new work if you gather everything: ~4 hours.** Screen
recordings add ~1 hour and are the single highest-impact optional item.

---

## 1. FIIT Co. Operations Platform — slug `fiitco`

**Live URLs:**
- Public site: https://www.fiitco.ca
- Repo (private): `github.com/ezieshie-stack/Fiitco-Operation`
- Documentations repo: `github.com/ezieshie-stack/Documentations-`

### 🎯 Recommended cover
Composite of Class Management Tool + fiitco.ca side-by-side (1600×900).

### Process diagrams (BPMN)

- [ ] 🖼 **BPMN — Booking as-is** — render `Documentations-/P1_current.bpmn` at [demo.bpmn.io](https://demo.bpmn.io/) → PNG → `public/artifacts/fiitco/03-booking-as-is.png`
- [ ] 🖼 **BPMN — Booking to-be** — same for `P1_future.bpmn` → `04-booking-to-be.png`
- [ ] 🖼 **BPMN — Onboarding** — `Documentations-/P8_onboarding.bpmn` → `05-onboarding.png`
- [ ] 🖼 **BPMN — Auth flow** — `Documentations-/P7_auth.bpmn` → `06-auth.png`
- [ ] 🖼 **BPMN — Availability** — `Documentations-/P9_availability.bpmn` → `07-availability.png`
- [ ] 🖼 **BPMN — Account creation** — `Documentations-/P12_account_creation.bpmn` → `08-account-creation.png`

### Wireframes (already PNG, copy directly)

- [ ] ✅ `Documentations-/wireframe_staff_dashboard.png` → `public/artifacts/fiitco/10-wireframe-staff-dashboard.png`
- [ ] ✅ `Documentations-/wireframe_staff_login.png` → `11-wireframe-staff-login.png`
- [ ] ✅ `Documentations-/wireframe_staff_classes.png` → `12-wireframe-staff-classes.png`
- [ ] ✅ `Documentations-/wireframe_staff_trainers.png` → `13-wireframe-staff-trainers.png`
- [ ] ✅ `Documentations-/wireframe_customer_home.png` → `14-wireframe-customer-home.png`
- [ ] ✅ `Documentations-/wireframe_customer_blog.png` → `15-wireframe-customer-blog.png`
- [ ] ✅ `Documentations-/wireframe_customer_programs.png` → `16-wireframe-customer-programs.png`

### User flows

- [ ] ✅ `Documentations-/userflow_add_class.png` → `20-userflow-add-class.png`
- [ ] ✅ `Documentations-/userflow_browse_to_trial.png` → `21-userflow-browse-to-trial.png`
- [ ] ✅ `Documentations-/userflow_edit_website_content.png` → `22-userflow-edit-website-content.png`
- [ ] ✅ `Documentations-/userflow_password_reset.png` → `23-userflow-password-reset.png`
- [ ] ✅ `Documentations-/userflow_refer_a_friend.png` → `24-userflow-refer-a-friend.png`
- [ ] ✅ `Documentations-/userflow_signin.png` → `25-userflow-signin.png`

### Sitemaps + brand

- [ ] ✅ `Documentations-/sitemap_customer.png` → `30-sitemap-customer.png`
- [ ] ✅ `Documentations-/sitemap_staff.png` → `31-sitemap-staff.png`
- [ ] ✅ `Documentations-/styleguide_palette.png` → `32-styleguide-palette.png`
- [ ] ✅ `Documentations-/gantt.png` → `33-gantt.png`

### Live tool screenshots (need to be taken)

- [ ] 🖼 🎯 **Class Management Tool — schedule view with conflict warning** — log in to `fiit-ops-kappa.vercel.app`, screenshot the weekly schedule showing a buffer-conflict badge → `01-cover-cms.png`
- [ ] 🖼 **CMS admin — blog editor with TipTap** — screenshot the `/website-blog/[id]` edit page → `40-tiptap-editor.png`
- [ ] 🖼 **CMS admin — pricing plans list** — screenshot the pricing CRUD list → `41-cms-pricing.png`
- [ ] 🖼 **fiitco.ca live** — hero shot of the public site → `02-cover-public.png`

### Documents (PDF excerpts)

- [ ] 📄 **BA-13 Vendor Comparison Matrix** — the weighted scoring table. Render `Documentations-/BA-13_Vendor_Comparison_Matrix.md` and screenshot the SCORING MATRIX table → `50-vendor-matrix.png`
- [ ] 📄 **BRD page 1** — render page 1 of `Documentations-/FIIT_Co_Business_Requirements_Document.pdf` → `51-brd-p1.png`
- [ ] 📄 **UAT Plan cover** — render page 1 of `Documentations-/FIIT_Co_UAT_Plan_and_Report.pdf` → `52-uat-p1.png`
- [ ] 📄 **Technical Architecture Handoff** — page 1 of `Documentations-/FIIT_Co_Technical_Architecture_Handoff.pdf` → `53-tech-arch.png`

### Screen recordings (optional, huge impact)

- [ ] 🎥 **Class Management Tool 15-second clip** — record: log in → add a class → buffer-conflict warning fires → resolve. Save as `.mp4` → `90-cms-demo.mp4`
- [ ] 🎥 **CMS admin 10-second clip** — record: edit a testimonial → save → change appears live on fiitco.ca → `91-cms-live-demo.mp4`

---

## 2. Contact Center Operations Analytics — slug `contact-center`

**Not yet on portfolio.** Recommend adding as a Work grid entry.

**Live URLs:**
- Dashboard: https://ale5kikvte2het4punuwgp.streamlit.app/
- Repo: `github.com/ezieshie-stack/-Contact-Center-Operations-Analytics-Capacity-Intelligence-`

### 🎯 Recommended cover
`docs/screenshots/3_forecast_capacity.png` — the forecast + staffing view.

- [ ] ✅ 🎯 `contact-center/docs/screenshots/1_executive_overview.png` → `public/artifacts/contact-center/01-cover-exec.png`
- [ ] ✅ `contact-center/docs/screenshots/2_exceptions.png` → `02-exceptions.png`
- [ ] ✅ `contact-center/docs/screenshots/3_forecast_capacity.png` → `03-forecast-capacity.png`
- [ ] 🖼 **Star schema diagram from Power BI** — open the `.pbip` model in Power BI Desktop, screenshot the Model view showing the star schema → `10-star-schema.png`
- [ ] 🖼 **Erlang-C staffing chart** — from `scripts/erlang.py` output — regenerate if needed → `20-erlang-c.png`
- [ ] 🖼 **Anomaly-flag distribution** — chart from the anomaly detector → `21-anomaly-flags.png`

**Companion docs to link (no file transfer, just references):**
- `contact-center/docs/PROJECT_NARRATIVE.md` — reads like a case study draft
- `contact-center/METRICS.md` — KPI definitions
- `contact-center/docs/powerbi_build_guide.md`

---

## 3. Movie Industry Profitability — slug `movie-profitability`

**Live URLs:**
- Dashboard: https://movies-dataset-uhi6ckeurkswnkfjk5kree.streamlit.app
- Repo: `github.com/ezieshie-stack/movies-dataset`

### 🎯 Recommended cover
`outputs/streamlit_dashboard_preview.png` — the live UI.

### Ready-to-copy chart PNGs (all in `movies-dataset/outputs/`)

- [ ] ✅ 🎯 `streamlit_dashboard_preview.png` → `public/artifacts/movie-profitability/01-cover.png`
- [ ] ✅ `budget_vs_revenue_comprehensive.png` → `10-budget-vs-revenue.png`
- [ ] ✅ `correlation_matrix_comprehensive.png` → `11-correlation-matrix.png`
- [ ] ✅ `genre_analysis_comprehensive.png` → `12-genre-analysis.png`
- [ ] ✅ `time_trends_comprehensive.png` → `13-time-trends.png`
- [ ] ✅ `distributions_comprehensive.png` → `14-distributions.png`
- [ ] ✅ `actor_analysis.png` → `20-actor-analysis.png`
- [ ] ✅ `director_analysis.png` → `21-director-analysis.png`
- [ ] ✅ `language_analysis.png` → `22-language-analysis.png`
- [ ] ✅ `content_rating_analysis.png` → `23-content-rating.png`
- [ ] ✅ `social_media_analysis.png` → `24-social-media.png`
- [ ] ✅ `genre_performance.png` → `25-genre-performance.png`
- [ ] ✅ `missing_data_analysis.png` → `30-data-quality.png`
- [ ] ✅ `budget_vs_revenue.png` → `40-budget-vs-revenue-simple.png`
- [ ] ✅ `correlation_matrix.png` → `41-correlation-simple.png`
- [ ] ✅ `distributions.png` → `42-distributions-simple.png`
- [ ] ✅ `time_trends.png` → `43-time-trends-simple.png`

### Still to produce

- [ ] 🖼 **9-stage ETL pipeline diagram** — draw a simple Mermaid flow of the pipeline stages (`01_exploratory_data_analysis` → `02_etl_tableau_prep` → `02_full_data_merge` → `03_funnel_analysis` → 5 more) → `50-pipeline-diagram.png`
- [ ] 🎥 **Streamlit dashboard 15-second clip** — record: land on dashboard → change a filter → chart updates → switch to browser tab → `90-streamlit-demo.mp4`

---

## 4. Customer Support SLA Optimization — slug `sla-optimization`

**Not yet on portfolio.** Recommend adding as a Work grid entry.

**Repo:** `github.com/ezieshie-stack/Customer-Support-SLA-Optimization-Project`

### 🎯 Recommended cover
`outputs/charts/phase_e_optimization_impact.png` — the $30K/month savings visual.

### Ready-to-copy chart PNGs (all in `outputs/charts/`)

- [ ] ✅ 🎯 `phase_e_optimization_impact.png` → `public/artifacts/sla-optimization/01-cover-impact.png`
- [ ] ✅ `phase_d_feature_importance.png` → `10-feature-importance.png`
- [ ] ✅ `phase_c_bottleneck_heatmap.png` → `11-bottleneck-heatmap.png`
- [ ] ✅ `phase_c_sla_breach_analysis.png` → `12-breach-analysis.png`
- [ ] ✅ `phase_b_csat_vs_ttr.png` → `20-csat-vs-ttr.png`
- [ ] ✅ `phase_b_csat_vs_rpt.png` → `21-csat-vs-rpt.png`
- [ ] ✅ `phase_b_ttr_distribution.png` → `22-ttr-distribution.png`
- [ ] ✅ `phase_b_rpt_distribution.png` → `23-rpt-distribution.png`
- [ ] ✅ `phase_b_volume_breakdown.png` → `24-volume-breakdown.png`
- [ ] ✅ `phase_f_demand_monitoring.png` → `30-demand-monitoring.png`
- [ ] ✅ `ticket_volume_overview.png` → `31-ticket-volume-overview.png`

### Still to produce

- [ ] 🖼 **7-phase pipeline diagram** — Mermaid flow of the 7 notebooks (`01_data_quality` → `02_descriptive_ops` → `03_diagnostic_root_cause` → `04_predictive_risk_modeling` → `05_optimization_simulation` → `06_automation_monitoring` → `07_executive_storytelling`) → `50-pipeline-diagram.png`

**Companion for link (rendered HTML):** `customer_support_analytics_master.html` (1.1 MB) — could be linked as "Full analytical report".

---

## 5. Telco Customer Churn Analysis — slug `telco-churn`

**Repo:** `github.com/ezieshie-stack/telco-churn-analysis`

### 🎯 Recommended cover
Regenerate a "churn by contract type" chart from the notebook.

### Ready-to-copy

- [ ] ✅ `telco-churn-analysis/reports/figures/churn_analysis_header.png` → `public/artifacts/telco-churn/00-header.png`
- [ ] ✅ `telco-churn-analysis/Telco Customer Churn Analysis.html` — link as "Full HTML report" (don't inline, iframe if needed)

### Still to produce (run the notebook, save each chart)

- [ ] 🖼 🎯 **Churn rate by contract type** — from `src/02_churn_by_contract.py` → `01-cover-churn-by-contract.png`
- [ ] 🖼 **Churn rate by tenure band** — from `src/05_churn_by_tenure_band.py` → `10-churn-by-tenure.png`
- [ ] 🖼 **Fiber-without-tech-support = ~49% churn** — from `src/07_service_quality.py` → `11-fiber-risk.png`
- [ ] 🖼 **ROC curve at 0.86 AUC** — from `src/10_ml_logistic_regression.py` → `20-roc-curve.png`
- [ ] 🖼 **Confusion matrix** — same notebook → `21-confusion-matrix.png`
- [ ] 🖼 **Feature importance / coefficients** — same notebook → `22-feature-importance.png`

**Code snippets to embed in the page (no artifacts needed, just copy source into markdown blocks):**
- `src/05_churn_by_tenure_band.py` — a SQL segmentation query
- `src/09_stats_chi_square.py` — the chi-square validation
- Full contents of `reports/model_metrics.txt`

---

## 6. Fraud Detection SQL Pipeline — slug `fraud-detection`

**Not yet on portfolio.** Recommend adding as a Work grid entry.

**Repo:** `github.com/ezieshie-stack/Fraud-Detection-SQL-Window-Functions`

### 🎯 Recommended cover
Pipeline architecture diagram (needs to be drawn).

- [ ] 🖼 🎯 **7-layer pipeline diagram** — Mermaid flow of `sql/00_schema` → `01_load` → `02_staging` → `03_features` → `04_rules_engine` → `05_alerts_daily` → `06_merchant_risk` + `07_customer_watchlist` → `01-cover-pipeline.png`
- [ ] 🖼 **Sample alert output** — run `analysis/07_alert_threshold_simulation.sql`, screenshot the top-risk merchants table → `10-top-risk-merchants.png`
- [ ] 🖼 **Velocity feature window** — screenshot of `sql/03_features.sql` running with a highlighted window function → `11-velocity-window.png`
- [ ] 🖼 **False positive analysis chart** — from `analysis/06_false_positive_analysis.sql` result → `12-fp-analysis.png`

**Ready to embed as code (no file transfer, just source read):**
- [ ] ✅ Snippet from `sql/03_features.sql` — velocity feature window function
- [ ] ✅ Snippet from `sql/04_rules_engine.sql` — the rule composition
- [ ] ✅ Snippet from `analysis/02_velocity_fraud.sql` — the detection query

**Companion docs (link, don't transfer):** `docs/business_rules.md`, `docs/data_dictionary.md`, `docs/assumptions.md`.

---

## 7. Business Analysis & Process Design Portfolio — slug `ba-process-design`

**Not yet on portfolio.** Recommend adding as a Work grid entry — the "BA fundamentals" showcase card.

**Repo:** `github.com/ezieshie-stack/Business-Analysis-Process-Design-Portfolio`

### 🎯 Recommended cover
Page-1 preview of the BRD.

### Ready-to-copy PDFs

- [ ] 📄 `Business-Analysis-Process-Design-Portfolio/Business_Requirements_Document_BRD.pdf` → `public/artifacts/ba-process-design/BRD.pdf`
- [ ] 📄 `Business-Analysis-Process-Design-Portfolio/Automators - Process Design Document.pdf` → `process-design.pdf`
- [ ] 📄 `Business-Analysis-Process-Design-Portfolio/Process flows.pdf` → `process-flows.pdf`
- [ ] 📄 `Business-Analysis-Process-Design-Portfolio/Use_Cases_Group3.pdf` → `use-cases.pdf`

### Still to produce (render PDF page 1 to PNG)

Use `pdftoppm` (macOS: `brew install poppler`) or a screenshot per PDF at page 1.

- [ ] 🖼 🎯 **BRD page 1 preview** → `01-cover-brd-p1.png`
- [ ] 🖼 **Process Design page 1** → `10-process-design-p1.png`
- [ ] 🖼 **Process Flows page 1 (BPMN swimlane)** → `11-process-flows-p1.png`
- [ ] 🖼 **Use Cases page 1** → `12-use-cases-p1.png`

**Command for one-shot render:**
```bash
cd Business-Analysis-Process-Design-Portfolio
pdftoppm -f 1 -l 1 -r 150 -png "Business_Requirements_Document_BRD.pdf" brd-preview
# → brd-preview-1.png (rename to 01-cover-brd-p1.png)
```

---

## 8. R Analysis — Employee Salary — slug `employee-r-analysis`

**Repo:** `github.com/ezieshie-stack/R-Analysis-Employee-Dataset-`

Smallest project. Best used as a **skills-breadth card** (proves R comfort) not a full case study.

- [ ] 📄 `R-Analysis-Employee-Dataset-/Employee Dataset R analysis report.pdf` → `public/artifacts/employee-r-analysis/report.pdf`
- [ ] 🖼 🎯 **Cover chart** — screenshot the salary-by-department chart from the report PDF → `01-cover.png`

**Code to embed:** `assignment_2.Rmd` — R Markdown source, one chunk visible on the page.

---

## Global site assets (not project-specific)

- [ ] 🖼 **Headshot / portrait** — you already have `public/portrait-home.png` and `public/portrait-2.png`. Consider a third for a different context if the About page ever gets a rebuild.
- [ ] 📄 **Downloadable resume PDF** — the site has `/resume` route. Make sure the button on that page serves a real up-to-date PDF at `public/resume.pdf`.
- [ ] 🖼 **Contact-page hero visual** — currently text only.

---

## After you've gathered

When items land in `public/artifacts/<slug>/`, ping me and I'll:

1. Add a `<Gallery />` component that reads from the folder by convention.
2. Update the `Project` type to allow `gallery: string[]` + `documents: {path,label}[]`.
3. Wire each case-study page to render the gallery + document previews below the meta strip.
4. Optionally add an `<Embed />` primitive for the live Streamlit iframes on Movies and Contact Center.

Then the case-study pages stop being text-heavy and start being **artifact-heavy** — which is the whole point of a BA portfolio.

---

## Session notes

- Total unique projects worth featuring: **8** (out of your 14 public repos).
- Repos deliberately NOT on the featured list: `Dual-Context-Portfolio`
  (superseded), `Career-Application` (not a case study), `portfolio-build`
  (this site), `portfolio-admin` (behind-the-scenes tool), `Documentations-`
  (data source, not a project on its own), `fiit-website` (referenced
  from FIIT Co. case study but not its own card).
- If Contact Center + SLA Optimization + Fraud Detection + BA Process
  Design all get added, that's **4 new Work grid cards** on top of your
  existing 3. Consider what to keep as headliner vs. what to demote to
  small cards.
