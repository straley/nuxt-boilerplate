FROM node:latest

WORKDIR /app

COPY src/package-lock.json package-lock.json
COPY src/package.json package.json
RUN npm ci --only=production

COPY src/assets assets
COPY src/components components
COPY src/dist dist
COPY src/layouts layouts
COPY src/lib lib
COPY src/middleware middleware
COPY src/nuxt nuxt
COPY src/pages pages
COPY src/plugins plugins
COPY src/server server
COPY src/static static
COPY src/store store
COPY src/nuxt.config.js nuxt.config.js

ENV PORT 8080
EXPOSE 8080

CMD ["npm", "run", "start"]
