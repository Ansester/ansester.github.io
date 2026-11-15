---
title: "Forecasting the effect of punishment on group earnings"
summary: "I tested how well language models could predict what happens to group earnings when players can punish one another."
category: "Independent research"
role: "Undergraduate capstone"
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

I asked four language models to predict how much human groups would earn if players could punish one another. Across the 20 designs I tested, punishment lowered group efficiency by 2.2 percentage points on average. Claude Sonnet 5.5 was the only model to predict a loss. Haiku 4.5, Sonnet 4.5, GPT-5 and the human expert crowd all predicted a gain. Professors [Hanan Salam](https://scholar.google.com/citations?user=9lTiKjwAAAAJ) and [Benjamin Rosche](https://scholar.google.com/citations?user=GAxIreYAAAAJ) advise my capstone.

I used the 20 archived experimental designs that [Mohammed Alsobay](https://scholar.google.com/citations?user=DxlsyhcAAAAJ), [David G. Rand](https://scholar.google.com/citations?user=C0ANojIAAAAJ), [Duncan J. Watts](https://scholar.google.com/citations?user=LhOAiXMAAAAJ), and [Abdullah Almaatouq](https://scholar.google.com/citations?user=nrEeeY4AAAAJ) had given to human forecasters. Each model saw the rules and the earnings of groups that played without punishment, then predicted earnings with punishment. Group efficiency measures earnings as a percentage of what the group would earn if everyone contributed everything.

## Scoring the forecasts

I averaged each model’s forecasts within each design and calculated root mean squared error (RMSE), giving each design equal weight. Compared with predicting no change, the three Claude models and both human crowds reduced RMSE by less than one percentage point. The study’s elastic net reduced it by 2.62 points. GPT-5 had more error than the no-change forecast. Haiku’s lead over the experts was too small to distinguish on these data. I resampled whole designs, keeping Haiku’s forecast paired with the experts’ each time. The 95% bootstrap interval for the difference in RMSE ran from −0.89 to +0.17 points.

<table>
  <caption>Forecast error across the 20 designs. Lower is better.</caption>
  <thead><tr><th scope="col">Forecast</th><th scope="col">RMSE (percentage points)</th></tr></thead>
  <tbody>
    <tr><th scope="row">Elastic net</th><td>4.52</td></tr>
    <tr><th scope="row">Ordinary linear regression</th><td>5.22</td></tr>
    <tr><th scope="row">Claude Haiku 4.5</th><td>6.21</td></tr>
    <tr><th scope="row">Lay crowd</th><td>6.42</td></tr>
    <tr><th scope="row">Expert crowd</th><td>6.55</td></tr>
    <tr><th scope="row">Claude Sonnet 4.5</th><td>6.62</td></tr>
    <tr><th scope="row">Claude Sonnet 5.5</th><td>6.65</td></tr>
    <tr><th scope="row">Predict no change</th><td>7.14</td></tr>
    <tr><th scope="row">GPT-5</th><td>9.28</td></tr>
  </tbody>
</table>

The two regression scores come from the paper. I recalculated the crowd scores from its data. Both were within 0.02 points of the published values. GPT-5 reached its spending limit and had fewer forecasts per design. Sonnet 5.5’s training cutoff came after the outcomes were public.

I also built a simulator for the seven designs played without chat. A feasibility pilot on two designs tested whether model groups could finish a game. Whether playing the game improves on a direct forecast is still an open question.
