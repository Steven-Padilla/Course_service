FROM node:18-alpine AS imageCourse

WORKDIR /app

COPY package*.json ./

RUN npm i

RUN mkdir dist/

COPY ./dist/ dist/