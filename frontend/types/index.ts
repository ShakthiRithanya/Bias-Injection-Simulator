export interface DatasetMetadata {
    id: string;
    filename: string;
    row_count: number;
    columns: string[];
    numerical_columns: string[];
    categorical_columns: string[];
}

export interface BiasType {
    slug: string;
    name: string;
    description: string;
}

export interface ExperimentMetrics {
    accuracy: number;
    precision: number;
    recall: number;
    f1: number;
    demographic_parity_diff?: number;
    equalized_odds_diff?: number;
    fairness_error?: string;
}

export interface TrainingResult {
    model: string;
    metrics: ExperimentMetrics;
    dataset_rows: number;
}
