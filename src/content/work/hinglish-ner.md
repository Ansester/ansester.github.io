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

## The problem

Named-entity recognition identifies spans of text that refer to people, places, organizations, and other named entities. Hindi–English code-mixed text makes that task more demanding: language can change within a sentence, while spelling, tokenization, and context do not always follow the assumptions of a single-language pipeline.

This course project explored named-entity recognition on COMI-LINGUA. The work combined fine-tuning multilingual transformer encoders with a separate evaluation of prompt-based, zero-shot language-model baselines.

## My contribution and team

I contributed to the fine-tuning pipelines, evaluation tooling, and error analysis. The project was completed with Akshith Karthik, Harsh Agarwal, and Lovnish Julka at NYU Abu Dhabi.

The encoder experiments used mBERT and XLM-RoBERTa with token-classification heads. The pipeline included preprocessing, subword label alignment, training, and entity-level evaluation. The repository also contains prediction utilities and evaluation documentation.

## Two evaluation settings

The fine-tuned encoder models were evaluated on the complete COMI-LINGUA test split of **4,829 examples**. The zero-shot language-model baselines were evaluated on a **100-example sample** from the test set because of API resource constraints.

The zero-shot models included GPT-4o, Llama 3.1 8B, and Llama 3.3 70B. These experiments belong to a different evaluation setting from the full-test encoder runs. A score from one setting should not be treated as a directly matched comparison with a score from the other.

That distinction is why this overview shows the evaluation design instead of a single ranking of models. The repository documents the evaluation scope and the code used to run the experiments.

## Decisions and implementation

### Align labels with subword tokens

Transformer tokenizers can divide one word into multiple subword pieces. The training pipeline needs to align the original entity labels with that representation. Without handling that step, the model's inputs and supervision would describe different units.

### Evaluate entities as spans

An entity prediction involves both a category and a boundary. Entity-level evaluation therefore captures mistakes that token-level correctness alone can hide. This makes boundary errors an important part of interpreting model behavior.

### Keep evaluation scope attached to results

The full test split and the smaller zero-shot sample answer related questions under different constraints. Recording their scope explicitly is necessary to avoid implying that every model received the same test.

## Outcome and artifacts

The project produced training and evaluation code, prediction utilities, and documentation of the evaluation setup. Error analysis examined entity boundaries, label ambiguity, and language-switching context.

The public repository contains the implementation, setup instructions, and evaluation notes from this four-person course project.
