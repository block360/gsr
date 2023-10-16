FROM node:18.17

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app
COPY package*.json /usr/src/app/

RUN yarn
RUN yarn build  

COPY ./.env /usr/src/app/
COPY ./ /usr/src/app/

CMD ["yarn", "start"]
# FROM node:16-alpine
# RUN mkdir -p /app
# WORKDIR /app
# COPY . .
# RUN yarn
# RUN yarn build
# EXPOSE 3000
# CMD ["npm", "start"]