from flask import request, jsonify

from src.hubder import flask_app


@flask_app.route('/user', methods=['GET'])
def user_get():
    """
    Retrieve user information given an identifier.
    :return: User information.
    """
    # Retrieve query parameters
    user_id = request.args.get('id')

    # Return result
    return jsonify(user_id=user_id), 200
