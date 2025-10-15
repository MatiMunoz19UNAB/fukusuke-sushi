from sqlalchemy import Column, Integer, String, Boolean, DateTime, Text
from datetime import datetime
from app.database import Base

class Banner(Base):
    __tablename__ = "banners"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    image_url = Column(String, nullable=False)
    link_url = Column(String, nullable=True)
    order_position = Column(Integer, default=0)
    is_active = Column(Boolean, default=True)
    start_date = Column(DateTime, nullable=True)
    end_date = Column(DateTime, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
