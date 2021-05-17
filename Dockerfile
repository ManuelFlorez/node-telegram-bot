FROM node:14.16-alpine3.10

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

ENV BOT_TOKEN=

#EXPOSE 3000

CMD [ "node", "index.js" ]

#docker build -t manuelflorezw/node-telegram-bot .
#docker run --name node-telegram-bot --env BOT_TOKEN=1677956681:AAH2ZOql73ZX91UoD0xNZRm6XjwSjUQ6D1c -d manuelflorezw/node-telegram-bot
