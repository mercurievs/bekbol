from sqlalchemy import Column, Integer, String, Text, UniqueConstraint

from app.db.session import Base


class Translation(Base):
    __tablename__ = "translations"
    __table_args__ = (
        UniqueConstraint("entity_type", "entity_id", "locale", "field", name="uq_translations_entity"),
    )

    id = Column(Integer, primary_key=True, index=True)
    entity_type = Column(String(60), nullable=False)
    entity_id = Column(Integer, nullable=False)
    locale = Column(String(10), nullable=False)
    field = Column(String(60), nullable=False)
    value = Column(Text, nullable=False)
