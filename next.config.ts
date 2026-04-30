import type { NextConfig } from "next";

const isGithubPages = process.env.DEPLOY_TARGET === "github";
const repoBase = "/Portfolio";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isGithubPages ? repoBase : "",
  assetPrefix: isGithubPages ? `${repoBase}/` : "",
};

export default nextConfig;
