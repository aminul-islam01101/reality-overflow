FROM node:21-alpine
WORKDIR /app
COPY package.json .
RUN yarn
COPY . .
EXPOSE 3000
RUN ["chmod", "+x", "./entrypoint.sh"]
ENTRYPOINT ["sh", "./entrypoint.sh"]
