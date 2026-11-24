import type { Metadata } from "next";
import { allPosts, categories, formatDate } from "@/lib/posts";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "QA testing and Playwright automation blog",
  description: "Practical articles on SaaS launch testing, bug reports, Playwright automation, API testing and testing AI features, from real projects.",
  alternates: { canonical: "/blog", types: { "application/rss+xml": "/blog/rss.xml" } },
};

export default async function BlogPage() {
  const posts = await allPosts();
  return (
    <>
      <main id="top">
        <section className="section section--flow" aria-labelledby="blog-h">
          <div className="wrap">
            <div className="section-head">
              <h1 id="blog-h">QA and test automation blog</h1>
              <p>What we learn testing real products: launch checks, bug reports, Playwright, APIs and AI features.</p>
            </div>
            <p className="article-meta">
              {Object.entries(categories).map(([slug, c]) => (
                <a className="link" key={slug} href={`/blog/category/${slug}`}>{c.name}</a>
              ))}
            </p>
            <ul className="post-list">
              {posts.map((p) => (
                <li key={p.slug}>
                  <a href={`/blog/${p.slug}`}>
                    <span className="t-small muted">{categories[p.category]?.name} · {formatDate(p.date)} · {p.readTime}</span>
                    <h2>{p.title}</h2>
                    <p>{p.description}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
