/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.genspark.ai'],
    unoptimized: true
  },
  output: 'standalone'
}

module.exports = nextConfig
