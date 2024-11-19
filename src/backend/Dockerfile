# Use the Node.js image
FROM node:18

# Set the working directory
WORKDIR /

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the backend code
COPY . .

# Expose the backend port
EXPOSE 4444

# Run the backend
CMD ["npx", "ts-node", "app.ts"]