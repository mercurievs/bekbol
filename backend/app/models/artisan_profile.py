from sqlalchemy import Column, Integer, String, Text, Float, Boolean, ForeignKey
from sqlalchemy.orm import relationship

from app.db.session import Base


class ArtisanProfile(Base):
    __tablename__ = "artisan_profiles"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), unique=True, nullable=False)
    workshop_name = Column(String(255), nullable=True)
    bio = Column(Text, nullable=True)
    region = Column(String(120), nullable=True)
    rating = Column(Float, default=0)
    is_featured = Column(Boolean, default=False)

    user = relationship("User", back_populates="artisan_profile")
