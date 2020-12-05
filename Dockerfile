FROM node:12 as builder
WORKDIR /app

COPY . .
RUN yarn install
RUN yarn run build

FROM nginx:mainline-alpine
COPY ./nginx-http.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/build /usr/share/nginx/html
