import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService, services, site } from "@/lib/site";
import { InnerHero } from "@/components/InnerHero";
import { SiteFooter } from "@/components/SiteFooter";
import { JsonLd } from "@/components/JsonLd";

export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const s = getService((await params).slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.description,
    keywords: s.keywords,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: s.title, description: s.description, url: `${site.url}/services/${s.slug}` },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const s = getService((await params).slug);
  if (!s) notFound();
  const others = services.filter((o) => o.slug !== s.slug);

  return (
    <>
      <main id="top">
        <InnerHero
          kicker={s.value}
          title={s.h1}
          lead={s.lead}
          secondary={{ href: "#how", label: "See how it works" }}
          visual={
            <div className="panel-card" style={{ height: "100%" }}>
              <h2 className="t-card" style={{ margin: 0 }}>What you get</h2>
              <ul className="rows">
                {s.includes.map((i) => (
                  <li key={i.name}><span className="rows__name">{i.name}<small>{i.detail}</small></span></li>
                ))}
              </ul>
            </div>
          }
        />

        <section className="section" id="how" aria-labelledby="how-h">
          <div className="wrap">
            <div className="grid grid--top fill">
              <div className="span-5">
                <div className="section-head"><h2 id="how-h">How it works, in 3 steps</h2></div>
                <ol className="rows">
                  {s.steps.map((st, i) => (
                    <li key={st.name}><span className="rows__name">{st.name}<small>{st.detail}</small></span><span className="rows__value">Step {i + 1}</span></li>
                  ))}
                </ol>
              </div>
              <div className="faq span-6 start-7">
                {s.faq.map((f) => (
                  <div className="faq__item" key={f.q}><h3>{f.q}</h3><p>{f.a}</p></div>
                ))}
                <div className="faq__item">
                  <h3>Other services</h3>
                  <p>{others.map((o, i) => (<span key={o.slug}>{i > 0 && " · "}<a className="link" href={`/services/${o.slug}`}>{o.name}</a></span>))}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: s.name,
              serviceType: s.title,
              description: s.description,
              provider: { "@id": `${site.url}/#org` },
              areaServed: "Worldwide",
              url: `${site.url}/services/${s.slug}`,
            },
            {
              "@type": "FAQPage",
              mainEntity: s.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Services", item: `${site.url}/services` },
                { "@type": "ListItem", position: 2, name: s.name, item: `${site.url}/services/${s.slug}` },
              ],
            },
          ],
        }}
      />
    </>
  );
}
