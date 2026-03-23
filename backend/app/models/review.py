from sqlalchemy import Column, Integer, String, Text, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.types import Enum as SqlEnum

from app.db.session import Base
from app.models.enums import ReviewStatus


class Review(Base):
    __tablename__ = "reviews"

    id = Column(Integer, primary_key=True, index=True)
    product_id = Column(Integer, ForeignKey("products.id"), nullable=False)
    author_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    rating = Column(Integer, nullable=False)
    comment = Column(Text, nullable=True)
    status = Column(SqlEnum(ReviewStatus, name="review_status", native_enum=False), default=ReviewStatus.pending)

    product = relationship("Product", back_populates="reviews")
    author = relationship("User", back_populates="reviews")
