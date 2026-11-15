---
title: "CSAW 2026 LLM-CTF"
summary: "I built a parallel LLM-agent workflow for security challenges and won with SegfaultObservers (Team MENA)."
category: "Security competition"
role: "Agent workflow, verification, and evidence records"
organization: "SegfaultObservers · Team MENA"
period: "November 2026"
status: "Competition winner"
order: 5
tags: []
updated: "15 November 2026"
visual: csaw
links:
  - label: "Public submission and code"
    url: "https://github.com/Ansester/csaw26-llmac-ctf"
  - label: "Approach"
    url: "https://github.com/Ansester/csaw26-llmac-ctf/blob/master/submission/APPROACH.md"
  - label: "Per-challenge record"
    url: "https://github.com/Ansester/csaw26-llmac-ctf/blob/master/MANIFEST.md"
---

## Building the solving workflow

I won the CSAW 2026 LLM CTF Attack Competition with SegfaultObservers (Team MENA). I built and ran a workflow that used six parallel Claude Code agents across cryptography, web security, binary exploitation, reverse engineering, forensics, and miscellaneous challenges.

My team recorded flag recoveries for 22 of 23 challenges, including reference-assisted and answer-exposed cases. I documented how each result was obtained in the public submission.

I gave each category a structured task brief and a separate Git branch inside an isolated VirtualBox VM. I used tmux to keep the sessions running and Git checkpoints to preserve progress across a memory crash and a reboot. I steered the work, resolved environment problems, and assembled the final technical record.

<figure class="case-visual diagram-visual"><a class="figure-link" href="/figures/csaw-agent-workflow.svg"><img src="/figures/csaw-agent-workflow.svg" width="1280" height="760" loading="lazy" alt="Workflow diagram showing six parallel category agents for cryptography, forensics, web, binary exploitation, reverse engineering, and miscellaneous challenges. Their candidate outputs feed review of solver and service evidence, with adversarial verification or second-model analysis for selected hard cases. The output is a per-challenge record of a recovery or blocker, execution evidence, and assistance history. Review paths varied by challenge."><span class="full-size-link">Full size ↗</span></a><figcaption>My category-agent workflow: I used additional verification for selected challenges and recorded the evidence and assistance behind each result.</figcaption></figure>

## Checking difficult answers

For harder challenges, I ran parallel solver attempts, then used a verifier agent to challenge the derivations and try to reproduce them. For one reverse-engineering problem, I brought in ChatGPT for a second analysis path through a virtual machine hidden inside Pure Data.

One verification pass exposed an audio decode that had been fitted to a desired answer. I rejected it and kept that challenge unsolved. I built a per-challenge evidence record to distinguish independently recovered results from reference-assisted and answer-exposed cases.

## Technical record

I published solver code, prompts, transcripts, approach notes, and the disclosure record. The repository shows how I organized the agents, handled failed attempts, and checked the candidate results.
