from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Dict, Any, List
from backend.core.registry import registry
import pandas as pd
import os
import uuid

router = APIRouter()
STORAGE_DIR = "storage/datasets"

@router.get("/available")
def get_available_biases():
    return registry.list_available()

class BiasRequest(BaseModel):
    dataset_id: str
    bias_slug: str
    params: Dict[str, Any]

@router.post("/inject")
def inject_bias(request: BiasRequest):
    """
    Apply a specific bias to a dataset.
    Returns a new dataset ID representing the biased state.
    """
    injector = registry.get(request.bias_slug)
    if not injector:
        raise HTTPException(404, detail="Bias type not found")
        
    file_path = os.path.join(STORAGE_DIR, f"{request.dataset_id}.csv")
    if not os.path.exists(file_path):
        raise HTTPException(404, detail="Dataset not found")
        
    try:
        df = pd.read_csv(file_path)
    except Exception:
        raise HTTPException(500, detail="Could not read dataset")
    
    try:
        # Inject bias
        corrupted_df = injector.inject(df, **request.params)
    except ValueError as ve:
        raise HTTPException(400, detail=str(ve))
    except Exception as e:
        raise HTTPException(500, detail=f"Injection failed: {str(e)}")
        
    # Save the biased version
    # Generate new ID to allow timeline tracking
    new_id = f"{request.dataset_id}_{request.bias_slug}_{str(uuid.uuid4())[:8]}"
    new_path = os.path.join(STORAGE_DIR, f"{new_id}.csv")
    
    corrupted_df.to_csv(new_path, index=False)
    
    return {
        "status": "success", 
        "original_id": request.dataset_id,
        "biased_dataset_id": new_id, 
        "rows_original": len(df),
        "rows_biased": len(corrupted_df),
        "bias_applied": injector.name
    }
