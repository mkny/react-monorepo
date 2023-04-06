FROM node:16 AS builder

WORKDIR /app

ARG BUILD_PATH
ARG BUILD_SCOPE

COPY . .

ENV CI=true \
    GENERATE_SOURCEMAP=false

RUN npm install &&\
    npm run libs:build &&\
    npx lerna run build --scope=${BUILD_SCOPE}


FROM nginx:alpine AS publisher

ARG BUILD_PATH

COPY --from=builder ${BUILD_PATH} /usr/share/nginx/html

COPY --from=builder /app/packages/internal/docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
