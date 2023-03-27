FROM node:18
WORKDIR /app/anti-fraud
COPY package*.json .
RUN npm install
EXPOSE 8002
COPY . .
ENTRYPOINT npm start