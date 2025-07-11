FROM node:22.14.0 AS build

WORKDIR /app

COPY package.json .
 
RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.28.0-alpine AS prod

RUN apk update && apk upgrade

COPY --from=build /app/dist /usr/share/nginx/html/manual-deploy

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]