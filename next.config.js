/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {hostname: 'images.unsplash.com'},
      {hostname: 'aspiredev.in'}
    ],
  },
}

module.exports = nextConfig
