FROM node:14-slim
WORKDIR /usr/src/app/

RUN apt-get update && apt-get install -y iputils-ping curl

COPY /public ./public
COPY ./.build/service.js ./

ENV NODE_ENV=development
ENV PUBLIC_PATH=/usr/src/app/public

CMD [ "node", "./service.js"]