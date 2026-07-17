---
title: Catching Fraud Without Drowning the Analysts
author: David Ezieshi
---

# Catching Fraud Without Drowning the Analysts

Fraud systems rarely fail because they miss fraud. They fail because they over-alert: every false positive burns an analyst's hour and erodes a customer's trust when a legitimate payment gets frozen. This project builds a production-style fraud monitoring system in PostgreSQL alone, on the PaySim transaction dataset, and answers three operational questions a risk team lives with every day: which patterns reliably indicate fraud, how to score risk without a black box, and where to set the alert threshold so the queue matches the team's actual capacity.

## Why SQL, and why no model

A regulated environment cannot act on a score it cannot explain. A black-box model that flags an account for freezing has to be defended to a compliance officer, and "the neural net said so" is not a defense. So the entire detection engine is interpretable SQL: weighted rules a human can read, audit, and adjust. Every alert carries the exact reasons it fired. That auditability is the point, not a limitation.

## The signal lives in windows, not totals

A simple GROUP BY tells you an account's lifetime volume. It cannot tell you that account made eighteen transfers in a single hour. Fraud is a pattern within a timeframe, so the features are built with window functions that preserve transaction-level detail while measuring behavior across a rolling window. PaySim encodes time as an integer step, which this project treats as one hour, so a one-hour velocity is a count over the current step and a thirty-day destination history is a rolling window of roughly 720 steps.

## The four rules that score risk

The scoring engine is deliberately small and legible. Four weighted rules accumulate into a single risk score out of 110:

High velocity, five or more transactions in one hour, adds 40 points; it is the strongest single signal of an automated burst attack. High spend, at least $1,000 moved in one hour, adds 30. A risky destination, one whose thirty-day fraud rate is 2% or higher, adds 25. And odd-hours activity, a transaction between midnight and 5am, adds 15. Each rule appends a human-readable reason, so an analyst opening an alert sees "velocity_1h; high_spend_1h" rather than a bare number.

## Score becomes action

The score maps to three tiers, each with a defined operational response. A score of 60 or above is high risk: freeze the account and route it to an investigator. 30 to 59 is medium: trigger step-up authentication and keep monitoring. Below 30 is low, no action. The daily investigation queue is drawn at a stricter 80, which by design requires at least the velocity and spend rules to both fire, so the queue that actually reaches a human is the highest-confidence slice.

## Setting the threshold is a capacity decision

The threshold is not a statistical choice, it is an operational one. Lowering it from 80 to 60 to 40 widens the net and catches more fraud, but each step multiplies the daily alert volume, and an alert no one has time to work is worse than no alert at all. The threshold simulation exists precisely to let a manager pick the cutoff that fills the team's capacity without overflowing it, and a false-positive analysis by score bucket confirms that precision rises with the score, so the highest-scoring alerts are the ones worth a human's time.

## Following the money

Beyond velocity, two anomaly checks look at the balances themselves. A reconciliation check flags transactions where the new balance does not equal the old balance minus the amount, the accounting signature of tampering. An empty-wallet check flags destination accounts that start at zero and suddenly receive a large sum, a classic cash-out endpoint. And a structuring check catches smurfing: an account whose daily total clears the $10,000 reporting threshold while every single transfer stays deliberately under a $3,000 cap.

## What this demonstrates

This is not a Kaggle exercise. It is how a fraud or risk analyst designs detection logic under real constraints: balancing recall against operational noise, keeping the logic interpretable enough for a regulated setting, and translating raw transaction logs into a prioritized queue and a merchant blocklist that the business can act on the same day.
