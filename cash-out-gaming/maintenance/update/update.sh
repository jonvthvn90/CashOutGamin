#!/bin/bash

# Set the application directory
APP_DIR=/path/to/app

# Set the dependency directories
DEPENDENCY_DIR=/path/to/dependencies

# Update the application
cd "$APP_DIR" && git pull

# Update the dependencies
cd "$DEPENDENCY_DIR" && npm install