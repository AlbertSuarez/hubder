# Hubder

Project built in HackEPS 2018

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

```bash
TODO
```

# License

MIT © Hubder