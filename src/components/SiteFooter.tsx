import { services, site } from "@/lib/site";
import { Logo } from "./Logo";

const arrow = (
  <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true"><path className="m-arrow__stem" d="M1 6h8" /><path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" /></svg>
);

// footer-columns with the close-type close: row 1 asks for the main action once more, row 2 the links.
export function SiteFooter({ href = "/contact", line = "A bug report in 48 hours. Price on request." }: { href?: string; line?: string }) {
  return (
    <footer className="footer closing" id="contact" aria-labelledby="close-h">
      <div className="wrap">
        <div className="closing__cta close--type">
          <div className="section-head">
            <h2 id="close-h">Find the bugs before your users do</h2>
            <p className="t-small muted">{line}</p>
          </div>
          <a className="btn btn--primary btn--xl btn--wide" href={href}>{site.mainAction}{arrow}</a>
        </div>
        <div className="closing__links">
          <div className="grid">
            <div className="span-4 stack-4">
              <Logo />
              <p className="footer__lede">QA and test automation for SaaS teams.</p>
            </div>
            <div className="span-2 footer__col">
              <h3>Services</h3>
              <ul>
                {services.slice(0, 4).map((s) => (
                  <li key={s.slug}><a href={`/services/${s.slug}`}>{s.name}</a></li>
                ))}
              </ul>
            </div>
            <div className="span-2 footer__col">
              <h3>Work</h3>
              <ul>
                <li><a href="/work">Projects</a></li>
                <li><a href="/work#report">Sample bug report</a></li>
              </ul>
            </div>
            <div className="span-2 footer__col">
              <h3>About</h3>
              <ul>
                <li><a href="/about">Jawad Mughal</a></li>
                <li><a href="/blog">Blog</a></li>
              </ul>
            </div>
            <div className="span-2 footer__col">
              <h3>Contact</h3>
              <ul>
                <li><a href={`mailto:${site.email}`}>Email us</a></li>
                <li><a href={site.whatsapp}>WhatsApp</a></li>
                <li><a href={site.linkedin}>LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="footer__legal">
            <span>&copy; 2026 CoreDevAI &nbsp; <a href="/privacy">Privacy</a> &nbsp; <a href="/terms">Terms</a></span>
            <div className="socials" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export { arrow };
