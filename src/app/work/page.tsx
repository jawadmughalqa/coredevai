import type { Metadata } from "next";
import { report } from "@/lib/site";
import { BugCards, WorkGrid } from "@/components/Proof";
import { InnerHero } from "@/components/InnerHero";
import { ReportWindow } from "@/components/ReportWindow";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Work: a real 57-bug report and eight shipped products",
  description: "A real QA report from a team management web app, 57 bugs sorted by severity, and eight live products CoreDevAI built.",
  alternates: { canonical: "/work" },
};

const patterns = [
  { name: "Wrong permission error on invalid or long input", bugs: 7 },
  { name: "Required-field asterisk missing", bugs: 4 },
  { name: "Validation errors in an alert, not beside the field", bugs: 4 },
  { name: "Extreme numbers accepted or shown as 1e+26", bugs: 4 },
  { name: "Long text cut off or not validated", bugs: 4 },
  { name: "“All” option missing from a filter", bugs: 2 },
];

export default function WorkPage() {
  return (
    <>
      <main id="top">
        <InnerHero
          kicker={`${report.total} bugs, ${report.high} High, in one report`}
          title="Our work: QA reports and shipped products"
          lead="A real bug report from a team management web app, and eight products we built and put live before we moved to testing."
          visual={<ReportWindow />}
          secondary={{ href: "#report", label: "See three of the bugs" }}
        />

        <section className="section" id="report" aria-labelledby="report-h">
          <div className="wrap">
            <div className="section-head"><h2 id="report-h">Three High bugs from the report</h2><p>{report.scope} Each bug went to the developers with steps, the actual result and the expected result.</p></div>
            <BugCards />
          </div>
        </section>

        <section className="section" id="patterns" aria-labelledby="patterns-h">
          <div className="wrap">
            <div className="grid grid--top fill">
              <div className="span-5">
                <div className="section-head"><h2 id="patterns-h">Six patterns behind the bugs</h2><p>Grouping bugs by cause lets one fix close several. These six cover 23 of the {report.total}.</p></div>
                <ul className="rows">
                  {patterns.map((p) => (
                    <li key={p.name}><span className="rows__name">{p.name}</span><span className="rows__value">{p.bugs} bugs</span></li>
                  ))}
                </ul>
              </div>
              <div className="panel-card span-6 start-7">
                <h3>The verdict and the fix order</h3>
                <p>{report.verdict}</p>
                <ol className="rows">
                  <li><span className="rows__name">High bugs in capacity, allocation, reports and payroll</span><span className="rows__value">First</span></li>
                  <li><span className="rows__name">Blocked admin tasks: leave, managers</span><span className="rows__value">Second</span></li>
                  <li><span className="rows__name">Validation on IBAN, RAAST ID and phone fields</span><span className="rows__value">Third</span></li>
                  <li><span className="rows__name">Layout and labelling</span><span className="rows__value">Last</span></li>
                </ol>
                <p><a className="link" href="/blog/57-bugs-six-patterns">Read the full write-up</a></p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="builds" aria-labelledby="builds-h">
          <div className="wrap">
            <div className="section-head"><h2 id="builds-h">Eight products we built and shipped</h2><p>Each one is live. Open a tile to see it.</p></div>
            <WorkGrid meta="line" />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
