FROM node:22-slim

RUN corepack enable

WORKDIR /srv/node

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .
