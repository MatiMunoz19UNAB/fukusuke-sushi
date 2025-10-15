from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime

class CategoryBase(BaseModel):
    name: str
    slug: str
    order_position: int = 0

class CategoryCreate(CategoryBase):
    pass

class Category(CategoryBase):
    id: int
    is_active: bool
    
    class Config:
        from_attributes = True

class ProductImageBase(BaseModel):
    image_url: str
    is_primary: bool = False
    order_position: int = 0

class ProductImage(ProductImageBase):
    id: int
    product_id: int
    
    class Config:
        from_attributes = True

class ProductBase(BaseModel):
    name: str
    description: Optional[str] = None
    price: float = Field(..., gt=0)
    category_id: int
    image_url: Optional[str] = None
    is_available: bool = True

class ProductCreate(ProductBase):
    pass

class ProductUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    price: Optional[float] = Field(None, gt=0)
    category_id: Optional[int] = None
    image_url: Optional[str] = None
    is_available: Optional[bool] = None

class Product(ProductBase):
    id: int
    rating: float
    created_at: datetime
    updated_at: datetime
    category: Category
    images: List[ProductImage] = []
    
    class Config:
        from_attributes = True

class ProductList(BaseModel):
    id: int
    name: str
    description: Optional[str]
    price: float
    category: str
    image_url: Optional[str]
    rating: float
    is_available: bool
    
    class Config:
        from_attributes = True