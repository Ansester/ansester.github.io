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
updated: 25 October 2026
visual: human
links:
  - label: NYU research project
    url: https://cs.shanghai.nyu.edu/characterizing-values-and-norms-multi-agent-human-ai-collaboration-resolve-social-dilemma
  - label: Social Dynamics Lab
    url: https://benrosche.com/social-dynamics-lab/
---

## What I work on

The project asks how AI advice changes cooperation when individual and group incentives differ.

Ben Rosche and Hanan Salam lead the research. I coordinate software development and review whether the implementation follows the study requirements. The work covers Python game mechanics, participant and researcher interfaces, session recovery, and data exports.

## From a recommendation to a recorded outcome

In the computational runner, a validated recommendation becomes the action executed by the game. A separate validator reads the retained records and checks the recommendation against the executed action, then recalculates payoffs from the recorded actions and rules.

These are two checks in that validator:

| Check | What it compares |
| --- | --- |
| `literal_execution` | Validated recommendation and executed action |
| `payoffs` | Recorded payoffs and an independent calculation from the actions |

One test deliberately changes a stored group payoff while leaving the underlying action records intact. In an offline check on 25 October 2026, the validator detected the mismatch and summary generation refused the altered run. No summary files were created. The [check record](#payoff-check) below contains the result and source fingerprints.

An engine checking its own output can repeat the same error. The validator therefore recalculates payoffs independently of the game engine. Other checks look for information appearing where it should not, such as private recommendations.

I review these checks against the study requirements and the records needed to diagnose a failure. Keeping requests, actions, and outcomes together lets us inspect the advice, validation, and game execution separately when a result looks wrong.

## Current evidence

The checks described here use **deterministic fixture advisers**: scripts with known behaviour. They test software consistency and do not measure how models or people cooperate. The human-study platform is a separate development path.
