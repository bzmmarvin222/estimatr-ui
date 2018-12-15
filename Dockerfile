FROM nginx:alpine

EXPOSE 8080

COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY dist/estimatr-ui/ /usr/share/nginx/html
