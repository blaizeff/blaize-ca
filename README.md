# Blaize.ca - My Portfolio Website

A responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design optimized for all devices
- SEO optimization with meta tags and structured data
- TypeScript
- Tailwind CSS
- Accessible design with ARIA labels

## Tech Stack

- **Framework**: Next.js 13+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Tabler Icons
- **Animations**: Framer Motion

## Deployment

This project uses a GitHub Action to automatically build a Docker image and publish it to Docker Hub whenever changes are pushed to the `main` branch. 

The production environment, served via AWS CloudFront, is configured to pull the latest Docker image from Docker Hub. This setup ensures that deployments to the `main` branch are automatically built and deployed to production with no manual intervention required.

## License

MIT
