import type { NextConfig } from 'next'

// const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'via.placeholder.com',
//       },
//       {
//         protocol: 'https',
//         hostname: 'images.unsplash.com',
//       },
//     ],
//   },
//   // Enable strict mode for better development experience
//   reactStrictMode: true,
// }

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/prince' : '',
  assetPrefix: isProd ? '/prince/' : '',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
}

export default nextConfig
