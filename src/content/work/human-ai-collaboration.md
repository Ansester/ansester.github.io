---
title: Human–AI collaboration
summary: Experimental software for studying AI advice and coordination in multi-party social dilemmas.
category: Research engineering
role: Technical implementation and research-design review
organization: New York University Abu Dhabi
period: February 2026 — present
status: Ongoing faculty research
order: 1
tags: [Experimental systems, Python, AI agents, Evaluation]
updated: 17 October 2026
visual: human
links:
  - label: NYU research project
    url: https://cs.shanghai.nyu.edu/characterizing-values-and-norms-multi-agent-human-ai-collaboration-resolve-social-dilemma
  - label: Social Dynamics Lab
    url: https://benrosche.com/social-dynamics-lab/
---

## The research question

How does AI advice affect coordination when individual and collective incentives differ? The software needs to preserve the study's rules, information boundaries, advice, and records consistently across an experiment.

I work on a faculty-led project at NYU Abu Dhabi with Ben Rosche and Hanan Salam. I coordinate software development and review, translate research requirements into system behavior, and contribute implementation-focused feedback on the study design. Faculty collaborators lead the scientific design.

## My contribution

The work spans Python game mechanics, participant and researcher interfaces, session orchestration, deployment workflows, and structured exports. I have directed repository and interface redesigns to make the system easier to operate and its responsibilities easier to inspect, and coordinate reviews against the study requirements.

The current computational path supports configurable games, adviser workflows, literal execution of validated recommendations, resumable runs, and retained request and outcome records. It separates strategic model output from deterministic mechanics so that an unexpected result can be traced to the advice, its validation, or the game implementation.

## Validation

My implementation review covers reconstructing expected outcomes from recorded inputs, checking which information reaches advisers, participants, and researchers, and maintaining consistent game mechanics across computational runs and the human-study interface.

## Current status

The computational implementation has been exercised with deterministic fixture advisers. These checks establish software behavior under specified inputs; they do not establish real-model strategy or effects on people. The human-study platform remains a separate development path, and scientific configuration decisions are still being resolved.
