# Strapi v5 Dockerfile
FROM node:20-alpine

# Install dependencies for building native modules
RUN apk update && apk add --no-cache \
    build-base \
    gcc \
    autoconf \
    automake \
    zlib-dev \
    libpng-dev \
    nasm \
    bash \
    vips-dev

# Set working directory
WORKDIR /opt/app

# Set environment variables
ENV NODE_ENV=development

# Install Strapi globally
RUN yarn global add @strapi/strapi@latest

# Expose port
EXPOSE 1337

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
    CMD node -e "require('http').get('http://localhost:1337/_health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Start command (will be overridden by docker-compose)
CMD ["yarn", "develop"]
