from sqlalchemy import create_engine, MetaData
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import scoped_session, sessionmaker

from src import *
from src.util import log


def connect(user, password, database, host, port):
    """
    Returns a DB connection and a metadata object.
    :param user: DB user.
    :param password: DB password.
    :param database: DB database.
    :param host: DB host.
    :param port: DB port.
    """
    # postgresql://user:password@host:port/db
    url_string = 'postgresql://{}:{}@{}:{}/{}'
    url = url_string.format(user, password, host, port, database)
    log.debug('DB URL: ' + url_string.format(user, 'REDACTED', host, port, database))

    # create the connection object
    _engine = create_engine(url, client_encoding='utf8')

    # bind connection to create metadata object
    _meta = MetaData(bind=_engine, reflect=True)

    return _engine, _meta


# Connect to the database.
engine, meta = connect(HUBDER_DB_USER, HUBDER_DB_PASSWORD, HUBDER_DB_DB, HUBDER_DB_HOST, HUBDER_DB_PORT)
db_session = scoped_session(sessionmaker(bind=engine))

# Declare base.
Base = declarative_base()
Base.query = db_session.query_property()
