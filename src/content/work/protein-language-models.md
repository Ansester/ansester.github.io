---
title: "Bio-LoRA and protein-model evaluation"
summary: "Training and evaluation pipelines for adapting protein language models to signal-peptide prediction."
category: "Machine learning research"
role: "Co-first author · signal-peptide modeling and evaluation"
organization: "eBRAIN Lab, NYU Abu Dhabi"
period: "2026"
status: "Unpublished manuscript and follow-up experiments"
order: 3
tags: [ESM-2, LoRA, Signal peptides, HPC]
visual: protein
links:
  - label: "Signal-peptide container"
    url: "https://hub.docker.com/r/ashmit1308/biolora-signalp"
  - label: "SignalP 6.0 background"
    url: "https://www.nature.com/articles/s41587-021-01156-3"
---

Signal peptides help direct proteins for secretion or transport across a membrane. As a co-first author of the Bio-LoRA manuscript, I developed the code to train and evaluate models that identify these peptides and predict where they are cut. Our method uses biological matrices and ESM-2 embeddings to initialize low-rank adapters.

In separate follow-up experiments, I tested whether adding biological features for each amino acid to the model’s hidden states improved cleavage-site prediction. I compared this approach with standard LoRA and full fine-tuning at three ESM-2 model sizes. At 650M parameters, the saved three-seed comparison gave 86.08% exact cleavage-site matches with BLOSUM62 features and 83.64% with standard LoRA.

Of the 1,231 signal-peptide-positive sequences scored on SP5, 549 also appear in the fitting split in the available files. The original run inputs remain unverified, so performance on unseen proteins is unresolved.

<details>
<summary>Manuscript record</summary>

[Dheyab Saleh Abubaker](https://openreview.net/profile?id=~Dheyab_Saleh_Abubaker1), [Mohammed Faheem](https://openreview.net/profile?id=~Mohammed_Faheem1), [Ashmit Shankar Mukherjee](/), [Saya Othman](https://openreview.net/profile?id=~Saya_Othman1), [Saad Sifar](https://openreview.net/profile?id=~Saad_Sifar1), [Srijan Sthapit](https://openreview.net/profile?id=~Srijan_Sthapit1), [Yusong Wang](https://openreview.net/profile?id=~Yusong_Wang2), [Minghao Shao](https://scholar.google.com/citations?user=USe518cAAAAJ), and [Muhammad Shafique](https://scholar.google.com/citations?user=xSR276UAAAAJ). Bio-LoRA: Biological Priors as Inductive Bias for Low-Rank Adaptation. November 2026 manuscript (unpublished). Co-first author.

</details>
