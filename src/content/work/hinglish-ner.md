---
title: "Named-entity recognition in Hinglish"
summary: "I implemented training and evaluation tools for recognizing named entities in Hindi–English text."
category: "Multilingual NLP"
role: "Training pipelines, evaluation, and error analysis"
organization: "Four-person course project, NYU Abu Dhabi"
period: "Fall 2025"
status: "Course project"
order: 8
tags: [PyTorch, Transformers, mBERT, XLM-RoBERTa]
updated: "15 November 2026"
visual: ner
links:
  - label: "Source code"
    url: "https://github.com/Ansester/hinglish-ner-research"
---

## Hindi–English named entities

I worked with Akshith Karthik, Harsh Agarwal, and Lovnish Julka on named-entity recognition in COMI-LINGUA, a Hindi–English dataset. I implemented training, prediction, evaluation, and error-analysis tools for mBERT and XLM-RoBERTa.

## Labels across tokenizers

I kept word-level entity labels aligned when a tokenizer split a word into several pieces, then mapped predictions back to the original text. I used error analysis to inspect mistakes in text that switches between languages and writing systems.

I evaluated encoders on 4,829 test examples and zero-shot language-model baselines on a separate 100-example sample. I keep those evaluations distinct because they use different samples.

I published the preprocessing, training, prediction, and evaluation code. The repository does not include the trained checkpoints or original model outputs.
