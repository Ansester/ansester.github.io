---
title: "Named-entity recognition in Hinglish"
summary: "Evaluating entity recognition in text that switches between Hindi and English."
category: "Multilingual NLP"
role: "Training pipelines, evaluation, and error analysis"
organization: "NYU Abu Dhabi"
period: "Fall 2025"
status: "Course project"
order: 8
tags: [PyTorch, Transformers, mBERT, XLM-RoBERTa]
visual: ner
links:
  - label: "Source code"
    url: "https://github.com/Ansester/hinglish-ner-research"
---

With [Akshith Karthik](https://github.com/Ak1016-stack), [Harsh Agarwal](https://github.com/harshagarwalnyu), and [Lovnish Julka](https://nyunetimpact.org/lovnish-julka), I studied how multilingual models recognize named entities in COMI-LINGUA, a Hindi–English dataset. I built the training and evaluation pipelines for mBERT and XLM-RoBERTa. The two models can split the same word differently, so I mapped their predictions back to the original words before scoring them.

I evaluated the encoders on 4,829 test examples and tested zero-shot language models on a separate sample of 100.
