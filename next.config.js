/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  pageExtensions: ['js', 'jsx', 'mdx'],
  basePath: isProd ? '/blog/' : '',
  assetPrefix: isProd ? '/blog/' : ''
}

module.exports = nextConfig
