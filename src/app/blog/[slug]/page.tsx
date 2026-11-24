import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allPosts, categories, formatDate, loadPost, postSlugs } from "@/lib/posts";
import { site } from "@/lib/site";
import { SiteFooter } from "@/components/SiteFooter";
import { JsonLd } from "@/components/JsonLd";

export const dynamicParams = false;
export function generateStaticParams() {
  return postSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { meta } = await loadPost((await params).slug);
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: site.founder, url: `${site.url}/about` }],
    alternates: { canonical: `/blog/${meta.slug}` },
    robots: meta.draft ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "article",
      title: meta.title,
      description: meta.description,
      url: `${site.url}/blog/${meta.slug}`,
      publishedTime: meta.date,
      modifiedTime: meta.updated ?? meta.date,
      authors: [site.founder],
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!postSlugs().includes(slug)) notFound();
  const { meta, Content } = await loadPost(slug);
  const cat = categories[meta.category];
  const related = (await allPosts()).filter((p) => p.slug !== slug).slice(0, 3);
  const url = `${site.url}/blog/${slug}`;

  return (
    <>
      <main id="top">
        <article className="section section--flow" aria-labelledby="post-h">
          <div className="wrap">
            <p className="t-small"><a className="link" href="/blog">Blog</a> / <a className="link" href={`/blog/category/${meta.category}`}>{cat?.name}</a></p>
            <h1 id="post-h" className="measure">{meta.title}</h1>
            <p className="article-meta">
              <span>By <a className="link" href="/about">{site.founder}</a></span>
              <time dateTime={meta.date}>{formatDate(meta.date)}</time>
              {meta.updated && <span>Updated <time dateTime={meta.updated}>{formatDate(meta.updated)}</time></span>}
              <span>{meta.readTime}</span>
            </p>
            <div className="prose" style={{ marginTop: 48 }}>
              <Content />
            </div>
            <div className="cta-box">
              <p>Launching soon? We test signup, login and payments on web, Android and iPhone and send the bug report in 48 hours.</p>
              <a className="btn btn--primary" href="/contact">{site.mainAction}</a>
            </div>
            {related.length > 0 && (
              <div style={{ marginTop: 64 }}>
                <h2>More articles</h2>
                <ul className="post-list">
                  {related.map((p) => (
                    <li key={p.slug}><a href={`/blog/${p.slug}`}><h3>{p.title}</h3><p>{p.description}</p></a></li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </article>
      </main>
      <SiteFooter />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BlogPosting",
              headline: meta.title,
              description: meta.description,
              datePublished: meta.date,
              dateModified: meta.updated ?? meta.date,
              author: { "@type": "Person", name: site.founder, url: `${site.url}/about` },
              publisher: { "@id": `${site.url}/#org` },
              mainEntityOfPage: url,
              url,
              keywords: meta.keywords?.join(", "),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Blog", item: `${site.url}/blog` },
                { "@type": "ListItem", position: 2, name: cat?.name, item: `${site.url}/blog/category/${meta.category}` },
                { "@type": "ListItem", position: 3, name: meta.title, item: url },
              ],
            },
          ],
        }}
      />
    </>
  );
}
