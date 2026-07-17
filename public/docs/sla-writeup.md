# Stopping SLA Breaches Before They Happen

Customer support was losing money on tickets that missed their resolution deadline, and nobody could see it coming. Escalation was reactive: a manager noticed a breach only after it had already happened. This project turned that around, building a system that scores every incoming ticket for breach risk, ranks the queue by financial exposure, and tells the escalation team exactly which tickets to act on, all within a workload a real team can sustain.

### The problem, in one line

The team had no early-warning signal, no way to quantify the cost of a breach, and no capacity to review every ticket. Any solution had to respect that last constraint, because a model that flags five hundred tickets a day is useless to a team that can review fifty.

### What the data showed

I profiled 8,469 support tickets spanning email, chat, phone, and social media, across four priority tiers with different SLA targets: Critical at 4 hours, High at 8, Normal at 24, and Low at 72. The headline numbers set the baseline: an overall breach rate of 8.03%, an average resolution time of 7.74 hours, and an average customer satisfaction rating of 2.99 out of 5.

The most important finding was what the breaches were not caused by. Breach rates were almost flat across ticket types, from 7.71% on billing inquiries to 8.32% on cancellations, and channel had negligible effect. A chi-square test confirmed the pattern: the failure is structural, tied to how the SLA targets are set against Critical-priority load, not to any one team underperforming. That reframed the whole conversation away from blame and toward SLA design.

### The model: optimize for dollars, not accuracy

I trained a Random Forest classifier with balanced class weights, benchmarked against a logistic-regression baseline. The point was never raw accuracy. On an 80/20 split the model reached a ROC-AUC of 0.83, but the decision that mattered was the operating point: at the deployed threshold the model catches 100% of breaches in the test set of 1,694 tickets, at the cost of precision of 16%.

That trade is deliberate. A missed Critical breach costs $500 and a missed High breach costs $200, while a false alarm costs only a few minutes of an agent's review time. When the downside is that lopsided, a model that never misses a breach and over-flags is worth far more than one that is "accurate" but lets expensive breaches slip through.

### The Sniper: intervention under a capacity budget

Predicting breaches is only half the job. The other half is deciding how many to act on. I compared two strategies. The first, escalate everything flagged as any risk, catches every breach but overwhelms the team. The second, which I called the Sniper, escalates only the highest-risk tickets each day up to a fixed capacity.

Because roughly 80% of the financial risk sits in the top 20% of tickets by predicted probability, a tight daily cap captures most of the preventable loss for a fraction of the review effort. The interactive command center lets a manager move the daily capacity between 10 and unlimited tickets and watch targeted reviews, breaches prevented, and net savings update live. That is the tool the escalation team would actually open each morning.

### What I recommended

Three actions came out of the analysis. Deploy the model in the ticketing pipeline so every ticket gets a risk score at creation and the queue self-sorts by risk. Revisit the Critical SLA target, which is structurally too aggressive against current staffing, and consider a dedicated response lane for the top-scored tickets. And staff to the risk, not just the volume: ticket volume peaks at 9 PM but breach risk peaks at 10 PM, at the evening shift handover, so overlapping the evening and night shifts closes the most dangerous gap in the day.

### What I would do next

The model uses ticket priority, channel, type, and customer age. Adding ticket-age-at-scoring and agent workload at creation time would sharpen it further. The breach-cost figures are priority-based flat rates; tying them to actual downstream churn would let the ranking optimize true dollar impact rather than a proxy. And the whole system is a snapshot: a live version would rescore tickets as they age, moving them up the queue before they cross the line rather than at intake.
