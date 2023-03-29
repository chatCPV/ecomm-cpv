FROM node:18
WORKDIR /app/accounts
COPY package*.json ./
RUN npm config set strict-ssl=false
RUN npm install
EXPOSE 8001
COPY . .
ENTRYPOINT npm start