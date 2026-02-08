# Deployment Guide

This guide covers how to build and deploy the Polkadot Educational Dashboard.

## Prerequisites
- Node.js 18+
- Docker (optional, for containerized deployment)

## Build for Production

To create a production build:

```bash
npm run build
```

This will generate a `dist` directory containing the compiled static assets. These files can be served by any static file server (Nginx, Apache, Vercel, Netlify).

## Docker Deployment

We provide a multi-stage Dockerfile for optimized production builds.

### 1. Build the Image

```bash
docker build -t polkadot-edu-dashboard .
```

### 2. Run the Container

```bash
docker run -p 80:80 polkadot-edu-dashboard
```

The application will be accessible at `http://localhost`.

## CI/CD Pipeline

The project includes a GitHub Actions workflow (`.github/workflows/ci.yml`) that automatically:
1. Installs dependencies
2. Runs linting checks
3. Runs unit tests
4. Builds the application

This ensures that every commit is verified before being merged or deployed.

## Environment Variables

Currently, the application connects to the public Polkadot RPC endpoint by default.
To configure a custom endpoint, you can set the `VITE_POLKADOT_RPC_ENDPOINT` environment variable in a `.env` file:

```
VITE_POLKADOT_RPC_ENDPOINT=wss://rpc.polkadot.io
```
