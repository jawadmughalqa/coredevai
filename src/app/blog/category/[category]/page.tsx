import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allPosts, categories, formatDate } from "@/lib/posts";
import { SiteFooter } from "@/components/SiteFooter";

export const dynamicParams = false;
export function generateStaticParams() {
  return Object.keys(categories).map((category) => ({ category }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const c = categories[category];
  if (!c) return {};
  return { title: `${c.name} articles`, description: c.description, alternates: { canonical: `/blog/category/${category}` } };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const c = categories[category];
  if (!c) notFound();
  const posts = (await allPosts()).filter((p) => p.category === category);
  return (
    <>
      <main id="top">
        <section className="section section--flow" aria-labelledby="cat-h">
          <div className="wrap">
            <p className="t-small"><a className="link" href="/blog">Blog</a></p>
            <div className="section-head"><h1 id="cat-h">{c.name} articles</h1><p>{c.description}</p></div>
            {posts.length === 0 ? (
              <p>The first article in this topic is being written. <a className="link" href="/blog">Read the others</a>.</p>
            ) : (
              <ul className="post-list">
                {posts.map((p) => (
                  <li key={p.slug}><a href={`/blog/${p.slug}`}><span className="t-small muted">{formatDate(p.date)} · {p.readTime}</span><h2>{p.title}</h2><p>{p.description}</p></a></li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
