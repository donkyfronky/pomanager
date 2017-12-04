FROM node:9.2.0

RUN mkdir -p /usr/src/app && mkdir -p /var/run/notifiche && mkdir -p /var/log/notifiche
RUN chmod -R 777 /var/run/notifiche /var/log/notifiche
WORKDIR /usr/src/app

#ADD /var/www/test/notifiche/src/package.json /usr/src/app/package.json
RUN npm install -g pm2

#VOLUME /usr/src/app
EXPOSE 9080

CMD [ "npm", "start" ]
