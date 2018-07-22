# Our node image to build from
FROM node:8

# App directory
WORKDIR /usr/src/app

COPY package*.json ./

# Lets install those dependencies
RUN npm install

# We need these globals
RUN npm install webpack -g
RUN npm install webpack-cli -g

COPY  . .

# Build frontend assets
RUN cd /usr/src/app
RUN webpack --build

# Expose our drone app on port 8080
# expose socket service on port 8090
EXPOSE 8080
EXPOSE 8090

# Last but not least, define the command to run the app
CMD ["npm", "start"]