FROM node:20.9.0
WORKDIR /src/app/fe-short-url

COPY package*.json ./
COPY package-lock.json ./
COPY yarn.lock ./

# ENV BE
ENV baseUrl=

RUN yarn
COPY . .
EXPOSE 3000
CMD [ "yarn", "start" ]