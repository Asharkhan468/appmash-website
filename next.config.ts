import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizeCss: false // Disables CSS optimization including PurgeCSS
  }
};

export default nextConfig;
