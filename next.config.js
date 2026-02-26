/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/who-we-are',
        permanent: true
      },
      {
        source: '/about/',
        destination: '/who-we-are/',
        permanent: true
      },
      {
        source: '/process',
        destination: '/services',
        permanent: true
      },
      {
        source: '/process/',
        destination: '/services/',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
