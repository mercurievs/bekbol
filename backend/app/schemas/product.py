from pydantic import BaseModel


class ProductBase(BaseModel):
    title: str
    description: str
    price: float
    category_id: int | None = None
    material: str | None = None
    is_handmade: bool = True
    status: str | None = None


class ProductCreate(ProductBase):
    pass


class ProductOut(ProductBase):
    id: int
    seller_id: int

    class Config:
        from_attributes = True
