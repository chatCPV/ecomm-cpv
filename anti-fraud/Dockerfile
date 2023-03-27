FROM node:18
WORKDIR /app/anti-fraud
COPY package*.json .
RUN npm config set strict-ssl=false
RUN npm install
EXPOSE 8002
COPY . .
ENTRYPOINT npm start