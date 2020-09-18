FROM node:12

WORKDIR /usr/src/christmas

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5050

CMD [ "node", "main.js" ]