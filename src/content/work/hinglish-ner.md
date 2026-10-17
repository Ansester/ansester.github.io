---
title: Named-entity recognition in Hinglish
summary: Fine-tuned multilingual encoders and separately evaluated zero-shot language-model baselines on Hindi–English code-mixed text.
category: Multilingual NLP
role: Training pipelines, evaluation tooling, and error analysis within a team
organization: Four-person course project, NYU Abu Dhabi
period: Fall 2024
status: Course project
order: 5
tags: [PyTorch, Transformers, mBERT, XLM-RoBERTa]
visual: ner
links:
  - label: Source code
    url: https://github.com/Ansester/hinglish-ner-research
---

## The project

This course project studied named-entity recognition on COMI-LINGUA, a Hindi–English code-mixed dataset. Language switching, variable spelling, and ambiguous entity boundaries complicate the task.

## My contribution

I contributed to the fine-tuning pipelines, evaluation tooling, and error analysis. The project was completed with Akshith Karthik, Harsh Agarwal, and Lovnish Julka at NYU Abu Dhabi.

The encoder experiments used mBERT and XLM-RoBERTa with token-classification heads. The pipeline covered preprocessing, subword label alignment, training, and entity-span evaluation. Error analysis examined boundary errors, label ambiguity, and language-switching context.

## Evaluation scope

The fine-tuned encoders were evaluated on the complete COMI-LINGUA test split of **4,829 examples**. The zero-shot baselines—GPT-4o, Llama 3.1 8B, and Llama 3.3 70B—used a **100-example sample** because of API resource constraints.

The encoder and zero-shot scores therefore come from different test settings and are not directly matched comparisons. The repository contains training and evaluation code, prediction utilities, setup instructions, and evaluation notes.
