---
title: "Salary regression"
summary: "How well can information in a job posting predict its estimated salary?"
category: "Machine learning evaluation"
role: "Dashboard and model evaluation"
organization: "Data Science / Applied Machine Learning project, NYU Abu Dhabi"
period: "Fall 2025"
status: "Course project"
order: 11
tags: [Python, scikit-learn, XGBoost, Streamlit]
visual: salary
links:
  - label: "Source code"
    url: "https://github.com/Ansester/salary-prediction-ml"
  - label: "Test results"
    url: "https://github.com/Ansester/salary-prediction-ml/blob/HEAD/results/holdout.json"
  - label: "Teaching dataset"
    url: "https://github.com/PlayingNumbers/ds_salary_proj"
---

I built a dashboard to compare salary predictions against the midpoint of each posted salary range in a historical Glassdoor dataset. I trained linear regression and XGBoost on annual-salary postings, keeping related employer, title, and location groups together when splitting the data.

On the 92 postings held out for evaluation, XGBoost had the lowest mean absolute error at $23,800. Predicting the training-set mean for every posting gave an error of $26,930.
