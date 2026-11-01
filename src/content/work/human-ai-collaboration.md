---
title: Human–AI collaboration
summary: Software for studying how AI advice affects cooperation when individual and group incentives differ.
category: Research engineering
role: Research assistant · developer and technical lead
organization: With Ben Rosche and Hanan Salam, NYU Abu Dhabi
period: February 2026 — present
status: Ongoing faculty research
order: 1
tags: [Experimental systems, Python, AI agents, Evaluation]
updated: 1 November 2026
visual: human
links:
  - label: NYU research project
    url: https://cs.shanghai.nyu.edu/characterizing-values-and-norms-multi-agent-human-ai-collaboration-resolve-social-dilemma
  - label: Social Dynamics Lab
    url: https://benrosche.com/social-dynamics-lab/
---

## AI advice and cooperation

How does cooperation change when people receive advice from AI? This faculty-led project studies repeated decisions in social dilemmas, where individual and group incentives can conflict. I work with Ben Rosche and Hanan Salam at NYU Abu Dhabi as part of the wider NYU collaboration linked above.

## My work on the platform

I built the experiment platform and lead its ongoing development. It includes the Python game mechanics, participant and researcher interfaces, AI integration, session recovery, and data exports.

A decision has to remain consistent across those parts. The participant sees the information allowed by their condition, the game applies the specified rules, and the exported records preserve the outcome. I implement and test these paths, and investigate mismatches between the interface, game state, and saved data.

I implemented session recovery that resumes from recorded decisions without applying them twice, and information controls that keep private recommendations out of shared outcomes. These details affect what the experiment can measure.

## Current work

The platform is under development. Scripted advisers and offline checks exercise the game mechanics, information access, and recorded outcomes. No human-study results are reported here.
