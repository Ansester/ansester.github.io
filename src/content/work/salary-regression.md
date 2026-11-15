---
title: "Salary regression"
summary: "I built a Streamlit dashboard and compared salary-regression models using historical Glassdoor estimates."
category: "Machine learning evaluation"
role: "Dashboard and model evaluation"
organization: "Data Science / Applied Machine Learning project, NYU Abu Dhabi"
period: "Fall 2025"
status: "Course project"
order: 11
tags: [Python, scikit-learn, XGBoost, Streamlit]
updated: "15 November 2026"
visual: salary
links:
  - label: "Source code"
    url: "https://github.com/Ansester/salary-prediction-ml"
  - label: "Evaluation record"
    url: "https://github.com/Ansester/salary-prediction-ml/blob/HEAD/results/holdout.json"
  - label: "Teaching dataset"
    url: "https://github.com/PlayingNumbers/ds_salary_proj"
---

## Comparing salary estimates

I built a Streamlit dashboard using historical Glassdoor job postings from the PlayingNumbers teaching dataset. I compared a mean baseline, linear regression, and XGBoost using company size, revenue, state, ownership, and whether a posting mentions Python.

## Preparing the comparison

I removed duplicate postings and kept related employer, title, and location groups together in the train/evaluation split. I excluded hourly listings to avoid converting them with an assumed number of annual working hours.

I retained 457 annual-salary postings: 365 for training and 92 for evaluation. I used the same split for all three models and fixed the XGBoost settings.

| Model | Holdout R² | MAE ($1,000) | RMSE ($1,000) |
| --- | ---: | ---: | ---: |
| Mean baseline | -0.0007 | 26.93 | 33.85 |
| Linear regression | 0.1268 | 24.49 | 31.61 |
| XGBoost | 0.1872 | 23.80 | 30.50 |

XGBoost had the lowest error on this holdout, with a modest improvement over the mean baseline. I used each listing’s estimated salary-range midpoint as the target and permutation importance to inspect the fitted model’s inputs.
