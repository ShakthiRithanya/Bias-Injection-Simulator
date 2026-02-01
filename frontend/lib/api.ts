import { DatasetMetadata, BiasType, TrainingResult } from "@/types";

const API_BASE = "http://localhost:8000/api/v1";

export const api = {
    async uploadDataset(file: File): Promise<DatasetMetadata> {
        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch(`${API_BASE}/data/upload`, {
            method: "POST",
            body: formData,
        });

        if (!res.ok) {
            const err = await res.json();
            throw new Error(err.detail || "Upload failed");
        }
        return res.json();
    },

    async getAvailableBiases(): Promise<BiasType[]> {
        const res = await fetch(`${API_BASE}/bias/available`);
        return res.json();
    },

    async injectBias(datasetId: string, slug: string, params: any): Promise<any> {
        const res = await fetch(`${API_BASE}/bias/inject`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ dataset_id: datasetId, bias_slug: slug, params }),
        });
        if (!res.ok) {
            const err = await res.json();
            throw new Error(err.detail || "Injection failed");
        }
        return res.json();
    },

    async trainModel(datasetId: string, targetCol: string, sensitiveCol: string, modelType: string): Promise<TrainingResult> {
        const res = await fetch(`${API_BASE}/model/train`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                dataset_id: datasetId,
                target_column: targetCol,
                sensitive_column: sensitiveCol,
                model_type: modelType
            }),
        });
        if (!res.ok) {
            const err = await res.json();
            throw new Error(err.detail || "Training failed");
        }
        return res.json();
    }
};
