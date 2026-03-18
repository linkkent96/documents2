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
FROM node:20-alpine AS runner

WORKDIR /app

# Install a simple static file server
RUN yarn global add serve

# Copy built site from builder stage
COPY --from=builder /app/build ./build

# Expose port
EXPOSE 3000

# Run the site
CMD ["serve", "-s", "build", "-l", "3000"]
