from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.deps import get_db
from app.schemas.auth import LoginRequest, Token
from app.services.auth import create_access_token, verify_password
from app.models.user import User

router = APIRouter()


@router.post("/login", response_model=Token)
def login(payload: LoginRequest, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == payload.email).first()
    if not user or not verify_password(payload.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Неверные данные для входа")

    token = create_access_token(subject=str(user.id))
    return Token(access_token=token)
