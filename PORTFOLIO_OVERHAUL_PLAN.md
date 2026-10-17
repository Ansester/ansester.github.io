# Portfolio overhaul plan — September baseline

Current implementation was refreshed for research applications on 17 October 2026. The site now has a research overview, six case studies, and a separate application CV; no CV download is hosted. The rest of this file preserves the original planning brief.

Original planning baseline: 15 September 2026. The implementation now includes the homepage, work index, four case studies, corrected CV, shared themes, legacy redirects, and GitHub Pages workflow. The original brief follows; deployment status is reported separately.

Implementation adjustment: the old Hinglish report link returns HTTP 404, so the case study links to the available code and evaluation documentation instead. The CAMP visual is labeled as an interface concept.

## 1. Direction

**Build a technical, polished portfolio that leads with engineering and gives research readers a clear path into methods and evidence.**

Confirmed preferences:

- Audience: employers and research labs, with engineering work leading.
- Visual direction: denser, structured, technical, with subtle interactive details.

The organizing idea is the connection between building useful systems and testing whether they work. Human–AI research infrastructure and protein-model evaluation should establish that identity; CAMP should demonstrate broader software delivery.

The first screen should answer three questions: what Ashmit builds, where the strongest examples are, and how to get the CV or make contact.

## 2. What the review established

Reviewed the live homepage, its desktop layout at 1280 × 720, its mobile layout at 390 × 844, and the local HTML, CSS, JavaScript, CV source, README, and claim audit. This was a planning review, not a complete accessibility, performance, or research-claim validation.

| Finding | Proposed response |
| --- | --- |
| The hero has 195 rendered words, including the profile facts; the main page has about 1,115. The introduction, research, and experience repeat material. | Reduce the hero to a short positioning statement, one paragraph, and two actions. Give each later section a separate purpose. |
| At the reviewed desktop size, Projects begins around 2,407 px from the document top, below a long research section. | Put selected work immediately after the introduction. |
| At the reviewed mobile size, the large photo and profile facts precede the introduction. The CSS explicitly moves the profile panel first below 780 px. | Make the heading, summary, and actions first in both reading and visual order. Use a small portrait in About. |
| The homepage project section has zero images and primarily links straight to repositories. | Add real screenshots, legible diagrams, and short case-study pages. |
| The homepage has no link to the existing CV files. Local cv.html redirects home. | Restore a visible CV action after reconciling the downloadable document. |
| Hinglish NER appears in both Research and Projects; the two current research roles reappear in Experience. | Give each project one canonical case study. Keep the research overview thematic and the experience list brief. |
| CAMP's homepage copy lacks the explicit team attribution recommended by CLAIM_AUDIT.md. | State the team context and distinguish Ashmit's verified contribution. |
| Local cv.tex still contains salary-data and model-score claims, crime-model cross-validation/score claims, and CAMP Docker wording that conflict with CLAIM_AUDIT.md. | Reconcile the CV source and inspect the compiled PDF before making the download prominent. The PDF's content was not checked in this review. |

The repository currently uses plain HTML, shared CSS and JavaScript, and a custom domain on GitHub Pages. Seven files already had local modifications when this review began: 404.html, cv.html, cv.pdf, cv.tex, projects.html, publications.html, and research.html. Treat those changes as existing work to reconcile when implementation starts.

## 3. Homepage structure

Navigation: **Work · Research · About · CV**, with a compact theme control. Work, Research, and About can initially link to homepage sections; CV links directly to the corrected PDF.

### A. Introduction

Proposed copy for refinement:

> I build research systems and machine-learning tools.
>
> I'm Ashmit, a Computer Science student at NYU Abu Dhabi. I build platforms for human–AI experiments and training and evaluation pipelines for protein language models.

Show NYU Abu Dhabi and expected May 2027 once. Primary action: **Explore my work**. Secondary action: **Download CV**. Keep contact visible in navigation or the footer. Do not add availability claims without confirming them.

At 390 × 844, the heading, summary, and both actions should fit before the first scroll. At typical desktop heights, show the beginning of selected work.

### B. Selected work

Feature three substantial projects in this order:

