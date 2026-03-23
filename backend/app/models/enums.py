from enum import Enum


class UserRole(str, Enum):
    buyer = "buyer"
    artisan = "artisan"
    admin = "admin"


class ProductStatus(str, Enum):
    draft = "draft"
    pending = "pending"
    approved = "approved"
    rejected = "rejected"
    archived = "archived"


class OrderStatus(str, Enum):
    new = "new"
    paid = "paid"
    processing = "processing"
    shipped = "shipped"
    delivered = "delivered"
    canceled = "canceled"


class ReviewStatus(str, Enum):
    pending = "pending"
    approved = "approved"
    rejected = "rejected"
