FROM nginx:alpine
COPY pub /usr/share/nginx/html
VOLUME /usr/share/nginx/html
VOLUME /etc/nginx 
