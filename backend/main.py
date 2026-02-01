from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Bias Injection Simulator",
    description="A scientific experiment dashboard to observe ML model degradation under controlled bias.",
    version="1.0.0"
)

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for dev
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {
        "system": "Bias Injection Simulator", 
        "status": "operational",
        "mode": "Anti-Gravity"
    }

@app.get("/health")
def health_check():
    return {"status": "ok"}
