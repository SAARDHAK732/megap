# Use official Node image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all files
COPY . .

# Build the React app
RUN npm run build

# Install a simple web server to serve the build folder
RUN npm install -g serve

# Start the server on port 3000
CMD ["serve", "-s", "build", "-l", "3000"]
