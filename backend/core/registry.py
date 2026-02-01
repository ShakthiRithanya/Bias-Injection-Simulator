from typing import Dict, Type, List
from .bias_injector import BiasInjector
from .sampling_bias import SamplingBiasInjector
from .label_bias import LabelBiasInjector
from .proxy_bias import ProxyBiasInjector
from .historical_bias import HistoricalBiasInjector
from .measurement_bias import MeasurementBiasInjector

class BiasRegistry:
    def __init__(self):
        self._injectors: Dict[str, BiasInjector] = {}
        self.register_defaults()

    def register(self, injector_cls: Type[BiasInjector]):
        instance = injector_cls()
        self._injectors[instance.slug] = instance

    def register_defaults(self):
        self.register(SamplingBiasInjector)
        self.register(LabelBiasInjector)
        self.register(ProxyBiasInjector)
        self.register(HistoricalBiasInjector)
        self.register(MeasurementBiasInjector)

    def get(self, slug: str) -> BiasInjector:
        return self._injectors.get(slug)

    def list_available(self) -> List[Dict[str, str]]:
        """Returns list of metadata"""
        return [
            {"slug": k, "name": v.name, "description": v.description()} 
            for k, v in self._injectors.items()
        ]

# Global instance
registry = BiasRegistry()
