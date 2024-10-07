# node version 18.16.0
ARG NODE_VERSION=18.16.0

# start image with a node base image
FROM node:${NODE_VERSION}-alpine

# use production node environment by default.
ENV NODE_ENV production

# directory should act as the main application directory
WORKDIR /usr/src/app

# Copy application files to the working directory
COPY . .

# install production dependencies using npm with caching for faster builds.
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev


# Run the application as a non-root user.
USER node

# Expose the port that the application listens on.
EXPOSE 8080

# Run the application.
CMD node index.js