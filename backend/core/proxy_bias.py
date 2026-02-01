import pandas as pd
import numpy as np
from .bias_injector import BiasInjector

class ProxyBiasInjector(BiasInjector):
    @property
    def name(self) -> str:
        return "Feature Proxy Bias"

    @property
    def slug(self) -> str:
        return "proxy_bias"

    def description(self) -> str:
        return "Introduces a new feature that strongly correlates with a sensitive attribute (Red-lining)."

    def inject(self, data: pd.DataFrame, sensitive_column: str, proxy_name: str = "proxy_var", correlation: float = 0.9) -> pd.DataFrame:
        """
        Creates a new column 'proxy_name' that is correlated with 'sensitive_column'.
        """
        if sensitive_column not in data.columns:
             raise ValueError(f"Column {sensitive_column} not found")
             
        data = data.copy()
        col_type = data[sensitive_column].dtype
        
        if np.issubdtype(col_type, np.number):
            # Numerical correlation
            # proxy = sensitive * corr + noise * (1-corr)
            # Normalize sensitive first roughly
            vals = data[sensitive_column]
            std = vals.std()
            if std == 0: std = 1
            
            noise = np.random.normal(0, std, size=len(data))
            
            data[proxy_name] = (vals * correlation) + (noise * (1 - correlation))
        else:
            # Categorical correlation
            # Copy value with probability 'correlation', else pick random
            # Vectorized approach
            
            n = len(data)
            # Mask of which ones to copy
            copy_mask = np.random.rand(n) < correlation
            
            # Random values for the rest
            unique_vals = data[sensitive_column].unique()
            random_vals = np.random.choice(unique_vals, size=n)
            
            # Initialize with random
            data[proxy_name] = random_vals
            # Overwrite with actual where mask is true
            data.loc[copy_mask, proxy_name] = data.loc[copy_mask, sensitive_column]
            
        return data
