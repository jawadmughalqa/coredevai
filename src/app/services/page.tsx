import type { Metadata } from "next";
import { services } from "@/lib/site";
import { InnerHero } from "@/components/InnerHero";
import { ReportWindow } from "@/components/ReportWindow";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "QA testing and test automation services",
  description: "Launch testing, Playwright automation, API testing, AI app testing and AI automation for SaaS teams. Founder-led, report in 48 hours.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <main id="top">
        <InnerHero
          kicker="Five services, one engineer you talk to"
          title="QA and automation services for SaaS teams"
          lead="Start with a Money Flow Check before launch. Then keep the same flows covered with Playwright, test the API under them, and check the AI features users will push hardest."
          visual={<ReportWindow />}
          secondary={{ href: "#list", label: "See the services" }}
        />
        <section className="section" id="list" aria-labelledby="list-h">
          <div className="wrap">
            <div className="section-head"><h2 id="list-h">The services and what each one delivers</h2></div>
            <ul className="rows">
              {services.map((s) => (
                <li key={s.slug}>
                  <span className="rows__name"><a href={`/services/${s.slug}`}>{s.name}</a><small>{s.short}</small></span>
                  <span className="rows__value">{s.value}</span>
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
