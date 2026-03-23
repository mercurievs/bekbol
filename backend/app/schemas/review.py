from pydantic import BaseModel


class ReviewBase(BaseModel):
    product_id: int
    rating: int
    comment: str | None = None
    status: str | None = None


class ReviewCreate(ReviewBase):
    pass


class ReviewOut(ReviewBase):
    id: int
    author_id: int

    class Config:
        from_attributes = True
