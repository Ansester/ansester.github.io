---
title: "Synthetic Pilot Lab"
summary: "I compare language-model forecasts and agent simulations against archived human experiments on punishment and cooperation."
category: "Independent research"
role: "Independent researcher and developer"
organization: "Computer Science capstone, NYU Abu Dhabi"
period: "2026–present"
status: "In development"
order: 4
tags: [Synthetic participants, Experimental validation, Python, Reproducibility]
updated: "15 November 2026"
visual: capstone
links:
  - label: "Published study"
    url: "https://arxiv.org/abs/2508.17151"
  - label: "Study data archive"
    url: "https://doi.org/10.17605/OSF.IO/2D56W"
---

## Can simulated interaction improve a forecast?

My capstone asks whether language models can predict how punishment changes human group earnings, and whether simulating interactions improves those predictions enough to justify the additional computation.

I built the forecasting benchmark, simulation software, and evaluation tools around archived human social-dilemma experiments, using the recorded outcomes from Alsobay, Rand, Watts, and Almaatouq’s public-goods experiments as the reference.

## Direct forecasts and interacting agents

I evaluated direct forecasts from four model configurations on 20 archived experimental designs under a retrospective scoring plan. Given the game settings and the observed no-punishment outcome, each forecast predicts average group efficiency with punishment: total group earnings relative to a group that always contributes everything. I compared root mean squared error (RMSE, in percentage points) with expert and lay crowds and published regression models.

My comparison did not establish lower RMSE for any of the three Claude configurations than for the expert crowd. The published regressions had lower error. GPT-5’s budget-limited collection stopped early, leaving uneven forecasts per design; its RMSE was 9.28 points versus 6.55 for the expert crowd. These are direct-forecast results; the comparison with interacting agents is still ongoing.

<figure class="case-visual diagram-visual"><a class="figure-link" href="/figures/capstone-direct-forecast-rmse.svg"><img src="/figures/capstone-direct-forecast-rmse.svg" width="1280" height="1160" loading="lazy" alt="Horizontal bar chart of direct-forecast error across 20 validation public-goods game designs. The target is mean group efficiency in the punishment arm. RMSE in percentage points, lower is better: Claude Haiku 4.5, 6.21; Claude Sonnet 4.5, 6.62; Claude Sonnet 5.5, 6.65; GPT-5, 9.28; expert crowd, 6.55; lay crowd, 6.42; published elastic net, 4.52; published ordinary regression, 5.22. GPT-5 stopped at its spending ceiling with 235 usable replies, 4 to 17 per design. Sonnet 5.5 was trained after the study results were public. Human forecast scores were recalculated from archived data; regression scores are published."><span class="full-size-link">Full size ↗</span></a><figcaption>My retrospective direct forecasts of punishment-arm group efficiency across 20 designs. Error is RMSE in percentage points; crowd scores were recalculated from the archive.</figcaption></figure>

I implemented a simulator for seven no-chat designs from the archive. Model players make decisions under each game’s rules, and the software calculates earnings from their actions. I ran a feasibility pilot on two designs to test whether groups could complete valid games.

## Replay, scoring, and failure handling

I save model responses and submitted actions so that I can replay a run and recalculate its states and payoffs independently. I record invalid actions and unfinished groups alongside completed runs. That lets me distinguish a plausible-looking prediction from a valid simulation and account for the computation used to produce it.

To test the evaluator, I introduced a fault that assigned contributions to the wrong players. The group payoff stayed at 82 tokens, but the individual payoffs changed from 26 / 30 / 26 to 26 / 26 / 30. Reconstructing each player's payoff exposed the mismatch.
