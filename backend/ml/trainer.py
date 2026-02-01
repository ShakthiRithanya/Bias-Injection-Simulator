from abc import ABC, abstractmethod
import pandas as pd
import numpy as np

class ModelTrainer(ABC):
    """
    Abstract Base Class for Model Trainers.
    """
    
    @abstractmethod
    def train(self, X_train: pd.DataFrame, y_train: pd.Series, **kwargs):
        """Train the model."""
        pass
        
    @abstractmethod
    def predict(self, X_test: pd.DataFrame) -> np.ndarray:
        """Predict outcomes."""
        pass
    
    @abstractmethod
    def predict_proba(self, X_test: pd.DataFrame) -> np.ndarray:
        """Predict probabilities (for ROC/AUC)."""
        pass
    
    @property
    @abstractmethod
    def name(self) -> str:
        """Model Name"""
        pass
