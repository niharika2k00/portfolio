import type { NextConfig } from "next";

const isGithubPages = process.env.DEPLOY_TARGET === "github";
const repoBase = "/portfolio";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  devIndicators: false,
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isGithubPages ? repoBase : "",
  assetPrefix: isGithubPages ? `${repoBase}/` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? repoBase : "",
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
