from pydantic import BaseModel


class ArtisanProfileBase(BaseModel):
    workshop_name: str | None = None
    bio: str | None = None
    region: str | None = None
    rating: float | None = None
    is_featured: bool = False


class ArtisanProfileCreate(ArtisanProfileBase):
    pass


class ArtisanProfileOut(ArtisanProfileBase):
    id: int
    user_id: int

    class Config:
        from_attributes = True
