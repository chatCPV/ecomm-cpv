FROM node:18
WORKDIR /app/transactions
COPY package*.json .
RUN npm install
EXPOSE 8003
COPY . .
ENTRYPOINT npm start