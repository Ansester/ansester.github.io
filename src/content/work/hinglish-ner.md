---
title: Named-entity recognition in Hinglish
summary: A team course project on recognizing named entities in Hindi–English text with multilingual encoders.
category: Multilingual NLP
role: Training pipelines, evaluation tooling, and error analysis within a team
organization: Four-person course project, NYU Abu Dhabi
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

We worked with mBERT and XLM-RoBERTa token-classification models. The implementation has to keep word-level entity labels aligned when a tokenizer divides a word into several pieces, then map predictions back to the original text for evaluation.

## Public code

The repository contains the preprocessing, training, prediction, and evaluation pipeline. It does not include trained checkpoints or saved model predictions, so this page does not present model scores as a reproduced benchmark.

The original coursework also explored zero-shot language models on a smaller sample. Those runs are not packaged in the public repository and cannot support a matched comparison with the encoder pipeline.
