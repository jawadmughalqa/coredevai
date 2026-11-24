import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import path from "path";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  turbopack: {
    // Pin the workspace root to this project directory so Turbopack never infers a parent folder.
    root: path.resolve(__dirname),
  },
  async redirects() {
    // The old software-house posts and the portfolio page moved; keep their links alive.
    const oldPosts = [
      "nextjs-app-router-best-practices",
      "fastapi-vs-express-comparison",
      "react-native-performance-tips",
      "building-saas-with-nextjs-stripe",
      "github-actions-cicd-guide",
      "ai-features-saas-openai",
    ];
    return [
      { source: "/portfolio", destination: "/work", permanent: true },
      ...oldPosts.map((slug) => ({ source: `/blog/${slug}`, destination: "/blog", permanent: true })),
    ];
  },
};

const withMDX = createMDX({ options: { remarkPlugins: ["remark-gfm"] } });

export default withMDX(nextConfig);
