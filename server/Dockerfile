FROM node:14.16-alpine
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --production=true
COPY . .
EXPOSE 4995
CMD ["node", "build/index.js"]
USER node