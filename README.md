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

## EndPoints

- `GET /products` - Get all Products from Products API
- `GET /carts/:id` - Get a Cart by Id from Carts API
- `POST /carts/insertCart` - Post a new Cart into Carts Api
```json
// Body
{
  "userId": 0,
  "products": [{
    "productId": 0,
    "price": 0,
    "quantity": 0
  }]
}
```
- `POST /carts/insertProduct` - Post a new Product by Carts into Cart Api
```json
// Body
{
  "productId": 0,
  "price": 0,
  "quantity": 0,
  "cart": 0,
}
```
- `DELETE /carts/deleteProduct` - Delete a Product by Carts into Cart Api
```json
// Body
{
  "productId": 0,
  "cart": 0,
}
```
