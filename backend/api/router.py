from fastapi import APIRouter
from backend.api.endpoints import data, bias, model

api_router = APIRouter()

api_router.include_router(data.router, prefix="/data", tags=["data"])
api_router.include_router(bias.router, prefix="/bias", tags=["bias"])
api_router.include_router(model.router, prefix="/model", tags=["model"])
