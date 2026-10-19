---
title: Human–AI collaboration
summary: Software for studying how AI advice affects cooperation when individual and group incentives differ.
category: Research engineering
role: Research assistant · software development and review
organization: With Ben Rosche and Hanan Salam, NYU Abu Dhabi
period: February 2026 — present
status: Ongoing faculty research
order: 1
tags: [Experimental systems, Python, AI agents, Evaluation]
updated: 19 October 2026
visual: human
links:
  - label: NYU research project
    url: https://cs.shanghai.nyu.edu/characterizing-values-and-norms-multi-agent-human-ai-collaboration-resolve-social-dilemma
  - label: Social Dynamics Lab
    url: https://benrosche.com/social-dynamics-lab/
---

## What I work on

How does advice from an AI system change cooperation? Answering that question requires software that keeps the experimental rules, the information available to each participant, and the recorded outcomes consistent.

I coordinate technical development and review, translate study requirements into software behaviour, and contribute implementation-focused feedback on the design. Ben Rosche and Hanan Salam lead the scientific work. My responsibilities span the Python game mechanics, participant and researcher interfaces, session recovery, and data exports.

## From a recommendation to a recorded outcome

In the computational runner, a validated recommendation becomes the action executed by the game. A separate validator reads the retained records and checks the recommendation against the executed action, then recalculates payoffs from the recorded actions and rules.

These are two checks in that validator:

| Check | What it compares |
| --- | --- |
| `literal_execution` | Validated recommendation and executed action |
| `payoffs` | Recorded payoffs and an independent calculation from the actions |

One test deliberately changes a stored group payoff while leaving the underlying action records intact. It asserts that validation fails and that the summary process refuses the altered run.

This separation matters because an engine that checks its own answers can repeat its own mistake. The independent calculation provides another way to detect a disagreement. Other checks cover the information sent to advisers, including whether private recommendations appear where they should not.

My work includes coordinating these checks against the study requirements and reviewing the records needed to diagnose a failure. Retaining both requests and outcomes makes it possible to ask whether an unexpected result came from the advice, its validation, or the game implementation.

## Current evidence

The computational implementation has been exercised with **deterministic fixture advisers**: scripted inputs with known behaviour. These checks cover software behaviour under specified conditions. They do not establish real-model strategy or effects on people.

The human-study platform is a separate development path. Scientific configuration decisions are still being resolved before live model or human studies.
