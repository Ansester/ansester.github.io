---
title: Synthetic Pilot Lab
summary: Offline diagnostics for faults in experimental software and the measurements it records.
category: Independent research
role: Independent capstone; built the game engines and evaluator
organization: New York University Abu Dhabi
period: October 2026 to present
status: In development
order: 3
tags: [Synthetic participants, Experimental validation, Python, Reproducibility]
updated: 1 November 2026
visual: capstone
---

## What I built

My capstone examines how faults in experimental software distort recorded outcomes. I built paired correct and faulty game engines, scripted decisions to replay through them, and an independent evaluator that reconstructs expected states and payoffs and compares them with the saved records.

The benchmark covers one three-player public-goods episode with public proposals, unanimous agreement, and private final decisions. A clean engine and six single-fault variants replay the same submitted decisions.

## Key decisions

- **Evaluating separately from the engine.** The evaluator recomputes outcomes from the original submitted actions, so a fault in the engine cannot also hide in the check.
- **Reading a pass narrowly.** Some sequences of decisions expose a fault and others leave it unexposed. A passing check means no violation was observed in that sequence.
- **Replaying from saved evidence.** A saved run can be rebuilt offline and has to reproduce. Missing, partial, or modified evidence is reported as such.

## What changed my conclusions

One diagnostic deliberately assigned contributions to the wrong players. The contribution pool and total payoff matched in both engines, so checks on group totals missed the error. Recalculating each player's payoff from the submitted actions exposed it.

Another fault exported public acceptance as compliance, so the economic calculations stayed correct while the label for following an agreement was wrong. Two scripted sequences together expose all six planted faults.

## Limits

The results use synthetic records and scripted decisions chosen with the faults in mind, with no human participants. They do not establish human validity, model superiority, or general fault discovery, and they do not measure a model's ability to find faults.
