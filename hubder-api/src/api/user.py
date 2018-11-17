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
        return jsonify(user.serialize()), 200
    else:
        return jsonify(message='No user with {} as username'.format(username)), 202
