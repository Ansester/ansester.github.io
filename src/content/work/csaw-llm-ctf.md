---
title: "CSAW 2026 LLM CTF Attack Competition"
summary: "First place, MENA region. I built the workflow that ran six Claude Code agents in parallel and checked their proposed solutions."
category: "Security competition"
role: "Agent workflow design and verification"
organization: "SegfaultObservers"
period: "November 2026"
status: "First place, MENA region"
order: 5
tags: []
visual: csaw
links:
  - label: "Competition"
    url: "https://csaw.io/competition/llm-ctf-attack-competition"
  - label: "Code and submission"
    url: "https://github.com/Ansester/csaw26-llmac-ctf"
  - label: "Challenge results"
    url: "https://github.com/Ansester/csaw26-llmac-ctf/blob/master/MANIFEST.md"
---

My teammates were [Maryam Emaan Fiyaz](https://intro.nyuadim.com/author/mef9957/), [Akshith Karthik](https://github.com/Ak1016-stack), and [Aadil Chasmawala](https://github.com/Aarz1401). Together we took first place in the MENA region as SegfaultObservers. I built and ran our agent workflow. Six Claude Code agents worked in parallel, one per challenge category. On the hardest problems, I had agents try different approaches and gave a separate agent the proposed solution to look for a flaw. On an audio puzzle, it found that the decoder reproduced a known piece of the flag without deriving it from the recording. We left that challenge unsolved.

We recovered flags for 22 of 23 challenges. The organizers allowed the reference files supplied with the challenges and ruled out web search. We used the supplied files for twelve recoveries. Our submission also identifies two prompts with an answer visible and one challenge where a second model found a solution method online.
