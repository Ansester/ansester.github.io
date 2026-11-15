---
title: "FieldLens"
summary: "A local language model answers questions about vehicle incidents and links each statement to the record behind it."
category: "Research engineering"
role: "Developer"
organization: "Independent project"
period: "2026"
status: "Working prototype"
order: 7
tags: [Python, Local inference, Evaluation, Evidence provenance]
visual: fieldlens
links:
  - label: "Results for each question (CSV)"
    url: "/research/fieldlens-answer-coverage.csv"
---

I built FieldLens to answer questions about vehicle incidents using GPS readings, camera observations, and procedure documents. The app calculates the facts those records support and gives each fact an ID. I ran Qwen3-4B locally with llama.cpp to select the IDs relevant to a question. FieldLens displays the corresponding statements with a link back to each source record.

I gave three methods the same records for seven questions about a fictional vehicle incident. I counted an answer as complete when it included all the facts I had specified for that question. If a model’s answer failed validation, the app showed the rule-based summary instead.

| Method | Accepted | Complete |
| --- | ---: | ---: |
| Rule-based summary | 7 of 7 | 7 of 7 |
| Model selecting facts | 7 of 7 | 6 of 7 |
| Model writing freely | 3 of 7 | 0 of 7 |

The rule-based summary showed the full incident brief every time. The fact-selection model usually narrowed it to what the question asked, but its broad overview omitted GPS and camera evidence. Four free-form answers triggered the fallback. The automatic check also missed one valid paraphrase. It looked for a 24 km/h decrease when the model had described the speed falling from 42 to 18 km/h.