1. **Human–AI research platform:** technical implementation, experimental workflows, validation, and structured data collection.
2. **Protein language model adaptation:** training/evaluation infrastructure, repeated experiments, and configuration comparison.
3. **CAMP:** team-built software, authenticated workflows, APIs, integration testing, and delivery infrastructure.

Each entry gets a title, a plain-language problem, Ashmit's role, two or three relevant technical labels, one visual, and an explicit case-study link. Use a larger first project followed by two compact rows. Provide a route to the work index, where Hinglish NER remains easy to find.

### C. Research overview

Use one short paragraph connecting computational social science, experimental systems, and careful model evaluation. Follow it with concise links to the ongoing research case studies and the Hinglish report. This section explains research interests and questions; it does not repeat employment bullets.

### D. Experience and About

Show the two research roles and the Zeek internship in a compact chronological list with dates and one sentence each. Put fuller employment history in the CV. Add a short personal paragraph, a modest portrait, education, and study-away context already supported by the current materials. Skills should appear mainly beside the work that demonstrates them.

### E. Contact

Use a clear invitation for engineering and research conversations with visible Email, GitHub, LinkedIn, and CV links. Keep email as a normal link, with copying as an optional enhancement.

## 4. Content and case studies

| Project | Evidence it should communicate | Visual/artifact to prepare |
| --- | --- | --- |
| Human–AI research platform | Ownership of implementation, translation of research requirements, validation approach, data flow | Public-safe interface screenshot or simplified architecture diagram; implementation detail grounded in the source |
| Protein language models | Evaluation discipline, experiment design, HPC workflow, configuration comparison | Training/evaluation diagram; an actual result figure only when its scope and interpretation are supported |
| CAMP | Personal contribution within a team, authenticated workflows, API design, testing and deployment | Inspect the existing assets/camp-home.png, use if suitable, and add a focused workflow visual |
| Hinglish NER | Multilingual NLP, baseline selection, evaluation setup, limits of comparisons | Annotated prediction example or properly contextualized evaluation table, plus the existing report link |
| Salary and crime projects | Supporting breadth in applied analysis | Compact entries in the work index; fuller pages only when there is a useful story beyond the current summary |

Every case study follows the same small structure:

1. **At a glance:** problem, role, team context, dates/status, and available links.
2. **What I built:** concrete components and responsibilities.
3. **How it works:** one useful visual with a caption.
4. **Key decisions:** two or three choices, constraints, and tradeoffs.
5. **Validation and outcome:** what was actually tested or established, and what remains open.
6. **Artifacts:** repository, report, or available demo, with a route back to other work.

Target approximately 400–700 words per full case study. Keep the key summary visible; use optional details only for supplementary material.

Treat the claim audit as an existing source for reconciliation, not fresh verification of external repositories. For Hinglish, avoid implying fine-tuned models and zero-shot baselines were measured on identical evaluation sets. For ongoing research, separate implemented infrastructure from empirical findings. Label unpublished work by its actual status and preserve team attribution. Publication entries require actual publication details.

## 5. Visual system

- **Layout:** structured grid, roughly 1,080–1,160 px maximum content width, narrow readable prose, aligned project metadata, thin dividers. Denser than the current layout while retaining 16–18 px body text.
- **Typography:** clear sans-serif headings and body copy; monospace only for dates, project indices, and technical labels. Use the existing Inter family initially; select one compatible monospace family during design.
- **Color:** charcoal and restrained blue/cyan accents in dark mode, with an equally finished light theme. Follow system preference and remember an explicit user choice.
- **Surfaces:** restrained borders and small corner radii. Project visuals should supply most of the visual interest.
- **Motion:** brief hover/focus feedback and restrained disclosure or page transitions, approximately 120–180 ms. Honor reduced motion and keep the content immediately readable.
- **Mobile:** compact header, text before imagery, stacked project layouts, readable diagrams, and comfortable touch targets. Move the portrait to About.
- **Assets:** use actual screenshots and explanatory diagrams. Optimize images, reserve their dimensions, and lazy-load below-the-fold images.

The conversation mockup is a direction preview. Its diagrams are conceptual layouts, not screenshots or evidence of a specific deployed system.

## 6. Pages and technical approach

Recommended initial routes:

