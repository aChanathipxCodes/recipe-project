FROM nginx:1.27.4-alpine-slim

RUN apk update && apk upgrade && rm -rf /var/cache/apk/*

COPY . /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf && \
    echo 'server { \
        listen 80; \
        root /usr/share/nginx/html; \
        index index.html; \
        location / { \
            try_files $uri $uri/ =404; \
        } \
    }' > /etc/nginx/conf.d/default.conf
