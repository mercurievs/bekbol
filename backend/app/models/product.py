from sqlalchemy import Column, Integer, String, Text, ForeignKey, Numeric, Boolean
from sqlalchemy.orm import relationship
from sqlalchemy.types import Enum as SqlEnum

from app.db.session import Base
from app.models.enums import ProductStatus


class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    slug = Column(String(255), unique=True, index=True, nullable=True)
    description = Column(Text, nullable=False)
    price = Column(Numeric(10, 2), nullable=False)
    category_id = Column(Integer, ForeignKey("categories.id"), nullable=True)
    material = Column(String(120), nullable=True)
    is_handmade = Column(Boolean, default=True)
    status = Column(SqlEnum(ProductStatus, name="product_status", native_enum=False), default=ProductStatus.pending)
    seller_id = Column(Integer, ForeignKey("users.id"), nullable=False)

    seller = relationship("User", back_populates="products")
    category = relationship("Category", back_populates="products")
    images = relationship("ProductImage", back_populates="product")
    reviews = relationship("Review", back_populates="product")
    favorites = relationship("Favorite", back_populates="product")
    order_items = relationship("OrderItem", back_populates="product")
