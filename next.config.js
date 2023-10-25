/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/ecosystem",
  reactStrictMode: true,
  env: {
    API: process.env.API
  }
}

module.exports = nextConfig
