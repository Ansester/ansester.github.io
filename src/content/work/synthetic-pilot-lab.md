---
title: Synthetic Pilot Lab
summary: Testing whether synthetic participants can help find faults in experimental software.
category: Independent research
role: Capstone research direction and diagnostic specification
organization: New York University Abu Dhabi
period: October 2026 — present
status: In development
order: 3
tags: [Synthetic participants, Experimental validation, Python, Reproducibility]
updated: 17 October 2026
visual: capstone
---

## A diagnostic before a human pilot

My independent capstone asks whether synthetic participants can help find faults in experimental software. The first diagnostic specifies a small contribution game with an injected accounting fault.

The specification pairs correct and faulty versions with the same scripted actions. An independent evaluator reconstructs expected states and payoffs, then checks them against the observations. Some trajectories expose the fault; control trajectories leave it unexposed. A passing control means no violation was observed on that trajectory.

## Why start with scripts?

The first task is to establish whether the evaluator detects a known fault when given evidence that exposes it. Whether a model can discover such a trajectory is a separate question to test afterwards.

## Current status

In development. The first diagnostic's rules, fixtures, and expected outcomes are specified, and a standalone repository is established. Implementation, executed evaluations, and model-based fault discovery remain planned work.
