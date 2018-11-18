from flask import request, jsonify
from sqlalchemy import or_

from src.model.match import Match
from src.db.sqlachemy import db_session
from src.hubder import flask_app


@flask_app.route('/match_by_specialization', methods=['GET'])
def match_get_by_specialization():
    """
    Retrieve the matches by specialization.
    :return: List of matches.
    """
    # Retrieve query parameters
    specialization = request.args.get('specialization')

    # Query into match database
    match_list = db_session().query(Match).filter_by(specialization=specialization).all()
    if match_list:
        return jsonify(matches=[match.serialize() for match in match_list]), 200
    else:
        return jsonify(matches=[]), 200


@flask_app.route('/match_by_user', methods=['GET'])
def match_get_by_user():
    """
    Retrieve the matches by user.
    :return: List of matches.
    """
    # Retrieve query parameters
    username = request.args.get('username')

    # Query into match database
    match_list = db_session().query(Match).filter(or_(
        Match.user_student == username, Match.user_teacher == username
    )).all()
    if match_list:
        return jsonify(matches=[match.serialize() for match in match_list]), 200
    else:
        return jsonify(matches=[]), 200
