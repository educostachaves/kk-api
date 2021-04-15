# KK API

## Description

[Nest](https://github.com/nestjs/nest) Kuanto Kusta Challenge. Small API for Agregation of Cart/Product Shopping APIs.

## Installation

- Better to run using docker:
```bash
$ docker-compose up
```

- For isolated services:
  - `docker-compose up app` For NestJs API
  - `docker-compose up cart` For NestJs Cart API
  - `docker-compose up product` For NestJs Product API

- For manage database:
  - `docker-compose up postgres` PostgreSQL
  - `docker-compose up pgadmin` PGAdmin
  - `docker-compose up mongo` MongoDb
  - `docker-compose up mongo-express` Mongo Express

## API Tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
