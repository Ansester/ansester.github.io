---
title: "FieldLens"
summary: "I built a local-model tool for querying incident records and tracing answers back to their sources."
category: "Research engineering"
role: "Developer · design and evaluation"
organization: "Independent project"
period: "2026"
status: "Working prototype"
order: 7
tags: [Python, Local inference, Evaluation, Evidence provenance]
visual: fieldlens
links: []
---

Incident records can change after a question is asked. I built FieldLens around a snapshot of the records so readers can inspect the evidence available when an answer was produced. The app calculates facts from retrieved records and attaches source references and qualifications to each statement. A local Qwen3-4B model selects the statements to display. If the model fails, a set of rules produces an answer from the same snapshot.

I compared rule-based answers, free-form model answers, and statement selection on the same questions about fictional incidents. Some answers cited the right records but left part of the question unanswered. I scored coverage separately from source accuracy to capture those omissions.

<figure class="case-visual diagram-visual"><a class="figure-link" href="/figures/fieldlens-answer-path.svg"><img src="/figures/fieldlens-answer-path.svg" width="820" height="548" loading="lazy" alt="From a frozen incident snapshot, read-only tools retrieve records, the app derives statements, and the local model selects statement IDs. The app displays those statements with source links. A rule-based answer from the same snapshot is available if inference fails."><span class="full-size-link">Full size ↗</span></a></figure>
