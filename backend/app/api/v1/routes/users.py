from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.deps import get_db
from app.schemas.user import UserCreate, UserOut
from app.services.auth import hash_password
from app.models.user import User

router = APIRouter()


@router.post("/", response_model=UserOut)
def register(user_in: UserCreate, db: Session = Depends(get_db)):
    existing = db.query(User).filter(User.email == user_in.email).first()
    if existing:
        raise HTTPException(status_code=400, detail="Email уже зарегистрирован")

    user = User(
        email=user_in.email,
        full_name=user_in.full_name,
        role=user_in.role,
        hashed_password=hash_password(user_in.password)
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return user
