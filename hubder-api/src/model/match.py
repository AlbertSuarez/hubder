import sqlalchemy as db

from sqlalchemy.orm import relationship

from src.db.sqlachemy import Base
from src.model.project import Project
from src.model.user import User


class Match(Base):
    """
    SQLAlchemy ORM object for `hubder_match` table
    """
    # SQLAlchemy built-in for matches table
    __tablename__ = 'hubder_match'

    id = db.Column(db.String(100), primary_key=True)
    user_student = db.Column(db.String(100), db.ForeignKey('hubder_user.username'), nullable=False)
    user_teacher = db.Column(db.String(100), db.ForeignKey('hubder_user.username'), nullable=False)
    project_id = db.Column(db.String(100), db.ForeignKey('hubder_project.id'), nullable=False)
    specialization = db.Column(db.String(100))
    status = db.Column(db.String(100))
    user_origin = relationship(User.__name__, foreign_keys=[user_student])
    user_destination = relationship(User.__name__, foreign_keys=[user_teacher])
    project = relationship(Project.__name__)

    def serialize(self):
        """
        Serialize the Match object from the hubder_match table.
        :return: Return object data in serialized (JSON / dict / map) format.
        """
        return dict(
            id=self.id,
            user_student=self.user_student,
            user_teacher=self.user_teacher,
            project_id=self.project_id,
            specialization=self.specialization,
            status=self.status,
            user={'student': self.user_origin.serialize(), 'teacher': self.user_destination.serialize()},
            project=self.project.serialize()
        )
