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
updated: 27 October 2026
visual: capstone
---

## What I’m testing

My capstone examines how faults in experimental software distort recorded outcomes. The standalone implementation pairs correct and faulty game engines, replays scripted decisions, and checks the resulting records with an independent evaluator.

The evaluator reconstructs expected states and payoffs, then compares them with the saved observations. Some sequences of decisions expose a fault; others leave it unexposed. A passing check means no violation was observed in that sequence.

## When correct totals hide an error

One completed diagnostic deliberately assigned contributions to the wrong players. In a saved three-player episode, the correct and faulty engines produced these outcomes:

| Outcome (tokens) | Correct engine | Faulty engine |
| --- | --- | --- |
| Contribution pool | 44 | 44 |
| Total payoff | 82 | 82 |
| Player payoffs, A / B / C | 26, 30, 26 | 26, 26, 30 |

Checks on the group totals missed the error. Recalculating each player's payoff from the original submitted actions exposed it. This was a deliberately constructed fault in a standalone synthetic benchmark.

## Work completed

I designed the diagnostic requirements, directed development, and reviewed the implementation and analysis. The current software includes offline diagnostics, a scripted benchmark, and measurement analysis, checked against saved synthetic records.

## Scope

The results shown here use synthetic records and scripted decisions, with no human participants. They do not measure a model's ability to discover faults.
