import { SiteFooter } from "./SiteFooter";

export function LegalPage({ title, updated, sections }: { title: string; updated: string; sections: { title: string; body: string[] }[] }) {
  return (
    <>
      <main id="top">
        <section className="section section--flow" aria-labelledby="legal-h">
          <div className="wrap">
            <h1 id="legal-h">{title}</h1>
            <p className="article-meta">Last updated: {updated}</p>
            <div className="prose" style={{ marginTop: 48 }}>
              {sections.map((s) => (
                <div key={s.title}>
                  <h2>{s.title}</h2>
                  {s.body.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
