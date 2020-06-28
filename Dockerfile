FROM node:current-slim

WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
RUN npm audit fix --force

CMD ["npm", "start"]

COPY . .