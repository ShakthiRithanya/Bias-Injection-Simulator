from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score
from fairlearn.metrics import demographic_parity_difference, equalized_odds_difference, selection_rate, demographic_parity_ratio
import pandas as pd
import numpy as np

def evaluate_model(y_true, y_pred, sensitive_features):
    """
    Calculate performance and fairness metrics.
    """
    # Ensure binary format if possible
    
    metrics = {
        "accuracy": float(accuracy_score(y_true, y_pred)),
        "precision": float(precision_score(y_true, y_pred, zero_division=0)),
        "recall": float(recall_score(y_true, y_pred, zero_division=0)),
        "f1": float(f1_score(y_true, y_pred, zero_division=0)),
    }
    
    try:
        metrics["demographic_parity_diff"] = float(demographic_parity_difference(
            y_true, y_pred, sensitive_features=sensitive_features
        ))
        
        metrics["demographic_parity_ratio"] = float(demographic_parity_ratio(
            y_true, y_pred, sensitive_features=sensitive_features
        ))
        
        metrics["equalized_odds_diff"] = float(equalized_odds_difference(
            y_true, y_pred, sensitive_features=sensitive_features
        ))
    except Exception as e:
        metrics["fairness_error"] = str(e)
        
    return metrics
