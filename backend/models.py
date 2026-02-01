from pydantic import BaseModel
from typing import List, Optional, Dict, Any
from enum import Enum

class BiasType(str, Enum):
    SAMPLING = "sampling"
    LABEL = "label"
    PROXY = "proxy"
    HISTORICAL = "historical"
    MEASUREMENT = "measurement"

class DatasetMetadata(BaseModel):
    id: str
    filename: str
    row_count: int
    columns: List[str]
    categorical_columns: List[str]
    numerical_columns: List[str]
    target_column: Optional[str] = None

class ExperimentState(BaseModel):
    id: str
    dataset_id: str
    original_metadata: DatasetMetadata
    applied_biases: List[Dict[str, Any]] = []
    current_health_score: float = 1.0  # 1.0 = Perfect, 0.0 = Collapse
