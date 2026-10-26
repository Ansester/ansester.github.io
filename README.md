# Ashmit Mukherjee — portfolio

Source for [ashmitmukherjee.com](https://ashmitmukherjee.com): research, project contributions, and selected coursework. Built with Astro and deployed through GitHub Pages.

## Develop

Use Node.js 24 (Node 22.12+ is supported).

```sh
npm ci
npm run dev
```

## Content

- `src/pages/index.astro`: homepage and manuscript entry.
- `src/content/work/`: project descriptions, credits, and current status.
- `src/layouts/Layout.astro` and `src/styles/global.css`: shared layout and appearance.
- `src/data/protein-comparison.json`: recorded follow-up experiment summaries. `scripts/plot-protein-comparison.py` generates the figure and CSV; it does not run models.

The site distinguishes ongoing research, unpublished work, and coursework. Project descriptions identify my contribution and the scope of the available evidence. Application documents and internal working notes are maintained separately.

## Check and publish

```sh
npm run build
npm run check
npm run preview
```

The build runs Astro and TypeScript checks. The site checks cover local routes, anchors, images, metadata, redirects, figure data, and theme/clipboard behavior. Browser review is still needed for layout and usability.

Pull requests to `master` run the build and checks. Pushes to `master` deploy `dist/` through `.github/workflows/pages.yml`. The custom domain is set in `public/CNAME`.

Legacy research, publication, project, and CV URLs retain redirect pages. The application CV is not hosted on this site.
