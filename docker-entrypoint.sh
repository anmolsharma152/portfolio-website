#!/bin/sh
set -e

# Function to check if MongoDB is ready
wait_for_mongo() {
  echo "Waiting for MongoDB to be ready..."
  until mongosh --host mongo --eval "print('MongoDB is ready')" >/dev/null 2>&1; do
    echo "MongoDB is not ready yet. Retrying in 5 seconds..."
    sleep 5
  done
  echo "MongoDB is ready!"
}

# Function to check if the application is ready
wait_for_app() {
  echo "Waiting for the application to be ready..."
  until curl -s http://localhost:3000/api/health >/dev/null 2>&1; do
    echo "Application is not ready yet. Retrying in 5 seconds..."
    sleep 5
  done
  echo "Application is ready!"
}

# Execute the main command
if [ "$1" = 'dev' ]; then
  # Development mode
  echo "Starting in development mode..."
  npm install
  wait_for_mongo
  npm run dev
elif [ "$1" = 'prod' ]; then
  # Production mode
  echo "Starting in production mode..."
  wait_for_mongo
  npm run build
  npm run start
else
  # Default command
  exec "$@"
fi
