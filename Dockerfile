FROM node:20-alpine

WORKDIR /usr/app
COPY index.js /usr/app/

CMD node index.js
