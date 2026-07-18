# Automating the Morning Price Check

Procurement teams live in a paradox: they can only negotiate the price movements they see, but the act of *seeing* them is repetitive, error-prone, and eats an hour of a buyer's day before a single supplier gets a call. This project turned the morning routine at TechNova Distributors into a UiPath bot, cut the daily runtime from 60–90 minutes to under 10, and shipped a documented, auditable pipeline anyone on the team can maintain.

## The problem, in one line

The Purchasing Analyst opened Chrome every morning, walked the supplier list row by row, copied a price and an availability line into Excel, calculated a percent change against yesterday's value, coloured the row red if it moved past 5%, and stitched a summary email together for the Procurement Manager before the first meeting. The workflow was defensible on paper but brittle in practice: pop-ups blocked prices, currency formats drifted, formulas broke when a row was skipped, and the analyst was still typing at 09:30 when the escalation window had already closed.

## What the manual process actually costs

The AS-IS survey put the numbers on it. A typical morning is 15–50 items across three to six suppliers, three to seven minutes per product page, with the tail dragging when a redirect chain adds thirty seconds and a cookie banner needs dismissing. One FTE runs it end-to-end. At peak — the days when a new promo lands or a currency slips — the analyst is at the keyboard for the full 90 minutes, which is exactly when the buyer is most needed on the phone with the supplier. The exception rate isn't trivial either: prices go missing, add-to-cart replaces the price element, currency separators flip, pop-ups swallow the page.

## What we were asked to build

Six objectives, agreed with the Procurement Team before a line of UiPath was authored:

1. Automate the daily collection of product price and stock availability.
2. Reduce the routine from 60–90 minutes to under 10.
3. Eliminate the manual data entry error class entirely.
4. Fire an alert whenever a price moves ±5% or a stock status flips.
5. Keep a full historical log for trend analysis and audit.
6. Make the run reliable, scalable, and error-resilient so the buyer trusts it without watching it.

## How the bot works

The workflow is a linear main script (`Main.xaml`) that reads the supplier workbook, loops each row, and calls three sub-workflows in sequence. The design goal was to keep every stage self-contained so a broken selector on one supplier never poisons the run for the rest.

**Read.** `Read_Input.xaml` opens `Supplier_List.xlsx` and pulls the fields the analyst was copying by hand: supplier name, item name, product URL, last known price, per-supplier threshold. The workbook is the source of truth for the run's configuration, which means a buyer can add a supplier, change a threshold, or retire an item without ever opening UiPath Studio.

**Scrape.** `Process_Supplier.xaml` launches Chrome, navigates to the product URL, waits for the page to settle, and dismisses region + cookie pop-ups if the selectors are configured for that supplier. It then extracts the product name, current price, and availability using site-specific selectors. Raw price text is cleaned into a numeric value in the same step — currency symbols and commas out, decimal in, everything downstream operates on a number.

**Compare.** Back in `Main.xaml`, the bot computes `(new − old) / old`, rounds to two decimals, and compares the absolute change against the supplier's threshold. If it breaches, or if availability flipped, the row is marked as an alert.

**Write.** `Write_Output.xaml` writes the log row (product, supplier, price, delta, availability, timestamp), copies breach rows into the Alerts sheet, saves the workbook, and closes Excel and the browser so nothing is left dangling for the next morning.

## The selector strategy

Every supplier's product page is a different HTML tree, and any of them can change without notice. Two design choices keep the bot honest when that happens.

The primary path is a per-supplier CSS selector stored in the workbook row, not the code. When a page moves, a buyer with no UiPath knowledge can edit one cell and the next run picks it up. Fast, exact, and no redeploy.

The fallback is the *add-to-cart availability heuristic*. When the primary selector misses, the bot clicks the add-to-cart button; if the cart dialog appears, the item is in stock and the confirmation shows the price — the same signal a shopper would read. If the button is missing or the flow needs a login, the row is marked Unknown and flagged for the human. Both paths write the same shape of log row, so the analyst opening the workbook can't tell which one fired without checking the Notes column.

## Exceptions and recovery

Reliability is the design goal that separates a UiPath demo from a production bot. Every step has a documented failure mode and a specific action.

Page load failures retry up to three times with a Refresh; after three, the row is written to the log as *Navigation failed* and the bot moves on. Selectors that fail fall back to a generic locator, and if that fails too, the availability is marked Unknown with a note. Excel write errors retry the individual write, and if the workbook is locked (analyst left it open), the bot logs it to the BOT LOG sheet and continues. The rule the PDD locks in is that no single supplier failure can stop the run for the others.

## Reporting and integration

Two artifacts land after every run. The **Alert Sheet** is what the buyer opens: breach rows with delta, reason, and the underlying scraped price, sortable by supplier or by move. The **audit log** is what everything downstream reads: a plain CSV with a `run_id` per morning, one row per supplier per run, portable to whatever BI tool procurement decides to standardise on next.

The email summary, which used to be the analyst's last twenty minutes, is now a one-line attachment sent by Outlook to the Procurement Manager the moment the bot completes. Subject line, recipient, and file paths are configuration, not code.

## What this delivers

The measurable outcomes are the obvious ones: 60–90 minute routine collapsed to under 10, one FTE-hour a day freed for negotiation, and a permanent audit trail for every price move the team acts on. The less obvious ones matter more in the long run. The threshold is per-supplier and stored in the workbook, so it's a policy dial the buyer owns, not an engineering ticket. The fallback heuristic keeps the bot honest through page redesigns without a human noticing at 08:00. And the log is a proper time series — thirty days from now the same data anchors a supplier-scorecard conversation that manual screenshots could never support.

## What this project is not

It is not a general-purpose price-comparison tool. Selectors are per-supplier and per-item; adding a new supplier means adding a row to the workbook and configuring its selector, not clicking a button. It is not a headless service — attended automation runs on the analyst's Windows machine on the Task Scheduler cron, which is right for this team's scale. And it is not a substitute for the buyer's judgement: the bot flags moves, it does not raise POs or send emails on the buyer's behalf. The point of the PDD, and the point of this project, is that the buyer keeps the decisions and gives back the copy-paste.

## Team and role

Delivered as a five-person George Brown College automation project — Zulfi and Emmanuel on the AS-IS / requirements pass, Nidhi on testing and UAT, Elvis on browser automation, Saka running the project, Kelvin as Solution Architect. I built the automation logic and the AS-IS → TO-BE workflow definition, iterating selectors and exception paths against the tester's runs until the seven-supplier demo landed under ten minutes with zero manual intervention.
