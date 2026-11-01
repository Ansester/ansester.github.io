---
title: Salary regression
summary: A dashboard and model comparison using historical Glassdoor salary estimates.
category: Machine learning evaluation
role: Dashboard and model evaluation
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

A Streamlit dashboard for comparing salary estimates from historical Glassdoor job postings. It fits a mean baseline, linear regression, and XGBoost using whether a posting mentions Python, company size, revenue, state, and ownership.

The postings come from the [PlayingNumbers teaching dataset](https://github.com/PlayingNumbers/ds_salary_proj). My work here focuses on the dashboard and evaluation.

## Preparing the comparison

I removed duplicate postings and kept related employer, title, and location groups together when splitting the data. I also excluded hourly listings rather than converting them to annual salaries using an assumed number of working hours.

That left 457 annual-salary postings: 365 for training and 92 for evaluation. All three models use the same split, and XGBoost uses fixed settings.

| Model | Holdout R² | MAE ($1,000) | RMSE ($1,000) |
| --- | ---: | ---: | ---: |
| Mean baseline | -0.0007 | 26.93 | 33.85 |
| Linear regression | 0.1268 | 24.49 | 31.61 |
| XGBoost | 0.1872 | 23.80 | 30.50 |

XGBoost had the lowest error on this holdout, with a modest improvement over the mean baseline. These figures replace an earlier evaluation whose row-level split allowed duplicated postings into both sets.

The target is the midpoint of each listing’s estimated salary range. This is a comparison on one small historical holdout, rather than a forecast of current compensation. The dashboard also uses permutation importance to explore which inputs the fitted model relies on.
