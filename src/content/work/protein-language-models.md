---
title: Bio-LoRA and protein-model evaluation
summary: Co-first-author work on biological-prior initialization, followed by experiments on signal-peptide prediction across model sizes.
category: Machine learning research
role: Co-first author; built the signal-peptide evaluation
organization: eBRAIN Lab, New York University Abu Dhabi
period: February 2026 to present
status: Unpublished manuscript
order: 2
tags: [ESM-2, LoRA, Signal peptides, HPC]
updated: 1 November 2026
visual: protein
---

## What I built

I extended the evaluation framework to signal-peptide classification and cleavage-site prediction, building the task adapters, model heads, and metrics. I built the experiment configurations and ran comparisons on NYU Abu Dhabi's HPC cluster across ESM-2 150M, 650M, and 3B models.

Follow-up experiments projected residue-level biological features into the model's hidden states alongside LoRA. I also investigated initialization and prior controls, and recorded speed and memory behavior under different training protocols.

## Key decisions

- **Scoring on true positives.** Exact cleavage-site match is calculated on the 1,231 true signal-peptide-positive examples, not all 8,811 benchmark sequences.
- **Separating experimental choices.** I investigated initialization, feature injection, and efficiency as distinct choices, so a result from one is not credited to another.
- **Keeping the baselines in view.** The comparison above shows vanilla LoRA and full fine-tuning alongside all four feature-injection configurations.

## What changed my conclusions

Removing weight decay and reducing the initial feature-injection scale both looked better in the first seed. Across three seeds, their mean exact cleavage-site match fell below the original BLOSUM62 setting: 84.92% without weight decay and 85.30% with the smaller initial scale, compared with 86.08%. That changed which configurations I prioritized.

BLOSUM62 feature injection had the highest mean at 650M, but full fine-tuning had the highest mean at 150M and 3B. The 650M advantage did not carry across model sizes or establish a general benefit from biological features.

## Limits

These comparisons are specific to the task, model size, and training protocol. The saved SP5 comparison uses seeds 11, 22, and 33. Its error bars show sample standard deviations and do not establish statistical significance.

## The manuscript

I am a co-first author of **Bio-LoRA: Biological Priors as Inductive Bias for Low-Rank Adaptation**, an unpublished research manuscript. It asks whether biological information can provide a useful starting point for adapting a pretrained protein language model.

The submitted method uses biological matrices and ESM-2 embeddings to construct an SVD-derived initialization for LoRA's down-projection; its up-projection starts at zero. The manuscript covers mutation effects, protein stability, and signal-peptide prediction. My work focuses on the signal-peptide task and the infrastructure for training and evaluating models. The feature injection shown above is separate from this initialization method.

<details>
<summary>Manuscript record</summary>


D. S. Abubaker, M. Faheem, **A. S. Mukherjee**, S. Othman, S. Sifar, S. Sthapit, Y. Wang, M. Shao, and M. Shafique. *Bio-LoRA: Biological Priors as Inductive Bias for Low-Rank Adaptation.* Unpublished manuscript, 2026. Co-first author.

</details>
