from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from datetime import datetime
from app.database import get_db
from app.models.banner import Banner
from app.schemas.banner import Banner as BannerSchema

router = APIRouter()

@router.get("/", response_model=List[BannerSchema])
def get_banners(db: Session = Depends(get_db)):
    now = datetime.utcnow()
    
    banners = db.query(Banner).filter(
        Banner.is_active == True,
        (Banner.start_date == None) | (Banner.start_date <= now),
        (Banner.end_date == None) | (Banner.end_date >= now)
    ).order_by(Banner.order_position).all()
    
    return banners