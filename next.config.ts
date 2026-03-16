import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Netlify handles routing — trailingSlash keeps URLs consistent
  trailingSlash: true,

  // Image optimization — disabled for static export (use next/image with unoptimized)
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },

  // Strict mode for better dev experience
  reactStrictMode: true,

  // Compiler options
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Security headers are handled in netlify.toml for static export
};

export default nextConfig;
