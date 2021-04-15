FROM node:13.8-alpine

RUN mkdir -p /home/node/app/node_modules

ARG PORT
ARG NODE_ENV
ARG POSTGRES_DB
ARG POSTGRES_HOST
ARG POSTGRES_PASSWORD
ARG POSTGRES_PORT
ARG POSTGRES_USER

ENV NODE_ENV=$NODE_ENV

WORKDIR /home/node/app

RUN apk update && apk add bash make g++
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools
RUN npm install -g typeorm @nestjs/cli @nestjs/core node-gyp --silent
COPY package.json yarn.lock ./
RUN yarn

COPY . .

RUN chown -R node:node /home/node/app

USER node

EXPOSE $PORT

CMD [ "yarn", "start:dev" ]
