from pydantic import BaseModel


class CategoryBase(BaseModel):
    slug: str
    title_ru: str
    title_kg: str | None = None
    description_ru: str | None = None
    description_kg: str | None = None
    is_active: bool = True


class CategoryCreate(CategoryBase):
    pass


class CategoryOut(CategoryBase):
    id: int

    class Config:
        from_attributes = True
