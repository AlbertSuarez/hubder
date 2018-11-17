import sqlalchemy as db

from src.db.sqlachemy import Base


class User(Base):
    """
    SQLAlchemy ORM object for `hubder_user` table
    """
    # SQLAlchemy built-in for users table
    __tablename__ = 'hubder_user'

    username = db.Column(db.String(100), primary_key=True)
    first_name = db.Column(db.String(100))
    last_name = db.Column(db.String(100))
    account_type = db.Column(db.String(100))
    specialization = db.Column(db.String(100))
    email = db.Column(db.String(100))
    password = db.Column(db.String(500))

    def serialize(self):
        """
        Serialize the User object from the hubder_user table.
        :return: Return object data in serialized (JSON / dict / map) format.
        """
        return dict(
            username=self.username,
            first_name=self.first_name,
            last_name=self.last_name,
            account_type=self.account_type,
            specialization=self.specialization,
            email=self.email,
            password=self.password
        )
