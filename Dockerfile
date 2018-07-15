# Our node image to build from
FROM node:8

# App directory
WORKDIR /usr/src/app

COPY package*.json ./

# Lets install those dependencies
RUN npm install

# We need this node global
RUN npm install webpack-cli -g

# Build frontend assets
RUN webpack --build

COPY  . .

# Expose our drone app on port 8080
EXPOSE 8080

# Last but not least, define the command to run the app
CMD ["npm", "start"]