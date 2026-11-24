import fs from "node:fs";
import path from "node:path";
import type { ComponentType } from "react";

export type PostMeta = {
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  updated?: string;
  category: string; // a slug from categories
  keywords?: string[];
  readTime: string;
  draft?: boolean;
};

export type Post = PostMeta & { slug: string };

export const categories: Record<string, { name: string; description: string }> = {
  "saas-launch-qa": { name: "SaaS launch QA", description: "Testing signup, login and payments before a SaaS launch." },
  "bug-reports": { name: "Bug reports", description: "How to find, write and sort bugs so developers fix them." },
  playwright: { name: "Playwright", description: "Playwright test automation, CI and flaky tests." },
  "api-testing": { name: "API testing", description: "Testing REST APIs with Postman and Newman." },
  "ai-testing": { name: "AI testing", description: "Testing chatbots, LLM features and AI automations." },
};

const DIR = path.join(process.cwd(), "src/content/blog");

export function postSlugs(): string[] {
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export async function loadPost(slug: string): Promise<{ meta: Post; Content: ComponentType }> {
  const mod = await import(`@/content/blog/${slug}.mdx`);
  return { meta: { ...(mod.metadata as PostMeta), slug }, Content: mod.default };
}

export async function allPosts(): Promise<Post[]> {
  const posts = await Promise.all(postSlugs().map(async (s) => (await loadPost(s)).meta));
  return posts
    .filter((p) => !p.draft || process.env.NODE_ENV !== "production")
    .sort((a, b) => b.date.localeCompare(a.date));
}

export const formatDate = (d: string) =>
  new Date(`${d}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
