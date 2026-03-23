from pydantic import BaseModel, EmailStr


class UserBase(BaseModel):
    email: EmailStr
    full_name: str
    role: str


class UserCreate(UserBase):
    password: str


class UserOut(UserBase):
    id: int
    is_active: bool

    class Config:
        from_attributes = True
