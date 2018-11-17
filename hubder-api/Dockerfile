FROM python:3.6
ADD . /srv/hubder
WORKDIR /srv/hubder
RUN pip3 install -r requirements.txt
CMD uwsgi --ini hubder.ini