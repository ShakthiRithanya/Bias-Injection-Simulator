from fastapi import APIRouter, UploadFile, File, HTTPException
from typing import List
import pandas as pd
import os
import uuid
import shutil
from backend.models import DatasetMetadata

router = APIRouter()

STORAGE_DIR = "storage/datasets"
os.makedirs(STORAGE_DIR, exist_ok=True)

@router.post("/upload", response_model=DatasetMetadata)
async def upload_dataset(file: UploadFile = File(...)):
    """
    Upload a CSV dataset. Returns metadata about columns and types.
    """
    file_id = str(uuid.uuid4())
    file_path = os.path.join(STORAGE_DIR, f"{file_id}.csv")
    
    try:
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
            
        # Load logic
        try:
            df = pd.read_csv(file_path)
        except Exception:
             os.remove(file_path)
             raise HTTPException(status_code=400, detail="Invalid CSV file")
        
        if df.empty:
             os.remove(file_path)
             raise HTTPException(status_code=400, detail="Empty dataset")

        # Infer types
        numerics = ['int16', 'int32', 'int64', 'float16', 'float32', 'float64']
        num_cols = df.select_dtypes(include=numerics).columns.tolist()
        cat_cols = df.select_dtypes(exclude=numerics).columns.tolist()
        
        metadata = DatasetMetadata(
            id=file_id,
            filename=file.filename,
            row_count=len(df),
            columns=df.columns.tolist(),
            numerical_columns=num_cols,
            categorical_columns=cat_cols
        )
        
        return metadata
        
    except Exception as e:
        # Cleanup if something failed weirdly
        if os.path.exists(file_path):
             # Don't delete if we successfully returned? (Wait, this is catch block)
             pass 
        raise HTTPException(status_code=500, detail=f"Upload failed: {str(e)}")
