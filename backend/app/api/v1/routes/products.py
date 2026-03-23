from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.deps import get_db
from app.models.product import Product
from app.schemas.product import ProductCreate, ProductOut

router = APIRouter()


@router.get("/", response_model=list[ProductOut])
def list_products(db: Session = Depends(get_db)):
    return db.query(Product).limit(50).all()


@router.post("/", response_model=ProductOut)
def create_product(payload: ProductCreate, db: Session = Depends(get_db)):
    product = Product(
        title=payload.title,
        description=payload.description,
        price=payload.price,
        category_id=payload.category_id,
        material=payload.material,
        is_handmade=payload.is_handmade,
        status=payload.status,
        seller_id=1
    )
    db.add(product)
    db.commit()
    db.refresh(product)
    return product
