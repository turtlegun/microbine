
FROM node:22.9.0-slim AS build


WORKDIR /app

COPY package*.json ./


RUN npm install


COPY . .


EXPOSE 5173

# Step 7: Command to start the Node.js application
CMD ["npm", "run","dev"]
