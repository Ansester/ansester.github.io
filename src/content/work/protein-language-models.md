---
title: "Bio-LoRA and protein-model evaluation"
summary: "I developed signal-peptide training and evaluation pipelines and compared ways of adapting protein language models."
category: "Machine learning research"
role: "Co-first author · signal-peptide modeling and evaluation"
organization: "eBRAIN Lab, NYU Abu Dhabi"
period: "2026–present"
status: "Unpublished manuscript"
order: 2
tags: [ESM-2, LoRA, Signal peptides, HPC]
updated: "15 November 2026"
visual: protein
links:
  - label: "SignalP 6.0 background"
    url: "https://www.nature.com/articles/s41587-021-01156-3"
---

## The manuscript

I am a co-first author of Bio-LoRA: Biological Priors as Inductive Bias for Low-Rank Adaptation. I developed the signal-peptide training and evaluation code for this unpublished manuscript, which also covers mutation effects and protein stability. Signal peptides are short sequences that help direct proteins for secretion or transport across a membrane; my tasks predict their presence or type and where the peptide is cleaved.

The manuscript's method uses biological matrices and ESM-2 embeddings to construct an SVD-derived initialization for LoRA's down-projection, with the up-projection initialized to zero. In follow-up work, I separately tested residue-level biological features projected into the model's hidden states alongside LoRA.

## Training and evaluation

I extended the framework with task adapters, model heads, and metrics for signal-peptide classification and cleavage-site prediction. I built experiment configurations and compared vanilla LoRA, biological-prior methods, and full fine-tuning across ESM-2 150M, 650M, and 3B on NYU Abu Dhabi's HPC cluster.

I tracked prediction quality, training time, and memory use, and repeated promising settings across seeds. For the saved 650M comparison, I measured exact cleavage-site match on 1,231 ground-truth signal-peptide-positive examples using seeds 11, 22, and 33.

## What the repeated runs showed

I measured 86.08% mean exact cleavage-site match with BLOSUM62 feature injection, compared with 83.64% for vanilla LoRA. Full fine-tuning led the same metric at 150M and 3B. The figure includes all six methods in the saved 650M comparison.

I also tested removing weight decay and lowering the initial feature-injection scale. Both looked promising in the first seed, but their three-seed means were lower than the original BLOSUM62 setting: 84.92% and 85.30%, respectively.

## Reusable experiment environment

I packaged the signal-peptide workflow into a configurable Docker environment and checked training, checkpoint recovery, and execution on CPU, Apple MPS, and HPC GPUs using bounded validation runs.

<details>
<summary>Manuscript record</summary>

D. S. Abubaker, M. Faheem, A. S. Mukherjee, S. Othman, S. Sifar, S. Sthapit, Y. Wang, M. Shao, and M. Shafique. Bio-LoRA: Biological Priors as Inductive Bias for Low-Rank Adaptation. Unpublished manuscript, 2026. Co-first author.

</details>
