FROM node 

WORKDIR /usr/src/app 

COPY package*.json  ./

EXPOSE 3000

CMD [ "npm","start" ]



