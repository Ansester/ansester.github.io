---
title: Synthetic Pilot Lab
summary: Offline diagnostics for faults in experimental software and the measurements it records.
category: Independent research
role: Diagnostic design, specification, development direction, and review
organization: New York University Abu Dhabi
period: October 2026 — present
status: In development
order: 3
tags: [Synthetic participants, Experimental validation, Python, Reproducibility]
updated: 1 November 2026
visual: capstone
---

My capstone examines how faults in experimental software affect the outcomes researchers record. I design diagnostic requirements, direct development, and review the implementation and analysis. The work so far includes an offline benchmark and measurement analysis using scripted decisions.

## Checking the same decisions in two engines

The benchmark replays submitted actions through correct and deliberately faulty game engines. A separate evaluator reconstructs the expected states and payoffs from those actions, then compares them with the saved observations.

Different sequences can expose different faults. A passing check means that the particular sequence did not reveal a violation.

## When group totals miss an error

One diagnostic assigned contributions to the wrong players. In a saved three-player episode, both engines produced the same contribution pool and total payoff:

| Outcome (tokens) | Correct engine | Faulty engine |
| --- | --- | --- |
| Contribution pool | 44 | 44 |
| Total payoff | 82 | 82 |
| Player payoffs, A / B / C | 26, 30, 26 | 26, 26, 30 |

Recalculating each player's payoff exposed the error. The example shows why checks on aggregate results need to be accompanied by checks on individual records.

This diagnostic uses scripted synthetic records and a deliberately introduced fault. Testing whether model participants can discover faults is a separate research question.
