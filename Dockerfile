FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5000

COPY entrypoint.sh /entrypoint.sh

CMD [ "npm", "run", "start:prod" ]