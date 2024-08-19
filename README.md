# # React + Vite + Docker

This is a React application containerized using Docker. This guide will walk you through the steps to build and run the app in a Docker container.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Docker**: [Download and install Docker](https://www.docker.com/get-started)

## Getting Started

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone <repository-url>
cd <repository-directory>
```

### 2. Build the Docker Image

Build the Docker image using the Dockerfile provided:

```bash
docker build -t news-app .
```

### 3. Run the Docker Container

Run the Docker container:

```bash
docker run -p 3000:80 news-app
```

### 4. Access the Application

Open your browser and go to:

http://localhost:3000

# Dockerfile

### Build stage

FROM node:18 AS build

WORKDIR /usr/src/app

COPY package\*.json ./
RUN npm install

COPY . .
RUN npm run build

### Production stage

FROM nginx:alpine

COPY --from=build /usr/src/app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
