# Our node image to build from
FROM node:8

# App directory
WORKDIR /usr/src/app

COPY package*.json ./

# Lets install those dependencies
RUN npm install

# Some node global that are required
RUN npm install webpack-cli -g

# Build frotnend asses
RUN webpack --build

COPY  . .

# Expose our drone app on port 8080
EXPOSE 8080

# Last but not least, define the command to run the app
CMD ["npm", "start"]