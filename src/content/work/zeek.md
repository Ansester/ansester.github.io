---
title: Marketing ML system at Zeek
summary: Components of a machine-learning system for marketing automation, built in a four-person team.
category: Industry
role: Machine learning engineer intern; models, explainability, and campaign AI
organization: Zeek
period: June to August 2025
status: Internship
order: 6
tags: [XGBoost, SHAP, Model evaluation]
updated: 1 November 2026
visual: zeek
---

## The project

A machine-learning system for marketing automation that finds opportunities in customer records, generates campaigns, predicts their return, measures results, and learns from feedback. It was developed and tested entirely on synthetic data: generated customers and transactions, and simulated responses.

## What I built

- **Discovery.** XGBoost and clustering models for customer segmentation and opportunity detection.
- **Explainability.** SHAP-based model interpretation and a dashboard.
- **ROI prediction.** An ensemble with uncertainty ranges.
- **Feedback and monitoring.** A feedback loop, an online learning pipeline, model validation, and drift detection.
- **Campaign AI.** T5/GPT campaign generation, personalization, and reinforcement-learning optimization.

I worked with one teammate on models and campaign AI. A second pair built synthetic data, simulation, and MLOps.

## Key decisions

- **Synthetic data first.** Models train and validate on generated customers and transactions, so development needs no client data.
- **XGBoost for structured customer data.** It performs well on tabular data and can be explained with SHAP.
- **ROI as a range.** Return is reported as a range from simulated outcomes rather than a single figure.

## Limits

This page describes methods only. The models were trained and scored on simulated customers, so nothing here shows how the system would perform with real ones, and the page reports no business results.
