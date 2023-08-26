FROM node:14-slim

WORKDIR /user/src/app 

COPY ./package.json ./

# COPY ./yarn.lock ./

RUN npm install 

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]