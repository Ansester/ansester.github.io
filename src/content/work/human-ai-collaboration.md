---
title: Human–AI collaboration
summary: Software for studying how AI advice affects cooperation when individual and group incentives differ.
category: Research engineering
role: Research assistant; built the experiment platform
organization: With Ben Rosche and Hanan Salam, NYU Abu Dhabi
period: February 2026 to present
status: Ongoing faculty research
order: 1
tags: [Experimental systems, Python, FastAPI, Empirica, Evaluation]
updated: 1 November 2026
visual: human
links:
  - label: NYU research project
    url: https://cs.shanghai.nyu.edu/characterizing-values-and-norms-multi-agent-human-ai-collaboration-resolve-social-dilemma
  - label: Social Dynamics Lab
    url: https://benrosche.com/social-dynamics-lab/
---

## The research question

People often face choices where protecting their own interests can make everyone worse off. How does cooperation change when AI systems advise the people making those choices?

The research examines repeated interactions between people and AI in social dilemmas. Ben Rosche and Hanan Salam supervise my work at NYU Abu Dhabi as part of the wider NYU collaboration linked above. The scientific design is faculty-led.

## What I built

I built the software that turns the study design into a working experiment: the Python and FastAPI game mechanics, the Empirica participant and researcher workflows, the AI integration, session recovery, and data exports.

The participant flow covers onboarding, comprehension checks, repeated decisions, feedback, and a final debrief. Researchers can configure and monitor sessions, handle interrupted connections, and recover records for analysis.

## Key decisions

- **Controlling what the adviser sees.** The software limits the information an adviser receives and keeps its recommendation separate from the participant's decision. A private recommendation stays private even when the group sees a shared outcome.
- **Resuming from the record.** An interrupted session resumes from the recorded decision rather than applying it twice.
- **Scripting the advisers first.** Scripted advisers exercise these paths before the study relies on model-generated advice.
- **Recomputing outcomes separately.** Checks reconstruct outcomes from recorded actions instead of trusting the game engine's own totals. One test alters a saved payoff and confirms that validation fails and no summary is produced.

These are software requirements with direct consequences for what an experiment can measure. If an adviser sees information it should not have, a change in behaviour could be attributed to the wrong part of the intervention.

## Limits

The platform and its offline checks are under development. Scripted tests check game mechanics, information access, and recorded outcomes. **No human-study results are reported here**, and passing those checks does not establish how AI changes cooperation.
