from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime

class OrderItemBase(BaseModel):
    product_id: int
    quantity: int = Field(..., gt=0)

class OrderItemCreate(OrderItemBase):
    pass

class OrderItem(OrderItemBase):
    id: int
    order_id: int
    unit_price: float
    subtotal: float
    product_name: Optional[str] = None
    
    class Config:
        from_attributes = True

class OrderBase(BaseModel):
    address_id: int
    delivery_notes: Optional[str] = None

class OrderCreate(OrderBase):
    items: List[OrderItemCreate]

class OrderUpdate(BaseModel):
    status: Optional[str] = None
    delivery_notes: Optional[str] = None

class Order(OrderBase):
    id: int
    user_id: int
    status: str
    total_amount: float
    created_at: datetime
    updated_at: datetime
    items: List[OrderItem]
    
    class Config:
        from_attributes = True

class OrderList(BaseModel):
    id: int
    status: str
    total_amount: float
    created_at: datetime
    items_count: int
    
    class Config:
        from_attributes = True