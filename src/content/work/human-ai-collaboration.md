---
title: Human–AI research platform
summary: Turning experimental requirements into a platform for research and structured data collection.
category: Research systems
role: Lead technical implementation; contribute to study design
organization: New York University Abu Dhabi
period: February 2026 — present
status: Ongoing research
order: 1
tags: [Research engineering, Python, Empirica, Validation]
visual: human
---

## The problem

Studying human–AI collaboration requires an experimental environment in which the software follows the study design. Instructions, participant decisions, the information each person sees, and the records available for analysis all need to agree. A small implementation choice can change the experience being studied.

At NYU Abu Dhabi, I lead the technical implementation of an online research platform and contribute to study design. My work connects the researchers' requirements to the systems used to run an experiment and collect its data.

## What I work on

The implementation spans participant workflows, platform behavior, deployment, and data collection. I translate research requirements into concrete procedures: what happens at each stage, which information is available, and what must be recorded for later analysis.

The project separates the participant-facing application, session orchestration, and Python rules logic. This gives the different parts of the experiment a defined place in the system. My work includes the validation and operational workflows needed to bring those parts together.

I also contribute to the study design. That means working through the implications of a requirement before treating it as a screen or an endpoint. The software is part of the experimental method, so implementation and research questions need to inform one another.

## Engineering decisions

### Turn requirements into observable behavior

A requirement is useful to the implementation when it can be connected to a participant action, a system response, or a validation check. I work on that translation so the intended procedure can be examined in the running platform.

### Separate the experience from the rules

Participant interfaces and underlying experiment logic solve different problems. The application needs a clear interaction flow, while the rules need consistent behavior. Separating these responsibilities makes it possible to reason about each without treating the visual interface as the complete experiment.

### Design data collection alongside the workflow

The records produced by the platform need to support subsequent analysis. I build data workflows together with platform behavior, rather than treating the export as an unrelated final step. What a record means depends on when it was produced and what was happening in the experiment.

## Validation and current scope

My work includes structured validation checks, deployment, and maintenance of the research system. The engineering goal is to make platform behavior inspectable and keep the implementation aligned with the study's requirements.

This is ongoing research. A functioning platform or a successful software check does not establish an effect on human behavior. This case study describes my infrastructure and study-design contribution; it does not report human-study findings.

## Discuss the work

I am happy to discuss the engineering approach, the translation from research requirements to software, and the challenges of maintaining experimental systems. [Get in touch](mailto:asm8879@nyu.edu).
