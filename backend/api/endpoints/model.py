from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Dict, Any, List, Optional
import pandas as pd
import os
import uuid
from backend.ml.sklearn_trainers import LogisticRegressionTrainer, RandomForestTrainer
from backend.ml.evaluator import evaluate_model
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder

router = APIRouter()
STORAGE_DIR = "storage/datasets"

class TrainRequest(BaseModel):
    dataset_id: str
    target_column: str
    sensitive_column: str
    model_type: str = "logreg" # logreg, rf

@router.post("/train")
def train_model(request: TrainRequest):
    """
    Train a model on a dataset and evaluate fairness.
    """
    file_path = os.path.join(STORAGE_DIR, f"{request.dataset_id}.csv")
    if not os.path.exists(file_path):
        raise HTTPException(404, detail="Dataset not found")
        
    df = pd.read_csv(file_path)
    
    if request.target_column not in df.columns:
        raise HTTPException(400, detail="Target column not found")
    if request.sensitive_column not in df.columns:
        raise HTTPException(400, detail="Sensitive column not found")
        
    # Preprocessing (Super basic for MVP)
    # Drop NAs
    df = df.dropna()
    
    # Encode categoricals?
    # For MVP, we assume numeric or basic string.
    # We should label encode everything usually.
    
    le = LabelEncoder()
    # Simple strategy: Encode logical object columns
    for col in df.select_dtypes(include=['object']).columns:
        df[col] = le.fit_transform(df[col].astype(str))
        
    y = df[request.target_column]
    X = df.drop(columns=[request.target_column])
    sensitive = df[request.sensitive_column] # Wait, this is in X usually. We keep it to evaluate.
    
    # Split
    X_train, X_test, y_train, y_test, s_train, s_test = train_test_split(
        X, y, sensitive, test_size=0.3, random_state=42
    )
    
    # Select Trainer
    trainer = None
    if request.model_type == "logreg":
        trainer = LogisticRegressionTrainer()
    elif request.model_type == "rf":
        trainer = RandomForestTrainer()
    else:
        raise HTTPException(400, "Unknown model type")
        
    # Train
    try:
        trainer.train(X_train, y_train)
        preds = trainer.predict(X_test)
    except Exception as e:
        raise HTTPException(500, f"Training failed: {str(e)}")
        
    # Evaluate
    metrics = evaluate_model(y_test, preds, sensitive_features=s_test)
    
    return {
        "model": trainer.name,
        "metrics": metrics,
        "dataset_rows": len(df)
    }
