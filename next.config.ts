import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static site: `next build` writes plain HTML/CSS/JS to out/. No server features.
  output: "export",
  images: { unoptimized: true },
  experimental: {
    agentFeedback: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