| Route | Purpose |
| --- | --- |
| / | Concise homepage, selected work, research overview, About, contact |
| /work/ | Complete work index, with sections for featured work and additional projects |
| /work/human-ai-collaboration/ | Human–AI platform case study |
| /work/protein-language-models/ | Protein-model case study |
| /work/camp/ | CAMP case study |
| /work/hinglish-ner/ | NLP case study and report |
| /cv.pdf | Corrected, current, downloadable CV |

**Recommended build: Astro producing static pages, Markdown for case studies, and a small shared component set.** The repeated case-study structure justifies introducing templates and a build step. Keep project metadata and page content together so dates, summaries, links, and status can be updated in one place. A shared layout should own navigation, footer, theme initialization, and social metadata.

This adds a dependency/build workflow, so retaining plain HTML is a reasonable lower-setup alternative if the final scope contracts to one homepage. For the proposed multi-page scope, Astro is the preferred implementation choice. Astro documents static deployment to GitHub Pages through GitHub Actions: [official deployment guide](https://docs.astro.build/en/guides/deploy/github/). GitHub Pages supports static assets, build processes, and custom domains: [GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages).

Preserve ashmitmukherjee.com, CNAME/domain configuration, /cv.pdf, and incoming links. Map existing /projects.html to /work/, /research.html to /#research, /cv.html to /cv.pdf, and /publications.html to /#research. Preserve existing #projects, #research, #experience, #background, and #main anchors or provide matching destinations. GitHub Pages-compatible redirect documents should have a visible fallback link; do not describe client-side redirects as server-side 301 responses.

Add page-specific titles, descriptions, canonical URLs, social previews, a sitemap, and a helpful 404 page. Retain the existing Person metadata with accurate fields. Guard theme-storage reads and writes so blocked storage cannot disable the rest of the page's interactions.

## 7. Implementation order

| Phase | Concrete deliverable | Completion check |
| --- | --- | --- |
| 1. Content | Final positioning, ordered project inventory, four case-study outlines, reconciled CV copy | Each prominent claim has support; missing visuals and public artifacts are identified |
| 2. Design | Desktop and mobile homepage plus one complete Human–AI case-study design | Hierarchy, visual language, navigation, and reading flow can be reviewed together |
| 3. Foundation | Static build, shared layout, content model, reusable project and case-study components | One complete case study and the homepage render from the shared structure |
| 4. Population | Remaining case studies, work index, About/contact, image assets, corrected CV | Every featured project has a usable destination and actual evidence or accurately labeled status |
| 5. Quality and release preparation | Responsive, accessibility, link, redirect, metadata, and performance checks; reviewable change set | Checks below pass and deployment instructions are concrete |

The first implementation slice should be **the new homepage and one complete Human–AI case study**. This tests the overall direction and content depth before repeating it across the site. Publishing is outside this planning task.

## 8. Acceptance criteria

- A new reader can identify Ashmit's focus, name two examples, and find CV/contact after a brief scan. Validate with a small reader check rather than assuming the design succeeds.
- At 390 × 844, the introduction and main actions appear before the portrait; the page has no horizontal overflow.
- Review 320, 390, 768, 1280, and 1440 px widths, both themes, keyboard navigation, 200% zoom, and reduced motion.
- Every featured project has a clear role statement, useful visual, status, and working case-study link.
- Homepage, CV source, rendered PDF, and project pages agree on facts and attribution.
- Core content and navigation remain usable without JavaScript; blocked storage and clipboard failure have sensible behavior.
- Check landmarks/headings, image alternatives, visible keyboard focus, control names, contrast, and touch targets against [WCAG 2.2 guidance](https://www.w3.org/WAI/WCAG22/quickref/).
- Check internal links, old URLs and anchors, PDF download, external artifact links, social image paths, canonical URLs, and custom-domain output.
- Use a mobile performance audit as a development check. Aim for LCP ≤ 2.5 seconds and CLS ≤ 0.1; use INP ≤ 200 ms as a field goal if enough real-user data exists. These are targets, not measured current results. Lighthouse alone does not establish field INP or real-user performance: [Web Vitals guidance](https://web.dev/articles/vitals).
- Verify one successful content update through the documented authoring process, demonstrating that routine maintenance is simple.

## 9. Later additions

Add writing, richer demos, and a fuller work archive when there is substantive content to publish. The launch scope is already sufficient to communicate engineering skill, research depth, and an easy next step for visitors.
