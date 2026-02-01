import pandas as pd
import numpy as np
from .bias_injector import BiasInjector

class LabelBiasInjector(BiasInjector):
    @property
    def name(self) -> str:
        return "Label Bias"

    @property
    def slug(self) -> str:
        return "label_bias"

    def description(self) -> str:
        return "Incorrectly labels a specific group, simulating annotation errors or historical prejudice."

    def inject(self, data: pd.DataFrame, target_column: str, target_value: any, label_column: str, flip_ratio: float = 0.3) -> pd.DataFrame:
        """
        Flips the label for a specific group with a given probability.
        Assumes binary classification for simplicity for now, or just random flip.
        """
        if target_column not in data.columns or label_column not in data.columns:
            raise ValueError(f"Columns not found in dataset")
            
        data = data.copy()
        
        # Identify the group
        mask = data[target_column] == target_value
        affected_indices = data[mask].index
        
        # Determine how many to flip
        flip_count = int(len(affected_indices) * flip_ratio)
        
        # Select indices to flip
        flip_indices = np.random.choice(affected_indices, size=flip_count, replace=False)
        
        # Logic to flip labels
        # If numeric (0/1), 1-x. If categorical, pick random other?
        # For MVP, assume 0/1 or similar.
        
        unique_labels = data[label_column].unique()
        
        if len(unique_labels) == 2:
            # Binary flip
            # We can use a map
            def flip(val):
                return unique_labels[0] if val == unique_labels[1] else unique_labels[1]
            
            data.loc[flip_indices, label_column] = data.loc[flip_indices, label_column].apply(flip)
        else:
            # Random shuffle for now
            # TODO: Smarter flip for multi-class
            pass # Keep it simple for now
            
        return data
