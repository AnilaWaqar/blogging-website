// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// module.exports = {
//   reactStrictMode: true,
//   images: {
//     domains: [
//       'media.licdn.com', 
//       'encrypted-tbn0.gstatic.com', 
//       'ppfonmycar.co.uk', 
//       'drivingenthusiast.com.au'
//     ], // Add all required domains here
//   },
// };
// eslint: {
//   ignoreDuringBuilds: true,
// },

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'media.licdn.com',
      'encrypted-tbn0.gstatic.com',
      'ppfonmycar.co.uk',
      'drivingenthusiast.com.au',
    ], // Add all required domains here
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint during builds
  },
};

module.exports = nextConfig;



