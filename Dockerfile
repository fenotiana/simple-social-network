# Specifying base image
FROM node:alpine

# Setting workdir
WORKDIR /usr/src/app

# Copy only package.json to the workdir
COPY package.json .

# Running npm install 
RUN npm install

# Copying all project to the WORKDIR
COPY . .

# Start up command
CMD ["npm", "start"]