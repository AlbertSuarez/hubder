import sqlalchemy as db

from sqlalchemy.orm import relationship

from src.db.sqlachemy import Base
from src.model.user import User


class Like(Base):
    """
    SQLAlchemy ORM object for `hubder_like` table
    """
    # SQLAlchemy built-in for users table
    __tablename__ = 'hubder_like'

    id = db.Column(db.String(100), primary_key=True)
    user_from = db.Column(db.String(100), db.ForeignKey('hubder_user.username'), nullable=False)
    user_to = db.Column(db.String(100), db.ForeignKey('hubder_user.username'), nullable=False)
    user_origin = relationship(User.__name__, foreign_keys=[user_from])
    user_destination = relationship(User.__name__, foreign_keys=[user_to])

    def serialize(self):
        """
        Serialize the Like object from the hubder_like table.
        :return: Return object data in serialized (JSON / dict / map) format.
        """
        return dict(
            id=self.id,
            user_from=self.user_from,
            user_to=self.user_to,
            user={'from': self.user_origin.serialize(), 'to': self.user_destination.serialize()}
        )
