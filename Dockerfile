FROM node

WORKDIR /app

COPY package.json /app

RUN npm ci

COPY . .

EXPOSE 3052

CMD ["node", "run", "start"]