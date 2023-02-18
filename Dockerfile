# Use the official Node.js image as the base image
FROM node:14-alpine

# Create a working directory for the application
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install --production

# Copy the rest of the application files to the working directory
COPY . .

RUN npm test

# Build the TypeScript source code to JavaScript
RUN npm run build

# Expose the port that the application listens on
EXPOSE 8080

# Start the application
CMD [ "npm", "start" ]