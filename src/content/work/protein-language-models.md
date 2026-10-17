---
title: Bio-LoRA
summary: Evaluating biological priors, low-rank adaptation, and the conditions under which protein-model improvements hold.
category: Machine learning research
role: Co-first author; adaptation methods and evaluation infrastructure
organization: eBRAIN Lab, New York University Abu Dhabi
period: February 2026 — present
status: Research manuscript
order: 3
tags: [Protein language models, ESM-2, LoRA, HPC]
visual: protein
updated: 17 October 2026
links:
  - label: OpenReview submission record
    url: https://openreview.net/forum?id=c2bOohFkYH
---

## The research question

Can biological priors improve parameter-efficient adaptation of a protein language model? My work contributes to **Bio-LoRA: Biological Priors as Inductive Bias for Low-Rank Adaptation** through a signal-peptide task extension. It studies classification and cleavage-site localization: identifying whether a protein contains a signal peptide, its type, and where it is cleaved.

I am a co-first author on this research manuscript. My work at NYU Abu Dhabi's eBRAIN Lab combines adaptation methods with the training and evaluation infrastructure needed to examine them across repeated experiments.

## Approach and my contribution

The project adapts ESM-2 using low-rank adaptation, or LoRA, which trains a smaller set of added parameters while keeping the pretrained backbone frozen. The biological extension introduces residue-level features derived from substitution and physicochemical properties, including BLOSUM62, hydrophobicity, and Grantham distance.

I work on the adaptation and evaluation pipeline, multi-seed experiment campaigns, and execution on NYU Abu Dhabi's high-performance computing cluster. The infrastructure connects configurations, checkpoints, per-run metrics, and analysis so a comparison can be reproduced and its assumptions inspected.

The experimental work includes comparisons with vanilla LoRA and full fine-tuning, model-size studies, prior and initialization controls, and speed/memory measurements. I treat the predictive comparison and the explanation for an improvement as distinct questions: outperforming a baseline in one setting does not, by itself, establish that biological knowledge caused the gain.

## What the evidence supports

The original three-seed ESM-2 650M benchmark reports stronger mean results for BLOSUM62-guided adaptation across its primary metrics. That finding is specific to the tested task, model size, and protocol. Comparisons at other model sizes and subsequent controls place limits on broader claims.

Efficiency also depends on how experiments are matched. A smaller trainable parameter count does not automatically imply faster training; batch size and accumulation determine whether a memory advantage becomes a throughput advantage.

## Research lesson and status

Several promising single-seed settings reversed under repeated evaluation. That made screening followed by confirmation a practical requirement, rather than a reporting detail.

The manuscript was reviewed at EMNLP 2026 and was not accepted. It remains an unpublished research manuscript. The task-specific comparisons and subsequent controls support a bounded experimental contribution, while the broad biology-specific explanation did not pass the confirmatory criteria.
