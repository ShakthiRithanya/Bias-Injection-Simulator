import pandas as pd
import numpy as np
from .bias_injector import BiasInjector

class SamplingBiasInjector(BiasInjector):
    @property
    def name(self) -> str:
        return "Sampling Bias"

    @property
    def slug(self) -> str:
        return "sampling_bias"

    def description(self) -> str:
        return "Systematically under-represents or over-represents a specific group."

    def inject(self, data: pd.DataFrame, target_column: str, target_value: any, ratio: float = 0.5) -> pd.DataFrame:
        """
        Removes a percentage of rows where target_column == target_value.
        
        Args:
            ratio: Fraction of the group to REMOVE. (e.g. 0.8 means remove 80% of them).
        """
        if target_column not in data.columns:
            raise ValueError(f"Column {target_column} not found in dataset")

        # Identify the group
        mask = data[target_column] == target_value
        
        # Indices to potentially drop
        affected_indices = data[mask].index
        
        # Determine how many to drop
        drop_count = int(len(affected_indices) * ratio)
        
        # Randomly select indices to drop
        drop_indices = np.random.choice(affected_indices, size=drop_count, replace=False)
        
        # Drop and return
        return data.drop(drop_indices)
