# Use official Node.js image as the base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first to leverage caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

ARG NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_IMAGES_STORAGE_URL

ENV NEXT_PUBLIC_API_URL ${NEXT_PUBLIC_API_URL}
ENV NEXT_PUBLIC_IMAGES_STORAGE_URL ${NEXT_PUBLIC_IMAGES_STORAGE_URL}

# Build the Next.js app
RUN npm run build

# Set environment variables
ENV NODE_ENV production
ENV PORT 3000

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "run", "start"]
