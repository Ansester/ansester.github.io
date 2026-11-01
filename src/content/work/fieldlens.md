---
title: FieldLens
summary: A local prototype for reviewing fictional incident records, with model answers linked to their sources.
category: Research engineering
role: Built the prototype; set its requirements and evaluation criteria
organization: Independent prototype
period: October 2026
status: Working prototype
order: 5
tags: [Python, Local inference, Evaluation, Evidence provenance]
updated: 1 November 2026
visual: fieldlens
---

## The question

How can a small local language model help someone inspect an incident while keeping its answer connected to the available evidence?

## What I built

FieldLens lets a reader ask a small local language model about a fictional incident, then inspect the records behind its answer. Timestamps, uncertainty, and missing information stay visible as records pass through retrieval and answer generation.

I built the prototype and set its requirements for retrieval and failure handling, along with the criteria used to evaluate it.

## Key decisions

- **Fixing the records.** Each request uses an immutable snapshot of the records.
- **Leaving arithmetic to code.** Ordinary code calculates quantities such as record age. The model can call three retrieval tools, all read-only and subject to limits enforced by the application.
- **Constraining the answer.** In the released answer path, the model chooses from statements derived from the retrieved records. The interface displays them verbatim, with their caveats and source links.
- **Planning for failure.** Warnings and a deterministic baseline remain available when inference fails.

## What changed my conclusions

The v0.2.0 evaluation compared deterministic, free-prose, and constrained-selection answers on matched synthetic cases. It measured valid output, coverage, and relevance, and kept failed and incomplete answers in the results.

Some answers cited their sources correctly but still omitted information the question asked for. A correct citation is not enough to show that an answer is complete.

## Limits

The checks used fictional records and procedures. The frozen application and local runtime also ran on ARM64 Linux CPU and Jubail CUDA environments, and CPU runs that exceeded the deadline were recorded as failures. Evaluation with human reviewers and on the intended physical device remains future work. The repository is private.
