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
updated: 25 October 2026
visual: capstone
---

## What I’m testing

My capstone examines how faults in experimental software distort recorded outcomes. The standalone implementation pairs correct and faulty game engines, replays scripted decisions, and checks the resulting records with an independent evaluator.

The evaluator reconstructs expected states and payoffs, then compares them with the saved observations. Some sequences of decisions expose a fault; others leave it unexposed. A passing check means no violation was observed in that sequence.

## Work completed

The implementation includes offline diagnostics, a scripted benchmark, and measurement analysis. The saved benchmark and analysis have undergone independent numerical and artifact checks.

## Next question

Model-based fault discovery remains untested. The completed work uses synthetic records and scripted decisions, with no human participants.
