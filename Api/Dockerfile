FROM node:20.12.0-alpine

# create app directory
WORKDIR "/usr/app"

# install app dependencies

COPY package*.json ./

RUN npm install

# bundle app source
COPY . .

# expose port and start application
EXPOSE 7777

# start app 
CMD ["npm", "start"]

