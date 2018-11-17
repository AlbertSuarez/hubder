from flask import request, jsonify

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
