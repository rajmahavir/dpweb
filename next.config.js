/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/dpweb',
  assetPrefix: '/dpweb/',
}

module.exports = nextConfig
