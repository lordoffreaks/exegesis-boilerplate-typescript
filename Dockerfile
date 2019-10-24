FROM node:13.0.1-alpine as node

FROM node as base
WORKDIR /usr/src/app/
COPY package*.json ./
RUN npm ci
COPY . .

FROM base as testing
CMD npm run test

FROM base as builder
RUN npm run build

FROM builder as thinner
RUN npm prune --production && \
	npm dedupe && \
	npm cache clean --force

FROM node as production
WORKDIR /usr/src/app/
COPY --from=thinner /usr/src/app/node_modules/ ./node_modules
COPY --from=builder /usr/src/app/dist/ ./dist
COPY --from=base /usr/src/app/package.json ./
EXPOSE 3000
USER node
CMD npm start
