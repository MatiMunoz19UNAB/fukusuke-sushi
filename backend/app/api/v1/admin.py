from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from app.database import get_db
from app.models.product import Product, Category
from app.models.order import Order
from app.models.banner import Banner
from app.schemas.product import ProductCreate, ProductUpdate, Product as ProductSchema
from app.schemas.product import CategoryCreate, Category as CategorySchema
from app.schemas.banner import BannerCreate, BannerUpdate, Banner as BannerSchema
from app.schemas.order import Order as OrderSchema, OrderUpdate
from app.api.deps import get_current_admin_user
from app.models.user import User

router = APIRouter()

# ==================== PRODUCTS ====================

@router.post("/products", response_model=ProductSchema, status_code=status.HTTP_201_CREATED)
def create_product(
    product_data: ProductCreate,
    current_user: User = Depends(get_current_admin_user),
    db: Session = Depends(get_db)
):
    db_product = Product(**product_data.dict())
    db.add(db_product)
    db.commit()
    db.refresh(db_product)
    return db_product

@router.put("/products/{product_id}", response_model=ProductSchema)
def update_product(
    product_id: int,
    product_data: ProductUpdate,
    current_user: User = Depends(get_current_admin_user),
    db: Session = Depends(get_db)
):
    product = db.query(Product).filter(Product.id == product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Producto no encontrado")
    
    update_data = product_data.dict(exclude_unset=True)
    for field, value in update_data.items():
        setattr(product, field, value)
    
    db.commit()
    db.refresh(product)
    return product

@router.delete("/products/{product_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_product(
    product_id: int,
    current_user: User = Depends(get_current_admin_user),
    db: Session = Depends(get_db)
):
    product = db.query(Product).filter(Product.id == product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Producto no encontrado")
    
    db.delete(product)
    db.commit()
    return None

# ==================== CATEGORIES ====================

@router.post("/categories", response_model=CategorySchema, status_code=status.HTTP_201_CREATED)
def create_category(
    category_data: CategoryCreate,
    current_user: User = Depends(get_current_admin_user),
    db: Session = Depends(get_db)
):
    db_category = Category(**category_data.dict())
    db.add(db_category)
    db.commit()
    db.refresh(db_category)
    return db_category

# ==================== ORDERS ====================

@router.get("/orders", response_model=List[OrderSchema])
def get_all_orders(
    current_user: User = Depends(get_current_admin_user),
    db: Session = Depends(get_db)
):
    orders = db.query(Order).all()
    return orders

@router.put("/orders/{order_id}", response_model=OrderSchema)
def update_order_status(
    order_id: int,
    order_data: OrderUpdate,
    current_user: User = Depends(get_current_admin_user),
    db: Session = Depends(get_db)
):
    order = db.query(Order).filter(Order.id == order_id).first()
    if not order:
        raise HTTPException(status_code=404, detail="Orden no encontrada")
    
    if order_data.status:
        order.status = order_data.status
    if order_data.delivery_notes:
        order.delivery_notes = order_data.delivery_notes
    
    db.commit()
    db.refresh(order)
    return order

# ==================== BANNERS ====================

@router.post("/banners", response_model=BannerSchema, status_code=status.HTTP_201_CREATED)
def create_banner(
    banner_data: BannerCreate,
    current_user: User = Depends(get_current_admin_user),
    db: Session = Depends(get_db)
):
    db_banner = Banner(**banner_data.dict())
    db.add(db_banner)
    db.commit()
    db.refresh(db_banner)
    return db_banner

@router.put("/banners/{banner_id}", response_model=BannerSchema)
def update_banner(
    banner_id: int,
    banner_data: BannerUpdate,
    current_user: User = Depends(get_current_admin_user),
    db: Session = Depends(get_db)
):
    banner = db.query(Banner).filter(Banner.id == banner_id).first()
    if not banner:
        raise HTTPException(status_code=404, detail="Banner no encontrado")
    
    update_data = banner_data.dict(exclude_unset=True)
    for field, value in update_data.items():
        setattr(banner, field, value)
    
    db.commit()
    db.refresh(banner)
    return banner

@router.delete("/banners/{banner_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_banner(
    banner_id: int,
    current_user: User = Depends(get_current_admin_user),
    db: Session = Depends(get_db)
):
    banner = db.query(Banner).filter(Banner.id == banner_id).first()
    if not banner:
        raise HTTPException(status_code=404, detail="Banner no encontrado")
    
    db.delete(banner)
    db.commit()
    return None
