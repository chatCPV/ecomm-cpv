FROM node:18
WORKDIR /app/transactions
COPY package*.json ./
RUN npm config set strict-ssl=false
RUN npm install
EXPOSE 8003
COPY . .
ENTRYPOINT npm start