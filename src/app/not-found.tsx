import { SiteFooter } from "@/components/SiteFooter";

export default function NotFound() {
  return (
    <>
      <main id="top">
        <section className="section" aria-labelledby="nf-h">
          <div className="wrap">
            <div className="section-head">
              <h1 id="nf-h">Page not found</h1>
              <p>This page has moved or never existed. Bug report filed, Severity: Low.</p>
            </div>
            <div className="btn-row"><a className="btn btn--primary" href="/">Go to the home page</a><a className="btn btn--secondary" href="/blog">Read the blog</a></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
