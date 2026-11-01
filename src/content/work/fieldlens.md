---
title: FieldLens
summary: A local prototype for reviewing fictional incident records, with model answers linked to their sources.
category: Research engineering
role: Developer · design and evaluation
organization: Independent prototype
period: October 2026
status: Working prototype
order: 5
tags: [Python, Local inference, Evaluation, Evidence provenance]
updated: 1 November 2026
visual: fieldlens
---

I built FieldLens, a local-model tool for inspecting incident records. A reader can ask a question, read an answer, and open the records behind it. I implemented the retrieval and failure handling, defined the evaluation criteria, and tested successive versions.

## Keeping answers connected to records

Each request works from a fixed snapshot. Code calculates quantities such as record age, while the model uses bounded, read-only retrieval tools. In the current answer path, the model selects statements derived from the records. The interface displays those statements with their source links and caveats.

The prototype also has a deterministic answer path for requests where model inference fails.

## Evaluation

For the v0.2.0 evaluation, I compared deterministic, free-prose, and constrained-selection answers on the same fictional incident cases. I measured validity, coverage, and relevance, retaining failed and incomplete answers in the results.

Some answers cited the right records but left out information the question asked for. That distinction is why the evaluation checks coverage as well as source references.

The application and local runtime have run on ARM64 Linux CPU and Jubail CUDA environments. Evaluation with incident reviewers and on the intended physical device is the next step.
