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
visual: csaw
links:
  - label: "Public submission and code"
    url: "https://github.com/Ansester/csaw26-llmac-ctf"
  - label: "Approach"
    url: "https://github.com/Ansester/csaw26-llmac-ctf/blob/master/submission/APPROACH.md"
  - label: "Per-challenge record"
    url: "https://github.com/Ansester/csaw26-llmac-ctf/blob/master/MANIFEST.md"
---

I built and ran a system that assigned one Claude Code agent to each of six challenge categories. On harder problems, I ran competing solutions and used a verifier to try to reproduce their results. For one reverse-engineering challenge, we reconstructed a virtual machine hidden inside a Pure Data patch and tested candidate keys in a Python emulator.

Our team recorded flag recoveries for 22 of 23 challenges. I documented how we obtained each flag, including cases where we used a reference or had already seen the answer. We left one audio challenge unsolved after verification showed that the proposed decoding had been fitted to the expected flag.

<figure class="case-visual diagram-visual"><a class="figure-link" href="/figures/csaw-agent-workflow.svg"><img src="/figures/csaw-agent-workflow.svg" width="1280" height="760" loading="lazy" alt="Workflow diagram showing six parallel category agents for cryptography, forensics, web, binary exploitation, reverse engineering, and miscellaneous challenges. Their candidate outputs feed review of solver and service evidence, with adversarial verification or second-model analysis for selected hard cases. The output is a per-challenge record of a recovery or blocker, execution evidence, and assistance history. Review paths varied by challenge."><span class="full-size-link">Full size ↗</span></a></figure>
