# Step 1: Build the React app
FROM node:16 AS build

WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . ./

# Build the React app for production
RUN npm run build

# Step 2: Serve the React app with Nginx
FROM nginx:alpine

# Copy the build files from the build stage to Nginx's web directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 (default HTTP port)
EXPOSE 3000

# Run Nginx to serve the app
CMD ["nginx", "-g", "daemon off;"]
