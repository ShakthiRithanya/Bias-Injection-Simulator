@echo off
echo Starting Bias Injection Simulator...
echo.
echo Launching Backend (Port 8000)...
start "Backend Server" cmd /k "venv\Scripts\activate & uvicorn backend.main:app --reload"

echo Launching Frontend (Port 3000)...
start "Frontend App" cmd /k "cd frontend & npm run dev"

echo.
echo Systems Operational. Anti-Gravity Engines Engaged.
