/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add these lines
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: __dirname,
  },
}

module.exports = nextConfig