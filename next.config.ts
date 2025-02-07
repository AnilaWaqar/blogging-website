import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'media.licdn.com', 
      'encrypted-tbn0.gstatic.com', 
      'ppfonmycar.co.uk', 
      'drivingenthusiast.com.au'
    ], // Add all required domains here
  },
};