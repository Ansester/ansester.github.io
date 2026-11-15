---
title: "Human–AI collaboration"
summary: "I built and lead development of a platform for studying AI advice and cooperation."
category: "Research engineering"
role: "Research assistant · developer and technical lead"
organization: "With Ben Rosche and Hanan Salam, NYU Abu Dhabi"
period: "2026–present"
status: "Faculty research"
order: 1
tags: [Experimental systems, Python, AI agents, Evaluation]
updated: "15 November 2026"
visual: human
links:
  - label: "NYU research project"
    url: "https://cs.shanghai.nyu.edu/characterizing-values-and-norms-multi-agent-human-ai-collaboration-resolve-social-dilemma"
  - label: "Social Dynamics Lab"
    url: "https://benrosche.com/social-dynamics-lab/"
---

## AI advice and cooperation

I work with Ben Rosche and Hanan Salam on how AI advice affects decisions when individual and group incentives conflict. I built the experiment platform and lead its development, from the game engines and adviser integration to participant interfaces, researcher tools, and data exports.

## Game mechanics and information access

I implemented three game engines in Python, connected them to FastAPI and Empirica, and built the participant workflows. The minimum-effort, public-goods, and Snowdrift games each have explicit action rules, observations, adviser messages, and payoff calculations. Those records let me check what a participant saw and reconstruct how an outcome was produced.

I implemented controls that keep private advice out of shared outcomes, and session recovery that resumes recorded decisions without applying them twice. I test these paths across the interface, game state, and exported records.

## Model-adviser experiments

I built simulation workflows that run model advisers, capture their responses, track failures and cost, and reconstruct outcomes from recorded actions. I used them in an exploratory public-goods pilot to check the system and experimental setup.

I also want to understand whether people carry what they learn from an assistant into later decisions without assistance.
