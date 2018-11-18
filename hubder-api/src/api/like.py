import uuid

from flask import request, jsonify

from src.model.like import Like
from src.db.sqlachemy import db_session
from src.hubder import flask_app
from src.model.match import Match
from src.model.project import Project
from src.model.user import User


@flask_app.route('/like_from_user', methods=['GET'])
def like_get_from_user():
    """
    Retrieve the likes that a user did.
    :return: List of likes.
    """
    # Retrieve query parameters
    username = request.args.get('username')

    # Query into like database
    like_list = db_session().query(Like).filter_by(user_from=username).all()
    if like_list:
        return jsonify(likes=[like.serialize() for like in like_list]), 200
    else:
        return jsonify(likes=[]), 200


@flask_app.route('/like_to_user', methods=['GET'])
def like_get_to_user():
    """
    Retrieve the likes that a user received.
    :return: List of likes.
    """
    # Retrieve query parameters
    username = request.args.get('username')

    # Query into like database
    like_list = db_session().query(Like).filter_by(user_to=username).all()
    if like_list:
        return jsonify(likes=[like.serialize() for like in like_list]), 200
    else:
        return jsonify(likes=[]), 200


@flask_app.route('/like_match', methods=['GET'])
def like_match():
    """
    Check if two user have a match.
    :return: True if both users have a match, false otherwise.
    """
    # Retrieve query parameters
    user_from = request.args.get('user_from')
    user_to = request.args.get('user_to')

    # Query into like database
    first_match = db_session().query(Like).filter_by(user_from=user_from, user_to=user_to).first()
    second_match = db_session().query(Like).filter_by(user_to=user_from, user_from=user_to).first()
    return jsonify(match=bool(first_match) and bool(second_match)), 200


@flask_app.route('/like', methods=['POST'])
def like_post():
    """
    Create a like between two given users.
    :return: Like created.
    """
    # Retrieve request body.
    body = request.json

    # Check parameters.
    required_parameters = ['user_from', 'user_to']
    if not all(x in body for x in required_parameters):
        return jsonify(match=False), 202

    # Check like existence.
    like = db_session().query(Like).filter_by(user_from=body['user_from'], user_to=body['user_to']).first()
    if like:
        return jsonify(match=False), 202

    # Create and add like to the database.
    like = Like(
        id=str(uuid.uuid4()),
        user_from=body['user_from'],
        user_to=body['user_to']
    )
    db_session().add(like)
    db_session().commit()

    # Check if there is a match.
    like = db_session().query(Like).filter_by(user_to=body['user_from'], user_from=body['user_to']).first()
    if not like:
        return jsonify(match=False), 201
    else:
        # Initialize user student and teacher.
        user_destination = db_session().query(User).filter_by(username=body['user_from']).first()
        user_origin = db_session().query(User).filter_by(username=body['user_to']).first()
        if user_destination.account_type == 'Student':
            user_student = user_destination.username
            user_teacher = user_origin.username
        else:
            user_student = user_origin.username
            user_teacher = user_destination.username

        # Initialize project identifier.
        project_student = db_session().query(Project).filter_by(project_username=user_student).first()
        project_teacher = db_session().query(Project).filter_by(project_username=user_teacher).first()
        project_id = None
        if project_student and not project_teacher:
            project_id = project_student.id
        elif not project_student and project_teacher:
            project_id = project_teacher.id
        elif project_student and project_teacher:
            project_id = project_teacher.id

        # Create and add match to the database.
        match = Match(
            id=str(uuid.uuid4()),
            user_student=user_student,
            user_teacher=user_teacher,
            project_id=project_id,
            specialization=user_origin.specialization,
            status='PENDING'
        )
        db_session().add(match)
        db_session().commit()

        # Return result.
        return jsonify(match=True), 201
