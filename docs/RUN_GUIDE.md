# Run Guide

## Backend (Python FastAPI)

1. Navigate to the root directory.
2. Create and activate a virtual environment (optional but recommended):
   ```bash
   python -m venv venv
   .\venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r backend/requirements.txt
   ```
4. Run the server:
   ```bash
   uvicorn backend.main:app --reload
   ```
   Server will start at `http://127.0.0.1:8000`.
   API Documentation available at `http://127.0.0.1:8000/docs`.

## Frontend (Next.js)

1. Navigate to `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
   App will start at `http://localhost:3000`.
