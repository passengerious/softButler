/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'logo.clearbit.com',
      },
    ],
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
