---
title: Bio-LoRA and protein-model evaluation
summary: Biological-prior initialization and task-specific follow-up experiments for adapting protein language models.
category: Machine learning research
role: Co-first author; signal-peptide modeling and evaluation
organization: eBRAIN Lab, New York University Abu Dhabi
period: February 2026 — present
status: Manuscript and follow-up experiments
order: 2
tags: [ESM-2, LoRA, Signal peptides, HPC]
updated: 17 October 2026
visual: protein
---

## The manuscript

I am a co-first author of **Bio-LoRA: Biological Priors as Inductive Bias for Low-Rank Adaptation**, an unpublished research manuscript. It asks whether biological information can provide a useful starting point for adapting a pretrained protein language model.

The submitted method uses biological matrices and ESM-2 embeddings to construct an SVD-derived initialization for LoRA's down-projection; its up-projection starts at zero. The manuscript covers mutation effects, protein stability, and signal-peptide prediction. My work focuses on the signal-peptide task and the infrastructure for training and evaluating models.

## My contribution and follow-up work

I extended the evaluation framework to signal-peptide classification and cleavage-site prediction, including task adapters, model heads, and metrics. I built experiment configurations and ran comparisons on NYU Abu Dhabi's HPC cluster across ESM-2 150M, 650M, and 3B models.

The subsequent signal-peptide work also examines a **separate mechanism**: residue-level biological features are projected into the model's hidden states alongside LoRA adaptation. This feature-injection study is distinct from the initialization method in the submitted manuscript.

I compared the methods with vanilla LoRA and full fine-tuning, investigated initialization and prior controls, and recorded speed and memory behavior under different training protocols. The follow-up included three-seed confirmation runs.

## A recorded follow-up comparison

The saved SP5 benchmark comparison used ESM-2 650M, seeds 11, 22, and 33, and **1,231 true signal-peptide-positive examples**. Exact cleavage-site match is calculated on that positive subset, not all benchmark sequences.

| Method | Exact cleavage-site match, mean ± SD |
| --- | ---: |
| Full fine-tuning | 84.08% ± 1.27 pp |
| Vanilla LoRA | 83.64% ± 2.09 pp |
| BLOSUM62 feature injection with LoRA | 86.08% ± 1.10 pp |

SD is the sample standard deviation across the three seeds, expressed in percentage points. These are descriptive summaries from the saved task-specific comparison. They do not establish statistical significance or a result across all model sizes. Full fine-tuning had the highest mean exact cleavage-site match at 150M and 3B in these comparisons. Later controls did not meet the criteria for a broad biology-specific explanation.

Two promising single-seed settings also reversed under three-seed confirmation. That was a useful research outcome: it changed which configurations were worth pursuing and how much weight to give an initial run.

## Status

The Bio-LoRA manuscript was submitted to EMNLP 2026 and was not accepted. The later task-specific experiments, model-scale comparisons, and controls described here are separate follow-up evidence.
