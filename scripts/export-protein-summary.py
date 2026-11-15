"""Export the archived follow-up scores for local reference with their scope note."""
import csv
import json
from pathlib import Path

data_directory = Path(__file__).resolve().parents[1] / 'src/data'
data = json.loads((data_directory / 'protein-comparison.json').read_text())
with (data_directory / 'protein-comparison.csv').open('w', newline='') as f:
    writer = csv.writer(f, lineterminator="\n")
    writer.writerow([
        'method', 'mean_exact_match_percent', 'sample_sd_percentage_points', 'model',
        'benchmark', 'seed_count', 'positive_benchmark_examples',
        'positives_also_in_local_fitting_split', 'evaluation_note',
    ])
    for row in data['methods']:
        writer.writerow([
            row['name'], f"{row['mean']:.2f}", f"{row['sd']:.2f}", data['model'],
            data['benchmark'], len(data['seeds']), data['positiveExamples'],
            data['positiveExamplesAlsoInLocalFit'], data['evaluationNote'],
        ])
