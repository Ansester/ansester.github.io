# Ashmit Mukherjee — Portfolio

A static Astro portfolio focused on research engineering and applied machine learning. It includes a concise homepage, a work index, four Markdown case studies, a corrected CV, and legacy URL redirects.

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
- Featured work order: the `order` field in frontmatter. The first project has a dedicated homepage feature; the following two are generated from the collection.
- Shared navigation, metadata, theme, and footer: `src/layouts/Layout.astro`.
- Visual styles: `src/styles/global.css`.
- Project diagrams and CAMP concept: `src/components/ProjectVisual.astro`.
- CV: edit `cv.tex`, compile it to `cv.pdf`, and inspect both pages. `npm run build` copies the PDF into the output automatically. Do not edit `public/cv.pdf` directly.

Keep contributions, team context, status, and evaluation scope consistent with `CLAIM_AUDIT.md`. It is an internal source note and is not included in the published site.

## Build and validate

```sh
npm run build
npm run check
npm run preview
```

`build` syncs the CV, checks Astro/TypeScript, produces static pages in `dist/`, optimizes images, and creates the sitemap. `check` verifies local routes, links, anchors, assets, metadata, CV parity, redirect fallbacks, and regressions to superseded claims. It does not prove real-user performance or complete accessibility compliance.

Fonts are self-hosted. Core content and navigation work as static HTML. JavaScript adds theme preference and optional email copying; storage/clipboard failures are handled.

## GitHub Pages

`.github/workflows/pages.yml` builds and checks pull requests targeting `master`. Pushes to `master` and manual runs on that branch also deploy the `dist/` artifact through GitHub Pages.

For the initial migration, select **GitHub Actions** as the Pages build source in the repository settings, then merge the reviewed changes into `master`. Preserve the existing custom domain and DNS settings. `public/CNAME` is copied to the static output.

The old `/projects.html`, `/research.html`, `/publications.html`, and `/cv.html` paths retain redirect documents with ordinary fallback links. The old homepage anchors remain available. The `/cv.pdf` URL stays stable.

## Private Sites preview

`.openai/hosting.json` identifies the separate private preview and packages the same static `dist/` output. Its canonical metadata still identifies the existing public domain. Preview deployment does not merge into GitHub or change DNS.
