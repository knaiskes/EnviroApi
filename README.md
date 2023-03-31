# EnviroApi

EnviroApi is a simple API built with Node.js and JavaScript that retrieves
temperature and humidity data from the
[EnviroTrack](https://github.com/knaiskes/EnviroTrack) project.

# Getting Started

Clone the project

```
$ git clone git@github.com:knaiskes/EnviroApi.git
```

Start the project with docker-compose

```
$ cd EnviroApi/
$ docker-compose up
```

# Routes

| Route                      | HTTP Method | Description                                  |
|----------------------------|-------------|----------------------------------------------|
| /temperature               | GET         | Get a list of all temperature measurements   |
| /temperature/:id           | GET         | Get a specific temperature measurement by ID |
| /temperature/latest/record | GET         | Get the latest temperature measurement       |
| /humidity                  | GET         | GET a list of all humidity measurements      |
| /humidity/:id              | GET         | GET a specific humidity measurement by ID    |
| humidity/latest/record     | GET         | GET the latest humidity measurement          |
