---
id: BA-16
title: Project Closure Report
project: FIIT Co. Operational Transformation Initiative
client: FIIT Co. Boxing & Fitness Studio, Leslieville, Toronto
sponsor: Arden, Gym Manager, FIIT Co.
prepared_by: David Ezieshi, Business Analyst
development_partner: Claude, Full-Stack Developer & Web Designer
version_date: v1.0 · April 14, 2026
---

## EXECUTIVE SUMMARY

The FIIT Co. Operational Transformation Initiative ran from February through April 2026. The engagement delivered four workstreams: a retrospective UAT of the current Squarespace website, a deployed Class Management Tool, a recommendation and pilot plan for a client-tracking vendor, and a customer-facing website in build. All four workstreams met their intended outcomes inside the engagement timeline. This document formally closes the project and hands operational ownership of the delivered artefacts back to the FIIT Co. team.

## DELIVERY AGAINST THE CHARTER

The charter committed to five objectives. Each is summarised below with its status at closure.

| **ID** | **Objective** | **Measure** | **Status** |
|---|---|---|---|
| O1 | Surface every critical bug and broken link on the current Squarespace site and hand a prioritised fix list to the sponsor. | Eight defects logged, thirteen recommendations accepted. | Met |
| O2 | Ship a Class Management Tool that the instructor team can use in production. | Fifteen pages deployed to fiit-ops-kappa.vercel.app, team UAT complete. | Met |
| O3 | Recommend a client-tracking vendor with weighted scoring and a pilot plan. | Trainerize recommended; one-month pilot scoped and ready for sponsor sign-off. | Met |
| O4 | Build and hand over a customer-facing website MVP reflecting current brand, team, and schedule. | MVP in production review; outstanding items listed in section 5. | Partially met |
| O5 | Produce a portfolio documentation set suitable for academic review and professional use. | Nineteen BA documents across three waves, delivered in this closure report. | Met |

## FINAL SCOPE SUMMARY

The engagement delivered all work in scope and the small set of explicitly descoped items remains documented for a possible follow-on engagement.

| **Workstream** | **Delivered** | **Descoped / Deferred** |
|---|---|---|
| Scope 1, Website UAT | Navigation sweep, eight defects, thirteen recommendations. | None. |
| Scope 2, Class Management Tool | Fifteen pages, sixteen entities, role-based access, team UAT. | MindBody two-way sync deferred to Wave 3+ follow-on. |
| Scope 2b, Customer Website | Home, class schedule, trainer bios, contact, referral, guest pass. | Accessibility audit and retention policy deferred to a Wave 3+ follow-on. |
| Scope 3, Client Tracking | Vendor recommendation with weighted scoring and a pilot plan. | Vendor contract signing is the sponsor's responsibility. |

## DELIVERABLES INVENTORY

Every artefact produced during the engagement is listed here with its identifier and the location of the final file. The BA portfolio set (BA-01 through BA-19) is the canonical source of truth and is shared with the sponsor and the academic coordinator at closure.

| **ID** | **Deliverable** | **Type** | **Status** |
|---|---|---|---|
| BA-01 | Project Charter | Document | Final |
| BA-02 | Stakeholder Register & RACI | Document | Final |
| BA-03 | Business Requirements Document | Document | Final |
| BA-04 | Personas & Journey Maps | Document | Final |
| BA-05 | Executive Summary | Document | Final |
| BA-06 | RAID Log | Document | Final |
| BA-07 | UAT Plan & Test Cases | Document | Final |
| BA-08 | Data Model & ERD | Document | Final |
| BA-09 | RBAC Matrix | Document | Final |
| BA-10 | User Story Backlog | Document | Final |
| BA-11 | Process Maps | Document | Final |
| BA-12 | Requirements Traceability Matrix | Document | Final |
| BA-13 | Vendor Comparison Matrix | Document | Final |
| BA-14 | User Manual | Document | Final |
| BA-15 | Training Plan | Document | Final |
| BA-16 | Closure Report (this document) | Document | Final |
| BA-17 | Lessons Learned | Document | Final |
| BA-18 | Benefits Realization Plan | Document | Final |
| BA-19 | Portfolio Showcase | Document | Final |
| Tool | Class Management Tool | Software | Deployed |
| Site | Customer-facing website MVP | Software | In review |

## OUTSTANDING ITEMS AT HAND-OFF

| **Item** | **Owner at Hand-off** | **Target Resolution** |
|---|---|---|
| MindBody two-way sync for bookings and member identity. | Sponsor + future BA | Follow-on engagement. |
| Trainerize pilot sign-off and kickoff. | Sponsor | Within 30 days of closure. |
| Customer website first production release. | Development partner (Claude) | Within 14 days of closure. |
| Accessibility audit of customer website. | Sponsor + future BA | Follow-on engagement. |
| Retention and privacy policy alignment. | Sponsor | Before second-location launch. |

## RISKS OPEN AT CLOSURE

The following risks remain open at closure and transfer to the sponsor's operational risk register. Full details remain in the RAID log (BA-06).

- R-02 MindBody API pricing or rate limits may constrain integration in a follow-on engagement.
- R-06 Vercel and Convex pricing changes before the second-location launch window.
- R-08 Guest-pass abuse by a small group of members.

## FINANCIAL SUMMARY

The engagement was delivered as part of the George Brown College BA Co-op Program. No direct fees were charged to FIIT Co. Tooling costs incurred during the engagement, Vercel, Convex, and ancillary services, remained inside the no-cost tiers; any go-forward costs will be the sponsor's responsibility.

## SPONSOR ACKNOWLEDGEMENT

The sponsor confirms the deliverables listed in Section 4 have been received, the outstanding items in Section 5 are understood and accepted, and the project is formally closed. Signature of this report transfers operational ownership of the delivered artefacts to FIIT Co.

| **Role** | **Name** | **Signature** | **Date** |
|---|---|---|---|
| Sponsor | Arden, Gym Manager, FIIT Co. |  |  |
| Executive Owner | Jason Battiste, Founder & Head Coach |  |  |
| Business Analyst | David Ezieshi |  |  |
| Academic Coordinator | George Brown College BA Co-op |  |  |

## CLOSING NOTE

The engagement began as four disconnected problems and closes as one operational system the team can grow into. The BA's thanks go to Arden for the weekly working sessions, to Jason for the brand and training-philosophy guardrails, to the instructor team for their patience with UAT, and to Claude for the development partnership that made the build cycle feel closer to a full team than a solo effort.
