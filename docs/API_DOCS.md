# API Documentation

Base URL: `http://localhost:8000/api/v1`

## Data Endpoints

### POST `/data/upload`
Uploads a CSV file.
- **Body**: `multipart/form-data` with `file`.
- **Response**: Dataset Metadata (ID, Columns, Row Count).

## Bias Endpoints

### GET `/bias/available`
Lists supported bias types (Sampling, Label, Proxy, etc.).

### POST `/bias/inject`
Injects bias into a dataset.
- **Body**:
  ```json
  {
    "dataset_id": "uuid",
    "bias_slug": "sampling_bias",
    "params": {
      "target_column": "gender",
      "target_value": "female",
      "ratio": 0.5
    }
  }
  ```
- **Response**: New Dataset ID (to be used for training or further injection).

## Model Endpoints

### POST `/model/train`
Trains a model and evaluates fairness.
- **Body**:
  ```json
  {
    "dataset_id": "uuid",
    "target_column": "income",
    "sensitive_column": "race",
    "model_type": "rf" (or "logreg")
  }
  ```
- **Response**: Metrics (Accuracy, Demographic Parity Diff, etc.).
