import type { MetadataRoute } from "next";
import { allPosts, categories } from "@/lib/posts";
import { services, site } from "@/lib/site";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await allPosts();
  const pages = ["", "/services", "/work", "/about", "/contact", "/blog"].map((p) => ({
    url: `${site.url}${p}`,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.8,
  }));
  return [
    ...pages,
    ...services.map((s) => ({ url: `${site.url}/services/${s.slug}`, changeFrequency: "monthly" as const, priority: 0.9 })),
    ...posts.map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: p.updated ?? p.date, priority: 0.7 })),
    ...Object.keys(categories).map((c) => ({ url: `${site.url}/blog/category/${c}`, priority: 0.5 })),
    { url: `${site.url}/privacy`, priority: 0.2 },
    { url: `${site.url}/terms`, priority: 0.2 },
  ];
}
