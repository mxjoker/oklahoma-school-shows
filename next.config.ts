import type { NextConfig } from "next";
import createMDX from "@next/mdx";

// @next/mdx in Next 16 works best with no extra remark/rehype options
// passed via the withMDX wrapper (serialization issues). We apply
// remark-gfm via the mdx-components.tsx file instead.
const withMDX = createMDX({});

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "static.wixstatic.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
    ],
  },
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default withMDX(nextConfig);
