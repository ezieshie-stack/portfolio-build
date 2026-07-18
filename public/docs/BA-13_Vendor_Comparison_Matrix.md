---
id: BA-13
title: Vendor Comparison Matrix
project: FIIT Co. Operational Transformation Initiative
client: FIIT Co. Boxing & Fitness Studio, Leslieville, Toronto
sponsor: Arden, Gym Manager, FIIT Co.
prepared_by: David Ezieshi, Business Analyst
development_partner: Claude, Full-Stack Developer & Web Designer
version_date: v1.0 · April 14, 2026
---

## PURPOSE

FIIT Co. needs a client-tracking tool for personal training follow-up, check-ins, workout history, member engagement between sessions. MindBody handles booking and memberships but is not built for the coaching-relationship layer. This document evaluates three credible candidates against a weighted rubric and recommends the best-fit tool for the sponsor's budget and operational reality.

The recommendation is the Scope 3 deliverable. The BA is responsible for the evaluation; the sponsor is responsible for the final buy decision and contract. No vendor has been paid or committed to at the time of this document.

## EVALUATION CRITERIA

Criteria and weights were drafted by the BA and confirmed in the fortnightly working session with the sponsor. Weights reflect FIIT Co.'s current priorities, low operational overhead, member-friendly UX, and responsible cost, not what a larger studio chain might value.

| **#** | **Criterion** | **Weight** | **Rationale** |
|---|---|---|---|
| C1 | Coaching-first UX | 20% | Trainer and member both need to find value in under a minute, or adoption will fail. |
| C2 | Workout programming depth | 15% | Exercise library, program builder, and progression tracking. |
| C3 | Member engagement tools | 15% | Check-ins, habit tracking, messaging, progress photos. |
| C4 | Integration with MindBody | 10% | Member identity should not need to be re-keyed. |
| C5 | Price fit for FIIT Co. | 15% | Target under $300 CAD/month all-in for the current team. |
| C6 | Mobile app quality | 10% | Trainers and members both live on mobile. |
| C7 | Data portability | 5% | Ability to export if the vendor relationship ends. |
| C8 | Vendor stability | 5% | Funding, track record, and roadmap signals. |
| C9 | Support quality | 5% | Responsiveness and documentation maturity. |

## CANDIDATES CONSIDERED

| **Vendor** | **Category** | **Headline** |
|---|---|---|
| Trainerize | Coaching platform | Dedicated to personal trainers and boutique studios; strong programming, in-app messaging, and an established habit tracker. Owned by ABC Fitness. |
| TrueCoach | Coaching platform | Highly regarded by one-on-one coaches; clean UI; strong video library and form-check workflow. |
| My PT Hub | Coaching platform | Popular European option; broad feature set; aggressive pricing for small teams. |

Two further candidates, MindBody's own 'Client Portal' add-on and a bespoke Notion-plus-Airtable workflow, were considered and eliminated early: the former lacks programming and engagement features, and the latter fails the adoption test with non-technical trainers.

## SCORING MATRIX

Each candidate is scored from 1 (poor fit) to 5 (strong fit) against each criterion. The weighted score is the criterion score times the weight, summed to produce a final score out of 5.00.

| **Criterion** | **Weight** | **Trainerize** | **TrueCoach** | **My PT Hub** |
|---|---|---|---|---|
| C1 Coaching-first UX | 20% | 5 | 5 | 4 |
| C2 Programming depth | 15% | 5 | 4 | 4 |
| C3 Engagement tools | 15% | 5 | 4 | 4 |
| C4 MindBody integration | 10% | 3 | 3 | 3 |
| C5 Price fit | 15% | 4 | 3 | 5 |
| C6 Mobile app quality | 10% | 5 | 5 | 4 |
| C7 Data portability | 5% | 3 | 3 | 3 |
| C8 Vendor stability | 5% | 5 | 4 | 3 |
| C9 Support quality | 5% | 4 | 4 | 3 |
| Weighted score (out of 5.00) | 100% | 4.55 | 4.00 | 3.90 |

## PRICING SUMMARY

| **Vendor** | **Plan** | **Monthly** | **Annual** | **Notes** |
|---|---|---|---|---|
| Trainerize | Studio (up to 15 clients/trainer) | $250 CAD | $3,000 CAD | Includes branded member app and in-app messaging. Preferred tier for FIIT Co. |
| TrueCoach | Team | $260 USD | $3,120 USD | Per-coach seat pricing, climbs quickly as team grows. |
| My PT Hub | Unlimited Clients | $140 CAD | $1,680 CAD | Cheapest; most feature-complete at low price; less polished UX. |

All figures are indicative list prices as of the evaluation date. Final commercial terms require direct vendor outreach and are the sponsor's responsibility.

## RISKS & CONCERNS

| **Vendor** | **Key Risks** |
|---|---|
| Trainerize | MindBody integration is indirect (Zapier-style); ABC Fitness ownership introduces pricing change risk over a 24-month horizon. |
| TrueCoach | Per-seat pricing scales badly as FIIT Co. adds instructors and the second location. |
| My PT Hub | Support quality is variable in North American hours; UX polish lags the other two on the instructor side. |

## RECOMMENDATION

Trainerize is the recommended vendor. It takes the top weighted score (4.55 / 5.00) by leading on coaching UX, programming depth, and engagement tools, the three criteria that represent half of the weighted total. It is not the cheapest option, but it is the option most likely to be adopted by the trainer team and therefore to return value on every dollar spent.

The recommended commercial path is a one-month paid pilot at the Studio tier with three trainers and ten opt-in members, followed by a full rollout if pilot adoption clears an agreed threshold (daily active use by at least two of the three pilot trainers and at least six of the ten pilot members). If the pilot fails the threshold, TrueCoach is the fallback and the evaluation is re-opened.

## NEXT STEPS

1. Sponsor confirms budget envelope and signs off on Trainerize pilot.
2. BA drafts pilot success criteria, pilot timeline, and opt-in member communication.
3. BA and sponsor run a procurement call with Trainerize to confirm commercials and MindBody integration path.
4. Pilot kicks off; BA tracks adoption metrics weekly.
5. Go or no-go decision at the end of the pilot month, recorded in the RAID log and the weekly status report.

## CHANGE CONTROL

This document is versioned and re-issued if the sponsor's priorities change, a new vendor enters consideration, or the pilot fails. Every change is logged alongside the RAID and status log.
