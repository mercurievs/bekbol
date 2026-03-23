from sqlalchemy import Boolean, Column, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.types import Enum as SqlEnum

from app.db.session import Base
from app.models.enums import UserRole


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), unique=True, index=True, nullable=False)
    hashed_password = Column(String(255), nullable=False)
    full_name = Column(String(255), nullable=False)
    role = Column(SqlEnum(UserRole, name="user_role", native_enum=False), nullable=False, default=UserRole.buyer)
    is_active = Column(Boolean, default=True)

    artisan_profile = relationship("ArtisanProfile", back_populates="user", uselist=False)
    products = relationship("Product", back_populates="seller")
    reviews = relationship("Review", back_populates="author")
    favorites = relationship("Favorite", back_populates="user")
    orders = relationship("Order", back_populates="buyer")
