---
title: "Biosynthesis paper database"
summary: "A pipeline I built to collect biosynthesis paper records and check how closely each search matched its topic."
category: "Research data collection"
role: "Research assistant · biosynthesis data collection"
organization: "eBRAIN Lab, NYU Abu Dhabi"
period: "Fall 2026 collection"
status: "Research dataset"
order: 4
tags: []
visual: biosynthesis
links: []
---

At the eBRAIN Lab, [Minghao Shao](https://scholar.google.com/citations?user=USe518cAAAAJ) leads a project on how AI scientists find and use research papers, with Professor [Muhammad Shafique](https://scholar.google.com/citations?user=xSR276UAAAAJ) as faculty lead. I built the biosynthesis collection as a source for methods summaries and benchmarks of how well an AI system can retrieve a relevant paper.

My pipeline searched OpenAlex for articles and reviews published from 2011 onward on protein and RNA synthesis, enzymes and biocatalysis, and lipids and primary metabolites. The November 2026 collection contained 139,011 raw records across the three searches. Each file matched its query count and contained no repeated OpenAlex IDs.

About 34% of the records lacked abstracts, limiting what a retrieval system could learn from the metadata alone. Topic labels also proved too broad. Sphingolipid signalling accounted for 43% of the lipid file and brought in many papers on how lipids carry signals, outside the scope of biosynthesis.

<figure class="case-visual diagram-visual"><a class="figure-link" href="/figures/biosynthesis-openalex-records.svg"><img src="/figures/biosynthesis-openalex-records.svg" width="1280" height="650" loading="lazy" alt="Horizontal bar chart of raw OpenAlex record counts collected in November 2026: protein and RNA synthesis, 29,761; enzymes and biocatalysis, 83,841; lipid and primary metabolites, 25,409. Each bar represents one subdomain query."><span class="full-size-link">Full size ↗</span></a><figcaption>Raw OpenAlex records collected in November 2026, by subdomain.</figcaption></figure>
