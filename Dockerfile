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
