---
title: "Named-entity recognition in Hinglish"
summary: "How well do multilingual models recognize names in text that switches between Hindi and English?"
category: "Multilingual NLP"
role: "Training and evaluation"
organization: "NYU Abu Dhabi"
period: "Fall 2025"
status: "Course project"
order: 8
tags: [PyTorch, Transformers, mBERT, XLM-RoBERTa]
visual: ner
links:
  - label: "Team presentation and results"
    url: "https://docs.google.com/presentation/d/1GjE8JbgA_ZhB4hURyWyFlw7prpqojoP13Gg2d-07yyk/view"
  - label: "Course project code"
    url: "https://github.com/Ansester/hinglish-ner-research/tree/c799e7d89105e73761b0261a534fa956313c9864"
  - label: "Original test data"
    url: "https://huggingface.co/datasets/LingoIITGN/COMI-LINGUA/blob/a6b719588f14b3e29f4e0c93e7201a5d55199779/NER_test.csv"
---

Hindi and English often share a sentence in informal writing. With [Akshith Karthik](https://github.com/Ak1016-stack), [Harsh Agarwal](https://github.com/harshagarwalnyu), and Lovnish Julka, I studied how well multilingual models could tag names in Roman-script Hinglish. I built a pipeline with Hugging Face Transformers to train and evaluate mBERT and XLM-RoBERTa on the COMI-LINGUA dataset.

When a tokenizer split a word, I scored the label on its first piece so each word counted once. Across 25,246 words in 4,829 test examples, XLM-RoBERTa reached 89.7% accuracy and mBERT reached 89.0%. Always predicting “not an entity” would score 31.7%. Even the most common label in the test set, “person,” covered only 32.8% of the words.

In a separate zero-shot test on 100 of those examples, GPT-4o often returned an empty list for sentences that contained names.
