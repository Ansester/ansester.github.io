---
title: "Synthetic Pilot Lab"
summary: "Can a language model predict how much a group will earn when players can punish one another?"
category: "Independent research"
role: "Independent researcher and developer"
organization: "Computer Science capstone, NYU Abu Dhabi"
period: "Began in 2026"
status: "Capstone research"
order: 2
tags: [Synthetic participants, Experimental validation, Python, Reproducibility]
visual: capstone
links:
  - label: "Source study preprint"
    url: "https://arxiv.org/abs/2508.17151"
  - label: "Source study data archive"
    url: "https://doi.org/10.17605/OSF.IO/2D56W"
---

For my capstone, I built a benchmark to test how well language models predict human group earnings when players can punish one another. I’m comparing two approaches: asking for a forecast and simulating the game. I used public-goods experiments by [Mohammed Alsobay](https://scholar.google.com/citations?user=DxlsyhcAAAAJ), [David G. Rand](https://scholar.google.com/citations?user=C0ANojIAAAAJ), [Duncan J. Watts](https://scholar.google.com/citations?user=LhOAiXMAAAAJ), and [Abdullah Almaatouq](https://scholar.google.com/citations?user=nrEeeY4AAAAJ) as the reference.

## Scoring the forecasts

I tested four model configurations on 20 archived experimental designs. Given the rules and the earnings of human groups who played without punishment, each model predicted average earnings when punishment was possible. Earnings were expressed as a percentage of what a group would earn if everyone contributed everything. I averaged each model’s usable replies within each design, then calculated root mean squared error (RMSE) across the 20 designs, weighting them equally.

Haiku 4.5 scored 6.21 percentage points against 6.55 for the expert crowd. I resampled the designs with replacement, pairing model and expert forecasts for each design. The 95% bootstrap interval for Haiku’s RMSE minus the experts’ ran from −0.89 to +0.17 points and included zero. The published regression models had lower error than both. GPT-5 scored 9.28 with fewer replies per design after reaching its spending limit. Sonnet 5.5’s training cutoff came after the human results were public, so its retrospective score may reflect prior exposure.

<figure class="case-visual diagram-visual"><a class="figure-link" href="/figures/capstone-direct-forecast-rmse.svg"><img src="/figures/capstone-direct-forecast-rmse.svg" width="1280" height="1160" loading="lazy" alt="Horizontal bar chart of direct-forecast error across 20 validation public-goods game designs. The target is mean group efficiency in the punishment arm. RMSE in percentage points, lower is better: Claude Haiku 4.5, 6.21; Claude Sonnet 4.5, 6.62; Claude Sonnet 5.5, 6.65; GPT-5, 9.28; expert crowd, 6.55; lay crowd, 6.42; published elastic net, 4.52; published ordinary regression, 5.22. GPT-5 stopped at its spending ceiling with 235 usable replies, 4 to 17 per design. Sonnet 5.5’s training cutoff came after the results were public. Human forecast scores were recalculated from archived data; regression scores are published."><span class="full-size-link">Full size ↗</span></a><figcaption>Error in predicted group earnings across 20 designs. Lower values indicate more accurate forecasts.</figcaption></figure>

I built a simulator for seven designs without chat and ran a feasibility pilot on two designs to test whether model groups could finish a game. Checking each player’s earnings exposed a fault I introduced. It credited the wrong players while leaving group earnings unchanged. Whether simulated play improves forecast accuracy remains an open question.
