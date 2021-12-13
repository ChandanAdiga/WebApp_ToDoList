FROM node:14-alpine as build
WORKDIR /app
COPY . ./
RUN npm install
RUN npm run build

# CMD ["npm", "start"]

#serve using NGINX
FROM nginx:latest
COPY --from=build /app/dist/* /usr/share/nginx/html/
EXPOSE 80