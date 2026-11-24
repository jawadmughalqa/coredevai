import type { Metadata } from "next";
import { report, services, site } from "@/lib/site";
import { ReportWindow } from "@/components/ReportWindow";
import { BugCards, WorkGrid } from "@/components/Proof";
import { BookForm } from "@/components/BookForm";
import { SiteFooter, arrow } from "@/components/SiteFooter";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: { absolute: "CoreDevAI: QA testing and Playwright automation for SaaS teams" },
  alternates: { canonical: "/" },
};

const faq = [
  { q: "What does a Money Flow Check cost?", a: "It depends on the size of the app. Send a link and we reply with a fixed price." },
  { q: "Which devices do you test on?", a: "A desktop browser, one Android phone and one iPhone." },
  { q: "Can you automate the tests afterwards?", a: "Yes. We write Playwright tests for the flows we checked and run them in GitHub Actions." },
  { q: "Do you test AI features?", a: "Yes. We check chatbots and LLM features for wrong answers, unsafe replies and prompt regressions." },
  { q: "Where are you based?", a: "In Pakistan, working with teams abroad over email and WhatsApp." },
];

export default function HomePage() {
  return (
    <>
      <main id="top">
        <section className="hero hero--split" data-enter aria-labelledby="hero-h">
          <div className="wrap"><div className="hero-text grid hero__grid">
            <div className="hero__text span-5">
              <p className="hero__kicker"><span className="dot" aria-hidden="true" />Money Flow Check: a bug report in 48 hours</p>
              <h1 id="hero-h">QA testing for SaaS teams before launch</h1>
              <p className="hero__lead">We test signup, login and payments on the web, one Android phone and one iPhone, then send a bug report sorted by severity, with steps your developers can follow.</p>
              <div className="btn-row">
                <a className="btn btn--primary" href="#book">{site.mainAction}{arrow}</a>
                <a className="btn btn--secondary" href="#report">See a real bug report</a>
              </div>
            </div>
            <div className="hero__media span-6 start-7">
              <ReportWindow />
              <div className="ly-float">
                <div className="ly-float__row"><span className="ly-live">BUG-024</span><span>High</span></div>
                <div className="ly-float__title">31 hours booked to one person in a single day</div>
              </div>
            </div>
          </div></div>
        </section>

        <section className="section" id="services" style={{ ["--hm" as string]: 2 }} aria-labelledby="services-h">
          <div className="wrap">
            <div className="grid grid--top fill">
              <div className="span-5">
                <div className="section-head"><h2 id="services-h">Testing and automation services</h2></div>
                <ul className="rows">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <span className="rows__name"><a href={`/services/${s.slug}`}>{s.name}</a><small>{s.short}</small></span>
                      <span className="rows__value">{s.value}</span>
                    </li>
                  ))}
                </ul>
                <p><a className="link" href="/services">Compare the services</a></p>
              </div>
              <div className="frame frame--photo frame--fill span-6 start-7">
                <img className="frame__img" src="/work/gymanger.jpg" alt="Gymanger home page: gym management software with a dashboard of members, revenue and bookings" loading="lazy" data-source="client" data-subject="Gymanger, a SaaS Jawad built and tested" />
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="report" style={{ ["--hm" as string]: 2 }} aria-labelledby="report-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="report-h">One real report: {report.total} bugs. <span className="muted">{report.high} of them High.</span></h2>
              <p>From a team management web app, tested as Admin. Three of the High bugs, as the developers received them:</p>
            </div>
            <BugCards />
            <p className="t-small" style={{ marginTop: 24 }}>The full report also groups the bugs into {report.patterns} recurring patterns, so one fix closes several, and adds {report.enhancements} enhancement suggestions.</p>
          </div>
        </section>

        <section className="section statement" id="verdict" data-moment="word-highlight" aria-label="The verdict">
          <div className="wrap">
            <p className="t-label">The verdict on page one of that report</p>
            <p className="mo-wh__text">The biggest risk in this build was <strong>numbers</strong> that don&rsquo;t add up, not crashes. Managers could plan work and pay people from wrong data, and no error message would say so.</p>
          </div>
        </section>

        <section className="section" id="work" style={{ ["--hm" as string]: 2 }} aria-labelledby="work-h">
          <div className="wrap">
            <div className="section-head"><h2 id="work-h">Eight products we built and shipped</h2><p>We tested our own code before we tested anyone else&rsquo;s. These are live.</p></div>
            <WorkGrid />
          </div>
        </section>

        <section className="section" id="about" style={{ ["--hm" as string]: 2 }} aria-labelledby="about-h">
          <div className="wrap">
            <div className="grid grid--top fill">
              <div className="span-5">
                <div className="section-head"><h2 id="about-h">Built by a developer who now tests</h2></div>
                <div className="stack-4">
                  <p>CoreDevAI is run by Jawad Mughal. He built web and mobile apps with MERN, Next.js and React Native, then moved to testing full-time in September 2026.</p>
                  <p>He has tested three SaaS products he built himself, including Gymanger. That is why the reports name the module, the steps and the expected result: written by someone who has fixed bugs like them.</p>
                  <p>One engineer means we take a small number of projects at a time.</p>
                  <p><a className="link" href="/about">Read how we work</a></p>
                </div>
              </div>
              <figure className="develop span-6 start-7" data-moment="picture-develops">
                <img src="/work/gymanger.jpg" alt="Gymanger, the gym management SaaS Jawad built and tested" width={1440} height={900} loading="lazy" />
              </figure>
            </div>
          </div>
        </section>

        <section className="section" id="faq" style={{ ["--hm" as string]: 2 }} aria-labelledby="faq-h">
          <div className="wrap">
            <div className="grid grid--top fill">
              <div className="span-5">
                <div className="section-head"><h2 id="faq-h">Questions</h2><p>Ask anything else by email or WhatsApp.</p></div>
                <p><a className="link" href={site.whatsapp}>Message us on WhatsApp</a></p>
              </div>
              <div className="faq span-6 start-7">
                {faq.map((f) => (
                  <div className="faq__item" key={f.q}><h3>{f.q}</h3><p>{f.a}</p></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="book" style={{ ["--hm" as string]: 2 }} aria-labelledby="book-h">
          <div className="wrap">
            <div className="grid grid--top fill">
              <div className="span-5">
                <div className="section-head"><h2 id="book-h">Book a Money Flow Check</h2><p>Signup, login and checkout on the web, one Android phone and one iPhone. Price on request.</p></div>
                <ol className="rows">
                  <li><span className="rows__name">Send a staging link<small>Plus two test accounts and a test card. No code access.</small></span><span className="rows__value">Day 0</span></li>
                  <li><span className="rows__name">We test the money flows<small>Happy paths first, then wrong input, long text, back buttons and slow networks.</small></span><span className="rows__value">Day 1</span></li>
                  <li><span className="rows__name">You get the report<small>Steps, actual and expected result for every bug, High bugs first.</small></span><span className="rows__value">Day 2</span></li>
                </ol>
                <p className="t-small muted" style={{ marginTop: 24 }}>Prefer email? <a className="link" href={`mailto:${site.email}`}>Email us</a>.</p>
              </div>
              <div className="panel-card span-6 start-7"><BookForm /></div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter href="#book" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
    </>
  );
}
