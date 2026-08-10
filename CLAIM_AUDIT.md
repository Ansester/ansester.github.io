# Claim Ledger & Audit Record (`CLAIM_AUDIT.md`)

This document serves as the ground-truth ledger of public factual claims across Ashmit Mukherjee's repositories, personal website (`ansester.github.io`), and profile surfaces.

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
  - Implemented 6-feature XGBoost regressor (`n_estimators=19`, `learning_rate=0.81`, `max_depth=6`) achieves holdout test $R^2 = 0.57$ on `random_state=8`, `test_size=0.15` split ($R^2 = 0.36$ on 20% split). Old $R^2 = 0.87$ claim was unverified hardcoded README prose.
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
