# base image
FROM node:12.18.3-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install @vue/cli@4.4.6 -g --silent
COPY . .

# start app
CMD ["npm", "run", "serve"]