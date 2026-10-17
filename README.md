# Ashmit Mukherjee — Portfolio

A static Astro portfolio focused on computational social science, experimental systems, and machine learning. It includes a homepage, research overview, six Markdown case studies, legacy URL redirects, and a separate application CV.

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
- Research overview: `src/pages/research.astro`. Keep the manuscript status consistent with its case study and `cv.tex`.
- Work order: the `order` field in frontmatter. The homepage explicitly selects Human–AI, Bio-LoRA, Synthetic Pilot Lab, and FieldLens. The work index separates research from supporting engineering.
- Shared navigation, metadata, theme, and footer: `src/layouts/Layout.astro`.
- Visual styles: `src/styles/global.css`.
- Project figures, FieldLens screenshot, and CAMP concept: `src/components/ProjectVisual.astro`.
- Application CV: `cv.tex` and `cv.pdf` are separate application documents. They are not copied into or linked from the website. Updating the website does not require updating the CV. The reviewed Overleaf project is "Ashmit Mukherjee - Research CV": `00_Master_CV.tex` is its main document, and `01_Research_and_Applied_AI.tex` inputs that source. The Career folder contains matching research/master copies; pre-review versions are in its dated Archive folder. Other older role variants are historical references, not reviewed submission copies.

Keep contributions, team context, status, and evaluation scope consistent with `CLAIM_AUDIT.md`. It is an internal source note and is not included in the published site.

## Build and validate

```sh
npm run build
npm run check
npm run preview
```

`build` checks Astro/TypeScript, produces static pages in `dist/`, optimizes images, and creates the sitemap. `check` verifies local routes, links, anchors, assets, metadata, absence of public CV files/links, redirect fallbacks, and regressions to superseded claims. It does not prove real-user performance or complete accessibility compliance.

Fonts are self-hosted. Core content and navigation work as static HTML. JavaScript adds theme preference and optional email copying; storage/clipboard failures are handled.

## GitHub Pages

`.github/workflows/pages.yml` builds and checks pull requests targeting `master`. Pushes to `master` and manual runs on that branch also deploy the `dist/` artifact through GitHub Pages.

Pages already uses **GitHub Actions** as its build source. Merge the reviewed changes into `master` to publish. Preserve the existing custom domain and DNS settings. `public/CNAME` is copied to the static output.

The old `/projects.html`, `/research.html`, `/publications.html`, and `/cv.html` paths retain redirect documents with ordinary fallback links. The old homepage anchors remain available. The retired `/cv.html` points to the research overview; `/cv.pdf` is no longer hosted.

## Private Sites preview

`.openai/hosting.json` identifies the separate private preview and packages the same static `dist/` output. Its canonical metadata still identifies the existing public domain. Preview deployment does not merge into GitHub or change DNS.

## Monthly review

The website uses dated project summaries rather than live task status or a hosted CV. Most months only project content needs attention.

1. Read `src/content/work/*.md`; change a status or outcome only when the evidence has changed. Update that case study's `updated` date when you edit it. Titles, summaries, roles, and statuses feed the homepage and indices automatically.
2. If the manuscript status changes, update its case study and the short entry in `src/pages/research.astro`. Add only a verified public record.
3. Update the research overview's review date after checking its content. Affiliation or graduation changes belong in the homepage and shared metadata.
4. Run the normal build/check commands and publish through the existing Pages workflow.

There is no weekly progress feed, automatic research-status inference, or CV synchronization to maintain.
