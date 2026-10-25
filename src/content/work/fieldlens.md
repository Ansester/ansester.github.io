---
title: FieldLens
summary: A local prototype for reviewing fictional incident records, with model answers linked to their sources.
category: Research engineering
role: Project direction, requirements, and evaluation
organization: Independent prototype
period: October 2026
status: Working prototype
order: 4
tags: [Python, Local inference, Evaluation, Evidence provenance]
updated: 25 October 2026
visual: fieldlens
---

## The question

How can a small local language model help someone inspect an incident while keeping its answer connected to the available evidence?

FieldLens lets a reader ask a small local language model about a fictional incident, then inspect the records behind its answer. Timestamps, uncertainty, and missing information stay visible as records pass through retrieval and answer generation.

## My role

I set requirements for retrieval and failure handling, defined the evaluation criteria, and reviewed successive prototypes.

## Design choices

Each request uses an immutable snapshot of the records. Ordinary code calculates quantities such as record age. The local model can call three retrieval tools; all are read-only and subject to limits enforced by the application.

In the released answer path, the model chooses from statements derived from the retrieved records. The interface displays the selected statements verbatim, with their caveats and source links. Warnings and a deterministic baseline remain available when inference fails.

## Evidence and current limits

The v0.2.0 evaluation compared deterministic, free-prose, and constrained-selection answers on matched synthetic cases. It measured valid output, coverage, and relevance, retaining failed and incomplete answers in the results.

The frozen application and local runtime also ran on ARM64 Linux CPU and Jubail CUDA environments. CPU runs that exceeded the deadline were recorded as failures.

Some answers cited their sources correctly but still omitted information requested by the question. The checks used fictional records and procedures; evaluation with human reviewers and on the intended physical device remains future work.
