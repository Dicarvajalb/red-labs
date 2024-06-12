FROM node:hydrogen-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm i

COPY . /app

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]
