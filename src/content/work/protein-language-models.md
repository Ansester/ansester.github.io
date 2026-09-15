---
title: Adapting protein language models
summary: Training and evaluation pipelines for comparing adaptation methods across repeated experiments.
category: Applied machine learning
role: Research assistant — adaptation methods and evaluation infrastructure
organization: eBRAIN Lab, New York University Abu Dhabi
period: February 2026 — present
status: Ongoing research
order: 2
tags: [PyTorch, ESM-2, LoRA, Slurm]
visual: protein
---

## The question

How should a pretrained protein language model be adapted to a more specific protein-sequence task? The choice involves both predictive performance and the resources required to train and evaluate the model.

At the eBRAIN Lab, I develop and evaluate parameter-efficient adaptation methods and build the pipelines used to compare them. A central part of the work is checking whether an apparent improvement remains consistent across repeated runs and model configurations.

## What I work on

I build training and evaluation workflows around pretrained protein language models, including ESM-2. The project considers low-rank adaptation, or LoRA: a method that trains a smaller set of added parameters while keeping the pretrained backbone frozen. It also explores adaptation informed by properties of protein sequences.

My work includes running multi-seed experiment sweeps on NYU Abu Dhabi's high-performance computing cluster. Repeated runs are important because a single training result can reflect the particular random initialization or configuration as much as the method under study.

The infrastructure connects experiment configurations, training, and evaluation. That makes it possible to compare methods across a defined set of choices rather than relying on one memorable run.

## Decisions that matter

### Compare methods in a defined setting

An adaptation method is evaluated within a particular model, task, and training setup. Those details determine the meaning of the comparison. I examine configurations alongside scores so that a result stays attached to the conditions that produced it.

### Repeat promising experiments

Initial runs can help identify useful directions, but they are only the beginning of a comparison. Multi-seed experiments help distinguish consistent behavior from a result that depends heavily on a single run. The workflow supports screening an idea and then returning to it under repeated evaluation.

### Consider the training workflow as well as the model

Parameter-efficient adaptation changes what is trained, but practical efficiency still depends on the experimental setup. Model size, configuration, and the execution environment all affect the comparison. I build and run the infrastructure needed to investigate those choices instead of assuming a smaller trainable parameter count answers every efficiency question.

## Evaluation and current scope

The work involves comparing models and configurations, tracking repeated experiments, and interpreting how stable their differences are. The training pipeline and the evaluation procedure are both part of that process.

This is an ongoing research project. I do not claim a universal advantage for a particular adaptation method. Any result needs to be read with its model, task, comparison protocol, and uncertainty. This overview focuses on my methods and infrastructure contribution rather than presenting a benchmark leaderboard without that context.

## Discuss the work

I am interested in conversations about adaptation methods, evaluation design, and the practical work of running reproducible ML experiments. [Get in touch](mailto:asm8879@nyu.edu).
