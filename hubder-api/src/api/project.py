from flask import request, jsonify

from src.model.project import Project
from src.db.sqlachemy import db_session
from src.hubder import flask_app


@flask_app.route('/project_by_user', methods=['GET'])
def project_get_by_user():
    """
    Retrieve project information by user given its username.
    :return: Project information.
    """
    # Retrieve query parameters
    username = request.args.get('username')

    # Query into project database
    project = db_session().query(Project).filter_by(project_username=username).first()
    if project:
        return jsonify(project=project.serialize()), 200
    else:
        return jsonify(project=None), 200
