"""Render the already-published follow-up summaries, not individual seed results.

Run with Python and matplotlib. Input values were checked against saved experiment
records on 26 October 2026. Error bars show sample SD, not confidence
intervals. No model experiments are run by this script.
"""
import csv
import json
from pathlib import Path
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt

ROOT = Path(__file__).resolve().parents[1]
data = json.loads((ROOT / 'src/data/protein-comparison.json').read_text())
out = ROOT / 'public/research'
out.mkdir(parents=True, exist_ok=True)
plt.rcParams.update({'font.family': 'DejaVu Sans', 'font.size': 10, 'svg.fonttype': 'path', 'svg.hashsalt': 'protein-comparison'})
fig, ax = plt.subplots(figsize=(4.6, 3.5), dpi=180)
fig.patch.set_facecolor('#f7f6f1')
ax.set_facecolor('#f7f6f1')
for y, row in enumerate(data['methods']):
    color = '#32645b' if y >= 2 else '#555e61'
    ax.errorbar(row['mean'], y, xerr=row['sd'], fmt='o', color=color,
                markersize=6, capsize=5, elinewidth=1.4, zorder=3)
ax.set_yticks(range(len(data['methods'])), [row['shortName'].replace(' + LoRA', '\n+ LoRA') for row in data['methods']], fontsize=9)
ax.set_ylim(len(data['methods'])-.35, -.65)
ax.set_xlim(80, 90)
ax.set_xticks([80, 82, 84, 86, 88, 90])
ax.set_xlabel('Exact cleavage-site match (%)', labelpad=9, color='#424b4c', fontsize=10)
ax.tick_params(axis='both', length=0, labelcolor='#424b4c', pad=8)
ax.grid(axis='x', color='#dadcd6', linewidth=.7, zorder=0)
for spine in ax.spines.values():
    spine.set_visible(False)
fig.subplots_adjust(left=.36, right=.97, top=.97, bottom=.18)
fig.savefig(out / 'protein-comparison.svg', metadata={'Date': None, 'Title': 'ESM-2 650M follow-up: exact cleavage-site match', 'Description': 'Means and sample standard deviations across three seeds. 1,231 true signal-peptide-positive examples. Feature injection is separate from the Bio-LoRA initialization method.'})
plt.close(fig)
svg = out / 'protein-comparison.svg'
svg.write_text('\n'.join(line.rstrip() for line in svg.read_text().splitlines()) + '\n')
with (out / 'protein-comparison.csv').open('w', newline='') as f:
    writer = csv.writer(f, lineterminator="\n")
    writer.writerow(['method', 'mean_exact_match_percent', 'sample_sd_percentage_points', 'model', 'benchmark', 'seed_count', 'positive_test_examples'])
    for row in data['methods']:
        writer.writerow([row['name'], f"{row['mean']:.2f}", f"{row['sd']:.2f}", data['model'], data['benchmark'], len(data['seeds']), data['positiveExamples']])
