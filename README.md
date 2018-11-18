# Hubder

Project built in HackEPS 2018

## Project description

### Inspiration

Following the idea that the Escola Politècnica Superior gave us at the beginning of this hackathon, we wanted to revolutionize the concept of finding a professor for doing a final thesis. Students are a young group, which its own routine. So, what could be better that adapts this problem to their day-to-day?

### What it does?

Our web app is used for finding professors and students in order to do the final project for their degree. For making this easier for the students, we have decorated Hubder with the same concept as Tinder. Because yeah, professors are looking for students and students are looking for professors. Like Tinder, right?

This web app allows you to register and log in as a student, professor or coordinator. Once inside the application, you can edit your profile adding a project proposal, list a batch of professors or students for swiping left or right and finally you have the possibility to list all of your matches.

### How we built it

This project is independently separated into two modules: frontend and backend.

- Frontend: Everything has been made with React. We wanted to ensure that everything was intuitive, responsive and (of course) beautiful. It can be seen in the photos how the interface is.
- Backend: We used Python as a language for this module. With the help of Flask, we've built a RESTFull API as an endpoint for the frontend. This API is connecting with a PostgreSQL database, dockerized for making this easier, building a stack for managing all this application.

### Challenges we ran into

When we started hacking, we had a lot of ideas that hasn't been able to be made reality. But time is limited and we couldn't achieve all the features that we wanted for this project.

### Accomplishments that we're proud of

Nevertheless, we are really proud of the results we had. Everyone on the team has worked with technologies that never had experience of. We also are proud of being capable of working with a good team cooperation, parallelizing tasks and being efficient in helping each other when was necessary.

### What we learned

As it is said above, we all have had the opportunity to work with technologies that we never had used before. The use of React, SQLAlchemy and Flask has been a challenge that has made us learn a lot of concepts we didn't know. We've learned about how to organize projects like this one when we have a lot of languages, frameworks and different components without any incompatibilities.

### What's next for Hubder

We would like to improve the experience of this problem, making it easier for the user to find its goal.

## Requirements

- Python 3.6+
- Node v6
- docker-ce (as provided by docker package repos)
- docker-compose (as provided by PyPI)

## Run

via docker-compose

```bash
docker-compose up -d
```

You should initialize the database after running all the stack. For doing this please run the following commands:

```bash
docker run -it --rm --network hubder hubder_hubder-db psql -h hubder-db -U postgres postgres -f /tmp/create_api_ddl_base.sql
docker run -it --rm --network hubder hubder_hubder-db psql -h hubder-db -U   hubder   hubder -f /tmp/create_api_ddl_hubder.sql
```

or you can run easily the following script:

```bash
./start.sh
```

## Development

### API

#### Recommendations

Usage of [virtualenv](https://realpython.com/blog/python/python-virtual-environments-a-primer/) is recommended for package library / runtime isolation.

#### Usage

To run the server, please execute the following from the root directory:

1. Change directory to the API one

```bash
cd hubder-api/
```

2. Setup virtual environment

```bash
python3 -m venv env
source env/bin/activate
```

3. Install dependencies

```bash
pip3 install -r requirements.txt
```

4. Run Startup server
    
```bash
python3 -m src
```

or via docker-compose (from root folder)

```bash
docker-compose up -d hubder-api-app
```

### Client

#### Usage

In the project directory, you can run:

```bash
npm start
```

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


# License

MIT © Hubder