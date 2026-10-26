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
updated: 26 October 2026
visual: human
links:
  - label: NYU research project
    url: https://cs.shanghai.nyu.edu/characterizing-values-and-norms-multi-agent-human-ai-collaboration-resolve-social-dilemma
  - label: Social Dynamics Lab
    url: https://benrosche.com/social-dynamics-lab/
---

## The research question

People often face choices where protecting their own interests can make everyone worse off. How does cooperation change when AI systems advise the people making those choices?

The research examines repeated interactions between people and AI in social dilemmas. Different forms of assistance may change what people notice, how they interpret others’ actions, and whether they coordinate. Ben Rosche and Hanan Salam supervise my work at NYU Abu Dhabi as part of the wider NYU collaboration linked above.

## My contribution

I coordinate software development and review how the experimental design is translated into a working system. My work spans the Python game mechanics, participant and researcher interfaces, AI integration, session recovery, and data exports.

That means following a decision through the whole application. The participant must see the information allowed by their experimental condition; the game must apply the specified rules; and the exported records must preserve enough context to explain the outcome. I review implementation choices against those requirements and investigate mismatches between the interface, game state, and saved data.

## What the software supports

The participant flow covers onboarding, comprehension checks, repeated decisions, feedback, and a final debrief. Researchers need to configure and monitor sessions, handle interrupted connections, and recover records for analysis.

AI advice adds a second layer of coordination. The software has to control what information an adviser receives and keep its recommendation separate from the participant’s decision. In the computational testing workflow, scripted advisers let us exercise those paths before relying on model-generated advice.

For example, an interrupted session should resume from the recorded decision rather than apply it twice. Likewise, a private recommendation should remain private even when the group sees a shared outcome. These are software requirements with direct consequences for what an experiment can measure.

## Where the work stands

The platform and its offline checks are under development. Scripted tests help check game mechanics, information access, and recorded outcomes. **No human-study results are reported here**, and passing those checks does not establish how AI changes cooperation.
