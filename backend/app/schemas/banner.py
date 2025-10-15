from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class BannerBase(BaseModel):
    title: str
    image_url: str
    link_url: Optional[str] = None
    order_position: int = 0
    is_active: bool = True
    start_date: Optional[datetime] = None
    end_date: Optional[datetime] = None

class BannerCreate(BannerBase):
    pass

class BannerUpdate(BaseModel):
    title: Optional[str] = None
    image_url: Optional[str] = None
    link_url: Optional[str] = None
    order_position: Optional[int] = None
    is_active: Optional[bool] = None
    start_date: Optional[datetime] = None
    end_date: Optional[datetime] = None

class Banner(BannerBase):
    id: int
    created_at: datetime
    
    class Config:
        from_attributes = True