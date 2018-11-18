from flask import request, jsonify
from sqlalchemy import or_, and_

from src.model.like import Like
from src.model.project import Project
from src.model.user import User
from src.db.sqlachemy import db_session
from src.hubder import flask_app


@flask_app.route('/user', methods=['GET'])
def user_get():
    """
    Retrieve user information given an identifier.
    :return: User information.
    """
    # Retrieve query parameters
    username = request.args.get('username')

    # Query into user database
    user = db_session().query(User).filter_by(username=username).first()
    if user:
        return jsonify(user=user.serialize()), 200
    else:
        return jsonify(user=None), 200


@flask_app.route('/user', methods=['POST'])
def user_post():
    """
    Create a user given some parameters.
    :return: User created.
    """
    # Retrieve request body.
    body = request.json

    # Check parameters.
    required_parameters = ['username', 'first_name', 'last_name', 'account_type', 'specialization', 'email', 'password']
    if not all(x in body for x in required_parameters):
        return jsonify(success=False), 202

    # Check user existence
    user = db_session().query(User).filter_by(username=body['username']).first()
    if user:
        return jsonify(success=False), 202

    # Create and add user to the database.
    user = User(
        username=body['username'],
        first_name=body['first_name'],
        last_name=body['last_name'],
        account_type=body['account_type'],
        specialization=body['specialization'],
        email=body['email'],
        password=body['password']
    )
    db_session().add(user)
    db_session().commit()

    # Return result.
    return jsonify(success=True), 201


@flask_app.route('/user', methods=['PUT'])
def user_put():
    """
    Update a user given some parameters.
    :return: User updated.
    """
    # Retrieve request body.
    body = request.json

    # Check parameters.
    required_parameters = ['username']
    if not all(x in body for x in required_parameters):
        return jsonify(success=False), 202

    # Check user existence.
    user = db_session().query(User).filter_by(username=body['username']).first()
    if not user:
        return jsonify(success=False), 201

    # Set parameters.
    user.first_name = user.first_name if 'first_name' not in body else body['first_name']
    user.last_name = user.last_name if 'last_name' not in body else body['last_name']
    user.account_type = user.account_type if 'account_type' not in body else body['account_type']
    user.specialization = user.specialization if 'specialization' not in body else body['specialization']
    user.email = user.email if 'email' not in body else body['email']
    user.description = user.description if 'description' not in body else body['description']

    # Save updates.
    db_session().commit()

    # Return result.
    return jsonify(success=True), 200


@flask_app.route('/user/login', methods=['POST'])
def user_login():
    # Retrieve request body.
    body = request.json

    # Check parameters.
    required_parameters = ['username', 'password']
    if not all(x in body for x in required_parameters):
        return jsonify(success=False), 202

    # Check user existence.
    user = db_session().query(User).filter_by(username=body['username']).first()
    if not user:
        return jsonify(success=False), 202

    # Check password.
    if user.password == body['password']:
        return jsonify(success=True), 200
    else:
        return jsonify(success=False), 202


@flask_app.route('/user/cards', methods=['GET'])
def user_cards():
    """
    Retrieve cards given a username.
    :return: List of cards.
    """
    # Retrieve query parameters.
    username = request.args.get('username')

    # Query into user database.
    user = db_session().query(User).filter_by(username=username).first()
    if not user:
        return jsonify(cards=[]), 200

    # Retrieve target users.
    cards = []
    if user.account_type == 'Student':
        user_list = db_session().query(User).filter(and_(or_(
            User.account_type == 'Teacher', User.account_type == 'Coordinator'
        ), User.specialization == user.specialization)).all()
    else:
        user_list = db_session().query(User).filter(and_(
            User.account_type == 'Student', User.specialization == user.specialization
        )).all()

    # Prepare response.
    for user_item in user_list:
        like = db_session().query(Like).filter_by(user_from=username, user_to=user_item.username).first()
        if not like:
            project = db_session().query(Project).filter_by(project_username=user_item.username).first()
            description = user_item.description if not project else project.description
            tags = None if not project else project.tags
            title = None if not project else project.title
            cards.append(dict(
                username=user_item.username,
                first_name=user_item.first_name,
                last_name=user_item.last_name,
                specialization=user_item.specialization,
                description=description,
                project_tags=tags,
                project_title=title
            ))

    # Return cards
    return jsonify(cards=cards), 200
