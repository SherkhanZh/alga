import type { NextConfig } from "next";

/**
 * Two build modes:
 *  - default (`npm run build`): full Next.js app for your own server.
 *  - GitHub Pages (`npm run build:pages`): static export under /<repo> base path.
 */
const isPages = process.env.GITHUB_PAGES === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const turbopack: NextConfig["turbopack"] = {
  rules: {
    "*.css": {
      loaders: ["@tailwindcss/turbopack"],
      as: "*.css",
    },
  },
};

const nextConfig: NextConfig = isPages
  ? {
      output: "export",
      basePath,
      trailingSlash: true,
      images: { unoptimized: true },
      turbopack,
    }
  : {
      cacheComponents: true,
      partialPrefetching: true,
      turbopack,
    };

export default nextConfig;
