FROM node:20-alpine as build
WORKDIR /app

COPY package.json /app/
RUN yarn
COPY . /app

RUN yarn build

FROM nginx:stable-alpine
COPY --from=build /app/public /usr/share/nginx/html
COPY --from=build /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
