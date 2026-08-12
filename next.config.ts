import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // A stray lockfile in the home dir made Next infer that as the workspace
  // root. Pin tracing to this project so the build stops warning.
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
