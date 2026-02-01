import pandas as pd
import numpy as np
from .bias_injector import BiasInjector

class MeasurementBiasInjector(BiasInjector):
    @property
    def name(self) -> str:
        return "Measurement Bias"

    @property
    def slug(self) -> str:
        return "measurement_bias"

    def description(self) -> str:
        return "introduces systematic noise or scaling errors for a specific group (e.g. calibrated differently)."

    def inject(self, data: pd.DataFrame, target_group_col: str, target_group_val: any, feature_col: str, noise_sigma: float = 1.0, systematic_shift: float = 0.0) -> pd.DataFrame:
        """
        Adds Gaussian noise + systematic shift to 'feature_col' for 'target_group'.
        """
        if target_group_col not in data.columns or feature_col not in data.columns:
            raise ValueError("Columns not found")

        data = data.copy()
        if not np.issubdtype(data[feature_col].dtype, np.number):
             raise ValueError("Feature column must be numeric")
             
        mask = data[target_group_col] == target_group_val
        n_affected = mask.sum()
        
        # Add noise
        noise = np.random.normal(0, noise_sigma, size=n_affected)
        
        data.loc[mask, feature_col] = data.loc[mask, feature_col] + noise + systematic_shift
        
        return data
