---
title: "Forecasting the effect of punishment on group earnings"
summary: "I tested how well language models could predict what happens to group earnings when players can punish one another."
category: "Independent research"
role: "Independent capstone"
organization: "Computer Science, NYU Abu Dhabi"
period: "2026–present"
status: "Capstone research"
order: 2
tags: [Synthetic participants, Experimental validation, Python, Reproducibility]
visual: capstone
links:
  - label: "My forecast study (PDF)"
    url: "/research/group-earnings-forecast-note.pdf"
  - label: "Source study preprint"
    url: "https://arxiv.org/abs/2508.17151"
  - label: "Source study data archive"
    url: "https://doi.org/10.17605/OSF.IO/2D56W"
---

Does giving players the power to punish one another help the group earn more? I asked four language models to forecast the outcome of 20 public-goods experiments. Across those 20 designs, punishment lowered average group efficiency by 2.2 percentage points. Three of the four models predicted a gain, as did the human experts. The fourth, Claude Sonnet 5.5, predicted a loss.

The 20 designs are the ones [Mohammed Alsobay](https://scholar.google.com/citations?user=DxlsyhcAAAAJ), [David G. Rand](https://scholar.google.com/citations?user=C0ANojIAAAAJ), [Duncan J. Watts](https://scholar.google.com/citations?user=LhOAiXMAAAAJ), and [Abdullah Almaatouq](https://scholar.google.com/citations?user=nrEeeY4AAAAJ) gave to human forecasters. Each model saw the rules and the earnings of groups that played without punishment, then predicted earnings with punishment. Group efficiency is earnings as a percentage of what the group would earn if everyone contributed everything.

## Scoring the forecasts

My Python script sent one design per request and required a single numeric prediction in JSON. I averaged each model’s forecasts within a design and calculated root mean squared error (RMSE), giving each design equal weight. The three Claude models and both human crowds beat a forecast of no change by less than one point of RMSE. The study’s elastic net beat it by 2.62 points. GPT-5 had more error than predicting no change.

Haiku’s error was slightly lower than the experts’. I resampled the 20 designs, keeping the two forecasts paired. The 95% bootstrap interval for Haiku’s RMSE minus the experts’ ran from −0.89 to +0.17 points.
