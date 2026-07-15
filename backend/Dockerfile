FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:18-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production

COPY package.json package-lock.json ./
RUN npm ci --only=production

COPY --from=builder /app/dist ./dist
# Ensure fallback db directories can be initialized
RUN mkdir -p data

EXPOSE 5000

ENV PORT=5000

CMD ["node", "dist/server.js"]
