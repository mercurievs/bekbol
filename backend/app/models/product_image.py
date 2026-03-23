from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.orm import relationship

from app.db.session import Base


class ProductImage(Base):
    __tablename__ = "product_images"

    id = Column(Integer, primary_key=True, index=True)
    product_id = Column(Integer, ForeignKey("products.id"), nullable=False)
    url = Column(String(500), nullable=False)
    is_cover = Column(Boolean, default=False)
    sort_order = Column(Integer, default=0)

    product = relationship("Product", back_populates="images")
