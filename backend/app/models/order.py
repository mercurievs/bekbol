from sqlalchemy import Column, Integer, String, ForeignKey, Numeric
from sqlalchemy.orm import relationship
from sqlalchemy.types import Enum as SqlEnum

from app.db.session import Base
from app.models.enums import OrderStatus


class Order(Base):
    __tablename__ = "orders"

    id = Column(Integer, primary_key=True, index=True)
    buyer_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    status = Column(SqlEnum(OrderStatus, name="order_status", native_enum=False), default=OrderStatus.new)
    total_amount = Column(Numeric(10, 2), nullable=False)

    buyer = relationship("User", back_populates="orders")
    items = relationship("OrderItem", back_populates="order")
