import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  assetPrefix: "./",
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
