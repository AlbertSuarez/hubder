import sqlalchemy as db

from sqlalchemy.orm import relationship

from src.db.sqlachemy import Base
from src.model.user import User


class Project(Base):
    """
    SQLAlchemy ORM object for `hubder_project` table
    """
    # SQLAlchemy built-in for projects table
    __tablename__ = 'hubder_project'

    id = db.Column(db.String(100), primary_key=True)
    title = db.Column(db.String(100))
    description = db.Column(db.String(100))
    tags = db.Column(db.String(100))
    project_username = db.Column(db.String(100), db.ForeignKey('hubder_user.username'), nullable=False)
    user = relationship(User.__name__)

    def serialize(self):
        """
        Serialize the Project object from the hubder_project table.
        :return: Return object data in serialized (JSON / dict / map) format.
        """
        return dict(
            id=self.id,
            title=self.title,
            description=self.description,
            tags=self.tags,
            project_username=self.project_username,
            user=self.user.serialize()
        )
