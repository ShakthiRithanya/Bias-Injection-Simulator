from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from .trainer import ModelTrainer
import pandas as pd
import numpy as np

class LogisticRegressionTrainer(ModelTrainer):
    def __init__(self):
        self.model = LogisticRegression(max_iter=1000, class_weight='balanced')
        
    def train(self, X_train: pd.DataFrame, y_train: pd.Series, **kwargs):
        self.model.fit(X_train, y_train)
        
    def predict(self, X_test: pd.DataFrame) -> np.ndarray:
        return self.model.predict(X_test)
        
    def predict_proba(self, X_test: pd.DataFrame) -> np.ndarray:
        if hasattr(self.model, "predict_proba"):
            return self.model.predict_proba(X_test)[:, 1]
        return self.model.predict(X_test) # Fallback
        
    @property
    def name(self):
        return "Logistic Regression"

class RandomForestTrainer(ModelTrainer):
    def __init__(self):
        self.model = RandomForestClassifier(n_estimators=100, random_state=42)
        
    def train(self, X_train: pd.DataFrame, y_train: pd.Series, **kwargs):
        self.model.fit(X_train, y_train)
        
    def predict(self, X_test: pd.DataFrame) -> np.ndarray:
        return self.model.predict(X_test)

    def predict_proba(self, X_test: pd.DataFrame) -> np.ndarray:
        return self.model.predict_proba(X_test)[:, 1]
        
    @property
    def name(self):
        return "Random Forest"
