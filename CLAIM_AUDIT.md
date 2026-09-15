# Claim Ledger & Audit Record (`CLAIM_AUDIT.md`)

This document records the evidence and qualifications behind public claims. Earlier numerical evaluations remain historical audit results unless explicitly re-run; the portfolio uses qualified descriptions rather than unsupported headline scores.

## September 15, 2026 — Portfolio reconciliation

- Reconciled the website and CV against this audit and the current local project READMEs and relevant modeling code. No model experiments were re-run for this overhaul.
- Removed the CV's 3,000+ postings, 15+ models, 87% R², crime-model cross-validation / 0.85 R², and unqualified 78% F1 claims.
- Retained the documented 742 cleaned salary listings and 1,994 community observations. Described the crime analysis as observational with single-holdout evaluation.
- The current salary application selects five predictors plus the salary target (`streamlit_app.py:28`); the earlier six-feature wording below has been corrected. Historical score reproducibility is not asserted for the current dependency environment.
- CAMP's README identifies a five-person team and Ashmit's staff API endpoints, alerts/statistics, backend testing setup, client API utilities, and Product Owner / Scrum Master sprint roles. Used those specific contributions; removed Docker from the CAMP project description.
- Hinglish NER's README identifies a four-person course-project team. Added team context and retained the 4,829-example encoder / 100-example zero-shot evaluation distinction.
- The Human–AI and protein-model case studies describe ongoing infrastructure/methods work, not established human effects, universal model improvements, or accepted publications.
- `assets/camp-home.png` is presented as an interface concept, not a verified live-product screenshot.
- The previous Hinglish research-report URL returned HTTP 404 and no matching PDF is tracked in the available local repository. Removed the dead report link and described the available code/evaluation documentation instead.
- Public content now lives in `src/pages/` and `src/content/work/`; `cv.tex` is the CV source, and the build copies the compiled `cv.pdf` to public output.

---

## 1. Hinglish NER Evaluation & Baselines

- **Claim**: Fine-tuned mBERT and XLM-RoBERTa on Hindi-English code-mixed text from COMI-LINGUA and benchmarked against zero-shot LLMs.
- **Repository**: `hinglish-ner-research`
- **Source Artifact**: `research_report.pdf` (Table 4, 12, 13, 14, 15), `src/eval_flat.py`
- **Metric Definition**: Entity-level F1, Macro F1, Weighted F1 using `seqeval`.
- **Data / Evaluation Context**:
  - Fine-tuned models evaluated on the complete 4,829-example test set (25,246 tokens).
  - Zero-shot LLMs (LLaMA 3.1 8B, LLaMA 3.3 70B, GPT-4o) evaluated on a 100-example stratified sample (515 tokens).
  - Claude 3.5 Sonnet (84-85% F1) cited from literature / initial proposal (`5ec8b36d`), not evaluated in the 100-example LLM sample harness.
- **Verification Status**: `VERIFIED WITH QUALIFICATION`
- **Recommended Public Wording**: "Fine-tuned mBERT and XLM-RoBERTa for named-entity recognition on Hindi-English code-mixed text from COMI-LINGUA and benchmarked them against zero-shot general-purpose language-model baselines."
- **Current Usage**: Website (`index.html`), Profile README (`Ansester/README.md`), `hinglish-ner-research/README.md`

---

## 2. Data Science Salary Prediction Dataset & Performance

- **Claim**: Built an AutoML salary prediction system on Glassdoor job listings using PyCaret, XGBoost, SHAP, MLflow, and Streamlit.
- **Repository**: `salary-prediction-ml`
- **Source Artifact**: `salary_data_cleaned.csv` (742 rows), `streamlit_app.py` (Lines 183-255)
- **Metric Definition**: Holdout test set $R^2$ score (`xgb_model.score(X_test, y_test)`).
- **Data / Evaluation Context**:
  - Cleaned modeling dataset contains 742 job listings (3,000+ figure referred to unverified raw scrapes).
  - The current code selects five predictors. The earlier audit recorded XGBoost (`n_estimators=19`, `learning_rate=0.81`, `max_depth=6`) holdout test $R^2 = 0.57$ on `random_state=8`, `test_size=0.15` ($R^2 = 0.36$ on a 20% split). These historical scores were not re-run for the portfolio overhaul. Old $R^2 = 0.87$ wording was unverified hardcoded README prose.
  - SHAP used for model feature-contribution analysis (beeswarm summary plots, scatter dependence plots).
