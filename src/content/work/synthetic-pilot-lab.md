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

## The research question

Can synthetic participants help expose problems in an experimental system before a human pilot? I am developing Synthetic Pilot Lab as an independent capstone to investigate that question through small, reproducible diagnostic examples.

I want to distinguish unusual participant behavior from an actual implementation fault. That requires a known specification, retained observations, and an evaluator that can identify a concrete violation.

## My direction

I am defining a standalone project with its own examples, implementation, and evaluation. The capstone draws on my experience with experimental software and has its own research question, repository, and diagnostic examples.

My first example specifies a small contribution game with a deliberately injected accounting fault. Paired correct and faulty versions receive the same scripted action sequences. An independent evaluator reconstructs the expected state and payoffs from those actions and checks the observed evidence.

The specification includes both trajectories that expose the fault and controls that leave it unexposed. Passing a control means that no violation was observed on that trajectory; it does not establish that the implementation is free of defects.

## Why begin with scripts?

A deterministic baseline makes the diagnostic pipeline checkable before introducing model behavior. It separates two questions: whether the evaluator detects a specified fault when given exposing evidence, and whether an AI participant can discover behavior that produces that evidence.

The planned evidence includes accepted actions, participant observations, state transitions, outcomes, and evaluator explanations. Participant-facing information remains separate from the privileged records used to check correctness.

## Current status

The first diagnostic's rules, fixtures, and expected outcomes are specified, and the standalone repository has been established. Implementation and executed results are the next step. The current milestone is a specified diagnostic; model-based discovery and benchmark evaluation remain planned work.

The broader goal is to compare diagnostic approaches under explicit assumptions and understand when synthetic pilots provide useful evidence for experimental development.
