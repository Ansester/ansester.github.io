---
title: Named-entity recognition in Hinglish
summary: A team course project on recognizing named entities in Hindi–English text with multilingual encoders.
category: Multilingual NLP
role: Training pipelines, evaluation tooling, and error analysis within a team
organization: Four-person course project, NYU Abu Dhabi
period: Fall 2025
status: Course project
order: 8
tags: [PyTorch, Transformers, mBERT, XLM-RoBERTa]
updated: 1 November 2026
visual: ner
links:
  - label: Source code
    url: https://github.com/Ansester/hinglish-ner-research
---

## The project

This course project studied named-entity recognition on COMI-LINGUA, a Hindi–English code-mixed dataset. Language switching, variable spelling, and ambiguous entity boundaries complicate the task.

## What I contributed

I contributed to the fine-tuning pipelines, evaluation tooling, and error analysis. The project was completed with Akshith Karthik, Harsh Agarwal, and Lovnish Julka at NYU Abu Dhabi.

## Key decisions

- **Keeping labels aligned.** We worked with mBERT and XLM-RoBERTa token-classification models. Word-level entity labels have to stay aligned when a tokenizer divides a word into several pieces, and predictions have to map back to the original text for evaluation.
- **Separating the baselines.** The encoders were evaluated on the full 4,829-example test split. Zero-shot language models ran on a separate 100-example sample, so the two cannot support a matched comparison.

## Limits

The repository contains the preprocessing, training, prediction, and evaluation pipeline. It does not include trained checkpoints or saved model predictions, so this page does not present model scores as a reproduced benchmark. The zero-shot runs are not packaged in the public repository.
