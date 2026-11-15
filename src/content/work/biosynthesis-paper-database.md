---
title: "Biosynthesis paper database"
summary: "I built a pipeline to collect and assess biosynthesis paper records for a research retrieval database."
category: "Research data collection"
role: "Research assistant · biosynthesis data collection"
organization: "eBRAIN Lab, NYU Abu Dhabi · Project led by Minghao Shao, faculty lead Muhammad Shafique"
period: "2026–present"
status: "Research in progress"
order: 3
tags: []
updated: "15 November 2026"
visual: biosynthesis
links: []
---

## A database for scientific retrieval

I work on the biosynthesis domain of a paper-knowledge database at the eBRAIN Lab, in a project led by Minghao Shao with Muhammad Shafique as faculty lead. The aim is to make scientific literature easier for AI scientists to find and use, then build benchmark tasks around that knowledge. My current work is the raw collection stage; structured summaries and benchmarks are later project goals.

## Building the collection pipeline

I wrote a resumable OpenAlex pipeline that queries each subdomain separately for articles and reviews published from 2011 onward. It saves the full OpenAlex record alongside 23 selected metadata fields in Parquet and generates a data card for each file.

In the November 2026 collection, I gathered 139,011 raw records: 29,761 for protein and RNA synthesis, 83,841 for enzymes and biocatalysis, and 25,409 for lipids and primary metabolites. Each file matched the OpenAlex count at collection time, and I checked for duplicate records. OpenAlex counts can change as the index changes.

<figure class="case-visual diagram-visual"><a class="figure-link" href="/figures/biosynthesis-openalex-records.svg"><img src="/figures/biosynthesis-openalex-records.svg" width="1280" height="650" loading="lazy" alt="Horizontal bar chart of raw OpenAlex record counts collected in November 2026: protein and RNA synthesis, 29,761; enzymes and biocatalysis, 83,841; lipid and primary metabolites, 25,409. Each bar represents one subdomain query."><span class="full-size-link">Full size ↗</span></a><figcaption>My November 2026 OpenAlex raw-record collection across three biosynthesis subdomains.</figcaption></figure>

## Checking the raw data

I inspected the collection before organizing it. About 34% of records lacked abstracts and 9.4% were non-English. One lipid topic, sphingolipid signalling, made up 43% of that file and included many papers outside biosynthesis. I also identified retracted records and documented these quality issues for the next stage of dataset preparation.