- **Verification Status**: `VERIFIED WITH QUALIFICATION` (Cleaned 742 rows verified; holdout test $R^2 = 0.57$ verified; 3,000+ and 0.87 R² contradicted).
- **Recommended Public Wording**: "Built an AutoML salary-prediction workflow using cleaned Glassdoor job-listing data, with PyCaret model comparison, XGBoost, SHAP interpretation, MLflow experiment tracking, and Streamlit."
- **Current Usage**: Website (`index.html`), Profile README (`Ansester/README.md`), `salary-prediction-ml/README.md`

---

## 3. Community Crime Data Analysis & Modeling

- **Claim**: Modeled observational relationships between 6 socioeconomic indicators and violent-crime rates across 1,994 U.S. communities.
- **Repository**: `crime-prediction-ml`
- **Source Artifact**: `crimedata.csv` (2,215 raw rows / 1,994 clean rows after dropna on 6 features + target), `streamlit_app.py` (Lines 65-86)
- **Metric Definition**: Holdout test set $R^2$ score (`lr.score(X_test, y_test)`).
- **Data / Evaluation Context**:
  - 1,994 clean community observations after missing-value removal across 6 selected socioeconomic indicators (`medIncome`, `racepctblack`, `racePctWhite`, `racePctAsian`, `racePctHisp`, `PctRecImmig10`).
  - Evaluated on a single 80/20 train/test split (no cross-validation code exists in repository). Holdout test score: $R^2 = 0.48$ ($R^2 = 0.85$ claim applied to full 100+ feature benchmark in literature).
  - MAE (0.08 / 284.10) suppressed until population scaling units are explicitly established.
  - Non-causal, non-interventional observational statistical modeling.
- **Verification Status**: `VERIFIED WITH QUALIFICATION` (1,994 rows verified; holdout test $R^2 = 0.48$ verified; cross-validation and 0.85 R² contradicted).
- **Recommended Public Wording**: "Modeled observational relationships between socioeconomic indicators and violent-crime rates across U.S. communities using regression and holdout evaluation, with an interactive application for descriptive exploration and model-based prediction."
- **Current Usage**: Website (`index.html`), Profile README (`Ansester/README.md`), `crime-prediction-ml/README.md`

---

## 4. Campus Asset Management Platform (CAMP) Stack & Attribution

- **Claim**: Multi-user campus asset platform with role-based access control, conflict-resolution workflows, authenticated REST APIs, integration testing, and GitHub Actions CI/CD.
- **Repository**: `camp-final-project`
- **Source Artifact**: `README.md`, `back-end/readme.txt`, `package.json`, `.github/workflows/`
- **Metric / Tech Stack**: React 19, Node.js 20, Express, MongoDB Atlas, JWT, DigitalOcean Droplet, Nginx, PM2, GitHub Actions.
- **Data / Evaluation Context**:
  - Team-built platform (5 co-authors). Team-safe contribution wording required ("Worked on a team-built...", "Contributed to...").
  - Docker is NOT used in CAMP implementation repository. (Removed from CAMP project claims; Docker retained in general technical skills based on independent research infrastructure usage).
- **Verification Status**: `VERIFIED WITH QUALIFICATION` (Stack & team roles verified; Docker contradicted for CAMP).
- **Recommended Public Wording**: "Worked on a team-built campus asset-management platform with authenticated role-based workflows, REST APIs, integration testing, and automated CI/CD."
- **Current Usage**: Website (`index.html`), Profile README (`Ansester/README.md`), `camp-final-project/README.md`

---

## 5. VR Campus Tour (eCampusExplorer) Scope

- **Claim**: Virtual reality application for exploring the NYUAD campus using Meta Quest headsets. Technical C# scripts for scene management, directional teleportation, and user preference management.
- **Repository**: `eCampusExplorer`
- **Source Artifact**: `Teleporter.cs`, `PlayerController.cs`, `PlayerPrefSetter.cs`, `README.md`
- **Verification Status**: `VERIFIED`
- **Recommended Public Wording**: "Virtual reality application for exploring the NYUAD campus using Meta Quest headsets. Technical C# scripts for scene management, directional teleportation, and user preference management."
- **Current Usage**: Website (`index.html`), Profile README (`Ansester/README.md`), `eCampusExplorer/README.md`
