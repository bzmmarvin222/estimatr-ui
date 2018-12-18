FROM nginx:alpine

EXPOSE 4200

COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY dist/estimatr-ui/ /usr/share/nginx/html
