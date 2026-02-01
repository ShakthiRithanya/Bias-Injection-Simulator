# Bias Injection Simulator - Implementation Plan

## 1. Project Setup & Architecture
- [ ] **Initialize Repository**
    - [ ] Initialize Git
    - [ ] Create `.gitignore` (Python, Node, generic)
    - [ ] Add remote origin `https://github.com/ShakthiRithanya/Bias-Injection-Simulator.git`
- [ ] **Directory Structure**
    - [ ] `/backend`: Python FastAPI
    - [ ] `/frontend`: Next.js
    - [ ] `/docs`: Documentation
- [ ] **Backend Setup**
    - [ ] Setup `venv`
    - [ ] Install dependencies (`fastapi`, `uvicorn`, `pandas`, `numpy`, `scikit-learn`, `xgboost`, `shap`, `fairlearn`, `pydantic`)
    - [ ] Create basic FastAPI app structure
- [ ] **Frontend Setup**
    - [ ] Initialize Next.js app (`npx create-next-app@latest`)
    - [ ] Setup folder structure (`components`, `styles`, `hooks`, `store`)
    - [ ] Configure global styles (CSS Variables for themes)

## 2. Backend Core: Data & Bias Engine
- [ ] **Dataset Modeling**
    - [ ] Create Pydantic models for Dataset metadata
    - [ ] Implement File Upload Endpoint (CSV/JSON)
    - [ ] Implement Data Preview/EDA Endpoint (stats, distribution)
- [ ] **Bias Injection Logic (The "Weaponization Lab")**
    - [ ] Abstract Base Class for `BiasInjector`
    - [ ] **Sampling Bias**: Implement `SamplingBiasInjector` (under/over-sampling)
    - [ ] **Label Bias**: Implement `LabelBiasInjector` (label flipping)
    - [ ] **Feature Proxy Bias**: Implement `ProxyBiasInjector` (correlation injection)
    - [ ] **Historical Bias**: Implement `HistoricalBiasInjector`
    - [ ] **Measurement Bias**: Implement `MeasurementBiasInjector` (noise injection)
- [ ] **Experiment Pipeline**
    - [ ] Define `Experiment` state (Original Data -> Applied Biases -> Resulting Data)
    - [ ] Create endpoints to apply/revert bias steps

## 3. ML Pipeline & Ethics Engine
- [ ] **Model Training Service**
    - [ ] Implement wrappers for `LogisticRegression`, `RandomForest`, `XGBoost`, `MLPClassifier`
    - [ ] Train/Test split handling
    - [ ] Training endpoint (accepts dataset ID + model config)
- [ ] **Evaluation & Fairness Metrics**
    - [ ] Implement `FairnessEvaluator` using `fairlearn` and `sklearn` metrics
    - [ ] Metrics: Demographic Parity, Equal Opportunity, Equalized Odds, Disparate Impact
    - [ ] Feature Importance calculation (SHAP)
- [ ] **Comparison Logic**
    - [ ] Logic to compare Before vs After bias
    - [ ] "Metric Decay" calculation

## 4. Frontend: Visuals & "Anti-Gravity" UI
- [ ] **Design System (Vanilla CSS)**
    - [ ] Define CSS Variables for colors (Pastel neutrals, Warning accents, Glassmorphism tokens)
    - [ ] Create `GlassCard`, `NeoButton`, `GlowInput` components
    - [ ] Setup Global Animations (keyframes for ripple, shockwave)
- [ ] **3D Visualization (Three.js)**
    - [ ] Setup `react-three-fiber` scene
    - [ ] Create "Integrity Core" mesh (sphere/crystal that cracks)
    - [ ] Connect Core state to Bias Level
- [ ] **Mission Control Dashboard**
    - [ ] **Left Panel**: Dataset uploader, Bias Controller (Sliders)
    - [ ] **Right Panel**: Real-time Fairness Metrics, Model Rankings
    - [ ] **Center**: 3D Visualization Canvas
- [ ] **Charts & Graphs**
    - [ ] Implement D3.js/Recharts for Fairness-Accuracy Tradeoff
    - [ ] Visualizing Data Distributions (Histograms/Scatter)

## 5. Integration & Experiment Workflow
- [ ] **Connect Frontend to Backend**
    - [ ] API Client setup
    - [ ] State Management (Zustand or Context)
- [ ] **Experiment Timeline Feature**
    - [ ] UI for adding "Bias Steps"
    - [ ] Visualizing the timeline
- [ ] **Explainability View**
    - [ ] SHAP plot visualization (using `shap` JS or static images from backend)
    - [ ] "Toxic Feature" highlighter

## 6. Polish & Finalization
- [ ] **Optimization**
    - [ ] Caching large datasets
    - [ ] Optimizing 3D rendering
- [ ] **Deployment Prep**
    - [ ] Dockerfiles for Backend/Frontend
- [ ] **Final Review**
    - [ ] Aesthetic check (Anti-Gravity feel)
    - [ ] Mobile responsiveness (if applicable, though typically desktop for dashboards)

