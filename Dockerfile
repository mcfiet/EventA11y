# Use official Node.js LTS image
FROM node:18-alpine AS base

# Set working directory
WORKDIR /app

# Install dependencies only when needed
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy rest of the project files
COPY . .

# Build the Next.js app
RUN yarn build

# Use a lighter image to serve the built app
FROM node:18-alpine AS runner

WORKDIR /app

# Install only production dependencies
COPY --from=base /app/node_modules ./node_modules

# Copy built application and static files
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public
COPY --from=base /app/package.json ./package.json

# Set environment variable to tell Next.js we're in production
ENV NODE_ENV production

# Expose port
EXPOSE 3000

# Start the Next.js production server
CMD ["yarn", "start"]
