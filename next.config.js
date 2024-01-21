/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    baseUrl: process.env.BASEURL
  }
}

module.exports = nextConfig
