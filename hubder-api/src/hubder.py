from flask import Flask
from flask_cors import CORS


# Setup Flask app.
flask_app = Flask(__name__)
flask_app.config['JSON_AS_ASCII'] = False  # Needed for proper UTF-8 support.

# setup CORS
CORS(flask_app)

# Import a module / component using its handler.
# noinspection PyUnresolvedReferences
from .api import user, project, like, match


@flask_app.route('/health_check')
def health_check():
    """
    Flask endpoint for health checks.
    :return: Health checked.
    """
    return 'Hello world!', 200
