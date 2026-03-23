from sqlalchemy import Column, Integer, String, Text, Boolean
from sqlalchemy.orm import relationship

from app.db.session import Base


class Category(Base):
    __tablename__ = "categories"

    id = Column(Integer, primary_key=True, index=True)
    slug = Column(String(120), unique=True, index=True, nullable=False)
    title_ru = Column(String(255), nullable=False)
    title_kg = Column(String(255), nullable=True)
    description_ru = Column(Text, nullable=True)
    description_kg = Column(Text, nullable=True)
    is_active = Column(Boolean, default=True)

    products = relationship("Product", back_populates="category")
