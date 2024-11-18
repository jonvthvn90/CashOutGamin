#!/bin/bash

# Set the deployment directory
DEPLOY_DIR=/var/www/mywebsite

# Set the Git repository URL
GIT_REPO_URL=https://github.com/myusername/mywebsite.git

# Clone the Git repository
git clone $GIT_REPO_URL $DEPLOY_DIR

# Change into the deployment directory
cd $DEPLOY_DIR

# Install dependencies
npm install

# Build the website
npm run build

# Start the website
npm start

# Build Docker images
docker build -t my-app .

# Push Docker images to Docker Hub
docker tag my-app:latest my-username/my-app:latest
docker push my-username/my-app:latest

# Deploy to Kubernetes
kubectl apply -f kubernetes.yaml