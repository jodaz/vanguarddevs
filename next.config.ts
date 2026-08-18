import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // A stray lockfile in the home dir made Next infer that as the workspace
  // root. Pin tracing to this project so the build stops warning.
  outputFileTracingRoot: __dirname,
  // app/global-not-found.tsx renders the 404 with its own <html>/<body>, so
  // the app can keep [lang]/layout.tsx as the only real root layout without
  // Next demanding an app/layout.tsx for the not-found boundary.
  experimental: { globalNotFound: true },
};

export default nextConfig;
