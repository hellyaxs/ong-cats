FROM node:21.5.0 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:latest

COPY --from=build .next/server/app /usr/share/nginx/html

EXPOSE 80