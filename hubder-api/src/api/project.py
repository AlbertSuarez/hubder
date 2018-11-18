import uuid

from flask import request, jsonify

from src.model.project import Project
from src.db.sqlachemy import db_session
from src.hubder import flask_app
from src.model.user import User


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


@flask_app.route('/project', methods=['POST'])
def project_post():
    """
    Create a project given some parameters.
    :return: Project created.
    """
    # Retrieve request body.
    body = request.json

    # Check parameters.
    required_parameters = ['title', 'description', 'tags', 'project_username']
    if not all(x in body for x in required_parameters):
        return jsonify(success=False), 202

    # Check user existence
    user = db_session().query(User).filter_by(username=body['project_username']).first()
    if not user:
        return jsonify(success=False), 202

    # Check project existence
    project = db_session().query(Project).filter_by(project_username=body['project_username']).first()
    if project:
        return jsonify(success=False), 202

    # Create and add project to the database.
    project = Project(
        id=str(uuid.uuid4()),
        title=body['title'],
        description=body['description'],
        tags=body['tags'],
        project_username=body['project_username']
    )
    db_session().add(project)
    db_session().commit()

    # Return result.
    return jsonify(success=True), 201
