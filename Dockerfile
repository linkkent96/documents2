# Use official Node.js LTS image
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy dependency manifests first (for better caching)
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the project
COPY . .

# Build the static site
RUN yarn build

# ------------------------------
# Production image
# ------------------------------
FROM nginx:alpine AS runner

WORKDIR /app

# Create non-root user for security
RUN addgroup -g 1001 -S www-data && \
    adduser -S nginx-user -u 1001 -G www-data

# Copy nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built site from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Change ownership to non-root user
RUN chown -R nginx-user:www-data /usr/share/nginx/html && \
    chown -R nginx-user:www-data /var/cache/nginx && \
    chown -R nginx-user:www-data /var/log/nginx && \
    chown -R nginx-user:www-data /etc/nginx/conf.d

# Switch to non-root user
USER nginx-user

# Expose port
EXPOSE 3000

# Run nginx
CMD ["nginx", "-g", "daemon off;"]