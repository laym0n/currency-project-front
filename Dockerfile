FROM node:21.5.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . ./

RUN npm run generate-back-api

CMD ["npm", "start"]