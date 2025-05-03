import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'applaws.com',
      },
    ],
  }
};

export default nextConfig;
