from flask import request, jsonify

from src.model.like import Like
from src.db.sqlachemy import db_session
from src.hubder import flask_app


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
    match = db_session().query(Like).filter_by(user_from=user_from, user_to=user_to).first()
    return jsonify(match=bool(match)), 200
