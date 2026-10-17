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
updated: 17 October 2026
visual: fieldlens
---

## The question

How can a small local language model help someone inspect an incident while keeping its answer connected to the available evidence?

FieldLens explores that question through a synthetic incident replay. A reader asks a question, reviews the answer, and opens its supporting records. The challenge is to preserve timestamps, uncertainty, and missing information through retrieval and answer generation.

## My role

I directed the prototype, specifying requirements for evidence retrieval, failure handling, evaluation, and portability checks. My role covered the design decisions, evaluation criteria, and review of successive revisions.

## Design choices

The application creates an immutable evidence snapshot and calculates quantities such as record age in ordinary code. A local model can choose from three read-only retrieval tools, subject to application-enforced limits.

For the released answer path, the model selects application-owned claims derived from the retrieved records. Required qualifications remain attached to those claims, and the interface renders their exact text and references. Separate warnings and a deterministic baseline remain available when inference fails.

## Evidence and current limits

The saved v0.2.0 evaluation compares deterministic, free-prose, and constrained-selection paths on matched synthetic cases. It separates valid output from proposition coverage and relevance, preserving incomplete answers and failed experiments alongside successful cases.

Separate portability checks executed the frozen application and local runtime on ARM64 Linux CPU and Jubail CUDA environments. CPU deadline failures remained documented rather than being treated as successful model answers.

FieldLens uses fictional records and procedures. The checks cover the prototype and its synthetic cases; evaluation with human reviewers and on the intended physical device remains future work. The comparison exposed a practical limitation: an answer can contain supported claims and still omit what the question asked for.
