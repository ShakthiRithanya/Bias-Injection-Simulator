import pandas as pd
import numpy as np
from .bias_injector import BiasInjector

class HistoricalBiasInjector(BiasInjector):
    @property
    def name(self) -> str:
        return "Historical Bias"

    @property
    def slug(self) -> str:
        return "historical_bias"

    def description(self) -> str:
        return "Systematically degrades outcomes/features for a specific group to mimic historical disadvantage."

    def inject(self, data: pd.DataFrame, target_group_col: str, target_group_val: any, impact_col: str, penalty: float = 0.2) -> pd.DataFrame:
        """
        Reduces value of 'impact_col' for 'target_group' by percentage 'penalty'.
        Only works on numeric columns.
        """
        if target_group_col not in data.columns or impact_col not in data.columns:
            raise ValueError("Columns not found")
        
        data = data.copy()
        if not np.issubdtype(data[impact_col].dtype, np.number):
             raise ValueError("Impact column must be numeric for penalty")
             
        # Apply penalty
        mask = data[target_group_col] == target_group_val
        
        # value = value * (1 - penalty)
        data.loc[mask, impact_col] = data.loc[mask, impact_col] * (1.0 - penalty)
        
        return data
