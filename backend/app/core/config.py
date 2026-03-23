from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    api_host: str = "0.0.0.0"
    api_port: int = 8000
    database_url: str = "sqlite:///./bekbol.db"
    jwt_secret: str = "change_me"
    jwt_algorithm: str = "HS256"
    access_token_expire_minutes: int = 60 * 24
    cors_origins: list[str] = [
        "http://localhost:3000",
        "http://localhost:3001",
        "http://127.0.0.1:3000",
        "http://127.0.0.1:3001"
    ]

    class Config:
        env_file = ".env"


settings = Settings()
