"use client";
import React, { createContext, useContext, useState } from 'react';
import { DatasetMetadata, TrainingResult } from '@/types';

interface ExperimentState {
    dataset: DatasetMetadata | null;
    setDataset: (d: DatasetMetadata) => void;
    results: TrainingResult[];
    addResult: (r: TrainingResult) => void;
    clearResults: () => void;
    currentBiasSteps: any[];
}

const ExperimentContext = createContext<ExperimentState | undefined>(undefined);

export const ExperimentProvider = ({ children }: { children: React.ReactNode }) => {
    const [dataset, setDataset] = useState<DatasetMetadata | null>(null);
    const [results, setResults] = useState<TrainingResult[]>([]);
    const [currentBiasSteps, setCurrentBiasSteps] = useState<any[]>([]);

    const addResult = (r: TrainingResult) => setResults(prev => [...prev, r]);
    const clearResults = () => setResults([]);

    return (
        <ExperimentContext.Provider value={{
            dataset, setDataset,
            results, addResult, clearResults,
            currentBiasSteps
        }}>
            {children}
        </ExperimentContext.Provider>
    )
};

export const useExperiment = () => {
    const context = useContext(ExperimentContext);
    if (!context) throw new Error("useExperiment must be used within ExperimentProvider");
    return context;
};
