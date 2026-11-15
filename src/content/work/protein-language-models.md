---
title: "Bio-LoRA for protein language models"
summary: "I wrote the signal-peptide training and evaluation code for Bio-LoRA, a method that uses biochemical information to initialize protein model adapters."
category: "Machine learning research"
role: "Co-first author"
organization: "eBRAIN Lab, NYU Abu Dhabi"
period: "2026"
status: "Manuscript in preparation for resubmission, October 2026"
order: 3
tags: [ESM-2, LoRA, Signal peptides, HPC]
visual: protein
links:
  - label: "Signal-peptide software"
    url: "https://hub.docker.com/r/ashmit1308/biolora-signalp"
---

Can the chemistry of amino acids give a protein model a better starting point for a new task? In Bio-LoRA, we used patterns of amino-acid substitution and chemical similarity to initialize ESM-2’s low-rank adapters. This keeps the number of trainable parameters the same as in standard LoRA.

I wrote the training and evaluation code for the signal-peptide task, where the model identifies proteins that carry a targeting sequence and predicts where that sequence is cut.

We also tested whether the model could rank mutations by their measured effect on alpha-synuclein. In our May manuscript, the model initialized with the BLOSUM62 substitution matrix reached a Spearman correlation of 0.45 on that task, compared with 0.43 for standard LoRA and 0.55 for full fine-tuning.

## Manuscript

*Bio-LoRA: Biological Priors as Inductive Bias for Low-Rank Adaptation*. In October 2026 we were preparing a revised submission. All nine authors listed below share first authorship.

Dheyab Saleh Abubaker, Mohammed Faheem, [Ashmit Shankar Mukherjee](https://github.com/Ansester), Saya Othman, Saad Sifar, Srijan Sthapit, Yusong Wang, [Minghao Shao](https://scholar.google.com/citations?user=USe518cAAAAJ), and Professor [Muhammad Shafique](https://scholar.google.com/citations?user=xSR276UAAAAJ), director of the eBRAIN Lab.
