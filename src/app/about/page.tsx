import type { Metadata } from "next";
import { site } from "@/lib/site";
import { InnerHero } from "@/components/InnerHero";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "About CoreDevAI and Jawad Mughal",
  description: "CoreDevAI is a founder-led QA studio run by Jawad Mughal, a developer who built web and mobile apps before moving to testing full-time.",
  alternates: { canonical: "/about" },
};

const how = [
  { name: "You talk to the tester", detail: "No account manager. The person who tests your app writes the report and answers your questions." },
  { name: "Reports a developer can use", detail: "Module, steps, actual and expected result, severity and priority for every bug." },
  { name: "Business risk first", detail: "Lost signups and failed payments are fixed before misaligned buttons." },
  { name: "Your data stays yours", detail: "We test on staging with test accounts, and never show a client's product without permission." },
];

export default function AboutPage() {
  return (
    <>
      <main id="top">
        <InnerHero
          kicker="Founder-led QA studio, based in Pakistan"
          title="A developer who now tests your product"
          lead="CoreDevAI is run by Jawad Mughal. He built web and mobile apps for clients, then moved to software testing full-time in September 2026."
          visual={<img className="shot" style={{ height: "100%", aspectRatio: "auto" }} src="/work/gymanger.jpg" alt="Gymanger, a gym management SaaS Jawad built and tested himself" />}
          secondary={{ href: "#story", label: "Read the story" }}
        />

        <section className="section" id="story" aria-labelledby="story-h">
          <div className="wrap">
            <div className="grid grid--top fill">
              <div className="span-5">
                <div className="section-head"><h2 id="story-h">Why a developer moved to QA</h2></div>
                <div className="stack-4">
                  <p>Jawad spent over a year building web apps with MERN, Next.js and React Native: a gym management SaaS, a CRM, a fintech dashboard and client sites that are still live.</p>
                  <p>Testing his own SaaS products showed him where bugs hide: in the numbers, in forms that accept anything, and in flows nobody clicks twice. Today he tests manually and with Playwright and Postman, on web, Android and iOS.</p>
                  <p>One engineer means a few projects at a time, and you always know who is testing your app.</p>
                </div>
              </div>
              <div className="span-6 start-7">
                <ul className="rows">
                  {how.map((h) => (
                    <li key={h.name}><span className="rows__name">{h.name}<small>{h.detail}</small></span></li>
                  ))}
                </ul>
                <p style={{ marginTop: 24 }}><a className="link" href={site.linkedin}>CoreDevAI on LinkedIn</a></p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
