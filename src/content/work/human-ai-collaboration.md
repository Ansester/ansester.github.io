---
title: "AI advice and cooperation"
summary: "Does it matter whether AI advisers talk to one another before giving players advice?"
category: "Research engineering"
role: "Undergraduate researcher"
organization: "Social Dynamics Lab, NYU Abu Dhabi"
period: "2026–present"
status: "Faculty research"
order: 1
tags: [Experimental systems, Python, AI agents, Evaluation]
visual: human
links:
  - label: "NYU research project"
    url: "https://cs.shanghai.nyu.edu/characterizing-values-and-norms-multi-agent-human-ai-collaboration-resolve-social-dilemma"
  - label: "Social Dynamics Lab"
    url: "https://benrosche.com/social-dynamics-lab/"
---

When people have to decide how much to contribute to a common fund, does it matter whether their AI advisers talk to one another first? I built the experiment platform and lead its development. Our NYU Abu Dhabi faculty mentors are Professor [Benjamin Rosche](https://scholar.google.com/citations?user=GAxIreYAAAAJ), who leads the Social Dynamics Lab, and Professor [Hanan Salam](https://scholar.google.com/citations?user=9lTiKjwAAAAJ), who directs the Social Machines and Robotics Lab.

In one version of the experiment, each language model advises its player privately. In another, the advisers discuss a plan before making their recommendations. Players choose their own moves in the React interface I built. Empirica groups the players, and my Python service receives their moves through FastAPI. It calculates payoffs and records which advice was available to each player when they acted.

I tested the advisers with model players in public-goods, minimum-effort and Snowdrift games. We don’t yet have a confirmed date to start recruiting people.
