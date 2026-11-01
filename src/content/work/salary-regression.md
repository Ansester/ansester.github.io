---
title: Salary regression
summary: A coursework dashboard comparing a mean baseline, linear regression, and XGBoost on historical Glassdoor salary estimates, after repairing a leaky evaluation split.
category: Machine learning evaluation
role: Repaired the evaluation and re-ran the comparison
organization: Data Science / Applied Machine Learning project, NYU Abu Dhabi
period: Fall 2025
status: Course project
order: 7
tags: [Python, scikit-learn, XGBoost, Streamlit]
updated: 1 November 2026
visual: salary
links:
  - label: Source code
    url: https://github.com/Ansester/salary-prediction-ml
  - label: Evaluation record
    url: https://github.com/Ansester/salary-prediction-ml/blob/HEAD/results/holdout.json
---

## What I built

A Streamlit dashboard and evaluation pipeline that compares a mean baseline, linear regression, and XGBoost on the same split. The five inputs are whether the posting mentions Python, company size, revenue, state, and ownership. Regression tests and CI cover duplicate and group separation.

The dataset is reused from [PlayingNumbers/ds_salary_proj](https://github.com/PlayingNumbers/ds_salary_proj), an upstream teaching dataset. Data collection and original cleaning belong to that project.

## Key decisions

- **Removing duplicates.** The 742 upstream rows reduce to 467 after exact deduplication.
- **Excluding hourly postings.** Ten distinct postings quote hourly wages rather than annual thousands. They are excluded instead of assuming annual working hours, which leaves 457 postings.
- **Grouping the split.** `GroupShuffleSplit(test_size=0.2, random_state=42)` keeps normalized employer, title, and location groups together, giving 365 training rows and 92 held-out rows.
- **Not tuning on the holdout.** XGBoost uses fixed settings.

| Model | Holdout R² | MAE ($1,000) | RMSE ($1,000) |
| --- | ---: | ---: | ---: |
| Mean baseline | -0.0007 | 26.93 | 33.85 |
| Linear regression | 0.1268 | 24.49 | 31.61 |
| XGBoost | 0.1872 | 23.80 | 30.50 |

The dashboard's feature-sensitivity view uses permutation importance on the same fitted XGBoost pipeline. It measures predictive association, not the causal effect of a skill or employer characteristic.

## What changed my conclusions

An earlier version reported R² = 0.57 from a row-level split with duplicated postings on both sides. The results above supersede that score. The two are not directly comparable, because the split and the target definition both changed.

## Limits

This is a single small historical split. Shared employers and job categories can still cross it, so it is a posting-group evaluation, not an employer-held-out study. The target is the midpoint of estimated salary ranges, which are not current salaries or observed compensation.
