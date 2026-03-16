import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Output as static site for Netlify (can switch to "standalone" for SSR)
  output: "export",

  // Allow trailing slashes for cleaner Netlify URLs
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
