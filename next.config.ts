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

const nextConfig = {
  output: 'export',
  basePath: '/prince',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
}

export default nextConfig
