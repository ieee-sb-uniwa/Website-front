# Use official Node.js image as the base image
FROM node:20-alpine AS base

# Set working directory
WORKDIR /app

FROM base AS deps

# Copy package.json and package-lock.json first to leverage caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

FROM deps AS dev

# Copy the rest of the application
COPY . .

# Set environment variables
ENV NODE_ENV=development
ENV PORT=3000

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js dev server
CMD ["npm", "run", "dev", "--", "--hostname", "0.0.0.0", "--port", "3000"]

FROM deps AS builder

# Copy the rest of the application
COPY . .

ARG NEXT_PUBLIC_IMAGES_STORAGE_URL

ENV NEXT_PUBLIC_IMAGES_STORAGE_URL=${NEXT_PUBLIC_IMAGES_STORAGE_URL}

# Build the Next.js app
RUN npm run build

FROM base AS runner

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Install production dependencies
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copy build output
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "run", "start"]
