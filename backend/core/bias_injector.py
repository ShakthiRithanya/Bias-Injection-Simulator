from abc import ABC, abstractmethod
import pandas as pd
from typing import Any, Dict

class BiasInjector(ABC):
    """
    Abstract Base Class for all Bias Injection mechanisms.
    The 'Weaponization' core.
    """
    
    @property
    @abstractmethod
    def name(self) -> str:
        """Name of the bias type (e.g., 'Sampling Bias')"""
        pass

    @property
    @abstractmethod
    def slug(self) -> str:
        """Unique slug for API (e.g., 'sampling_bias')"""
        pass

    @abstractmethod
    def inject(self, data: pd.DataFrame, **kwargs) -> pd.DataFrame:
        """
        Apply the bias perturbation to the dataset.
        
        Args:
            data: The input pandas DataFrame.
            **kwargs: Parameters for the bias injection (e.g., probability, target_group).
            
        Returns:
            The corrupted DataFrame.
        """
        pass
    
    @abstractmethod
    def description(self) -> str:
        """Description of what this injector does."""
        pass
