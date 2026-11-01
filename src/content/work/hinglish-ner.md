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

This course project studied named-entity recognition in COMI-LINGUA, a Hindi–English dataset. We used mBERT and XLM-RoBERTa to identify entities in text that switches between languages and writing systems.

I worked with Akshith Karthik, Harsh Agarwal, and Lovnish Julka, contributing to the fine-tuning pipelines, evaluation tooling, and error analysis.

## Labels across languages and tokenizers

The pipeline keeps word-level labels aligned when a tokenizer splits a word into several pieces, then maps predictions back to the original text. This matters when language switching and spelling variation produce different token boundaries.

The coursework evaluated encoders on 4,829 test examples and explored zero-shot language models on a separate 100-example sample. Those runs answer different comparison questions because they use different samples.

The public repository contains the preprocessing, training, prediction, and evaluation code. Trained checkpoints and the original model outputs are not included.
