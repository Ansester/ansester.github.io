# Ashmit Mukherjee — Portfolio

A static Astro portfolio focused on computational social science, experimental systems, and machine learning. The homepage is the main research overview. A supporting projects index, six Markdown case studies, and legacy redirects preserve deeper reading and existing links. The application CV remains a separate document.

Canonical domain: [ashmitmukherjee.com](https://ashmitmukherjee.com/). A local build or private Sites preview does not update that domain.

## Develop

Requires Node.js 22.12+ (Node 24 is used in CI).

```sh
npm ci
npm run dev
```

Astro 7 may start its development server in the background. Use `npx astro dev status` and `npx astro dev stop` to inspect or stop it.

## Edit content

- Homepage: `src/pages/index.astro`.
- Case studies: `src/content/work/*.md`. Edit the title, summary, role, dates, tags, and links in frontmatter; write the story below. Both the work index and case-study route use this content.
- Research overview and manuscript entry: `src/pages/index.astro`. `/research/` redirects to `/#research`; its former manuscript anchor also resolves to the homepage. Keep manuscript status consistent with its case study and `cv.tex`.
- The homepage develops Human–AI and Bio-LoRA as its two research stories, with a short capstone direction. The capstone summary reflects completed offline diagnostics and analysis while keeping model-based discovery untested. The projects index contains FieldLens and selected coursework.
- Shared navigation, metadata, theme, and footer: `src/layouts/Layout.astro`.
- Visual styles: `src/styles/global.css`.
- Supporting project figures: `src/components/ProjectVisual.astro`. The homepage uses `ValidationExcerpt.astro` for an executed offline software test and `ProteinComparison.astro` for the research figure. `public/research/payoff-integrity-check.json` records the October 25 fixture-test result and source fingerprints; it contains no experiment configuration or raw fixture records. Recheck the source and execution evidence before changing that record.
- Protein summary data: `src/data/protein-comparison.json`. The same data supplies the accessible table. Run `python scripts/plot-protein-comparison.py` with Matplotlib installed to regenerate the committed SVG and CSV in `public/research/`. These are summary values, not raw seed-level results; preserve the metric, denominator, SD definition, and method distinction.
- Application CV: `cv.tex` and `cv.pdf` are separate application documents. They are not copied into or linked from the website. Updating the website does not require updating the CV. The reviewed Overleaf project is "Ashmit Mukherjee - Research CV": `00_Master_CV.tex` is its main document, and `01_Research_and_Applied_AI.tex` inputs that source. The Career folder contains matching research/master copies; pre-review versions are in its dated Archive folder. Other older role variants are historical references, not reviewed submission copies.

Keep contributions, team context, status, and evaluation scope consistent with `CLAIM_AUDIT.md`. It is an internal source note and is not included in the published site.

## Build and validate

```sh
npm run build
npm run check
npm run preview
```

`build` checks Astro/TypeScript, produces static pages in `dist/`, optimizes images, and creates the sitemap. `check` verifies local routes, links, anchors, assets, metadata, absence of public CV files/links, redirect fallbacks, the published comparison table/CSV against source data, and regressions to superseded claims. It does not prove real-user performance or complete accessibility compliance.

The site uses one self-hosted Inter variable font file. Core content and navigation work as static HTML. JavaScript adds theme preference and optional email copying; storage/clipboard failures are handled.

## GitHub Pages

`.github/workflows/pages.yml` builds and checks pull requests targeting `master`. Pushes to `master` and manual runs on that branch also deploy the `dist/` artifact through GitHub Pages.

Pages already uses **GitHub Actions** as its build source. Merge the reviewed changes into `master` to publish. Preserve the existing custom domain and DNS settings. `public/CNAME` is copied to the static output.

The old `/projects.html`, `/research.html`, `/publications.html`, and `/cv.html` paths retain redirect documents with ordinary fallback links. The old homepage anchors remain available. The retired `/cv.html` points to the homepage research section; `/cv.pdf` is no longer hosted. `/publications.html` points directly to `/#manuscript`.

## Private Sites preview

`.openai/hosting.json` identifies the separate private preview and packages the same static `dist/` output. Its canonical metadata still identifies the existing public domain. Preview deployment does not merge into GitHub or change DNS.

## Monthly review

The website uses dated project summaries rather than live task status or a hosted CV. Most months only project content needs attention.

1. Read `src/content/work/*.md`; change a status or outcome only when the evidence has changed. Update that case study's `updated` date when you edit it. Case-study titles, summaries, roles, and statuses feed their detail pages and coursework index. The two homepage research stories are curated separately; change them when a contribution or result changes.
2. If the manuscript status changes, update its case study and the short entry in `src/pages/index.astro`. Add only a verified public record.
3. Update dated case-study content after checking its evidence. Affiliation or graduation changes belong in the homepage and shared metadata.
4. Run the normal build/check commands and publish through the existing Pages workflow.

There is no weekly progress feed, automatic research-status inference, or CV synchronization to maintain.
