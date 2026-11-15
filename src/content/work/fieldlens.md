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
updated: "15 November 2026"
visual: fieldlens
links: []
---

## Answers connected to records

I built FieldLens so that a reader can ask a question about incident records, inspect the answer, and open the exact records behind it. I implemented the interface, local-model integration, bounded retrieval, failure handling, and evaluation tools using fictional incident cases.

I integrated Qwen3-4B in a Q4_K_M configuration through llama.cpp. Each request uses an immutable snapshot; application code calculates quantities such as record age. The model has a bounded set of read-only retrieval tools and selects from statements derived from retrieved records.

## Controlling the answer path

I built the answer path to bind source IDs and necessary qualifications to statements before model selection. The interface renders selected text and references directly, with application warnings displayed separately. When inference fails, a deterministic path returns an answer while preserving the attempted request and evidence.

<figure class="case-visual diagram-visual"><a class="figure-link" href="/figures/fieldlens-answer-path.svg"><img src="/figures/fieldlens-answer-path.svg" width="820" height="548" loading="lazy" alt="From a frozen incident snapshot, read-only tools retrieve records, the app derives statements, and the local model selects statement IDs. The app displays those statements with source links. A rule-based answer from the same snapshot is available if inference fails."><span class="full-size-link">Full size ↗</span></a><figcaption>I built FieldLens to derive statements from retrieved records, retain their qualifications, and let a local model select them.</figcaption></figure>

This design gives me exact control over which statements can appear. I evaluate separately whether the selected statements actually answer the question.

## Evaluation

I compared deterministic, free-prose, and constrained-selection answers on matched cases, measuring validity, coverage, and relevance while retaining failures. Some answers referenced the right sources but omitted information the question asked for; that is why I score coverage separately from source accuracy.

I tested the application and local runtime on ARM64 Linux CPU and Jubail CUDA environments.
